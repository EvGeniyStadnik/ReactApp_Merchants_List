export default function (namespace) {
  return function (action) {
    return `${namespace}_${action}`
  }
}