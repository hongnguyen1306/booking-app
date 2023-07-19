import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Destination } from "src/database/models/destination.entity";
import { MongoRepository } from "typeorm";

@Injectable()
export class DestinationsController {
    constructor(
        @InjectRepository(Destination)
        private destinationsRepository: MongoRepository<Destination>,
    ) { }

}