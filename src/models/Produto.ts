import { Localizacao } from "./Localizacao"
interface Produto {
   nome_prod: string;
   cod_prod: number;
   tipo_prod: string;
   qtde: number;
   data_aquisicao: Date;
   localizacao: Localizacao;
   situacao: string;
   ativo: boolean;
}

export {Produto}
