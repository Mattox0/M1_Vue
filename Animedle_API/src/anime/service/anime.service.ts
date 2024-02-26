import {Repository} from "typeorm";
import {Anime} from "../anime.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {HttpException, Injectable} from "@nestjs/common";
import {AnimeDto} from "../dto/anime.dto";
import {AnimeUpdateDto} from "../dto/animeUpdate.dto";

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {
  }

  async findAll(): Promise<Anime[]> {
    return await this.animeRepository.find();
  }

  async findOne(id: string): Promise<Anime> {
    return await this.animeRepository
      .createQueryBuilder("anime")
      .where("anime.id = :id", {id: id})
      .getOne();
  }

  async findName(name: string): Promise<Anime> {
    return await this.animeRepository
      .createQueryBuilder("anime")
      .where("anime.title = :name", {name: name})
      .getOne();
  }

  async findRandom(): Promise<Anime> {
    return await this.animeRepository
      .createQueryBuilder("anime")
      .orderBy("RANDOM()")
      .getOne();
  }

  async findGenre(id: string) {
    return await this.animeRepository
      .createQueryBuilder("anime")
      .select("genres")
      .where("anime.id = :id", {id: id})
      .getRawMany();
  }

  async create(anime: AnimeDto) {
    const newAnime: Anime = this.animeRepository.create(anime);
    return await this.animeRepository.save(newAnime);
  }

  async update(id: string, anime: AnimeUpdateDto) {
    await this.animeRepository
      .createQueryBuilder()
      .update(Anime)
      .set(anime)
      .where("id = :id", {id: id})
      .execute();
    return await this.findOne(id);
  }

  async delete(id: string) {
    const query = await this.animeRepository
      .createQueryBuilder()
      .delete()
      .from(Anime)
      .where("id = :id", {id: id})
      .execute();
    if (query.affected == 0)
      throw new HttpException("L'anime n'a pas été trouvé", 404);
    return {};
  }
}