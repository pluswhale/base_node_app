import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  userId: string;
}

const someMiddleWare = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.params.userId;

  try {
    let user = false;
    if (!user) {
      return next(); // Proceed to the next middleware if the user is not found
    }

    let eligibleReferrals10 = 0;
    let eligibleReferrals25 = 0;

    let task10Updated = false;
    let task25Updated = false;

    if (task10Updated || task25Updated) {
      await console.log('fff');
    }
    next();
  } catch (error) {
    console.error('Error updating referral tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { someMiddleWare };
