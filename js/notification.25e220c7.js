(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notification"],{"3c59":function(t,i,n){},cf05:function(t,i,n){t.exports=n.p+"img/logo.82b9c7a5.png"},db98:function(t,i,n){"use strict";var o=n("3c59"),s=n.n(o);s.a},f09f:function(t,i,n){"use strict";n.r(i);var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"notification"},[n("p",{domProps:{textContent:t._s(1==t.notificationStatus?"此浏览器是否支持此功能：支持":"此浏览器是否支持此功能：不支持")}}),0==t.permission?n("p",{domProps:{textContent:t._s("目前状态：默认值，用户还未选择")}}):t._e(),1==t.permission?n("p",{domProps:{textContent:t._s("目前状态：用户允许该网站发送通知")}}):t._e(),2==t.permission?n("p",{domProps:{textContent:t._s("目前状态：用户拒绝该网站发送通知")}}):t._e(),n("div",{staticClass:"hrline"}),n("div",{staticClass:"option"},[0==t.permission?n("button",{staticClass:"button",on:{click:t.getPermission}},[t._v("获取授权")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(0)}}},[t._v("发送空通知")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(1)}}},[t._v("发送文字通知")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(2)}}},[t._v("发送同 tag 通知")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(3)}}},[t._v("发送 icon 通知")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(4)}}},[t._v("发送 data 通知")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(5)}}},[t._v("发送 renotify 通知")]):t._e(),1==t.permission?n("button",{staticClass:"button",on:{click:function(i){return t.sendNotification(6)}}},[t._v("发送 requireInteraction 通知")]):t._e(),n("hr"),1==t.notificationDisplay?n("button",{staticClass:"button",on:{click:t.closeNotification}},[t._v("关闭通知")]):t._e()])])},s=[],e={name:"notification",data:function(){return{notification:!1,notificationDisplay:!1,notificationStatus:!1,permission:0,icon_Img:n("cf05")}},created:function(){this.notificationStatus=!!window.Notification,this.getPermissionStatus()},methods:{closeNotification:function(){this.notification.close()},notificationControl:function(){var t=this;this.notification.onclick=function(t){console.log("点击操作唤醒",t)},this.notification.onshow=function(i){console.log("显示操作唤醒",i),t.notificationDisplay=!0},this.notification.onerror=function(i){console.log("错误操作唤醒",i),t.notificationDisplay=!1},this.notification.onclose=function(i){console.log("关闭操作唤醒",i),t.notificationDisplay=!1}},getPermissionStatus:function(){switch(Notification.permission){case"default":this.permission=0;break;case"granted":this.permission=1;break;case"denied":this.permission=2;break;default:this.permission=0;break}},getPermission:function(){var t=this;Notification.requestPermission().then(function(){t.getPermissionStatus()})},sendNotification:function(t){var i={},n="";switch(t){case 0:i={},n="这里是标题";break;case 1:i={body:"这里是内容"},n="这里是标题";break;case 2:i={tag:"1"},n="这里是 tag 标题";break;case 3:i={icon:this.icon_Img},n="这里是 icon 标题";break;case 4:i={data:{a:1,b:2,c:3}},n="这里是 data 标题";break;case 5:i={tag:2,renotify:!0,body:Math.random(100)},n="这里是 renotify 标题";break;case 6:i={requireInteraction:!0},n="这里是 requireInteraction 标题";break;default:alert("请求状态错误");break}switch(this.notification=new Notification(n,i),this.notificationControl(),t){case 4:console.log(this.notification);break}}}},c=e,a=(n("db98"),n("2877")),r=Object(a["a"])(c,o,s,!1,null,"476ab85f",null);i["default"]=r.exports}}]);
//# sourceMappingURL=notification.25e220c7.js.map