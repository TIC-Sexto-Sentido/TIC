import { ParamsDictionary } from 'express-serve-static-core';

interface RequestWithParams extends Request {
    params: ParamsDictionary;
}
