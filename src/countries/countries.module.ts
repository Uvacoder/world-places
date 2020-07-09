import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './country.entity';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Country])
  ],
  controllers: [CountriesController],
  exports: [CountriesService],
  providers: [CountriesService],
})
export class CountriesModule {}
