// src/controllers/Auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/Auth.service';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response) => {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json({ 
        message: 'User registered successfully', 
        userId: user._id 
      });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  login = async (req: Request, res: Response) => {
    // Implement login logic
  }
}
