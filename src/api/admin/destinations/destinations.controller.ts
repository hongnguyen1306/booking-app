import { Controller, Post, Body, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Destination } from 'src/database/models/destination.entity';
import { DestinationsService } from './destinations.service';
import type { CreateDestinationDto } from './dto/create-destination.dto';

@Controller('destinations')
export class DestinationsController {
  constructor(private destinationsService: DestinationsService) {}

  @Post('/create')
  public async create(
    @Body() createDestinationDto: CreateDestinationDto,
  ): Promise<Destination> {
    console.log('createDestinationDto ', createDestinationDto);
    return this.destinationsService.create(createDestinationDto);
  }

  @Get()
  public async findAll(): Promise<Destination[]> {
    const listDestinations = await this.destinationsService.findAll();
    return listDestinations;
  }
}
