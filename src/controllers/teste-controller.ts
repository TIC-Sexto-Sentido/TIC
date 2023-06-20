import { Response, Request } from 'express';
import { ResponseWriter } from '../utils';

class TesteController {
    private ResponseWriter = ResponseWriter;

    public async handle(request: Request, response: Response): Promise<void> {
        console.log(request.body)
        try {
            console.log("chegou aqui")
            const xmlResponseOk = `
            <?xml version="1.0" encoding="UTF-8"?>
            <message>
                rota funcionando
            </message>
            `
            const data = {
                body: xmlResponseOk,
                headers: {
                    piResourceID: '333333',
                },
            };
        } catch (error) {
            this.ResponseWriter.error(response, error as Error);
        }
    }
}

export { TesteController };
