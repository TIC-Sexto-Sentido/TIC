import { Response, Request } from 'express';
import { RequestWithParams } from '../../@types/custom';
import { ManutencaoService } from './manutencao-service';

class RedirectServiceManutencao {
    private ManutencaoService = ManutencaoService;

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            if(request.method.toString() === 'GET'){
                let data

                if(!request.params.id){
                    data = await new this.ManutencaoService()
                        .getAllManutencaos()              
                } else {
                    data = await new this.ManutencaoService()
                        .getManutencao(Number(request.params.id))
                }

                if(data){
                    return response.status(200).json(data)
                }
                
                return response.status(400).send('não encontrado')
   
            } 

            if(request.method.toString() === 'POST'){

                const data = await new this.ManutencaoService()
                    .postManutencao(request as unknown as RequestWithParams)

                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            } 

            if(request.method.toString() === 'PUT'){
                const data = await new this.ManutencaoService()
                    .putManutencao(request as unknown as RequestWithParams)
                
                if(data){
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            }

            if(request.method.toString() === 'DELETE'){
                const data = await new this.ManutencaoService()
                    .deleteManutencao(Number(request.params.id))
                
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

export { RedirectServiceManutencao };
