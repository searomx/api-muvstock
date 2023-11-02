import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ParamsProps{
    nmcnpj: string;
}
interface Idados{
  nome: string;
  cnpj: string;
  abertura: string;
  email: string;
  telefone: string;
  situacao: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  municipio: string;
  uf: string;
  fantasia: string;
  capital_social: string;
  atividade_principal: [
    {
      text: string;
      code: string;
    }
  ];
  atividades_secundarias: [
    {
      text: string;
      code: string;
    }
  ];
}
export const getCnpj = async (req:Request<ParamsProps>, res: Response) =>{
  const {nmcnpj} = req.params;
  const cnpjx: string = nmcnpj.replace(/[^0-9]/g, '');
  try {
    const result = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpjx}`);
    const json = await result.json();

    const dados: Idados = {
      nome: json.nome,
      cnpj: json.cnpj,
      abertura: json.abertura,
      email: json.email,
      telefone: json.telefone,
      situacao: json.situacao,
      bairro: json.bairro,
      logradouro: json.logradouro,
      numero: json.numero,
      cep: json.cep,
      municipio: json.municipio,
      uf: json.uf,
      fantasia: json.fantasia,
      capital_social: json.capital_social,
      atividade_principal: json.atividade_principal,
      atividades_secundarias: json.atividades_secundarias,
    };

    return res.status(StatusCodes.OK).json(dados);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não Implementado!');
  }
};
