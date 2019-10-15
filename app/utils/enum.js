function isType(val) {
  for (let key in this) {
    if (this[key] == val) {
      return true
    }
  }
  return false
}
const LoginType={
  USER_PHONE:100,
  USER_PASSWORD:101,
  isType
}
const UserType={
  USER:3,
  SUSER:6,
  ADMIN:9,
  isType
}
module.exports={
  LoginType,
  UserType
}