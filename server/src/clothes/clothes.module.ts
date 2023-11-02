import { Module } from "@nestjs/common";
import { ClothesService } from "./clothes.service";
import { ClothesController } from "./clothes.controller";
import { PrismaModule } from "src/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [ClothesService],
    controllers: [ClothesController]
})
export class ClothesModule {}