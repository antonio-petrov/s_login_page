import { toast } from 'react-toastify';

export const handleSocialClick = (platform: string) => {
  toast.info(`Social login via ${platform} is not implemented yet.`, {
    autoClose: 1000,
    closeButton: false,
  });
};
