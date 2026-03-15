import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  createScore(
    @Body() createScore: CreateScoreDto
  ) {
    return this.appService.createScore(createScore);
  }


  @Patch(':id')
  updateScore(
    @Body() updateScoreDto: UpdateScoreDto,
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.appService.updateScore(id, updateScoreDto)
  }

  @Get()
  findAll(
    @Query() paginationDto: PaginationDto
  ) {
    return this.appService.getAllScores(paginationDto);
  }
}
