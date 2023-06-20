import { Usuario } from "../../models";
import {prisma} from '../../lib/prisma'
import { ExceptionTreatment } from "../../utils";

class UsuarioRepository{
    public async createUsuario(usuario: Usuario): Promise<Usuario | null>{
        try{
            const dbUsuario = await prisma.usuario.create(
                {
                    data: {
                        email: usuario.email,  
                        senha: usuario.senha
                    }
                }
            )
            
            return dbUsuario

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async getUsuario(usuario: Usuario): Promise<Usuario | null>{
        try{
            const dbusuario = await prisma.usuario.findFirstOrThrow({
                where: {
                    email: usuario.email,
                    senha: usuario.senha
                }
            })
            if(usuario.email === dbusuario.email && usuario.senha === dbusuario.senha){
                return dbusuario //logica necessaria pois "find first or throw estava retornando o primeiro"
            }
            
            return null;

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putUsuario(usuario: Usuario): Promise<Usuario | null>{
        try{
            const dbusuario = await prisma.usuario.update(
                {
                    where: {
                        id_usuario: Number(usuario.id_usuario)
                    },
                    data: {
                        email: usuario.email,  
                        senha: usuario.senha
                    }
                }
            )

            return dbusuario

        } catch (error){
            console.log(error)

            throw new ExceptionTreatment(
                error as Error,
                503,
                'service temporarily unavailable'
            );
        }
    }

    public async deleteUsuario(id: number): Promise<Usuario | null>{
        try{
            const dbusuario = await prisma.usuario.delete(
                {
                    where: {
                        id_usuario: Number(id)
                    }
                }
            )

            return dbusuario

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
export {UsuarioRepository}