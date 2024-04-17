import mongoose, { Document, Schema } from 'mongoose';

// Definir la interfaz ISensorData
export interface ISensorData extends Document {
  userId: mongoose.Types.ObjectId;
  IdEsp: number; // Asegúrate de que el tipo aquí coincida con cómo planeas usarlo.
  distancia: number;
  velocidad: number;
  aceleracion: number;
  cantidadPedaleos: number;
  createdAt?: Date;  // Opcional para manejar casos donde pueda no estar definido
  updatedAt?: Date;
}

// Definir el esquema de Mongoose para SensorData
const sensorDataSchema = new mongoose.Schema<ISensorData>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  IdEsp: Number,
  distancia: Number,
  velocidad: Number,
  aceleracion: Number,
  cantidadPedaleos: Number,
}, { timestamps: true });

// Exportar el modelo de Mongoose para SensorData
const SensorDataModel = mongoose.model<ISensorData>('SensorData', sensorDataSchema);
export default SensorDataModel;
