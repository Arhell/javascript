import {model, Schema, Document} from "mongoose"

export interface UserModelInterface {
  email: string
  fullname: string
  username: string
  password: string
  confirmHash: string
  confirmed?: boolean
  location?: string
  about?: string
  website?: string
}

type UserModelDocumentInterface = UserModelInterface & Document

const UserSchema = new Schema<UserModelInterface>({
  email: {
    unique: true,
    required: true,
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  username: {
    unique: true,
    required: true,
    type: String
  },
  location: String,
  password: {
    required: true,
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmHash: {
    required: true,
    type: String,
  },
  about: String,
  website: String,
})

UserSchema.set('toJSON', {
  // @ts-ignore
  transform: function (_, obj) {
    delete obj.password
    delete obj.confirmHash
    return obj
  }
})

export const UserModel = model<UserModelDocumentInterface>('User', UserSchema)
