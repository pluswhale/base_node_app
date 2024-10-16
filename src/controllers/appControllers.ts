import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { UserWalletDataDTO } from '../dtos/userWalletDataDTO';
import { errorResponse, successResponse } from '../utils/responseObject';

const saveUserKeysIntoKuberSecret = async (req: Request<{}, {}, UserWalletDataDTO>, res: Response): Promise<void> => {
  const { walletName, walletFormat } = req.body;

  try {
    const user = false;
    if (!user) {
      res.status(400).json(errorResponse('User not found', ''));
    }

    res.status(200).json(successResponse('Login successful', { walletName, walletFormat }));
  } catch (error: any) {
    logger.error(`Error during login: ${error}`);
    res.status(500).json(errorResponse('Internal server error', error.message));
  }
};
export { saveUserKeysIntoKuberSecret };
