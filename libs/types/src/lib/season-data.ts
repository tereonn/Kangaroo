import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsInt,
  IsNumber,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class StageDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsString()
  location: string;
}

export class SeasonDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({ type: [StageDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StageDTO)
  stages: StageDTO[];
}

export class CreateSeasonDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;
}

export class UpdateSeasonDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiPropertyOptional()
  @IsString()
  @ValidateIf(
    (dto) =>
      Object.hasOwnProperty.call(dto, 'name') ||
      !Object.hasOwnProperty.call(dto, 'description')
  )
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @ValidateIf(
    (dto) =>
      Object.hasOwnProperty.call(dto, 'description') ||
      !Object.hasOwnProperty.call(dto, 'name')
  )
  description: string;
}

export class DeleteSeasonDTO {
  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class CreateStageDTO {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  seasonId: number;
}

export class DeleteStageDTO {
  @ApiProperty()
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class UpdateStageDTO {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsDate()
  @ValidateIf(
    (dto) =>
      Object.hasOwnProperty.call(dto, 'date') ||
      !Object.hasOwnProperty.call(dto, 'location')
  )
  date: Date;

  @ApiProperty()
  @IsString()
  @ValidateIf(
    (dto) =>
      Object.hasOwnProperty.call(dto, 'location') ||
      !Object.hasOwnProperty.call(dto, 'date')
  )
  location: string;
}
