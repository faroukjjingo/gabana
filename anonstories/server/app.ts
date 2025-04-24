# anonstories/server/app.ts
import express from 'express';
import cors from 'cors';
import storyRoutes from './routes/storyRoutes';
import commentRoutes from './routes/commentRoutes';
import authRoutes from './routes/authRoutes';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/stories', storyRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;