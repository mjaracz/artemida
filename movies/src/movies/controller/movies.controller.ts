import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {MoviesService} from '../service/movies.service';
import {CreateMovieDto} from '../dto/create-movie.dto';
import {Movies} from '../interfaces/movies.interface';

@Controller('movies')
export class MoviesController {
	constructor(
		private readonly moviesService: MoviesService
	) {}

	@Get()
	async getAllMovies(): Promise<Movies[]> {
		return this.moviesService.findAll()
	}
	@Get('details/:title')
	async findMovieByTitle(@Param('title') title: string) {
		return this.moviesService.findByTitle(title);
	}
	@Post('create')
	async createMovies(@Body() createMovieDto: CreateMovieDto) {
		return await this.moviesService.create(createMovieDto)
	}
	@Delete('delete/:id')
	async deleteMovie(@Param('id') id: string) {
		return this.moviesService.delete(id)
	}
}
