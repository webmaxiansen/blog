---
title: VUE + EleMent Ui Form表单的二次封装
abbrlink: 32982
date: 2022-07-19 15:31:01
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm/dm6.jpg
---

### VUE + EleMent Ui   Form表单的二次封装

开箱即用

1. 使用说明

   文件里边一共有三个文件，Form是一个封装好的组件，用的时候直接使用标签就好<Form></Form>,checkfun.js是一个专门处理校验函数的文件，regexp.js则是存放校验规则的文件，你所有的规则都可以放在这里面

2. 注意因为是组件，所以这些东西一并放到Components下面，为了防止出错，你可以直接把我的整的文件一起拖拽进去

3. Form的使用

   | 参数     | 说明                   | 类型    | 可选值     | 默认值 |
   | -------- | ---------------------- | ------- | ---------- | ------ |
   | ruleForm | 表单数据对象           | Object  | —          | —      |
   | rules    | 表单验证规则           | Object  | —          | —      |
   | erricon  | 正确错误提示           | Boolean | true/false | false  |
   | formitem | 每组input的数据        | Array   | Object     | —      |
   | form     | 控制表单域             | Object  | —          | —      |
   | ref      | 获取子组件方法         | String  | —          | —      |
   | button   | 插槽名称               |         |            |        |
   | eyes     | 事件控制input type切换 |         |            |        |

   formitem  Object

   | 键            | 说明                                                      | 类型   |
   | ------------- | --------------------------------------------------------- | ------ |
   | lable         | 标签文本                                                  | String |
   | prop          | 在使用 validate、resetFields 方法的情况下，该属性是必填的 | String |
   | aftericonview | input后置图标                                             | String |
   | beforeicon    | input前置图标                                             | String |
   | size          | input大小（medium、small 和 mini 三种尺寸）               | String |

   form 使用

   | 键        | 说明                           |
   | --------- | ------------------------------ |
   | width     | 表单整体宽度                   |
   | alignment | 对齐方式（top,left,默认right） |

   整体使用方法如下

   ```vue
   <template>
      <div style="width:500px">
            <Form 
               :ruleForm="ruleForm" 
               :rules="rules" 
                erricon 
               @eyes="aftericon"  
               :formitem="formitem"
               :form="form"
               ref="rule"
               >  
             <template slot="button">
                 <el-button style="width:100%" type="primary" @click="submitForm">					提交</el-button>
                 <el-button style="width:100%;margin-left: 0;margin-top:10px" 						@click="resetForm">重置</el-button> 
             </template>
             <h2>sada</h2>
            </Form>
        </div>
   </template>
   <script>
   import Form from "@/components/Form.vue";
   import regx  from "../components/regexp.js"
   import {validatePass,regemil} from "@/components/checkfun.js"
     export default {
       components: { Form },
       data() {
         return {
           show:"fasle",
           rules:{
              pass: [{ validator:validatePass, trigger: 'blur',reg:regx.phone }],
              pass1: [{ validator:regemil, trigger: 'blur',reg:regx.emil }],
           },
           ruleForm: {
             pass: '',
             pass1: '',
             pass5: '',
   
           },
           form:{
             width:"80px"
           },
           formitem:[
             {prop:'pass',lable:"手机号"},
             {prop:'pass1',lable:"邮箱"},
             {prop:'pass5',lable:"密码",aftericonview:'el-icon-					           view',type:'password'},
           ],
         }
       },
   
       
        methods: {
         aftericon(){
           this.show=!this.show
           this.show?this.formitem[2].type='text':this.formitem[2].type='password'       
         },
         submitForm(){
          this.$refs['rule'].$refs.ruleForm.validate((valid) => {
             if (valid) {
               console.log("valid",valid)
                 //valid 是一个布尔值，正则通过后才会执行的程序代码
               this.$message({
                 showClose: true,
                 message: '恭喜你，这是一条成功消息',
                 type: 'success'
           });
             } else {
               return false;
             }
           })  
         },
         resetForm(){
           this.$refs['rule'].$refs.ruleForm.resetFields();
         }
       }
   }
   </script>
   ```

  
  ![页面效果整体预览](https://images.maxiansen.top/blog/public/csdn/9a772c097646d3e0e4180725fc1c7b51.png)
![正则校验不通过](https://images.maxiansen.top/blog/public/csdn/8bb1e924f999b75c49923699e6580d5f.png)
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/d34920395f5800069d4064ba736730f4.png)
		多条验证规则可以在checkfun.js里面书写，如有issue欢迎指出，若您在使用中有疑问，欢迎下方留言，我将会在看到消息后第一时间为你解答

​	[点击获取组件](https://download.csdn.net/download/weixin_52767262/86245349)
