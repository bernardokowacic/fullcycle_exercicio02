import { Controller, Get } from '@nestjs/common';

export interface Position {
  title: string;
  startPosition: StartPosition;
  endPosition: EndPosition;
}

export interface StartPosition {
  latitude: number;
  longitude: number;
}

export interface EndPosition {
  latitude: number;
  longitude: number;
}

@Controller('routes')
export class RoutesController {
  private positions: Position[] = [
    { title: 'Posição 1', startPosition: {latitude: 10.1, longitude:5.1}, endPosition: {latitude: 10.2, longitude:5.2} },
    { title: 'Posição 2', startPosition: {latitude: 20.1, longitude:6.1}, endPosition: {latitude: 20.2, longitude:6.2} },
    { title: 'Posição 3', startPosition: {latitude: 30.1, longitude:7.1}, endPosition: {latitude: 30.2, longitude:7.2} },
    { title: 'Posição 4', startPosition: {latitude: 40.1, longitude:8.1}, endPosition: {latitude: 40.2, longitude:8.2} },
    { title: 'Posição 5', startPosition: {latitude: 20.1, longitude:9.1}, endPosition: {latitude: 20.2, longitude:9.2} },
  ];

  @Get()
  getPositions(): Position[] {
    return this.positions;
  }
}
