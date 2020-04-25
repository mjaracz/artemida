import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Movies} from '../../movies/interfaces/movies.interface';
import {CommentDto} from '../dto/comment.dto';

@Injectable()
export class CommentsService {
	constructor(
		@InjectModel('Movies')
		private readonly moviesModule: Model<Movies>
	) {}

	async findAllComments() {
		let allComments = [];
		const allMoviesQuery = await this.moviesModule.find().exec();
		await allMoviesQuery.forEach(movie => {
			allComments = movie.comments
		});
		return allComments;
	}

	async findCommentByUsername(username: string, title: string) {
		let searchComments = [];
		const moviesQuery: Movies[] = await this.moviesModule.find({ title: title }).exec();

		await moviesQuery.forEach(movie => {
			searchComments = movie.comments.filter((comment) => comment.username === username)
		});
		return searchComments;
	}

	async createCommentByMovieTitle(movieTitle: string, newComment: CommentDto) {
		const searchMovieQuery = await this.moviesModule.findOne({ title: movieTitle }).exec();
		const commentsUpdatedArray = [
			...searchMovieQuery.comments,
			newComment
		];
		return await this.moviesModule.findOneAndUpdate({ title: movieTitle }, { comments: commentsUpdatedArray }, { new: true });
	}
}
