export const apiCall = (merchants) => {
  return new Promise(resolve => {
    setTimeout(_ => resolve(merchants), 1000)
  })
};