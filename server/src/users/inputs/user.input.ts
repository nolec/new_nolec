import { InputType, Field } from '@nestjs/graphql';
//DB에 넣을 Args 들을 InputType Class 로 정의
@InputType()
export class UserInput {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
