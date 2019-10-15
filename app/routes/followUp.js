/*
患者数据
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-08 12:02:35
 */
const router = require('koa-router')()
const { Sequelize } = require('sequelize')
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const { HttpException } = require('../../core/model/http-exception')
const { sequelize } = require('../db/orm')
const { AddFollowUpV,UpdateFollowUpV } = require('../validator/followUp')
const { FollowUp } = require('../model/followUp')

router.prefix('/followup')
router.post('/add', async (ctx, next) => {
  //const v = await new AddFollowUp().validate(ctx)
  const addFollow = ctx.request.body
  await FollowUp.create(addFollow)
  ctx.body = new SuccessModel('新增随访记录成功')
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
  const list=await Patient.getPatientByConditon(ctx.request.query)
  ctx.body = new SuccessModel(list)
})
router.get('/getbyId', async (ctx, next) => {
  const patient=await Patient.findOne({
    where :{
      id:ctx.request.query.id
    }
  })
  ctx.body = new SuccessModel(patient)
})
router.post('/update', async (ctx, next) => {
  const v = await new UpdatePatientV().validate(ctx)
  const updatePatient = {
    id:v.get('body.id'),
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
  const patient= await Patient.findOne({
    where:{
      id:updatePatient.id
    }
  })
  if(!patient){
    ctx.body = new ErrorModel("未找到该患者")
  }else{
    Object.assign(patient,updatePatient)
    await patient.save()
    ctx.body = new SuccessModel('修改患者成功')
  }
 

})
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 patient json'
  }
})


module.exports = router