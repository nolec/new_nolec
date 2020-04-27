import { Document } from 'mongoose';
//mongoDB의 스키마에 데이터를 넣어줄 때 사용할 인터페이스
export interface User extends Document {
  readonly name: string;
  readonly email: string;
  password: string;
}
