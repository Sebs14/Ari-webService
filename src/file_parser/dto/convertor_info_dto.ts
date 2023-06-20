import { Transform } from 'class-transformer';

export class ConvertorInfoDto {
  @Transform((obj) => {
    console.log(obj);
  })
  separator: string;
  secret: string;
}
