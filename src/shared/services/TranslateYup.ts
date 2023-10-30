import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'O campo ${path} é obrigatório',
  },
  string: {
    min: 'O campo ${path} deve ter no mínimo ${min} caracteres',
    max: 'O campo ${path} deve ter no máximo ${max} caracteres',
  },
});

