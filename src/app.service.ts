import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { Repository } from 'typeorm';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>
  ) { }


  async createScore(createScoreDto: CreateScoreDto) {

    try {

      const score = this.scoreRepository.create(createScoreDto);

      return await this.scoreRepository.save(score);

    } catch (error) {

      throw new InternalServerErrorException(error);

    }
  }


  async updateScore(id: number, updateScore: UpdateScoreDto) {

    const score = await this.scoreRepository.preload({ id, ...updateScore });

    if (!score) {
      throw new NotFoundException(`Score with id ${id} not found`);
    }

    try {
      return await this.scoreRepository.save(score);

    } catch (error) {
    }
  }

  async getAllScores(paginationDto: PaginationDto) {

    const { limit = 10, offset = 0 } = paginationDto;

    return this.scoreRepository.find({
      skip: offset,
      take: limit,
      order: {
      score: 'DESC',
    },

    });

  }






}
