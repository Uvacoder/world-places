import { Column, Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { LocationEntity } from '../_base/location.entity';
import { Region } from '../regions/region.entity';

@Entity()
export class City extends LocationEntity {
  @ApiProperty({ type: () => Region })
  @ManyToOne(
    type => Region,
    region => region.cities,
    { cascade: true, onDelete: 'CASCADE' },
  )
  region: Region;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  countryCode: string;

  @ApiProperty()
  @Column({ nullable: true })
  regionId: string;
}
