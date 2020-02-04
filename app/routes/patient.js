/*
患者数据
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-20 18:28:11
 */
const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const { HttpException } = require('../../core/model/http-exception')
const { AddPatientV, UpdatePatientV } = require('../validator/patient')
const { Patient } = require('../model/patient')


router.prefix('/patient')
router.post('/add', async (ctx, next) => {
  const v = await new AddPatientV().validate(ctx)
  const patient = {
    name: v.get('body.name'),
    gender: v.get('body.gender'),
    idCard: v.get('body.idCard'),
    inPatientId: v.get('body.inPatientId'),
    mzId: v.get('body.mzId'),
    department: v.get('body.department'),
    phone1: v.get('body.phone1'),
    phone2: v.get('body.phone2'),
    address: v.get('body.address'),
    remark: v.get('body.remark'),
  }
  //判断条件在校验器中
  await Patient.create(patient)
  ctx.body = new SuccessModel('新增患者成功')

})

router.get('/getPatient', async (ctx, next) => {
  const patient = await Patient.findOne({
    where: {
      id: ctx.request.body.id
    }
  })
  //通过下面的方法过滤掉不需要的字段，如果是对一个数组序列号且去掉不需要的数据，就需要在对象上增加exclude字段了通过原型链添加，
  //直接添加会被sequelize映射到数据库上示例见patient对象
  // patient.exclude=['id','name']
  ctx.body = new SuccessModel(patient)
})
router.get('/getPatients', async (ctx, next) => {
  const list = await Patient.findAll({
    order: [
      ['createdAt', 'DESC']
    ]
  })
  ctx.body = new SuccessModel(list)
})
router.get('/search', async (ctx, next) => {
  const list = await Patient.getPatientByConditon(ctx.request.query)
  ctx.body = new SuccessModel(list)
})
router.get('/getbyId', async (ctx, next) => {
  const patient = await Patient.findOne({
    where: {
      id: ctx.request.query.id
    }
  })
  ctx.body = new SuccessModel(patient)
})
router.post('/update', async (ctx, next) => {
  const v = await new UpdatePatientV().validate(ctx)
  const updatePatient = {
    id: v.get('body.id'),
    name: v.get('body.name'),
    gender: v.get('body.gender'),
    idCard: v.get('body.idCard'),
    inPatientId: v.get('body.inPatientId'),
    mzId: v.get('body.mzId'),
    department: v.get('body.department'),
    phone1: v.get('body.phone1'),
    phone2: v.get('body.phone2'),
    address: v.get('body.address'),
    remark: v.get('body.remark'),
  }

  //判断条件在校验器中
  const patient = await Patient.findOne({
    where: {
      id: updatePatient.id
    }
  })
  if (!patient) {
    ctx.body = new ErrorModel("未找到该患者")
  } else {
    Object.assign(patient, updatePatient)
    await patient.save()
    ctx.body = new SuccessModel('修改患者成功')
  }


})
//删除患者以及患者的随访信息
router.post('/delete', async (ctx, next) => {
  const patientId = ctx.request.body.patientId
  const patient = await Patient.findOne({
    where: {
      id: patientId
    }
  })
  if (!patient) {
    ctx.body = new ErrorModel("未找到该患者")
  } else {
   await patient.delete()
   
    ctx.body = new SuccessModel('删除患者成功')
  }
})


module.exports = router