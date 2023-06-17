import { Response, Request } from 'express';
import { ResponseWriter } from '../utils';
import { RequestWithParams } from '../@types/custom';
import { PatrimonioService } from '../services';

class PatrimonioController {
    private ResponseWriter = ResponseWriter;
    private PatrimonioService = PatrimonioService;

    public async handle(request: Request, response: Response): Promise<void> {
        try {
            if(request.method.toString() === 'GET'){
                if(!request.params.id){
                    const data = await new this.PatrimonioService()
                        .getAllPatrimonios()
                    
                    response.status(200).json(data)
                }
                else {
                    const data = await new this.PatrimonioService()
                        .getPatrimonio(Number(request.params.id))
                
                    response.status(200).json(data)
                }
            } 

            if(request.method.toString() === 'POST'){

                const data = await new this.PatrimonioService()
                    .postPatrimonio(request as unknown as RequestWithParams)
                
                response.status(data.status).send(data.message)
            } 

            if(request.method.toString() === 'PUT'){
                const data = await new this.PatrimonioService()
                    .putPatrimonio(request as unknown as RequestWithParams)
                
                response.status(200).json(data)
            }

            if(request.method.toString() === 'DELETE'){
                const data = await new this.PatrimonioService()
                    .deletePatrimonio(Number(request.params.id))
                
                response.status(200).json(data)
            } 
        } catch (error) {
            console.log(error)
            this.ResponseWriter.error(response, error as Error);
        }
    }
}

export { PatrimonioController };
