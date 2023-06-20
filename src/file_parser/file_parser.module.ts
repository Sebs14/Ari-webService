import { Module } from '@nestjs/common';
import { FileParserController } from './file_parser.controller';
import { FileParserService } from './file_parser.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [FileParserController],
  providers: [FileParserService]
})
export class FileParserModule {}
