import { Resolver, Query } from '@nestjs/graphql';
import { CommentEntity } from './entities/comment.entity';

import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [CommentEntity], { name: 'comments' })
  findAll() {
    return this.prisma.comment.findMany();
  }
}
