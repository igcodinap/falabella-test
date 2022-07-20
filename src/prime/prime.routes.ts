import {Router, Request, Response} from 'express';
import {PrimeController} from './prime.controller'
import {PrimeValidation} from './prime.validation'

export const PrimeRouter = Router();

PrimeRouter.route('/list/:end')
    .get(PrimeValidation.getList, PrimeController.getList)