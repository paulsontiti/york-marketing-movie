import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';

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
    const randomIndices = random.split(",");
    const movies = await this.prisma.movie.findMany();
    const randonMovies:Movie[] = [];

    randomIndices.forEach((index)=>{
 
      randonMovies.push(movies[parseInt(index)]);
    })
   
    return randonMovies;
  }

}
