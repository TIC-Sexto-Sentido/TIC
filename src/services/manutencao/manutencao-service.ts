import { Manutencao } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { ManutencaoRepository } from "../../repositories";

class ManutencaoService{
    private ManutencaoRepository = ManutencaoRepository;
    
    public async getAllManutencaos(): Promise<Manutencao[] | null>{
        try{
            const tipoPatrimonio = await new this.ManutencaoRepository().getAllManutencoes()

            return tipoPatrimonio
            
        } catch(error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getManutencao(id: number): Promise<Manutencao | null>{
        try{
            const tipoPatrimonio = await new this.ManutencaoRepository().getManutencao(id)

            return tipoPatrimonio

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postManutencao(request: RequestWithParams): Promise<Manutencao | null>{
        try{
            const tipoPatrimonio = request.body as unknown as Manutencao
            const tipoPatrimonioDb = await new this.ManutencaoRepository().createManutencao(tipoPatrimonio)
            
            return tipoPatrimonioDb

        } catch(error) {
            console.log(error)
            
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putManutencao(request: RequestWithParams): Promise<Manutencao | null>{
        try{
            const tipoPatrimonio = request.body as unknown as Manutencao
            const updated = await new this.ManutencaoRepository().putManutencao(tipoPatrimonio)
            
            return updated

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deleteManutencao(id: number): Promise<Manutencao | null>{
        try{
            const tipoPatrimonio = await new this.ManutencaoRepository().deleteManutencao(id)
            return tipoPatrimonio

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { ManutencaoService }