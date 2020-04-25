import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {CommentsService} from '../service/comments.service';
import {CommentDto} from "../dto/comment.dto";

@Controller('comments')
export class CommentsController {
	constructor(
		private readonly commentsService: CommentsService
	) {}

	@Get()
	findAll() {
		return this.commentsService.findAllComments();
	}
	@Get('search')
	findByUsername(
		@Query('username') username: string,
		@Query('title') movieTitle: string
	) {
		return this.commentsService.findCommentByUsername(username, movieTitle);
	}
	@Post('create')
	saveByUsername(
		@Query('title') titleMovie: string,
		@Body() commentDto: CommentDto
	) {
		return this.commentsService.createCommentByMovieTitle(titleMovie, commentDto)
	}
}
