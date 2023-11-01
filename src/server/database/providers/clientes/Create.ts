import { ICnpj } from '../../models';



export const create = async () => {
  try {
    
    
    return true; 
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};