import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database | null = null; // Declare a variable to hold the database connection, initially set to null

/**
 * Initializes and returns the SQLite database connection.
 * @returns {Promise<Database>} A promise that resolves to the database connection.
 */
export async function initDatabase(): Promise<Database> {
  try {
    // Check if the database connection is not already initialized
    if (!db) {
      // Open a new database connection
      db = await open({
        filename: './src/database/database.db', // Path to the database file
        driver: sqlite3.Database, // Specify the driver to use for the database connection
      });
    }
    return db; // Return the database connection
  } catch (error) {
    // Log any errors that occur during the database initialization
    console.error('Error initializing SQLite database:', error);
    // Throw a new error to indicate that the database connection failed
    throw new Error('Failed to initialize database connection');
  }
}
