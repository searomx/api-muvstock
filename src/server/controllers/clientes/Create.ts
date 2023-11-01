import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ClientesProvider } from '../../database/providers';
import { validation } from '../../shared/middleware';
import { ICnpj } from '';



interface IBodyProps extends Omit<ICnpj, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    cnpj: yup.string().required().min(14).max(14),
  })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = req.body;
  console.log(req.body);


  return res.status(StatusCodes.CREATED).json(result);
};