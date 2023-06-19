import { Usuario } from "../../models";
import { RequestWithParams } from '../../@types/custom';
import { UsuarioRepository } from "../../repositories";

class UsuarioService{
    private UsuarioRepository = UsuarioRepository;

    public async getUsuario(request: RequestWithParams): Promise<Usuario | null>{
        try{
            const body = request as unknown as Usuario
            const usuario = await new this.UsuarioRepository().getUsuario(body)

            return usuario

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async postUsuario(request: RequestWithParams): Promise<Usuario | null>{
        try{
            const usuario = request.body as unknown as Usuario
            const usuarioDb = await new this.UsuarioRepository().createUsuario(usuario)
            
            return usuarioDb

        } catch(error) {
            console.log(error)
            
            throw new Error(`503: serviço indisponivel`);
        }

    }

    public async putUsuario(request: RequestWithParams): Promise<Usuario | null>{
        try{
            const usuario = request.body as unknown as Usuario
            const updated = await new this.UsuarioRepository().putUsuario(usuario)
            
            return updated

        } catch(error) {
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }

    public async deleteUsuario(id: number): Promise<Usuario | null>{
        try{
            const usuario = await new this.UsuarioRepository().deleteUsuario(id)
            return usuario

        } catch (error){
            console.log(error)
            throw new Error(`503: serviço indisponivel`);
        }
    }
}

export { UsuarioService }