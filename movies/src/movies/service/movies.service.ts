import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {Movies} from '../interfaces/movies.interface';
import {InjectModel} from '@nestjs/mongoose';
import {CreateMovieDto} from '../dto/create-movie.dto';
import * as fetchModule from 'node-fetch';

require('dotenv').config();

@Injectable()
export class MoviesService {
	constructor(
		@InjectModel('Movies')
		private readonly moviesModule: Model<Movies>
	) {}

	async create(createMovieDto: CreateMovieDto) {
		const createdMovies = new this.moviesModule(createMovieDto);
		return createdMovies.save();
	}

	async findAll(): Promise<Movies[]> {
		return this.moviesModule.find().exec();
	}

	async findByTitle(title: string): Promise<any> {
		return fetchModule(`http://www.omdbapi.com/?apikey=${process.env.OMDBAPI_APIKEY}&t=${title}`)
			.then(res => res.json());
	}

	async delete(id: string) {
		return this.moviesModule.findOneAndRemove({_id: id})
	}
}
