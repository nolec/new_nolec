import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { UserInput } from './inputs/user.input';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    createUser(inputsForCreateUser: UserInput): Promise<User>;
    upedateUser(inputsForUpdateUser: UserInput): Promise<any>;
}
