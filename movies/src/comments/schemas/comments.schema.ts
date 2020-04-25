import * as mongoose from 'mongoose';

export const CommentsSchema = mongoose.Schema({
	username: String,
	body: String
});
