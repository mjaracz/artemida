import * as mongoose from 'mongoose';
import {CommentsSchema} from '../../comments/schemas/comments.schema';

export const MoviesSchema = new mongoose.Schema({
	title: String,
	description: String,
	comments: [CommentsSchema]
});
