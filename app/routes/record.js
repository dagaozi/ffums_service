/*指标记录
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:23:06 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-20 20:25:17
 */
const router = require('koa-router')()
const { Sequelize } = require('sequelize')
const { HttpException } = require('../../core/model/http-exception')
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const {ItemRecord}=require('../model/itemRecord')
router.prefix('/record')
router.post('/addOrUpdate', async (ctx, next) => { 
  const record=ctx.request.body
  if(record.id){
    await ItemRecord.update(
      record,
      {where:{id:record.id}}
      )
    ctx.body = new SuccessModel('修改记录成功')
  }else{
    await ItemRecord.create(record)
    ctx.body = new SuccessModel('新增记录成功')
  }
  
})
//根据随访id获取指标信息
router.post('/findByFollowId', async (ctx, next) => { 
  const followId=ctx.request.body
  console.log('followId',followId);
  const list = await ItemRecord.findAll()
  ctx.body = new SuccessModel(list)
})
module.exports = router