import express, {Request, Response, Express, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import usersRoutes from './routes/users';

const app: Express = express();
app.use(helmet());

const allowedOrigins = [''];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());



// Routes
app.get('/', (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
}   );

// Product data routes 
app.use('/api/users', usersRoutes);



// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

