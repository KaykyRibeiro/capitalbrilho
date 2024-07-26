import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let db: SQLite.SQLiteDatabase | undefined;

export const getDatabaseConnection = async (): Promise<SQLite.SQLiteDatabase> => {
  try {
    if (!db) {
      db = await SQLite.openDatabase({
        name: 'cbAppDatabase.db',
        location: 'default',
      });
      console.log('Database opened successfully');
    }
    return db;
  } catch (error) {
    console.error('Failed to open database: ', error);
    throw error;
  }
};
