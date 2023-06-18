import { Manutencao, ManutencaoDTO } from "../models";
import { PatrimonioService } from "../services";

class BuildManutencao{
    private PatrimonioService = PatrimonioService;
    
    public async buildManutencao(manutencaoDB: Manutencao): Promise<ManutencaoDTO>{
        try{
            let manutencao = manutencaoDB as unknown as ManutencaoDTO

            const patrimonio = await new this.PatrimonioService()
                .getPatrimonio(manutencaoDB.cod_patrimonio)
            
            patrimonio? manutencao.patrimonio = patrimonio : null
            
            return manutencao

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { BuildManutencao }