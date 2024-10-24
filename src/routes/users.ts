import { Router, Request, Response } from 'express';
import { initDatabase } from '../database';

// Why SQLite? 
// Lightweitgh, easy to use and setup time.


// Next steps for improvements: Implementing a ORM (help with security, performance and complexity). 


interface Product {
    id: number;
    product_id: string;
    stock_level: number;
    delivery_time: string;
}


const router = Router();

// Get all users
router.get('/', async (req: Request, res: Response) => {
    try {
        const db = await initDatabase();
        const products: Product[] = await db.all('SELECT * FROM users');
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        return res.json(products);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching users' });
    }
});

// Get a specific product by product_id
// router.get('/:product_id', async (req: Request, res: Response) => {
//     const { product_id } = req.params;

//     // Validate product_id input
//     if (!/^\d{1,32}$/.test(product_id)) {
//         return res.status(400).json({ message: 'Invalid input.' });
//     }

//     try {
//         const db = await initDatabase();
//         const product: Product | undefined = await db.get('SELECT * FROM products WHERE product_id = ?', product_id);

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         return res.json(product);
//     } catch (err) {
//         return res.status(500).json({ message: 'Error fetching product' });
//     }
// });

export default router;