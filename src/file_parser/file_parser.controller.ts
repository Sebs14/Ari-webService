import {
  Body,
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileParserService } from './file_parser.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConvertorInfoDto } from './dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import type { Response } from 'express';

@Controller('fileConverter')
export class FileParserController {
  constructor(private fileParserService: FileParserService) {}

  @Get('hola')
  getHello() {
    return 'hola mundo';
  }

  @Post('txtToJson')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uploadedTxtName = 'uploaded-txt';
          cb(null, `${uploadedTxtName}${extname(file.originalname)}`);
        }
      })
    })
  )
  txtToJson(
    @Body() dto: ConvertorInfoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'text/plain' // || 'application/xml' || 'application/json'
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    )
    file: Express.Multer.File,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.fileParserService.convertTxtToJson(dto, file);
  }

  @Post('txtToXml')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uploadedTxtName = 'uploaded-txt';
          cb(null, `${uploadedTxtName}${extname(file.originalname)}`);
        }
      })
    })
  )
  txtToXml(
    @Body() dto: ConvertorInfoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'text/plain' // || 'application/xml' || 'application/json'
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    )
    file: Express.Multer.File,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.fileParserService.convertTxtToXml(dto, file);
  }

  @Post('jsonToTxt')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uploadedTxtName = 'uploaded-json';
          cb(null, `${uploadedTxtName}${extname(file.originalname)}`);
        }
      })
    })
  )
  jsonToTxt(
    @Body() dto: ConvertorInfoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'application/json' // || 'application/xml' || 'application/json'
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    )
    file: Express.Multer.File,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.fileParserService.convertJsonToTxt(dto, file);
  }

  @Post('xmlToTxt')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uploadedTxtName = 'uploaded-xml';
          cb(null, `${uploadedTxtName}${extname(file.originalname)}`);
        }
      })
    })
  )
  xmlToTxt(
    @Body() dto: ConvertorInfoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: RegExp('application/xml'),
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    )
    file: Express.Multer.File,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.fileParserService.convertXmlToTxt(dto, file);
  }
}
