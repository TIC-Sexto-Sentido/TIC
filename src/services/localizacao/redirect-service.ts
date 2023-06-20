import { Response, Request } from 'express';
import { RequestWithParams } from '../../@types/custom';
import { LocalizacaoService } from './localizacao-service';

class RedirectServiceLocalizacao {
    private LocalizacaoService = LocalizacaoService;

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            if(request.method.toString() === 'GET'){
                let data

                if(!request.params.id){
                    data = await new this.LocalizacaoService()
                        .getAllLocalizacaos()              
                } else {
                    data = await new this.LocalizacaoService()
                        .getLocalizacao(Number(request.params.id))
                }

                if(data){
                    return response.status(200).json(data)
                }
                
                return response.status(400).send('não encontrado')
   
            } 

            if(request.method.toString() === 'POST'){

                const data = await new this.LocalizacaoService()
                    .postLocalizacao(request as unknown as RequestWithParams)

                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            } 

            if(request.method.toString() === 'PUT'){
                const data = await new this.LocalizacaoService()
                    .putLocalizacao(request as unknown as RequestWithParams)
                
                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            }

            if(request.method.toString() === 'DELETE'){
                const data = await new this.LocalizacaoService()
                    .deleteLocalizacao(Number(request.params.id))
                
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

export { RedirectServiceLocalizacao };
