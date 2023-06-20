import { Manutencao, ManutencaoDTO } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { ManutencaoRepository } from "../../repositories";
import { BuildManutencao } from "../../utils";

class ManutencaoService{
    private ManutencaoRepository = ManutencaoRepository;
    private BuildManutencao = BuildManutencao;
    
    public async getAllManutencaos(): Promise<ManutencaoDTO[] | null>{
        try{
            const manutencoesDb = await new this.ManutencaoRepository().getAllManutencoes()
            let manutencoes = null

            if(manutencoesDb){
                manutencoes = Promise.all(manutencoesDb.map(
                    async (manu) => await new this.BuildManutencao().buildManutencao(manu)
                ))
            }

            return manutencoes
            
        } catch(error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getManutencao(id: number): Promise<ManutencaoDTO | null>{
        try{
            const manutencaoDB = await new this.ManutencaoRepository().getManutencao(id)
            let manutencao = null
            
            if(manutencaoDB){
                manutencao = await new this.BuildManutencao().buildManutencao(manutencaoDB)
            }

            return manutencao

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postManutencao(request: RequestWithParams): Promise<Manutencao | null>{
        try{
            const manutencao = request.body as unknown as Manutencao
            const manutencaoDb = await new this.ManutencaoRepository().createManutencao(manutencao)
            
            return manutencaoDb

        } catch(error) {
            console.log(error)
            
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putManutencao(request: RequestWithParams): Promise<Manutencao | null>{
        try{
            const manutencao = request.body as unknown as Manutencao
            const updated = await new this.ManutencaoRepository().putManutencao(manutencao)
            
            return updated

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deleteManutencao(id: number): Promise<Manutencao | null>{
        try{
            const manutencao = await new this.ManutencaoRepository().deleteManutencao(id)
            return manutencao

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { ManutencaoService }