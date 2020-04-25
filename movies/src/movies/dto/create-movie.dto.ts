import {CommentDto} from "../../comments/dto/comment.dto";

export class CreateMovieDto {
	readonly title: string;
	readonly description: string;
	readonly comments: CommentDto[];
}
