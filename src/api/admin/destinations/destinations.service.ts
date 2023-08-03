import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository } from "typeorm";

import { Destination } from "src/database/models/destination.entity";
import type { CreateDestinationDto } from "./dto/create-destination.dto";

@Injectable()
export class DestinationsService {
    constructor(
        @InjectRepository(Destination)
        private destinationsRepository: Repository<Destination>,
    ) {}

    public async create(createDestinationDto: CreateDestinationDto): Promise<Destination> {
        console.log("saved!")
        try {
            return this.destinationsRepository.save(createDestinationDto);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    public async findAll(): Promise<Destination[]> {
        return this.destinationsRepository.find();
    }
}