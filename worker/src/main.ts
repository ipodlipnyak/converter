import { Worker } from 'bullmq';
import IORedis from 'ioredis';

console.log(process.env);

const connection = new IORedis({
  host: process.env?.REDIS_HOST || '127.0.0.1',
  maxRetriesPerRequest: null
});

const worker = new Worker(
  'foo',
  async job => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);
  },
  { connection },
);
