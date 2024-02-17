import {PartialType} from "@nestjs/swagger";
import {AnimeDto} from "./anime.dto";

export class AnimeUpdateDto extends PartialType(AnimeDto) {}