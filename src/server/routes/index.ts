import { Router } from 'express';
import { ClientesController } from './../controllers';
import { validateUser } from '../shared/middleware/ValidateUser';

const router = Router();

router.get('/', (req, res) => {
  return res.json('Hello World!');
});

router.get('/cnpj/:nmcnpj', ClientesController.getCnpj);
router.post('/cnpj', validateUser, ClientesController.create);


export { router };
