define({ "api": [
  {
    "type": "GET",
    "url": "followup/getByPatientId",
    "title": "根据病人获取随访记录",
    "group": "followup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "patientId",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/followUp.js",
    "groupTitle": "followup",
    "name": "GetFollowupGetbypatientid"
  },
  {
    "type": "POST",
    "url": "followup/add",
    "title": "添加随访记录",
    "group": "followup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "patientId",
            "description": "<p>病人id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dateTime",
            "description": "<p>随访时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>随访类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pathologicalNumber",
            "description": "<p>病理号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>随访注意事项</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/followUp.js",
    "groupTitle": "followup",
    "name": "PostFollowupAdd"
  },
  {
    "type": "GET",
    "url": "itemCategoryconfig/getAll",
    "title": "获取所有指标目录",
    "group": "itemCategoryconfig",
    "version": "0.0.0",
    "filename": "app/routes/itemCategoryConfig.js",
    "groupTitle": "itemCategoryconfig",
    "name": "GetItemcategoryconfigGetall"
  },
  {
    "type": "GET",
    "url": "itemCategoryconfig/getbyId",
    "title": "获取目录",
    "group": "itemCategoryconfig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>目录ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/itemCategoryConfig.js",
    "groupTitle": "itemCategoryconfig",
    "name": "GetItemcategoryconfigGetbyid"
  },
  {
    "type": "GET",
    "url": "itemCategoryconfig/update",
    "title": "更新目录",
    "group": "itemCategoryconfig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>目录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>目录名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/itemCategoryConfig.js",
    "groupTitle": "itemCategoryconfig",
    "name": "GetItemcategoryconfigUpdate"
  },
  {
    "type": "POST",
    "url": "itemCategoryconfig/add",
    "title": "新增目录",
    "group": "itemCategoryconfig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>目录名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>所属类别 {1:实验室指标/2:特检指标/3:人体成分/:4其他信息}</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/itemCategoryConfig.js",
    "groupTitle": "itemCategoryconfig",
    "name": "PostItemcategoryconfigAdd"
  },
  {
    "type": "GET",
    "url": "itemconfig/getAll",
    "title": "获取所有指标配置",
    "group": "itemconfig",
    "version": "0.0.0",
    "filename": "app/routes/itemConfig.js",
    "groupTitle": "itemconfig",
    "name": "GetItemconfigGetall"
  },
  {
    "type": "POST",
    "url": "itemconfig/add",
    "title": "新增指标项",
    "group": "itemconfig",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>指标名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inputType",
            "description": "<p>输入类型 {1:文字/2:选项}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOption",
            "description": "<p>选项配置（用特殊符号分割）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/itemConfig.js",
    "groupTitle": "itemconfig",
    "name": "PostItemconfigAdd"
  },
  {
    "type": "POST",
    "url": "itemconfig/update",
    "title": "更新指标配置",
    "group": "itemconfig",
    "version": "0.0.0",
    "filename": "app/routes/itemConfig.js",
    "groupTitle": "itemconfig",
    "name": "PostItemconfigUpdate"
  },
  {
    "type": "GET",
    "url": "patient/getPatient",
    "title": "获取患者",
    "group": "patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>患者id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/patient.js",
    "groupTitle": "patient",
    "name": "GetPatientGetpatient"
  },
  {
    "type": "GET",
    "url": "patient/getPatients",
    "title": "获取所有患者",
    "group": "patient",
    "version": "0.0.0",
    "filename": "app/routes/patient.js",
    "groupTitle": "patient",
    "name": "GetPatientGetpatients"
  },
  {
    "type": "GET",
    "url": "patient/search",
    "title": "搜索患者",
    "group": "patient",
    "description": "<p>参数可以传一个也可以三个都传</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>性名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inPatientId",
            "description": "<p>住院号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/patient.js",
    "groupTitle": "patient",
    "name": "GetPatientSearch"
  },
  {
    "type": "POST",
    "url": "patient/add",
    "title": "新增患者",
    "group": "patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别（男、女）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inPatientId",
            "description": "<p>病人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mzId",
            "description": "<p>门诊编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone1",
            "description": "<p>电话1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>电话2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>家庭地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/patient.js",
    "groupTitle": "patient",
    "name": "PostPatientAdd"
  },
  {
    "type": "POST",
    "url": "patient/delete",
    "title": "删除患者以及患者的随访信息",
    "group": "patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/patient.js",
    "groupTitle": "patient",
    "name": "PostPatientDelete"
  },
  {
    "type": "POST",
    "url": "patient/update",
    "title": "更新患者信息",
    "group": "patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别（男、女）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inPatientId",
            "description": "<p>住院号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mzId",
            "description": "<p>门诊编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone1",
            "description": "<p>电话1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>电话2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>家庭地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/patient.js",
    "groupTitle": "patient",
    "name": "PostPatientUpdate"
  },
  {
    "type": "POST",
    "url": "record/addOrUpdate",
    "title": "新增指标项",
    "group": "record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "followId",
            "description": "<p>suifangID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "itemId",
            "description": "<p>指标ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemValue",
            "description": "<p>选项配置（用特殊符号分割）</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "opUserId",
            "description": "<p>操作者ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/record.js",
    "groupTitle": "record",
    "name": "PostRecordAddorupdate"
  },
  {
    "type": "POST",
    "url": "record/findByFollowId",
    "title": "根据随访id获取指标信息",
    "group": "record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "followId",
            "description": "<p>suifangID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/record.js",
    "groupTitle": "record",
    "name": "PostRecordFindbyfollowid"
  },
  {
    "type": "POST",
    "url": "user/register",
    "title": "新增用户",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password1",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>等级（USER=3 SUER=6 ADMIN=9）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user.js",
    "groupTitle": "user",
    "name": "PostUserRegister"
  },
  {
    "type": "POST",
    "url": "user/verifyToken",
    "title": "验证token是否有效",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user.js",
    "groupTitle": "user",
    "name": "PostUserVerifytoken"
  },
  {
    "type": "POST",
    "url": "user/login",
    "title": "登录",
    "description": "<p>登录接口</p>",
    "group": "user",
    "name": "logistics/policys",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型：（填写101）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/user.js",
    "groupTitle": "user"
  }
] });
