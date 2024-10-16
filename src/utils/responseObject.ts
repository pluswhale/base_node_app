export interface ResponseObject<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export const successResponse = <T>(message: string, data: T): ResponseObject<T> => ({
  success: true,
  message,
  data,
});

export const errorResponse = (message: string, error: string): ResponseObject<null> => ({
  success: false,
  message,
  error,
});
