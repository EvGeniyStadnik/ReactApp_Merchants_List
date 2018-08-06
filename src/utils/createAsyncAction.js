import requestsStatuses from './requestsStatuses';

export const failureAction = (status) => {
  return `${status}_${requestsStatuses.failure}`;
};

export const pendingAction = (status) => {
  return `${status}_${requestsStatuses.pending}`;
};

export const successAction = (status) => {
  return `${status}_${requestsStatuses.success}`;
};

export default function createAsyncAction(status) {
  return {
    failure: failureAction(status),
    pending: pendingAction(status),
    success: successAction(status),
  }
}