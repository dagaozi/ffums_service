/*
指标配置
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

/**
 *   @api {POST} itemCategoryconfig/add 新增目录
 *   @apiGroup itemCategoryconfig
 *   @apiParam  {String} name 目录名称   
 *   @apiParam  {Integer} categoryId 所属类别 {1:实验室指标/2:特检指标/3:人体成分/:4其他信息}   
 *   @apiParam  {Integer} sort 排序   
 */
router.post('/add', async (ctx, next) => {
  const v = await new AddItemCategoryConfigV().validate(ctx)
  const newItem = ctx.request.body
  await ItemCategoryConfig.create(newItem)
  ctx.body = new SuccessModel('新增目录成功')

})
/**
 *   @api {GET} itemCategoryconfig/getAll 获取所有指标目录
 *   @apiGroup itemCategoryconfig
 */
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
/**
 *   @api {GET} itemCategoryconfig/getbyId 获取目录
 *   @apiGroup itemCategoryconfig
 *   @apiParam  {Integer} id 目录ID   
 */
router.get('/getbyId', async (ctx, next) => {
  const item=await ItemCategoryConfig.findOne({
    where :{
      id:ctx.request.query.id
    }
  })
  ctx.body = new SuccessModel(item)
})

/**
 *   @api {GET} itemCategoryconfig/update 更新目录
 *   @apiGroup itemCategoryconfig
 *   @apiParam  {Integer} id 目录ID   
 *   @apiParam  {String} name 目录名称   
 */
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