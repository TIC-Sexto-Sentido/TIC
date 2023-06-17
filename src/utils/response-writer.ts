import { Response } from 'express';

class ResponseWriter {
    public static error(response: Response, error: Error): void {
        const [status, json] = error.message.split(': ');

        if (Number(status)) {
            response.status(Number(status)).send(error);
        } else {
            response.status(500).json({
                data: null,
                messages: ['Ocorreu um erro inesperado.'],
            });
        }
    }

}

export { ResponseWriter };
