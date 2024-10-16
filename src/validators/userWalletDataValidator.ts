import { body } from 'express-validator';

export const validateUserKeys = [
  body('walletName').isString().withMessage('wallet_name must be a string'),
  body('walletFormat').isString().withMessage('wallet_format must be a string'),
];
