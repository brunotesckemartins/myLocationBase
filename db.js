import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'mylocation.sqlite';

const SQL_CREATE = `
  CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    created_at TEXT NOT NULL
  );
`;

let db = null;

export default function openDB() {
  if (!db) {
    db = SQLite.openDatabaseSync(DATABASE_NAME);
    db.withTransactionSync(() => {
      db.execSync(SQL_CREATE);
    });
  }
  return db;
}