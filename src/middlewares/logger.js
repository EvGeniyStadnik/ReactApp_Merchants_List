import { createLogger } from 'redux-logger';

import requestsStatuses from './../utils/requestsStatuses';

export default createLogger({
  collapsed: true,
  timestamp: false,
  diff: true,
  duration: true,

  colors: {
    title: (action) => {
      const type = action.type;

      if (type.endsWith(requestsStatuses.pending)) return '#bc9410';
      if (type.endsWith(requestsStatuses.failure)) return '#f20404';
      if (type.endsWith(requestsStatuses.success)) return '#4caf50';

      return 'inherit';
    },
    prevState: () => '#342eff',
    action: () => '#ff6611',
    nextState: () => '#07ff33',
    error: () => '#f20404',
  },
});
