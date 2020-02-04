/*
患者数据
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-20 16:15:42
 */
const router = require('koa-router')()
const { Sequelize } = require('sequelize')
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const { HttpException } = require('../../core/model/http-exception')
const { sequelize } = require('../db/orm')
const { AddItemConfigV,UpdateItemConfigV} = require('../validator/itemConfig')
const { ItemConfig } = require('../model/itemConfig')

router.prefix('/itemconfig')
router.post('/add', async (ctx, next) => {
  const v = await new AddItemConfigV().validate(ctx)
  const newItem = ctx.request.body
  await ItemConfig.create(newItem)
  ctx.body = new SuccessModel('新增项目成功')

})

router.get('/getAll', async (ctx, next) => {
  const list = await ItemConfig.findAll({
    //attributes: ['name', 'categoryId','inputType','typeOption','sort'],
    order: [
      ['createdAt', 'ASC']
    ],
    raw:true
  })
  ctx.body = new SuccessModel(list)
})
// router.get('/search', async (ctx, next) => {
//   const list=await Patient.getPatientByConditon(ctx.request.query)
//   ctx.body = new SuccessModel(list)
// })
router.get('/getbyId', async (ctx, next) => {
  const item=await ItemConfig.findOne({
    where :{
      id:ctx.request.query.id
    }
  })
  ctx.body = new SuccessModel(item)
})
router.post('/update', async (ctx, next) => {
  const v = await new UpdateItemConfigV().validate(ctx)
  const updateItem = ctx.request.body
  const item= await ItemConfig.findOne({
    where:{
      id:updateItem.id
    }
  })
  if(!item){
    ctx.body = new ErrorModel("未找到该项目")
  }else{
    Object.assign(item,updateItem)
    await item.save()
    ctx.body = new SuccessModel('修改项目成功')
  }
})
router.post('/addList', async (ctx, next) => {
 // const v = await new UpdateItemConfigV().validate(ctx)
  const updateItem = ctx.request.body
  const item= await ItemConfig.findOne({
    where:{
      id:updateItem.id
    }
  })
  if(!item){
    ctx.body = new ErrorModel("未找到该项目")
  }else{
    Object.assign(item,updateItem)
    await item.save()
    ctx.body = new SuccessModel('修改项目成功')
  }
})

module.exports = router