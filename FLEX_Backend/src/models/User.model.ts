// src/models/User.model.ts
import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
