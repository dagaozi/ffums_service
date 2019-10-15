/*
患者数据
 * @Author: dagaozi 
 * @Date: 2019-09-24 12:24:18 
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-10-08 20:29:53
 */
const router = require('koa-router')()
const { Sequelize } = require('sequelize')
const { SuccessModel, ErrorModel } = require('../../core/model/resModel1')
const { HttpException } = require('../../core/model/http-exception')
const { sequelize } = require('../db/orm')
const { AddItemCategoryConfigV,UpdateItemCategoryConfigV} = require('../validator/itemCategoryConfig')
const { ItemCategoryConfig } = require('../model/itemCategoryConfig')

router.prefix('/itemCategoryconfig')
router.post('/add', async (ctx, next) => {
  const v = await new AddItemCategoryConfigV().validate(ctx)
  const newItem = ctx.request.body
  await ItemCategoryConfig.create(newItem)
  ctx.body = new SuccessModel('新增目录成功')

})

router.get('/getAll', async (ctx, next) => {
  const list = await ItemCategoryConfig.findAll({
    attributes: ['id','name', 'category','sort'],
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
  const item=await ItemCategoryConfig.findOne({
    where :{
      id:ctx.request.query.id
    }
  })
  ctx.body = new SuccessModel(item)
})
router.post('/update', async (ctx, next) => {
  const v = await new UpdateItemCategoryConfigV().validate(ctx)
  const updateItem = ctx.request.body
  const item= await ItemCategoryConfig.findOne({
    where:{
      id:updateItem.id
    }
  })
  if(!item){
    ctx.body = new ErrorModel("未找到该目录")
  }else{
    Object.assign(item,updateItem)
    await item.save()
    ctx.body = new SuccessModel('修改目录成功')
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