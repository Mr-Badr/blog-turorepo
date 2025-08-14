import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class SignInInput {
  @Field()
  email: string;

  @Field()
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
  @IsString()
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
  @MinLength(1)
  password: string;
}
