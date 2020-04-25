import {Module} from '@nestjs/common';
import {CommentsController} from './controller/comments.controller';
import {CommentsService} from './service/comments.service';
import {MongooseModule} from "@nestjs/mongoose";
import {MoviesSchema} from "../movies/schemas/movies.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Movies', schema: MoviesSchema }])
  ],
	controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
