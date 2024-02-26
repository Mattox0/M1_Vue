import {Body, Controller, Delete, Get, HttpException, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {AnimeService} from "../service/anime.service";
import {AnimeDto} from "../dto/anime.dto";
import {AnimeUpdateDto} from "../dto/animeUpdate.dto";
import {Anime} from "../anime.entity";

@Controller("anime")
export class AnimeController {
  constructor(private readonly animeService: AnimeService
  ) {}

  @Get('')
  async getAll() {
    return await this.animeService.findAll();
  }

  @Get('/random')
  async getRandom() {
    return await this.animeService.findRandom();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return await this.animeService.findOne(id);
  }

  @Get('/:id/genre')
  async getGenre(@Param('id') id: string) {
    return await this.animeService.findGenre(id);
  }

  @UsePipes(ValidationPipe)
  @Post('')
  async create(@Body() anime: AnimeDto) {
    if(await this.animeService.findName(anime.title)) {
      throw new HttpException('Anime already exists', 409);
    } else {
      return await this.animeService.create(anime);
    }
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() animeDto: AnimeUpdateDto) {
    return await this.animeService.update(id, animeDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.animeService.delete(id);
  }
}