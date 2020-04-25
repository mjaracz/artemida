import {Module} from '@nestjs/common';
import {MoviesModule} from './movies/movies.module';
import {MongooseModule} from '@nestjs/mongoose';
import {CommentsModule} from './comments/comments.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}),
		MoviesModule,
		CommentsModule
	]
})
export class AppModule {
}
