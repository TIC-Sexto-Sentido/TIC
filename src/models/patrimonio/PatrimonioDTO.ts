import { Localizacao } from "../localizacao/Localizacao"
import { TipoPatrimonio } from "../tipo-patrimonio/TipoPatrimonio";
interface Patrimonio {
   cod_patrimonio: number;
   tipo_patrimonio: TipoPatrimonio;
   nome_patrimonio: string;
   qtde: number;
   localizacao: Localizacao;
   ativo: boolean;
   id_usuario: number;
}

export {Patrimonio}
