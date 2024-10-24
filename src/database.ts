import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database | null = null;

export async function initDatabase(): Promise<Database> {
    try {
        if (!db) {
            db = await open({
                filename: './src/database.db',
                driver: sqlite3.Database
            });
        }
        return db;
        
    } catch (error) {
        console.error('Error initializing SQLite database:', error);
        throw new Error('Failed to initialize database connection');
    }
}