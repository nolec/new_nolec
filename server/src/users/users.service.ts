import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async createUser(inputsForCreateUser: UserInput): Promise<User> {
    const newUser = new this.userModel(inputsForCreateUser);
    return await newUser.save();
  }
  async upedateUser(inputsForUpdateUser: UserInput): Promise<any> {
    await this.userModel.findOneAndUpdate(
      { email: inputsForUpdateUser.email },
      {
        $set: {
          name: inputsForUpdateUser.name,
          password: inputsForUpdateUser.password,
        },
      },
      { new: true },
    );
    const user = this.userModel.findOne({ email: inputsForUpdateUser.email });
    console.log(user);
    return user;
  }
}
