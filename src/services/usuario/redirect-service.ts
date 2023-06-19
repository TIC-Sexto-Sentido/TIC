import { Response, Request } from 'express';
import { RequestWithParams } from '../../@types/custom';
import { UsuarioService } from './usuario-service';

class RedirectServiceUsuario {
    private UsuarioService = UsuarioService;

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            if(request.method.toString() === 'GET'){

                const data = await new this.UsuarioService()
                        .getUsuario(request as unknown as RequestWithParams)

                if(data){
                    return response.status(200).json(data)
                }
                
                return response.status(400).send('não encontrado')
   
            } 

            if(request.method.toString() === 'POST'){

                const data = await new this.UsuarioService()
                    .postUsuario(request as unknown as RequestWithParams)

                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            } 

            if(request.method.toString() === 'PUT'){
                const data = await new this.UsuarioService()
                    .putUsuario(request as unknown as RequestWithParams)
                
                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            }

            if(request.method.toString() === 'DELETE'){
                const data = await new this.UsuarioService()
                    .deleteUsuario(Number(request.params.id))
                
                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            } 

            return response.status(400).send('Bad request')

        } catch (error) {
            console.log(error)
            return response.status(503).send('Internal error')
        }
    }
}

export { RedirectServiceUsuario };
