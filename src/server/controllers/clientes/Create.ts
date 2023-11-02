import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICnpj {
  cnpj: string;
}

export const create = async (req: Request<{}, {}, ICnpj>, res: Response) => {
  const result = req.body;
  console.log(req.body);


  return res.status(StatusCodes.CREATED).json(result);
};
