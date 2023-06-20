import { Localizacao } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { LocalizacaoRepository } from "../../repositories";

class LocalizacaoService{
    private LocalizacaoRepository = LocalizacaoRepository;
    
    public async getAllLocalizacaos(): Promise<Localizacao[] | null>{
        try{
            const localizacoes = await new this.LocalizacaoRepository().getAllLocalizacoes()

            return localizacoes
            
        } catch(error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getLocalizacao(id: number): Promise<Localizacao | null>{
        try{
            const localizacao = await new this.LocalizacaoRepository().getLocalizacao(id)

            return localizacao

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postLocalizacao(request: RequestWithParams): Promise<Localizacao | null>{
        try{
            const localizacao = request.body as unknown as Localizacao
            const localizacaoDb = await new this.LocalizacaoRepository().createLocalizacao(localizacao)
            
            return localizacaoDb

        } catch(error) {
            console.log(error)
            
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putLocalizacao(request: RequestWithParams): Promise<Localizacao | null>{
        try{
            const localizacao = request.body as unknown as Localizacao
            const updated = await new this.LocalizacaoRepository().putLocalizacao(localizacao)
            
            return updated

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deleteLocalizacao(id: number): Promise<Localizacao | null>{
        try{
            const localizacao = await new this.LocalizacaoRepository().deleteLocalizacao(id)
            return localizacao

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { LocalizacaoService }