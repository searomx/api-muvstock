import { Router } from 'express';
import StatusCodes  from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  return res.json('Hello World!');
});

router.post('/cnpj', (req, res) => {
  const requestBody = req.body;
  try{
    return res.status(StatusCodes.UNAUTHORIZED).json({ requestBody });

  }catch(error){
    //return res.status().json({ error: error.message });
  }
});

export { router };
