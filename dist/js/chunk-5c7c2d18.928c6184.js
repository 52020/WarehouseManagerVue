(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c7c2d18","chunk-2d0aa7e6"],{"10f7":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{"margin-bottom":"5px"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入名字","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loadPost.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{filterable:"",placeholder:"请选择性别"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},e._l(e.sexs,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:e.loadPost}},[e._v(" 查询")]),t("el-button",{attrs:{type:"warning"},on:{click:e.resetParam}},[e._v(" 重置")])],1),t("el-table",{attrs:{data:e.tableData,"header-cell-style":{background:"#f2f5fc",color:"#555555"},border:"","highlight-current-row":""},on:{"current-change":e.selectCurrentChange}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t("el-table-column",{attrs:{prop:"no",label:"账号",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",width:"80"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-tag",{attrs:{type:1===o.row.sex?"primary":"success","disable-transitions":""}},[e._v(e._s(1===o.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"roleId",label:"角色",width:"120"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-tag",{attrs:{type:0===o.row.roleId?"danger":1===o.row.roleId?"primary":"success","disable-transitions":""}},[e._v(e._s(0===o.row.roleId?"超级管理员":1===o.row.roleId?"管理员":"用户"))])]}}])}),t("el-table-column",{attrs:{prop:"phone",label:"电话"}})],1),t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[5,10,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),t("el-dialog",{attrs:{title:"提示",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"账号",prop:"no"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),t("el-form-item",{attrs:{label:"名字",prop:"name"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-radio",{attrs:{label:"1"}},[e._v("男")]),t("el-radio",{attrs:{label:"0"}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v(" 取 消")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.save}},[e._v(" 确 定")])],1)],1)],1)},r=[],a=(o("d9e2"),{name:"SelectUser",data(){let e=(e,t,o)=>{t>150?o(new Error("年龄输入过大")):o()},t=(e,t,o)=>{if(this.form.id)return o();this.$axios.get(this.$httpUrl+"/user/findByNo?no="+this.form.no).then(e=>e.data).then(e=>{200!=e.code?o():o(new Error("账号已经存在"))})};return{tableData:[],pageSize:10,pageNum:1,total:0,name:"",sex:"",sexs:[{value:"1",label:"男"},{value:"0",label:"女"}],centerDialogVisible:!1,form:{id:"",no:"",name:"",password:"",age:"",phone:"",sex:"0",roleId:"2"},rules:{no:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"},{validator:t,trigger:"blur"}],name:[{required:!0,message:"请输入名字",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{min:1,max:3,message:"长度在 1 到 3 个位",trigger:"blur"},{pattern:/^([1-9][0-9]*){1,3}$/,message:"年龄必须为正整数字",trigger:"blur"},{validator:e,trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{resetForm(){this.$refs.form.resetFields()},del(e){console.log(e),this.$axios.get(this.$httpUrl+"/user/del?id="+e).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.loadPost()):this.$message({message:"操作失败！",type:"error"})})},mod(e){console.log(e),this.centerDialogVisible=!0,this.$nextTick(()=>{this.form.id=e.id,this.form.no=e.no,this.form.name=e.name,this.form.password="",this.form.age=e.age+"",this.form.sex=e.sex+"",this.form.phone=e.phone,this.form.roleId=e.roleId})},add(){this.centerDialogVisible=!0,this.$nextTick(()=>{this.resetForm()})},doSave(){this.$axios.post(this.$httpUrl+"/user/save",this.form).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.centerDialogVisible=!1,this.loadPost(),this.resetForm()):this.$message({message:"操作失败！",type:"error"})})},doMod(){this.$axios.post(this.$httpUrl+"/user/update",this.form).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.centerDialogVisible=!1,this.loadPost(),this.resetForm()):this.$message({message:"操作失败！",type:"error"})})},save(){this.$refs.form.validate(e=>{if(!e)return console.log("error submit!!"),!1;this.form.id?this.doMod():this.doSave()})},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageNum=1,this.pageSize=e,this.loadPost()},handleCurrentChange(e){console.log("当前页: "+e),this.pageNum=e,this.loadPost()},loadGet(){this.$axios.get(this.$httpUrl+"/user/list").then(e=>e.data).then(e=>{console.log(e)})},resetParam(){this.name="",this.sex=""},selectCurrentChange(e){this.$emit("doSelectUser",e)},loadPost(){this.$axios.post(this.$httpUrl+"/user/listPageC1",{pageSize:this.pageSize,pageNum:this.pageNum,param:{name:this.name,sex:this.sex,roleId:"2"}}).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.tableData=e.data,this.total=e.total):alert("获取数据失败")})}},beforeMount(){this.loadPost()}}),l=a,i=o("2877"),n=Object(i["a"])(l,s,r,!1,null,"1a934146",null);t["default"]=n.exports},"35cf":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{"margin-bottom":"5px"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入物品名","suffix-icon":"el-icon-a-042"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loadPost.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"请选择仓库"},model:{value:e.storage,callback:function(t){e.storage=t},expression:"storage"}},e._l(e.storageData,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"请选择分类"},model:{value:e.goodstype,callback:function(t){e.goodstype=t},expression:"goodstype"}},e._l(e.goodstypeData,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("br"),t("br"),t("el-button",{staticStyle:{"margin-left":"5px","font-size":"18px"},attrs:{type:"primary"},on:{click:e.loadPost}},[e._v(" 查询")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"warning"},on:{click:e.resetParam}},[e._v(" 重置")]),2!=e.user.roleId?t("el-button",{staticStyle:{"margin-left":"5px","font-size":"18px"},attrs:{type:"primary"},on:{click:e.add}},[e._v(" 新增")]):e._e(),2!=e.user.roleId?t("el-button",{staticStyle:{"margin-left":"5px","font-size":"18px"},attrs:{type:"primary"},on:{click:e.inGoods}},[e._v(" 入库")]):e._e(),2!=e.user.roleId?t("el-button",{staticStyle:{"margin-left":"5px","font-size":"18px"},attrs:{type:"primary"},on:{click:e.outGoods}},[e._v(" 出库")]):e._e()],1),t("el-table",{attrs:{data:e.tableData,"header-cell-style":{background:"#f2f5fc",color:"#555555"},border:"","highlight-current-row":""},on:{"current-change":e.selectCurrentChange}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t("el-table-column",{attrs:{prop:"name",label:"物品名",width:"160"}}),t("el-table-column",{attrs:{prop:"storage",label:"仓库",width:"160",formatter:e.formatStorage}}),t("el-table-column",{attrs:{prop:"goodstype",label:"分类",width:"140",formatter:e.formatGoodstype}}),t("el-table-column",{attrs:{prop:"count",label:"数量",width:"150"}}),t("el-table-column",{attrs:{prop:"unit",label:"单位",withd:"150"}}),t("el-table-column",{attrs:{prop:"price",label:"单价",withd:"150"}}),t("el-table-column",{attrs:{prop:"remark",label:"备注"}}),2!=e.user.roleId?t("el-table-column",{attrs:{prop:"operate",label:"操作",fixed:"right",width:"240"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){return e.mod(o.row)}}},[e._v(" 编辑")]),t("el-popconfirm",{staticStyle:{"margin-left":"5px"},attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.del(o.row.id)}}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v(" 删除")])],1)]}}],null,!1,1597651404)}):e._e()],1),t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[5,10,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),t("el-dialog",{attrs:{title:"物品维护",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"物品名",prop:"name"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-form-item",{attrs:{label:"仓库",prop:"storage"}},[t("el-col",{attrs:{span:20}},[t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"请选择仓库"},model:{value:e.form.storage,callback:function(t){e.$set(e.form,"storage",t)},expression:"form.storage"}},e._l(e.storageData,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-form-item",{attrs:{label:"分类",prop:"goodstype"}},[t("el-col",{attrs:{span:20}},[t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"请选择分类"},model:{value:e.form.goodstype,callback:function(t){e.$set(e.form,"goodstype",t)},expression:"form.goodstype"}},e._l(e.goodstypeData,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-form-item",{attrs:{label:"数量",prop:"count"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",t)},expression:"form.count"}})],1)],1),t("el-form-item",{attrs:{label:"单位",prop:"unit"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit",t)},expression:"form.unit"}})],1)],1),t("el-form-item",{attrs:{label:"单价",prop:"price"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1)],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-col",{attrs:{span:20}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v(" 取 消")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.save}},[e._v(" 确 定")])],1)],1),t("el-dialog",{attrs:{title:"出入库",visible:e.inDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.inDialogVisible=t}}},[t("el-dialog",{attrs:{width:"75%",title:"用户选择",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[t("SelectUser",{on:{doSelectUser:e.doSelectUser}}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){e.innerVisible=!1}}},[e._v(" 取 消")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.confirmUser}},[e._v(" 确 定")])],1)],1),t("el-form",{ref:"form1",attrs:{rules:e.rules1,model:e.form1,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"物品名"}},[t("el-col",{attrs:{span:20}},[t("el-input",{attrs:{readonly:""},model:{value:e.form1.goodsname,callback:function(t){e.$set(e.form1,"goodsname",t)},expression:"form1.goodsname"}})],1)],1),t("el-form-item",{attrs:{label:"申请人"}},[t("el-col",{attrs:{span:20}},[t("el-input",{attrs:{readonly:""},nativeOn:{click:function(t){return e.selectUser.apply(null,arguments)}},model:{value:e.form1.username,callback:function(t){e.$set(e.form1,"username",t)},expression:"form1.username"}})],1)],1),t("el-form-item",{attrs:{label:"数量",prop:"count"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form1.count,callback:function(t){e.$set(e.form1,"count",t)},expression:"form1.count"}})],1)],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-col",{attrs:{span:20}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form1.remark,callback:function(t){e.$set(e.form1,"remark",t)},expression:"form1.remark"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){e.inDialogVisible=!1}}},[e._v(" 取 消")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.doInGoods}},[e._v(" 确 定")])],1)],1)],1)},r=[],a=(o("d9e2"),o("10f7")),l={name:"GoodsManage",components:{SelectUser:a["default"]},data(){let e=(e,t,o)=>{t>9999?o(new Error("数量输入过大")):o()};return{user:JSON.parse(sessionStorage.getItem("CurUser")),storageData:[],goodstypeData:[],tableData:[],pageSize:10,pageNum:1,total:0,name:"",storage:"",goodstype:"",centerDialogVisible:!1,inDialogVisible:!1,innerVisible:!1,currentRow:{},tempUser:{},form:{id:"",name:"",storage:"",goodstype:"",count:"",remark:"",unit:"",price:""},form1:{goods:"",goodsname:"",count:"",username:"",userid:"",adminId:"",remark:"",action:"1"},rules1:{},rules:{name:[{required:!0,message:"请输入物品名",trigger:"blur"}],storage:[{required:!0,message:"请选择仓库",trigger:"blur"}],goodstype:[{required:!0,message:"请选择分类",trigger:"blur"}],count:[{required:!0,message:"请输入数量",trigger:"blur"},{pattern:/^([1-9][0-9]*){1,4}$/,message:"数量必须为正整数字",trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{doSelectUser(e){console.log(e),this.tempUser=e},confirmUser(){this.form1.username=this.tempUser.name,this.form1.userid=this.tempUser.id,this.innerVisible=!1},selectCurrentChange(e){this.currentRow=e},formatStorage(e){let t=this.storageData.find(t=>t.id==e.storage);return t&&t.name},formatGoodstype(e){let t=this.goodstypeData.find(t=>t.id==e.goodstype);return t&&t.name},resetForm(){this.$refs.form.resetFields()},resetInForm(){this.$refs.form1.resetFields()},del(e){console.log(e),this.$axios.get(this.$httpUrl+"/goods/del?id="+e).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.loadPost()):this.$message({message:"操作失败！",type:"error"})})},mod(e){this.centerDialogVisible=!0,this.$nextTick(()=>{this.form.id=e.id,this.form.name=e.name,this.form.storage=e.storage,this.form.goodstype=e.goodstype,this.form.count=e.count,this.form.remark=e.remark,this.form.unit=e.unit,this.form.price=e.price})},add(){this.centerDialogVisible=!0,this.$nextTick(()=>{this.resetForm(),this.form.id=""})},inGoods(){this.currentRow.id?(this.inDialogVisible=!0,this.$nextTick(()=>{this.resetInForm()}),this.form1.goodsname=this.currentRow.name,this.form1.goods=this.currentRow.id,this.form1.adminId=this.user.id,this.form1.action="1",this.form1.remark="入库"):alert("请选择记录")},outGoods(){this.currentRow.id?(this.inDialogVisible=!0,this.$nextTick(()=>{this.resetInForm()}),this.form1.goodsname=this.currentRow.name,this.form1.goods=this.currentRow.id,this.form1.adminId=this.user.id,this.form1.action="2",this.form1.remark="出库"):alert("请选择记录")},selectUser(){this.innerVisible=!0},doSave(){this.$axios.post(this.$httpUrl+"/goods/save",this.form).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.centerDialogVisible=!1,this.loadPost(),this.resetForm()):this.$message({message:"操作失败！",type:"error"})})},doMod(){this.$axios.post(this.$httpUrl+"/goods/update",this.form).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.centerDialogVisible=!1,this.loadPost(),this.resetForm()):this.$message({message:"操作失败！",type:"error"})})},save(){this.$refs.form.validate(e=>{if(!e)return console.log("error submit!!"),!1;this.form.id?this.doMod():this.doSave()})},doInGoods(){this.$axios.post(this.$httpUrl+"/record/save",this.form1).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.inDialogVisible=!1,this.loadPost(),this.resetInForm()):this.$message({message:"操作失败！",type:"error"})})},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageNum=1,this.pageSize=e,this.loadPost()},handleCurrentChange(e){console.log("当前页: "+e),this.pageNum=e,this.loadPost()},resetParam(){this.name="",this.storage="",this.goodstype=""},loadPost(){this.$axios.post(this.$httpUrl+"/goods/listPage",{pageSize:this.pageSize,pageNum:this.pageNum,param:{name:this.name,goodstype:this.goodstype+"",storage:this.storage+""}}).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.tableData=e.data,this.total=e.total):alert("获取数据失败")})},loadStorage(){this.$axios.get(this.$httpUrl+"/storage/list").then(e=>e.data).then(e=>{console.log(e),200==e.code?this.storageData=e.data:alert("获取数据失败")})},loadGoodstype(){this.$axios.get(this.$httpUrl+"/goodstype/list").then(e=>e.data).then(e=>{console.log(e),200==e.code?this.goodstypeData=e.data:alert("获取数据失败")})}},beforeMount(){this.loadStorage(),this.loadGoodstype(),this.loadPost()}},i=l,n=o("2877"),m=Object(n["a"])(i,s,r,!1,null,"106f1746",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5c7c2d18.928c6184.js.map