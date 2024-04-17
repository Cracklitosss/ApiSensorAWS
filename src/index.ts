import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import sensorDataRoutes from './infrastructure/routes/sensorDataRoutes';

// Cargar configuración del archivo .env
dotenv.config();

// Asegurar que las variables de entorno esenciales están definidas
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Carlos:12345@cluster0.ha8qnnw.mongodb.net/Pruebamulti';

// Conexión a MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.log('MongoDB connection error:', err);
    process.exit(1); // Salir si no se puede conectar a MongoDB
});

const app = express();
app.use(express.json());
app.use('/api', sensorDataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

