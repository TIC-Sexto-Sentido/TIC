import { Patrimonio, PatrimonioDB } from "../models";
import { RequestWithParams } from '../@types/custom';
import { PatrimonioRepository } from "../repositories";

class PatrimonioService{
    private PatrimonioRepository = PatrimonioRepository;
    public async getAllPatrimonios(): Promise<Patrimonio[] | null>{
        try{
            const patrimonios = await new PatrimonioRepository().getAllPatrimonios()
            const patrimoniosView = patrimonios.map((pat) => pat as unknown as Patrimonio)
            return patrimoniosView
        } catch(error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getPatrimonio(id: number): Promise<Patrimonio | null>{
        try{
            const patrimonio = await new PatrimonioRepository().getPatrimonio(id)
            return patrimonio as unknown as Patrimonio
        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postPatrimonio(request: RequestWithParams): Promise<{status: number, message: string}>{
        try{
            const patrimonio = request.body as unknown as PatrimonioDB
            const salvo = await new PatrimonioRepository().createPatrimonio(patrimonio)
            if(salvo){
                return {status: 200, message: "gravado com sucesso"}
            }
            return {status: 403, message: "erro na gravação"}
        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putPatrimonio(request: RequestWithParams): Promise<Patrimonio | null>{
        try{
            const patrimonio = request.body as unknown as PatrimonioDB
            const updated = await new PatrimonioRepository().putPatrimonio(patrimonio)
            
            return updated as unknown as Patrimonio
        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deletePatrimonio(id: number): Promise<Patrimonio | null>{
        try{
            const patrimonio = await new PatrimonioRepository().deletePatrimonio(id)
            return patrimonio as unknown as Patrimonio
        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { PatrimonioService }