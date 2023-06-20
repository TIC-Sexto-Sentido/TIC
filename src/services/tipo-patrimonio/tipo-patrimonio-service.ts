import { TipoPatrimonio } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { TipoPatrimonioRepository } from "../../repositories";

class TipoPatrimonioService{
    private TipoPatrimonioRepository = TipoPatrimonioRepository;
    
    public async getAllTipoPatrimonios(): Promise<TipoPatrimonio[] | null>{
        try{
            const tipoPatrimonio = await new this.TipoPatrimonioRepository().getAllTipoPatrimonio()

            return tipoPatrimonio
            
        } catch(error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getTipoPatrimonio(id: number): Promise<TipoPatrimonio | null>{
        try{
            const tipoPatrimonio = await new this.TipoPatrimonioRepository().getTipoPatrimonio(id)

            return tipoPatrimonio

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postTipoPatrimonio(request: RequestWithParams): Promise<TipoPatrimonio | null>{
        try{
            const tipoPatrimonio = request.body as unknown as TipoPatrimonio
            const tipoPatrimonioDb = await new this.TipoPatrimonioRepository().createTipoPatrimonio(tipoPatrimonio)
            
            return tipoPatrimonioDb

        } catch(error) {
            console.log(error)
            
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putTipoPatrimonio(request: RequestWithParams): Promise<TipoPatrimonio | null>{
        try{
            const tipoPatrimonio = request.body as unknown as TipoPatrimonio
            const updated = await new this.TipoPatrimonioRepository().putTipoPatrimonio(tipoPatrimonio)
            
            return updated

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deleteTipoPatrimonio(id: number): Promise<TipoPatrimonio | null>{
        try{
            const tipoPatrimonio = await new this.TipoPatrimonioRepository().deleteTipoPatrimonio(id)
            return tipoPatrimonio

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { TipoPatrimonioService }