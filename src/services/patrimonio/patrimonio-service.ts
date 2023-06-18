import { Patrimonio, PatrimonioDB } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { PatrimonioRepository } from "../../repositories";

class PatrimonioService{
    private PatrimonioRepository = PatrimonioRepository;
    
    public async getAllPatrimonios(): Promise<Patrimonio[] | null>{
        try{
            const patrimonios = await new this.PatrimonioRepository().getAllPatrimonios()

            if(patrimonios){
                const patrimoniosView = patrimonios.map((pat) => pat as unknown as Patrimonio)
                return patrimoniosView
            }

            return null
            
        } catch(error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getPatrimonio(id: number): Promise<Patrimonio | null>{
        try{
            const patrimonio = await new this.PatrimonioRepository().getPatrimonio(id)

            return patrimonio as unknown as Patrimonio

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postPatrimonio(request: RequestWithParams): Promise<PatrimonioDB | null>{
        try{
            const patrimonio = request.body as unknown as PatrimonioDB
            const patrimonioDb = await new this.PatrimonioRepository().createPatrimonio(patrimonio)
            
            return patrimonioDb

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putPatrimonio(request: RequestWithParams): Promise<Patrimonio | null>{
        try{
            const patrimonio = request.body as unknown as PatrimonioDB
            const updated = await new this.PatrimonioRepository().putPatrimonio(patrimonio)
            
            return updated as unknown as Patrimonio

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deletePatrimonio(id: number): Promise<Patrimonio | null>{
        try{
            const patrimonio = await new this.PatrimonioRepository().deletePatrimonio(id)
            return patrimonio as unknown as Patrimonio

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { PatrimonioService }