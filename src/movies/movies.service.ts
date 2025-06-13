import { Injectable } from '@nestjs/common';
import { Movie } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
     constructor(private prisma: PrismaService) {}

  async getMovies(
  ): Promise<Movie[]> {
    return this.prisma.movie.findMany();
  }

 async getRandomMovies(random:string
  ): Promise<Movie[]> {
    console.log(random.split(","))
    return this.prisma.movie.findMany();
  }

}
