import mongoose, { Document, Schema } from 'mongoose';
import { Types } from 'mongoose';

// Extiendo la interfaz Document de Mongoose para tener un tipado adecuado.
export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  IdEsp: number;
  ocupacion: string;
  estado: string;
  sensorData: mongoose.Types.ObjectId[]; // Referencia a los datos de sensores asociados.
}

// Definición del esquema de Mongoose para el usuario.
const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  IdEsp:{type: Number, default: 0, unique: true },
  ocupacion: { type: String, required: true },
  estado: { type: String, required: true } ,
  sensorData: [{ type: Schema.Types.ObjectId, ref: 'SensorData' }]
});

// Creación del modelo de Mongoose basado en el esquema definido.
const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
