import express from 'express';
import 'dotenv/config';
import { JSONParseError } from './shared/middleware';
import './shared/services/translationsYup';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(JSONParseError);
server.use(router);

export { server };