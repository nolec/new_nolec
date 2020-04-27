import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(
      'mongodb://nolec:nolec@nolec-shard-00-00-a3hlx.mongodb.net:27017,nolec-shard-00-01-a3hlx.mongodb.net:27017,nolec-shard-00-02-a3hlx.mongodb.net:27017/test?ssl=true&replicaSet=nolec-shard-0&authSource=admin&retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
  ],
})
export class AppModule {}
