/*
随访数据
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-20 13:15:39
 */
const router = require('koa-router')()
const { Sequelize } = require('sequelize')
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const { HttpException } = require('../../core/model/http-exception')
const { sequelize } = require('../db/orm')
const { AddFollowUpV,UpdateFollowUpV } = require('../validator/followUp')
const { FollowUp } = require('../model/followUp')

router.prefix('/followup')


//添加随访记录
/**
 *   @api {POST} followup/add 添加随访记录          
 *   @apiGroup followup
 *   @apiParam  {Integer} patientId   病人id  
 *   @apiParam  {Date} dateTime   随访时间  
 *   @apiParam  {String} type   随访类型  
 *   @apiParam  {String} pathologicalNumber   病理号  
 *   @apiParam  {String} note   随访注意事项 
 */
router.post('/add', async (ctx, next) => {
  //const v = await new AddFollowUp().validate(ctx)
  const addFollow = ctx.request.body
  await FollowUp.create(addFollow)
  ctx.body = new SuccessModel('新增随访记录成功')
})

/**
 *   @api {GET} followup/getByPatientId 根据病人获取随访记录          
 *   @apiGroup followup
 *   @apiParam  {Integer} patientId   id  
 */
router.get('/getByPatientId', async (ctx, next) => {
  const list = await FollowUp.findAll({
    where:{
      patientId:ctx.request.query.patientId
    },
    order: [
      ['createdAt', 'DESC']
    ]
  })
  ctx.body = new SuccessModel(list)
})
module.exports = router