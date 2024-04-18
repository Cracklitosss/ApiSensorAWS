import { io } from 'socket.io-client';
import { ISensorData } from '../../domain/SensorData'; // Asegúrate de que la ruta es correcta
import dotenv from 'dotenv';

dotenv.config();
export class WebSocketService {
  private socket: any;

  constructor() {
    this.connect();
  }

  private connect() {
    // Asegurarse de que la variable de entorno existe y es un string
    const websocketUrl = process.env.WEBSOCKET_URL;
    if (!websocketUrl) {
      throw new Error('WEBSOCKET_URL is not defined in the .env file');
    }

    this.socket = io(websocketUrl as string);
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server as client');
    });

    this.socket.on('connect_error', (error: any) => {
      console.log('Connection Error:', error);
    });
  }

  public sendSensorData(sensorData: ISensorData) {
    // console.log('Sending sensor data via WebSocket:', sensorData);
    this.socket.emit('sensorData', sensorData);
  }
}
