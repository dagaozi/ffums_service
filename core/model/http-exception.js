/*
 * @Author: 异常处理 
 * @Date: 2019-09-25 10:49:20 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-05 10:45:32
 */

class BaseException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = code
  }
}
class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = code
  }
}

class ParameterException extends HttpException {
  constructor(msg = '参数错误', errorCode = 10000) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = 400
  }
}

class NotFound extends HttpException {
  constructor(msg = '资源未找到', errorCode = 10000) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = 404
  }
}

class AuthFailed extends HttpException {
  constructor(msg = '授权失败', errorCode = 100004) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = 401
  }
}

class Forbidden extends HttpException {
  constructor(msg = '禁止访问', errorCode = 10006) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = 403
  }
}

class LikeError extends HttpException {
  constructor(msg = '你已经点过赞', errorCode = 60001) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = 400
  }
}

class DisLikeError extends HttpException {
  constructor(msg = '你已取消点赞', errorCode = 60002) {
    super()
    this.msg = msg
    this.errorCode = errorCode
    this.code = 400
  }
}

module.exports = {
  BaseException,
  HttpException,
  ParameterException,
  NotFound,
  AuthFailed,
  Forbidden,
  LikeError,
  DisLikeError
}
