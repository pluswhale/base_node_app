import express from 'express';
import { saveUserKeysIntoKuberSecret } from '../controllers/appControllers';
import { validateUserKeys } from '../validators/userWalletDataValidator';

const router = express.Router();

router.post('/save/wallet-data', validateUserKeys, saveUserKeysIntoKuberSecret);

export default router;
