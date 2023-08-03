import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Destination } from "src/database/models/destination.entity";
import { MongoRepository } from "typeorm";
import { CreateDestinationDto } from "./dto/create-destination.dto";

@Injectable()
export class DestinationsService {
    constructor(
        @InjectRepository(Destination)
        private destinationsRepository: MongoRepository<Destination>,
    ) { }
    async create(createDestinationDto: CreateDestinationDto): Promise<any> {
        return await this.destinationsRepository.save(createDestinationDto);
    }
    async findAll(): Promise<Destination[]> {
        console.log("this.destinationsRepository.find(); ", this.destinationsRepository.find())
        return await this.destinationsRepository.find();
    }
}