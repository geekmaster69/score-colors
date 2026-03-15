import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // Transforma el string de la URL a número
  limit?: number = 10;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // Transforma el string de la URL a número
  offset?: number = 0;
}