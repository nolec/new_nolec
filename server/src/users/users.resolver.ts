import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserInput } from './inputs/user.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserType])
  getUsers() {
    return this.usersService.findAll();
  }
  @Mutation(() => UserType)
  createUser(@Args('input') input: UserInput) {
    return this.usersService.createUser(input);
  }
  @Mutation(() => UserType)
  updateUser(@Args('input') input: UserInput) {
    return this.usersService.upedateUser(input);
  }
}
