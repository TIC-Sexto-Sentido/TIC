import { ArquivoAnexado } from "../../models";
import {prisma} from '../../lib/prisma'
import { ExceptionTreatment } from "../../utils";

class ArquivoAnexadoRepository{
    public async createArquivoAnexado(arquivoAnexado: ArquivoAnexado): Promise<ArquivoAnexado | null>{
        try{
            const dbArquivoAnexado = await prisma.arquivoAnexado.create(
                {
                    data: {
                        cod_patrimonio: Number(arquivoAnexado.cod_patrimonio),  
                        caminho: arquivoAnexado.caminho
                    }
                }
            )
            
            return dbArquivoAnexado

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async getAllArquivos(): Promise<ArquivoAnexado[] | null>{
        try{
            const dbarquivoAnexado = await prisma.arquivoAnexado.findMany()
           
            return dbarquivoAnexado;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async getArquivoAnexado(id: number): Promise<ArquivoAnexado | null>{
        try{
            const dbarquivoAnexado = await prisma.arquivoAnexado.findFirst({
                where: {
                    id_arquivo: id
                }
            })
            
            return dbarquivoAnexado;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putArquivoAnexado(arquivoAnexado: ArquivoAnexado): Promise<ArquivoAnexado | null>{
        try{
            const dbarquivoAnexado = await prisma.arquivoAnexado.update(
                {
                    where: {
                        id_arquivo: Number(arquivoAnexado.id_arquivo)
                    },
                    data: {
                        cod_patrimonio: Number(arquivoAnexado.cod_patrimonio),  
                        caminho: arquivoAnexado.caminho
                    }
                }
            )

            return dbarquivoAnexado

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async deleteArquivoAnexado(id: number): Promise<ArquivoAnexado | null>{
        try{
            const dbarquivoAnexado = await prisma.arquivoAnexado.delete(
                {
                    where: {
                        id_arquivo: Number(id)
                    }
                }
            )

            return dbarquivoAnexado

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
export {ArquivoAnexadoRepository}