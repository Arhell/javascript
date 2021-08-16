import {model, Schema, Document} from "mongoose"

export interface TweetModelInterface {
  _id?: string
  text: string
  user: string
}

export type TweetModelDocumentInterface = TweetModelInterface & Document

const TweetSchema = new Schema<TweetModelInterface>({
  text: {
    required: true,
    type: String,
    maxLength: 280,
  },
  user: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId
  },
})

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema)
