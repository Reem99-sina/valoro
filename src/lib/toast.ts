import { toast as toastify } from "react-toastify";

export const toast = {
  success: (message: string) => {
    toastify.success(message);
  },
  error: (message: string) => {
    toastify.error(message);
  },
};
