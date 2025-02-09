"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
console.log(process.env);
const connection = new ioredis_1.default({
    host: process.env?.REDIS_HOST || '127.0.0.1',
    maxRetriesPerRequest: null
});
const worker = new bullmq_1.Worker('foo', async (job) => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);
}, { connection });
