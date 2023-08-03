import { IsNotEmpty, IsString } from "class-validator";

export class CreateDestinationDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
