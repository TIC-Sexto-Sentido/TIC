import { Localizacao } from "../models";
import {prisma} from '../lib/prisma'
import { ExceptionTreatment } from "../utils";

class LocalizacaoRepository{
    public async createLocalizacao(localizacao: Localizacao): Promise<Localizacao | null>{
        try{
            const dbLocalizacao = await prisma.localizacao.create(
                {
                    data: {
                        sala: localizacao.sala,
                        prateleira: localizacao.prateleira
                    }
                }
            )
            
            return dbLocalizacao

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async getAllLocalizacoes(): Promise<Localizacao[] | null>{
        try{
            const dblocalizacao = await prisma.localizacao.findMany()
           
            return dblocalizacao;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getLocalizacao(id: number): Promise<Localizacao | null>{
        try{
            const dblocalizacao = await prisma.localizacao.findFirst({
                where: {
                    id_localizacao: id
                }
            })
            
            return dblocalizacao;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putLocalizacao(localizacao: Localizacao): Promise<Localizacao | null>{
        try{
            const dblocalizacao = await prisma.localizacao.update(
                {
                    where: {
                        id_localizacao: Number(localizacao.id_localizacao)
                    },
                    data: {
                        sala: localizacao.sala,
                        prateleira: localizacao.prateleira
                    }
                }
            )

            return dblocalizacao

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async deleteLocalizacao(id: number): Promise<Localizacao | null>{
        try{
            const dblocalizacao = await prisma.localizacao.delete(
                {
                    where: {
                        id_localizacao: Number(id)
                    }
                }
            )

            return dblocalizacao

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
export {LocalizacaoRepository}