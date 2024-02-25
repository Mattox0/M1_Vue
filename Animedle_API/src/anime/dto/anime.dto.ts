import {IsNotEmpty} from "class-validator";
import {Statut} from "../enum/statut.enum";
import {Genre} from "../enum/genre.enum";
import { Type } from "../enum/type.enum";

export class AnimeDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  season: number;

  @IsNotEmpty()
  genres: Genre[];

  @IsNotEmpty()
  imgPath: string;

  @IsNotEmpty()
  status: Statut;

  @IsNotEmpty()
  studio: string[];

  @IsNotEmpty()
  type: Type;

  emoji?: string[];
}
