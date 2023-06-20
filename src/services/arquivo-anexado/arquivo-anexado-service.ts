import { ArquivoAnexado } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { ArquivoAnexadoRepository } from "../../repositories";

class ArquivoAnexadoService{
    private ArquivoAnexadoRepository = ArquivoAnexadoRepository;
    
    public async getAllArquivoAnexados(): Promise<ArquivoAnexado[] | null>{
        try{
            const tipoPatrimonio = await new this.ArquivoAnexadoRepository().getAllArquivos()

            return tipoPatrimonio
            
        } catch(error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getArquivoAnexado(id: number): Promise<ArquivoAnexado | null>{
        try{
            const tipoPatrimonio = await new this.ArquivoAnexadoRepository().getArquivoAnexado(id)

            return tipoPatrimonio

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postArquivoAnexado(request: RequestWithParams): Promise<ArquivoAnexado | null>{
        try{
            const tipoPatrimonio = request.body as unknown as ArquivoAnexado
            const tipoPatrimonioDb = await new this.ArquivoAnexadoRepository().createArquivoAnexado(tipoPatrimonio)
            
            return tipoPatrimonioDb

        } catch(error) {
            console.log(error)
            
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putArquivoAnexado(request: RequestWithParams): Promise<ArquivoAnexado | null>{
        try{
            const tipoPatrimonio = request.body as unknown as ArquivoAnexado
            const updated = await new this.ArquivoAnexadoRepository().putArquivoAnexado(tipoPatrimonio)
            
            return updated

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deleteArquivoAnexado(id: number): Promise<ArquivoAnexado | null>{
        try{
            const tipoPatrimonio = await new this.ArquivoAnexadoRepository().deleteArquivoAnexado(id)
            return tipoPatrimonio

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { ArquivoAnexadoService }