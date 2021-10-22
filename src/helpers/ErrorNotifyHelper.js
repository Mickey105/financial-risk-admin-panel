import { errorNotification } from '../common/Toast';

export const displayErrors = e => {
  if (e?.code === 'ECONNABORTED') {
    errorNotification('Request Timeout, Make sure you are connected to network.');
  } else {
    switch (e?.response?.data?.status) {
      case 'INTERNAL_SERVER_ERROR':
        errorNotification('Internal server error');
        break;
      case 'ERROR':
        errorNotification(
          e?.response?.data?.message ?? 'It seems like server is down, Please try again later.'
        );
        break;
      case 'BAD_REQUEST':
        errorNotification(e?.response?.data?.message || 'Bad request');
        break;
      default:
        if(e?.message !== 'Previous same call cancellation') {
        errorNotification('Something went wrong, Please try again later.');
        throw e;
        }
    }
  }
};
