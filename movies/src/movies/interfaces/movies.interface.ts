import {Comments} from '../../comments/interfaces/comments.interface';

export interface Movies {
	title: string;
	description: string;
	comments: Comments[]
}
