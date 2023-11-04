import { Router } from 'express';
import { ClientesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.json('Hello World!');
});

router.get('/cnpj/:nmcnpj', ClientesController.getCnpj);
router.post('/cnpj',ClientesController.createCnpj);

export { router };
