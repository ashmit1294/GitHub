import { UserModel, IUser } from '../models/User.model';
import bcrypt from 'bcryptjs';

export class UserRepository {
  async create(userData: IUser) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const user = new UserModel({
      ...userData,
      password: hashedPassword
    });

    return user.save();
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }
}
