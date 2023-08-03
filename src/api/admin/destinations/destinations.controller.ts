import { Injectable, Controller, Post, Body, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Destination } from "src/database/models/destination.entity";
import { MongoRepository } from "typeorm";
import { DestinationsService } from "./destinations.service";
import { CreateDestinationDto } from "./dto/create-destination.dto";

@Controller('destinations')
export class DestinationsController {
    constructor(
        @InjectRepository(Destination)
        private destinationsService: DestinationsService,
    ) { }

    @Post('/create')
    async create(@Body() createDestinationDto: CreateDestinationDto): Promise<any> {
        console.log("createDestinationDto ", createDestinationDto)
        console.log("\nthis.destinationsService.create(createDestinationDto) ", this.destinationsService.create(createDestinationDto))
        return this.destinationsService.create(createDestinationDto);
    }

    @Get()
    async findAll(): Promise<Destination[]> {
        return this.destinationsService.findAll();
    }
}
