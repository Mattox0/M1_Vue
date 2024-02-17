import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import {Statut} from "./enum/statut.enum";
import {Genre} from "./enum/genre.enum";
import {Type} from "./enum/type.enum";

@Entity()
export class Anime {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ type: "varchar", nullable: false, default: false })
  title: string;

  @Column({ type: "integer", nullable: false })
  year: number;

  @Column({ type: "integer", nullable: false })
  season: number;

  @Column({ type: "enum", enum: Genre, nullable: false, array: true })
  genres: Genre[];

  @Column({ type: "varchar", nullable: false })
  imgPath: string;

  @Column({ type: "varchar", nullable: false })
  studio: string;

  @Column({ type: "enum", enum: Statut, nullable: false })
  status: Statut;

  @Column({ type: "enum", enum: Type, nullable: false })
  type: Type;
}