import { TipoPatrimonio } from "../../models";
import {prisma} from '../../lib/prisma'
import { ExceptionTreatment } from "../../utils";

class TipoPatrimonioRepository{
    public async createTipoPatrimonio(tipoPatrimonio: TipoPatrimonio): Promise<TipoPatrimonio | null>{
        try{
            const dbTipoPatrimonio = await prisma.tipoPatrimonio.create(
                {
                    data: {
                        nome: tipoPatrimonio.nome,
                        categoria: tipoPatrimonio.categoria
                    }
                }
            )
            
            return dbTipoPatrimonio

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async getAllTipoPatrimonio(): Promise<TipoPatrimonio[] | null>{
        try{
            const dbtipoPatrimonio = await prisma.tipoPatrimonio.findMany()
           
            return dbtipoPatrimonio;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getTipoPatrimonio(id: number): Promise<TipoPatrimonio | null>{
        try{
            const dbtipoPatrimonio = await prisma.tipoPatrimonio.findFirst({
                where: {
                    id_tipo: Number(id)
                }
            })
            
            return dbtipoPatrimonio;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putTipoPatrimonio(tipoPatrimonio: TipoPatrimonio): Promise<TipoPatrimonio | null>{
        try{
            const dbtipoPatrimonio = await prisma.tipoPatrimonio.update(
                {
                    where: {
                        id_tipo: Number(tipoPatrimonio.id_tipo) 
                    },
                    data: {
                        nome: tipoPatrimonio.nome,
                        categoria: tipoPatrimonio.categoria
                    }
                }
            )

            return dbtipoPatrimonio

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async deleteTipoPatrimonio(id: number): Promise<TipoPatrimonio | null>{
        try{
            const dbtipoPatrimonio = await prisma.tipoPatrimonio.delete(
                {
                    where: {
                        id_tipo: Number(id) 
                    }
                }
            )

            return dbtipoPatrimonio

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
export {TipoPatrimonioRepository}