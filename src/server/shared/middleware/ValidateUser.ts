import { Response } from 'express';
import { validationResult } from 'express-validator';
import { Request } from 'express-validator/src/base';

export const validateUser = [
  // Verifica se o nome não está vazio
  // check('cnpj').not().isEmpty().withMessage('CNPJ é Requerido!'),
  //check('cnpj').isLength({ min: 14, max: 14 }).withMessage('CNPJ deve ter no mínimo 14 caracteres!'),

  //Verifica se o email é válido
  //check('email').isEmail().withMessage('Must be a valid email'),

  // Verifica se a senha tem pelo menos 5 caracteres
  // check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),

  (req: Request, res: Response, next: () => void) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
