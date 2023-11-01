import { ICnpj } from '../../models';



export const create = async () => {
  try {
    const cnpj: ICnpj = {
      cnpj: '12345678901234',
    };
    return 1; 
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};