import {body} from "express-validator";

export const registerValidations = [
  body('email', 'Enter email').isEmail().withMessage("Error").isLength({
    min: 10,
    max: 40
  }).withMessage("Error2"),
  body('fullname', 'Enter name').isString().withMessage("Error3").isLength({
    min: 2,
    max: 40
  }).withMessage("Error4"),
  body('username', 'Enter login').isString().withMessage("Error5").isLength({
    min: 2,
    max: 40
  }).withMessage("Error6"),
  body('password', 'Enter password').isString().isLength({
    min: 6,
  }).withMessage("Error7")
    .custom((value, {req}) => {
      if(value != req.body.password2) {
        throw new Error("Error9")
      } else {
        return value
      }
    })
]