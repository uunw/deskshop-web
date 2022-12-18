import mongoose from 'mongoose';

import envs from '@/envs';

if (envs.MONGO_URI === ``) {
  throw new Error(
    `Please define the MONGODB_URI environment variable inside .env.local`,
  );
}

async function databaseConnect() {
  const mongo = await mongoose.connect(envs.MONGO_URI, {
    writeConcern: {
      w: `majority`,
    },
  });

  return mongo;
}

export { databaseConnect };
