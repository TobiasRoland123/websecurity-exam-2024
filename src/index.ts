import express, {Request, Response, Express, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import productRoutes from './routes/product';

const app: Express = express();
app.use(helmet());

const allowedOrigins = ['http://127.0.0.1:9292'];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET'],
  credentials: true,
}));

app.use(express.json());



// Routes
app.get('/', (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
}   );

// Product data routes 
app.use('/api/products', productRoutes);



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


// CSV task
// would make a new route, that would take a csv file as input, and then parse it and update the database row(s) with the right product_id.