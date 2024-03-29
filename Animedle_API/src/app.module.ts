import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import {Anime} from "./anime/anime.entity";
import {AnimeModule} from "./anime/anime.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.local", ".env"],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("POSTGRES_HOST"),
        port: +configService.get<number>("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DATABASE"),
        entities: [Anime],
        synchronize: true,
        extra: {
          ssl: configService.get("POSTGRES_SSL") === "true" ? { rejectUnauthorized: false } : false,
        },
      }),
      inject: [ConfigService],
    } as TypeOrmModuleAsyncOptions),
    AnimeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
