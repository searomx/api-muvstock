import { Request, Response } from 'express';

interface iCnpj{
  cnpj: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = (req: Request<{}, {}, iCnpj>, res: Response) => {
  console.log(req.body.cnpj);
  return res.send('Controller Create Cliente:'  + req.body.cnpj);
};
