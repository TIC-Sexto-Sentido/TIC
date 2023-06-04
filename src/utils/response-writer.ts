import { Response } from 'express';

class ResponseWriter {
    public static error(response: Response, error: Error): void {
        const [status, xml] = error.message.split(': ');

        if (Number(status)) {
            response.header('Content-type', 'application/problem+xml');
            response.status(Number(status)).send(xml);
        } else {
            response.status(500).json({
                data: null,
                messages: ['Ocorreu um erro inesperado.'],
            });
        }
    }

    public static success(
        response: Response,
        statusCode: number,
        data: any
    ): void {
        const header = {
            'Content-type': 'application/xml',
            'PI-ResourceId': data.headers.piResourceID,
        };

        if (data.body !== null) {
            const body = "Ok"
            response.header(header);
            response.status(statusCode).send(body);
        } else {
            response.header(header);
            response.status(statusCode).send();
        }
    }

}

export { ResponseWriter };
