import {body} from "express-validator";

export const createTweetValidations = [
  body('text', 'Enter text').isString().isLength({
    max: 280
  }).withMessage("Error2"),
]