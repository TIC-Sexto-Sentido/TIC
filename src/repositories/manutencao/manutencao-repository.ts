import { Manutencao } from "../../models";
import {prisma} from '../../lib/prisma'
import { ExceptionTreatment } from "../../utils";

class ManutencaoRepository{
    public async createManutencao(manutencao: Manutencao): Promise<Manutencao | null>{
        try{
            const dbManutencao = await prisma.manutencao.create(
                {
                    data: {
                        cod_manutencao: Number(manutencao.cod_manutencao),
                        cod_patrimonio: Number(manutencao.cod_patrimonio),  
                        data_manutencao: manutencao.data_manutencao
                    }
                }
            )
            
            return dbManutencao

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async getAllManutencoes(): Promise<Manutencao[] | null>{
        try{
            const dbmanutencao = await prisma.manutencao.findMany()
           
            return dbmanutencao;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getManutencao(id: number): Promise<Manutencao | null>{
        try{
            const dbmanutencao = await prisma.manutencao.findFirst({
                where: {
                    cod_manutencao: id
                }
            })
            
            return dbmanutencao;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putManutencao(manutencao: Manutencao): Promise<Manutencao | null>{
        try{
            const dbmanutencao = await prisma.manutencao.update(
                {
                    where: {
                        cod_manutencao: Number(manutencao.cod_manutencao)
                    },
                    data: {
                        cod_patrimonio: Number(manutencao.cod_patrimonio),  
                        data_manutencao: manutencao.data_manutencao
                    }
                }
            )

            return dbmanutencao

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async deleteManutencao(id: number): Promise<Manutencao | null>{
        try{
            const dbmanutencao = await prisma.manutencao.delete(
                {
                    where: {
                        cod_manutencao: Number(id)
                    }
                }
            )

            return dbmanutencao

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
export {ManutencaoRepository}