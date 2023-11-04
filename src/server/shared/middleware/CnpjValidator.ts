import { Response } from 'express';
import { check, body, validationResult } from 'express-validator/check';

export const cnpjValidate = [
  function(req,res,next) {
    body('firstName').exists()
      .isLength({min: 14 , max: 14}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
      .trim();
    const errorValidation = validationResult(req);
    if ( errorValidation ) {
      return res.status(500).json({
        title: 'Ocorreu um erro',
        error: errorValidation
      });
    }
    next();
  },
];
