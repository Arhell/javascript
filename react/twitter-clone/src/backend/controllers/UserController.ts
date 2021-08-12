import express from "express";
import mongoose from 'mongoose'
import {UserModel, UserModelInterface} from '../models/UserModel'
import {validationResult} from 'express-validator'
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";

const isValidObjectId = mongoose.Types.ObjectId.isValid

class UserController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec()

      res.json({
        status: 'success',
        data: users
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async show(req: any, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id

      if(!isValidObjectId(userId)) {
        res.status(400).send()
        return
      }

      const user = await UserModel.findById(userId).exec()


      if(!user) {
        res.status(404).send()
        return
      }

      res.json({
        status: 'success',
        data: user
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        res.status(400).json({ status: "error", errors: errors.array()})
        return
      }

      const data: UserModelInterface = {
        email: req.body.email,
        fullname: req.body.fullname,
        username: req.body.username,
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
      }

      const user = await UserModel.create(data)


      sendEmail({
        emailFrom: 'test@test.com',
        emailTo: data.email,
        subject: 'Some text',
        html: `some html <a href="http://localhost:${process.env.PORT || 8888}/users/verify?hash=${data.confirmHash}">Some text</a>>`,
      }, (err: Error | null) => {
        if (err) {
          res.status(500).json({
            status: 'error',
            message: err
          })
        } else  {
          res.status(201).json({
            status: 'success',
            data: user
          })
        }
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async verify(req: any, res: express.Response): Promise<void> {
    try {
      const hash = req.quary.hash

      if(!hash) {
        res.status(400).send()
        return
      }

      const user = await UserModel.findOne({confirmHash: hash}).exec()

      if(user) {
        user.confirmed = true
        user.save()

        res.json({
          status: 'success',
        })
      } else {
        res.status(404).json({
          status: 'error',
          message: 'Not found'
        })
      }

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }
}

export const UserCtrl = new UserController();
