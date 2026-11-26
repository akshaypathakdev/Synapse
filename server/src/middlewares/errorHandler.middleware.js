import { HTTP_STATUS } from "../constants/constants";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    statusCode,
    message: err.message || "Something went wrong",
    success: false,
    errors: err.errors || [],
  });
};

export { errorHandler };
