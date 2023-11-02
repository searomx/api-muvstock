import * as create  from './Create';
import * as getCnpj from './GetCnpj';

export const ClientesController = {
  ...create,
  ...getCnpj,
};
