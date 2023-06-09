import { Response, Request } from 'express';
import { RequestWithParams } from '../../@types/custom';
import { PatrimonioService } from '../../services';

class RedirectService {
    private PatrimonioService = PatrimonioService;

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            if (request.method.toString() === 'GET') {
                let data

                const { id, usuario } = request.params

                if (id) {
                    data = await new this.PatrimonioService()
                        .getPatrimonio(Number(request.params.id))
                } else if (usuario) {
                    data = await new this.PatrimonioService()
                        .getPatrimonioUsuario(Number(usuario))
                } else {
                    data = await new this.PatrimonioService()
                        .getAllPatrimonios()
                }

                if (data) {
                    return response.status(200).json(data)
                }

                return response.status(400).send('não encontrado')

            }

            if (request.method.toString() === 'POST') {

                const data = await new this.PatrimonioService()
                    .postPatrimonio(request as unknown as RequestWithParams)

                if (data) {
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            }

            if (request.method.toString() === 'PUT') {
                const data = await new this.PatrimonioService()
                    .putPatrimonio(request as unknown as RequestWithParams)

                if (data) {
                    return response.status(200).json(data)
                }
                return response.status(400).send('não houve gravação')
            }

            if (request.method.toString() === 'DELETE') {
                const data = await new this.PatrimonioService()
                    .deletePatrimonio(Number(request.params.id))

                if (data) {
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

export { RedirectService };
