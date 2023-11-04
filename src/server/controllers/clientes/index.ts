import * as createCnpj  from './CreateCnpj';
import * as getCnpj from './GetCnpj';

export const ClientesController = {
  ...createCnpj,
  ...getCnpj,
};
