import { PatrimonioDB } from "../models";
import {prisma} from '../lib/prisma'
import { ExceptionTreatment } from "../utils";

class PatrimonioRepository{
    public async createPatrimonio(patrimonio: PatrimonioDB): Promise<PatrimonioDB | null>{
        try{
            const dbPatrimonio = await prisma.patrimonio.create(
                {
                    data: {
                        cod_patrimonio: Number(patrimonio.cod_patrimonio),
                        tipo_patrimonio:  patrimonio.tipo_patrimonio,
                        nome_patrimonio:  patrimonio.nome_patrimonio,
                        qtde: Number(patrimonio.qtde),
                        localizacao:  Number(patrimonio.localizacao),
                        ativo:  Boolean(patrimonio.ativo)
                    }
                }
            )
            
            return dbPatrimonio

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }
    public async getAllPatrimonios(): Promise<PatrimonioDB[] | null>{
        try{
            const dbPatrimonio = await prisma.patrimonio.findMany()
           
            return dbPatrimonio;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getPatrimonio(id: number): Promise<PatrimonioDB | null>{
        try{
            const dbPatrimonio = await prisma.patrimonio.findFirst({
                where: {
                    cod_patrimonio: id
                }
            })
            
            return dbPatrimonio;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }
    public async putPatrimonio(patrimonio: PatrimonioDB): Promise<PatrimonioDB | null>{
        try{
            const dbPatrimonio = await prisma.patrimonio.update(
                {
                    where: {
                        cod_patrimonio: Number(patrimonio.cod_patrimonio)
                    },
                    data: {
                        tipo_patrimonio:  patrimonio.tipo_patrimonio,
                        nome_patrimonio:  patrimonio.nome_patrimonio,
                        qtde: Number(patrimonio.qtde),
                        localizacao:  Number(patrimonio.localizacao),
                        ativo:  Boolean(patrimonio.ativo)
                    }
                }
            )

            return dbPatrimonio

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }
    public async deletePatrimonio(id: number): Promise<PatrimonioDB | null>{
        try{
            const dbPatrimonio = await prisma.patrimonio.delete(
                {
                    where: {
                        cod_patrimonio: Number(id)
                    }
                }
            )

            
            return dbPatrimonio

        } catch (error){
            console.log(error)
            
            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }


}
export {PatrimonioRepository}