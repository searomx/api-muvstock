import { Router } from 'express';
import { StatusCodes }  from 'http-status-codes';
import { ClientesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.json('Hello World!');
});

router.post('/cnpj', ClientesController.create);
  

export { router };
