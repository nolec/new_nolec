import { ObjectType, Field } from '@nestjs/graphql';
//DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체
@ObjectType()
export class UserType {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
