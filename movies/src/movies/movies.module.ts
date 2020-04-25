import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {MoviesSchema} from "./schemas/movies.schema";
import {MoviesController} from "./controller/movies.controller";
import {MoviesService} from "./service/movies.service";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Movies', schema: MoviesSchema }])
	],
	controllers: [MoviesController],
	providers: [MoviesService]
})
export class MoviesModule {}
