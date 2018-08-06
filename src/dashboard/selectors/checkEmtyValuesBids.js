export const checkEmptyValuesBids = (bids) => {
  return bids.find(bid => {
    for(let key in bid){
      if (typeof bid[key] === 'string' && bid[key].length === 0){
        return bid;
      }
    }
  });
};