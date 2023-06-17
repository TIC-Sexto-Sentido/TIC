import { Localizacao } from "./Localizacao"
import { TipoPatrimonio } from "./TipoPatrimonio";
interface Patrimonio {
   cod_patrimonio: number;
   tipo_patrimonio: TipoPatrimonio;
   nome_patrimonio: string;
   qtde: number;
   localizacao: Localizacao;
   ativo: boolean;
}

export {Patrimonio}
