import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
     constructor(private prisma: PrismaService) {}

  async getMovies(
  ): Promise<any[]> {
    return this.prisma.movie.findMany();
  }

 async getRandomMovies(random:string
  ): Promise<any[]> {
    console.log(random.split(","))
    return this.prisma.movie.findMany();
  }

}
