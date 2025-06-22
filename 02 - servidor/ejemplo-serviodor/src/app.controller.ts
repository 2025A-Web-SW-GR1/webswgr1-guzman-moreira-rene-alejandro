import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Headers,
  Body,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Array de casas para simular una base de datos
  private casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  // Ruta base opcional
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /casa → devuelve todas las casas o una sola si se pasa ?idCasa
  @Get('/casa')
  @HttpCode(200)
  getCasa(
    @Query('idCasa') idCasa?: string,
    @Headers() headers?: any,
  ) {
    if (!idCasa) {
      return this.casas;
    }

    const id = parseInt(idCasa);
    const encontrada = this.casas.find((c) => c.id === id);

    if (!encontrada) {
      throw new NotFoundException('No se encuentra');
    }

    return [encontrada];
  }

  // POST /casa/:id → ejemplo adicional que utiliza body y headers
  @Post('/casa/:id')
  @HttpCode(200)
  postCasaExample(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: any,
  ) {
    return {
      mensaje: `POST recibido para casa ${id}`,
      data: body,
      headers,
    };
  }
}
