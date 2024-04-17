import { io } from 'socket.io-client';
import { ISensorData } from '../../domain/SensorData'; // Asegúrate de que la ruta es correcta

export class WebSocketService {
  private socket: any;

  constructor() {
    this.connect();
  }

  private connect() {
    const websocketUrl = "https://websocketserver-l5ok.onrender.com";
    this.socket = io(websocketUrl);
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
