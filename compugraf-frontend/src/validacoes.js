import * as yup from "yup";
import api from "./api";

function validacoes () {
    const handleClickRegistro = (values) => {
        api.post("pessoa/", {
          nome: values.nome,
          sobrenome: values.sobrenome,
          nacionalidade: values.nacionalidade,
          cep: values.cep,
          estado: values.estado,
          cidade: values.cidade,
          logradouro: values.logradouro,
          email: values.email,
          telefone: values.telefone,
          cpf: values.cpf,
        }).then((response) => {
          console.log(response.data);
        });
      };
    
      const validationRegistro = yup.object().shape({
        nome: yup
          .string()
          .required("Este campo é obrigatório."),
        sobrenome: yup
          .string()
          .required("Este campo é obrigatório."),
        nacionalidade: yup
          .string()
          .required("Este campo é obrigatório."),
        cep: yup
          .string()
          .required("Este campo é obrigatório."),
        estado: yup
          .string()
          .required("Este campo é obrigatório."),
        cidade: yup
          .string()
          .required("Este campo é obrigatório."),
        logradouro: yup
          .string()
          .required("Este campo é obrigatório."),
        email: yup
          .string()
          .email("Não é um email.")
          .required("Este campo é obrigatório."),
        telefone: yup
          .string()
          .required("Este campo é obrigatório."),
        cpf: yup      
          .string()
          .required("Este campo é obrigatório."),
      })
}

export default validacoes;