import { Patrimonio } from "../patrimonio/PatrimonioDTO";

interface ManutencaoDTO {
    cod_manutencao: number;
    patrimonio: Patrimonio;
    data_manutencao: string;
  }

  export { ManutencaoDTO }