import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import tourRoutes from './routes/tourRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3050;

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/tour', tourRoutes);
app.use('/api/review', reviewRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Trips & Travels API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
