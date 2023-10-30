import { Request, Response } from 'express';
import * as yup from 'yup';

interface iCnpj{
  cnpj: string;
}

const bodyValidationSchema = yup.object().shape({
  cnpj: yup.string().required().min(14).max(14),
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async(req: Request<{}, {}, iCnpj>, res: Response) => {
  try {
    await bodyValidationSchema.validate(req.body, { abortEarly: false });
    const { cnpj } = req.body;
    res.status(200).json({ cnpj }); 
  } catch (error) {
    const yuperror = error as yup.ValidationError;
    return res.status(400).json({ 
      erros:{ default: yuperror.message,}
       
    });
    
  }
  
};
