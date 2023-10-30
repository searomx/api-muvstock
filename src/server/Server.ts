import express from 'express';
import { router } from './routes';
import 'dotenv/config';
import '../shared/services/TranslateYup';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(router);



export default server;
