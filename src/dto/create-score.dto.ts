import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateScoreDto {

    @IsString()
    name: string;

    @IsNumber()
    score: number;

    @IsString()
    classification: string;
}