import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    async getMovies():Promise<any[]>{

      return this.moviesService.getMovies();
    }

    @Get(":random")
    async gettenRandomMovies(@Param("random") random:string):Promise<any[]>{

      return this.moviesService.getRandomMovies(random);
    }
}
