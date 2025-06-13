import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from "../../generated/prisma";

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    async getMovies():Promise<Movie[]>{

      return this.moviesService.getMovies();
    }

    @Get(":random")
    async gettenRandomMovies(@Param("random") random:string):Promise<Movie[]>{

      return this.moviesService.getRandomMovies(random);
    }
}
