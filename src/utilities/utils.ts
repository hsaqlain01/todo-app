export const getErrorResponse = (error: any) =>
  error?.response?.data?.message || "Unable to handle this request";
