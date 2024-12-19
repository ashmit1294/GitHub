// src/services/Auth.service.ts
import { UserRepository } from '../repositories/User.repository';
import { IUser } from '../models/User.model';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(userData: IUser) {
    // Check if user already exists
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create new user
    return this.userRepository.create(userData);
  }
}
