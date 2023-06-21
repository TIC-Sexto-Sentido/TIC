import { Response, Request } from 'express';
import { RequestWithParams } from '../../@types/custom';
import { UsuarioService } from './usuario-service';

class RedirectServiceUsuarioVerifica {
    private UsuarioService = UsuarioService;

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            if(request.method.toString() === 'POST'){

                const data = await new this.UsuarioService()
                    .getUsuario(request as unknown as RequestWithParams)

                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            } 
            return response.status(400).send('não houve gravação')

        } catch (error) {
            console.log(error)
            return response.status(503).send('Internal error')
        }
    }
}

export { RedirectServiceUsuarioVerifica };
