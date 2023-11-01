import { Router } from 'express';
import { ClientesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.json('Hello World!');
});

router.post('/cnpj', ClientesController.createValidation, ClientesController.create);
  

export { router };
