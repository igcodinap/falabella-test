import { Router } from "express";
import { PrimeRouter} from './prime/prime.routes'

export const router = Router();
router.use('/prime', PrimeRouter)