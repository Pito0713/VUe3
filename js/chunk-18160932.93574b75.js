(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18160932"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1d2a":function(e,t,n){"use strict";var a=n("bee2"),r=n("d4ec"),c=n("ade3"),o=(n("d3b7"),n("4de4"),n("b0c0"),Object(a["a"])((function e(){Object(r["a"])(this,e),Object(c["a"])(this,"getGeneralAgentTableList",(function(e){var t=e.body;return new Promise((function(e,n){var a={data:[{id:1,account:"llrtest001",password:123123,name:"會員1",phone:1231311,agentName:"會員1",wallet:11.1,bet:11,profit:"GENERAL AGENT",status:1,createTime:"2021-12-28T12:12:12Z",updateTime:"2021-12-28T12:12:12Z",bankList:[{id:1,account:"account1",bankName:"太陽餅銀行",bankBranch:"台中分行",bankAccountName:"會員1",bankAccount:"llrtest001",bankCearteTime:"2021-12-28T11:11:11Z",bankUpdateTime:"2021-12-28T11:11:11Z"},{id:2,account:"account2",bankName:"太陽餅銀行2",bankBranch:"台中分行2",bankAccountName:"會員2",bankAccount:"llrtest001",bankCearteTime:"2021-12-28T12:11:11Z",bankUpdateTime:"2021-12-28T12:11:11Z"}]},{id:2,account:"llrtest002",password:567567,name:"會員2",phone:1222222,agentName:"會員2",wallet:22.22,bet:22,profit:"GENERAL AGENT",status:2,createTime:"2021-12-28T11:11:11Z",updateTime:"2021-12-28T11:11:11Z",bankList:[{id:1,account:"account2",bankName:"土豆銀行",bankBranch:"台中分行",bankAccountName:"會員2",bankAccount:"llrtest002",bankCearteTime:"2021-12-28T13:13:13Z",bankUpdateTime:"2021-12-28T13:13:13Z"}]},{id:3,account:"llrtest003",password:890890,name:"會員3",phone:13333,agentName:"會員3",wallet:33.3333,bet:33,profit:"GENERAL AGENT",status:0,createTime:"2021-12-28T13:13:13Z",updateTime:"2021-12-28T13:13:13Z",bankList:[{id:1,account:"account3",bankName:"土地公銀行",bankBranch:"台中分行",bankAccountName:"會員3",bankAccount:"llrtest003",bankCearteTime:"2021-12-28T13:13:13Z",bankUpdateTime:"2021-12-28T13:13:13Z"}]}],total:3,totalUp:3,totalProfit:3};a.data=a.data.filter((function(e){return void 0===t.account||e.account===t.account})),a.data=a.data.filter((function(e){return void 0===t.name||e.name===t.name})),a.data=a.data.filter((function(e){return void 0===t.status||e.status===t.status})),e(a)}))})),Object(c["a"])(this,"postGeneralAgentCreate",(function(e){e.body;return new Promise((function(e,t){var n=!0;e(n)}))})),Object(c["a"])(this,"putGeneralAgent",(function(e){e.body;return new Promise((function(e,t){var n=!0;e(n)}))}))})));t["a"]=new o},"1d74":function(e,t,n){"use strict";var a=n("1da1"),r=(n("96cf"),n("1d2a")),c=n("9a7a"),o=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])({apifunction:r["a"].getGeneralAgentTableList,formData:t,type:"getResult"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])({apifunction:r["a"].putGeneralAgent,formData:t,type:"getBoolean"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t["a"]={putGeneralAgent:u,getGeneralAgentTableList:o}},"287b":function(e,t,n){"use strict";n("df8b")},"841c":function(e,t,n){"use strict";var a=n("c65b"),r=n("d784"),c=n("825a"),o=n("1d80"),u=n("129f"),l=n("577e"),i=n("dc4a"),s=n("14c3");r("search",(function(e,t,n){return[function(t){var n=o(this),r=void 0==t?void 0:i(t,e);return r?a(r,t,n):new RegExp(t)[e](l(n))},function(e){var a=c(this),r=l(e),o=n(t,a,r);if(o.done)return o.value;var i=a.lastIndex;u(i,0)||(a.lastIndex=0);var b=s(a,r);return u(a.lastIndex,i)||(a.lastIndex=i),null===b?-1:b.index}]}))},"901b":function(e,t,n){},"9f91":function(e,t,n){"use strict";n("901b")},b6d4:function(e,t,n){"use strict";var a=n("7a23"),r={class:"ina-pagination pagination"};function c(e,t,n,c,o,u){var l=Object(a["resolveComponent"])("el-pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createVNode"])(l,{"current-page":c.props.fetchFormState.page,onCurrentChange:c.props.handlePageChange,"page-size":c.props.fetchFormState.count,total:c.props.resultTable.total,background:"",small:"","prev-text":"«","next-text":"»",layout:"slot, prev, pager, next"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{class:"pagination-slot",tabIndex:"1",onClick:t[0]||(t[0]=function(e){return c.props.handlePageChange(1)})},Object(a["toDisplayString"])("首頁"))]})),_:1},8,["current-page","onCurrentChange","page-size","total"]),Object(a["createVNode"])(l,{total:c.props.resultTable.total,small:"",layout:"slot"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{class:"pagination-slot",tabIndex:"2",onClick:t[1]||(t[1]=function(e){return c.props.handlePageChange(c.lastPage)})},Object(a["toDisplayString"])("末頁"))]})),_:1},8,["total"])])}var o={name:"ina-pagination",props:{fetchFormState:{type:Object,default:function(){return{page:1,count:20}}},resultTable:{type:Object,default:function(){return{total:0}}},handlePageChange:{type:Function,default:function(){}}},setup:function(e){var t=Object(a["computed"])((function(){return Math.ceil(e.resultTable.total/e.fetchFormState.count)}));return{props:e,lastPage:t}}},u=(n("9f91"),n("6b0d")),l=n.n(u);const i=l()(o,[["render",c],["__scopeId","data-v-7cdccba2"]]);t["a"]=i},df8b:function(e,t,n){},e590:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("ac1f"),n("841c");var a=n("7a23"),r=function(e){return Object(a["pushScopeId"])("data-v-60f8c2f0"),e=e(),Object(a["popScopeId"])(),e},c={class:"general-agent-report"},o=Object(a["createTextVNode"])(Object(a["toDisplayString"])("會員")),u=Object(a["createTextVNode"])(Object(a["toDisplayString"])("列表")),l={class:"title-button-label"},i=Object(a["createTextVNode"])(Object(a["toDisplayString"])("新增")),s={class:"content-label"},b=r((function(){return Object(a["createElementVNode"])("div",{class:"label"},Object(a["toDisplayString"])("帳號"),-1)})),d={class:"content-label"},p=r((function(){return Object(a["createElementVNode"])("div",{class:"label"},Object(a["toDisplayString"])("名稱"),-1)})),f={class:"content-label"},m=r((function(){return Object(a["createElementVNode"])("div",{class:"label"},Object(a["toDisplayString"])("帳號狀態"),-1)})),g={class:"button-label"},O=Object(a["createTextVNode"])(Object(a["toDisplayString"])("搜尋")),j=Object(a["createTextVNode"])(Object(a["toDisplayString"])("會員帳號")),h={class:"table-button-label"},v=Object(a["createTextVNode"])(Object(a["toDisplayString"])("編輯"));function k(e,t,n,r,k,w){var N=Object(a["resolveComponent"])("el-button"),T=Object(a["resolveComponent"])("el-input"),C=Object(a["resolveComponent"])("el-option"),y=Object(a["resolveComponent"])("el-select"),x=Object(a["resolveComponent"])("el-table-column"),V=Object(a["resolveComponent"])("el-table"),A=Object(a["resolveComponent"])("ina-pagination"),F=Object(a["resolveComponent"])("main-base-layout"),S=Object(a["resolveDirective"])("loading");return Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(F,null,{mainTitle:Object(a["withCtx"])((function(){return[o]})),subtitle:Object(a["withCtx"])((function(){return[u]})),titleButton:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(N,{size:"small",onClick:t[0]||(t[0]=function(e){return r.goPage()})},{default:Object(a["withCtx"])((function(){return[i]})),_:1})])]})),searchBarContent:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",s,[b,Object(a["createVNode"])(T,{modelValue:r.fetchForm.account,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.fetchForm.account=e}),size:"small",placeholder:"請輸入帳號",clearable:""},null,8,["modelValue"])]),Object(a["createElementVNode"])("div",d,[p,Object(a["createVNode"])(T,{modelValue:r.fetchForm.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.fetchForm.name=e}),size:"small",placeholder:"請輸入名稱",clearable:""},null,8,["modelValue"])]),Object(a["createElementVNode"])("div",f,[m,Object(a["createVNode"])(y,{modelValue:r.fetchForm.status,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.fetchForm.status=e}),size:"small",placeholder:"請選擇帳號",clearable:""},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.GENERAL_AGENT_STATUS_LIST,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(C,{label:e.label,value:e.value,key:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])]})),searchBarButton:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",g,[Object(a["createVNode"])(N,{onClick:r.search,type:"primary",size:"small"},{default:Object(a["withCtx"])((function(){return[O]})),_:1},8,["onClick"])])]})),tableTitle:Object(a["withCtx"])((function(){return[j]})),tableContent:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,{data:r.resultTable.data},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{label:"帳號",prop:"account","min-width":"100",key:"account"}),Object(a["createVNode"])(x,{label:"姓名",prop:"name","min-width":"130",key:"name"}),Object(a["createVNode"])(x,{label:"名稱",prop:"agentName","min-width":"130",key:"agentName"}),Object(a["createVNode"])(x,{label:"餘額",prop:"wallet","min-width":"130",key:"wallet"}),Object(a["createVNode"])(x,{label:"錢錢",prop:"bet","min-width":"130",key:"bet"}),Object(a["createVNode"])(x,{label:"權限",prop:"profit","min-width":"150",key:"profit"}),Object(a["createVNode"])(x,{label:"狀態",prop:"status",formatter:r.statusFormatter,"min-width":"130",key:"status"},null,8,["formatter"]),Object(a["createVNode"])(x,{label:"創建日期",prop:"createTime",formatter:r.timeFormatter,"min-width":"200",key:"createTime"},null,8,["formatter"]),Object(a["createVNode"])(x,{label:"更新日期",prop:"updateTime",formatter:r.timeFormatter,"min-width":"200",key:"updateTime"},null,8,["formatter"]),Object(a["createVNode"])(x,{label:"操作",prop:"update","min-width":"130",key:"update"},{default:Object(a["withCtx"])((function(e){return[Object(a["createElementVNode"])("div",h,[Object(a["createVNode"])(N,{onClick:function(t){return r.goUpdatePage(e.row)},type:"primary",size:"small"},{default:Object(a["withCtx"])((function(){return[v]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"]),Object(a["createVNode"])(A,{fetchFormState:r.fetchFormState,resultTable:r.resultTable,handlePageChange:r.handlePageChange},null,8,["fetchFormState","resultTable","handlePageChange"])]})),_:1})])),[[S,r.loading,void 0,{lock:!0}]])}var w=n("1da1"),N=(n("caad"),n("e9c4"),n("7db0"),n("d3b7"),n("96cf"),n("6c02")),T=n("1d74"),C=n("9a7a"),y=n("b6d4"),x=n("5f38"),V={name:"general-agent-report",components:{inaPagination:y["a"]},setup:function(){var e=Object(N["d"])(),t=Object(a["ref"])({account:"",name:"",status:""}),n=Object(a["ref"])({}),r=Object(a["ref"])({data:[],total:0,totalAmount:0}),c=Object(a["ref"])(!1),o=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value.page=1,n=Object(C["b"])(t.value),e.next=4,u(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.value=!0,a={},["",null,void 0].includes(t.account)||(a.account=t.account),["",null,void 0].includes(t.name)||(a.name=t.name),["",null,void 0].includes(t.status)||(a.status=t.status),e.next=7,Object(C["f"])(.5);case 7:return e.next=9,T["a"].getGeneralAgentTableList(a);case 9:o=e.sent,void 0!==o&&(r.value=o,n.value=Object(C["b"])(t)),c.value=!1;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.value.page=t,a=Object(C["b"])(n.value),e.next=4,u(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){e.push({name:"general-agent/add-general-agent"})},s=function(t){var n=Object(C["b"])(t);e.push({name:"general-agent/general-agent-report/general-agent-update",query:{fetchForm:JSON.stringify(n)}})},b=function(e,t,n){var a="錯誤",r=x["a"].find((function(e){return e.value===n}));return void 0!==r.value&&(a=r.label),a},d=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.value=!0,e.next=3,u(t.value);case 3:c.value=!1;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d(),{fetchForm:t,fetchFormState:n,resultTable:r,GENERAL_AGENT_STATUS_LIST:x["a"],loading:c,search:o,handlePageChange:l,goPage:i,goUpdatePage:s,timeFormatter:C["g"],statusFormatter:b}}},A=(n("287b"),n("6b0d")),F=n.n(A);const S=F()(V,[["render",k],["__scopeId","data-v-60f8c2f0"]]);t["default"]=S},e9c4:function(e,t,n){var a=n("23e7"),r=n("da84"),c=n("d066"),o=n("2ba4"),u=n("e330"),l=n("d039"),i=r.Array,s=c("JSON","stringify"),b=u(/./.exec),d=u("".charAt),p=u("".charCodeAt),f=u("".replace),m=u(1..toString),g=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,h=function(e,t,n){var a=d(n,t-1),r=d(n,t+1);return b(O,e)&&!b(j,r)||b(j,e)&&!b(O,a)?"\\u"+m(p(e,0),16):e},v=l((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&a({target:"JSON",stat:!0,forced:v},{stringify:function(e,t,n){for(var a=0,r=arguments.length,c=i(r);a<r;a++)c[a]=arguments[a];var u=o(s,null,c);return"string"==typeof u?f(u,g,h):u}})}}]);
//# sourceMappingURL=chunk-18160932.93574b75.js.map