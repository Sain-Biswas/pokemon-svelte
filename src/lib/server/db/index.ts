import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

import schema from './schema/index.schema';

import { env } from '$env/dynamic/private';
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = createClient({ url: env.DATABASE_URL });
const db = drizzle(client, { schema });

export default db;
