export const getMerchantById = (state, id) => {
  return state.dashboard.merchants.value.find(merchant => merchant.id === id)
};