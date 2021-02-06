(function (global, runtime) {
  "object" === typeof exports && "object" === typeof module
    ? (module.exports = runtime(require("react"), require("react-dom")))
    : "function" === typeof define && define.amd
    ? define("@alipay/handwritten-blessing", ["react", "react-dom"], runtime)
    : "object" === typeof exports
    ? (exports["@alipay/handwritten-blessing"] = runtime(
        require("react"),
        require("react-dom")
      ))
    : (global["_component_handwritten-blessing"] = runtime(
        global["React"],
        global["ReactDOM"]
      ));
})(this, function (React, ReactDOM) {
  return (function (modules) {
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
      if (__webpack_module_cache__[moduleId])
        return __webpack_module_cache__[moduleId].exports;
      var module = (__webpack_module_cache__[moduleId] = {
        i: moduleId,
        l: false,
        exports: {},
      });
      return (
        modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        ),
        (module.l = true),
        module.exports
      );
    }
    return (
      (__webpack_require__.m = modules),
      (__webpack_require__.c = __webpack_module_cache__),
      (__webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) ||
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter,
          });
      }),
      (__webpack_require__.r = function (exports) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(exports, "__esModule", { value: true });
      }),
      (__webpack_require__.t = function (value, mode) {
        if ((1 & mode && (value = __webpack_require__(value)), 8 & mode))
          return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule)
          return value;
        var i = Object.create(null);
        if (
          (__webpack_require__.r(i),
          Object.defineProperty(i, "default", {
            enumerable: true,
            value: value,
          }),
          2 & mode && "string" != typeof value)
        )
          for (var r in value)
            __webpack_require__.d(
              i,
              r,
              function (t) {
                return value[t];
              }.bind(null, r)
            );
        return i;
      }),
      (__webpack_require__.n = function (module) {
        var getter =
          module && module.__esModule
            ? function () {
                return module["default"];
              }
            : function () {
                return module;
              };
        return __webpack_require__.d(getter, "a", getter), getter;
      }),
      (__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      }),
      (__webpack_require__.p = "/"),
      __webpack_require__((__webpack_require__.s = 0))
    );
  })({
    "/WZG": function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          'img{pointer-events:none}::-webkit-scrollbar{display:none}.container___3XCPZ{min-height:100vh;overflow-y:auto;font-family:PingFang SC;position:relative;background-image:linear-gradient(rgba(242,70,55,0) 2%,#ed1c33 125%),radial-gradient(circle at 50% 50%,#f6710d 0,#f6710d 12%,#f92349 60%,#400ec5 120%,#1e08eb 122.5%);background-repeat:no-repeat;uc-perf-stat-ignore:image}.container___3XCPZ .spark1___3joOV{height:.59rem;width:.59rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*tt1fSp0NG8oAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;top:.26rem;left:2.46rem}.container___3XCPZ .spark2___2yuUp{height:.33rem;width:.33rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*tt1fSp0NG8oAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;top:1.03rem;left:.21rem}.container___3XCPZ .line1___3D55-{height:1.29rem;width:2.235rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*GyQyRI6NlH4AAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;top:.81rem;left:0}.container___3XCPZ .line2___2MEW0{height:1.53rem;width:1.305rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*6plfQ4Qx1iAAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;bottom:0;right:0}.container___3XCPZ .house___2N1mH{background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*C6naQrIfg-YAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;position:absolute;width:3.75rem;height:4.66rem;z-index:1;top:.46rem}.container___3XCPZ .house___2N1mH.prePeriod___b-lws{background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*2_TFRb5ob1IAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat}.container___3XCPZ .ground___2cPIS{height:3.53rem;width:100%;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*PvL2Rq2kvxgAAAAAAAAAAAAAARQnAQ");background-size:cover;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;bottom:0;right:0}.container___3XCPZ .inner___23Qk3{z-index:2;margin-top:.3rem}.container___3XCPZ .inner___23Qk3 .canvas___2ukJg{position:absolute;top:2.16rem;left:.27rem;z-index:10;border-radius:.07rem;uc-perf-stat-ignore:image}.container___3XCPZ .inner___23Qk3.indecorate___2nT-r .canvas___2ukJg{border-radius:0;top:1.22rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.container___3XCPZ .inner___23Qk3.insave___1WZeN .canvas___2ukJg{border-radius:0;top:1.22rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);pointer-events:none}.container___3XCPZ .title___2awMA{height:.265rem;width:2.675rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*EenkRqazW_YAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;z-index:2;pointer-events:none;text-align:center;position:relative;left:.5375rem}.container___3XCPZ .subtitle___2j6dK{font-size:.12rem;font-weight:700;color:#eb4724;text-align:center;height:.37rem;width:1.51rem;line-height:.37rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*dP4aQZRXmw0AAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;position:relative;left:50%;-webkit-transform:translateX(-.78rem);-ms-transform:translateX(-.78rem);transform:translateX(-.78rem);z-index:2}.container___3XCPZ .subtitle___2j6dK.empty___BF5eX{background-image:none}.container___3XCPZ.cardsShare___XKsfq{background-color:#42117b;background-image:none;overflow-y:auto;position:fixed;top:0;left:0;right:0;bottom:0;z-index:99}.container___3XCPZ.screenReader___2Kooj{background:#401915}.liuhai .container___3XCPZ .house___2N1mH{top:1.07rem}.liuhai .container___3XCPZ .inner___23Qk3{margin-top:.91rem}.liuhai .container___3XCPZ .inner___23Qk3 .canvas___2ukJg{top:2.75rem}.liuhai .container___3XCPZ .inner___23Qk3.indecorate___2nT-r .canvas___2ukJg{top:1.85rem}.liuhai .container___3XCPZ .inner___23Qk3.insave___1WZeN .canvas___2ukJg{top:1.85rem}@media only screen and (device-width:320px) and (device-height:568px) and (-webkit-device-pixel-ratio:2){.container___3XCPZ .house___2N1mH{top:.35rem}.container___3XCPZ .inner___23Qk3{margin-top:.2rem}.container___3XCPZ .inner___23Qk3 .canvas___2ukJg{top:2.1rem}.container___3XCPZ .inner___23Qk3.indecorate___2nT-r .canvas___2ukJg{top:1.14rem}.container___3XCPZ .inner___23Qk3.insave___1WZeN .canvas___2ukJg{top:1.14rem}}.snapshoting .container___3XCPZ{height:100vh!important;overflow-y:hidden!important}.snapshoting.android .container___3XCPZ .canvas___2ukJg{z-index:99999;position:fixed!important;top:45%!important;left:50%!important;-webkit-transform:translate(-50%,-50%)!important;-ms-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}',
          "",
        ]),
        (exports.locals = {
          container: "container___3XCPZ",
          spark1: "spark1___3joOV",
          spark2: "spark2___2yuUp",
          line1: "line1___3D55-",
          line2: "line2___2MEW0",
          house: "house___2N1mH",
          prePeriod: "prePeriod___b-lws",
          ground: "ground___2cPIS",
          inner: "inner___23Qk3",
          canvas: "canvas___2ukJg",
          indecorate: "indecorate___2nT-r",
          insave: "insave___1WZeN",
          title: "title___2awMA",
          subtitle: "subtitle___2j6dK",
          empty: "empty___BF5eX",
          cardsShare: "cardsShare___XKsfq",
          screenReader: "screenReader___2Kooj",
        });
    },
    "/qOd": function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.am-fixed,.am-flexbox.average .am-flexbox-item{width:100%}.am-flexbox,.am-ft-left,caption,th{text-align:left}.am-button.tiny:after,.am-button.white:after{-webkit-transform:scale(.5);left:0;top:0;position:absolute}.am-ft-ellipsis,.am-list .am-list-brief,.am-list .am-list-brief .am-list-right-brief,.am-list .am-list-content,.am-list .am-list-extra,.am-list .am-list-title,.am-list .am-list-title .am-list-right-brief{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.am-input-autoclear .am-icon-clear,.fn-clear:after{visibility:hidden}html{font-size:100px}@media only screen and (min-width:320px) and (max-width:320px){html{font-size:85.33px}}@media only screen and (min-width:360px){html{font-size:96px}}@media only screen and (min-width:375px){html{font-size:100px}}@media only screen and (min-width:384px){html{font-size:102.4px}}@media only screen and (min-width:412px){html{font-size:109.87px}}@media only screen and (min-width:414px){html{font-size:110.4px}}@media only screen and (min-width:600px){html{font-size:204.8px}}*,:after,:before{-webkit-tap-highlight-color:transparent}blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,legend,li,ol,p,td,textarea,th,ul{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}li{list-style:none}q:after,q:before{content:""}.am-button.white:after,.fn-clear:after{content:" "}input:password{ime-mode:disabled}:focus{outline:0}body,html{min-height:100%}body{-webkit-user-select:none;-ms-user-select:none;user-select:none;background-color:#f5f5f5}a,img{-webkit-touch-callout:none}body.am-bg-white{background-color:#fff}body,button,input,select,textarea{font-size:16px;line-height:1.5;color:#000;font-family:Helvetica Neue,Helvetica,STHeiTi,sans-serif}input{line-height:normal}a{color:#108ee9;text-decoration:none}.fn-clear:after{display:block;font-size:0;clear:both;height:0}.fn-hide{display:none}.fn-left{float:left}.fn-right{float:right}.am-content{margin-left:16px;margin-right:16px}.am-fixed{position:fixed!important;top:0;left:0;right:0;z-index:99}.am-fixed-bottom{top:inherit;bottom:0}.user-select{-webkit-user-select:auto;-ms-user-select:auto;user-select:auto}.am-flexbox{display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center}.am-flexbox .am-flexbox-item{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;margin-left:8px;min-width:20px}.am-flexbox-v .am-flexbox-item:first-child,.am-flexbox .am-flexbox-item:first-child{margin-left:0}.am-flexbox.am-flexbox-end{-webkit-justify-content:flex-end;justify-content:flex-end}.am-flexbox.am-flexbox-avg{-webkit-justify-content:space-between;justify-content:space-between}.am-flexbox.am-flexbox-center{-webkit-justify-content:center;justify-content:center}.am-flexbox.am-flexbox-vt-start{-webkit-align-items:flex-start;align-items:flex-start}.am-flexbox.am-flexbox-vt-end{-webkit-align-items:flex-end;align-items:flex-end}.am-flexbox.am-flexbox-vt-stretch{-webkit-align-items:stretch;align-items:stretch}.am-flexbox.am-flexbox-vt-baseline{-webkit-align-items:baseline;align-items:baseline}.am-flexbox-v{display:-webkit-box;box-orient:vertical}.am-flexbox-v .am-flexbox-item{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;min-width:20px}.am-wingblank,.am-wingblank.wb10px{margin-left:10px;margin-right:10px}.am-wingblank.wb15px{margin-left:15px;margin-right:15px}.am-wingblank.wb20px{margin-left:20px;margin-right:20px}.am-wingblank.wb25px{margin-left:25px;margin-right:25px}.am-wingblank.wb30px{margin-left:30px;margin-right:30px}.am-wingblank.wb8px{margin-left:8px;margin-right:8px}.am-wingblank.wb12px{margin-left:12px;margin-right:12px}.am-wingblank.wb16px{margin-left:16px;margin-right:16px}.am-wingblank.wb24px{margin-left:24px;margin-right:24px}.am-wingblank.wb28px{margin-left:28px;margin-right:28px}.am-wingblank.wb32px{margin-left:32px;margin-right:32px}.am-whitespace.ws5px{height:5px}.am-whitespace.ws10px{height:10px}.am-whitespace.ws15px{height:15px}.am-whitespace.ws20px{height:20px}.am-whitespace.ws25px{height:25px}.am-whitespace.ws30px{height:30px}.am-whitespace.ws35px{height:35px}.am-whitespace.ws40px{height:40px}.am-whitespace.ws45px{height:45px}.am-whitespace.ws50px{height:50px}.am-whitespace.ws4px{height:4px}.am-whitespace.ws8px{height:8px}.am-whitespace.ws12px{height:12px}.am-whitespace.ws16px{height:16px}.am-whitespace.ws24px{height:24px}.am-whitespace.ws28px{height:28px}.am-whitespace.ws32px{height:32px}.am-whitespace.ws36px{height:36px}.am-whitespace.ws44px{height:44px}.am-whitespace.ws48px{height:50px}.am-ft-center{text-align:center}.am-ft-right{text-align:right}.am-ft-xxxl{font-size:24px}.am-ft-xxl{font-size:20px}.am-ft-xl{font-size:18px}.am-ft-lg{font-size:17px}.am-ft-md{font-size:16px}.am-ft-sm{font-size:14px}.am-ft-white{color:#fff}.am-ft-black{color:#333}.am-ft-darkgray{color:#666}.am-ft-gray{color:#888}.am-ft-lightgray{color:#ccc}.am-ft-blue{color:#108ee9}.am-ft-orange{color:#e8541e}.am-ft-green{color:#0ba194}.am-ft-red{color:#f4333c}.am-ft-20{font-size:20px}.am-ft-13{font-size:13px}.am-ft-12{font-size:12px}.am-ft-ellipsis{width:auto}.am-button{display:inline-block;width:100%;position:relative;padding:0 .04rem;height:.47rem;line-height:.47rem;font-size:.18rem;text-align:center;box-sizing:border-box;border-radius:.02rem;-webkit-background-clip:padding-box;border:0}.am-button[type=button],.am-button[type=submit]{outline:0;-webkit-appearance:none}.am-button,.am-button.blue{color:#fff;background-color:#108ee9}.am-button.blue.hover,.am-button.blue:active,.am-button.hover,.am-button:active{color:hsla(0,0%,100%,.3);background-color:#0b71ba}.am-button.white{color:#333;background-color:#fff}.am-button.white:after{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;pointer-events:none;width:200%;height:200%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);box-sizing:border-box;border:1px solid #ddd;padding:1px;border-radius:4px}.am-button.bottom:after,.am-button.tiny:after{content:" ";-webkit-transform-origin:0 0;pointer-events:none}.am-button.white.hover,.am-button.white:active{color:rgba(0,0,0,.3);background-color:#ddd}.am-button.white.disabled,.am-button.white.disabled.hover,.am-button.white.disabled:active,.am-button.white:disabled,.am-button.white:disabled.hover,.am-button.white:disabled:active{color:rgba(0,0,0,.3);background-color:#fff}.am-button.warn{border:1px solid #e94f4f;background-color:#e94f4f}.am-button.tiny,.am-button.tiny-blue{width:auto;height:.27rem;line-height:.26rem;font-size:.14rem;padding:0 .12rem;border-radius:.01rem;-webkit-background-clip:padding-box;-webkit-box-sizing:border-box}.am-button.warn.hover,.am-button.warn:active{color:hsla(0,0%,100%,.3);border-color:#e94f4f;background-color:#d33636}.am-button.warn.disabled,.am-button.warn.disabled.hover,.am-button.warn.disabled:active,.am-button.warn:disabled,.am-button.warn:disabled.hover,.am-button.warn:disabled:active{color:hsla(0,0%,100%,.6);background-color:rgba(233,79,79,.4);border-color:rgba(233,79,79,.4)}.am-button.tiny-blue{box-sizing:border-box}.am-button.tiny-blue.hover,.am-button.tiny-blue:active{border-color:#0e7fd1}.am-button.tiny{color:#108ee9;background-color:#f7fcff;box-sizing:border-box}.am-button.tiny.disabled,.am-button.tiny.disabled.hover,.am-button.tiny.disabled:active,.am-button.tiny:disabled,.am-button.tiny:disabled.hover,.am-button.tiny:disabled:active{color:#e5e5e5;background-color:#fff}.am-button.tiny:after{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:200%;height:200%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);box-sizing:border-box;border:1px solid #108ee9;padding:1px;border-radius:2px}.am-button.tiny.disabled.hover:after,.am-button.tiny.disabled:active:after,.am-button.tiny.disabled:after,.am-button.tiny:disabled.hover:after,.am-button.tiny:disabled:active:after,.am-button.tiny:disabled:after{border:1px solid #e5e5e5}.am-button.tiny.hover,.am-button.tiny:active{opacity:.6}.am-button.tiny.processing,.am-button.tiny.processing.hover,.am-button.tiny.processing:active{color:#fff}.am-button.tiny.processing:before{content:" ";display:block;position:absolute;top:50%;left:50%;width:.18rem;height:.18rem;margin:-.09rem;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADAUExURUxpcczMzM3NzczMzM3NzczMzM3NzczMzN/f39DQ0M3NzczMzM7OzszMzM/Pz9DQ0MzMzM3NzczMzMzMzMzMzP///87OzszMzMzMzMzMzMzMzMzMzMzMzM3NzczMzMzMzEKf4m+29iiW5SGT51qo4GSq3jib4zSa4z6e42Wr31mm3lSl30Wf4WOq3Umh4X+034i73VGl34u31hCO6Vyn3WCp3arB0czMzBCO6RiQ5xSP6LLE0Hyy2ajA0mCo3ZK51j1W2scAAAA3dFJOUwDzs/xU+ZnpCB3Jxk+vOywUYd4o2gQqeWlCf6fNhebO3Qn7/FZC8PTnao240uScMB6inf6g19Sh+4JyAAAByklEQVRIx52WZ3uCMBCAD0SWKIjKcGvd1u4WHG3//79qLohaZCTcJx7Nm9y+A7gT1e/2RkOhIgxHva6vQqGoklgNbqUqSvlYx1OCe1G8TjYitYN0aUsZhFa73twX5YEs9q+v1rQ0pBEf0F3n8qPj6vE1jXukGZlekZMXanIlckYziQyi2+qtFA1adfzreHpLvEIJwcgw1RCC70MYvv6zhSpmm5keNe2fMAwP6xuVqfk1Kydy1o4w4cPz5QfqZNvKDffLFKHFJZTUFrMgq2Z7hJ7OCUOjbxSm4oZqN6HfHnVycfrCGKEPmsnogEqLgZkTd4dTNbZGBmB9aEM+RGQ0Jmb+TpgVUQ3DqQObLAizn4CPz7iMzBaVW0MXGYeRmSGzhR7WBiMCE/TcGEaE6bMysCTMEoaEEZmZFUYIBOboxBHaAxbugJl5pAzfOxHDZ88npjan375IEe344gPK8fTb48sDBw93+fLNxcM+X15jI66qXPWjBWcnc9SpjEclrn7QwpxRVK6+Q1u9x9XfDDrxOjx91BRia5j7tWXTOZCYC3ruXKAzUtG45g8djw2+OYfS5J2nKeVcYm6X2g9K7SGl9p1ye1Wp/Y1tT/wDHZd9gMFs/ksAAAAASUVORK5CYII=") 50% no-repeat;background-size:contain}.am-button.bottom{display:inline-block;width:100%;padding:0;box-sizing:border-box;text-align:center;position:fixed;bottom:0;left:0;border-width:0;background:#fff;color:#000}.am-button.bottom span{height:.47rem;line-height:.47rem;font-size:.18rem;color:#000;display:inline-block}.am-button.bottom span:last-child{margin-right:0}.am-button.bottom .am-bottom-button-add{font-size:.24rem}.am-button.bottom.hover,.am-button.bottom:active{color:#000;border-color:#eee;background-color:#eee}.am-button.bottom:after{position:absolute;top:0;left:0;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:200%;height:200%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);box-sizing:border-box;border-top:1px solid #eee}.am-button.loading .icon{-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcYrZ+IXY+YDV9oDV94DV94DU95Ta+4DV94DV96Xi+dzz/Nby/afi+YDU9v7//7wmJYUAAAAOdFJOUwBAK/Kmwt0VjHVb653wrUnV7gAAAS1JREFUKM9jYIAApilhxqmeCgwoQCPvHQg8a0IWLHkHA+4IQQ67d4+9hMoVlwDpBpgge9y7JwJgFqPfu7cLoKJq754KQJmMcff/QK23ezcBbhjn/f8HwIyyd4ZIFkv//wWm4x4jO5Np//8CkAPePURx+vr/G4BkMZKpIMDz/yOQ9HuK6k2G/b+B5qAZADJiAdBYBzRRbqDb2N4JoInyAK3Te4wmyMAOtG7eE3RRhv1/GPxeYYie/8sQ9xBT9DdD3iMM0fW/GeyeY4jKYxWtx2qC3jNstsk9xeaydU+w+cLvJRYfM9g9whI6jO8SsIQky7sGLKEu904BSwzFPcESm5zvzLHEvNy7BiypxO4plhQl/C4dS+p7B9OJklLfJWFL1U8L8OYAHLkFR85Cz4UAyL6c8O2uuCUAAAAASUVORK5CYII=") 50% no-repeat;background-size:contain}.am-button.loading .am-loading-indicator{vertical-align:middle;margin-right:.1rem;margin-top:-.04rem}.am-button.success .icon{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcf////////////////////////////////////////////////////////////rDiYQAAAAPdFJOUwAqQt71wxmjCe+Mdl46r1I/5MEAAAF2SURBVCjPdVOvT8NQEL6VMBpgZAGH2UhqUIMQsDMEW4EB9SAj4T/AQNIlGIIhQWBbHA4ccjgkE3j4D8hom1J+Hfd+ta+jPdHXfL3e+77v7gBk1O63N9ePm1CIxS7yCK9N8BB1HOXguYvpydLZ/KOP0Y0G6wx/2+LNesN4T6ELGA/Va4Phqrrexbus2AxGkkgPL42Ll3GDHzZLTZo1P+7TMY3vBeodDOh5YFQF2KfKW3R6sQHau21gCdXBHwOdo8QXbFLZVwO9xQf6EsAEtnNwFj9JIK5AKy3cz3/0RzBI/nH1vsD7ztGe1PWUAMs12Ex60ImhOxLceUwpla0Q3A8yeE3kDJTKi0igk8JUQUuhvILlhpT8rPVQBXGbQ8l1P+wr1rFkxpNP8UpxIWZSBSWzSDePVEjFlhthJocUK3cczMzn7ignLTfJPQ4y150djXLXdYcaemZEh8a6Caqb5Z0vn5LyiaqYvvJJrZjq8g2o2JaKzRrfwj/mP9VeAJazZgAAAABJRU5ErkJggg==") 50% no-repeat;background-size:contain}.am-button.disabled,.am-button.disabled.hover,.am-button.disabled:active,.am-button:disabled,.am-button:disabled.hover,.am-button:disabled:active{color:hsla(0,0%,100%,.6);background-color:#9ed1f6;border-color:#9ed1f6}.am-button .icon{display:inline-block;width:.21rem;height:.21rem;margin-right:.09rem;vertical-align:-.04rem}.am-button.lock{background-color:#108ee9;color:#fff;border-color:#108ee9;opacity:.4}.am-button-wrap{padding:.09rem .15rem;background-color:transparent}.am-button-group{display:-webkit-flex;display:flex;padding:.09rem .15rem;background-color:#fff}.am-button-group .am-button{display:block;-webkit-box-flex:1;-webkit-flex:1;margin-left:.15rem}.am-button-group .am-button:first-child{margin-left:0}.am-button-bottom-container{display:-webkit-flex;display:flex;background:#fff;height:.6rem;padding:.08rem .16rem;box-sizing:border-box}.am-button-bottom-container .am-button{-webkit-box-flex:1;-webkit-flex:1;height:44px;line-height:44px}.am-button-bottom-container .am-button+.am-button{margin-left:8px}.am-button-bottom-secondary{background-color:#dbeefc;color:#108ee9}.am-button-bottom-secondary.active,.am-button-bottom-secondary:active{background-color:#dbeefc;color:#108ee9;opacity:.8}@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:0.001dpcm){a.am-button.tiny,a.am-button.tiny-blue{line-height:.29rem}}.am-list{padding:.1rem 0;display:block}.am-list .am-list-footer,.am-list .am-list-header,.am-list .am-list-header-sp{position:relative;box-sizing:border-box;color:#999;font-size:.13rem;padding:0 .16rem .08rem;display:block}.am-list .am-list-footer{padding:.08rem .16rem 0}.am-list .am-list-item{position:relative;color:#333;font-size:.17rem;line-height:1.4;padding:0 .16rem;min-height:.52rem;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;background:#fff}.am-list .am-list-item:after,.am-list .am-list-item:before{content:"";background-color:#eee;position:absolute;left:.16rem;height:1px;width:auto;right:0}.am-list .am-list-item:before{display:none;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);top:0;bottom:auto}@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){.am-list .am-list-item:before{-webkit-transform:scaleY(.333);-ms-transform:scaleY(.333);transform:scaleY(.333)}}@media (-webkit-min-device-pixel-ratio:4),(min-device-pixel-ratio:4){.am-list .am-list-item:before{-webkit-transform:scaleY(.25);-ms-transform:scaleY(.25);transform:scaleY(.25)}}.am-list .am-list-item:after{display:block;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);top:auto;bottom:0}.am-list .am-ord-button-item .am-ord-button:active,.am-list a.am-list-item.hover,.am-list a.am-list-item:active,.am-list button.am-list-item.hover,.am-list button.am-list-item:active,.am-list label.am-list-item.hover,.am-list label.am-list-item:active{background-color:rgba(0,0,0,.03)}@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){.am-list .am-list-item:after{-webkit-transform:scaleY(.333);-ms-transform:scaleY(.333);transform:scaleY(.333)}}@media (-webkit-min-device-pixel-ratio:4),(min-device-pixel-ratio:4){.am-list .am-list-item:after{-webkit-transform:scaleY(.25);-ms-transform:scaleY(.25);transform:scaleY(.25)}}.am-list .am-list-item:first-child:before{display:block;left:0}.am-list .am-list-item:last-child:after{left:0}.am-list .am-list-item:first-child:last-child:before{display:block;left:0}.am-list .am-list-item:first-child:last-child:after{left:0}.am-list .am-list-item.am-list-item-indent.line-thumb-s:after,.am-list .am-list-item.am-list-item-indent:after{left:.62rem}.am-list .am-list-item.am-list-item-indent.line-thumb-m:after{left:.7rem}.am-list .am-list-item.am-list-item-indent.line-thumb-b:after{left:.88rem}.am-list .am-list-item.am-list-item-check:after,.am-list .am-list-item.am-list-item-deletable:after,.am-list .am-list-item.am-list-item-indent.line-54px:after{left:.54rem}.am-list .am-list-content{-webkit-box-flex:1;-webkit-flex:1;min-width:.68rem;padding:.08rem 0}.am-list .am-list-title{color:#333;line-height:.24rem;position:relative}.am-list .am-list-brief{color:#999;font-size:.14rem;line-height:.19rem}.am-list .am-list-brief.am-list-cell-twocolumn label,.am-list .am-list-brief.twocolumn label,.am-list .am-list-title.am-list-cell-twocolumn label,.am-list .am-list-title.twocolumn label{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:.7rem}.am-list .am-list-brief .am-list-right-brief,.am-list .am-list-title .am-list-right-brief{font-size:.12rem;color:#bbb;min-width:.3rem;max-width:1rem;margin-left:.1rem;text-align:right;position:absolute;top:0;right:0}.am-list .am-list-extra{-webkit-box-flex:1;-webkit-flex:1;color:#999;min-width:1rem;font-size:.16rem;text-align:right;padding:.08rem 0 .08rem .11rem;letter-spacing:.0058rem}.am-list .am-list-moreline.am-list-item .am-list-content,.am-list.am-list-moreline .am-list-item .am-list-content,.am-list.am-list-ptext .am-list-brief{overflow:auto;text-overflow:inherit;white-space:normal}.am-list .am-list-brief.am-list-cell-noflex,.am-list .am-list-content.am-list-cell-noflex,.am-list .am-list-extra.am-list-cell-noflex,.am-list .am-list-title.am-list-cell-noflex{-webkit-box-flex:0;-webkit-flex:0}.am-list .am-list-brief.am-list-cell-noellips,.am-list .am-list-content.am-list-cell-noellips,.am-list .am-list-extra.am-list-cell-noellips,.am-list .am-list-title.am-list-cell-noellips{overflow:auto;text-overflow:inherit;white-space:normal;text-align:left}.am-list .am-list-thumb{position:relative;margin-right:.16rem;line-height:.2rem}.am-list .am-list-thumb img{vertical-align:middle;width:.3rem;height:.3rem;display:block;border-radius:.02rem}.am-list .am-list-thumb.right{margin-left:.16rem;margin-right:0}.am-list .am-list-thumb.right:last-child{margin-right:0}.am-list .am-list-cell-aligntop{align-self:flex-start;-webkit-align-self:flex-start}.am-list .am-list-twoline-text.am-list-item,.am-list.am-list-twoline-text .am-list-item{min-height:.72rem}.am-list .am-list-twoline-text.am-list-item .am-list-content,.am-list.am-list-twoline-text .am-list-item .am-list-content{padding:.08rem 0}.am-list .am-list-twoline-side.am-list-item .am-list-extra,.am-list.am-list-twoline-side .am-list-item .am-list-extra{min-height:.61rem;box-sizing:border-box}.am-list.am-list-users-sm .am-list-item{min-height:.55rem}.am-list.am-list-users-sm .am-list-item .am-list-thumb img{width:.36rem;height:.36rem;border-radius:2px;-webkit-background-clip:padding-box}.am-list.am-list-users .am-list-item{min-height:.68rem}.am-list.am-list-users .am-list-item .am-list-title{margin-bottom:.02rem}.am-list.am-list-users .am-list-item .am-list-thumb img{width:.5rem;height:.5rem;border-radius:.02rem;-webkit-background-clip:padding-box}.am-list.am-list-users-lg .am-list-item{min-height:.88rem}.am-list.am-list-users-lg .am-list-item .am-list-title{margin-bottom:.06rem}.am-list.am-list-users-lg .am-list-item .am-list-thumb img{width:.6rem;height:.6rem;border-radius:.02rem;-webkit-background-clip:padding-box}.am-list.am-list-twoline .am-list-item{min-height:.72rem}.am-list.am-list-twoline .am-list-item .am-list-thumb img{width:.38rem;height:.38rem;border-radius:.02rem}.am-list .am-list-moreline.am-list-item,.am-list.am-list-moreline .am-list-item{min-height:.88rem}.am-list .am-list-moreline.am-list-item .am-list-brief,.am-list.am-list-moreline .am-list-item .am-list-brief{font-size:.14rem}.am-list .am-list-moreline.am-list-item .am-list-thumb img,.am-list.am-list-moreline .am-list-item .am-list-thumb img{width:.44rem;height:.44rem;border-radius:.02rem}.am-list .am-list-moreline.am-list-item .am-list-title,.am-list.am-list-moreline .am-list-item .am-list-title{margin-bottom:.01rem}.am-list.am-list-ptext .am-list-item{min-height:.94rem;-webkit-box-align:start;-webkit-align-items:flex-start}.am-list.am-list-ptext .am-list-item-more{text-align:center;display:block;width:100%;min-height:.44rem;padding:12px 0;box-sizing:border-box}.am-list.am-list-ptext .am-list-item-more a,.am-list.am-list-ptext a.am-list-item-more{font-size:.14rem;color:#108ee9}.am-list.am-list-ptext .am-list-brief{font-size:.14rem;padding-top:.08rem}.am-list.am-list-ptext .am-list-thumb+.am-list-content .am-list-title{margin-bottom:.02rem}.am-list.am-list-ptext .am-list-thumb+.am-list-content .am-list-brief{padding-top:0;padding-bottom:0}.am-list.am-list-ptext .am-list-content,.am-list.am-list-ptext .am-list-thumb{padding:.14rem 0}.am-list.am-list-ptext .am-list-thumb img{width:.66rem;height:.66rem}.am-list.am-list-ptext .am-list-sti{font-size:.13rem;color:#bbb;padding-top:.08rem}.am-list.am-list-bank .am-list-thumb img,.am-list .am-list-twoline-side.am-list-item .am-list-thumb img,.am-list.am-list-twoline-side .am-list-item .am-list-thumb img{width:.36rem;height:.36rem;border-radius:100%;-webkit-background-clip:padding-box}.am-list .am-ord-button-item{padding:0;text-align:center;position:relative}.am-list .am-ord-button-item:before{content:" ";display:block;width:.03rem;height:.2rem;position:absolute;right:50%;top:.14rem;border-right:1px solid #eee}.am-list .am-ord-button-item .am-ord-button{width:50%;min-height:.44rem;line-height:.44rem;color:#0e7fd1}.am-list .am-list-arrow{margin-left:.1rem;margin-right:-.02rem;width:.12rem;padding:.16rem 0}.am-list .am-icon.arrow{display:block;overflow:hidden;width:.13rem;height:.13rem}.am-list .am-icon.arrow:before{content:"";display:block;width:.13rem;height:.13rem;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAkElEQVR4AWJwL/BhAJRWByYAgkAUhmdpkDZxlJZqD9UpXCPyBUTEga9+4IkI94F1XaWUTdH+a67inPOhjP2OgD+IFoTcm1GY3khrbfGAGFG6kBmAkPCw1rq6iBYb0VkEzJD+hHQWAz6iJBtQdP8YiQEbUQNiAF0BP0T+Gnkj8VbmHxMq5gOFjzQ+VPlYxz+WEyrVzhdMcxADAAAAAElFTkSuQmCC") 50% no-repeat;background-size:.08rem .13rem}.am-list .am-icon.arrow.vertical:before{-webkit-transform:rotate(90deg)}.am-list .am-icon.arrow.vertical.up:before{-webkit-transform:rotate(-90deg)}.am-list .am-list-header-sp{padding:.16rem .16rem .09rem;background-color:#fff;color:#999;font-size:.13rem}.am-list .am-list-header-sp:before{display:block;content:"";-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#eee;position:absolute;top:0;right:0;bottom:auto;left:0;height:1px;width:auto}.am-list .am-list-header-sp+.am-list-body .am-list-item:first-child:before{display:block;left:16px}.am-list .am-list-header-sp+.am-list-body .am-list-item:last-child:after{left:0}.am-list .am-list-header-sp+.am-list-body .am-list-item:first-child:last-child:before{display:block;left:16px}.am-list .am-list-header-sp+.am-list-body .am-list-item:first-child:last-child:after{left:0}.am-list.am-list-info .am-list-item,.am-list.info .am-list-item{display:block}.am-list.am-list-info .am-list-item.oneline,.am-list.info .am-list-item.oneline{display:-webkit-flex;display:flex}.am-list.am-list-info .am-list-item-part,.am-list.info .am-list-item-part{padding:.04rem 0 .03rem;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center}.am-list.am-list-info .am-list-item-part:first-child,.am-list.info .am-list-item-part:first-child{padding-top:.08rem}.am-list.am-list-info .am-list-item-part:last-child,.am-list.info .am-list-item-part:last-child{padding-bottom:.08rem}.am-list.am-list-info .am-list-item-part:first-child:last-child,.am-list.info .am-list-item-part:first-child:last-child{padding:0}.am-list.am-list-info .am-list-content,.am-list.am-list-info .am-list-extra,.am-list.info .am-list-content,.am-list.info .am-list-extra{font-size:.15rem}.am-list .am-list-item.am-list-dropdown,.am-list .am-list-item.dropdown{display:block;padding:0}.am-list .am-list-item.am-list-dropdown .am-list-dropdown-item,.am-list .am-list-item.am-list-dropdown .am-list-dropdown-main,.am-list .am-list-item.dropdown .am-list-dropdown-item,.am-list .am-list-item.dropdown .am-list-dropdown-main{color:#000;font-size:.17rem;line-height:.21rem;padding:0 .15rem;min-height:.44rem;vertical-align:middle;text-align:left;overflow:inherit;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center}.am-list .am-list-item.am-list-dropdown .am-list-dropdown-item,.am-list .am-list-item.dropdown .am-list-dropdown-item{padding-left:0;background:linear-gradient(180deg,#eee,#eee 50%,transparent 0) 0 0 no-repeat #fff;-webkit-background-size:100% 1px}.am-list .am-list-item.am-list-dropdown .am-list-dropdown-item:last-child,.am-list .am-list-item.dropdown .am-list-dropdown-item:last-child{background:linear-gradient(180deg,#eee,#eee 50%,transparent 0) 0 0 no-repeat,linear-gradient(0deg,#eee,#eee 50%,transparent 0) 0 100% no-repeat #fff;-webkit-background-size:100% 1px,100% 1px}.am-list .am-list-item.am-list-dropdown .am-list-dropdown-list,.am-list .am-list-item.dropdown .am-list-dropdown-list{display:none;padding-left:.15rem}.am-list .am-list-item.am-list-dropdown.expand .am-list-dropdown-list,.am-list .am-list-item.am-list-dropdown.up .am-list-dropdown-list,.am-list .am-list-item.dropdown.expand .am-list-dropdown-list,.am-list .am-list-item.dropdown.up .am-list-dropdown-list{display:block}.am-list .am-list-item-icon .am-list-content:before{content:" ";display:inline-block;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURZGQkJGQkExpcZGRkesxxnQAAAAEdFJOU0wpAHbsqyh5AAAB40lEQVQoz2WTPU8bQRCGB38VVgABtsBbp3LlJg1yERBuUhnF60huaFxdjbajQckVqQJKGqSV+NhouVcUVn6BJReRUlPtr6Bxkyqze2djb67w7aMbz87M+w7dYO0h9QewwC/AHzRpARggBfxBkV1jR5MpUZnKXX7xoURf3kn5qT/rzqpVKc+GhE0O2+D49xx/DsJ+goeEOasje2ZuOVRCPoId849QZhy4JbTxrK+L+1IV2NYLvnWBH13Bth3YqIK1CHzNafqdGidOA3+1YyPS7+2Wuw8ssudLjj/eT0zgNs4Fs9nEI/OPCrch5ZGUcykbQ5rMiLaJOkQvRLMtwg7w2XG8LQEn/P9doKGYdZM/MJeQvdXM6iDnGqe1SZq5VoJvzIcwJnOpTfjiJ+Y6fhqoVPtCbgNzmTpVEKPAfz3bnoP4gIfF9+x34pnrnbzQmzJRl2jaoW3WYy5PP0p5IWW1F/SI4lfyjYp8d2v3xfUccv2r9XI/49DPQd4PjyHvt5H3u5zHTs7LedXCvCa0Mk/vn0pTnjV53oO5HOwNX/W4yvUIel0x1xZ6sZ5ZtddPFnp6vU1ntNQ79kPsl9hPsd8iP8Z+jf0c+T3sw2B6UW7m+/C6L/6w9d8+xfumRNjHnHkfo339B66yukK9yQTgAAAAAElFTkSuQmCC") 50% no-repeat;background-size:100% 100%;width:.22rem;height:.22rem;margin-right:.15rem;vertical-align:top}.am-list .am-list-item-deletable .am-list-content:before{content:" ";display:inline-block;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAARVBMVEVMaXH/////OzL/PDD/PDH/PDD/OzD/OzD/OzD/PDD/PDD/OzD/OzD/OzD/PDT/PDD/PDD/PDH/OzD/PDH/PDD/OzD////J9EceAAAAFnRSTlMAATiDpb/Z8/JEmef/wiKt7m38kMOazsObFgAAANBJREFUeAGV1VWChEAQA9DQLhkc7n/T9R3Dqt4v2pbgTWOs8yGm4J01Dc7kUvmklowj5saNm8GetuOursVG7nmg3/zLMPLQOODFxFPTy3t5YcBdHnlhvP932/NS3+JXR4EOPwxFDL7NFJnxJVMoA1goVICmUqg2MBQzsBSzcBRz8BTzCBQLiLxbd/EuIslvTrrfUA1QNXWqRVEtt2ojoVCoaDc/bhS5qQ6sJgpUIaOJL00waiJXE+b6mtAX0J2ZuTEbHMnLa2kuGRvbOo67dfwJ9o9KRVYWc+4AAAAASUVORK5CYII=") 50% no-repeat;background-size:100% 100%;width:.22rem;height:.22rem;margin-right:.16rem;vertical-align:top}.am-list-item-action{color:#108ee9}.am-list-item-action-divider{margin-left:.16rem;margin-right:.16rem;position:relative}.am-list-item-action-divider:before{content:"\\200B";position:absolute;left:0;top:0;width:1px;height:100%;background:#ddd;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.am-list+.am-list .am-list-header{margin-top:-.05rem}.am-list-bank .am-list-item{min-height:.72rem}.am-list-detailed .am-list-body{background:#fff}.am-list-detailed .am-list-item{min-height:auto;padding:.1rem .16rem}.am-list-detailed .am-list-item+.am-list-item{padding-top:0}.am-list-detailed .am-list-item:after{display:none}.am-list-detailed .am-list-item-bordered:after{display:block}.am-list-detailed .am-list-item-bordered+.am-list-item{padding-top:.1rem}.am-list-detailed a.am-list-item:active,.am-list-detailed button.am-list-item:active,.am-list-detailed label.am-list-item:active{background-color:transparent}.am-list-detailed .am-list-arrow{padding:0}.am-list-detailed-label{align-self:flex-start;-webkit-align-self:flex-start;font-size:.14rem;color:#999;margin-right:5px;text-align:left;min-width:85px}.am-list-detailed-content{-webkit-box-flex:1;-webkit-flex:1;text-align:right;font-size:.14rem;color:#333;word-break:break-all;word-wrap:break-word}.am-list-detailed-content-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.am-list.am-list-6lb .am-list-label{width:1.02rem;margin-right:.05rem}.am-list.am-list-5lb .am-list-label{width:.88rem}.am-list.am-list-4lb .am-list-label{width:.74rem}.am-list.am-list-3lb .am-list-label{width:.54rem}.am-list.am-list-form .am-list-item button,.am-list.am-list-form .am-list-item input,.am-list.am-list-form .am-list-item select,.am-list.am-list-form .am-list-item textarea,.am-list.form .am-list-item button,.am-list.form .am-list-item input,.am-list.form .am-list-item select,.am-list.form .am-list-item textarea{font-size:.15rem;-webkit-appearance:none;width:100%;padding:0;border:none;background-color:transparent}.am-list.am-list-form .am-list-item input,.am-list.am-list-form .am-list-item select,.am-list.form .am-list-item input,.am-list.form .am-list-item select{font-size:.17rem;color:#000;height:.25rem;display:block;line-height:.24rem}.am-list.am-list-form .am-list-item textarea,.am-list.form .am-list-item textarea{font-size:.17rem;overflow:visible;display:block;resize:none;word-break:break-all;word-wrap:break-word;line-height:normal}.am-list.am-list-form .am-list-item ::-webkit-input-placeholder,.am-list.form .am-list-item ::-webkit-input-placeholder{color:#ccc;font-size:.17rem}.am-list.am-list-form .am-list-label,.am-list.form .am-list-label{font-size:.17rem;margin-left:0;margin-right:.05rem;color:#000;text-align:left;min-width:.85rem}.am-list.am-list-form .am-list-control,.am-list.form .am-list-control{font-size:.17rem;-webkit-box-flex:1;-webkit-flex:1}.am-list.am-list-form .am-list-clear,.am-list.form .am-list-clear{width:.18rem}.am-list.am-list-form .am-list-clear .am-icon.clear,.am-list.form .am-list-clear .am-icon.clear{padding:.02rem}.am-list.am-list-form .am-list-button,.am-list.form .am-list-button{display:block;height:.35rem;margin-right:-.1rem}.am-list.am-list-form .am-list-button:before,.am-list.form .am-list-button:before{content:"";float:left;margin-top:.09rem;height:.17rem;width:1px;background:#e5e5e5;overflow:hidden}.am-list.am-list-form .am-list-button a,.am-list.am-list-form .am-list-button button,.am-list.form .am-list-button a,.am-list.form .am-list-button button{float:left;width:.94rem;height:.35rem;text-align:center;padding:0;color:#108ee9}.am-list.am-list-form .am-list-button a:disabled,.am-list.am-list-form .am-list-button button:disabled,.am-list.form .am-list-button a:disabled,.am-list.form .am-list-button button:disabled{color:#888}.am-list.am-list-form .am-list-button button,.am-list.form .am-list-button button{outline:0;border:0;background:0 0}.am-list.am-list-form .am-captcha-figure,.am-list.form .am-captcha-figure{float:left;width:.6rem;margin:.05rem 0 0 .1rem;height:.25rem;vertical-align:top}.am-list.am-list-form .am-captcha-figure img,.am-list.form .am-captcha-figure img{width:.59rem;height:.22rem;vertical-align:middle}.am-list.am-list-form .am-captcha-figure button,.am-list.form .am-captcha-figure button{width:.6rem;height:.25rem;vertical-align:top;line-height:.25rem;color:#888;font-size:.15rem}.am-list.am-list-form .captcha-refresh,.am-list.form .captcha-refresh{width:.21rem;height:.21rem;text-indent:-99.99rem;background-position:center 1px;margin-top:.07rem;margin-right:.12rem}.am-list.am-list-form .am-list-item.select select,.am-list.form .am-list-item.select select{position:relative;display:block;width:100%;height:100%;z-index:2}.am-list .am-list-item-error .am-list-control input{color:#ff3b30}.am-list .am-list-item-error .am-icon.am-error-tip{width:.16rem;height:.16rem}.am-list .am-list-item-error .am-icon.am-error-tip:before{width:.16rem;height:.16rem;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURUxpcf88Mf88Mv87MP87MP87MP88Mf9PNv87MP88MP87Mf87MP87MP9VVf87MP89Mf89Mv87MP89O/9COP87MP87MP88MP87MP88Mf87MP87MP89Nf88Mf87Mv88MP87MPTIUdQAAAAfdFJOUwBnN+3M+lsJ5498r7cD205g9REb9/KahkLBoyt0cJT9wB6oAAABXUlEQVRIx51W25aDIAzECwp4Qatidbsn//+XxW53T1cmWjqPSeYAySRBiD1Kq+s2kzJra21LcYJLV/X0gr7qLgfhpZkowGS4Y5pEEYRKGhQ/5MQiH8L4VNEBVLqPL0Y6xFjs4ukU/xjpeE4YX241KHoD6u/lTZCfRWvtwlz9ZjcJXMZbv8Izkmd9wwvNmKB+am5Cj94SAZ5hHnoD+nHefgWEaVNiBxyrt1uUqc47KmCvuFp6R9kDe82cTH2JT15gsjdYoaGcPeEGCVrUHMFAQi1aZG49YSbsyaDOPAHelTIhsVkIBwkSE6QnrAwBXokaXNDtbPho8rKsmUdjuxfZwqQVJ2N1TjGFsxQFi8XHwosPZkPO1++MkTeU8dbtqWQaCLXoo9lzpkWRLDmC4cbMDQ+B55hBveWKuWcHGRiVzFppPh3G8eM+fqHEr6z4pRi/duMXe/zX4YPPyTvfnztZW8ocyA/EyAAAAABJRU5ErkJggg==") 0 0 no-repeat;background-size:.16rem auto;-webkit-background-size:.16rem auto}.am-tab,.am-tab .am-tab-item{height:.44rem;position:relative;overflow:hidden}.am-tab{display:-webkit-flex;display:flex;background:linear-gradient(0deg,#eee,#eee 33%,#fff 0) 0 100% no-repeat #fff;background-size:100% 1px}.am-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none}.am-tab .am-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;width:100%;box-sizing:border-box;font-size:.16rem;text-align:center;line-height:.44rem;margin:0;color:#333;text-overflow:ellipsis;white-space:nowrap}.am-tab .am-tab-item span{position:relative;display:inline-block;line-height:.44rem;z-index:20}.am-tab .am-tab-item span:after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px}.am-tab .am-tab-item.selected{color:#108ee9;font-weight:600}.am-tab .am-tab-item.selected span:after{background-color:#108ee9}.am-tab.am-tab.animation .am-tab-selected-bar{position:absolute;bottom:0;left:0;height:2px;background-color:#0ae;z-index:1;transition:-webkit-transform .3s cubic-bezier(.645,.045,.355,1);transition:transform .3s cubic-bezier(.645,.045,.355,1);transition:transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);list-style:none}.am-tab.am-tab.animation.hover,.am-tab.am-tab.animation:active{color:#108ee9;border-bottom-color:#108ee9}.am-tab.am-tab.animation .am-tab-item.selected{border-bottom-color:transparent}.am-tab .am-tab-scroll-nav{display:block;white-space:nowrap;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transition:-webkit-transform .2s ease-out}.am-tab .am-tab-scroll-nav .am-tab-item{display:inline-block;padding:0 .16rem;width:auto;max-width:30%}.am-tab .am-tab-scroll-left,.am-tab .am-tab-scroll-right{position:absolute;display:block;width:.36rem;height:.39rem;top:1px;z-index:99;visibility:hidden}.am-tab .am-tab-scroll-left.show,.am-tab .am-tab-scroll-right.show{visibility:visible}.am-tab .am-tab-scroll-left{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0)) 0 no-repeat;background-size:100% 100%;left:0}.am-tab .am-tab-scroll-right{right:0;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0)) 0 no-repeat;background-size:100% 100%}.am-tab .am-tab-wrap{margin-right:.6rem;width:100%;overflow:hidden;position:relative;display:-webkit-flex;display:flex}.am-tab .am-tab-wrap .am-tab-scroll-nav .am-tab-item{padding:0 .11rem}.am-tab .am-tab-btn{position:absolute;width:.55rem;height:41px;top:0;right:0;box-sizing:border-box}.am-tab .am-tab-btn:before{border-left:1px solid #eee;content:" ";position:absolute;left:0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;pointer-events:none;width:1px;top:.07rem;height:.56rem}.am-tab .am-tab-btn.hover,.am-tab .am-tab-btn:active{background-color:rgba(55,57,64,.05)}.am-tab .am-tab-btn .am-icon.am-tab-dropdown{display:block;width:100%;height:100%;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAARCAYAAACxQt67AAAAAXNSR0IArs4c6QAAAvFJREFUSA3NVl9IU2EUP+duuiyFCnSaM6ie1KtivZS9SAQ9RE+R9FikyRZeQZ/WS3tKCBS84obNqMcweoqgIKqXrJcS3bReLGjXdAoVaNnmdk/nm1z87hY6TbIPLud3fufcc377/txvADyODVGBsP/DsLQ4hZhE0uhV+2OHFETvhOYxdkJgvW54TKIQa/nE/TVs1GdrVig1TkAsEhcVIP95rSoUQDT/hcAAkfJQj3lNwB4AKkHAVAE6G1DVY0+I6IwsAhFHC8DZNqZVTMn8duPMpEAqzP2b5Nrc/6nCy3cLEablgEhM0sqYOhC7cWGECuXYdmBRU9QWPXJFwXRGk2h0YiRWtDQLAQLoWl1SqT3CFJKjLdpZOSqxW4Zq/0wTYToMBDVyEbGECNBXXAGB1y1Vy4zXRoM+05iG9DARHF1jGSGyZgju3bPL/+pK6aItlqdz8s5Cyfcfv3gfgQ+IbH15xd45wNE6rlWOWeVsCYLkaXa8nzO6GPK+pN1WorC89gaB4pvUKh/J/Ea4Vp85h2AGuZ5HzuV6P9kPVJd7+h60YNoWkx0Z1wXjhymVGOLZOy3zAvMvHIEilxZtc8ezY7KvhuNuWE7oXKNF5gXmGs/Q6WqP+Nwfs2OZ+J9ImavTjUv8fenlo7xf5rnwN366Ix0H78q8hesGPl9mQb387LO4VYtfeXN3RzTPPTtv93KW0h5e9epDc2VmMtVPYF7MiSM+Ryi8GtXcmZOt6vEjBMnbvI9OZeciKPeVQmfnhLd8PjuW7eclzHpJ1Y2zPHMh3itVFicsn6hlUiCQwaY43VQksDV4L8U4yxvVPI8tbiO7KWGiWPPgfPFCOtHDx93HIpX1G/DtgRAsdbj8L6+VLa2fa49uWpj1Ot9tx9NgDrPAWouzWYRJByitfPe+sfF5OlsWJuqLfwLJhOE3ga6zQFemJ0JCAbxZ6PL0vG3HlTx15KT9lTCrmjr4pRrSqbDwEZ2tkY4DH6zYjtvmF+QUz3YJ+Q1jbxRVOW9GTAAAAABJRU5ErkJggg==") center 57% no-repeat;background-size:.19rem auto}.am-checkbox{display:inline-block;position:relative;line-height:.24rem}.am-checkbox .icon-check,.am-checkbox.tiny .icon-check{position:absolute;top:50%;width:.22rem;height:.22rem;margin-right:.02rem;margin-top:-.11rem;-webkit-transform:rotate(0)}.am-checkbox .icon-check:before,.am-checkbox.tiny .icon-check:before{content:" ";position:absolute;width:200%;height:200%;top:0;left:0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;pointer-events:none;border:2px solid #c9c9c9;border-radius:100%;-webkit-background-clip:padding-box;background-color:#fff}.am-checkbox .icon-check:after,.am-checkbox.tiny .icon-check:after{position:absolute;display:none;z-index:999;content:" ";top:.04rem;right:.08rem;width:.05rem;height:.1rem;border:1px solid #fff;border-width:0 1px 1px 0;-webkit-transform:rotate(45deg)}.am-checkbox input{position:absolute;left:0;top:50%;width:.2rem;height:.2rem;margin-top:-.08rem;opacity:0;border:0;z-index:1;-webkit-appearance:none}.am-checkbox input:checked+.icon-check:before{border-width:0;border-color:#108ee9;background-color:#108ee9}.am-checkbox input:checked+.icon-check:after{display:block;border-color:#fff}.am-checkbox input:disabled+.icon-check:before{border-width:2px;border-color:#ccc;background-color:#e1e1e1}.am-checkbox input:disabled:checked+.icon-check:after{display:block;border-color:#adadad}.am-checkbox.middle .icon-check{width:.22rem;height:.22rem;margin-right:.02rem;margin-top:-.12rem}.am-checkbox.middle .icon-check:before{border-radius:100%;-webkit-background-clip:padding-box}.am-checkbox.middle .icon-check:after{top:.04rem;right:.08rem;width:.06rem;height:.11rem}.am-checkbox.middle label{text-indent:.28rem}.am-checkbox.mini .icon-check{margin-top:-.07rem;margin-right:.04rem}.am-checkbox.mini .icon-check:before{content:" ";position:absolute;width:200%;height:200%;top:0;left:0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;pointer-events:none;border:2px solid #c9c9c9;border-radius:100%;-webkit-background-clip:padding-box}.am-checkbox.agreement{display:block;padding:.05rem .16rem;font-size:.14rem}.am-checkbox.agreement input{top:.13rem;left:.16rem}.am-checkbox.agreement .icon-check{top:.05rem;margin-top:0;margin-right:.08rem;width:.2rem;height:.2rem}.am-checkbox.agreement .icon-check:after{top:.03rem;right:.07rem}.am-checkbox.agreement .icon-check+label{padding-left:.28rem}.am-checkbox.agreement label{display:block;color:#333;line-height:150%}.am-checkbox.agreement label>*{pointer-events:auto}.am-list .am-list-item.am-list-item-check,.am-list .am-list-item.am-list-item-radio,.am-list .am-list-item.check,.am-list .am-list-item.radio{position:relative}.am-list .am-list-item.am-list-item-check .am-checkbox,.am-list .am-list-item.am-list-item-radio .am-checkbox,.am-list .am-list-item.check .am-checkbox,.am-list .am-list-item.radio .am-checkbox{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1}.am-list .am-list-item.am-list-item-check,.am-list .am-list-item.check{padding-left:.54rem}.am-list .am-list-item.am-list-item-check .am-checkbox .icon-check,.am-list .am-list-item.check .am-checkbox .icon-check{left:.16rem}.am-list .am-list-item.am-list-item-check.mini,.am-list .am-list-item.check.mini{padding-left:.45rem}.am-list .am-list-item.am-list-item-radio,.am-list .am-list-item.radio,.am-list .radio-check{padding-right:.46rem}.am-list .am-list-item.am-list-item-radio .am-checkbox .icon-check,.am-list .am-list-item.radio .am-checkbox .icon-check,.am-list .radio-check .am-checkbox .icon-check{right:.16rem;margin-right:-.02rem}.am-list .am-list-item.am-list-item-radio .am-checkbox .icon-check:before,.am-list .am-list-item.radio .am-checkbox .icon-check:before,.am-list .radio-check .am-checkbox .icon-check:before{border:0;background-color:transparent}.am-list .am-list-item.am-list-item-radio .am-checkbox .icon-check:after,.am-list .am-list-item.radio .am-checkbox .icon-check:after,.am-list .radio-check .am-checkbox .icon-check:after{border-width:0 2px 2px 0}.am-list .am-list-item.am-list-item-radio .am-checkbox input:checked+.icon-check,.am-list .am-list-item.am-list-item-radio .am-checkbox input:checked+.icon-check:before,.am-list .am-list-item.radio .am-checkbox input:checked+.icon-check,.am-list .am-list-item.radio .am-checkbox input:checked+.icon-check:before,.am-list .radio-check .am-checkbox input:checked+.icon-check,.am-list .radio-check .am-checkbox input:checked+.icon-check:before{background-color:transparent}.am-list .am-list-item.am-list-item-radio .am-checkbox input:checked+.icon-check:after,.am-list .am-list-item.radio .am-checkbox input:checked+.icon-check:after,.am-list .radio-check .am-checkbox input:checked+.icon-check:after{border-color:#108ee9}.am-list .am-list-item.am-list-item-region-selection{padding-right:.15rem}.am-list .am-list-item.am-list-item-region-selection .am-checkbox .icon-check{right:.45rem;margin-right:-.02rem;background-color:transparent}.am-list .am-list-item.am-list-item-region-selection .am-checkbox .icon-check:before{border:0;background-color:transparent}.am-list .am-list-item.am-list-item-region-selection .am-checkbox .icon-check:after{border:0}.am-list .am-list-item.am-list-item-region-selection .am-checkbox input:checked+.icon-check:before{content:"\\5DF2\\9009\\5730\\533A";width:1.5rem;height:100%;line-height:.45rem;font-size:.32rem;color:#888}.am-list .am-list-item.am-list-item-region-selection .am-checkbox input:checked+.icon-check:after{content:" "}.am-listlabel.hover,.am-listlabel:active{background-color:#eee}.am-checkbox-padding{padding-left:.3rem;margin-left:.15rem}.check-left{left:0}.font-gray{margin-left:.2rem;color:#888}.am-page-result{position:absolute;top:0;left:0;right:0;bottom:0;background:#fff;text-align:center;width:100%;height:100%;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;padding-top:.22rem;box-sizing:border-box;justify-content:space-between;-webkit-justify-content:space-between}.am-page-result .am-page-result-pic{width:2.2rem;height:2.2rem;margin:0 auto;line-height:2.2rem}.am-page-result .am-page-result-title{margin-top:.2rem;font-size:.2rem;line-height:.28rem;color:#333}.am-page-result .am-page-result-brief{margin:.12rem auto;font-size:.14rem;line-height:.19rem;color:#999;max-width:2.66rem;text-align:center}.am-page-result .am-page-result-button{margin-top:.21rem;display:block;padding:.15rem .15rem .1rem}.am-page-result a.am-page-result-button{text-align:center;font-size:.2rem;color:#108ee9}.am-page-result div.am-page-result-button{margin:0;padding:0 0 50px}.am-page-result div.am-page-result-button .am-page-result-button{padding:0;margin:.26rem 0 0}.am-page-result .combine-page .am-page-result-pic{width:1rem;height:1rem;margin:0 auto;line-height:1rem}.part-result{height:auto;padding-top:.2rem;padding-bottom:.2rem}.part-result .am-page-result-pic.am-icon{width:.9rem;height:.9rem;margin:0 auto;line-height:.9rem;background-size:.9rem .9rem;-webkit-background-size:.9rem .9rem}.part-result .am-page-result-title{margin-top:.16rem;margin-bottom:.16rem;font-size:.14rem;line-height:normal;color:#999}.part-result.am-page-result:before{min-height:.3rem}.part-result div.am-page-result-button{padding-bottom:.15rem}.part-result div.am-page-result-button a{display:inline-block;background-color:#fff;border:1px solid #108ee9;border-radius:2px;height:24px;font-size:14px;padding:0 10px;line-height:24px}.part-result div.am-page-result-button a:active{color:#70bcf2;border-color:#70bcf2}.am-loading-bar,.am-loading-indicator{margin:0 auto;padding:0;display:inline-block;font-size:0;line-height:1px}.am-loading-bar .am-loading-item,.am-loading-indicator .am-loading-item{width:.1rem;height:.1rem;margin:0}.am-loading-bar .am-loading-item:before,.am-loading-indicator .am-loading-item:before{content:" ";position:absolute;top:50%;left:50%;margin-left:-.06375rem;margin-top:-.095625rem;width:.1275rem;height:.19125rem;-webkit-transform:skew(-.46rad) scale(.5);-webkit-transform-origin:center center;border-radius:1px 2px 2px 3px}.am-loading-bar.tiny .am-loading-item,.am-loading-indicator.tiny .am-loading-item{width:.09rem;height:.09rem;margin:0;position:relative}.am-loading-bar.tiny .am-loading-item:before,.am-loading-indicator.tiny .am-loading-item:before{content:" ";position:absolute;top:50%;left:50%;margin-left:-.05666667rem;margin-top:-.085rem;width:.11333333rem;height:.17rem;-webkit-transform:skew(-.46rad) scale(.5);-webkit-transform-origin:center center;border-radius:1px 2px 2px 3px}.am-loading-bar .am-loading-item:before,.am-loading-bar.blue .am-loading-item:before,.am-loading-indicator .am-loading-item:before,.am-loading-indicator.blue .am-loading-item:before{background-color:#108ee9}.am-loading-bar.white .am-loading-item:before,.am-loading-indicator.white .am-loading-item:before{background-color:#fff!important}.am-loading-bar .am-loading-item,.am-loading-indicator .am-loading-item{display:inline-block;position:relative;-webkit-transform:scale(0);opacity:0;-webkit-animation:AULoadingScaleColorBoth .766s ease-in-out infinite alternate;animation:AULoadingScaleColorBoth .766s ease-in-out infinite alternate}.am-loading-bar .am-loading-item:first-child,.am-loading-indicator .am-loading-item:first-child{-webkit-animation-delay:-2.2s;animation-delay:-2.2s}.am-loading-bar .am-loading-item:nth-child(2),.am-loading-indicator .am-loading-item:nth-child(2){-webkit-animation-delay:-1.966s;animation-delay:-1.966s}.am-loading-bar .am-loading-item:nth-child(3),.am-loading-indicator .am-loading-item:nth-child(3){-webkit-animation-delay:-1.666s;animation-delay:-1.666s}.am-loading{text-align:center;color:#888;padding:22px 0;font-size:12px;line-height:22px;min-height:22px}.am-loading .am-loading-indicator{margin-top:10px;margin-bottom:10px}.am-loading .am-icon{display:inline-block;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;width:22px;height:22px;vertical-align:middle}.am-loading .am-icon:before{content:"";display:block;width:100%;height:100%;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAYFBMVEVMaXHu7u7Q0NDNzs7MzMzNzc2Su97MzMzMzMzMzMzQ0NDMzMzMzMzMzMzMzMzNzc3Mzc7MzMzMzMyEtNdZpt/Mzc21xNARjukek+ctmOaGttgnluc3m+MXkeshlOeivtOX9Y8kAAAAIHRSTlMABRs7VWYRrfL/Kfqd5ceSdrnP/+98/v/kzM2N/03JrWu3qrEAAAErSURBVHgBpZVVksNQDAQfy222N4z3P2WYUamd764pscyTrPMhxuCdNV+UgmQcRSYhfUBzKbhTIfkb1JVHtKqlaaSujnjpXrHxgNbtxStv6wMen9NqACR/jAugsQ+JdUDvzZN8D3TpznfPystaWYG/wS3dAEPzRsPReDy50vETu6PH4/H0UrMCxHzQbEfPzVEl9PYTbAc7+hhIXoA3H+UXZ2v5EsQxkKN1KiD/Bucn6wC1MQrryTGK9jvcHuKwmSKKYxxL46AyCg32QXtNyMegVyaAqOEIjQZe78rxG6wM4whrE6wH47m6dBU4dVMgs+p2g6gHqYagHlEoknb4j4xyraDItQvbQ6k9BQKF0x4ZIGrPF9DoDyOd/f3k6o+5/k3oH5D+tf3/aWre8RaPERYiltEshwAAAABJRU5ErkJggg==") no-repeat;background-size:100% auto}.am-loading .am-loading-text{vertical-align:-2px}.am-loading.page{background:#fff;min-height:100vh;padding:0;font-size:15px;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}.am-loading.am-loading-nomore .am-icon,.am-loading.am-loading-nomore .load-list,.am-loading.hidden{display:none}.am-loading.page .am-icon{-webkit-animation:none;animation:none;width:22px;height:36px}.am-loading.page .am-icon:before{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABICAYAAAH65ifbAAAABGdBTUEAALGPC/xhBQAAC4tJREFUaAXtG/1zVNX13fveJiyBfOxmdwMmwigDGAiYoqPVKSiOdkprLbZaxw8q0x+YqSUk4R/gx8605Itax5k6DrXVij8w2mlrFUatrcUWJoCiWD5KJZB9+7KbBJKwyb53b8955D7u+9pdQrSdKXdmc849X/fsfffdc869G0Up1uq7jNsEf8kfeCXiGv5hmqXFejObEc+dMBC8iH8UQRQ49mm8R99kcz1/iJDy0BWKBMJpQWbktiUvjyETy8PrutKPB0rW7zIWCobPG3vAwC8kVGRIZEnB8NlULeV9wSwNbXUUi3en13NKFwXNQbxbf4pTojnCwq7sEGH034QXrKHOBe8h/7JjfdkHFG7dgITq6sQrZzaTvKyEdByRxHsGb+dEXSkI9b3GGqJFzxnPzEsn+jKtFlduRR42jXFaQaadQWtD2xL2c4s9m22yTMsRROHLbkwvJCSENa5o+6dtXhGJ9wyBW2ylYgFNU9/OtcUHrnCvArMtHz9+fD7o3BumZ1lWbsWKFX9x+Mmd+mqnE4LYKxl5pka+EiLjemlsmVivfpcQTvbpNwu8rtd4TODObOAcVzDrnSmqOr63tSV27yCEBQoLogyJyQvZ7alfI8322VkHljVurzpN3ScUuEYign9l2XNlIteefJVzTqBxFBZCiM+Zk3jVmQ0UXNJ3orKpe2BOvDd9HwrILZ83vm9vNEiM7xpafnJr/fFpgf2yoMAdy5yxr+7YwZ2+7IIQvuKzoIRAlSn9NOidC5I3OpKHXQ8lSAhpwqAjjMR73uHakcP6I4TSOYyT7Eh74g2k/48122d4U75dzK/ly5fbvru+ICqkfpWuKgzTRxGnlPxpaGviPOLltCV92eq8qWkDnTU5Z2kIxamcei+uOTG1gl4Mxnv1jVwhtTkO2wc3PwPZD3yGa2rq910YNu6RDcV69PsVQhptmqWM5zqTewS/rtt4Irst8RvRF9A3FciId2eehpUayBOKDiTWh7m2BZ84/WnEpQyh4DsQCuq8QuX25emzDTd2nY1NqJUPyQYIMw9kOxZ+KtMELmKR6Lvg9FQRXOpHjxpPycxIHdujb2oYR5r8ylKLfDTUmTiIdDD+MHy7GsR9DXYf7eiR9EaFqC6eMIpE+evJQrBN6vB1gw0TZS5VuGrvZ7KS7KVMFzimFoSSpaIfBMni7uHaC7SwMYiJNMK5BXnQ54ywSlhyTq4SJi/o9sPzRmbBnCnE6XMtt1JTUGog+GYfZ9vr/4FyLsNCMdWt31SgZJ3oF4OQ4QxvbY+/IYe9YvL/hzzfHGOs7u/vXxCJROoppdUQt6MwLxWAq6Zpck3TCtDyIHexoqIiV1VVlW5qarrknTuX4WPHjsVUVb0FhOJewbA+DDYJg5xsaWk5FSbj0CGbfyzWl212CDNAnPxA6Ma6MpuJSqOQD98haOXC1C/0m4SsL4Io0/tRJMLfE0KlYLJHT5mEbChAAQSOLYUI86bPYzQCweOo/qPU6VIGkf/IHq6iUcQhM+RtHYm3EPe1sNc61pO93ycMBEjDn2zsGo15eYEey0IQXaL2YMRqRBjbea5J8Ncc5BGFmIMY7gVNQNdyQ2KsL32nqtKPjWeSYxCdvwtbZbUQlmF1dWTvheHCA3LElvk+wyv28IrzA/r3YGXYxa8s7MVxTofaE7vhJfIFC5dhfBD7B43Akthr1NU31X257fGzMs0x3NjFoxPqlfJAFioHJ5x9km1v+FDI2g8PE+kgo5STDzAa4GfVcOIlzkhGKHohJ7RZflttj+NdmR9w9XKlIRTCovPC5y/U5/P5B4WcF65alXjp3XuJSVPPpZNeo8iUFXDHE/3zW6qH4AU6I/pe+FG/8QTSoPzVN0FR40oshLd4RMJU3iKUBR37YS8S8tqGE7thGt1G5XnkqlWjasof51qTv8XXHJciKpZqz8WHV/g2IaJw3Njtlt3WsF/gAA8NSZ1iqGmym/2vNFWwaC7abvrJqeDUSmhxVuM3DEw8ZhAyQXAkOv/hILpDI/xioGF4U1clnh12HUUIpfhO/UmBh0GqEsM3x0LYMgut8ORbYRPQ4VDmIsxbE+4fvk1BKEiwRlGP0AjV7HxXortQWMApOHFZUs6mJBRPtsUvUH1r7CNBmA2I5THauTzHZOrt2TCKNrCURmgbzrU1DuALgIRrafKb6ewBaBBPWExO1l6tccK4me1IufYXl2E0iFtoT7X+IFWpL0AGDagR/udMW8qXBfkMy8qxvoFGbla2UsLjoqCE0naSWubJxVUN/Ye2EMgkrrfrM1DuDPiWm2EY8+HTAJl9LQTReYyxKHxUyHawWWB4EuAE0EYhmzdWr14dmBI4hqFM+AYYi5TrkVdu2bJlv4MBnV3V2eibm5vfhLPak+AJelV2A5302NjYPtkoKjseF7OU2pVrKTDTuS1B2WoW2Xumo26kmN4XwQuNTGKwWNfgCq+z3GKT8bW142eE0CzCZS/w+Zkx42swkylhFkLoX4d+nPgn9ks6DHcPN8qPocJS/57uTB47JKzNEmz85Wjs0mh+gzFmROTxbPMFZZ4YpqTDVGGTHKszxkeH2pN7vWtKGLoWmOjO3DoxPtkKxQ6aGaTMzEQi0aw6NZYZ6HQX6SUdtix2Cqr+RUyL6KWcTe1Kt5gmXSMijUqUkzfelThw6LbwKIOpnAVZF7HoW9nO+nOlvrhv9oMU4l36RkbonOGOxCsyfwfntG9Xbjms6VZCS6TNljI4p8o8eH7LQicRTvXmVprwMtfM1fae3hIblW2H4WU5XPuz84toRFuPQV5hylhB4bcTQhNhRkvSYYODigcPL1NzrcrXg4rlMBtlOdzQPbi4wNV13rIqzOjV0rlp6cnahvc/+yG5WEo31GG7SD9n3Eeo0lDKyGzyMf0VmWqQXZ/Da57nkVPj+oZyc0E8UYAHPMLhcJuosJotOIsmpBZve4MGLJtmsk9z2xsOeOVdDuPtZrFLS6EM6/fY+ob4odcetZMAQQ6EmGlbTLnbW/cGCnuIOBlEgTujjsSgYDkOw6HP10udj3tPOISRcmBdbw4CkHlfObJeGaxd4A7cjlW2w+Iy3yvo6hMVrnvirusePLtI9hlLChZrhrOTWpS3FDYSUeknxrbkCZc+dBa/CJcLF8IvF7zych/29MNGW7KfLPj58KJJq7BeZvpwbo3l2he8JtNxrZ8ZNx4P2zlgsbDFVYmXvaVJ3a7c3XDDVPTaRB5HxiMV0d9rkyZbWipng3zCvmmSlacd2S3TvHjWS4C+xs2Jq8ozJRtmfmIV5axQMgDAbKXwhE/SnTHKLLpopsqMc7woKGP7gcOyCWp8C886ZzoY6iV6Mms5ZTO+0YTrQJWUszvITmqkAmrw2lMyrRSOL9voyNQ34cqvrGO6UHucnydB1USogsTAdBMiw+Fbbk1+jkeiEkuxd4+fGimrAg4rxe21LDBDPELZQXtbq+0degjy3rJOOWY41jWrMYXmRrbVv24Xi5V15j68YL1mq1+QAfQNfUTztsN4l90yknwZUseS2dIX5FO4Wa6MoW/ivt0JzUIDq4YCo64KWfC+bIhrVt/a4DoM9TksnIrtTN+paBTvM/8LjX+WbUv+LagkC3VYeLnsBWN+5qK17poqDGGsCGScZetp5F08Yy4iVioo+1XxWFNRos3EtBaE5RF+LTcF00bIn9MKLxzLbb/hrJtbvFdyhouru7m4/+LP3YAa1cg8ptTW5v/1tH1o5pxhuTWu967PwPUZuD4Dsz0DgdsaHMdXwM+AGuEUvAG2qjr8CdBsDyzbgzHy0M9eunRpsLW1dTAowgl5n8MnTpyohN8l3QFO2lWwEPwyIEwQpM/kNFwzfBw2ns/hMMGzZ89GJyYmqqampqJwGYLBoRJmJgIfDfoaDERhQDj0gZsOaMBHAP8KgGTLhB9lFeC2pQBPLg92JoE+Ab+hGgPxq7rw+w91ypHBpTlkcgAAAABJRU5ErkJggg==") no-repeat;background-size:100% auto}.am-loading.page .am-loading-text{padding:6px 0 0;font-size:14px;color:#333}.am-loading.am-loading-refresh .am-loading-text{padding:8px 0 0}.am-loading.am-loading-nomore{padding-top:30px}.am-loading.am-loading-nomore .am-loading-text{color:#ccc;font-size:13px;position:relative;padding:0 12px}.am-loading.am-loading-nomore .am-loading-text:after,.am-loading.am-loading-nomore .am-loading-text:before{content:" ";position:absolute;top:50%;width:40px;height:1px;background:-webkit-linear-gradient(-90deg,#eee,#eee 33%,transparent 0) 0 0 no-repeat;background-size:100% 1px}.am-loading.am-loading-nomore .am-loading-text:after{right:0;-webkit-transform:translateX(100%)}.am-loading.am-loading-nomore .am-loading-text:before{left:0;-webkit-transform:translateX(-100%)}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes AULoadingScaleColorBoth{0%{-webkit-transform:scale(0);opacity:0}34.7826087%{-webkit-transform:scale(.12);opacity:.001}to{-webkit-transform:scale(1);opacity:1}}.am-icon.am-icon-clear{display:block;width:.18rem;height:.18rem;overflow:hidden}.am-icon.am-icon-clear:before{content:"";display:block;width:100%;height:100%;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcc3NzczMzM3NzczMzMzMzM/Pz8zMzM3NzdTU1MzMzMzMzM3Nzc7OzszMzMzMzHe7+jwAAAAPdFJOUwCK3S31wRUglAahpXxKzr/0ojUAAAEWSURBVCjPY2CAAObTQS6qewwYUICF/n8Q+NSMLFj1HwaWIwQn+sNFv0jCBNni/yPA1wSoqNF/ZKAMtd4fRfQLxCFJ/1GBGkiQMx5N9OsEoCjjf3QgABQtwRB1B4quxxD9BXTBf0xgwMABsaGsH0S1lYJ5DQxMYPo72NKPDOxgngKDPZj+xsAgD7KcDcz7zHAeTP8AufAjA9S8Pwz74W6UFwBrAILfDFCfAdXxwn30lUEfyUNQpf8/McAC7COS57/ARf9fYGC4DxfVx6L2E8w2FHO/wlyG4obfUF+guvcP1MeofvsMDR3UcFCAyqKGWQM01FHD1wBHDOGITewxjz2VYE9ROFIf9pSKI1VjzwE4cguOnIWeCwGtgUr+vUa+XgAAAABJRU5ErkJggg==") no-repeat;background-size:.18rem auto;-webkit-background-size:.18rem auto}.am-icon.am-icon-clear.clear-tiny{width:.16rem;height:.16rem}.am-icon.am-icon-clear.clear-tiny:before{width:100%;height:100%;background-size:.16rem auto;-webkit-background-size:.16rem auto}.am-icon.page-network{background:url("https://gw.alipayobjects.com/as/g/antui/antui-static/1.0.1/i/error-network.png");background-size:2.2rem 2.2rem;-webkit-background-size:2.2rem 2.2rem}.part-result .am-icon.page-network{background:url("https://gw.alipayobjects.com/as/g/antui/antui-static/1.0.1/i/error-network-sm.png")}',
          "",
        ]);
    },
    0: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("cHNt");
    },
    "0s/u": function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".title___3lEPN{font-size:.17rem;font-weight:700;color:#fff0c4;text-align:center;width:100%;z-index:3;padding-top:.25rem;padding-bottom:.24rem}.info___pj9kW{padding-top:.15rem;font-size:.14rem;color:#fff0c4;text-align:center;position:absolute;width:100%;z-index:3}.img___2Gzbk{width:1.4rem;height:1.23rem;background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*VoP8Rafwbm8AAAAAAAAAAAAAARQnAQ);background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}",
          "",
        ]),
        (exports.locals = {
          title: "title___3lEPN",
          info: "info___pj9kW",
          img: "img___2Gzbk",
        });
    },
    "1INB": function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("NWtC");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    "1Vtv": function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".wrapper___2PoBq{background:none!important;position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999}.wrapper___2PoBq .mask___1Q-a8{background:rgba(28,0,0,.54);width:.89rem;height:.89rem;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:.07rem}.wrapper___2PoBq .mask___1Q-a8 .icon___NUYqS{width:.55rem;height:.55rem;-webkit-animation:fuRotate___1EwJN 2s linear infinite;animation:fuRotate___1EwJN 2s linear infinite}@-webkit-keyframes fuRotate___1EwJN{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fuRotate___1EwJN{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",
          "",
        ]),
        (exports.locals = {
          wrapper: "wrapper___2PoBq",
          mask: "mask___1Q-a8",
          icon: "icon___NUYqS",
          fuRotate: "fuRotate___1EwJN",
        });
    },
    "2gqI": function (module, exports, __webpack_require__) {
      var i = __webpack_require__("zKBT"),
        r = __webpack_require__("80hv"),
        a = new i(),
        o = {
          blacklist: r.concat(window.__rd_blacklist__ || []),
          needSnapshot: window.__rd_need_snapshot__ || false,
          detect: function (e, t) {
            return (
              (a.model = e || ""),
              (a.brand = t || ""),
              a.detect(o.blacklist, o.needSnapshot),
              (o.useWebGL = a.WebGL),
              (o.acceleration = a.acceleration),
              (o.forceCanvas = a.downgrade),
              window.Tiny &&
                window.Tiny.RENDERER_TYPE &&
                (o.renderType = a.WebGL
                  ? Tiny.RENDERER_TYPE.UNKNOWN
                  : Tiny.RENDERER_TYPE.CANVAS),
              a
            );
          },
          detectAsync: function (e) {
            var t = function () {
              AlipayJSBridge.call("getSystemInfo", function (t) {
                if (!t || !t.model) return e(a);
                o.detect(t.model, t.brand), e(a);
              });
            };
            if (a.model) return e(a);
            window.AlipayJSBridge
              ? t()
              : document.addEventListener("AlipayJSBridgeReady", t);
          },
        };
      o.detect(), (module.exports = o);
    },
    "2r/n": function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("TcMu");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    "2zro": function (module, exports, __webpack_require__) {
      "use strict";
      var i = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString,
        a = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        s = function (e) {
          return "function" === typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === r.call(e);
        },
        l = function (e) {
          if (!e || "[object Object]" !== r.call(e)) return false;
          var t,
            n = i.call(e, "constructor"),
            a =
              e.constructor &&
              e.constructor.prototype &&
              i.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !n && !a) return false;
          for (t in e);
          return "undefined" === typeof t || i.call(e, t);
        },
        c = function (e, t) {
          a && "__proto__" === t.name
            ? a(e, t.name, {
                enumerable: true,
                configurable: true,
                value: t.newValue,
                writable: true,
              })
            : (e[t.name] = t.newValue);
        },
        u = function (e, t) {
          if ("__proto__" === t) {
            if (!i.call(e, t)) return;
            if (o) return o(e, t).value;
          }
          return e[t];
        };
      module.exports = function e() {
        var t,
          n,
          i,
          r,
          a,
          o,
          d = arguments[0],
          m = 1,
          p = arguments.length,
          f = false;
        for (
          "boolean" === typeof d &&
            ((f = d), (d = arguments[1] || {}), (m = 2)),
            (null == d || ("object" !== typeof d && "function" !== typeof d)) &&
              (d = {});
          m < p;
          ++m
        )
          if (((t = arguments[m]), null != t))
            for (n in t)
              (i = u(d, n)),
                (r = u(t, n)),
                d !== r &&
                  (f && r && (l(r) || (a = s(r)))
                    ? (a
                        ? ((a = false), (o = i && s(i) ? i : []))
                        : (o = i && l(i) ? i : {}),
                      c(d, { name: n, newValue: e(f, o, r) }))
                    : "undefined" !== typeof r &&
                      c(d, { name: n, newValue: r }));
        return d;
      };
    },
    "3Koh": function (module, exports, __webpack_require__) {
      (function (globalScope) {
        (function (e, n) {
          n(exports);
        })(0, function (t) {
          "use strict";
          Object.values ||
            (Object.values = function (e) {
              if (e !== Object(e))
                throw new TypeError("Object.values called on a non-object");
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(e[n]);
              return t;
            });
          var n = "0.5.3",
            i = { STROKE: 0, SET_BRUSH: 1, SET_INK: 2, SET_COLOR: 3 },
            r = { SMALL: 0, MIDDLE: 1, MEDIUM: 1, LARGE: 2 },
            a = { width: 90, height: 90 },
            o = { LESS: "less", MEDIUM: "medium", PLENTY: "plenty" },
            s = {
              less:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAD8hJREFUeNrsXGtsZVUV3uec++jTdqadmXZgeAmKqCCgxmiMBp+J0WgMGvUHEVRAY/QPKshTjRjjDxMDgwghMT5+GSI+Eo1EFB+IICovHR7CMFNmaDvTebS3vefec1yr/Zb9ZnE6007bcRjOSVbu7Xndfb699re+tfY+jfI8D+W2+ltcQlACXQJdbiXQJdAl0OVWAl0CXW4l0CXQJdDlVgJdAl1uJdBH6VbhP6Io8p2gx9uwclvkVlR6rixwbiK2TuxlYnvFHhWbKSFcIY+23hDP7pWv54t9Qmy32DfEmmLvFPud2H1y3qicF89dUs4eLBlobF1i54qdIjYuVhPbBpD/JbZfQO6QzxPFpuX7hO4TvEuKWSLQShe3ir1FbEjs/WJXgKvHwN967MM4/06xewXw5/RaAbxVQrs4oOvqoWJPAPRxUMcz6sHw5PPEXin2pNh6sXfhmr8J4I8I2CWnLwLoC+C9VykHg0J0mxLrBa2cC89+WOw3CJ4fAI9fLmBvE7CbJcQL6GgB6PMA7HR48QTAbIhV4c1vFXupWI9YHzxabYPYJnRgS+7VJVYtYS726Ich7/4Mb3652B/FUnjzq8SOQwfo8dfCm7sgB0fQQTkkYS5gJ7h2H85T+mm9mNSKB1ozlgfByT2ggTvE9gB8DXIdkHsT8OIvwrtjgHwdPjn7UdXyErqn6vIHAPiLYovYqcTzNAi+Cdys+vk2sV8DXKWI58gzc4A5BEqJ4MnP4lgLHWne/iXc73MAWFXMDo0F0obM0Vfs9x1rHp3DMxXUv8K7TxPbKDYKKpjE8QSA7YPH18lDe8DpCvKlYr/E/p1il6FjKvgt5fIIHaX3VIA7ZdcUjvfr6HmhS0YfDDOAtg1Dex8AfgzfZ0AX6uEniZ2A4HcKOqMGENWDOzEqNov9Q+wasa0wBe1KsWFHW2YNdLr+1mf1U3lerOY+Yw22yFBfUEBbQnK/ZYAAKwaIpwGwDoCvgHxL7Bdit4idjftMgGIy0M200QSNHAa4jg6qwWx/FUqmSnSUO2sh4OpWgUXoBO2MuuugOHLVsyNWaTLDpl70drE1AHgN1MSbxe4SewSAV7D/MTyw8vOfxN6I47fC6+sAay2+W6dtQmeo9w9gBHTiWIJz9fqTsS/CtQl+O6EREOOzQvsq6KAeSNIe/FZMNGXXaqA+ARjEdh5js1wrGnJT4Ob9aKxSwsegNF4Nz0zRSPWmp2EBUu96PJhZAB3th0dH8PSd6Bzj/RRmXLwORa02QInRoRn2WRnXOsc6YSMF5zbiySfxOUNBPHOjqq2jASCfjvuuXsKCYb4LD1wHj/ZCTfxc7AsAuxvnXgxARvCAG3EfBe0iANbEQ+fkcQG/kQGANj18htiwGdTTJm8N9GnUkRKnX4rfNJrR+9xEur+K2HIivgc4wRhGnl63RdsEGqqthryzMqmB0QH5NohTGuDsMTz4SeRht8MbHsfDpujIHeiQhEA0j8pp+MYUJzICtJv2tej6Cu2z9tZAQ2Po3ECe30Ox4Cocu5rk6Ea0ezPanBEGOWRoc0WBtu8Ax4Zhih/vwt/6eTwaoR5/CTxnGxpvwz/C3xElPQaYAZxRgIwIoDZ+vwrgWnSOXZe5TszdPao4rjHiUwjadnwHzjc+H4B3T+IzEKfP3kfw2b/SQCfozQQP2SRP60fDM6iOQSQg99ND1+AlfeD8Fvb1kSZPiHcHEB/0mnfjnjciS42cl8cUI3K0M3XnGJhV6oRB3C+loFqjkgF3Vuo4PAZvd+ikx0pV76yBZwFUDVxPIai10TBL0yehIMbJM6YBQgN8bxw9AE7fTF6u+09FbVuvf4/YmeDU2bKr1rpxT/a+pvPcOkCbcYBnNBJ2AeA2ATtN98rc86+DU6QkTbuxb8WAzuF9HwdgD6C4tIVUQjdKpA3y+gbduwMg7KbAtBkcGqjxmgz9W+xC1LhrCGzXAui78T0jFcI0Yd6cUucx/eT0exGKYpapZgUjJqKs9rti24nrMxntPUulkIMBnQLUCIWgN4i9RuxnYvcAtFHUQp7BsI9cJ12OBn8G5xjYmVM+U6CdFJ5+HsDohn6/kyggcl5bITA9zwfabx2wjoLhNeBp5mLbzCn2YbQEjMhZGapga7sXXZPxCYv7WwPeh5CUpNDL3xP7IOjCUu5+eOAgJRM9KFB9H0mHJSqdLt02RWCq4BWQhXcA0KehzxOnmc3Del0SU6ekxyc1FRw/mZIpO68DndCDDu6gUdmLfSfgbz3n9bpvsQlL5RD90ABdqH7+KLzyNnDnWfDCPfTwVcq+6giCV0AL56Q2fNrfIK/aAi97EgpmGNfWnRavUm07oqAWEUUkJA1zCrxbiTJ4BE+SLG1RTX0G+0w2psiQm8tWHbSvihqGyrebMTGQkSfFALJFD2eSqkG8aZldQhE9cpGdE5o2Jh3ei+Gr9/oJPq0+YkAEeFpG8pG1eeT0ua/B+78TCqC5o1qWmMrVe1cEaOyvYahZ4lFDIOkFd98L7wtEB4F6vEIg110ykTpNnLvEZhAqZDuUzwypgkHi/E5K4dvEuRl1QtOBF+NY0wXFuCCocjYb8HsqRYcFs7sPJwUv4vGm2BaAtBaAT2Eo3YMGDRGgOTXSGtwGEPvxYOb5Q0QrnGRYzVpl3m8pTkSUDFm6HZMnc4XQqGYaHRQ5zk7CgUve6nR/25eg6FRzz1Sf98PZqmC0bKDtbghMCu5eKgI1sW+SHoI9JHIcGdHD9yBbG3TDuOU8q0YPbe0eh/QapyGd09D3UjUUpPxcJwlO4rFEbbqkJkLsML4/81BFqEUDjYnUlLK6CkXxFOBn5KkZPTQrjhrVl5+DhNqFqF4nEHLnwV7rtqlOERfUuK3c2edkbOYyQC412Aiwurjp9mlHR0aZddhHVIUdbAJiSTMT+dw2hYDUQi/vooftcnxWpyDURgc1nUc9S8WbjM7NC+rNEbU5c4HTTwYYJ09S+zhA5gUzO/ybAzh3huRfnRKk++Aour0OGW3/igDtvJuVggExSelq5O7fJiBTpwAyKItmQTIT0XU1qo8E8vqUhnpC1zFPx6T5K3T/mNRLRNVK4/+cgu16Go3/gZNlOE9LCGcstI7lsOfaAPYQ1MggZWgxeWgfJRN1+kyKpqPcTImNkOA8PSH6qbqMMLiEJXfeGpPkDARicAE2gNJG6d416oTjUbvuJArV2abzF/LqSljGJlhvlx4cJZ6rUfCoOzCt5NlBCQpzqiUfGTmABasqvs8UqAamqbxg9HBwmybQcxcsEwTWmxHc25QoDQPUpyh5qUGBbUL7elEu6CsqOi0LaAKDszHjxE58b7kacYv2BeqkhCjFpN5MKH7bICmQkKxW8gIOLgqYRTXsKcyTNnBsLaqLj6E41gTNWSJ3LfR0QvOSYcWB1qIKateBasSB+DovWNLgy5B5wbnMz20HRijwxpar1IUFpr58Jpq7GZuU5jKtPDBFIAfqgEvwDMEVvFaOox3YbSxC76dgxJo3celwTny4AcOTJ05rbpqqTlzYSYlRuyDoBVdcsmMtV/GrUNKRU5sy4mFre1cB1aiDXIc84D6eKMAk78oDTYCPUuSvUOHHKnvcYCtDjhM3cw2ZaxPduLab5vBy+q3gPD5zNYlQkDxlLrkxpaEz4F9GMWwdaORCmparEk3twfqXywhsC5pLr3UseX5srjZSgZdWSVq1aEhGrqYQFXhNVKB9czfkqzTsO3D/1NVOkoJ5ydxJwRhgT+Azx8y+qZHdVkgK86tiz0ZJ4VFUM69C7X1EcNy3ah7NtRF4qTV+PQ2tYZrwTcLzVy95gNnD2+SNOUk2mwPsJ9mX0PUJqaKNtCDHlwnGMWp2ILU2jb4Tbeuh803SToP+AjpmJhSskl21NWuYedDs6tOYaRmgOcP1bgI1LwhMieNTnyHyEoOchng3KYbglI7Rw4CrQ+ek3XeFA1c6mYyrAkSLH1qt/DsC5bdx3+8g060eEepwQWEDGr2DAs4oeWEgz6wDqBma4F1DgbLlPNoyNttvZdMWJRmDSJVTUjpjroI4iFrNALWpBdDbqN7th0a2yWWbzNC14TeIfQ21em3rOYLjXSutow/m1S3UkYO9k0hrPrw8s8DZcms4WpRopE53d+A6q0PvdJ48AAm2GcPaFnG2CHT91JVWP8W5J4JeRgDqViqIjeFeE/jb2jmCNui+AQ/yqnv0AqXWhHiXZyy6YeMuyYkJvJw0uNFIJxWsKsSPmZscaDlvtZVJtwCkPTj3VOzT7QLU27toZidDO4dAH/r3Gah1/EA7RjAcP2IcfZD6CE+S1ok2bN0FZ41MPZFTH02qBhqNcDnTruGOY8k4inT7WRplu1AsehzcexHAt8kKWwOyF+m4TbHp+T8Mc68Adhz2VNYqe3fbRf6IkhQLnjcBjIy4l2nE6uC2wHIH1UFSAtrW8TWpI1IqgllSM4zftzJuf5hfKpbTrPhEmF92vMdiUdHbCf83oB3gfpTZuukJBMNxN+vSCY9jxaIgfwX7roZ3DlAg5CJUy8UpUx1r6fxeGnGn4FqbSToHUm877qdvqv1BsPvnitajV4FO6q5eUAXI0/AoS6f7APwaRyMRqOCrsLGCWgSvqePKnunzNXR+JzrJptyeAKgmHsaQpGzF96fC/EKccFRRxwLeHbtskTshpSQncfOSNTeZkJO0G6daB0u+MdLQ5u0bwLtWyp2kQH02aOwGSmb+N8GrJeMVmTM8Qt6dgd/aJPsSAsT4teHS9mY4cAGkUc8UvJMTiPVu9pynw8wrh8L8SqXjAfLXxd4n9s0wt9LpOAB/SJCPOo8u8PCEvDWmOnRMHpy7glLiZl4SCog14t4xKq1ynSVGMNyDzrgZks9e2ZhERqhvFusKrr8IZod8MbUSjuINpdcG5uFqAKgBMDYB6BHy+IhoJqPJA66F2/vtbSctOT50k4qwd3EyBFjN/n4c5hZ3bg+L/M88RzXQBLit4DSlsRG14BQVsxHy+Bp5Ohd7UpKCTJt+CUQfOjGmOkoTycntAFl1876lvN37ggDaFaqUUtSzbsTwt0WW5vG2REDXWV8PgC+GbOtBshGoZj5M2WY3TVXtBhfrb+nizh+J/WohnXxMAU1bA4X22f+QIMD3wzO7oDI0mF0Jffsgpd27w4Gv4HEFcYYyP3uP/W1hbtnx78PcKq3Jw31H/agOhocZQBVsXdDyDmhhrVs8RJrZskAr4g+CaxuUFFWgKizdXvb/izoWgbbMsTPMLyGoIoEZA8Wcg9MfomrhbFao8QDZ6mxVcKX+p8jzgD5Gt4gqhbaGJEBnZ+74soE95D8YPIb/IQy/zpaH+XcIi46vylb+b9IjtJVAl0CXQJdbCXQJdAl0CUEJdAl0uZVAl0CXQJdbCXQJdLmVQJdAv8i3/wowAB67shmMoEzNAAAAAElFTkSuQmCC",
              medium:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAStElEQVR4Xu3cB4yuXVUF4AVSpAhIEyxIC6A0RUHUSFFBakCw0UEBkSKi2BCUjpEmoSUUqdIkECnSe2gqNUhHiqBiAQvYqHnMWTfnfvebmTv/f+f97/y8J5nMnfne95R19ll77b3P3DNkbYsgcIZFRlkHyQr0QkawAr0CvRACCw2zWvQK9EIILDTMatEr0AshsNAwq0WvQC+EwELDrBa9Ar0QAgsNs1r0CvRCCCw0zG4WfZEkV0jyiSTvW2g+p9thdgL6ckmekOTKSf43yS8lee7pFoUFFrYT0H+S5LbJkTTq15J8Nck3JfHvVyX5qSSs/t/H1wLTPbxD7AT0Xyf5gWlZwP2PJOdK8skkD03yX0n+aID8miSPWSlmZ0PYCej7J/ndJGeaXn1rkksleUqSf0vygA2L/9ckr03ysCR/dXht72BmvhPQL0xy7SRnn4Z9XpIPJXlxkhck+c4Ni++P/53kF1dOP3rDdgIaH2tfHt9Z9p8l+c0k90pyxw1rRiNnS3LG8fynktwlyUsOxj4OX6/bgAZyf886v5jkm5P8dhL08MQk37Kx1L7T9/5pKJafS/LOQSmHD50TOONtQH9lAM2afQH5L5LcL8ndk9x82oidpvK3Sa6U5LsmJ/rrSR6R5DZJXpbkHd9IamUT6HMPEL4vyZmHnPt8kp9NcoEkP5jkN8YGUCGenx0m4L+U5CZJ3jtUiuduMDbp/5JcdryPfp56Ao3mpO5qE+ifT/KnA2ATJ+tuluSa4+sh4+dnJ0ErePk+Sc4xrPwLg8PRDaBFltTJhZN829gEG6h9IMldk3w0CU6fG32++buTGsi9JrcJNMv788mpoYDzDU7+nyT09RuSXH2A+7EkZ0ny4KFSvKsBkCMEstPBygH82cH5NsZG/U6Sl493nI5LJsHvuP1JY3P+YNDWoZaMm0ALud84eJk1A+68IwIE6CuS/EQSFPDd4zucWLDn6W8K5FeSvGtY6y2SPD/JLyR5YBJ63GZdNEm5XB/43O9shk34uyQCIYETPhep+lzupd/Rks3Zdir2MrJFP9/G0e8eIFYPA/HxQ1PT1ZzjPw8gv39wdyfNcnGv54D98EEBrBTNaIB8XZKLD6DR0o+Pz/wOeKzcd0AXSBvc1t8J/+cmoNI+PPyHSJZPsIZuEEpbPG2wTXVY3DWS4GGaGS1ca1h2HR+wbjjo4YIbiwX258axZ7H6uHOSfxyBDovG3cL3lw7gf3TkT3SFm4ECIGPT5ndL8qYJPJtWq/cO2gEeoIGs+TcZai38jPXYPIGXZ50gp8a79xy5m0uP04u6PHfC/MQ2oB1/HEzOscxnjsnMeALwDiMc57g2G10NIPLwlsOa/2WiBUBxjrj6b4aa8b0WzxIBI4sIuEcNSgNMW3MxZKS++Q+bg/c5aBSGUtAfP+Gk3moCt6cB0Izhh8ZpZECAf9D42rK8/f9qG9B4miXgxXsnoX8b8RmBJbHQqw3LBNi3bzxToD0vl339IfX8DGT920SWO4Nn0RoQrjNAAzIgbYrT4LM6zv8cG6afUs73DFBZsvZjSail5yR5xpizPjVxQWVoN8lnKEyqQbO+Ux3h7hSCW4gvR8ixNZgmN+044V6T+dUkAhxfdHZb1QWqefQ4hnhVK197pqDpv2PM4JuD8T0LbFbv3+VevoJBeM7vbH59gwRXgQLizyT5jvGcuWus/EZjHq/fwfJh4HRY9ykGfK+aoaMrSGF95JVF3n5Y5VVGmG3CpBtQUQUursX88rB0R5MlW6jjDDCWjCdxPPBZpAYwze89+8ODEv5yWF+f6Xv6qROcN68gO6EXSiJG8Bza6wltuhfwvjhmaeA3D4WkD3M09/bz+5NBHfc/dwMayHabpTVfUeegMEAFALbWwQniQBPTvne8jyb+cJJyPzkcoQyhhdepCZRY1T1GgGNurNLxtlAgziDb/CoIErKG0GeqcgCkydPgb0aAz0nEy4x5vn9YbZ+jUjjfNicGDqybI1f02FfbDWi6VTmLpQpWaGgqgHPiCFEBB8LRaI6xRVxiOC4bAPh/GO+hBBxZx2QT9eHoS7+y0M35tLJjXJxpU9CALxZebjaOVn5GM5rNAHAdLWr51sH1Pq8jtaFO0uwvcLuAi2Mt6HyW9II17qvtBrSjxvP3GYsWqDxrKBEDkWgm6xmLVlt03DUUw2kChxevrDN5Fu5nDU9LMl11j2SVE6RvlkUVCXrK1w10qmTQg+bnboafWSMrxuNadf6mXwB6jUKqgGPWl9PlhKif7otC9qqC46o5wW9yAGchojxWLESmgz2L83qc61y8g3JuN1kZgGYqEOSwcLSzbU7G/K1BYZtqheUVzPJ7aQM4nU8dZgE0HYpIkYIxaH2vm8QoWPMHx+e/NyiGZTtV0gTHpbX3coYskdVuO9IGt3gemVYWkpsw/e07PsOJHCUgWCGLorvxcRuepl01G/jYERzNY+qP83X0LQx4BcM4TxsglVoaCXqmdFCeRWlOFAnKSZdWOH2BzduHuvrM+KxUpXx36yEV9WHtNoLe3rPtBbTJzZapQ04PZ59zOCCVl+uOhbIIFuAzPPae4cnVHxvZsbJGb51gHWiVhA2SG1F11wDoqALNKaJSAGNcTrCJLt8BU/Aa5leNzCqnUWHn4DSgCI6fVNUHJdTAxrs+FzF61gbDpjJyV7D3AtrL8hAS/2cdIHN4dlcQAli/Z8Um5meLs1ig0Z0zwADDp3UuDVCMY/KttOvHZuBk2cM2dGWhPlfTpOub/UM9cudOGgdbUL27LThqn/McOg9z7KmZ8ylNcHmuobtYYs92PEDrRPr0yQNgWTxRGhA5MM5FuvSnx2hAALTW3UYZKAZteKeLoABY/flHQNLMnXdrcaruojwgsuoGDfR1w23vsTCb7csmVf/2M0qk85mt1AZxzHMg5dSRpXXs/dm8bKJGeZGiDKo59h0BP16g24FghOXhL4MATu5ZZEhT4z4LBbQjbqJ1ULXW9gUYjpYjBaDFdkH6rUTzPI6vo3Iq9CUhReuL7kgw76CR0lITTbW+JpL83LmwXJtceQd0uZFZt5OgAi/GwZE2miU5BTiAZmRO6WY28Qjw+wHaxHn4Rw6HocrNkbnHweo4Krns2aIMVBrogoHJynwX+BSs6mrPyWFoNgyw6AOIaKkURWbZZM4aWLi1EWbH2Fx4HaK+a7HVz05A19Co1EnkxM0BH9eaPcsfqCgxMBUkxgKLrW0/QBcoR0azMFbE0d10WImJoZVGVjai4ACNdeBVtAAwFsVzq6xfbCzI72fV0BRAJRYwAYF3bVh9QgOaFgNsFh7nlGUgmxMxdxvRiLQUY35OEcsVAFV1bGp2/d93FCKkg6kXztMJNtetcm+/QHe36kB8F5i07CQQEN6KxjgpFvfKcZybj9AHawRcORCNyHm707dpmZ4tl3sX19fqWaXNBrrTNKuEZvj6bGucXUOVSPPWfI05tZRGcqKk5sarjKzL6XP9Qu4e9QGa1qfABHrHtFMKdK3b4AYFZu969NhbiMwblTDz5mxRTSS1wsKaGzz4rJEccFGHxYv6Kt/0VQCraGaHWq5FD04BMK83Smvl5UaV3msx2fNOSrN7TqK19HNU5VRQQdIHzTySviTgMZLv1ABtkeqCjrykjONJEVRhCM3d4WgEWQfnO4tvblk/pRiUUToAqBOib1TjeeqHdaOfWrYx63CBdsWhUFqp0X8dKSrROLxuckEybosExvZ58xxknZy20l3zMriZv6J8ZgnK6I5JOp1aoE3a4jUAWjyHAhzJI7xnshbB4oGPCjgSANVZWYhQ+C3Dcj1jM7zPCXmvdUSgtkJjTJShsSTjl2aMuXmS+m5po5vsNLD4+hw+o8GR30kzeBfINsH8BGU4WpZyLoz8/UgHH0UfJwJoE5lzDABFH8Jb2pfjmKsic3qzkyGPJOYFPkBokcDneLzXECrLWnD1eaUfpzXz+1yqKnXMtDYD0XrjXCCwSU6YZBYZ6oT0eoQTCOw/3qKhjVE8joxxIoDWGYmmsYpKIOBxjHOuAWAmMvNhL+DQpO5YVzVwMCxXH3VyTQzNQPeijvGbQOoC67Srzzk6rRs298tPUB1OqCylJBnrxdWydiLi+Q5KaeYoyx3qY7NgfcL/YxQ5a5ktR7Hi30TKkXWYNqM5FGnIV0/FBdbQaK0WWJXiNEgu4ehGc91gIHZTWVyjUwWGufX+CBmKW5vgao3SXKggdMBHcKAcobhhLgaIKVzDoKGbkzEOmSc9cdSFnxNl0fNCFAxqGW8bC2atrITFCeUdyybWLbQa2eesHh3NNT8c+enBi+cZm4TnWZvj3Yq3ecx1SGDrp7/r53MFXT/m042XMHN3RaM6tLlYwdk3f/O4Ie04yYbhTgmaufwMykEArX/HjyU4akQ8OQRAFldd3ShtjtCqBDYBqzIAKCtvGM769d+LNyzfZsmfNOdd/p0d4HwPpMUC1k33C+35C4EIytAEVQxCAo1yERzJv8geSj9QXIIc1SgWLW3rLvmRdlBAG4BVAhe3OfKOmYmq78nlNhBopaWTmnMSVRee1cqtM+875n4GuH8LIiS5OFEc2xw1APB+64Y9MZJTvZCDVpSqKlXrUFERZ0vHs1yb8WuDenqHnNoBdO+8HKWlDxJowJBrFqLhYlxm0q1szEe7QLM271RTWyAgW57y3Fydce/En3ooS+l7DjJq/d7Rx3ylgB9oMx6jYAhqkY0SfY7LVYA+Mi50igQZj8o6vSyO6FULtIM6bdhReY+DBtpRVuClOTlJ4M0Fz4bl1bGOI2BZZBNUjb44wI8PPuYD0EjD5Vpu06ZNw1IS7nO38FC/IMuI1irTUIbxUAGwNXPi3I0hmmQ0KvgtAOvXRrJuQKMQp4nWVis96t74QQM901T/JnG+jdTrBo3oAIMeSCtOSsOTbhn1ppLf1WE6Efpl0c3q1do9N18Hs4ksrRWYJrQabs9OsPPmgEW3Ahj/VpSVVHM7ttcwGA6dLfxmCG7fzpeJ/r+vJYE2HpCB2+r0XHZyPF1fMPG5oNqUp/fLmSyTg8X9ToDAiMKZr3IBfC4OVNHoZ5aXDbc5OP7DBjTS691B3Ez29foCHmfdHKRqE5/jJDhlnH2LIEcMbWmgDVxF4t+sEZex0BsPS55zIPPdijpEXEuezdcaSD4LbNjtPc1maLPEa/7ZM3i9RQdZSP0Aaa7843w0YbxN58jSnRJBl80gCykecu+odloA3QnUuue7zC1ftVAq/4ETOU8V6qoNwUXVSsNzltiraE6F62esrOUtlNR7fC3i9qobiYmfHX05FtUTv+MX9KlQjKP5G/1IL1A5KA0lCaJshHfM+Zi/TjgtgZ4Bn3efhVASAgMLcZwtthccezWLVtUaRs/VelbI2kR2dYRzRDinWRvOUxr4uM/bLPelcS+aQCeSSLhakkvjADVqSrXlmBxHF3YyAG0uJFFDZRxOaSgCyGVrLIjFiNA4GtYLxIbdToeNqUV7ngJpRNcrvKWcuThbDT1fV8O9Qm4bIlElypOlE9SgMGOxdjVUzo+G9lcM818lnDTUsUljfsbZcwUaIHUskku9ztCaXa+ESc3Olxw371cLiZvsak6j19IaINk89UdOlXU3XWBerrrhcJZbdcEJuhGAfjjBY3h5XuDJYtGboFcKsm4hbxP1m8XW+Q9G9QEsMlBQwdLaSiV+xu3lfXzaQnG1vFtXIkwbo+jM0bmFNSeOqBGA23h97wqyQU9WoAuQ9GutlaW3uLBZ9Z6TRpwjDmVlvjhFSoCF0umcqr9QoDhasZ+vJtg8lzsFNADf9qcjnR/A6eo9/zD1ZAe6CwIQnsWVghlOh+OyUAHNfPNp/ssC729exSUvcX/lWouuzaNQEyiEs3XX7pjc8ijEqpKzdr5lx/scJ5sz3MbXO3G43/fyjH87uo36UAepBTTWTP9q3QwKRm7CNeHmulmtzXFi0AF+dmIEQeSh9MHcUMzThwQ8rpukh4E6dtoAt1xpXXKLtu1fduFevCkBhH+bIybJSEU09KLB09QLgHt3DqgCDqfEeziadbePXlfeqpP3spTDQh2b68CpvXDo2LrxRA/jXrIQPcz5BkCrYvePfqoUnIQ7jc5Zsxw0S/flmVZpnBC63B8+HbcVHwbVsZeB7PY5awdqs2eOei/By2s0CmTBPzJyL7JuuF+lhwoBsIAF4LJ6p/r/izqsFr0b0FSCaoeEElABL11LHdDO6EDSXnPlAbAUic9xurxI7xnuenFxP9ZwegR62/pnquk1Ns/1TyM2qWg/GB7Xs98oQB8XGAf50Ar0QaI79b0CvQK9EAILDbNa9Ar0QggsNMxq0SvQCyGw0DCrRa9AL4TAQsOsFr0CvRACCw2zWvQK9EIILDTMatEr0AshsNAwq0UvBPTXAZHr9JcwBACAAAAAAElFTkSuQmCC",
              plenty:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAOOSURBVHja7JxfhFRRHMfPNAzLsAzDEvu0REQZNjHEUC89xRI9TeplX3uKEkv0usxTbCKWlrVPPSR6SL1sdm12FWvZlNKIsllapUy/0/yuPffOnZlz555zu+fe75eP/Wt29nPPnPs7/6bQ6XQEYj9HoACiIRqBaIiGaASiIRqBaIiGaASiIRqBaIjOeeR8tIqSElEjJmDJgNcBomfl7yvsEgvERWIcKs2ILhI7AdEqP4lF4hyUxhNdHyA5yA63/jHojS66FUG0x1dijqhAs77ojRFEe+wT88RRiB4susR9cCcm8jHuEccgOlz0lAHJQR4RDYj2i65ZEK2WiLfz0K3oiK5bFK3ylJjJ6oAo6LUQ3KlUKBRO0IfNhJ/XB+KVwjbRdl20z2uIaPmy/piS5yuFfyde89dviQP+/JNyMQ74Z06JFlyilR1uUN4F+UVs8ffafHG2+RX0Lg2i1/immPVssfCXxBPlohgX3W/AMp/QDTFtyNHtCtGMO6WgOzK8kFPRKl94SqFqU7S8mj8g2zfCLdsQLfMQkn1sRmndUUTXIbeHFzwXZFR03Fm8rDJnQ/QMxIb22cdNiy6iVfftQoomRaOv7s+sadGCyxvI7R3cVEyLrvADQ7Cfu6ZFy1yF2NAb45Rp0RjE9F+mMy5aDkPfQG4PddOiBdeQ+5DrYyNY7pkQLXMJcgeXe6ZEy1yH3J5yb8KGaMHlDSQf8sCWaJlFCPaVe9Uw0SZ2/F8hlgUieAq1qTeCGS1FftmgVfOeGBtdh5oWRP9j3LZomTsQLRo2+uhgbhHXePNKXtOzidPW8bf7xHnh+P65GBlLSrTMc+K0yd0/DqVtq+oYdnXzNus3mcTNcND8yF4OJO/aGrDoZok4JbobCrOcJZsDlqiDm5vCzIGkNLbmchIDliiRp7WeZa1+tjmpFDfNjCz8tmzNR5uMXGWXWxp+O7zCUnJBtLpMtuKY5D0Rcmg17aK9TIvutisXVlWmtYqMlIr2cpZ4nFLJq6LPng4XRatdykJKSsLPxOVhT9hV0V7kMtEN8f/2lrSE5hEL10WrqfE/nkRp+F503+JIO1kSrabBCw6rFsq2kd5dR+csuOtzDVW+iZ7hiuCk0D9R9UccnkdfjjMvo3tyNmuR8ie5ZYYdi5CnZ78R66b+4FDRiJ3gnRwhGqIRiIZoiIYCiIZoBKIhGqIRiIZoBKIhGqIRiM5Q/gowAMsRJLrK/gy+AAAAAElFTkSuQmCC",
            },
            l = { STOPPED: 0, PLAYING: 1, PAUSING: 2 },
            c = function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            },
            u = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || false),
                    (i.configurable = true),
                    "value" in i && (i.writable = true),
                    Object.defineProperty(e, i.key, i);
                }
              }
              return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t;
              };
            })(),
            d = function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            },
            m = function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" !== typeof t && "function" !== typeof t)
                ? e
                : t;
            },
            p = (function () {
              function e(e, t) {
                var n = [],
                  i = true,
                  r = false,
                  a = undefined;
                try {
                  for (
                    var o, s = e[Symbol.iterator]();
                    !(i = (o = s.next()).done);
                    i = true
                  )
                    if ((n.push(o.value), t && n.length === t)) break;
                } catch (e) {
                  (r = true), (a = e);
                } finally {
                  try {
                    !i && s["return"] && s["return"]();
                  } finally {
                    if (r) throw a;
                  }
                }
                return n;
              }
              return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              };
            })(),
            f = function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
              return Array.from(e);
            };
          function h(e) {
            var t = e.split("|"),
              n = t.shift(),
              i = n.split(","),
              r = p(i, 5),
              a = r[0],
              o = r[1],
              s = r[2],
              l = r[3],
              c = r[4],
              u = [];
            return (
              t.forEach(function (e) {
                var t = e.split(";"),
                  n = t.shift(),
                  i = undefined;
                0 === +n
                  ? ((i = []),
                    t.forEach(function (e) {
                      var t = e.split(","),
                        n = p(t, 4),
                        r = n[0],
                        a = n[1],
                        o = n[2],
                        s = n[3];
                      i.push({ X: +r, Y: +a, T: +o, P: +s });
                    }))
                  : (i = 2 === +n ? t.shift() : +t.shift()),
                  u.push({ O: +n, D: i });
              }),
              { v: a, dpi: +o, pv: +s, w: +l, h: +c, sh: u }
            );
          }
          function g(e) {
            var t = e.v,
              n = e.dpi,
              i = e.pv,
              r = e.w,
              a = e.h,
              o = e.sh,
              s = [t + "," + n + "," + i + "," + r + "," + a];
            return (
              o.forEach(function (e) {
                var t = e.O,
                  n = e.D,
                  i = ["" + t];
                Tiny.isArray(n)
                  ? n.forEach(function (e) {
                      var t = e.X,
                        n = e.Y,
                        r = e.T;
                      i.push(
                        t.toFixed(2) + "," + n.toFixed(2) + "," + r + ",1"
                      );
                    })
                  : i.push(n),
                  s.push(i.join(";"));
              }),
              s.join("|")
            );
          }
          var b = (function () {
            function e(t, n) {
              c(this, e);
              var i = n.type,
                r = n.maxSize,
                a = n.minSize,
                s = n.ink,
                l = undefined === s ? o.PLENTY : s,
                u = n.image;
              (this.name = t),
                (this.type = i),
                (this.ink = l),
                (this.maxSize = r || 0),
                (this.minSize = a || 0),
                (this.image = u);
            }
            return (
              u(e, [
                {
                  key: "clone",
                  value: function () {
                    return new e(this.name, {
                      type: this.type,
                      ink: this.ink,
                      maxSize: this.maxSize,
                      minSize: this.minSize,
                      image: this.image,
                    });
                  },
                },
              ]),
              e
            );
          })();
          b.add = function (e, t) {
            var n =
                arguments.length > 2 && undefined !== arguments[2]
                  ? arguments[2]
                  : 3,
              i = e.toUpperCase(),
              a = Object.values(r).pop() + 1;
            (r[i] = a), (v[a] = new b(e, { type: a, maxSize: t, minSize: n }));
          };
          var v = {
            getBrush: function (e, t) {
              return (
                (this[e].ink = t),
                (this[e].image = Tiny.Texture.fromImage(s[t])),
                this[e].clone()
              );
            },
          };
          (v[r.SMALL] = new b("small", {
            type: r.SMALL,
            maxSize: 15,
            minSize: 3,
          })),
            (v[r.MIDDLE] = new b("middle", {
              type: r.MIDDLE,
              maxSize: 40,
              minSize: 3,
            })),
            (v[r.MEDIUM] = new b("medium", {
              type: r.MEDIUM,
              maxSize: 40,
              minSize: 3,
            })),
            (v[r.LARGE] = new b("large", {
              type: r.LARGE,
              maxSize: 60,
              minSize: 3,
            }));
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof globalScope ||
              ("undefined" !== typeof self && self);
          function A(e) {
            return e &&
              e.__esModule &&
              Object.prototype.hasOwnProperty.call(e, "default")
              ? e["default"]
              : e;
          }
          function _(e, t) {
            return (t = { exports: {} }), e(t, t.exports), t.exports;
          }
          var y = _(function (e, t) {
            (function (e, n) {
              n(t);
            })(0, function (e) {
              var t = function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                },
                n = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      (i.enumerable = i.enumerable || false),
                        (i.configurable = true),
                        "value" in i && (i.writable = true),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                  };
                })(),
                i = new Tiny.Rectangle(),
                r = 4,
                a = (function () {
                  function e(n) {
                    t(this, e), (this.renderer = n), (n.extract = this);
                  }
                  return (
                    n(e, [
                      {
                        key: "image",
                        value: function (e) {
                          var t = new Image();
                          return (t.src = this.base64(e)), t;
                        },
                      },
                      {
                        key: "base64",
                        value: function (e) {
                          return this.canvas(e).toDataURL();
                        },
                      },
                      {
                        key: "canvas",
                        value: function (e, t, n) {
                          if (!t && !n) return this._canvas(e);
                          var i = this.renderer,
                            r = i.resolution,
                            a = i.generateTexture(e, undefined, r, t),
                            o = this._canvas(a);
                          if (n) {
                            for (
                              var s = t || a.frame,
                                l = o
                                  .getContext("2d")
                                  .getImageData(
                                    0,
                                    0,
                                    s.width * r,
                                    s.height * r
                                  ),
                                c = new Tiny.CanvasRenderTarget(
                                  s.width * r,
                                  s.height * r,
                                  1
                                ),
                                u = 0,
                                d = l.data.length / 4;
                              u < d;
                              u++
                            )
                              0 === l.data[4 * u + 3] &&
                                ((l.data[4 * u] = (16711680 & n) >> 16),
                                (l.data[4 * u + 1] = (65280 & n) >> 8),
                                (l.data[4 * u + 2] = 255 & n),
                                (l.data[4 * u + 3] = 255));
                            c.context.putImageData(l, 0, 0), (o = c.canvas);
                          }
                          return o;
                        },
                      },
                      {
                        key: "_canvas",
                        value: function (e) {
                          var t = this.renderer,
                            n = undefined,
                            a = undefined,
                            o = undefined,
                            s = false,
                            l = undefined,
                            c = false;
                          e &&
                            (e instanceof Tiny.RenderTexture
                              ? (l = e)
                              : ((l = this.renderer.generateTexture(e)),
                                (c = true))),
                            l
                              ? ((n =
                                  l.baseTexture._glRenderTargets[
                                    this.renderer.CONTEXT_UID
                                  ]),
                                (a = n.resolution),
                                (o = l.frame),
                                (s = false))
                              : ((n = this.renderer.rootRenderTarget),
                                (a = n.resolution),
                                (s = true),
                                (o = i),
                                (o.width = n.size.width),
                                (o.height = n.size.height));
                          var u = Math.floor(o.width * a + 1e-4),
                            d = Math.floor(o.height * a + 1e-4),
                            m = new Tiny.CanvasRenderTarget(u, d, 1);
                          if (n) {
                            t.bindRenderTarget(n);
                            var p = new Uint8Array(r * u * d),
                              f = t.gl;
                            f.readPixels(
                              o.x * a,
                              o.y * a,
                              u,
                              d,
                              f.RGBA,
                              f.UNSIGNED_BYTE,
                              p
                            );
                            var h = m.context.getImageData(0, 0, u, d);
                            h.data.set(p),
                              m.context.putImageData(h, 0, 0),
                              s &&
                                (m.context.scale(1, -1),
                                m.context.drawImage(m.canvas, 0, -d));
                          }
                          return c && l.destroy(true), m.canvas;
                        },
                      },
                      {
                        key: "pixels",
                        value: function (e) {
                          var t = this.renderer,
                            n = undefined,
                            a = undefined,
                            o = undefined,
                            s = undefined,
                            l = false;
                          e &&
                            (e instanceof Tiny.RenderTexture
                              ? (s = e)
                              : ((s = this.renderer.generateTexture(e)),
                                (l = true))),
                            s
                              ? ((n =
                                  s.baseTexture._glRenderTargets[
                                    this.renderer.CONTEXT_UID
                                  ]),
                                (a = n.resolution),
                                (o = s.frame))
                              : ((n = this.renderer.rootRenderTarget),
                                (a = n.resolution),
                                (o = i),
                                (o.width = n.size.width),
                                (o.height = n.size.height));
                          var c = o.width * a,
                            u = o.height * a,
                            d = new Uint8Array(r * c * u);
                          if (n) {
                            t.bindRenderTarget(n);
                            var m = t.gl;
                            m.readPixels(
                              o.x * a,
                              o.y * a,
                              c,
                              u,
                              m.RGBA,
                              m.UNSIGNED_BYTE,
                              d
                            );
                          }
                          return l && s.destroy(true), d;
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          (this.renderer.extract = null),
                            (this.renderer = null);
                        },
                      },
                    ]),
                    e
                  );
                })();
              Tiny.WebGLRenderer.registerPlugin("extract", a);
              var o = new Tiny.Rectangle(),
                s = (function () {
                  function e(n) {
                    t(this, e), (this.renderer = n), (n.extract = this);
                  }
                  return (
                    n(e, [
                      {
                        key: "image",
                        value: function (e) {
                          var t = new Image();
                          return (t.src = this.base64(e)), t;
                        },
                      },
                      {
                        key: "base64",
                        value: function (e) {
                          return this.canvas(e).toDataURL();
                        },
                      },
                      {
                        key: "canvas",
                        value: function (e, t, n) {
                          if (!t && !n) return this._canvas(e);
                          var i = this.renderer,
                            r = i.resolution,
                            a = i.width,
                            o = i.height,
                            s = new Tiny.Rectangle(0, 0, a / r, o / r),
                            l = i.generateTexture(e, undefined, r, s),
                            c = this._canvas(l),
                            u = t || l.frame,
                            d = c
                              .getContext("2d")
                              .getImageData(
                                u.x * r,
                                u.y * r,
                                u.width * r,
                                u.height * r
                              ),
                            m = new Tiny.CanvasRenderTarget(
                              u.width * r,
                              u.height * r,
                              1
                            );
                          if (n)
                            for (var p = 0, f = d.data.length / 4; p < f; p++)
                              0 === d.data[4 * p + 3] &&
                                ((d.data[4 * p] = (16711680 & n) >> 16),
                                (d.data[4 * p + 1] = (65280 & n) >> 8),
                                (d.data[4 * p + 2] = 255 & n),
                                (d.data[4 * p + 3] = 255));
                          return (
                            m.context.putImageData(d, 0, 0), (c = m.canvas), c
                          );
                        },
                      },
                      {
                        key: "_canvas",
                        value: function (e) {
                          var t = this.renderer,
                            n = undefined,
                            i = undefined,
                            r = undefined,
                            a = undefined;
                          e &&
                            (a =
                              e instanceof Tiny.RenderTexture
                                ? e
                                : t.generateTexture(e)),
                            a
                              ? ((n =
                                  a.baseTexture._canvasRenderTarget.context),
                                (i =
                                  a.baseTexture._canvasRenderTarget.resolution),
                                (r = a.frame))
                              : ((n = t.rootContext),
                                (i = t.resolution),
                                (r = o),
                                (r.width = this.renderer.width),
                                (r.height = this.renderer.height));
                          var s = Math.floor(r.width * i + 1e-4),
                            l = Math.floor(r.height * i + 1e-4),
                            c = new Tiny.CanvasRenderTarget(s, l, 1),
                            u = n.getImageData(r.x * i, r.y * i, s, l);
                          return c.context.putImageData(u, 0, 0), c.canvas;
                        },
                      },
                      {
                        key: "pixels",
                        value: function (e) {
                          var t = this.renderer,
                            n = undefined,
                            i = undefined,
                            r = undefined,
                            a = undefined;
                          return (
                            e &&
                              (a =
                                e instanceof Tiny.RenderTexture
                                  ? e
                                  : t.generateTexture(e)),
                            a
                              ? ((n =
                                  a.baseTexture._canvasRenderTarget.context),
                                (i =
                                  a.baseTexture._canvasRenderTarget.resolution),
                                (r = a.frame))
                              : ((n = t.rootContext),
                                (r = o),
                                (r.width = t.width),
                                (r.height = t.height)),
                            n.getImageData(0, 0, r.width * i, r.height * i).data
                          );
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          (this.renderer.extract = null),
                            (this.renderer = null);
                        },
                      },
                    ]),
                    e
                  );
                })();
              Tiny.CanvasRenderer.registerPlugin("extract", s),
                (e.webgl = a),
                (e.canvas = s),
                Object.defineProperty(e, "__esModule", { value: true });
            });
          });
          A(y);
          var w = (function () {
              function e(t) {
                c(this, e),
                  (this.container = t),
                  (this.pressureVelocity = 1),
                  (this.brushType = r.MEDIUM),
                  (this.brushInk = o.MEDIUM),
                  (this.brushColor = 0),
                  (this.bufferSize = 4),
                  (this.strokeBuffer = []),
                  (this.prevPosition = null),
                  (this.prevBrushSize = null),
                  (this.prevVelocity = 0),
                  (this.prevDistance = 0),
                  (this.expectedNextPosition = null),
                  (this.accelerate = 0);
              }
              return (
                u(e, [
                  {
                    key: "refreshBrush",
                    value: function (e) {
                      var t = v.getBrush(this.brushType, this.brushInk);
                      e || (e = this.container.resolution),
                        (t.maxSize *= e),
                        (t.minSize *= e),
                        (this.currentBrush = t);
                    },
                  },
                  {
                    key: "getCurrentBrush",
                    value: function () {
                      return this.currentBrush;
                    },
                  },
                  {
                    key: "selectBrush",
                    value: function (e) {
                      (this.brushType = e), this.refreshBrush();
                    },
                  },
                  {
                    key: "setBrushInk",
                    value: function (e) {
                      (this.brushInk = e), this.refreshBrush();
                    },
                  },
                  {
                    key: "setBrushColor",
                    value: function (e) {
                      (this.brushColor = e),
                        this.refreshBrush(),
                        (this.currentBrush.image = Tiny.Texture.fromImage(
                          this._createColoredBrush(e)
                        ));
                    },
                  },
                  {
                    key: "getBrushColor",
                    value: function () {
                      return this.brushColor;
                    },
                  },
                  {
                    key: "_createColoredBrush",
                    value: function (e) {
                      var t = a.width,
                        n = a.height,
                        i = document.createElement("canvas"),
                        r = i.getContext("2d");
                      (i.width = t),
                        (i.height = n),
                        r.drawImage(
                          this.currentBrush.image.baseTexture.source,
                          0,
                          0
                        );
                      for (
                        var o = r.getImageData(0, 0, t, n),
                          s = 0,
                          l = o.data.length / 4;
                        s < l;
                        s++
                      )
                        (o.data[4 * s] = (16711680 & e) >> 16),
                          (o.data[4 * s + 1] = (65280 & e) >> 8),
                          (o.data[4 * s + 2] = 255 & e);
                      return r.putImageData(o, 0, 0), i.toDataURL();
                    },
                  },
                  {
                    key: "beginStroke",
                    value: function () {
                      (this.strokeBuffer = []),
                        (this.prevPosition = null),
                        (this.prevBrushSize = null),
                        (this.prevVelocity = 0),
                        (this.prevDistance = 0),
                        (this.expectedNextPosition = null),
                        (this.accelerate = 0);
                    },
                  },
                  {
                    key: "endStroke",
                    value: function () {
                      var e = this.accelerate;
                      if (e > 1) {
                        for (
                          var t = {
                              x: this.expectedNextPosition.x,
                              y: this.expectedNextPosition.y,
                              t:
                                e / (this.prevDistance * this.prevVelocity) +
                                this.prevPosition.t,
                              p:
                                this.prevPosition.p *
                                Math.min(
                                  e / (this.prevDistance * this.prevVelocity),
                                  1
                                ),
                            },
                            n = 0,
                            i = this.bufferSize;
                          n < i;
                          n++
                        )
                          this.strokeBuffer.push(t);
                        this.draw(true);
                      }
                    },
                  },
                  {
                    key: "draw",
                    value: function () {
                      var e = this._getBufferedCurrentPosition();
                      if (null != e) {
                        null === this.prevPosition && (this.prevPosition = e);
                        var t = e.t - this.prevPosition.t,
                          n = this._getDistance(e, this.prevPosition),
                          i = n / Math.max(1, t),
                          r =
                            0 === this.prevVelocity ? 0 : i / this.prevVelocity,
                          a = function (e, t, n, i) {
                            return (n * e) / i + t;
                          },
                          o = Math.max(
                            this.currentBrush.minSize,
                            a(
                              i,
                              this.currentBrush.maxSize,
                              -this.currentBrush.maxSize -
                                this.currentBrush.minSize,
                              this.pressureVelocity
                            )
                          );
                        (e.s = o),
                          this._drawStroke(this.prevPosition, e, o, n, i),
                          (this.accelerate = r),
                          (this.expectedNextPosition = this._getInterlatePos(
                            this.prevPosition,
                            e,
                            1 + r
                          )),
                          (this.prevPosition = e),
                          (this.prevBrushSize = o),
                          (this.prevVelocity = i),
                          (this.prevDistance = n);
                      }
                    },
                  },
                  {
                    key: "_drawStroke",
                    value: function (e, t, n, i) {
                      var r = 0,
                        a = n - this.prevBrushSize;
                      while (r < 1) {
                        var o = Math.min(
                            this.prevBrushSize + a * r,
                            this.currentBrush.maxSize
                          ),
                          s = this._getInterlatePos(e, t, r);
                        if (Math.random() > 0.2) {
                          var l =
                              (Math.random() > 0.5 ? 1 : -1) *
                              parseInt(1.2 * Math.random(), 10),
                            c = s.x - o / 2 + l,
                            u = s.y - o / 2 + l,
                            d = new Tiny.Sprite(this.currentBrush.image);
                          d.setPosition(c, u),
                            (d.width = o),
                            (d.height = o),
                            this.container.addChild(d);
                        }
                        if (((r += 1 / i), i > 1e4 || i < 1e-4)) break;
                      }
                    },
                  },
                  {
                    key: "addStrokePosition",
                    value: function (e) {
                      this.strokeBuffer.push(e);
                    },
                  },
                  {
                    key: "_getBufferedCurrentPosition",
                    value: function () {
                      var e = { x: 0, y: 0, t: 0, p: 0 },
                        t = Math.min(this.bufferSize, this.strokeBuffer.length);
                      if (0 === t) return null;
                      for (var n = 1; n < t + 1; n++) {
                        var i = this.strokeBuffer[this.strokeBuffer.length - n];
                        (e.x += i.x), (e.y += i.y), (e.t += i.t), (e.p += i.p);
                      }
                      return (e.x /= t), (e.y /= t), (e.t /= t), (e.p /= t), e;
                    },
                  },
                  {
                    key: "_getInterlatePos",
                    value: function (e, t, n) {
                      var i = e.x + (t.x - e.x) * n,
                        r = e.y + (t.y - e.y) * n;
                      return { x: i, y: r };
                    },
                  },
                  {
                    key: "_getDistance",
                    value: function (e, t) {
                      var n =
                        (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
                      return 0 === n ? n : Math.sqrt(n);
                    },
                  },
                ]),
                e
              );
            })(),
            k = undefined;
          k =
            Tiny.particles && Tiny.particles.ParticleContainer
              ? Tiny.particles.ParticleContainer
              : Tiny.Container;
          var x = (function (e) {
            function t(e) {
              c(this, t);
              var n = m(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  t.maxStroke
                )
              );
              if (!e)
                throw new Error(
                  "The parameter Application~renderer is required"
                );
              return (
                (n.renderer = e),
                (n.resolution = e.resolution),
                (n.strokeEngine = new w(n)),
                (n.isInStroke = false),
                (n.strokeHistory = []),
                (n.strokePartition = []),
                (n.isPointerDown = false),
                (n.strokeBeginTime = null),
                (n.isLocked = false),
                n.initAttribute(),
                n
              );
            }
            return (
              d(t, e),
              u(t, [
                {
                  key: "initAttribute",
                  value: function () {
                    this.selectBrush(r.MEDIUM),
                      this.setBrushInk(o.MEDIUM),
                      this.setPressureVelocity(2);
                  },
                },
                {
                  key: "start",
                  value: function () {
                    var this_ = this;
                    this.setEventEnabled(true),
                      (this.hitArea = new Tiny.Rectangle(
                        0,
                        0,
                        Tiny.WIN_SIZE.width,
                        Tiny.WIN_SIZE.height
                      ));
                    var n = function (t) {
                        (this_.data = t.data),
                          (this_.isPointerDown = true),
                          this_.beginStroke();
                      },
                      i = function (n) {
                        if ((n.stopPropagation(), this_.data)) {
                          var i = this_.data.getLocalPosition(this_.parent),
                            r = i.x,
                            a = i.y;
                          this_.isPointerDown &&
                            (this_.children.length > t.maxStroke ||
                              ((this_.isPointerDown = true),
                              this_.addStrokePosition(r, a)));
                        }
                      },
                      r = function (t) {
                        this_.isPointerDown &&
                          ((this_.isPointerDown = false),
                          (this_.data = null),
                          this_.endStroke());
                      };
                    this.on("pointerdown", n),
                      this.on("pointermove", i),
                      this.on("pointerup", r),
                      this.on("pointerupoutside", r);
                  },
                },
                {
                  key: "beginStroke",
                  value: function () {
                    this.isLocked ||
                      (this.endStroke(),
                      (this.isInStroke = true),
                      (this.strokeBeginTime = new Date().valueOf()),
                      (this.currentStroke = []),
                      this.strokePartition.push(this.children.length),
                      this.strokeEngine.beginStroke(),
                      this.emit("stroke-begin"));
                  },
                },
                {
                  key: "addStrokePosition",
                  value: function (e, t, n) {
                    if (!this.isLocked) {
                      var i = new Date().valueOf() - this.strokeBeginTime,
                        r = { x: e, y: t, t: i, p: n };
                      this.currentStroke.push(r),
                        this.strokeEngine.addStrokePosition(r),
                        this.strokeEngine.draw();
                    }
                  },
                },
                {
                  key: "endStroke",
                  value: function () {
                    this.isLocked ||
                      (this.isInStroke &&
                        (this.strokeHistory.push({
                          O: i.STROKE,
                          D: this.currentStroke.map(function (e) {
                            return { X: e.x, Y: e.y, T: e.t, P: e.p };
                          }),
                        }),
                        (this.isInStroke = false),
                        (this.currentStroke = null),
                        this.strokeEngine.endStroke(),
                        this.emit("stroke-end", this.strokeHistory)));
                  },
                },
                {
                  key: "getHistory",
                  value: function () {
                    var e = this.resolution,
                      t = this.strokeEngine.pressureVelocity,
                      i = this.renderer,
                      r = i.width,
                      a = i.height;
                    return {
                      v: n,
                      dpi: e,
                      pv: t,
                      w: r,
                      h: a,
                      sh: this.strokeHistory,
                    };
                  },
                },
                {
                  key: "getPlainHistory",
                  value: function () {
                    return g(this.getHistory());
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this.isLocked ||
                      (this.endStroke(),
                      (this.strokeHistory = []),
                      this.removeChildren(),
                      this.initAttribute());
                  },
                },
                {
                  key: "undo",
                  value: function () {
                    if (!this.isLocked) {
                      this.endStroke();
                      var e = this.strokeHistory.length;
                      if (e) {
                        var t = this.strokeHistory.pop(),
                          n = t.O;
                        if (n === i.STROKE) {
                          var r = this.strokePartition.pop();
                          1 === e
                            ? this.removeChildren()
                            : this.removeChildren(r);
                        }
                      }
                    }
                  },
                },
                {
                  key: "lock",
                  value: function () {
                    this.isLocked = true;
                  },
                },
                {
                  key: "unlock",
                  value: function () {
                    this.isLocked = false;
                  },
                },
                {
                  key: "getCurrentBrush",
                  value: function () {
                    return this.strokeEngine.getCurrentBrush().type;
                  },
                },
                {
                  key: "selectBrush",
                  value: function (e) {
                    this.isLocked ||
                      (this.endStroke(),
                      this.strokeHistory.push({ O: i.SET_BRUSH, D: e }),
                      this.strokeEngine.selectBrush(e));
                  },
                },
                {
                  key: "getBrushInk",
                  value: function () {
                    return this.strokeEngine.getCurrentBrush().ink;
                  },
                },
                {
                  key: "setBrushInk",
                  value: function (e) {
                    this.isLocked ||
                      (this.endStroke(),
                      this.strokeHistory.push({ O: i.SET_INK, D: e }),
                      this.strokeEngine.setBrushInk(e));
                  },
                },
                {
                  key: "getBrushColor",
                  value: function () {
                    return this.strokeEngine.getBrushColor();
                  },
                },
                {
                  key: "setBrushColor",
                  value: function (e) {
                    this.isLocked ||
                      (this.endStroke(),
                      this.strokeHistory.push({ O: i.SET_COLOR, D: e }),
                      this.strokeEngine.setBrushColor(e));
                  },
                },
                {
                  key: "setPressureVelocity",
                  value: function (e) {
                    this.strokeEngine.pressureVelocity = e * this.resolution;
                  },
                },
                {
                  key: "getImage",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 && undefined !== arguments[2]
                          ? arguments[2]
                          : "image/png",
                      i = this.renderer,
                      r = this.resolution;
                    if ("stage" === e) {
                      var a = i.width,
                        o = i.height,
                        s = new Tiny.Rectangle(0, 0, a / r, o / r);
                      return i.plugins.extract.canvas(this, s, t).toDataURL(n);
                    }
                    if (e instanceof Tiny.Rectangle)
                      return i.plugins.extract.canvas(this, e, t).toDataURL(n);
                    var l = this.getContentBounds();
                    return i.plugins.extract.canvas(this, l, t).toDataURL(n);
                  },
                },
                {
                  key: "getContentBounds",
                  value: function () {
                    this.getLocalBounds();
                    var e = this.renderer,
                      t = this.resolution,
                      n = this.getLocalBounds(),
                      i = n.x,
                      r = n.y,
                      a = n.width,
                      o = n.height,
                      s = e.width,
                      l = e.height;
                    return (
                      (s /= t),
                      (l /= t),
                      a + i > s && (a = s - i),
                      i < 0 && ((a -= Math.abs(i)), (i = 0)),
                      o + r > l && (o = l - r),
                      r < 0 && ((o -= Math.abs(r)), (r = 0)),
                      new Tiny.Rectangle(i, r, a, o)
                    );
                  },
                },
              ]),
              t
            );
          })(k);
          x.maxStroke = 2e4;
          var E = (function (e) {
            function t(e, n) {
              c(this, t);
              var i = m(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  x.maxStroke
                )
              );
              if (!e)
                throw new Error(
                  "The parameter Application~renderer is required"
                );
              return (
                (i.renderer = e),
                (i.resolution = e.resolution),
                (i.speed = 2),
                (i.strokeEngine = new w(i)),
                (i.strokeData = n),
                (i.currentStroke = []),
                (i.strokeHistoryWork = []),
                (i.state = l.STOPPED),
                i.parseData(),
                i
              );
            }
            return (
              d(t, e),
              u(t, [
                {
                  key: "parseData",
                  value: function () {
                    var e = this.strokeData;
                    Tiny.isString(e) && (e = h(e));
                    var t = this.renderer,
                      n = t.width,
                      i = t.height,
                      r = e,
                      a = r.dpi,
                      o = r.pv,
                      s = r.w,
                      l = r.h,
                      c = r.sh,
                      u = Math.min(n, i) / Math.min(s, l);
                    (this.strokeHistory = c),
                      (this.strokeHistoryWork = [].concat(f(c))),
                      this.strokeEngine.refreshBrush(a),
                      (this.strokeEngine.pressureVelocity = o),
                      this.setScale(u);
                  },
                },
                {
                  key: "onTick",
                  value: function () {
                    if (this.state === l.PLAYING) {
                      if (0 === this.currentStroke.length) {
                        if (0 === this.strokeHistoryWork.length)
                          return void this.stop();
                        var e = this.strokeHistoryWork.shift(),
                          t = e.O,
                          n = e.D;
                        switch (
                          (this.strokeEngine.endStroke(),
                          this.strokeEngine.beginStroke(),
                          t)
                        ) {
                          case i.STROKE:
                            this.currentStroke = [].concat(f(n));
                            break;
                          case i.SET_BRUSH:
                            this.strokeEngine.selectBrush(n);
                            break;
                          case i.SET_INK:
                            this.strokeEngine.setBrushInk(n);
                            break;
                          case i.SET_COLOR:
                            this.strokeEngine.setBrushColor(n);
                            break;
                        }
                      }
                      var r = this.currentStroke.shift();
                      r &&
                        (this.strokeEngine.addStrokePosition({
                          x: r.X,
                          y: r.Y,
                          t: r.T,
                          p: r.P,
                        }),
                        this.strokeEngine.draw());
                    }
                  },
                },
                {
                  key: "setSpeed",
                  value: function (e) {
                    e <= 0 || (this.speed = ~~e);
                  },
                },
                {
                  key: "getSpeed",
                  value: function () {
                    return this.speed;
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var this_ = this;
                    this.state === l.STOPPED &&
                      ((this.currentStroke = []),
                      this.removeChildren(),
                      0 === this.strokeHistoryWork.length && this.parseData()),
                      (this.state = l.PLAYING),
                      (this.timer = new Tiny.ticker.CountDown({
                        duration: 17,
                      })),
                      this.timer.on("update", function (t) {
                        for (
                          var n = 0;
                          n < (60 / Tiny.Application.FPS) * this_.speed;
                          n++
                        )
                          this_.onTick();
                      }),
                      this.timer.start(),
                      this.emit("start");
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    (this.state = l.PAUSING),
                      this.timer.start(),
                      this.emit("pause");
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    (this.state = l.STOPPED),
                      this.timer.stop(),
                      this.timer.destroy(),
                      this.emit("end");
                  },
                },
              ]),
              t
            );
          })(k);
          (t.brushs = v),
            (t.Brush = b),
            (t.Tablet = x),
            (t.Player = E),
            (t.VERSION = n),
            (t.STROKE_OPERATION = i),
            (t.BRUSH_TYPE = r),
            (t.BRUSH_SIZE = a),
            (t.BRUSH_INK = o),
            (t.BRUSH_INK_IMAGE = s),
            (t.PLAYER_STATE = l),
            (t.plain2Object = h),
            (t.object2Plain = g),
            Object.defineProperty(t, "__esModule", { value: true });
        });
      }.call(this, __webpack_require__("drRq")));
    },
    "4pnT": function (module, exports, __webpack_require__) {
      "use strict";
      var i =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      Object.defineProperty(exports, "__esModule", { value: true });
      var r =
        "function" === typeof Symbol && "symbol" === i(Symbol.iterator)
          ? function (e) {
              return "undefined" === typeof e ? "undefined" : i(e);
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : "undefined" === typeof e
                ? "undefined"
                : i(e);
            };
      (exports.pushWindow = l), (exports.popWindow = c), (exports.startApp = u);
      var a = __webpack_require__("P93B"),
        o = a.extend,
        s = __webpack_require__("oExZ");
      function l(e) {
        var t = e.page,
          n = e.data,
          i = e.params;
        if (t) {
          var r = { url: t, data: n || {} };
          i && (r.params = i), s.pushWindow(r);
        }
      }
      function c(e) {
        var t =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : 0,
          n = "number" === typeof e ? e : t,
          i =
            "object" === ("undefined" === typeof e ? "undefined" : r(e))
              ? { data: e }
              : null;
        setTimeout(function () {
          s.popWindow(i);
        }, n);
      }
      function u(e) {
        var t = e.appId,
          n = e.params,
          i = e.closeCurrentApp,
          r = e.callBack;
        if (t) {
          var a = {
            appId: t,
            params: o({ appClearTop: false, startMulapp: "YES" }, n),
          };
          (a.closeCurrentApp = !!i),
            (a.fail =
              r && "function" === typeof r
                ? r
                : function (e) {
                    var t =
                      e && e.errorMessage ? "(" + e.errorMessage + ")" : "";
                    s.showToast("抱歉，启动失败" + t);
                  }),
            s.startApp(a);
        }
      }
    },
    "5/UD": function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true }),
        (exports.delay = a),
        (exports.includes = o),
        (exports.array2object = s);
      var i = __webpack_require__("jL/R"),
        r = i.detectType;
      function a(e) {
        return new Promise(function (t, n) {
          setTimeout(t, e);
        });
      }
      function o(e, t, n) {
        if (!r(e, "array") && !r(e, "string")) return false;
        var i = n || 0,
          a = e.length,
          o = Math.max(i >= 0 ? i : a - Math.abs(i), 0);
        return e.indexOf(t, o) > -1;
      }
      function s(e, t) {
        if (!e || !t) throw Error("缺失必要参数");
        if (!r(e, "array"))
          throw TypeError("入参类型错误，待转换类型必须为array");
        var n = {};
        return (
          e.forEach(function (e) {
            if (e && e[t]) {
              var i = e[t],
                r = {};
              Object.keys(e).forEach(function (n) {
                n !== t && (r[n] = e[n]);
              }),
                (n[i] = r);
            }
          }),
          n
        );
      }
    },
    "5Pvd": function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".title___1RYft{font-size:.2rem;font-weight:700;color:#ffd9a4;text-align:center;position:relative;top:.74rem}.subtitle___1-2hi{font-size:.12rem;font-weight:700;color:#ffd9a4;text-align:center;position:absolute;top:.8rem;padding:0 .4rem}.desc___1i0KO{font-size:.12rem;color:#ffd9a4;text-align:center;position:relative;top:1.52rem;background:#d41731;border:1px solid #ffd2a3;padding:.16rem .08rem;margin:0 .3rem;border-radius:.08rem}",
          "",
        ]),
        (exports.locals = {
          title: "title___1RYft",
          subtitle: "subtitle___1-2hi",
          desc: "desc___1i0KO",
        });
    },
    "7B2p": function (module, exports, __webpack_require__) {
      var i = {},
        r = function (e) {
          var t;
          return function () {
            return (
              "undefined" === typeof t && (t = e.apply(this, arguments)), t
            );
          };
        },
        a = r(function () {
          return window && document && document.all && !window.atob;
        }),
        o = function (e, t) {
          return t ? t.querySelector(e) : document.querySelector(e);
        },
        s = (function (e) {
          var t = {};
          return function (e, n) {
            if ("function" === typeof e) return e();
            if ("undefined" === typeof t[e]) {
              var i = o.call(this, e, n);
              if (
                window.HTMLIFrameElement &&
                i instanceof window.HTMLIFrameElement
              )
                try {
                  i = i.contentDocument.head;
                } catch (e) {
                  i = null;
                }
              t[e] = i;
            }
            return t[e];
          };
        })(),
        l = null,
        c = 0,
        u = [],
        d = __webpack_require__("SlbL");
      function m(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = i[r.id];
          if (a) {
            a.refs++;
            for (var o = 0; o < a.parts.length; o++) a.parts[o](r.parts[o]);
            for (; o < r.parts.length; o++) a.parts.push(_(r.parts[o], t));
          } else {
            var s = [];
            for (o = 0; o < r.parts.length; o++) s.push(_(r.parts[o], t));
            i[r.id] = { id: r.id, refs: 1, parts: s };
          }
        }
      }
      function p(e, t) {
        for (var n = [], i = {}, r = 0; r < e.length; r++) {
          var a = e[r],
            o = t.base ? a[0] + t.base : a[0],
            s = a[1],
            l = a[2],
            c = a[3],
            u = { css: s, media: l, sourceMap: c };
          i[o] ? i[o].parts.push(u) : n.push((i[o] = { id: o, parts: [u] }));
        }
        return n;
      }
      function f(e, t) {
        var n = s(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var i = u[u.length - 1];
        if ("top" === e.insertAt)
          i
            ? i.nextSibling
              ? n.insertBefore(t, i.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            u.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
          if ("object" !== typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = s(e.insertAt.before, n);
          n.insertBefore(t, r);
        }
      }
      function h(e) {
        if (null === e.parentNode) return false;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      }
      function g(e) {
        var t = document.createElement("style");
        if (
          (undefined === e.attrs.type && (e.attrs.type = "text/css"),
          undefined === e.attrs.nonce)
        ) {
          var n = A();
          n && (e.attrs.nonce = n);
        }
        return v(t, e.attrs), f(e, t), t;
      }
      function b(e) {
        var t = document.createElement("link");
        return (
          undefined === e.attrs.type && (e.attrs.type = "text/css"),
          (e.attrs.rel = "stylesheet"),
          v(t, e.attrs),
          f(e, t),
          t
        );
      }
      function v(e, t) {
        Object.keys(t).forEach(function (n) {
          e.setAttribute(n, t[n]);
        });
      }
      function A() {
        return __webpack_require__.nc;
      }
      function _(e, t) {
        var n, i, r, a;
        if (t.transform && e.css) {
          if (
            ((a =
              "function" === typeof t.transform
                ? t.transform(e.css)
                : t.transform.default(e.css)),
            !a)
          )
            return function () {};
          e.css = a;
        }
        if (t.singleton) {
          var o = c++;
          (n = l || (l = g(t))),
            (i = w.bind(null, n, o, false)),
            (r = w.bind(null, n, o, true));
        } else
          e.sourceMap &&
          "function" === typeof URL &&
          "function" === typeof URL.createObjectURL &&
          "function" === typeof URL.revokeObjectURL &&
          "function" === typeof Blob &&
          "function" === typeof btoa
            ? ((n = b(t)),
              (i = x.bind(null, n, t)),
              (r = function () {
                h(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = g(t)),
              (i = k.bind(null, n)),
              (r = function () {
                h(n);
              }));
        return (
          i(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              i((e = t));
            } else r();
          }
        );
      }
      module.exports = function (e, t) {
        if (
          "undefined" !== typeof DEBUG &&
          DEBUG &&
          "object" !== typeof document
        )
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          (t.attrs = "object" === typeof t.attrs ? t.attrs : {}),
          t.singleton ||
            "boolean" === typeof t.singleton ||
            (t.singleton = a()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = p(e, t);
        return (
          m(n, t),
          function (e) {
            for (var r = [], a = 0; a < n.length; a++) {
              var o = n[a],
                s = i[o.id];
              s.refs--, r.push(s);
            }
            if (e) {
              var l = p(e, t);
              m(l, t);
            }
            for (a = 0; a < r.length; a++) {
              s = r[a];
              if (0 === s.refs) {
                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                delete i[s.id];
              }
            }
          }
        );
      };
      var y = (function () {
        var e = [];
        return function (t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
      function w(e, t, n, i) {
        var r = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, r);
        else {
          var a = document.createTextNode(r),
            o = e.childNodes;
          o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
        }
      }
      function k(e, t) {
        var n = t.css,
          i = t.media;
        if ((i && e.setAttribute("media", i), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          while (e.firstChild) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function x(e, t, n) {
        var i = n.css,
          r = n.sourceMap,
          a = undefined === t.convertToAbsoluteUrls && r;
        (t.convertToAbsoluteUrls || a) && (i = d(i)),
          r &&
            (i +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */");
        var o = new Blob([i], { type: "text/css" }),
          s = e.href;
        (e.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s);
      }
    },
    "7bjG": function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var i = __webpack_require__("P93B"),
        r = __webpack_require__("IZX8"),
        a = __webpack_require__("rUGD"),
        o = __webpack_require__("4pnT"),
        s = i.extend;
      module.exports = s({}, i, r, a, o);
    },
    "7vYp": function (module, exports, __webpack_require__) {
      (exports.nextTick = function (e) {
        var t = Array.prototype.slice.call(arguments);
        t.shift(),
          setTimeout(function () {
            e.apply(null, t);
          }, 0);
      }),
        (exports.platform = exports.arch = exports.execPath = exports.title =
          "browser"),
        (exports.pid = 1),
        (exports.browser = true),
        (exports.env = {}),
        (exports.argv = []),
        (exports.binding = function (e) {
          throw new Error("No such module. (Possibly not yet loaded)");
        }),
        (function () {
          var e,
            i = "/";
          (exports.cwd = function () {
            return i;
          }),
            (exports.chdir = function (t) {
              e || (e = __webpack_require__("YmYf")), (i = e.resolve(t, i));
            });
        })(),
        (exports.exit = exports.kill = exports.umask = exports.dlopen = exports.uptime = exports.memoryUsage = exports.uvCounters = function () {}),
        (exports.features = {});
    },
    "80hv": function (module, exports) {
      module.exports = ["TRT-AL00", "TRT-AL00A", "TRT-TL10", "TRT-TL10A"];
    },
    "8K25": function (module, exports, __webpack_require__) {
      (function (e, t) {
        t();
      })(0, function () {
        "use strict";
        var e =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          t = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || false),
                  (i.configurable = true),
                  "value" in i && (i.writable = true),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          i = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true,
                  })
                : (e[t] = n),
              e
            );
          },
          r = function (e) {
            var t = Function;
            return new t("return " + e)();
          },
          a = function (e) {
            return e.slice(0, -1) / 100;
          },
          o = function (e) {
            return undefined === e;
          },
          s = function t(n) {
            var i = {};
            for (var r in n)
              n.hasOwnProperty(r) &&
                (n[r] && "object" === e(n[r])
                  ? Array.isArray(n[r])
                    ? (i[r] = n[r].map(function (n) {
                        return "object" ===
                          ("undefined" === typeof n ? "undefined" : e(n))
                          ? t(n)
                          : n;
                      }))
                    : (i[r] = t(n[r]))
                  : (i[r] = n[r]));
            return i;
          },
          l = function (e) {
            return navigator.canUseBinding
              ? setTimeout(function () {
                  e && e();
                }, 0)
              : window.requestAnimationFrame(function () {
                  e && e();
                });
          },
          c = function (e) {
            navigator.canUseBinding
              ? clearTimeout(e)
              : window.cancelAnimationFrame(e);
          },
          u = function (e, t, n, i, a) {
            e.displayObjectUpdateTransform();
            var o = i < n ? "-" : "+",
              s = undefined,
              l = i - n;
            if (
              ((s =
                "position.x" === t ? e.localTransform.tx : e.localTransform.ty),
              (i = "" + o + Math.abs(l)),
              0 === a)
            )
              return (
                (e.__easyAnimationOperation = i), { targetValue: s, toValue: i }
              );
            var c = r("" + s + e.__easyAnimationOperation);
            return (
              (e.__easyAnimationOperation += i), { targetValue: c, toValue: i }
            );
          },
          d = { FORWARDS: "forwards", BACKWARDS: "backwards" },
          m = (function () {
            function e(n) {
              t(this, e),
                (this.pluginName = "easyAnimation"),
                (this.displayObject = n),
                (this.tweenGroup = new Tiny.TWEEN.Group()),
                (this.tweenAnimationCache = {}),
                (this.playingAimationCompleteTimes = {}),
                (this.playingAnimation = ""),
                (this.playTimes = 1),
                (this.chainAnimationCompleteTimes = 0),
                (this.playing = false),
                (this.useRelativePositionValue = false),
                (this.animationFillMode = "forwards");
            }
            return (
              n(e, [
                {
                  key: "setAnimationConfig",
                  value: function (e, t) {
                    var this_ = this;
                    (this.displayObject.updateTransform = function () {
                      this_.tweenGroup.update(),
                        this_.displayObject.containerUpdateTransform.call(
                          this_.displayObject
                        );
                    }),
                      (this.useRelativePositionValue = t);
                    var i = this.__parseAnimationConfig(s(e));
                    this.__createTween(i);
                  },
                },
                {
                  key: "play",
                  value: function (e, t, n) {
                    var i = this.tweenAnimationCache[e];
                    if (!i)
                      throw new Error(
                        "can not find animationName {" +
                          e +
                          "} in your configs."
                      );
                    this.playing ||
                      ("number" === typeof t && (this.playTimes = t || 1),
                      "string" === typeof t && (this.animationFillMode = t),
                      n && (this.animationFillMode = n),
                      (this.playingAnimation = e),
                      (this.playing = true),
                      this.__playAnimation(e));
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    var e = this.tweenGroup.getAll();
                    e.forEach(function (e) {
                      e.stop();
                    }),
                      (this.playing = false),
                      this.__setAnimationClipCompleteTimes(
                        this.playingAnimation,
                        0
                      ),
                      (this.playingAnimation = ""),
                      (this.playTimes = 1);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this.tweenAnimationCache = {}),
                      this.tweenGroup.removeAll(),
                      (this.playingAnimation = ""),
                      (this.playingAimationCompleteTimes = {}),
                      (this.playTimes = 1),
                      (this.playing = false);
                  },
                },
                {
                  key: "__playAnimation",
                  value: function (e) {
                    var t = this.tweenAnimationCache[e];
                    t.forEach(function (e) {
                      e.start();
                    });
                  },
                },
                {
                  key: "__createTween",
                  value: function (e) {
                    var t = this,
                      n = Object.keys(e);
                    n.forEach(function (n) {
                      var i = e[n],
                        r = Object.keys(i),
                        a = {};
                      t.tweenAnimationCache[n] = r.map(function (e) {
                        var r = i[e],
                          o = 0,
                          s = null,
                          u = r.reduce(function (e, i, u) {
                            var m = i.property,
                              p = i.target,
                              f = i.to,
                              h = i.easeFunction,
                              g = i.duration,
                              b = i.delay,
                              v = m.split("."),
                              A = h.split(".").reduce(function (e, t) {
                                return e[t];
                              }, Tiny.TWEEN.Easing),
                              _ = new Tiny.TWEEN.Tween(p, t.tweenGroup),
                              y = p[m];
                            return (
                              t.__cacheDisplayObjectInitPropertyValue(v, m, a),
                              (_.animationName = n),
                              _.to(f, g),
                              _.easing(A),
                              _.delay(b),
                              _.onUpdate(function () {
                                t.__updateDisplayObjectProperty(v, p[m]);
                              }),
                              _.onComplete(function (e) {
                                var n =
                                  t.tweenAnimationCache[t.playingAnimation];
                                if (n) {
                                  var i = n.reduce(function (e, t) {
                                      return e + t.tweenCount;
                                    }, 0),
                                    r = i * t.playTimes;
                                  t.__setAnimationClipCompleteTimes(
                                    t.playingAnimation
                                  ),
                                    t.displayObject.emit(
                                      "onAnimationClipEnd",
                                      e
                                    ),
                                    (p[m] = y);
                                  var o = t.__getAnimationClipCompleteTimes(
                                    t.playingAnimation
                                  );
                                  if (t.playTimes === 1 / 0) {
                                    if (i === o) {
                                      t.__setAnimationClipCompleteTimes(
                                        t.playingAnimation,
                                        0
                                      );
                                      var s = l(function () {
                                        t.__playAnimation(t.playingAnimation),
                                          c(s);
                                      });
                                    }
                                  } else {
                                    if (
                                      o % i === 0 &&
                                      t.playTimes >
                                        t.chainAnimationCompleteTimes + 1
                                    ) {
                                      t.chainAnimationCompleteTimes++;
                                      var u = l(function () {
                                        t.__playAnimation(t.playingAnimation),
                                          c(u);
                                      });
                                    }
                                    o === r &&
                                      ((t.playing = false),
                                      t.__setAnimationClipCompleteTimes(
                                        t.playingAnimation,
                                        0
                                      ),
                                      (t.playTimes = 1),
                                      (t.chainAnimationCompleteTimes = 0),
                                      t.animationFillMode === d.BACKWARDS &&
                                        Object.keys(a).forEach(function (e) {
                                          var n = e.split(".");
                                          t.__updateDisplayObjectProperty(
                                            n,
                                            a[e]
                                          );
                                        }),
                                      t.displayObject.emit(
                                        "onAnimationEnd",
                                        t.playingAnimation
                                      ));
                                  }
                                }
                              }),
                              o++,
                              e ? (e.chain(_), r[u + 1] ? _ : s) : ((s = _), _)
                            );
                          }, null);
                        return (u.tweenCount = o), u;
                      });
                    });
                  },
                },
                {
                  key: "__getAnimationClipCompleteTimes",
                  value: function (e) {
                    return this.playingAimationCompleteTimes[e];
                  },
                },
                {
                  key: "__setAnimationClipCompleteTimes",
                  value: function (e, t) {
                    o(t)
                      ? this.playingAimationCompleteTimes[e]
                        ? this.playingAimationCompleteTimes[e]++
                        : (this.playingAimationCompleteTimes[e] = 1)
                      : (this.playingAimationCompleteTimes[e] = t);
                  },
                },
                {
                  key: "__updateDisplayObjectProperty",
                  value: function (e, t) {
                    e.length > 1
                      ? (this.displayObject[e[0]][e[1]] = t)
                      : (this.displayObject[e[0]] = t);
                  },
                },
                {
                  key: "__cacheDisplayObjectInitPropertyValue",
                  value: function (e, t, n) {
                    return (
                      e.length > 1
                        ? (n[t] = this.displayObject[e[0]][e[1]])
                        : (n[t] = this.displayObject[e[0]]),
                      n
                    );
                  },
                },
                {
                  key: "__parseAnimationConfig",
                  value: function (e) {
                    var t = this,
                      n = Object.keys(e),
                      r = {},
                      s = {};
                    return (
                      n.forEach(function (n) {
                        var l = e[n];
                        l.forEach(function (e) {
                          var n = e.property,
                            s = e.easeFunction,
                            l = undefined === s ? "Linear.None" : s,
                            c = e.duration,
                            d = e.clips;
                          d.map(function (e) {
                            var t = e.percent;
                            return (
                              t && (e.percent = a(t)),
                              "rotation" === n &&
                                (e.value = Tiny.deg2radian(e.value)),
                              e
                            );
                          })
                            .sort(function (e, t) {
                              return o(e.startTime) || o(t.startTime)
                                ? e.percent - t.percent
                                : e.startTime - t.startTime;
                            })
                            .forEach(function (e, a) {
                              if (d[a + 1]) {
                                var s = d[a + 1].startTime - e.startTime,
                                  m = e.value,
                                  p = d[a + 1].value;
                                if (
                                  (o(e.percent) ||
                                    o(d[a + 1].percent) ||
                                    (s = d[a + 1].percent * c - e.percent * c),
                                  !s)
                                )
                                  throw new Error(
                                    "animation clips property startTime or percent is required!"
                                  );
                                if (
                                  t.useRelativePositionValue &&
                                  ("position.x" === n || "position.y" === n)
                                ) {
                                  var f = u(t.displayObject, n, m, p, a);
                                  (m = f.targetValue), (p = f.toValue);
                                }
                                var h = {
                                  property: n,
                                  target: i({}, n, m),
                                  to: i({}, n, p),
                                  duration: s,
                                  easeFunction: e.easeFunction || l,
                                  delay: e.delay || 0,
                                };
                                r[n] ? r[n].push(h) : (r[n] = [h]);
                              }
                            });
                        }),
                          (s[n] = r),
                          (r = {});
                      }),
                      s
                    );
                  },
                },
              ]),
              e
            );
          })();
        Tiny.DisplayObject.registerPlugin("easyAnimation", m);
      });
    },
    "8Ogw": function (module, exports) {
      var n = {
        isFunction: function (e) {
          return "[object Function]" === Object.prototype.toString.call(e);
        },
        isNumber: function (e) {
          return "[object Number]" === Object.prototype.toString.call(e);
        },
        isString: function (e) {
          return "string" === typeof e;
        },
      };
      (n.isArray =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }),
        (n.isUndefined = function (e) {
          return undefined === e;
        }),
        (n.isObject = function (e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return [];
          if (Object.keys) return Object.keys(e);
          var t = [];
          for (var i in e) t.push(i);
          return t;
        }),
        (n.isEmpty = function (e) {
          return (
            null == e ||
            (n.isArray(e) || n.isString(e)
              ? 0 === e.length
              : 0 === n.keys(e).length)
          );
        }),
        Array.prototype.includes ||
          (Array.prototype.includes = function (e) {
            var t = Object(this),
              n = parseInt(t.length, 10) || 0;
            if (0 === n) return false;
            var i,
              r,
              a = parseInt(arguments[1], 10) || 0;
            a >= 0 ? (i = a) : ((i = n + a), i < 0 && (i = 0));
            while (i < n) {
              if (((r = t[i]), e === r || (e !== e && r !== r))) return true;
              i++;
            }
            return false;
          }),
        (module.exports = n);
    },
    "8d1u": function (module, exports, __webpack_require__) {
      (function (e, n) {
        n(exports);
      })(0, function (e) {
        "use strict";
        var t = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || false),
                  (i.configurable = true),
                  "value" in i && (i.writable = true),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          i = new Tiny.Rectangle(),
          r = 4,
          a = (function () {
            function e(n) {
              t(this, e), (this.renderer = n), (n.extract = this);
            }
            return (
              n(e, [
                {
                  key: "image",
                  value: function (e) {
                    var t = new Image();
                    return (t.src = this.base64(e)), t;
                  },
                },
                {
                  key: "base64",
                  value: function (e) {
                    return this.canvas(e).toDataURL();
                  },
                },
                {
                  key: "canvas",
                  value: function (e, t, n) {
                    if (!t && !n) return this._canvas(e);
                    var i = this.renderer,
                      r = i.resolution,
                      a = i.generateTexture(e, undefined, r, t),
                      o = this._canvas(a);
                    if (n) {
                      for (
                        var s = t || a.frame,
                          l = o
                            .getContext("2d")
                            .getImageData(0, 0, s.width * r, s.height * r),
                          c = new Tiny.CanvasRenderTarget(
                            s.width * r,
                            s.height * r,
                            1
                          ),
                          u = 0,
                          d = l.data.length / 4;
                        u < d;
                        u++
                      )
                        0 === l.data[4 * u + 3] &&
                          ((l.data[4 * u] = (16711680 & n) >> 16),
                          (l.data[4 * u + 1] = (65280 & n) >> 8),
                          (l.data[4 * u + 2] = 255 & n),
                          (l.data[4 * u + 3] = 255));
                      c.context.putImageData(l, 0, 0), (o = c.canvas);
                    }
                    return o;
                  },
                },
                {
                  key: "_canvas",
                  value: function (e) {
                    var t = this.renderer,
                      n = undefined,
                      a = undefined,
                      o = undefined,
                      s = false,
                      l = undefined,
                      c = false;
                    e &&
                      (e instanceof Tiny.RenderTexture
                        ? (l = e)
                        : ((l = this.renderer.generateTexture(e)), (c = true))),
                      l
                        ? ((n =
                            l.baseTexture._glRenderTargets[
                              this.renderer.CONTEXT_UID
                            ]),
                          (a = n.resolution),
                          (o = l.frame),
                          (s = false))
                        : ((n = this.renderer.rootRenderTarget),
                          (a = n.resolution),
                          (s = true),
                          (o = i),
                          (o.width = n.size.width),
                          (o.height = n.size.height));
                    var u = Math.floor(o.width * a + 1e-4),
                      d = Math.floor(o.height * a + 1e-4),
                      m = new Tiny.CanvasRenderTarget(u, d, 1);
                    if (n) {
                      t.bindRenderTarget(n);
                      var p = new Uint8Array(r * u * d),
                        f = t.gl;
                      f.readPixels(
                        o.x * a,
                        o.y * a,
                        u,
                        d,
                        f.RGBA,
                        f.UNSIGNED_BYTE,
                        p
                      );
                      var h = m.context.getImageData(0, 0, u, d);
                      h.data.set(p),
                        m.context.putImageData(h, 0, 0),
                        s &&
                          (m.context.scale(1, -1),
                          m.context.drawImage(m.canvas, 0, -d));
                    }
                    return c && l.destroy(true), m.canvas;
                  },
                },
                {
                  key: "pixels",
                  value: function (e) {
                    var t = this.renderer,
                      n = undefined,
                      a = undefined,
                      o = undefined,
                      s = undefined,
                      l = false;
                    e &&
                      (e instanceof Tiny.RenderTexture
                        ? (s = e)
                        : ((s = this.renderer.generateTexture(e)), (l = true))),
                      s
                        ? ((n =
                            s.baseTexture._glRenderTargets[
                              this.renderer.CONTEXT_UID
                            ]),
                          (a = n.resolution),
                          (o = s.frame))
                        : ((n = this.renderer.rootRenderTarget),
                          (a = n.resolution),
                          (o = i),
                          (o.width = n.size.width),
                          (o.height = n.size.height));
                    var c = o.width * a,
                      u = o.height * a,
                      d = new Uint8Array(r * c * u);
                    if (n) {
                      t.bindRenderTarget(n);
                      var m = t.gl;
                      m.readPixels(
                        o.x * a,
                        o.y * a,
                        c,
                        u,
                        m.RGBA,
                        m.UNSIGNED_BYTE,
                        d
                      );
                    }
                    return l && s.destroy(true), d;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.renderer.extract = null), (this.renderer = null);
                  },
                },
              ]),
              e
            );
          })();
        Tiny.WebGLRenderer.registerPlugin("extract", a);
        var o = new Tiny.Rectangle(),
          s = (function () {
            function e(n) {
              t(this, e), (this.renderer = n), (n.extract = this);
            }
            return (
              n(e, [
                {
                  key: "image",
                  value: function (e) {
                    var t = new Image();
                    return (t.src = this.base64(e)), t;
                  },
                },
                {
                  key: "base64",
                  value: function (e) {
                    return this.canvas(e).toDataURL();
                  },
                },
                {
                  key: "canvas",
                  value: function (e, t, n) {
                    if (!t && !n) return this._canvas(e);
                    var i = this.renderer,
                      r = i.resolution,
                      a = i.width,
                      o = i.height,
                      s = new Tiny.Rectangle(0, 0, a / r, o / r),
                      l = i.generateTexture(e, undefined, r, s),
                      c = this._canvas(l),
                      u = t || l.frame,
                      d = c
                        .getContext("2d")
                        .getImageData(
                          u.x * r,
                          u.y * r,
                          u.width * r,
                          u.height * r
                        ),
                      m = new Tiny.CanvasRenderTarget(
                        u.width * r,
                        u.height * r,
                        1
                      );
                    if (n)
                      for (var p = 0, f = d.data.length / 4; p < f; p++)
                        0 === d.data[4 * p + 3] &&
                          ((d.data[4 * p] = (16711680 & n) >> 16),
                          (d.data[4 * p + 1] = (65280 & n) >> 8),
                          (d.data[4 * p + 2] = 255 & n),
                          (d.data[4 * p + 3] = 255));
                    return m.context.putImageData(d, 0, 0), (c = m.canvas), c;
                  },
                },
                {
                  key: "_canvas",
                  value: function (e) {
                    var t = this.renderer,
                      n = undefined,
                      i = undefined,
                      r = undefined,
                      a = undefined;
                    e &&
                      (a =
                        e instanceof Tiny.RenderTexture
                          ? e
                          : t.generateTexture(e)),
                      a
                        ? ((n = a.baseTexture._canvasRenderTarget.context),
                          (i = a.baseTexture._canvasRenderTarget.resolution),
                          (r = a.frame))
                        : ((n = t.rootContext),
                          (i = t.resolution),
                          (r = o),
                          (r.width = this.renderer.width),
                          (r.height = this.renderer.height));
                    var s = Math.floor(r.width * i + 1e-4),
                      l = Math.floor(r.height * i + 1e-4),
                      c = new Tiny.CanvasRenderTarget(s, l, 1),
                      u = n.getImageData(r.x * i, r.y * i, s, l);
                    return c.context.putImageData(u, 0, 0), c.canvas;
                  },
                },
                {
                  key: "pixels",
                  value: function (e) {
                    var t = this.renderer,
                      n = undefined,
                      i = undefined,
                      r = undefined,
                      a = undefined;
                    return (
                      e &&
                        (a =
                          e instanceof Tiny.RenderTexture
                            ? e
                            : t.generateTexture(e)),
                      a
                        ? ((n = a.baseTexture._canvasRenderTarget.context),
                          (i = a.baseTexture._canvasRenderTarget.resolution),
                          (r = a.frame))
                        : ((n = t.rootContext),
                          (r = o),
                          (r.width = t.width),
                          (r.height = t.height)),
                      n.getImageData(0, 0, r.width * i, r.height * i).data
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.renderer.extract = null), (this.renderer = null);
                  },
                },
              ]),
              e
            );
          })();
        function l(e, t, n) {
          var i =
              arguments.length > 3 && undefined !== arguments[3]
                ? arguments[3]
                : 16777215,
            r = e.width,
            a = e.height,
            o = Math.min(t / r, n / a),
            s = (t / o - r) / 2,
            l = (n / o - a) / 2,
            c = Tiny.isNumber(i) ? Tiny.hex2string(i) : i,
            u = new Tiny.CanvasRenderTarget(t, n, 1);
          return (
            u.context.scale(o, o),
            (u.context.fillStyle = c),
            u.context.fillRect(0, 0, t / o, n / o),
            u.context.drawImage(e, s, l),
            u.canvas
          );
        }
        Tiny.CanvasRenderer.registerPlugin("extract", s),
          (e.webgl = a),
          (e.canvas = s),
          (e.scale = l),
          Object.defineProperty(e, "__esModule", { value: true });
      });
    },
    AgXl: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("HULx");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    B6eM: function (module, exports) {
      var n = function () {
        var e = navigator.userAgent;
        return {
          ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
          u4: e.indexOf("UCBS") > -1,
          iphone: e.indexOf("iPhone") > -1,
          ipad: e.indexOf("iPad") > -1,
        };
      };
      module.exports = n;
    },
    BYGN: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".wrapper___2dcqE{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background-color:#ef1c27}.wrapper___2dcqE.enter___3OoJO{opacity:0}.wrapper___2dcqE.activeEnter___3InIF{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);transition:opacity .2s,-webkit-transform .2s;transition:opacity .2s,transform .2s;transition:opacity .2s,transform .2s,-webkit-transform .2s}.wrapper___2dcqE.exit___16hjZ{opacity:1}.wrapper___2dcqE.activeExit___YNDms{opacity:0;transition:opacity .2s,-webkit-transform .2s;transition:opacity .2s,transform .2s;transition:opacity .2s,transform .2s,-webkit-transform .2s}.wrapper___2dcqE img{width:3.12rem;position:absolute;left:50%;top:45%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",
          "",
        ]),
        (exports.locals = {
          wrapper: "wrapper___2dcqE",
          enter: "enter___3OoJO",
          activeEnter: "activeEnter___3InIF",
          exit: "exit___16hjZ",
          activeExit: "activeExit___YNDms",
        });
    },
    E6aP: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".shareText___3IWEi{font-size:.14rem;color:#ffe1ac;margin-top:.46rem;text-align:center;height:.2rem}.shareBtnArea___myjy8{margin-top:.195rem;text-align:center}.shareBtnArea___myjy8 .shareBtn___Sk2Tj{height:.445rem;line-height:.445rem;width:1.8rem;display:inline-block;background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*KGV5Q7f08bAAAAAAAAAAAAAAARQnAQ);font-size:.17rem;font-weight:700;color:#e44d25;text-align:center;position:absolute}.shareBtnArea___myjy8 .shareBtn___Sk2Tj.disabled___3WvdL{opacity:.5}",
          "",
        ]),
        (exports.locals = {
          shareText: "shareText___3IWEi",
          shareBtnArea: "shareBtnArea___myjy8",
          shareBtn: "shareBtn___Sk2Tj",
          disabled: "disabled___3WvdL",
        });
    },
    ENj2: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("UM5B");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    Ec7T: function (module, exports, __webpack_require__) {
      var i = __webpack_require__("ikyr"),
        r = __webpack_require__("v+xd"),
        a =
          "number" === typeof __PAINTY_STACK_LIMIT__
            ? __PAINTY_STACK_LIMIT__
            : 100;
      function o() {
        return "object" === typeof performance &&
          "function" === typeof performance.now
          ? performance.now()
          : Date.now();
      }
      module.exports = function (e, t) {
        if ("object" === typeof window && "object" === typeof i) {
          "function" === typeof e && (t = e);
          var n = [],
            s = d();
          if ("number" === typeof e) setTimeout(m, e);
          else {
            var l = navigator.userAgent,
              c = !!l.match(/iPhone|iPad|iPod/i),
              u = c ? "pagehide" : "beforeunload";
            window.addEventListener(u, m);
          }
        }
        function d() {
          if ("function" === typeof MutationObserver) {
            var e = new MutationObserver(function () {
              n.push({
                t: o(),
                domCnt: document.getElementsByTagName("*").length,
              }),
                n.length === a && m();
            });
            return (
              e.observe(document, { childList: true, subtree: true }),
              e.disconnect.bind(e)
            );
          }
          var t = setTimeout(function () {
            n.push({
              t: o(),
              domCnt: document.getElementsByTagName("*").length,
            }),
              n.length === a ? m() : d();
          }, 200);
          return function () {
            clearTimeout(t);
          };
        }
        function m() {
          if (
            (s(),
            "object" === typeof i && "function" === typeof i.getEntriesByType)
          ) {
            var a = i.getEntriesByType("navigation");
            if (a && a.length) {
              var o = a[0],
                l = o.startTime;
              t(r({ records: n, start: l, timeout: e, load: o.duration }));
            }
          }
        }
      };
    },
    F7uN: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".textCommonStyle___25rOp{width:2.8rem;text-align:center}.cardsOutModal___23Y2_{position:relative}.cardsOutModal___23Y2_ .avatar___IDLhg{position:absolute;top:.215rem;left:1.23rem}.cardsOutModal___23Y2_ .nickName___3yu3m{position:absolute;font-size:.11rem;color:#fff1d1;top:.63rem;width:2.8rem;text-align:center}.cardsOutModal___23Y2_ .guideText___14NOf{position:absolute;top:.84rem;width:2.8rem;text-align:center;height:.2rem;line-height:.2rem;font-size:.14rem;color:#fff1d1;font-weight:700}.cardsOutModal___23Y2_ .fu___1jfJa{position:absolute;top:1.08245rem;width:1.52rem;height:1.52rem}.cardsOutModal___23Y2_ .outText___LvvP5{width:2.8rem;height:.2rem;line-height:.2rem;font-size:.14rem;color:#fff1d1;text-align:center;position:absolute;top:3.065rem;font-weight:700}",
          "",
        ]),
        (exports.locals = {
          textCommonStyle: "textCommonStyle___25rOp",
          cardsOutModal: "cardsOutModal___23Y2_",
          avatar: "avatar___IDLhg",
          nickName: "nickName___3yu3m",
          guideText: "guideText___14NOf",
          fu: "fu___1jfJa",
          outText: "outText___LvvP5",
        });
    },
    FSXr: function (module, exports) {
      function n(e, t) {
        var n = e[1] || "",
          r = e[3];
        if (!r) return n;
        if (t && "function" === typeof btoa) {
          var a = i(r),
            o = r.sources.map(function (e) {
              return "/*# sourceURL=" + r.sourceRoot + e + " */";
            });
          return [n].concat(o).concat([a]).join("\n");
        }
        return [n].join("\n");
      }
      function i(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
          n =
            "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
        return "/*# " + n + " */";
      }
      module.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var i = n(t, e);
              return t[2] ? "@media " + t[2] + "{" + i + "}" : i;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" === typeof e && (e = [[null, e, ""]]);
            for (var i = {}, r = 0; r < this.length; r++) {
              var a = this[r][0];
              "number" === typeof a && (i[a] = true);
            }
            for (r = 0; r < e.length; r++) {
              var o = e[r];
              ("number" === typeof o[0] && i[o[0]]) ||
                (n && !o[2]
                  ? (o[2] = n)
                  : n && (o[2] = "(" + o[2] + ") and (" + n + ")"),
                t.push(o));
            }
          }),
          t
        );
      };
    },
    GdIV: function (module, exports) {
      var n = function (e) {
        var t = { is: false, name: "", version: "" },
          n = e.match(/AliApp\S+\b\)/gi);
        t.is = !!/(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(e);
        try {
          (t.name = n ? n[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : ""),
            (t.version = n ? n[0].match(/(\d+\.*)+/gi)[0] : "");
        } catch (e) {}
        return t;
      };
      module.exports = n;
    },
    HULx: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.decorate___3yXiu{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;position:relative;overflow-x:hidden}.decorate___3yXiu .bg___1oTZX{height:3.12rem;width:3.12rem;margin-top:.5rem}.decorate___3yXiu .bg___1oTZX.prePeriod___1fKw7{background-image:none}.decorate___3yXiu .title___3cy8u{position:absolute;top:.17rem;z-index:2;font-size:.15rem;color:#ffe9cc;background-image:none}.decorate___3yXiu .stickerTab___2hhMC{width:100%;color:#ffa4a4;font-size:.165rem;margin-bottom:.1rem;overflow-x:auto}.decorate___3yXiu .stickerTab___2hhMC .list___UYOER{white-space:nowrap;margin-left:.12rem}.decorate___3yXiu .stickerTab___2hhMC .list___UYOER .tabItem___iFJSD{display:inline-block;margin-right:.1rem;width:.75rem;text-align:center;color:#fedcad;opacity:.8}.decorate___3yXiu .stickerTab___2hhMC .list___UYOER .active___1-pnh{opacity:1;font-weight:700}.decorate___3yXiu .stickerTabContent___UDqrJ{width:100%;overflow-y:auto}.decorate___3yXiu .stickerTabContent___UDqrJ .list___UYOER{white-space:nowrap}.decorate___3yXiu .stickerTabContent___UDqrJ .list___UYOER .thumb___2Pb9f{display:inline-block;width:.75rem;height:.75rem;background-color:rgba(255,183,107,.4);border-radius:.14rem;margin-right:.1rem;background-size:contain;background-repeat:no-repeat;background-position:50%}.decorate___3yXiu .footer___3y-SK{width:100%;margin-top:.3rem}.decorate___3yXiu .footer___3y-SK .buttonGroup___3Uaxz{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between;padding:0 .3rem}.decorate___3yXiu .footer___3y-SK .buttonGroup___3Uaxz .btn___1lW1N{height:.445rem;width:1.7rem;-webkit-flex:1 1;flex:1 1;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LAU4R6IlW5UAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;z-index:2;color:#e44d25;font-size:.19rem;font-weight:700;line-height:.445rem;text-align:center}.decorate___3yXiu .footer___3y-SK .buttonGroup___3Uaxz .prevButton___1LdLX{height:.22rem;width:.66rem;z-index:2;font-size:.156rem;color:#fedcad;text-align:left}.decorate___3yXiu .footer___3y-SK .buttonGroup___3Uaxz .skipButton___3zyWp{height:.17rem;width:.66rem;z-index:2;font-size:.12rem;color:#ffefd7;text-align:right}',
          "",
        ]),
        (exports.locals = {
          decorate: "decorate___3yXiu",
          bg: "bg___1oTZX",
          prePeriod: "prePeriod___1fKw7",
          title: "title___3cy8u",
          stickerTab: "stickerTab___2hhMC",
          list: "list___UYOER",
          tabItem: "tabItem___iFJSD",
          active: "active___1-pnh",
          stickerTabContent: "stickerTabContent___UDqrJ",
          thumb: "thumb___2Pb9f",
          footer: "footer___3y-SK",
          buttonGroup: "buttonGroup___3Uaxz",
          btn: "btn___1lW1N",
          prevButton: "prevButton___1LdLX",
          skipButton: "skipButton___3zyWp",
        });
    },
    IZX8: function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true }),
        (exports.isIos = r),
        (exports.isAndroid = a),
        (exports.getDeviceVersion = o),
        (exports.isAlipay = s),
        (exports.isTB = l),
        (exports.isTM = c),
        (exports.isDINGTALK = u),
        (exports.getProductName = d),
        (exports.getAppVersion = m);
      var i = __webpack_require__("foPU");
      function r() {
        return "ios" === i.os.name;
      }
      function a() {
        return "android" === i.os.name;
      }
      function o() {
        return i.os.version;
      }
      function s() {
        var e = ["AP", "AP-PD"];
        return i.app.is && e.indexOf(i.app.name) > -1;
      }
      function l() {
        var e = ["TB", "TB-PD"];
        return i.app.is && e.indexOf(i.app.name) > -1;
      }
      function c() {
        var e = ["TM", "TM-PD"];
        return i.app.is && e.indexOf(i.app.name) > -1;
      }
      function u() {
        return i.app.is && "DINGTALK" === i.app.name;
      }
      function d() {
        return i.app.name;
      }
      function m() {
        return i.app.version;
      }
    },
    IlFc: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("F7uN");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    JACm: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("Yp/L");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    L17G: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.wrapper___31FdM{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.wrapper___31FdM.enter___rUxkX .container___26SN7{opacity:0}.wrapper___31FdM.activeEnter___zNt-9 .container___26SN7{opacity:1;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.wrapper___31FdM.exit___RzCQ5 .container___26SN7{opacity:1}.wrapper___31FdM.activeExit___2jNRX .container___26SN7{opacity:0;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.wrapper___31FdM .container___26SN7{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.wrapper___31FdM .container___26SN7 .closeBtn___2q_CF{height:.32rem;width:.32rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Qn5DSqriNqAAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:2;margin-top:.1rem}.wrapper___31FdM .container___26SN7 .btn2___qbczg{font-size:.15rem;font-weight:700;text-align:center;color:#e44d25;line-height:.32rem;height:.32rem;width:1rem;position:absolute;bottom:.2rem;right:.28rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LZ8BSaGDVicAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%}.wrapper___31FdM .container___26SN7 .btn2___qbczg.disabled___2rEXT{background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*nRV0Task0xIAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%}.wrapper___31FdM .container___26SN7 .btn1___38WuO{font-size:.15rem;font-weight:700;text-align:center;color:#ffdcb6;line-height:.32rem;height:.32rem;width:1rem;position:absolute;bottom:.2rem;left:.28rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*F9lMQILpwUoAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%}.wrapper___31FdM .container___26SN7 .singleBtn___1DU8u{font-size:.15rem;font-weight:700;text-align:center;color:#e44d25;height:.5505rem;width:1.45rem;position:absolute;bottom:0;left:.675rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*_uf_SocCxYwAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%}.wrapper___31FdM .container___26SN7 .singleBtn___1DU8u span{position:relative;top:.05rem}.wrapper___31FdM .container___26SN7 .fu___2fxMD{height:1.645rem;width:1.425rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*dz1DRIzmRqIAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;z-index:3;margin:0 auto -.7rem}.wrapper___31FdM .container___26SN7 .cloud___2CJve{height:1.31rem;width:1.75rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*iLlRTbq73wUAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;z-index:3;margin:0 auto -.7rem}.wrapper___31FdM .container___26SN7 .img___lm7DL{height:3.5045rem;width:2.8rem;background-image:url("https://gw.alipayobjects.com/zos/bmw-prod/f98c467b-b8b9-4652-86ef-f4fb25c4a609.svg");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;z-index:2}',
          "",
        ]),
        (exports.locals = {
          wrapper: "wrapper___31FdM",
          enter: "enter___rUxkX",
          container: "container___26SN7",
          activeEnter: "activeEnter___zNt-9",
          exit: "exit___RzCQ5",
          activeExit: "activeExit___2jNRX",
          closeBtn: "closeBtn___2q_CF",
          btn2: "btn2___qbczg",
          disabled: "disabled___2rEXT",
          btn1: "btn1___38WuO",
          singleBtn: "singleBtn___1DU8u",
          fu: "fu___2fxMD",
          cloud: "cloud___2CJve",
          img: "img___lm7DL",
        });
    },
    NKb8: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("x3Yt");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    NWtC: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.save___3ZInv{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;position:relative;overflow-x:hidden}.save___3ZInv .boy___31kBY{height:2.765rem;width:.64rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*6LOlT4ohFQUAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:fixed;z-index:3;bottom:.2rem;right:0}.save___3ZInv .girl___3ZMWG{height:1.79rem;width:.76rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*WmqNTYo_GDwAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:fixed;z-index:3;bottom:.2rem;left:0}.save___3ZInv .bg___1Mrnc{height:3.12rem;width:3.12rem;margin-top:.52rem}.save___3ZInv .bg___1Mrnc.prePeriod___2olI3{background-image:none}.save___3ZInv .desc___vRNdr{color:#fedcad;font-size:.28rem;margin-top:.46rem;margin-bottom:.18rem}.save___3ZInv .btnGroup___sjml3{height:.38rem;width:3.12rem;z-index:2;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center;font-size:.14rem}.save___3ZInv .btnGroup___sjml3 .btn___7HtSj{color:#ffe1ab;font-size:.14rem;-webkit-flex:1 1;flex:1 1;padding:0 .2rem;border:none;background:none!important;height:.38rem;line-height:.38rem;white-space:nowrap}.save___3ZInv .btnGroup___sjml3 .btn___7HtSj.disabled___O_dAm{opacity:.5}.save___3ZInv .btnGroup___sjml3 .btn___7HtSj svg{position:relative;top:.03rem}.save___3ZInv .btnGroup___sjml3 .divider___3blJU{width:.01rem;height:.2rem;background-color:#ffe1ab}.save___3ZInv .btnGroup___sjml3.disabled___O_dAm{opacity:.5}.save___3ZInv .fucardBtn___1_Vhf{height:.445rem;width:1.7rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LAU4R6IlW5UAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;z-index:2;margin-top:.3rem;color:#e44d25;font-size:.16rem;font-weight:700;line-height:.445rem;text-align:center}.save___3ZInv .fucardBtn___1_Vhf.disabled___O_dAm{opacity:.5}.save___3ZInv .fucardDesc___1mmFF{margin-top:.13rem;font-size:.12rem;color:#ffe1ac}.save___3ZInv .saveBtn___4QtGf{height:.43rem;width:1.93rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Jp_TQY64DnMAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;z-index:2;margin-top:.1rem;position:relative;line-height:.43rem;text-align:center;font-size:.17rem;font-weight:700;color:#fff1d1;uc-perf-stat-ignore:image}.save___3ZInv .saveBtn___4QtGf.disabled___O_dAm{opacity:.6;color:#fff1d1}.save___3ZInv .print___1PH28{position:relative}.save___3ZInv .print___1PH28 .printBtn___1Vozr{height:.43rem;width:1.93rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LAU4R6IlW5UAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;z-index:2;margin-top:.45rem;position:relative;line-height:.43rem;text-align:center;font-size:.17rem;font-weight:700;color:#e44d25}.save___3ZInv .print___1PH28 .printBtn___1Vozr.disabled___O_dAm{opacity:.6}.save___3ZInv .print___1PH28 .printTip___1aL24{width:1.53rem;height:.32rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*QMsYTLSdD5IAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;z-index:2;position:absolute;top:.1rem;left:.21rem}.save___3ZInv .print___1PH28 .printTip___1aL24.disabled___O_dAm{left:.15rem;height:.32rem;width:1.63rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*29kxTpjsJD0AAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%}.save___3ZInv .orderBtn___32KYP{font-size:.12rem;color:#fedcad}.save___3ZInv .shareBtn___2AazQ{height:.445rem;width:1.7rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Jp_TQY64DnMAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;z-index:2;margin-top:.18rem;text-align:center}.save___3ZInv .shareBtn___2AazQ span{line-height:.445rem;font-weight:700;font-size:.16rem;color:#fde3d7}.save___3ZInv .shareBtn___2AazQ.disabled___O_dAm{opacity:.6}.save___3ZInv .contentWrapper___lKT4h{uc-perf-stat-ignore:image;height:2.94rem;width:3.51rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Io6CRYoNIYAAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;margin-top:.24rem}.save___3ZInv .contentWrapper___lKT4h .list___2tyPo{uc-perf-stat-ignore:image;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;margin-top:.58rem;padding:0 .06rem}.save___3ZInv .contentWrapper___lKT4h .list___2tyPo .item___WO5g4{uc-perf-stat-ignore:image;-webkit-flex:1 1;flex:1 1;padding:0 .045rem;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}.save___3ZInv .contentWrapper___lKT4h .list___2tyPo .item___WO5g4 img{uc-perf-stat-ignore:image;border-radius:.1rem;width:.99rem;height:1.32rem}.save___3ZInv .logo___3-5iQ{height:.27rem;width:1rem;margin:.18rem auto;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*XreWQ7Fw60wAAAAAAAAAAAAAARQnAQ");uc-perf-stat-ignore:image;background-size:contain;background-repeat:no-repeat;background-position:50%}.save___3ZInv .bottomText___2ibWp{color:#ffefd0;uc-perf-stat-ignore:image;font-size:.11rem;margin-bottom:.15rem}.replaying___3hIpx .rewriteBtn___r4PZ3{color:#fff4e2}.replaying___3hIpx .saveBtn___4QtGf{color:#fff4e2}',
          "",
        ]),
        (exports.locals = {
          save: "save___3ZInv",
          boy: "boy___31kBY",
          girl: "girl___3ZMWG",
          bg: "bg___1Mrnc",
          prePeriod: "prePeriod___2olI3",
          desc: "desc___vRNdr",
          btnGroup: "btnGroup___sjml3",
          btn: "btn___7HtSj",
          disabled: "disabled___O_dAm",
          divider: "divider___3blJU",
          fucardBtn: "fucardBtn___1_Vhf",
          fucardDesc: "fucardDesc___1mmFF",
          saveBtn: "saveBtn___4QtGf",
          print: "print___1PH28",
          printBtn: "printBtn___1Vozr",
          printTip: "printTip___1aL24",
          orderBtn: "orderBtn___32KYP",
          shareBtn: "shareBtn___2AazQ",
          contentWrapper: "contentWrapper___lKT4h",
          list: "list___2tyPo",
          item: "item___WO5g4",
          logo: "logo___3-5iQ",
          bottomText: "bottomText___2ibWp",
          replaying: "replaying___3hIpx",
          rewriteBtn: "rewriteBtn___r4PZ3",
        });
    },
    NfOW: function (module, exports, __webpack_require__) {
      var i = {},
        r = "-1",
        a = navigator.userAgent || "",
        o = navigator.appVersion || "",
        s = navigator.vendor || "",
        l =
          (window.external, /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/),
        c = __webpack_require__("GdIV");
      function u(e) {
        return Object.prototype.toString.call(e);
      }
      function d(e) {
        return "[object Object]" === u(e);
      }
      function m(e) {
        return "[object Function]" === u(e);
      }
      function p(e, t, n) {
        for (var i = 0, r = e.length; i < r; i++)
          if (false === t.call(e, e[i], i)) break;
      }
      var f = [
          [
            "wp",
            function (e) {
              return -1 !== e.indexOf("windows phone ")
                ? /\bwindows phone (?:os )?([0-9.]+)/
                : -1 !== e.indexOf("xblwp")
                ? /\bxblwp([0-9.]+)/
                : -1 !== e.indexOf("zunewp")
                ? /\bzunewp([0-9.]+)/
                : "windows phone";
            },
          ],
          [
            "ios",
            function (e) {
              return /\bcpu(?: iphone)? os /.test(e)
                ? /\bcpu(?: iphone)? os ([0-9._]+)/
                : -1 !== e.indexOf("iph os ")
                ? /\biph os ([0-9_]+)/
                : /\bios\b/;
            },
          ],
          ["yunos", /\baliyunos ([0-9.]+)/],
          ["android", /\bandroid[\/\- ]?([0-9.x]+)?/],
          ["linux", "linux"],
        ],
        h = [
          ["qq", /\bm?qqbrowser\/([0-9.]+)/],
          ["ie", l],
          ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
          [
            "uc",
            function (e) {
              return e.indexOf("ucbrowser/") >= 0
                ? /\bucbrowser\/([0-9.]+)/
                : /\buc\/[0-9]/.test(e)
                ? /\buc\/([0-9.]+)/
                : e.indexOf("ucweb") >= 0
                ? /\bucweb[\/]?([0-9.]+)?/
                : /\b(?:ucbrowser|uc)\b/;
            },
          ],
          [
            "android",
            function (e) {
              if (-1 !== e.indexOf("android"))
                return /\bversion\/([0-9.]+(?: beta)?)/;
            },
          ],
          [
            "safari",
            /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//,
          ],
          ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],
        ];
      function g(e, t, n) {
        var i = m(t) ? t.call(null, n) : t;
        if (!i) return null;
        var a = { name: e, version: r, codename: "" };
        "android" === e && (a.type = n.indexOf("Mobi") > -1 ? "phone" : "pad"),
          "ios" === e && (a.type = n.indexOf("iPhone") > -1 ? "phone" : "pad");
        var o = u(i);
        if (true === i) return a;
        if ("[object String]" === o) {
          if (-1 !== n.indexOf(i)) return a;
        } else {
          if (d(i))
            return i.hasOwnProperty("version") && (a.version = i.version), a;
          if (i.exec) {
            var s = i.exec(n);
            if (s)
              return (
                s.length >= 2 && s[1]
                  ? (a.version = s[1].replace(/_/g, "."))
                  : (a.version = r),
                a
              );
          }
        }
      }
      var b = { name: "na", version: r };
      function v(e, t, n, i) {
        var r = b;
        p(t, function (t) {
          var n = g(t[0], t[1], e);
          if (n) return (r = n), false;
        }),
          n.call(i, r.name, r.version);
      }
      var A = function (e) {
        e = (e || "").toLowerCase();
        var t = {};
        return (
          v(
            e,
            f,
            function (e, n) {
              var i = parseFloat(n);
              (t.os = { name: e, version: i, fullVersion: n }), (t.os[e] = i);
            },
            t
          ),
          v(
            e,
            h,
            function (e, n) {
              var i = parseFloat(n);
              (t.browser = { name: e, version: i, fullVersion: n }),
                (t.browser[e] = i);
            },
            t
          ),
          t
        );
      };
      (i = A(a + " " + o + " " + s)),
        (i.parse = A),
        (i._checkApp = c),
        (i.app = i._checkApp(a)),
        (module.exports = i);
    },
    P6ha: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".flower___1P_Qc{width:3.64rem;height:3.99rem;margin:auto;position:relative}.flower___1P_Qc .background___JUDFy{background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/b5e98358-d370-4c42-95b6-870fe8a3c7ee.svg);background-position:50%;background-repeat:no-repeat;background-size:cover;height:9.69rem;width:3.75rem;max-height:100vh;position:absolute;left:50%;top:57%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none}.flower___1P_Qc .foreground___1mdE2{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*fZL5RqNzhocAAAAAAAAAAAAAARQnAQ);background-size:cover;position:absolute;width:2.9rem;height:1.705rem;left:0;top:-.0533rem;pointer-events:none}.flower___1P_Qc .petal___3zWqu{background-position:50%;background-repeat:no-repeat;background-size:contain;position:absolute;z-index:10}.flower___1P_Qc .petal___3zWqu .fuCard___30erD{position:relative;width:.5173rem}.flower___1P_Qc .petal___3zWqu.notReceived___dWwPk{opacity:.4}.flower___1P_Qc .petal___3zWqu.pos1___3tUIq{background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/e2f77491-e1ab-4d90-992f-2497a8c5c62f.svg);width:1.2815rem;height:1.61935rem;left:1.1771rem;top:.4004rem}.flower___1P_Qc .petal___3zWqu.pos1___3tUIq .fuCard___30erD{left:.28595rem;top:.2874rem;width:.7113rem}.flower___1P_Qc .petal___3zWqu.pos2___24C7G{background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/81643230-3824-4be0-8c53-5d96833005aa.svg);width:1.435rem;height:1.12rem;left:2.095rem;top:1.465rem}.flower___1P_Qc .petal___3zWqu.pos2___24C7G .fuCard___30erD{left:.50735rem;top:.2275rem}.flower___1P_Qc .petal___3zWqu.pos3___38LUH{background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/17a5f56b-620e-46b5-afe3-d8ae5ac5aef6.svg);width:1.09rem;height:1.21rem;left:1.885rem;top:2.495rem}.flower___1P_Qc .petal___3zWqu.pos3___38LUH .fuCard___30erD{left:.2838rem;top:.30785rem}.flower___1P_Qc .petal___3zWqu.pos4___23m7y{background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/72e1c5a1-1544-4bc5-86e4-0de40dede767.svg);width:1.09rem;height:1.21rem;left:.67rem;top:2.495rem}.flower___1P_Qc .petal___3zWqu.pos4___23m7y .fuCard___30erD{left:.2889rem;top:.30785rem}.flower___1P_Qc .petal___3zWqu.pos5___2Y0mr{background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/ff8a0b2b-edda-4fa6-9452-b7731d0f8732.svg);width:1.435rem;height:1.12rem;left:.12rem;top:1.465rem}.flower___1P_Qc .petal___3zWqu.pos5___2Y0mr .fuCard___30erD{left:.40115rem;top:.2009rem}.flower___1P_Qc .receiveBlock___3rOfi{position:absolute;z-index:20;width:.9rem}.flower___1P_Qc .receiveBlock___3rOfi>div{background:rgba(159,12,49,.6);height:.226rem;border-radius:.113rem}.flower___1P_Qc .receiveBlock___3rOfi .receiver___3FUrM{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.flower___1P_Qc .receiveBlock___3rOfi .receiver___3FUrM .avatar___23ziw{display:inline-block;line-height:.226rem;margin-right:.01rem}.flower___1P_Qc .receiveBlock___3rOfi .receiver___3FUrM .text___3htbz{height:.226rem;line-height:.251rem;display:inline-block;font-size:.117rem;color:#ffe1ac;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:.62rem;min-width:.5rem;text-align:center;margin-top:-.02rem}.flower___1P_Qc .receiveBlock___3rOfi .placeholder___EjK7f{margin:auto;height:.226rem;line-height:.226rem;font-size:.117rem;color:#ffe1ac;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:.7rem;text-align:center;width:.63rem;background:rgba(159,12,49,.6);border-radius:.113rem}.flower___1P_Qc .receiveBlock___3rOfi .placeholder___EjK7f>span{display:inline-block;height:.226rem;line-height:.226rem}.flower___1P_Qc .receiveBlock___3rOfi.pos1___3tUIq{top:1.73rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.flower___1P_Qc .receiveBlock___3rOfi.pos2___24C7G{top:2.46rem;left:2.41rem}.flower___1P_Qc .receiveBlock___3rOfi.pos3___38LUH{top:3.57rem;left:1.985rem}.flower___1P_Qc .receiveBlock___3rOfi.pos4___23m7y{top:3.57rem;left:.755rem}.flower___1P_Qc .receiveBlock___3rOfi.pos5___2Y0mr{top:2.46rem;left:.33rem}.toBeReceived___29_5-{font-size:.11rem;line-height:.15rem;color:#ffe1ac;text-align:center;position:absolute;width:.35rem;height:.15rem}.toBeReceived___29_5-.pos1___3tUIq{top:1.425rem;left:1.41855rem}.toBeReceived___29_5-.pos2___24C7G{left:2.6rem;top:1.8373rem}.toBeReceived___29_5-.pos3___38LUH{left:2.44355rem;top:3.07rem}.toBeReceived___29_5-.pos4___23m7y{left:1.1862rem;top:3.30245rem}.toBeReceived___29_5-.pos5___2Y0mr{left:.5rem;top:2.26rem}",
          "",
        ]),
        (exports.locals = {
          flower: "flower___1P_Qc",
          background: "background___JUDFy",
          foreground: "foreground___1mdE2",
          petal: "petal___3zWqu",
          fuCard: "fuCard___30erD",
          notReceived: "notReceived___dWwPk",
          pos1: "pos1___3tUIq",
          pos2: "pos2___24C7G",
          pos3: "pos3___38LUH",
          pos4: "pos4___23m7y",
          pos5: "pos5___2Y0mr",
          receiveBlock: "receiveBlock___3rOfi",
          receiver: "receiver___3FUrM",
          avatar: "avatar___23ziw",
          text: "text___3htbz",
          placeholder: "placeholder___EjK7f",
          toBeReceived: "toBeReceived___29_5-",
        });
    },
    P93B: function (module, exports, __webpack_require__) {
      var i = __webpack_require__("jL/R"),
        r = __webpack_require__("zHYq"),
        a = __webpack_require__("5/UD");
      module.exports = r.extend({}, i, r, a);
    },
    PBiv: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".info___vBzMC{color:#fff1d1;font-size:.2rem;font-weight:700;text-align:center;position:relative;top:1rem}.errorMessage___M0Gc9{position:relative;text-align:center;color:#fff1d1;top:1.3rem;font-size:.13rem}.input___2m1m1{display:-webkit-flex;display:flex;width:1.75rem;height:.4rem;position:relative;top:1.2rem;left:.35rem;background-color:#d41731;border-radius:.18rem;padding:0 .18rem}.input___2m1m1 input{-webkit-flex:1 1;flex:1 1;width:100%;background:transparent;outline:none;border:none;font-size:.14rem;color:#ffc9cf}.input___2m1m1 input::-webkit-input-placeholder{color:#ffc9cf}.input___2m1m1 input:-ms-input-placeholder{color:#ffc9cf}.input___2m1m1 input::placeholder{color:#ffc9cf}.submitBtn___27W23{height:.34rem;width:1.01rem;position:absolute;bottom:.21rem;right:.28rem;border-radius:.17rem;background-color:#000;opacity:0}.submitBtn___27W23.disabled___2DYAR{opacity:.1}.cancelBtn___uM5XF{height:.36rem;width:1.1rem;position:absolute;bottom:.2rem;left:.24rem}",
          "",
        ]),
        (exports.locals = {
          info: "info___vBzMC",
          errorMessage: "errorMessage___M0Gc9",
          input: "input___2m1m1",
          submitBtn: "submitBtn___27W23",
          disabled: "disabled___2DYAR",
          cancelBtn: "cancelBtn___uM5XF",
        });
    },
    SlbL: function (module, exports) {
      module.exports = function (e) {
        var t = "undefined" !== typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" !== typeof e) return e;
        var n = t.protocol + "//" + t.host,
          i = n + t.pathname.replace(/\/[^\/]*$/, "/"),
          r = e.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (e, t) {
              var r,
                a = t
                  .trim()
                  .replace(/^"(.*)"$/, function (e, t) {
                    return t;
                  })
                  .replace(/^'(.*)'$/, function (e, t) {
                    return t;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
                ? e
                : ((r =
                    0 === a.indexOf("//")
                      ? a
                      : 0 === a.indexOf("/")
                      ? n + a
                      : i + a.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(r) + ")");
            }
          );
        return r;
      };
    },
    SrDG: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.guide___1z40d{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*PMxPS4DFeGcAAAAAAAAAAAAAARQnAQ");background-size:cover;background-repeat:no-repeat;text-align:center}.guide___1z40d.enter___idx7l .img___3VGO-{opacity:0;-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5)}.guide___1z40d.activeEnter___2jIcJ .img___3VGO-{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);transition:opacity .56s,-webkit-transform .56s;transition:opacity .56s,transform .56s;transition:opacity .56s,transform .56s,-webkit-transform .56s}.guide___1z40d.exit___1j-qi{opacity:1}.guide___1z40d.activeExit___2TSUY{opacity:0;transition:opacity .3s}.guide___1z40d .title___2RtGi{height:.53rem;width:2.35rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*3TMPTbDJxP0AAAAAAAAAAAAAARQnAQ");background-size:cover;background-repeat:no-repeat;z-index:2;position:absolute;top:1.215rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.guide___1z40d .title___2RtGi.prePeriod___y3EsA{background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*O7BZSpk8ThwAAAAAAAAAAAAAARQnAQ");background-size:cover;background-repeat:no-repeat}.guide___1z40d .img___3VGO-{height:1.97rem;width:1.97rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*CD-BQY5q4TIAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;z-index:2;position:absolute;top:3rem;left:.89rem}',
          "",
        ]),
        (exports.locals = {
          guide: "guide___1z40d",
          enter: "enter___idx7l",
          img: "img___3VGO-",
          activeEnter: "activeEnter___2jIcJ",
          exit: "exit___1j-qi",
          activeExit: "activeExit___2TSUY",
          title: "title___2RtGi",
          prePeriod: "prePeriod___y3EsA",
        });
    },
    TcMu: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".info___2-YBB{font-size:.2rem;text-align:center;color:#fff1d1;position:relative;padding:.24rem;top:1rem}",
          "",
        ]),
        (exports.locals = { info: "info___2-YBB" });
    },
    TjNA: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.info___3fRMi{padding-top:.15rem;font-size:.17rem;color:#fff0c4;text-align:center;position:absolute;width:100%;z-index:3}.info___3fRMi img{width:1.87rem;height:1.87rem;position:absolute;top:-.9rem;left:.46rem}.info___3fRMi .title___1k1DS{font-size:.21rem;font-weight:700;margin-top:1rem}.info___3fRMi .subtitle___1OMfc{font-size:.14rem;margin-top:.32rem}.info___3fRMi .spark1___2vs7-{height:.36rem;width:.36rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*tt1fSp0NG8oAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;top:-.8rem;left:.45rem}.info___3fRMi .spark2___QzOwS{height:.2rem;width:.2rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*tt1fSp0NG8oAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:absolute;z-index:1;top:.44rem;left:1.9rem}',
          "",
        ]),
        (exports.locals = {
          info: "info___3fRMi",
          title: "title___1k1DS",
          subtitle: "subtitle___1OMfc",
          spark1: "spark1___2vs7-",
          spark2: "spark2___QzOwS",
        });
    },
    UM5B: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".receiveModalContent___Y7zqv{position:relative}.receiveModalContent___Y7zqv .redPacks___1cDyC{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Ro79S662VuUAAAAAAAAAAAAAARQnAQ);width:2.25rem;height:1.75rem;position:absolute;top:1.07rem;left:.275rem}.receiveModalContent___Y7zqv .redPacks___1cDyC .fu___1Obu6{position:absolute;width:.485rem;height:.485rem;top:.875rem;left:.915rem}.receiveModalContent___Y7zqv .receiveBtn___WmYYM{position:absolute;top:3.01rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LAU4R6IlW5UAAAAAAAAAAAAAARQnAQ);width:1.36rem;height:.355rem;line-height:.355rem;font-size:.16rem;color:#e44d25;text-align:center;font-weight:700}.receiveModalContent___Y7zqv .avatar___3oK39{position:absolute;top:.215rem;left:1.23rem}.receiveModalContent___Y7zqv .nickName___34vOU{position:absolute;font-size:.11rem;color:#fff1d1;text-align:center;top:.63rem;width:1.1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.receiveModalContent___Y7zqv .guideText___3BeD6{position:absolute;top:.84rem;width:2.8rem;text-align:center;height:.2rem;line-height:.2rem;font-size:.15rem;color:#fff1d1;font-weight:700}.btnArea___17PYA{margin-top:.195rem;text-align:center}.btnArea___17PYA .fuBtn___14_zZ{height:.445rem;line-height:.445rem;width:1.99rem;display:inline-block;background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*KGV5Q7f08bAAAAAAAAAAAAAAARQnAQ);font-size:.189rem;font-weight:700;color:#e44d25;text-align:center;position:absolute}",
          "",
        ]),
        (exports.locals = {
          receiveModalContent: "receiveModalContent___Y7zqv",
          redPacks: "redPacks___1cDyC",
          fu: "fu___1Obu6",
          receiveBtn: "receiveBtn___WmYYM",
          avatar: "avatar___3oK39",
          nickName: "nickName___34vOU",
          guideText: "guideText___3BeD6",
          btnArea: "btnArea___17PYA",
          fuBtn: "fuBtn___14_zZ",
        });
    },
    WXTu: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("n2CM");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    X61V: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("Y44N");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    Y44N: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".info___35ssd{font-size:.2rem;text-align:center;color:#fff1d1;position:relative;padding:.24rem;top:1rem}",
          "",
        ]),
        (exports.locals = { info: "info___35ssd" });
    },
    YTik: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("BYGN");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    YmYf: function (module, exports, __webpack_require__) {
      (function (e) {
        function n(e, t) {
          for (var n = 0, i = e.length - 1; i >= 0; i--) {
            var r = e[i];
            "." === r
              ? e.splice(i, 1)
              : ".." === r
              ? (e.splice(i, 1), n++)
              : n && (e.splice(i, 1), n--);
          }
          if (t) for (; n--; n) e.unshift("..");
          return e;
        }
        function i(e) {
          "string" !== typeof e && (e += "");
          var t,
            n = 0,
            i = -1,
            r = true;
          for (t = e.length - 1; t >= 0; --t)
            if (47 === e.charCodeAt(t)) {
              if (!r) {
                n = t + 1;
                break;
              }
            } else -1 === i && ((r = false), (i = t + 1));
          return -1 === i ? "" : e.slice(n, i);
        }
        function r(e, t) {
          if (e.filter) return e.filter(t);
          for (var n = [], i = 0; i < e.length; i++)
            t(e[i], i, e) && n.push(e[i]);
          return n;
        }
        (exports.resolve = function () {
          for (
            var t = "", i = false, a = arguments.length - 1;
            a >= -1 && !i;
            a--
          ) {
            var o = a >= 0 ? arguments[a] : e.cwd();
            if ("string" !== typeof o)
              throw new TypeError("Arguments to path.resolve must be strings");
            o && ((t = o + "/" + t), (i = "/" === o.charAt(0)));
          }
          return (
            (t = n(
              r(t.split("/"), function (e) {
                return !!e;
              }),
              !i
            ).join("/")),
            (i ? "/" : "") + t || "."
          );
        }),
          (exports.normalize = function (e) {
            var i = exports.isAbsolute(e),
              o = "/" === a(e, -1);
            return (
              (e = n(
                r(e.split("/"), function (e) {
                  return !!e;
                }),
                !i
              ).join("/")),
              e || i || (e = "."),
              e && o && (e += "/"),
              (i ? "/" : "") + e
            );
          }),
          (exports.isAbsolute = function (e) {
            return "/" === e.charAt(0);
          }),
          (exports.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(
              r(e, function (e, t) {
                if ("string" !== typeof e)
                  throw new TypeError("Arguments to path.join must be strings");
                return e;
              }).join("/")
            );
          }),
          (exports.relative = function (e, n) {
            function i(e) {
              for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
              for (var n = e.length - 1; n >= 0; n--) if ("" !== e[n]) break;
              return t > n ? [] : e.slice(t, n - t + 1);
            }
            (e = exports.resolve(e).substr(1)),
              (n = exports.resolve(n).substr(1));
            for (
              var r = i(e.split("/")),
                a = i(n.split("/")),
                o = Math.min(r.length, a.length),
                s = o,
                l = 0;
              l < o;
              l++
            )
              if (r[l] !== a[l]) {
                s = l;
                break;
              }
            var c = [];
            for (l = s; l < r.length; l++) c.push("..");
            return (c = c.concat(a.slice(s))), c.join("/");
          }),
          (exports.sep = "/"),
          (exports.delimiter = ":"),
          (exports.dirname = function (e) {
            if (("string" !== typeof e && (e += ""), 0 === e.length))
              return ".";
            for (
              var t = e.charCodeAt(0),
                n = 47 === t,
                i = -1,
                r = true,
                a = e.length - 1;
              a >= 1;
              --a
            )
              if (((t = e.charCodeAt(a)), 47 === t)) {
                if (!r) {
                  i = a;
                  break;
                }
              } else r = false;
            return -1 === i
              ? n
                ? "/"
                : "."
              : n && 1 === i
              ? "/"
              : e.slice(0, i);
          }),
          (exports.basename = function (e, t) {
            var n = i(e);
            return (
              t &&
                n.substr(-1 * t.length) === t &&
                (n = n.substr(0, n.length - t.length)),
              n
            );
          }),
          (exports.extname = function (e) {
            "string" !== typeof e && (e += "");
            for (
              var t = -1, n = 0, i = -1, r = true, a = 0, o = e.length - 1;
              o >= 0;
              --o
            ) {
              var s = e.charCodeAt(o);
              if (47 !== s)
                -1 === i && ((r = false), (i = o + 1)),
                  46 === s
                    ? -1 === t
                      ? (t = o)
                      : 1 !== a && (a = 1)
                    : -1 !== t && (a = -1);
              else if (!r) {
                n = o + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === i ||
              0 === a ||
              (1 === a && t === i - 1 && t === n + 1)
              ? ""
              : e.slice(t, i);
          });
        var a =
          "b" === "ab".substr(-1)
            ? function (e, t, n) {
                return e.substr(t, n);
              }
            : function (e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
              };
      }.call(this, __webpack_require__("7vYp")));
    },
    "Yp/L": function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.screenReader___3aCSD{position:relative}.screenReader___3aCSD .fu___XGlzy{height:3.12rem;width:3.12rem;margin:1.815rem auto 0}.screenReader___3aCSD .bottomBar___1AlAd{text-align:center;margin-top:.76rem}.screenReader___3aCSD .bottomBar___1AlAd .receiveBtn___1t4R7{width:1.5rem;height:.4rem;background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LAU4R6IlW5UAAAAAAAAAAAAAARQnAQ);border:none;font-size:.15rem;color:#e44d25;text-align:center;font-weight:700}.screenReader___3aCSD .bottomBar___1AlAd .receiveBtn___1t4R7.disable___3vv2H{opacity:.6}.screenReader___3aCSD .text___1-Ar4{margin-top:.1rem;text-align:center;font-size:.13rem;color:#ffdca3}.screenReader___3aCSD .outText___3VjLj{margin-top:.76rem;text-align:center;font-size:.13rem;color:#ffdca3}.background___3y9DN{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*FbDJRKCYnccAAAAAAAAAAAAAARQnAQ/.webp);background-position:top;background-repeat:no-repeat;background-size:contain;width:3.75rem;height:8.12rem;position:absolute;margin-top:-.918rem}.background___3y9DN .title___2zLtB{position:absolute;top:.91rem;height:.2515rem;width:2.675rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*UxV5TqhLQq4AAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;z-index:2;pointer-events:none;text-align:center;margin-bottom:.03rem;left:50%;-webkit-transform:translateX(-1.3375rem);-ms-transform:translateX(-1.3375rem);transform:translateX(-1.3375rem);color:transparent}',
          "",
        ]),
        (exports.locals = {
          screenReader: "screenReader___3aCSD",
          fu: "fu___XGlzy",
          bottomBar: "bottomBar___1AlAd",
          receiveBtn: "receiveBtn___1t4R7",
          disable: "disable___3vv2H",
          text: "text___1-Ar4",
          outText: "outText___3VjLj",
          background: "background___3y9DN",
          title: "title___2zLtB",
        });
    },
    "a/zc": function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("pW7D");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    aFFd: function (module, exports, __webpack_require__) {
      (function (e, n) {
        n(exports);
      })(0, function (e) {
        "use strict";
        var t = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || false),
                  (i.configurable = true),
                  "value" in i && (i.writable = true),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          __assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          r = function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          },
          a = function (e, t) {
            var n = {};
            for (var i in e)
              t.indexOf(i) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]));
            return n;
          },
          o = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" !== typeof t && "function" !== typeof t)
              ? e
              : t;
          },
          s = function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          },
          l = function e() {
            t(this, e),
              (this.width = 0),
              (this.height = 0),
              (this.active = {}),
              (this.textStyle = {}),
              (this.roundRectBase64_black75 =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMzAyZGY2ZS02Y2FmLTQ5YTUtYTVkNS1jM2Q3ZTY1ZGY2YjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQwQzQ1MDRDMDRGMTFFN0FFOEE4Qzg3QzREMDc2RjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQwQzQ1MDNDMDRGMTFFN0FFOEE4Qzg3QzREMDc2RjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTMwMmRmNmUtNmNhZi00OWE1LWE1ZDUtYzNkN2U2NWRmNmI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMDJkZjZlLTZjYWYtNDlhNS1hNWQ1LWMzZDdlNjVkZjZiNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PobBPigAAAEFSURBVHjarJXNCgFRGIaP42+j/GysEW6AcBH2UrgyK3EFlNzBhLLAEvlZ2GCPeD99o6HxO99bT02n09M08533uJR9PCDDJEEYnMAOLEAfDHntIS4bWRaUQVS9zxa0WH6P2/KsQQnUQEB9Du0pAB+YgsuzkGRF9XvSwAvGVmEOVNX/IekabDT/gIpyHnJ4NL9dREBIjrzm0ZBKhoQJQWGchEFBYYiEZ0HhbZj3gr4DCZeCwhkJB4LCAQkNbhGnIYehuYIaAkJyHM2zvAF+kPpT1gbd57aZcCX9Oug90LSrL1oYgRWIfdGJVLB10DFlrxrbvAJy3N4xS3nQh59zSxt2V8BVgAEA0AAwNCQbWm0AAAAASUVORK5CYII="),
              (this.roundRectBase64_white =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBMkZEMEVCQkUxODExRTdBQ0IzRDUwNDhFRTNGQTg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBMkZEMEVDQkUxODExRTdBQ0IzRDUwNDhFRTNGQTg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEEyRkQwRTlCRTE4MTFFN0FDQjNENTA0OEVFM0ZBODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEEyRkQwRUFCRTE4MTFFN0FDQjNENTA0OEVFM0ZBODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5j8e8ZAAAA4UlEQVR42qyUXQqCQBRG1cD2UEFQq2gXVtaLq6hd6GstI6j2EQS9RlhQuIXyZfouXGH8K3TuB2cYh7kHZcZrK6WsirjAYyagB1LwBGewB0dey4eEBabgqv6H9syK9fpDB4SqeUKuLQnbyHRpTugr85DDsjHQAdzAwDLLC4wcDAsBGaUPlg5fDal49Ml3TIZCwgcJ35h0hYSpU3nbDULCRNCXkPAiKDyR8CAoPEhf7HF2KGuBt1uBj94cIoP/OKprX5sWsm1d+8qYN2iw/q8Gq+OCAOxADFIm5rWA95RqvwIMAKI2aIgZcds+AAAAAElFTkSuQmCC"),
              (this.blankBase64 =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM3RDMwODAzQUM4RTExRTc4MDNEQTZGQ0E2MjgxNEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM3RDMwODA0QUM4RTExRTc4MDNEQTZGQ0E2MjgxNEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzdEMzA4MDFBQzhFMTFFNzgwM0RBNkZDQTYyODE0QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzdEMzA4MDJBQzhFMTFFNzgwM0RBNkZDQTYyODE0QUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Iqam2AAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg==");
          },
          c = (function (e) {
            function n(e, i) {
              t(this, n);
              var r = o(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this)
              );
              return (
                (r.setting = new l()),
                (r.children = []),
                (r.parent = null),
                (r.stage = null),
                (r.initialized = false),
                (r.dragInitialized = false),
                (r.dropInitialized = false),
                (r.dirty = true),
                (r.pixelPerfect = true),
                (r.setting.width = e || 0),
                (r.setting.height = i || 0),
                r
              );
            }
            return r(n, e), n;
          })(Tiny.Container),
          u = (function (e) {
            function n() {
              t(this, n);
              var e = o(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this)
              );
              return (
                (e.interactive = true),
                e.on("pointerdown", function (e) {}),
                e.on("pointerup", function (e) {}),
                e.on("pointermove", function (e) {}),
                e.on("pointerupoutside", function (e) {}),
                e
              );
            }
            return r(n, e), n;
          })(c),
          d = (function (e) {
            function i(e) {
              t(this, i);
              var n = o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this)
              );
              Object.assign(n.setting, e);
              var r = n,
                a = n.setting.active,
                s = n.setting.text || "",
                l = n.setting.background,
                c = a.background,
                u = undefined;
              if (
                (Tiny.isUndefined(l) && (l = n.setting.blankBase64),
                Tiny.isString(l))
              ) {
                var d = Tiny.BaseTexture.from(l),
                  m = new Tiny.Texture(d);
                (l = new Tiny.Sprite(m)), Tiny.BaseTexture.removeFromCache(d);
              }
              var p = l.texture,
                f = n.getOpacity(),
                h = n.getScale().x,
                g = n.getScale().y;
              if (Tiny.isString(c)) {
                var b = Tiny.BaseTexture.from(c);
                (u = new Tiny.Texture(b)), Tiny.BaseTexture.removeFromCache(b);
              }
              n.addChild(l),
                Tiny.isString(s) && (s = new Tiny.Text(s, n.setting.textStyle)),
                n.addChild(s),
                l.texture.on("update", function () {
                  n.updatePosition(), r.emit("rendered");
                }),
                (n.text = s),
                (n.background = l),
                (n.buttonMode = true);
              var v = function () {
                  u && (l.texture = p),
                    a.opacity && r.setOpacity(f),
                    a.scale && r.setScale(h, g);
                },
                A = function (e) {
                  Tiny.isFunction(a.callback) && a.callback(e);
                };
              return (
                n.on("pointerdown", function (e) {
                  if (
                    (u && (l.texture = u),
                    a.opacity && r.setOpacity(a.opacity),
                    a.scale)
                  ) {
                    var t = a.scale;
                    Tiny.isNumber(t) && (t = { scaleX: t, scaleY: t }),
                      r.setScale(t.scaleX, t.scaleY);
                  }
                }),
                n.on("pointerup", v),
                n.on("pointermove", function (e) {}),
                n.on("pointerupoutside", v),
                (Tiny.isMobile.any && Tiny.config.viewTouched) ||
                  n.on("click", A),
                n.on("tap", A),
                n
              );
            }
            return (
              r(i, e),
              n(i, [
                {
                  key: "updatePosition",
                  value: function (e) {
                    var t = undefined,
                      n = undefined,
                      i = ~~this.setting.width,
                      r = ~~this.setting.height,
                      a = e || this.setting.textPosition;
                    (this.background.width =
                      i || this.background.texture.width),
                      (this.background.height =
                        r || this.background.texture.height);
                    var o = this.background.width - this.text.width,
                      s = this.background.height - this.text.height;
                    switch (a) {
                      case 1:
                        (t = 0), (n = 0);
                        break;
                      case 2:
                        (t = o / 2), (n = 0);
                        break;
                      case 3:
                        (t = o), (n = 0);
                        break;
                      case 4:
                        (t = 0), (n = s / 2);
                        break;
                      case 6:
                        (t = o), (n = s / 2);
                        break;
                      case 7:
                        (t = 0), (n = s);
                        break;
                      case 8:
                        (t = o / 2), (n = s);
                        break;
                      case 9:
                        (t = o), (n = s);
                        break;
                      default:
                        (t = o / 2), (n = s / 2);
                    }
                    this.text.setPosition(t, n);
                  },
                },
                {
                  key: "value",
                  get: function () {
                    return this.text.text;
                  },
                  set: function (e) {
                    this.text && ((this.text.text = e), this.updatePosition());
                  },
                },
              ]),
              i
            );
          })(u),
          m = (function (e) {
            function i(e) {
              t(this, i);
              var n = o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this)
              );
              Object.assign(n.setting, e);
              var r = n.setting.html,
                a = n.setting.defs;
              return (n.sprite = null), n._parseHTML(r, a, false), n;
            }
            return (
              r(i, e),
              n(i, [
                {
                  key: "updateHTML",
                  value: function (e, t) {
                    this._parseHTML(e, t, true);
                  },
                },
                {
                  key: "_parseHTML",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && undefined !== arguments[1]
                          ? arguments[1]
                          : "",
                      n = arguments[2],
                      i = this,
                      r = p(e),
                      a = ~~this.setting.width || r.width,
                      o = ~~this.setting.height || r.height,
                      s =
                        '\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                        a +
                        '" height="' +
                        o +
                        '">\n      <foreignObject width="100%" height="100%">\n        ' +
                        t +
                        '\n        <div xmlns="http://www.w3.org/1999/xhtml">' +
                        e +
                        "</div>\n      </foreignObject>\n    </svg>\n    ",
                      l = new Blob([s], {
                        type: "image/svg+xml;charset=utf-8",
                      }),
                      c = new FileReader();
                    (c.onload = function () {
                      var e = Tiny.Texture.fromImage(this.result);
                      n
                        ? (i.sprite.texture = e)
                        : ((i.sprite = new Tiny.Sprite(e)),
                          i.addChild(i.sprite)),
                        i.sprite.texture.on("update", function () {
                          i.emit("rendered");
                        });
                    }),
                      c.readAsDataURL(l);
                  },
                },
              ]),
              i
            );
          })(c);
        function p(e) {
          var t = document.createElement("template"),
            n = document.createElement("span");
          (t.innerHTML = e),
            document.body.appendChild(n),
            t.content
              ? n.appendChild(t.content, n.lastElementChild)
              : n.insertAdjacentHTML("beforeend", e),
            (n.style.position = "absolute"),
            (n.style.zIndex = "-1"),
            (n.style.display = "block");
          var i = f(n),
            r = { width: i[0], height: i[1] };
          return n.parentNode.removeChild(n), r;
        }
        function f(e) {
          var t = undefined,
            n = [e.offsetWidth, e.offsetHeight];
          return (
            n[0] ||
              ((t = e.style),
              "none" === t.display
                ? ((t.display = "block"),
                  (n = [e.offsetWidth, e.offsetHeight]),
                  (t.display = "none"))
                : "" === t.display &&
                  ((t.display = "block"),
                  (n = [e.offsetWidth, e.offsetHeight]),
                  (t.display = ""))),
            n
          );
        }
        var h = (function (e) {
            function s(e) {
              t(this, s);
              var n = o(
                this,
                (s.__proto__ || Object.getPrototypeOf(s)).call(this)
              );
              return (
                (n.defaultSetting = { text: "", width: 0, height: 0 }),
                (n.settings = Object.assign({}, n.defaultSetting, e || {})),
                n.render(),
                n
              );
            }
            return (
              r(s, e),
              n(s, [
                {
                  key: "render",
                  value: function () {
                    var e = this.settings,
                      t = e.text,
                      n = e.width,
                      r = e.height,
                      o =
                        (e.wordWrap,
                        e.breakWords,
                        e.wordWrapWidth,
                        a(e, [
                          "text",
                          "width",
                          "height",
                          "wordWrap",
                          "breakWords",
                          "wordWrapWidth",
                        ])),
                      s = __assign(
                        { wordWrap: !!n, breakWords: !!n, wordWrapWidth: n },
                        o
                      );
                    if (((this.text = new Tiny.Text(t, s)), r && n)) {
                      var l = new Tiny.Graphics();
                      l.lineStyle(0),
                        l.beginFill(16777215),
                        l.drawRect(0, 0, n, r),
                        l.endFill(),
                        (this.mask = l);
                    }
                    this.addChild(this.text);
                  },
                },
              ]),
              s
            );
          })(u),
          g = (function (e) {
            function i(e, n, r, a) {
              var s =
                arguments.length > 4 && undefined !== arguments[4]
                  ? arguments[4]
                  : 1;
              t(this, i);
              var l = o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this)
              );
              return (
                (l._gridTexture = e),
                (l._debugDraw = false),
                (l._textures = []),
                (l._gridSprites = []),
                (l._targetWidth = n || 0),
                (l._targetHeight = r || 0),
                (l._textureOrigFrame = new Tiny.Rectangle(
                  0,
                  0,
                  l._gridTexture.width,
                  l._gridTexture.height
                )),
                (l._scale9Grid = null),
                (l._overlapPadding = s),
                (l._inited = false),
                (l.scale9Grid = a),
                l._gridTexture.baseTexture.hasLoaded
                  ? l._onGridTextureUpdate()
                  : l._gridTexture.once("update", l._onGridTextureUpdate, l),
                l
              );
            }
            return (
              r(i, e),
              n(i, [
                {
                  key: "_onGridTextureUpdate",
                  value: function () {
                    this._init(), this._update();
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    if (!this._inited) {
                      this._inited = true;
                      for (var e = 0; e < 9; e++) {
                        var t = new Tiny.Texture(
                          this._gridTexture,
                          new Tiny.Rectangle(
                            0,
                            0,
                            this._gridTexture.width,
                            this._gridTexture.height
                          ),
                          new Tiny.Rectangle(
                            0,
                            0,
                            this._gridTexture.width,
                            this._gridTexture.height
                          ),
                          null,
                          0
                        );
                        this._textures.push(t);
                        var n = new Tiny.Sprite(t);
                        (n.visible = false),
                          this._gridSprites.push(n),
                          this.addChild(n);
                      }
                    }
                  },
                },
                {
                  key: "resize",
                  value: function (e, t) {
                    (this._targetWidth = e),
                      (this._targetHeight = t),
                      this._update(e, t);
                  },
                },
                {
                  key: "_update",
                  value: function () {
                    if (
                      this._gridTexture &&
                      this._gridTexture.baseTexture.hasLoaded &&
                      this._inited
                    ) {
                      (this.width < this._gridTexture.width ||
                        this.height < this._gridTexture.height) &&
                        console.warn(
                          "九宫格尺寸设置异常，尺寸不能小于素材尺寸"
                        );
                      for (
                        var e = Math.max(this.width, this._gridTexture.width),
                          t = Math.max(this.height, this._gridTexture.height),
                          n = this._scale9Grid,
                          i = n[0],
                          r = Math.max(0, n[2]),
                          a = Math.max(0, this._gridTexture.width - i - r),
                          o = n[1],
                          s = Math.max(0, n[3]),
                          l = Math.max(0, this._gridTexture.height - o - s),
                          c = [i, r, a],
                          u = [0, i, i + r],
                          d = [o, s, l],
                          m = [0, o, o + s],
                          p = this.overlapPadding,
                          f = 0;
                        f < 3;
                        f++
                      )
                        for (var h = 0; h < 3; h++) {
                          var g = 3 * f + h,
                            b = this._gridSprites[g],
                            v = new Tiny.Rectangle(u[h], m[f], c[h], d[f]);
                          if (v.width > 0 && v.height > 0) {
                            var A =
                                0 === h || 2 === h
                                  ? c[h]
                                  : Math.max(0, e - c[0] - c[2]),
                              _ =
                                0 === f || 2 === f
                                  ? d[f]
                                  : Math.max(0, t - d[0] - d[2]),
                              y =
                                0 === h
                                  ? 0
                                  : 1 === h
                                  ? c[0]
                                  : Math.max(0, e - c[2]),
                              w =
                                0 === f
                                  ? 0
                                  : 1 === f
                                  ? d[0]
                                  : Math.max(0, t - d[2]);
                            A > 0 && _ > 0
                              ? ((this._textures[g].frame = v),
                                b.anchor.set(0, 0),
                                (b.x = y - h * p),
                                (b.y = w - f * p),
                                (b.alpha = this._debugDraw
                                  ? 0.1 + 0.05 * g
                                  : 1),
                                (b.width = A),
                                (b.height = _),
                                (b.visible = true))
                              : (b.visible = false);
                          } else b.visible = false;
                        }
                      this.emit("resize");
                    }
                  },
                },
                {
                  key: "debug",
                  get: function () {
                    return this._debugDraw;
                  },
                  set: function (e) {
                    (this._debugDraw = e), this._update();
                  },
                },
                {
                  key: "scale9Grid",
                  get: function () {
                    return this._scale9Grid;
                  },
                  set: function (e) {
                    if (e) {
                      var t = "string" === typeof e ? e.split(",") : e;
                      if (4 !== t.length)
                        return void console.error("error scale9Grid format", e);
                      (t = t.map(function (e) {
                        return parseFloat(e);
                      })),
                        (this._scale9Grid = t);
                    } else this._scale9Grid = [0, 0, 0, 0];
                    this._update();
                  },
                },
                {
                  key: "width",
                  get: function () {
                    return this._targetWidth || this._gridTexture.width;
                  },
                  set: function (e) {
                    (this._targetWidth = e), this._update();
                  },
                },
                {
                  key: "height",
                  get: function () {
                    return this._targetHeight || this._gridTexture.height;
                  },
                  set: function (e) {
                    (this._targetHeight = e), this._update();
                  },
                },
                {
                  key: "overlapPadding",
                  get: function () {
                    return this._overlapPadding;
                  },
                  set: function (e) {
                    (this._overlapPadding = +e || 0), this._update();
                  },
                },
              ]),
              i
            );
          })(c),
          b = (function (e) {
            function i(e, n) {
              t(this, i);
              var r = o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this)
              );
              return (
                (r.stage = (e && e.stage) || null),
                (r.buttonText = n || "关闭"),
                (r.DPI = Tiny.config.dpi),
                (r.PADDING = 40 * r.DPI),
                (r.CONTENT_FONTSIZE = 16 * r.DPI),
                (r.BTN_FONTSIZE = 14 * r.DPI),
                (r.MIN_HEIGHT = 50 * r.DPI),
                (r.MAX_WIDTH = 0.8 * Tiny.WIN_SIZE.width),
                r
              );
            }
            return (
              r(i, e),
              n(i, [
                {
                  key: "render",
                  value: function (e) {
                    this.removeChildren(0, this.children.length),
                      (this.label = this.drawLabel(e)),
                      (this.roundRect = this.drawRoundRect()),
                      (this.btn = this.drawButton()),
                      this.updatePosition();
                  },
                },
                {
                  key: "drawLabel",
                  value: function (e) {
                    var t = new h({
                      text: e,
                      fill: "0x333333",
                      fontSize: this.CONTENT_FONTSIZE,
                      width: this.MAX_WIDTH - this.PADDING,
                    });
                    return this.addChild(t), t;
                  },
                },
                {
                  key: "drawRoundRect",
                  value: function () {
                    var e = this.getLocalBounds(),
                      t = e.height,
                      n =
                        (t > this.MIN_HEIGHT && t + this.PADDING) ||
                        this.MIN_HEIGHT + this.PADDING,
                      i = Tiny.BaseTexture.from(
                        this.setting.roundRectBase64_white
                      ),
                      r = new Tiny.Texture(i),
                      a = new g(r, this.MAX_WIDTH, n, [10, 10, 1, 1]);
                    return (
                      Tiny.BaseTexture.removeFromCache(i), this.addChild(a), a
                    );
                  },
                },
                {
                  key: "drawButton",
                  value: function () {
                    var e = this,
                      t = new d({
                        text: this.buttonText,
                        textStyle: {
                          fill: "0x108EE9",
                          fontSize: this.BTN_FONTSIZE,
                        },
                        active: {
                          opacity: 0.5,
                          callback: function () {
                            e.stage && e.stage.removeChild(e),
                              e.callback && e.callback();
                          },
                        },
                      });
                    return this.addChild(t), t;
                  },
                },
                {
                  key: "updatePosition",
                  value: function () {
                    var e = this.roundRect,
                      t = e.width,
                      n = e.height,
                      i = Tiny.WIN_SIZE;
                    this.btn.setPosition(
                      this.MAX_WIDTH - this.btn.width,
                      n - this.btn.height
                    ),
                      this.label.setPosition(
                        this.MAX_WIDTH / 2 - this.label.width / 2,
                        n / 2 - this.label.height / 2 - 5 * this.DPI
                      ),
                      this.setChildIndex(this.label, 1),
                      this.setPosition(
                        i.width / 2 - t / 2,
                        i.height / 2 - n / 2
                      );
                  },
                },
                {
                  key: "alert",
                  value: function (e, t) {
                    this.stage &&
                      (this.stage.removeChild(this),
                      this.render(e),
                      this.stage.addChild(this),
                      (this.callback = t));
                  },
                },
              ]),
              i
            );
          })(u),
          v = (function (e) {
            function i(e, n) {
              t(this, i);
              var r = o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this)
              );
              return (
                (r.stage = (e && e.stage) || null),
                (r.autoHideTime = n || 2e3),
                (r.DPI = Tiny.config.dpi),
                (r.PADDING = 20 * r.DPI),
                (r.CONTENT_FONTSIZE = 16 * r.DPI),
                (r.MIN_HEIGHT = 20 * r.DPI),
                (r.MAX_WIDTH = 0.4 * Tiny.WIN_SIZE.width),
                (r.MIN_WIDTH = 0.3 * Tiny.WIN_SIZE.width),
                r.bindEvent(),
                r
              );
            }
            return (
              r(i, e),
              n(i, [
                {
                  key: "bindEvent",
                  value: function () {
                    var this_ = this;
                    this.on("pointerdown", function (t) {
                      this_.stage && this_.stage.removeChild(this_);
                    });
                  },
                },
                {
                  key: "render",
                  value: function (e) {
                    this.removeChildren(0, this.children.length),
                      (this.label = this.drawLabel(e)),
                      (this.roundRect = this.drawRoundRect()),
                      this.updatePosition();
                  },
                },
                {
                  key: "drawLabel",
                  value: function (e) {
                    var t = new h({
                      text: e,
                      fill: "0xffffff",
                      fontSize: this.CONTENT_FONTSIZE,
                      width: this.MAX_WIDTH,
                    });
                    return this.addChild(t), t;
                  },
                },
                {
                  key: "drawRoundRect",
                  value: function () {
                    var e = this.getLocalBounds(),
                      t = e.width,
                      n = e.height,
                      i =
                        (n > this.MIN_HEIGHT && n + this.PADDING) ||
                        this.MIN_HEIGHT + this.PADDING,
                      r = this.PADDING;
                    t > this.MAX_WIDTH
                      ? (r += this.MAX_WIDTH)
                      : t < this.MIN_WIDTH
                      ? (r += this.MIN_WIDTH)
                      : (r += t);
                    var a = new g(
                      Tiny.Sprite.fromImage(
                        this.setting.roundRectBase64_black75
                      ).texture,
                      r,
                      i,
                      [10, 10, 1, 1],
                      0
                    );
                    return this.addChild(a), a;
                  },
                },
                {
                  key: "updatePosition",
                  value: function () {
                    var e = this.roundRect,
                      t = e.width,
                      n = e.height,
                      i = Tiny.WIN_SIZE;
                    this.label.setPosition(
                      t / 2 - this.label.width / 2,
                      n / 2 - this.label.height / 2
                    ),
                      this.setChildIndex(this.label, 1),
                      this.setPosition(
                        i.width / 2 - t / 2,
                        i.height / 2 - n / 2
                      );
                  },
                },
                {
                  key: "show",
                  value: function (e) {
                    var this_ = this;
                    if (this.stage) {
                      this.stage.removeChild(this),
                        this.render(e),
                        this.stage.addChild(this);
                      var n = new Tiny.ticker.CountDown({
                        duration: this.autoHideTime,
                        times: 1,
                      });
                      n.on("complete", function (e) {
                        this_.stage.children.length &&
                          this_.stage.removeChild(this_),
                          n.destroy();
                      }),
                        n.start();
                    }
                  },
                },
              ]),
              i
            );
          })(u),
          A = (function () {
            function e(n) {
              t(this, e), (this.matchup = n);
            }
            return (
              n(e, [
                {
                  key: "create",
                  value: function () {
                    var e =
                        arguments.length > 0 && undefined !== arguments[0]
                          ? arguments[0]
                          : "",
                      t =
                        arguments.length > 1 && undefined !== arguments[1]
                          ? arguments[1]
                          : new Tiny.Container(),
                      n = e.split(""),
                      i = this.matchup,
                      r = 0;
                    return (
                      n.forEach(function (e) {
                        var n = i[e];
                        if (n) {
                          var a = new Tiny.Sprite(i[e]),
                            o = n.width;
                          a.setPositionX(r), (r += o), t.addChild(a);
                        }
                      }),
                      (this.container = t),
                      t
                    );
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e =
                        arguments.length > 0 && undefined !== arguments[0]
                          ? arguments[0]
                          : "",
                      t = arguments[1];
                    return (
                      t ||
                        (t = this.container
                          ? this.container
                          : new Tiny.Container()),
                      t.removeChildren(),
                      this.create.call(this, e, t),
                      t
                    );
                  },
                },
              ]),
              e
            );
          })(),
          _ = (function () {
            function e(n, i, r) {
              var a =
                arguments.length > 3 && undefined !== arguments[3]
                  ? arguments[3]
                  : 30;
              t(this, e),
                (this.texts = Array.apply(null, Array(a)).map(function () {
                  return " ";
                })),
                (this.container = n),
                (this.length = a),
                (this.count = 0),
                (this.sprites = []),
                (this.textInstance = new Tiny.Text(
                  this.texts.join("\n"),
                  i,
                  r
                )),
                this.textInstance.setPositionX(Tiny.WIN_SIZE.width),
                (this.textInstance.renderable = false),
                n.addChild(this.textInstance);
            }
            return (
              n(e, [
                {
                  key: "create",
                  value: function (e) {
                    var t = this,
                      n = this.count,
                      i = this.length;
                    if (n > i)
                      throw new RangeError("你创建的个数已超过预设值：" + i);
                    this.count++, (this.texts[n] = e);
                    var r = this._generateTexture(e, n),
                      a = new Tiny.Sprite(r);
                    return (
                      this.sprites.push(a),
                      this._update(),
                      (a.textIndex = n),
                      (a.updateText = function (e) {
                        t._updateText(e, a), t._update();
                      }),
                      a
                    );
                  },
                },
                {
                  key: "_update",
                  value: function () {
                    this.sprites.forEach(function (e) {
                      e.texture._updateUvs();
                    });
                  },
                },
                {
                  key: "_generateTexture",
                  value: function (e, t) {
                    var n = this.length,
                      i = this.textInstance;
                    i.text = this.texts.join("\n");
                    var r = i.texture.baseTexture,
                      a = i.width,
                      o = i.height,
                      s = o / n,
                      l = s * t,
                      c = new Tiny.Texture(r, new Tiny.Rectangle(0, l, a, s));
                    return c;
                  },
                },
                {
                  key: "_updateText",
                  value: function (e, t) {
                    var n = t.textIndex;
                    this.texts[n] = e;
                    var i = this._generateTexture(e, n);
                    t.texture = i;
                  },
                },
              ]),
              e
            );
          })(),
          y = (function (e) {
            function i(e) {
              t(this, i);
              var n = o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this)
              );
              return (
                (e = e || {}),
                (n.itemsAlign = e.itemsAlign || "middle"),
                (n.items = []),
                n.spliceItems(0, 0, e.items),
                n
              );
            }
            return (
              r(i, e),
              n(i, [
                {
                  key: "layout",
                  value: function () {
                    var e = this,
                      t = this.maxHeight;
                    this.items.reduce(function (n, i) {
                      var r = i.displayObj,
                        a = 0,
                        o = n + (Number(i.leftMargin) || 0);
                      switch (e.itemsAlign) {
                        case "top":
                          break;
                        case "bottom":
                          a = t - r.height;
                          break;
                        default:
                          a = (t - r.height) / 2;
                          break;
                      }
                      return (
                        r.setPosition(o, a),
                        o + r.width + (Number(i.rightMargin) || 0)
                      );
                    }, 0);
                  },
                },
                {
                  key: "deleteItem",
                  value: function (e) {
                    var t = this.items.findIndex(function (t) {
                      return t.displayObj === e;
                    });
                    -1 !== t &&
                      (this.items.splice(t, 1),
                      this.removeChild(e),
                      this.layout());
                  },
                },
                {
                  key: "spliceItems",
                  value: function (e, t, n) {
                    var i,
                      r = this,
                      a = (n || []).filter(function (e) {
                        var t = e.displayObj;
                        return (
                          t instanceof Tiny.DisplayObject &&
                          (r.addChild(t), true)
                        );
                      }),
                      o = (i = this.items).splice.apply(i, [e, t].concat(s(a)));
                    o.forEach(function (e) {
                      r.removeChild(e.displayObj);
                    }),
                      this.layout();
                  },
                },
                {
                  key: "maxHeight",
                  get: function () {
                    var e = 0;
                    return (
                      this.items.forEach(function (t) {
                        t.displayObj.height > e && (e = t.displayObj.height);
                      }),
                      e
                    );
                  },
                },
              ]),
              i
            );
          })(Tiny.Container);
        (e.Button = d),
          (e.DOM = m),
          (e.Label = h),
          (e.Alert = b),
          (e.NinePatch = g),
          (e.Toast = v),
          (e.ImageNumber = A),
          (e.TiledText = _),
          (e.InlineItems = y),
          Object.defineProperty(e, "__esModule", { value: true });
      });
    },
    bBPS: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("cKY1");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    cDcd: function (module, exports) {
      module.exports = React;
    },
    cHNt: function (module, exports, __webpack_require__) {
      "use strict";
      __webpack_require__.r(exports);
      var React = __webpack_require__("cDcd"),
        React_ = __webpack_require__.n(React),
        ReactDOM = __webpack_require__("faye"),
        ReactDOM_ = __webpack_require__.n(ReactDOM);
      function loadPlugins(component) {
        var options =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : {},
          ctx = options.ctx,
          plugins = options.plugins;
        return plugins.reduce(function (component, plugin) {
          return plugin(component, ctx);
        }, component);
      }
      var plugins = [];
      function wrapper(rawComponent) {
        return function (id) {
          var ctx = window.$morpho.utils.getComponentById(id),
            wrappedComponent = loadPlugins(rawComponent, {
              ctx: ctx,
              plugins: plugins,
            });
          (ctx.rawComponent = rawComponent),
            (ctx.wrappedComponent = wrappedComponent),
            (ctx.mount = function () {
              ReactDOM_.a.render(
                React_.a.createElement(
                  wrappedComponent,
                  _objectSpread({}, ctx.schemaData, { __id: id })
                ),
                document.querySelector(
                  "#".concat(id, " .component-mounted-node")
                )
              );
            });
        };
      }
      var m = __webpack_require__("iczh"),
        extractClassNameFromArgs = __webpack_require__.n(m),
        f = __webpack_require__("ymJX"),
        className$0 = __webpack_require__.n(f);
      __webpack_require__("cVG9"),
        __webpack_require__("peOq"),
        __webpack_require__("hh8c");
      function __assign() {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          __assign.apply(this, arguments)
        );
      }
      function filterObjectProperties(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = {},
          a = Object.keys(e);
        for (i = 0; i < a.length; i++)
          (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      function defineProto(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function isOfClass(element, className) {
        return element.classList
          ? !!className && element.classList.contains(className)
          : -1 !==
              (
                " " +
                (element.className.baseVal || element.className) +
                " "
              ).indexOf(" " + className + " ");
      }
      function addClass(element, className) {
        element.classList
          ? element.classList.add(className)
          : isOfClass(element, className) ||
            ("string" === typeof element.className
              ? (element.className = element.className + " " + className)
              : element.setAttribute(
                  "class",
                  ((element.className && element.className.baseVal) || "") +
                    " " +
                    className
                ));
      }
      function trimClassName(className, removedName) {
        return className
          .replace(new RegExp("(^|\\s)" + removedName + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      function removeClass(element, className) {
        element.classList
          ? element.classList.remove(className)
          : "string" === typeof element.className
          ? (element.className = trimClassName(element.className, className))
          : element.setAttribute(
              "class",
              trimClassName(
                (element.className && element.className.baseVal) || "",
                className
              )
            );
      }
      var options = { disabled: false },
        context = React_.a.createContext(null),
        UNMOUNTED = "unmounted",
        EXITED = "exited",
        ENTERING = "entering",
        ENTERED = "entered",
        EXITING = "exiting",
        P = (function (Component) {
          function t(t, n) {
            var i;
            i = Component.call(this, t, n) || this;
            var r,
              a = n,
              o = a && !a.isMounting ? t.enter : t.appear;
            return (
              (i.appearStatus = null),
              t.in
                ? o
                  ? ((r = EXITED), (i.appearStatus = ENTERING))
                  : (r = ENTERED)
                : (r = t.unmountOnExit || t.mountOnEnter ? UNMOUNTED : EXITED),
              (i.state = { status: r }),
              (i.nextCallback = null),
              i
            );
          }
          defineProto(t, Component),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.in;
              return n && t.status === UNMOUNTED ? { status: EXITED } : null;
            });
          var app = t.prototype;
          return (
            (app.componentDidMount = function () {
              this.updateStatus(true, this.appearStatus);
            }),
            (app.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== ENTERING && n !== ENTERED && (t = ENTERING)
                  : (n !== ENTERING && n !== ENTERED) || (t = EXITING);
              }
              this.updateStatus(false, t);
            }),
            (app.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (app.getTimeouts = function () {
              var e,
                t,
                n,
                i = this.props.timeout;
              return (
                (e = t = n = i),
                null != i &&
                  "number" !== typeof i &&
                  ((e = i.exit),
                  (t = i.enter),
                  (n = undefined !== i.appear ? i.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (app.updateStatus = function (e, t) {
              undefined === e && (e = false),
                null !== t
                  ? (this.cancelNextCallback(),
                    t === ENTERING ? this.performEnter(e) : this.performExit())
                  : this.props.unmountOnExit &&
                    this.state.status === EXITED &&
                    this.setState({ status: UNMOUNTED });
            }),
            (app.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                i = this.context ? this.context.isMounting : e,
                r = this.props.nodeRef
                  ? [i]
                  : [ReactDOM_.a.findDOMNode(this), i],
                a = r[0],
                s = r[1],
                l = this.getTimeouts(),
                c = i ? l.appear : l.enter;
              (!e && !n) || options.disabled
                ? this.safeSetState({ status: ENTERED }, function () {
                    t.props.onEntered(a);
                  })
                : (this.props.onEnter(a, s),
                  this.safeSetState({ status: ENTERING }, function () {
                    t.props.onEntering(a, s),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: ENTERED }, function () {
                          t.props.onEntered(a, s);
                        });
                      });
                  }));
            }),
            (app.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                i = this.props.nodeRef
                  ? undefined
                  : ReactDOM_.a.findDOMNode(this);
              t && !options.disabled
                ? (this.props.onExit(i),
                  this.safeSetState({ status: EXITING }, function () {
                    e.props.onExiting(i),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: EXITED }, function () {
                          e.props.onExited(i);
                        });
                      });
                  }))
                : this.safeSetState({ status: EXITED }, function () {
                    e.props.onExited(i);
                  });
            }),
            (app.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (app.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (app.setNextCallback = function (e) {
              var t = this,
                n = true;
              return (
                (this.nextCallback = function (i) {
                  n && ((n = false), (t.nextCallback = null), e(i));
                }),
                (this.nextCallback.cancel = function () {
                  n = false;
                }),
                this.nextCallback
              );
            }),
            (app.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : ReactDOM_.a.findDOMNode(this),
                i = null == e && !this.props.addEndListener;
              if (n && !i) {
                if (this.props.addEndListener) {
                  var r = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    a = r[0],
                    s = r[1];
                  this.props.addEndListener(a, s);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (app.render = function () {
              var e = this.state.status;
              if (e === UNMOUNTED) return null;
              var t = this.props,
                n = t.children,
                i =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  filterObjectProperties(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return React_.a.createElement(
                context.Provider,
                { value: null },
                "function" === typeof n
                  ? n(e, i)
                  : React_.a.cloneElement(React_.a.Children.only(n), i)
              );
            }),
            t
          );
        })(React_.a.Component);
      function N() {}
      (P.contextType = context),
        (P.defaultProps = {
          in: false,
          mountOnEnter: false,
          unmountOnExit: false,
          appear: false,
          enter: true,
          exit: true,
          onEnter: N,
          onEntering: N,
          onEntered: N,
          onExit: N,
          onExiting: N,
          onExited: N,
        }),
        (P.UNMOUNTED = UNMOUNTED),
        (P.EXITED = EXITED),
        (P.ENTERING = ENTERING),
        (P.ENTERED = ENTERED),
        (P.EXITING = EXITING);
      var O = P,
        addClasses = function (element, classes) {
          return (
            element &&
            classes &&
            classes.split(" ").forEach(function (t) {
              return addClass(element, t);
            })
          );
        },
        removeClasses = function (element, classes) {
          return (
            element &&
            classes &&
            classes.split(" ").forEach(function (t) {
              return removeClass(element, t);
            })
          );
        },
        D = (function (Component) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), r = 0;
              r < n;
              r++
            )
              i[r] = arguments[r];
            return (
              (t = Component.call.apply(Component, [this].concat(i)) || this),
              (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var i = t.resolveArguments(e, n),
                  r = i[0],
                  a = i[1];
                t.removeClasses(r, "exit"),
                  t.addClass(r, a ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var i = t.resolveArguments(e, n),
                  r = i[0],
                  a = i[1],
                  o = a ? "appear" : "enter";
                t.addClass(r, o, "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var i = t.resolveArguments(e, n),
                  r = i[0],
                  a = i[1],
                  o = a ? "appear" : "enter";
                t.removeClasses(r, o),
                  t.addClass(r, o, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e),
                  i = n[0];
                t.removeClasses(i, "appear"),
                  t.removeClasses(i, "enter"),
                  t.addClass(i, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e),
                  i = n[0];
                t.addClass(i, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e),
                  i = n[0];
                t.removeClasses(i, "exit"),
                  t.addClass(i, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  i = "string" === typeof n,
                  r = i && n ? n + "-" : "",
                  a = i ? "" + r + e : n[e],
                  o = i ? a + "-active" : n[e + "Active"],
                  s = i ? a + "-done" : n[e + "Done"];
                return {
                  baseClassName: a,
                  activeClassName: o,
                  doneClassName: s,
                };
              }),
              t
            );
          }
          defineProto(t, Component);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var i = this.getClassNames(t)[n + "ClassName"],
                r = this.getClassNames("enter"),
                a = r.doneClassName;
              "appear" === t && "done" === n && a && (i += " " + a),
                "active" === n && e && e.scrollTop,
                i && ((this.appliedClasses[t][n] = i), addClasses(e, i));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                i = n.base,
                r = n.active,
                a = n.done;
              (this.appliedClasses[t] = {}),
                i && removeClasses(e, i),
                r && removeClasses(e, r),
                a && removeClasses(e, a);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, filterObjectProperties(e, ["classNames"]));
              return React_.a.createElement(
                O,
                __assign({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            t
          );
        })(React_.a.Component);
      D.defaultProps = { classNames: "" };
      var fuCardCodes = {
          JING_YE: "1001",
          AI_GUO: "1002",
          FU_QIANG: "1003",
          HE_XIE: "1004",
          YOU_SHAN: "1005",
        },
        fuCardTexts,
        G = D,
        Q = __webpack_require__("rral"),
        className$1 = __webpack_require__.n(Q),
        StatusCodes = {
          HAND_FU_ACTIVITY_STICK_CONFIG_ERROR: "51401",
          HAND_FU_IMG_NOT_EXIST: "51403",
          HAND_FU_ILLEGAL_PARAM: "51411",
          HAND_FU_PERIOD_ERROR: "51412",
          HAND_FU_DAILY_OVER_LIMIT: "51413",
          HAND_FU_DRAW_CARD: "51414",
          HAND_FU_AR_REC_TIMEOUT: "51415",
          HAND_FU_INFOSEC_ERROR: "51417",
          HAND_FU_INFOSEC_EXCEPTION_ERROR: "51418",
          HAND_FU_HAN_BEEN_DELETE: "51419",
          HAND_FU_SERVER_AR_IDENTIFY_ERROR: "51420",
          HAND_FU_TEXT_LENTH_ERROR: "51421",
          HAND_FU_FRIEND_IMAGE_QUERY_ERROR: "51423",
          HAND_FU_FRIEND_IMAGE_NOT_EXIST_ERROR: "51424",
          HAND_FU_FRIEND_ACCEPT_OVER_LIMIT: "51425",
          HAND_FU_LIMITTYPE_CONFIG_ERROR: "51426",
          HAND_FU_SAVE_EXT_EMPTY: "51427",
          HAND_FU_DRAW_RETRY_ERROR: "51428",
          HAND_FU_HAS_BEEN_DEGRADE: "51429",
          HAND_FU_STICK_NUM_OVER_LIMIT: "51430",
          HAND_FU_STICK_IMGID_NOT_FOUND: "51431",
          HAND_FU_IMG_SHARE_FINISH: "51435",
          HAND_FU_HAS_BEEN_ACCEPT: "51437",
        },
        defaultErrorHint = "福气在路上，请稍后再试",
        errorHints = {
          [StatusCodes.HAND_FU_DAILY_OVER_LIMIT]: "今日领福卡达上限",
          [StatusCodes.HAND_FU_AR_REC_TIMEOUT]:
            "写的可能不是福字，请再调整一下哦",
          [StatusCodes.HAND_FU_INFOSEC_ERROR]: "换个签名再试试",
          [StatusCodes.HAND_FU_HAN_BEEN_DELETE]: "图片已删除",
          [StatusCodes.HAND_FU_SERVER_AR_IDENTIFY_ERROR]:
            "遮挡福字过多，已经看不出是福字啦",
          [StatusCodes.HAND_FU_TEXT_LENTH_ERROR]: "最多支持6个中文汉字",
          [StatusCodes.HAND_FU_FRIEND_ACCEPT_OVER_LIMIT]:
            "领取手写福卡已达上限",
          [StatusCodes.HAND_FU_STICK_NUM_OVER_LIMIT]:
            "贴纸太多啦，请再调整一下哦",
          [StatusCodes.HAND_FU_HAS_BEEN_ACCEPT]: "自己只能领取一次",
          [StatusCodes.HAND_FU_IMG_SHARE_FINISH]: "手写福卡已经被领完",
        },
        fuErrorCodes = { UNKNOWN: "0", FU: "1", NOTFU: "2" },
        fuDetectErrorHints = {
          NotFu: "离书法家一步之遥，再调整一下试试",
          SingleFu: "一次只能写一个福字哟",
          TinyFu: "你写的福字太小了哦",
          CoverFu: "贴纸遮挡福字过多，已经看不出是福字啦",
        },
        fuDetectErrorCodes = { Fu: -1, TinyFu: 1, SingleFu: 2, NotFu: 3 },
        q = __webpack_require__("7bjG"),
        Platform = __webpack_require__.n(q);
      var pageMode = {
          Empty: -1,
          Guide: 0,
          Writing: 1,
          Decorate: 2,
          Save: 3,
          Cover: 4,
          ScreenReader: 10,
        },
        baseUrlSet = {
          dev: "http://stable.assets.alipay.net",
          test: "http://a.test.alipay.net",
          pre: "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img",
          prod: "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img",
          realPre: "https://gw-pre.alipayobjects.com/a",
        },
        baseUrl = baseUrlSet.prod,
        sourceType = "SHOUXIEFU",
        bizTypes = {
          Fu: "sxffuzi_68687779",
          FuPNG: "handwriting_word_t21",
          Complete: "sxfcomplete_68687779",
          CompletePNG: "handwriting_word_t21",
          CompletePrint: "sxfcmpng_68687779",
          Tablet: "sxfzj_68687779",
          Zhongbao: "sxfzb_68687779",
        },
        prePeriodTitles = {
          [pageMode.Empty]: "",
          [pageMode.Guide]: "",
          [pageMode.Writing]: "我家福字我来写",
          [pageMode.Decorate]: "我家福字我来写",
          [pageMode.Save]: "",
        },
        periodTitles = {
          [pageMode.Empty]: "",
          [pageMode.Guide]: "写福字得手写福卡",
          [pageMode.Writing]: "写福字得手写福卡",
          [pageMode.Decorate]: "写福字得手写福卡",
          [pageMode.ScreenReader]: "写福字得手写福卡",
          [pageMode.Save]: "",
        },
        degradeLevelCodes = { None: 0, Static: 1, Full: 2 },
        baseScreenWidth = 312,
        basePrintWidth = 800,
        memberUrl =
          "alipays://platformapi/startapp?appId=20000160&appClearTop=false&startMultApp=YES&url=/www/exchangeList.html",
        basePhotoWidth = 500,
        h5dataStorageKey = "h5data-cache-fd-sxf-h5data/index-h5data",
        benefitIdStorageKey =
          "h5data-cache-fd-sxf-h5data/index-h5data/benefit-id-new",
        base64ImagePrefix = "data:image/png;base64,",
        isChineseRegex = /^(?:[\u3400-\u4DBF一-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])$/,
        printTemplates = {
          benefitId: "${_benefitId_}",
          mediaId: "${_mediaId_}",
        },
        clickToSignText = "点击签名",
        fuCardImages = {
          [fuCardCodes.JING_YE]:
            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*0nq_QIkALsQAAAAAAAAAAAAAARQnAQ",
          [fuCardCodes.AI_GUO]:
            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*iGssQ7H0Sw8AAAAAAAAAAAAAARQnAQ",
          [fuCardCodes.HE_XIE]:
            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*YKBJT7fdpxMAAAAAAAAAAAAAARQnAQ",
          [fuCardCodes.YOU_SHAN]:
            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*N1OlSbbPh58AAAAAAAAAAAAAARQnAQ",
          [fuCardCodes.FU_QIANG]:
            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*o6w8SJxXhn4AAAAAAAAAAAAAARQnAQ",
        },
        fuCardTexts = {
          [fuCardCodes.JING_YE]: "敬业",
          [fuCardCodes.AI_GUO]: "爱国",
          [fuCardCodes.YOU_SHAN]: "友善",
          [fuCardCodes.HE_XIE]: "和谐",
          [fuCardCodes.FU_QIANG]: "富强",
        },
        remoteLogUtils = __webpack_require__("hwum"),
        Ae = __webpack_require__("GdIV"),
        _e = __webpack_require__.n(Ae),
        ye = __webpack_require__("ikyr"),
        we = __webpack_require__.n(ye),
        ke = __webpack_require__("Ec7T"),
        xe = __webpack_require__.n(ke);
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function (obj) {
            return typeof obj;
          };
        } else {
          _typeof = function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            _ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            _ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" === typeof Proxy) return true;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            true
          );
        } catch (e) {
          return false;
        }
      }
      function _assertThisInitialized(self) {
        if (undefined === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function () {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _slicedToArray(arr) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArray(arr) ||
          _unsupportedIterableToArray(arr) ||
          _nonIterableRest()
        );
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _iterableToArray(arr) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(arr))
          return Array.from(arr);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (
          n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var We = function (e) {
        return encodeURIComponent(e).replace(/'/g, "%27");
      };
      function Ze(e) {
        var t,
          n =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : "^",
          i =
            arguments.length > 2 && undefined !== arguments[2] && arguments[2],
          r = [];
        if (e instanceof Array) r = e;
        else if (e instanceof Object) {
          var a = i
            ? We
            : function (e) {
                return e;
              };
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var o = a(e[t]);
              r.push("".concat(t, "=").concat(o));
            }
        }
        return r.join(n);
      }
      function getFormattedDate() {
        var date = new Date(),
          pad = function (num) {
            return num < 10 ? "0".concat(num) : "".concat(num);
          };
        return ""
          .concat(date.getFullYear(), "-")
          .concat(pad(date.getMonth() + 1), "-")
          .concat(pad(date.getDate()), " ")
          .concat(pad(date.getHours()), ":")
          .concat(pad(date.getMinutes()), ":")
          .concat(pad(date.getSeconds()), ":")
          .concat(date.getMilliseconds());
      }
      function Je(e) {
        if (!e || "object" !== _typeof(e)) return [];
        var t = e.eventId,
          n = e.userId,
          i = e.ua,
          r = e.param4,
          a = [
            "D-AE",
            getFormattedDate(),
            "",
            "",
            "2",
            "",
            "",
            n,
            "1000",
            t,
            "H5behavior",
            "2",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            i,
            "",
            "",
            "",
            "",
            "",
            "",
          ];
        return a.push(Ze(r, "^", true)), a;
      }
      function Xe(e, t) {
        var n = e || {};
        if (!t || "object" !== _typeof(t)) return n;
        for (var i in t)
          t.hasOwnProperty(i) && undefined !== t[i] && (n[i] = t[i]);
        return n;
      }
      function Ve(e) {
        var t = e && e.userAgent;
        if (!t) return false;
        var n = _e()(t);
        return (
          ["AP", "AF", "AFW", "BK", "AM", "APHK", "KB"].indexOf(n.name) >= 0
        );
      }
      function qe(e, t, n) {
        var i = t || window.document;
        i.addEventListener
          ? i.addEventListener(e, n, true)
          : i.attachEvent
          ? i.attachEvent("on".concat(e), n)
          : (i[e] = n);
      }
      function Ke(e, t, n) {
        var i = t || window.document;
        i.removeEventListener
          ? i.removeEventListener(e, n, true)
          : i.detachEvent
          ? i.detachEvent("on".concat(e), n)
          : (i[e] = n);
      }
      function $e(e) {
        "interactive" === document.readyState ||
        "complete" === document.readyState
          ? e()
          : qe("DOMContentLoaded", document, e);
      }
      function et(e, t) {
        return (e && e.getAttribute && e.getAttribute(t)) || "";
      }
      function tt(e) {
        var t, n;
        try {
          return (t = [].slice.call(e)), t;
        } catch (r) {
          (t = []), (n = e.length);
          for (var i = 0; i < n; i++) t.push(e[i]);
          return t;
        }
      }
      function nt(e, t) {
        var n = e.id ? "".concat(e.id) : "",
          i = e.className ? "".concat(e.className) : "",
          r = e.tagName.toLowerCase(),
          a = n || i,
          o = [];
        n && o.push('[@id="'.concat(n, '"]')),
          i && o.push('[@class="'.concat(i, '"]'));
        var s = "".concat(r).concat(a ? o.join("") : "");
        return e.parentNode && e.parentNode.tagName && t - 1 !== 0
          ? "".concat(nt(e.parentNode, t - 1), ">").concat(s)
          : s;
      }
      function it() {
        var e =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : {},
          t = e.src || e.href;
        return (
          "img" === e.tagName.toLowerCase() &&
            0 === t.indexOf("data:") &&
            (t = t.split(",")[0]),
          t
        );
      }
      var rt = "data-aspm";
      function at(e) {
        for (
          var t,
            n,
            i,
            r,
            a = tt(e || document.getElementsByTagName("meta")),
            o = a.length,
            s = 0;
          s < o;
          s++
        )
          if (
            ((t = a[s]),
            (n = et(t, "name")),
            (i = et(t, "content")),
            n === rt && i)
          ) {
            r = i;
            break;
          }
        var l = {};
        return r && (l.spmAPos = r), l;
      }
      function ot() {
        var e = et(document.body, rt);
        return e;
      }
      var st = window;
      function lt(e) {
        var t = { sampleRate: 1, evaluate: null, fullSample: false };
        if ("XMLHttpRequest" in st) {
          var n = st.XMLHttpRequest.prototype,
            i = n.open;
          n.open = function (e, t) {
            this.__interfaceMonitor__ = {
              method: e,
              url: t || "",
              status_code: null,
            };
            for (var n = new Array(arguments.length), r = 0; r < n.length; ++r)
              n[r] = arguments[r];
            i.apply(this, n);
          };
          var r = n.send;
          n.send = function (n) {
            var this_ = this;
            function a() {
              if (this_.__interfaceMonitor__ && 4 === this_.readyState)
                try {
                  var r = this_.__interfaceMonitor__.url;
                  if (0 === this_.status) return;
                  var a = r.split("?")[0],
                    o = r.split("?")[1] || "",
                    s = "string" === typeof n ? n : JSON.stringify(n),
                    l = String(this_.response);
                  l.length > 2048 && (l = "[too large]");
                  var c = false;
                  if (
                    this_.status < 200 ||
                    this_.status > 299 ||
                    c ||
                    t.fullSample
                  ) {
                    if (a === e.server) return void e._warn("上报异常", s);
                    e.logRequestError({
                      type: "http",
                      status: this_.status,
                      url: a,
                      method: this_.__interfaceMonitor__.method,
                      query: o,
                      data: s,
                      response: l,
                      traceId: e.traceId || "",
                    });
                  }
                } catch (t) {
                  e._warn("接口异常上报失败:", t);
                }
            }
            if (
              "onreadystatechange" in this_ &&
              "function" === typeof this_.onreadystatechange
            ) {
              var o = this_.onreadystatechange;
              this_.onreadystatechange = function () {
                for (
                  var e = new Array(arguments.length), t = 0;
                  t < e.length;
                  ++t
                )
                  e[t] = arguments[t];
                a.apply(this, e), o.apply(this, e);
              };
            } else i.onreadystatechange = a;
            for (var s = new Array(arguments.length), l = 0; l < s.length; ++l)
              s[l] = arguments[l];
            return r.apply(this, arguments);
          };
        }
        if ("fetch" in st) {
          var a = st.fetch;
          st.fetch = function () {
            for (var n = new Array(arguments.length), i = 0; i < n.length; ++i)
              n[i] = arguments[i];
            var r = "GET";
            return (
              n[1] && n[1].method && (r = n[1].method.toUpperCase()),
              a.apply(this, n).then(function (i) {
                return new Promise(function (a) {
                  try {
                    var o = n[0],
                      s = o.split("?")[0],
                      l = o.split("?")[1] || "",
                      c = (n[1] && n[1].body) || "",
                      u = "string" === typeof c ? c : JSON.stringify(c);
                    i.clone()
                      .text()
                      .then(function (n) {
                        if (!i.ok || t.fullSample) {
                          var a = (n || "").length > 2048 ? "[too large]" : n;
                          e.logRequestError({
                            type: "http",
                            status: i.status,
                            url: s,
                            method: r,
                            query: l,
                            data: u,
                            response: a,
                            traceId: e.traceId || "",
                          });
                        }
                      })
                      .then(
                        function () {
                          a(i);
                        },
                        function () {
                          a(i);
                        }
                      );
                  } catch (e) {
                    a(i);
                  }
                });
              })
            );
          };
        }
      }
      var ct = "3.0.2",
        ut = "\x02",
        dt = document,
        mt = dt.documentElement,
        pt = (function () {
          function e() {
            var this_ = this;
            _classCallCheck(this, e),
              (this.lastAction = "0\x02\x02".concat(
                getFormattedDate(),
                "\x02"
              )),
              (this.setLastActionTimer = false),
              qe("scroll", document, function (e) {
                this_.setLastActionTimer ||
                  ((this_.setLastActionTimer = true),
                  setTimeout(function () {
                    this_.setLastActionTimer = false;
                  }, 300),
                  this_.setLastAction(e));
              }),
              qe("click", document, function (e) {
                this_.setLastAction(e);
              });
          }
          return (
            _createClass(e, [
              {
                key: "setLastAction",
                value: function (e) {
                  try {
                    var t = [],
                      n = "click" === e.type,
                      i = n ? 1 : 2;
                    t.push(i);
                    var r = n ? "".concat(nt(e.target, 5)) : "";
                    t.push(r), t.push(getFormattedDate());
                    var a = n
                      ? "".concat(e.x, "x").concat(e.y)
                      : ""
                          .concat(mt.scrollLeft + dt.body.scrollLeft, "x")
                          .concat(mt.scrollTop + dt.body.scrollTop);
                    t.push(a);
                    var o = e.target && e.target.innerText,
                      s = o ? "".concat(o.slice(0, 8)) : "";
                    t.push(s), (this.lastAction = t.join(ut));
                  } catch (e) {}
                },
              },
              {
                key: "get",
                value: function () {
                  return this.lastAction;
                },
              },
            ]),
            e
          );
        })(),
        ft = "https://mdap.alipay.com/loggw/dwcookieLogGet.do",
        ht = [
          "connectEnd",
          "connectStart",
          "decodedBodySize",
          "domComplete",
          "domContentLoadedEventEnd",
          "domContentLoadedEventStart",
          "domInteractive",
          "domainLookupEnd",
          "domainLookupStart",
          "duration",
          "encodedBodySize",
          "fetchStart",
          "loadEventEnd",
          "loadEventStart",
          "redirectCount",
          "redirectEnd",
          "redirectStart",
          "requestStart",
          "responseEnd",
          "responseStart",
          "secureConnectionStart",
          "transferSize",
          "type",
          "unloadEventEnd",
          "unloadEventStart",
          "workerStart",
          "firstPaint",
          "firstContentfulPaint",
          "firstMeaningfulPaint",
        ];
      function gt(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        var r = e
          .split("%s")
          .map(function (e, t) {
            return e && "".concat(e).concat(n[t]);
          })
          .join("");
        console.warn(r);
      }
      var bt = remoteLogUtils["b"].ErrorCodeEnums,
        vt = document,
        At = vt.documentElement,
        _t = new Date().getTime(),
        yt = (function () {
          function e(t) {
            var this_ = this;
            _classCallCheck(this, e),
              (this.server = ft),
              (this.userConfig = {}),
              (this.defaults = {}),
              (this.cOfflineVer = ""),
              (this.cAppId = ""),
              (this.cUserId = ""),
              (this.trackedLogs = []),
              (this.requiredFields = []),
              (this.isErrorHandler = false),
              (this.enabledPlugins = []),
              (this.monitorConfigInited = false),
              (this.monitorConfigFailed = false),
              (this.monitorOptions = []),
              (this.getErrorEventHandler = function (e) {
                this_.handleErrorEvent(e, function (e) {
                  this_.log(e);
                });
              }),
              (this._warn = function () {
                var e = window;
                if (
                  "object" === _typeof(e) &&
                  e.console &&
                  "function" === typeof e.console.warn &&
                  this_.debug
                ) {
                  for (
                    var t = arguments.length, i = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    i[r] = arguments[r];
                  var a = Array.prototype.slice.call(i);
                  e.console.warn.apply(null, [
                    "[Monitor Debug]".concat(a[0]),
                    a.slice(1),
                  ]);
                }
              });
            var i = Object(remoteLogUtils["c"])().process(t);
            (this.userConfig = i),
              (this.eventId = "102022"),
              (this.bmAppid = i.bmAppid),
              (this.debug = i.debug || false),
              (this.autoCapture = i.autoCapture),
              (this.disableInterface = i.disableInterface),
              (this.lastActionComp = new pt()),
              (this.oncePerSession = i.oncePerSession),
              (this.beforeLog = i.beforeLog),
              (this.defaults = i.defaults || {}),
              (this.requiredFields = i.requiredFields || []),
              (this.enabledPlugins = i.plugins);
          }
          return (
            _createClass(e, [
              {
                key: "handleErrorEvent",
                value: function (e, t) {
                  try {
                    var n = e.target || e.srcElement;
                    if (!n) return;
                    var i = e.type;
                    if ("unhandledrejection" === i) {
                      var r = e.reason || {};
                      if (r.message && r.stack)
                        this.logError(r, { code: bt.PROMISEREJECTION });
                      else {
                        var a =
                          r.message ||
                          ("string" === typeof r ? r : JSON.stringify(r));
                        t({ code: bt.PROMISEREJECTION, msg: a });
                      }
                      return;
                    }
                    var o = n instanceof HTMLElement;
                    if (o) {
                      var s = it(n),
                        l = n.tagName.toLowerCase(),
                        c = n.alt,
                        u = undefined === c ? "" : c;
                      return void t({
                        code: bt.ASSETS,
                        msg: s || "",
                        s1: l,
                        s2: nt(n, 5),
                        s3: u,
                      });
                    }
                    if (e.error && e.error.stack)
                      return void this.logError(e.error);
                    t({ code: bt.JS, msg: e.message, s3: 0 });
                  } catch (e) {
                    gt("handleErrorOptions failed: %s", e.message);
                  }
                },
              },
              {
                key: "handlePreCapture",
                value: function () {
                  var e = this,
                    t = window.g_monitor;
                  if (t) {
                    var n = t.listener,
                      i = undefined === n ? {} : n,
                      r = t.events,
                      a = undefined === r ? [] : r;
                    for (var o in i)
                      i.hasOwnProperty(o) && (Ke(o, window, i[o]), delete i[o]);
                    for (var s = 0; s < a.length; s++)
                      this.handleErrorEvent(a[s], function (t) {
                        e.log(t);
                      });
                    t.events = [];
                  }
                },
              },
              {
                key: "register",
                value: function () {
                  if (this.autoCapture)
                    try {
                      if (!vt)
                        return (
                          gt("当前为非 web 环境，不支持报错监听与插件使用"),
                          this
                        );
                      if (this.isErrorHandler) return void gt("错误事件已监听");
                      qe("error", window, this.getErrorEventHandler),
                        qe(
                          "unhandledrejection",
                          window,
                          this.getErrorEventHandler
                        ),
                        (this.isErrorHandler = true);
                    } catch (e) {
                      gt("异常监听事件注册失败: %s", e.message);
                    }
                  else gt("已通过 autoCapture 禁用异常捕获");
                },
              },
              {
                key: "unregister",
                value: function () {
                  Ke("error", window, this.getErrorEventHandler),
                    Ke("unhandledrejection", window, this.getErrorEventHandler),
                    (this.isErrorHandler = false);
                },
              },
              {
                key: "isBridgeReport",
                value: function () {
                  return !!window.AlipayJSBridge;
                },
              },
              {
                key: "getNetwork",
                value: function () {
                  var e = navigator;
                  return e && e.connection && e.connection.effectiveType
                    ? e.connection.effectiveType
                    : "";
                },
              },
              {
                key: "parseParam4",
                value: function (e) {
                  if (!e || "object" !== _typeof(e)) return null;
                  var t = _objectSpread(_objectSpread({}, this.defaults), e);
                  (e.bmAppid || this.bmAppid) &&
                    (t.bm_appid = e.bmAppid || this.bmAppid),
                    this.userConfig.sprintId &&
                      (t.bm_sid = this.userConfig.sprintId),
                    this.userConfig.env && (t.env = this.userConfig.env),
                    this.userConfig.yuyanId &&
                      (t.yuyan_id = this.userConfig.yuyanId),
                    (t.monitor_ver = "websdk:".concat(ct)),
                    (t.title = t.title || document.title),
                    (t.dom_cnt = document.getElementsByTagName("*").length),
                    (t.delay = new Date().getTime() - _t),
                    (t.scroll_top = At.scrollTop + vt.body.scrollTop),
                    (t.content_height = Math.max(
                      At.clientHeight,
                      At.offsetHeight,
                      At.scrollHeight
                    )),
                    (t.last_action = this.lastActionComp.get()),
                    (t.network = this.getNetwork()),
                    (t.s_c = !this.monitorConfigFailed);
                  var n =
                    this.userConfig.spmAPos && this.userConfig.spmBPos
                      ? ""
                          .concat(this.userConfig.spmAPos, ".")
                          .concat(this.userConfig.spmBPos)
                      : "";
                  if (
                    (n && (t.spmId = n),
                    (t.fullURL = t.fullURL || location.href),
                    this.cOfflineVer && (t.c_offline_ver = this.cOfflineVer),
                    this.cAppId && (t.c_app_id = this.cAppId),
                    "object" === _typeof(t))
                  ) {
                    var i = t;
                    for (var r in i)
                      if (i.hasOwnProperty(r) && "string" === typeof i[r]) {
                        var a = i[r].replace(/\s+/g, " ");
                        i[r] =
                          "fullURL" === r && a.length > 300
                            ? a.slice(0, 300)
                            : a;
                      }
                  }
                  return t;
                },
              },
              {
                key: "sendData",
                value: function (e) {
                  var t = this,
                    n = encodeURIComponent;
                  return (
                    this.debug && console.log("send", e),
                    fetch(this.server, {
                      method: "POST",
                      headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                      },
                      body: "data="
                        .concat(n(e.join()), "&time=")
                        .concat(new Date().getTime()),
                    }).catch(function () {
                      try {
                        var i = new Image();
                        i.src = ""
                          .concat(t.server, "?data=")
                          .concat(n(e.join()), "&time=")
                          .concat(new Date().getTime());
                      } catch (e) {
                        gt("通过 IMG 上报失败: %s", e);
                      }
                    })
                  );
                },
              },
              {
                key: "bridgeLog",
                value: function (e) {
                  var t =
                    arguments.length > 1 && undefined !== arguments[1]
                      ? arguments[1]
                      : "L";
                  if (window.AlipayJSBridge) {
                    var n = e || {};
                    window.AlipayJSBridge.call("handleLoggingAction", {
                      actionType: "reportEvent",
                      params: {
                        eventId: this.eventId,
                        bizType: "yuyanmonitor".concat(t.toLowerCase()),
                        extData: n,
                      },
                    });
                  } else gt("非容器环境，不能调用 handleLoggingAction");
                },
              },
            ]),
            e
          );
        })();
      function wt(e) {
        try {
          var t, n;
          return null === (t = window) || undefined === t
            ? undefined
            : null === (n = t.localStorage) || undefined === n
            ? undefined
            : n.getItem(e);
        } catch (e) {
          return gt("从 localStorage 中获取配置失败"), null;
        }
      }
      function kt(e, t) {
        try {
          var n, i;
          return null === (n = window) || undefined === n
            ? undefined
            : null === (i = n.localStorage) || undefined === i
            ? undefined
            : i.setItem(e, t);
        } catch (e) {
          return gt("写入 localStorage 失败"), null;
        }
      }
      var xt = "_YUYAN_COOKIE_monitor_config_next",
        Et = 9e5,
        St = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "getStorageInfoMap",
                value: function () {
                  var e = wt(xt) || "{}";
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    return {};
                  }
                },
              },
              {
                key: "getMonitorConfig",
                value: function (e) {
                  var t = this.getStorageInfoMap(),
                    n = t[e];
                  return !n || n.expire < new Date().valueOf()
                    ? null
                    : n.config;
                },
              },
              {
                key: "saveMonitorConfig",
                value: function (e, t) {
                  var n = this.getStorageInfoMap(),
                    i = { config: t, expire: new Date().valueOf() + Et };
                  (n[e] = i), kt(xt, JSON.stringify(n));
                },
              },
            ]),
            e
          );
        })(),
        Tt = (function () {
          function e() {
            _classCallCheck(this, e), (this.configStorage = new St());
          }
          return (
            _createClass(e, [
              {
                key: "apply",
                value: function (e) {
                  this.monitor = e;
                  var t = e.bmAppid,
                    n = e.userConfig.yuyanId,
                    i = t || n;
                  this.enhance(e, i);
                  try {
                    this.fetchMonitorConfig(i);
                  } catch (e) {
                    this.monitor.onFetchConfigError(e);
                  }
                },
              },
              {
                key: "enhance",
                value: function (e, t) {
                  var this_ = this;
                  Object(remoteLogUtils["e"])(e, {
                    initMonitorConfigs: function (i) {
                      e.setMonitorConfigs(i),
                        this_.configStorage.saveMonitorConfig(t, i);
                    },
                    setMonitorConfigs: function (t) {
                      var n = t.monitors;
                      (e.monitorOptions = n),
                        (e.monitorConfigInited = true),
                        e.onMonitorConfigInited();
                    },
                  });
                },
              },
              {
                key: "fetchMonitorConfig",
                value: function (e) {
                  var t = this.monitor,
                    n = t.setMonitorConfigs,
                    i = (t.userConfig, this.configStorage.getMonitorConfig(e));
                  if (i) return n(i);
                  this.fetchRemoteConfigJson(e);
                },
              },
              {
                key: "fetchRemoteConfigJson",
                value: function (e) {
                  var this_ = this;
                  fetch(
                    "https://render.alipay.com/p/alertserver/".concat(
                      e,
                      "_config/index.json"
                    ),
                    { redirect: "follow" }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      this_.monitor.initMonitorConfigs(e);
                    })
                    .catch(function (e) {
                      this_.monitor.onFetchConfigError(e);
                    });
                },
              },
            ]),
            e
          );
        })(),
        Ct = function (e) {
          if ("object" !== _typeof(e)) return [];
          var t = e.getEntriesByType("paint"),
            n = {};
          if (t.length) {
            var i = (
                t.filter(function (e) {
                  return "first-paint" === e.name;
                })[0] || {}
              ).startTime,
              r = (
                t.filter(function (e) {
                  return "first-contentful-paint" === e.name;
                })[0] || {}
              ).startTime;
            (n.firstPaint = parseFloat(i)),
              (n.firstContentfulPaint = parseFloat(r));
          }
          return n;
        };
      function It(e, t) {
        if ("object" !== _typeof(e) || "function" !== typeof e.getEntriesByType)
          return null;
        var n = e.getEntriesByType("navigation");
        if (!n || 0 === n.length) return null;
        var i = n[0],
          r = Ct(e),
          a = { firstMeaningfulPaint: t };
        return ht.reduce(function (e, t) {
          var n = i[t] || r[t] || a[t];
          return null == n || ("number" === typeof n && isNaN(n))
            ? _objectSpread(
                _objectSpread({}, e),
                {},
                _defineProperty({}, "".concat(t), 0)
              )
            : _objectSpread(
                _objectSpread({}, e),
                {},
                _defineProperty({}, "".concat(t), n)
              );
        }, {});
      }
      function Pt(e, t) {
        return e
          ? Nt({
              m1: t.duration || parseFloat(e.loadEventEnd) - t.startTime,
              m2: parseFloat(e.domContentLoadedEventStart) - t.startTime,
              m3: parseFloat(e.domComplete) - t.startTime,
              m4: e.firstPaint,
              m5: e.firstContentfulPaint,
              m6: e.firstMeaningfulPaint,
              m7: parseFloat(e.redirectEnd) - parseFloat(e.redirectStart),
              m8: parseFloat(e.domainLookupStart) - parseFloat(e.fetchStart),
              m9:
                parseFloat(e.domainLookupEnd) - parseFloat(e.domainLookupStart),
              m10: parseFloat(e.connectEnd) - parseFloat(e.connectStart),
              m11:
                parseFloat(e.connectEnd) - parseFloat(e.secureConnectionStart),
              m12: parseFloat(e.responseStart) - parseFloat(e.requestStart),
              m13: parseFloat(e.responseEnd) - parseFloat(e.responseStart),
              m14: parseFloat(e.domComplete) - parseFloat(e.responseEnd),
              m15: parseFloat(e.loadEventEnd) - parseFloat(e.responseEnd),
              m16: parseFloat(e.domInteractive) - t.startTime,
              m17:
                parseFloat(e.domContentLoadedEventEnd) -
                parseFloat(e.domContentLoadedEventStart),
              m18: parseFloat(e.domComplete) - t.startTime,
            })
          : {};
      }
      function Nt(e) {
        var t = {};
        for (var n in e)
          e.hasOwnProperty(n) &&
            (isNaN(e[n])
              ? (t[n] = 0)
              : (t[n] = Math.round(
                  Math.min(Math.max(0, parseFloat(e[n])), 3e5)
                )));
        return t;
      }
      var Ot = null,
        Rt = 500,
        Bt = "32767";
      function Dt(e, t) {
        if ("object" === _typeof(t) && !e.metricsSent)
          try {
            var n,
              i,
              r = t.getEntriesByType("navigation")[0],
              a = It(t, Ot),
              o = {
                d1:
                  (null === (n = navigator) || undefined === n
                    ? undefined
                    : null === (i = n.connection) || undefined === i
                    ? undefined
                    : i.effectiveType) || "-",
                d2: 0 === r.duration ? 1 : 0,
                d3: document.hidden ? 0 : 1,
              },
              s = { c1: document.title };
            e.log(
              _objectSpread(
                _objectSpread(
                  _objectSpread({ code: Bt, msg: location.href }, Pt(a, r)),
                  o
                ),
                s
              )
            ),
              (e.metricsSent = true);
          } catch (e) {}
      }
      var zt = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: "apply",
                value: function (e) {
                  if (((this.monitor = e), "object" === _typeof(we.a)))
                    try {
                      xe()(function (e) {
                        Ot = e;
                      }),
                        "function" ===
                          typeof we.a.setResourceTimingBufferSize &&
                          we.a.setResourceTimingBufferSize(Rt);
                      var t = navigator.userAgent,
                        n = !!t.match(/iPhone|iPad|iPod/i),
                        i = n ? "pagehide" : "beforeunload";
                      window.addEventListener(i, Dt.bind(null, e, we.a));
                    } catch (e) {}
                },
              },
            ]),
            e
          );
        })(),
        Mt = (function () {
          function e() {
            var this_ = this;
            _classCallCheck(this, e),
              (this.injectedLog = function (e) {
                var n;
                return null === (n = this_.monitor) || undefined === n
                  ? undefined
                  : n.log.call(this_.monitor, e);
              });
          }
          return (
            _createClass(e, [
              {
                key: "apply",
                value: function (e) {
                  var this_ = this;
                  (this.monitor = e),
                    $e(function () {
                      var e = window,
                        n = e.Tracert;
                      if (n) {
                        var i = {
                          log: function (e) {
                            var i =
                                (null === e || undefined === e
                                  ? undefined
                                  : e.bmAppId) ||
                                (null === e || undefined === e
                                  ? undefined
                                  : e.bm_appid) ||
                                e._bmAppId,
                              r = n._bmAppId;
                            return (
                              gt(
                                '"Tracert.log" 已不建议使用。请迁移到 @alipay/yuyan-monitor-web。'
                              ),
                              this_.injectedLog(
                                _objectSpread(
                                  _objectSpread({}, e),
                                  {},
                                  { bmAppid: i || r }
                                )
                              )
                            );
                          },
                        };
                        n.call("after", "start", function () {
                          n.call("set", _objectSpread({}, i));
                        }),
                          n.call("set", _objectSpread({}, i));
                      }
                    });
                },
              },
            ]),
            e
          );
        })(),
        jt = "https://tracert.alipay.com/cross.html",
        Ft = (function () {
          function e() {
            _classCallCheck(this, e), (this._iframe = null);
          }
          return (
            _createClass(e, [
              {
                key: "canLoadIframe",
                value: function () {
                  var e = window;
                  return (
                    "undefined" === typeof e.WeixinJSBridge &&
                    "undefined" === typeof e.QQJSBridge &&
                    (!e.navigator ||
                      !(
                        e.navigator.userAgent
                          .toLowerCase()
                          .indexOf("micromessenger") > -1 ||
                        e.navigator.userAgent.toLowerCase().indexOf("qq") >
                          -1 ||
                        e.navigator.userAgent
                          .toLowerCase()
                          .indexOf("toutiaomicroapp") > -1 ||
                        "undefined" !== typeof e.navigator.wxuserAgent
                      ))
                  );
                },
              },
              {
                key: "initIframe",
                value: function () {
                  if (!this.canLoadIframe()) return null;
                  if (this._iframe) return this._iframe;
                  var e = document.createElement("iframe");
                  (e.style.width = "1px"),
                    (e.style.height = "1px"),
                    (e.style.position = "absolute"),
                    (e.style.left = "-100px"),
                    (e.style.bottom = "-100px"),
                    (e.style.width = "-100px"),
                    e.setAttribute("src", jt),
                    (e.onload = function () {
                      e.style.display = "none";
                    });
                  try {
                    document.body.appendChild(e);
                  } catch (e) {}
                  return (this._iframe = e), e;
                },
              },
            ]),
            e
          );
        })(),
        Ut = new Ft(),
        Lt = "_YUYAN_COOKIE_bucUserId";
      function Gt(e, t, n) {
        e.postMessage(JSON.stringify({ type: t, content: n }), "*");
      }
      var Qt = (function () {
          function e() {
            _classCallCheck(this, e),
              (this.iframe = null),
              (this.iframeLoaded = false),
              (this.pending = false),
              (this.queue = []),
              (this.cachedQuery = []);
          }
          return (
            _createClass(e, [
              {
                key: "apply",
                value: function (e) {
                  var this_ = this;
                  (this.monitor = e),
                    $e(function () {
                      var e, n;
                      (null === (e = this_.monitor) || undefined === e
                        ? undefined
                        : null === (n = e.userConfig) || undefined === n
                        ? undefined
                        : n.userId) ||
                        (window.addEventListener(
                          "message",
                          function (e) {
                            return this_.receive(e);
                          },
                          false
                        ),
                        (this_.pending = true),
                        (this_.iframe = Ut.initIframe()),
                        this_.getUserIdForMonitor(function (e) {
                          var n, i, r;
                          e &&
                            !(null === (n = this_.monitor) || undefined === n
                              ? undefined
                              : null === (i = n.userConfig) || undefined === i
                              ? undefined
                              : i.userId) &&
                            (null === (r = this_.monitor) ||
                              undefined === r ||
                              r.config({ userId: e }));
                        }));
                    });
                },
              },
              {
                key: "getUserIdForMonitor",
                value: function (e) {
                  var t = this,
                    n = wt(Lt);
                  if (n)
                    return e(n), void gt("从 localstorge 中获取 bucId: :%s", n);
                  this.getBucUserId(function () {
                    var n = t.userId;
                    n && kt(Lt, n), e(t.userId || "");
                  });
                },
              },
              {
                key: "receive",
                value: function (e) {
                  var t;
                  if (e.data) {
                    try {
                      t = JSON.parse(e.data);
                    } catch (e) {
                      return;
                    }
                    if (t.type)
                      switch (t.type) {
                        case "getBucUserId":
                          (this.userId = t.content),
                            (this.pending = false),
                            gt("从跨域 storage 获取 bucId: :%s", this.userId);
                          while (this.queue.length) {
                            var n = this.queue[0];
                            n(t.content), this.queue.shift();
                          }
                          break;
                        case "iframOnload":
                          this.iframeOnLoad();
                          break;
                      }
                  }
                },
              },
              {
                key: "iframeOnLoad",
                value: function () {
                  (this.iframeLoaded = true), this.executeCachedQuery();
                },
              },
              {
                key: "executeCachedQuery",
                value: function () {
                  if (this.cachedQuery.length)
                    for (var e = 0; e < this.cachedQuery.length; e++) {
                      var t = _slicedToArray(this.cachedQuery[e]),
                        n = t[0],
                        i = t.slice(1);
                      this[n].apply(this, i);
                    }
                },
              },
              {
                key: "getBucUserId",
                value: function (e) {
                  this.iframeLoaded
                    ? (this.queue.push(e),
                      this.pending ||
                        (Gt(this.iframe.contentWindow, "getBucUserId"),
                        (this.pending = true)))
                    : this.cachedQuery.push(["getBucUserId", e]);
                },
              },
            ]),
            e
          );
        })(),
        Ht = {};
      function Wt(e, t) {
        if (Ht[e]) return t(null, true);
        fetch(
          "https://dataservice.alipayobjects.com/alertserver/hash/".concat(e)
        )
          .then(function (n) {
            return 200 === n.status || 304 === n.status
              ? ((Ht[e] = true), t(null, true))
              : t(null, false);
          })
          .catch(function (e) {
            return t(e, false);
          });
      }
      var Zt = remoteLogUtils["b"].ErrorCodeEnums,
        Yt = window,
        Jt = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && undefined !== arguments[0]
                  ? arguments[0]
                  : { appType: "H5" };
            return (
              _classCallCheck(this, n),
              (e = t.call(this, i)),
              (e.jsBridgeReady = false),
              (e.itemCache = []),
              (e.monitorOptionMap = {}),
              (e.UserConfig = {}),
              (e.destroyed = false),
              -1 !== e.enabledPlugins.indexOf("tracert") &&
                new Mt().apply(_assertThisInitialized(e)),
              new Tt().apply(_assertThisInitialized(e)),
              -1 !== e.enabledPlugins.indexOf("performance") &&
                new zt().apply(_assertThisInitialized(e)),
              -1 !== e.enabledPlugins.indexOf("buc") &&
                new Qt().apply(_assertThisInitialized(e)),
              (e.isAlipay = Ve(Yt.navigator)),
              e.initJsBridge(),
              e.fetchConfig(),
              e.handlePreCapture(),
              e.register(),
              e
            );
          }
          return (
            _createClass(n, [
              {
                key: "log",
                value: function () {
                  var e =
                      arguments.length > 0 && undefined !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = arguments.length > 1 ? arguments[1] : undefined;
                  if (e) {
                    var n = this.isAlipay && !this.jsBridgeReady;
                    !n &&
                    this.monitorConfigInited &&
                    Object(remoteLogUtils["a"])(
                      this.userConfig,
                      this.requiredFields,
                      this._warn.bind(this)
                    )
                      ? this._log(e, t)
                      : this.itemCache.push([e, t]);
                  }
                },
              },
              {
                key: "logError",
                value: function (e, t) {
                  Object(remoteLogUtils["d"])(
                    e,
                    Wt,
                    { log: this.log.bind(this), _warn: this._warn.bind(this) },
                    t
                  );
                },
              },
              {
                key: "logRequestError",
                value: function () {
                  var e =
                    arguments.length > 0 && undefined !== arguments[0]
                      ? arguments[0]
                      : {};
                  try {
                    if (!e) return;
                    var t = e.type,
                      n = undefined === t ? "http" : t;
                    if ("http" === n) {
                      var i = e.status,
                        r = e.url,
                        a = e.method,
                        o = e.query,
                        s = e.data,
                        l = e.response,
                        c = e.traceId,
                        u = e.code,
                        d = "".concat(a.toUpperCase(), " ").concat(r),
                        m = { code: u || 2, msg: d };
                      i && (m.s1 = i),
                        o && (m.s2 = o),
                        s && (m.s3 = s),
                        l && (m.s4 = l),
                        c && (m.s5 = c),
                        this.log(m);
                    }
                  } catch (e) {
                    gt("接口异常上报失败:%s", e);
                  }
                },
              },
              {
                key: "config",
                value: function (e) {
                  e &&
                    "object" === _typeof(e) &&
                    (Object(remoteLogUtils["g"])(this.userConfig, e),
                    Object(remoteLogUtils["a"])(
                      this.userConfig,
                      this.requiredFields,
                      this._warn.bind(this)
                    ) && this.logCache());
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.unregister(), (this.destroyed = true);
                },
              },
              {
                key: "logCache",
                value: function () {
                  for (var e = this.itemCache, t = 0; t < e.length; t++) {
                    var n = e[t];
                    Array.isArray(n) && this._log(n[0], n[1]);
                  }
                  this.itemCache = [];
                },
              },
              {
                key: "_log",
                value: function (e, t) {
                  var n = Object(remoteLogUtils["f"])(e, this);
                  if (n) {
                    this.getSpmInfo();
                    var i = this.parseParam4(n),
                      r = !!(null === t || undefined === t
                        ? undefined
                        : t.forceHttpReport);
                    if (r || !this.isBridgeReport()) {
                      var a =
                        n.roleId ||
                        this.userConfig.userId ||
                        this.cUserId ||
                        "";
                      delete n.roleId;
                      var o = navigator.userAgent
                          ? navigator.userAgent.replace(/,/g, "%2C")
                          : "",
                        s = Je({
                          eventId: this.eventId,
                          userId: a,
                          param4: i,
                          ua: o,
                        });
                      if (!s.length) return;
                      return this.sendData(s);
                    }
                    i._ua = navigator.userAgent
                      ? navigator.userAgent.replace(/,/g, "%2C")
                      : "";
                    for (var l = 0, c = Object.keys(i); l < c.length; l++) {
                      var u = c[l];
                      i[u] = We(i[u]);
                    }
                    this.bridgeLog(i, n.level);
                  }
                },
              },
              {
                key: "getSpmInfo",
                value: function () {
                  var e = window._to || {};
                  if (!this.userConfig.spmAPos) {
                    var t = at().spmAPos || e.spmAPos;
                    t && (this.userConfig.spmAPos = t);
                  }
                  if (!this.userConfig.spmBPos) {
                    var n = ot() || e.spmBPos;
                    n && (this.userConfig.spmBPos = n);
                  }
                },
              },
              {
                key: "initJsBridge",
                value: function () {
                  var this_ = this;
                  document.addEventListener("AlipayJSBridgeReady", function () {
                    this_.onJsBridgeReady();
                  });
                },
              },
              {
                key: "getInfoFromBridge",
                value: function (e) {
                  var t = this,
                    n = 2;
                  function i() {
                    n--, 0 === n && e();
                  }
                  try {
                    var r = Yt.AlipayJSBridge;
                    r.call("getUserInfo", function (e) {
                      (t.cUserId = e.userId), i();
                    }),
                      r.call("getStartupParams", function (e) {
                        (t.cOfflineVer = e.version),
                          e.version && (t.cAppId = e.appId),
                          i();
                      });
                  } catch (t) {
                    e(), gt("调用容器接口获取信息失败:%s", t.message);
                  }
                },
              },
              {
                key: "onJsBridgeReady",
                value: function () {
                  var e = this,
                    t = function () {
                      (e.jsBridgeReady = true),
                        e.monitorConfigInited && e.logCache();
                    };
                  this.getInfoFromBridge(t);
                },
              },
              {
                key: "set",
                value: function () {
                  var e =
                    arguments.length > 0 && undefined !== arguments[0]
                      ? arguments[0]
                      : {};
                  Xe(this, e);
                },
              },
              { key: "setMonitorConfigs", value: function () {} },
              { key: "initMonitorConfigs", value: function (e) {} },
              { key: "fetchConfig", value: function () {} },
              { key: "fetchConfigByRequest", value: function () {} },
              { key: "fetchConfigByJSBridge", value: function () {} },
              {
                key: "onMonitorConfigInited",
                value: function () {
                  var this_ = this;
                  this.monitorOptions &&
                    this.monitorOptions.forEach(function (t) {
                      t && t.code && (this_.monitorOptionMap[t.code] = t);
                    });
                  var t = this.monitorOptionMap[Zt.REQUEST];
                  if (!this.disableInterface && t) {
                    var n = t.code,
                      i = t.isActive,
                      r = t.isDeleted;
                    n === Zt.REQUEST && i && !r && lt(this);
                  }
                  (this.isAlipay && !this.jsBridgeReady) || this.logCache();
                },
              },
              {
                key: "onFetchConfigError",
                value: function (e) {
                  (this.monitorConfigInited = true),
                    (this.monitorConfigFailed = true),
                    this.onMonitorConfigInited(),
                    gt("获取服务端配置失败：%s", e.message);
                },
              },
            ]),
            n
          );
        })(yt),
        Xt = Jt,
        Vt = [];
      function qt(e, t) {
        if ("object" === typeof t && null !== t) {
          if (Vt.indexOf(t) >= 0) return;
          Vt.push(t);
        }
        return t;
      }
      function Kt(e) {
        var t = "";
        if (1 === e.length) {
          var n = e[0];
          n instanceof Error
            ? ((t = "{ name: " + n.name + ", message: " + n.message + " }"),
              console.error(n.stack))
            : (t = JSON.stringify(n, qt));
        } else t = JSON.stringify(e, qt);
        return t;
      }
      var $t = (function () {
        function e(e) {
          this.monitor = new Xt({ yuyanId: e });
        }
        return (
          (e.prototype.error = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            try {
              var i = Kt(t),
                r = e + ":" + i;
              this.monitor.log({ code: 11, msg: r }), console.log(r);
            } catch (e) {
              console.log(e);
            }
          }),
          (e.prototype.info = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            try {
              var i = Kt(t),
                r = e + ":" + i;
              this.monitor.log({ code: 12, msg: r }), console.log(r);
            } catch (e) {
              console.log(e);
            }
          }),
          e
        );
      })();
      function en(e) {
        for (var t = [e[0]], n = 1; n < e.length; n++) {
          var i = e[n].t - e[n - 1].t;
          t.push({ name: e[n].name, t: i });
        }
        return t;
      }
      function tn(e) {
        var t = e.map(function (e) {
          return e.name + ":" + e.t;
        });
        return t.join("^");
      }
      (function () {
        function e(e) {
          (this.traces = []),
            (this.name = e.name),
            (this.logger = e.logger),
            this.clear(),
            this.add("start");
        }
        (e.prototype.clear = function () {
          this.traces = [];
        }),
          (e.prototype.add = function (e, t) {
            undefined === t && (t = +new Date()),
              console.log("[trace add]", e),
              this.traces.push({ name: e, t: t });
          }),
          (e.prototype.flush = function (e) {
            this.add("end"),
              this.logger.info("trace-" + this.name, tn(this.traces)),
              e &&
                this.logger.info("traceSpan-" + this.name, tn(en(this.traces))),
              this.clear();
          });
      })();
      var nn = new $t("180020010100694030"),
        __awaiter = function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (res) {
                  res(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            );
          });
        },
        __generator = function (thisArg, body) {
          var f,
            y,
            t,
            generator,
            _ = {
              label: 0,
              sent: function () {
                if (1 & t[0]) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (generator = { next: verb(0), throw: verb(1), return: verb(2) }),
            "function" === typeof Symbol &&
              (generator[Symbol.iterator] = function () {
                return this;
              }),
            generator
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      2 & op[0]
                        ? y["return"]
                        : op[0]
                        ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                        : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                switch (((y = 0), t && (op = [2 & op[0], t.value]), op[0])) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    return _.label++, { value: op[1], done: false };
                  case 5:
                    _.label++, (y = op[1]), (op = [0]);
                    continue;
                  case 7:
                    (op = _.ops.pop()), _.trys.pop();
                    continue;
                  default:
                    if (
                      ((t = _.trys),
                      !(t = t.length > 0 && t[t.length - 1]) &&
                        (6 === op[0] || 2 === op[0]))
                    ) {
                      _ = 0;
                      continue;
                    }
                    if (3 === op[0] && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (6 === op[0] && _.label < t[1]) {
                      (_.label = t[1]), (t = op);
                      break;
                    }
                    if (t && _.label < t[2]) {
                      (_.label = t[2]), _.ops.push(op);
                      break;
                    }
                    t[2] && _.ops.pop(), _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                (op = [6, e]), (y = 0);
              } finally {
                f = t = 0;
              }
            if (5 & op[0]) throw op[1];
            return { value: op[0] ? op[1] : undefined, done: true };
          }
        },
        isIos = Platform.a.isIos(),
        isAndroid = Platform.a.isAndroid(),
        AlipayJSAPI = window.ap,
        cn = function () {
          var e = window,
            t = 100,
            n = 375,
            i = e.document,
            r = navigator.userAgent,
            a = r.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            o = r.match(/U3\/((\d+|\.){5,})/i),
            s = o && parseInt(o[1].split(".").join(""), 10) >= 80,
            l = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            c = 1,
            u = i.documentElement,
            d = 1,
            m = 1 / c;
          if (l);
          else if ((a && a[1] > 534) || s) {
            u.style.fontSize = t + "px";
            var p = i.createElement("div");
            p.setAttribute("style", "width: 1rem;display:none"),
              u.appendChild(p);
            var f = e.getComputedStyle(p).width;
            if ((u.removeChild(p), f !== u.style.fontSize)) {
              var h = parseInt(f, 10);
              (d = t / h), (m *= d);
            }
          } else m = 1;
          var g = i.querySelector('meta[name="viewport"]');
          g ||
            ((g = i.createElement("meta")),
            g.setAttribute("name", "viewport"),
            i.head.appendChild(g)),
            g.setAttribute(
              "content",
              "width=device-width,user-scalable=no,initial-scale=" +
                m +
                ",maximum-scale=" +
                m +
                ",minimum-scale=" +
                m +
                ",viewport-fit=cover"
            );
          var b = function () {
            u.style.fontSize = (t / n) * u.clientWidth * d + "px";
          };
          return b(), e.addEventListener("resize", b), (u.clientWidth * d) / n;
        };
      function un(e) {
        var t = e.importantSpm,
          n = undefined === t ? "" : t,
          i = e.streamSpm,
          r = undefined === i ? "" : i,
          Tracert = window.Tracert,
          o = "a1747",
          s = "b25418",
          l = "bless2021",
          c = [o, s, ""].join("."),
          u = n.split(","),
          d = r.split(",");
        Tracert.set({ spmAPos: o, spmBPos: s, bizType: l, autoExpo: true });
        var m = function (e) {
          return function (t) {
            var n = t.spmId,
              i = undefined === n ? "" : n;
            switch (e) {
              case "logPv":
                Tracert.call("config", { bizType: "bless2021important" });
                break;
              default:
                u.indexOf(i.replace(c, "")) >= 0
                  ? Tracert.set({ bizType: "bless2021important" })
                  : d.indexOf(i.replace(c, "")) >= 0
                  ? Tracert.set({ bizType: "streambless2021" })
                  : Tracert.set({ bizType: "bless2021" });
            }
          };
        };
        Tracert.call("before", "click", m("click")),
          Tracert.call("before", "expo", m("expo")),
          Tracert.call("before", "logPv", m("logPv"));
      }
      function dn(e, t) {
        return undefined === e ? t : e;
      }
      function mn(e) {
        return (
          e.body.forEach(function (e) {
            (e.conf = Number(e.conf.toFixed(3))),
              e.pos.forEach(function (e) {
                (e[0] = Number(e[0].toFixed(3))),
                  (e[1] = Number(e[1].toFixed(3)));
              });
          }),
          e
        );
      }
      function pn(e) {
        var t = Object.keys(e)
          .map(function (t) {
            return { code: t, count: e[t] };
          })
          .sort(function (e, t) {
            return e.count - t.count;
          });
        return t
          .map(function (e) {
            var t = e.code,
              n = e.count;
            return t + "," + n;
          })
          .join(";");
      }
      function fn(e) {
        return e.indexOf("DEGRADE") > -1;
      }
      function hn(e, t) {
        return Number(e.toFixed(t));
      }
      function gn(e, t) {
        undefined === t && (t = 120);
        var n = vn(benefitIdStorageKey) || "";
        return !n && e
          ? (nn.info("benefitId", [e, t]),
            bn(benefitIdStorageKey, e, 1e3 * t),
            e)
          : n;
      }
      function bn(e, t, n) {
        var i = window.localStorage,
          r = { value: t, expiry: new Date().getTime() + n };
        i.setItem(e, JSON.stringify(r));
      }
      function vn(e) {
        var t = window.localStorage,
          n = t.getItem(e);
        if (!n) return null;
        try {
          var i = JSON.parse(n);
          return new Date().getTime() > i.expiry
            ? (t.removeItem(e), null)
            : i.value;
        } catch (e) {
          return null;
        }
      }
      function An(e, t, n) {
        return Math.max(t, Math.min(e, n));
      }
      function _n(e) {
        return new Promise(function (t) {
          window.setTimeout(function () {
            return t(undefined);
          }, e);
        });
      }
      function yn(e) {
        return new Promise(function (t, n) {
          try {
            AlipayJSAPI.call(
              "saveImage",
              { src: e, cusHandleResult: true, showActionSheet: false },
              function (e) {
                t(e);
              }
            );
          } catch (e) {
            n();
          }
        });
      }
      function wn(e) {
        var t, n, i, r, a;
        return __awaiter(this, undefined, undefined, function () {
          var o, s;
          return __generator(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, _n(e)];
              case 1:
                return (
                  l.sent(),
                  isAndroid
                    ? [
                        4,
                        AlipayJSAPI.call("snapshot", {
                          range: "document",
                          saveToGallery: true,
                          imageFormat: "jpg",
                          quality: 100,
                          dataType: "none",
                        }),
                      ]
                    : [3, 3]
                );
              case 2:
                if (
                  ((s = l.sent()),
                  !s ||
                    (null === (t = s) || undefined === t ? undefined : t.error))
                )
                  throw new Error("保存失败，请重试");
                return [3, 6];
              case 3:
                return [
                  4,
                  AlipayJSAPI.call("snapshot", {
                    range: "document",
                    saveToGallery: false,
                    dataType: "dataURL",
                  }),
                ];
              case 4:
                return (
                  (o = l.sent()),
                  [
                    4,
                    yn(
                      null === (n = o) || undefined === n
                        ? undefined
                        : n.dataURL
                    ),
                  ]
                );
              case 5:
                if (
                  ((s = l.sent()),
                  !s ||
                    (null === (i = s) || undefined === i ? undefined : i.error))
                ) {
                  if (
                    15 ===
                    (null === (r = s) || undefined === r ? undefined : r.error)
                  )
                    throw new Error("没有开启相册权限");
                  if (
                    16 ===
                    (null === (a = s) || undefined === a ? undefined : a.error)
                  )
                    throw new Error("手机相册存储空间不足");
                }
                l.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }
      function getErrorHint(statusCode) {
        return errorHints[statusCode] || defaultErrorHint;
      }
      var xn = function () {
          var e = document.body,
            t = window.innerWidth,
            n = window.innerHeight,
            i = Math.max(t, n) / Math.min(t, n);
          i >= 1.9 && e.classList.add("liuhai");
        },
        En = function (e, t, n) {
          t ? e.classList.add(n) : e.classList.remove(n);
        },
        Sn = function (e) {
          var t = document.body;
          En(t, e, "noscroll");
        },
        Tn = function (e) {
          var t = document.body;
          En(t, e, "snapshoting");
        },
        Cn = function (e) {
          var t = document.body;
          En(t, e, "android");
        },
        In = function (e) {
          return (
            e.indexOf("tfs.alipayobjects.com/images/partner") > -1 &&
              ((e = e.replace(/^http(s)?:\/\//, "")),
              (e =
                "https://mdn.alipayobjects.com/uri/img/" +
                e +
                "?bz=wf21hw-avatar")),
            e
          );
        },
        Tracert = window.Tracert,
        Rn = function (e) {
          var t,
            n = e.visible,
            a = e.prePeriod,
            o = e.onOk;
          return (
            Object(React["useEffect"])(
              function () {
                if (n) {
                  Tracert.expo("c63917"),
                    Tracert.expo("c64122"),
                    Tracert.expo("c63917.d132250");
                  var e = function () {
                    return __awaiter(
                      undefined,
                      undefined,
                      undefined,
                      function () {
                        return __generator(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, _n(2440)];
                            case 1:
                              return e.sent(), o(), [2];
                          }
                        });
                      }
                    );
                  };
                  e();
                }
              },
              [n]
            ),
            React_.a.createElement(
              G,
              {
                in: n,
                timeout: 560,
                classNames: {
                  appear: className$1.a.appear,
                  appearActive: className$1.a.activeAppear,
                  appearDone: className$1.a.doneAppear,
                  enter: className$1.a.enter,
                  enterActive: className$1.a.activeEnter,
                  enterDone: className$1.a.doneEnter,
                  exit: className$1.a.exit,
                  exitActive: className$1.a.activeExit,
                  exitDone: className$1.a.doneExit,
                },
                unmountOnExit: true,
              },
              React_.a.createElement(
                "div",
                { className: className$1.a.guide },
                React_.a.createElement("div", {
                  className: extractClassNameFromArgs()(
                    className$1.a.title,
                    ((t = {}), (t[className$1.a.prePeriod] = a), t)
                  ),
                }),
                React_.a.createElement("div", { className: className$1.a.img })
              )
            )
          );
        },
        Bn = Rn,
        Dn = (__webpack_require__("zkDJ"), __webpack_require__("iX1p")),
        className$2 = __webpack_require__.n(Dn),
        Mn = function (e) {
          var t,
            n = e.id,
            i = e.active,
            a = e.url,
            o = e.name,
            s = e.onClick;
          return React_.a.createElement(
            "div",
            {
              className: extractClassNameFromArgs()(
                className$2.a.font,
                ((t = {}), (t[className$2.a.active] = i), t)
              ),
              onClick: s,
              "data-aspm-click": "c63924.d131818_" + n,
              "data-aspm-param": "name=" + o,
              "data-aspm-expo": true,
            },
            React_.a.createElement(
              "div",
              { className: className$2.a.preview },
              React_.a.createElement(
                "div",
                { className: className$2.a.inner },
                React_.a.createElement("div", {
                  className: className$2.a.img,
                  style: { backgroundImage: "url(" + a + ")" },
                })
              )
            ),
            React_.a.createElement("div", { className: className$2.a.name }, o)
          );
        },
        jn = function (e) {
          var t,
            n = e.fonts,
            i = e.degradeLevel,
            a = e.activeFont,
            o = e.onFontSelected;
          return React_.a.createElement(
            "div",
            {
              className: className$2.a.fontSelector,
              "data-aspm": "c63924.d131818",
              "data-aspm-expo": true,
            },
            React_.a.createElement(
              "div",
              {
                className: extractClassNameFromArgs()(
                  className$2.a.fontList,
                  ((t = {}),
                  (t[className$2.a.degradeStatic] =
                    i === degradeLevelCodes.Static),
                  t)
                ),
              },
              n.map(function (e) {
                return React_.a.createElement(Mn, {
                  id: e.id,
                  key: e.id,
                  name: e.name,
                  url: e.thumbUrl,
                  active: !!a && a.id === e.id,
                  onClick: function () {
                    return o(e);
                  },
                });
              }),
              React_.a.createElement(
                "div",
                { className: className$2.a.placeholder },
                "\xa0"
              )
            )
          );
        },
        Fn = jn,
        Un = __webpack_require__("WXTu"),
        className$3 = __webpack_require__.n(Un);
      function __assign() {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          __assign.apply(this, arguments)
        );
      }
      var Qn = React_.a.createElement("title", null, "画板备份 33"),
        Hn = React_.a.createElement(
          "g",
          {
            id: "画板备份-33",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
          },
          React_.a.createElement("path", {
            d:
              "M10.8801284,11.9934122 C11.2994779,12.3528068 11.3480809,12.9841035 10.9886863,13.403453 C10.6549627,13.7928489 10.0867929,13.8625707 9.67157381,13.5827928 L9.57864545,13.5120109 L4.689139,9.32156282 C3.85044007,8.60277364 3.75323401,7.34018007 4.47202319,6.50148114 L4.57640838,6.38875051 L4.689139,6.28436533 L9.57864545,2.09391723 C9.96804139,1.76019369 10.5401878,1.778264 10.9076877,2.1183028 L10.9886863,2.20247514 C11.3224098,2.59187107 11.3043395,3.1640175 10.9643007,3.53151742 L10.8801284,3.61251598 L7.11458562,6.83919845 L17.9904545,6.83994261 C22.9127602,6.83994261 26.9030774,10.8302598 26.9030774,15.7525654 C26.9030774,20.5869728 23.0539991,24.5223798 18.2532405,24.6613884 L17.9904545,24.6651883 L5.25846116,24.6651883 C4.70617641,24.6651883 4.25846116,24.217473 4.25846116,23.6651883 C4.25846116,23.1523524 4.64450135,22.7296811 5.14184003,22.671916 L5.25846116,22.6651883 L17.9904545,22.6651883 C21.8081907,22.6651883 24.9030774,19.5703016 24.9030774,15.7525654 C24.9030774,12.0143654 21.935801,8.96920996 18.2281004,8.84395096 L17.9904545,8.83994261 L7.20058562,8.83919845 L10.8801284,11.9934122 Z",
            id: "形状结合",
            fill: "currentColor",
            fillRule: "nonzero",
          })
        ),
        Wn = function (e) {
          return React_.a.createElement(
            "svg",
            __assign(
              {
                width: "30px",
                height: "30px",
                viewBox: "0 0 30 30",
                version: 1.1,
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              e
            ),
            Qn,
            Hn
          );
        };
      function __assign() {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          __assign.apply(this, arguments)
        );
      }
      var Yn = React_.a.createElement("title", null, "Shape"),
        Jn = React_.a.createElement(
          "g",
          {
            id: "页面-1",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
          },
          React_.a.createElement(
            "g",
            {
              id: "画板备份-85",
              transform: "translate(-452.000000, -1227.000000)",
            },
            React_.a.createElement(
              "g",
              {
                id: "手写",
                transform: "translate(28.000000, 557.000000)",
                fill: "currentColor",
              },
              React_.a.createElement(
                "g",
                {
                  id: "编组-15",
                  transform: "translate(153.000000, 663.000000)",
                },
                React_.a.createElement(
                  "g",
                  {
                    id: "编组-5",
                    transform: "translate(271.000000, 0.000000)",
                  },
                  React_.a.createElement("path", {
                    d:
                      "M35.8221036,13.6200623 C35.1366109,13.3749571 34.3840162,13.7314738 34.1406071,14.4130498 L33.122236,17.253387 C31.9301892,14.578201 30.0473868,12.2267635 27.6501359,10.4572872 C20.0281412,4.83428466 9.17209459,6.37045225 3.4579011,13.8835177 C0.69224724,17.5194638 -0.473485072,22.0008265 0.175167332,26.5005392 C0.826451185,31.0186021 3.22633351,35.011065 6.93273071,37.7439229 C10.0338944,40.0298241 13.6679268,41.1334531 17.2716974,41.1334531 C22.535913,41.1334531 27.7382895,38.7807049 31.1275969,34.3229353 C32.6275234,32.3516076 33.6551046,30.1417283 34.1787631,27.7522799 C34.3340187,27.0458001 33.8853565,26.3471846 33.174865,26.1925193 C32.467005,26.0404754 31.7644078,26.4834998 31.6091523,27.1926011 C31.165753,29.2071826 30.2986902,31.0736525 29.0303314,32.7408924 C24.1832006,39.1110072 14.9718102,40.4099339 8.49712769,35.6375907 C5.36043939,33.3241642 3.33027578,29.9477413 2.77898702,26.1282938 C2.23032971,22.3271965 3.21712343,18.5405172 5.55385096,15.4668713 C10.399666,9.09413507 19.6071092,7.78996549 26.0844232,12.5649301 C28.4290451,14.2950847 30.1894851,16.6858439 31.1407542,19.3898658 L26.6186075,17.6308753 C25.9436406,17.3700414 25.1792044,17.7003436 24.9147437,18.3753661 C24.650283,19.0503885 24.9857928,19.8092973 25.6620755,20.0727526 L32.3170123,22.661431 C32.4735836,22.7217242 32.6354177,22.7518709 32.7946205,22.7518709 C32.8169878,22.7518709 32.8367237,22.7440065 32.859091,22.7426958 C32.9090885,22.7479387 32.9590861,22.7689103 33.0090836,22.7689103 C33.5485309,22.7689103 34.0564007,22.4346758 34.2471808,21.8985901 L36.6168015,15.2964773 C36.862842,14.6135905 36.5062806,13.8625461 35.8221036,13.6200623 L35.8221036,13.6200623 Z",
                    id: "Shape",
                  })
                )
              )
            ),
            React_.a.createElement(
              "g",
              { id: "Group", fill: "#131415" },
              React_.a.createElement("path", {
                d:
                  "M0,1546 C0,1589.07767 34.9216771,1624 77.9999306,1624 L77.9999306,1624 L0,1624 Z M750,1545.99993 L750,1623.99993 L672.000069,1623.99993 C715.077656,1623.99993 750,1589.0776 750,1545.99993 L750,1545.99993 Z M503.666667,1596.66667 C506.42809,1596.66667 508.666667,1598.90524 508.666667,1601.66667 C508.666667,1604.42809 506.42809,1606.66667 503.666667,1606.66667 L245.666667,1606.66667 C242.905243,1606.66667 240.666667,1604.42809 240.666667,1601.66667 C240.666667,1598.90524 242.905243,1596.66667 245.666667,1596.66667 L503.666667,1596.66667 Z M77.9999306,0.000133388063 C34.9216771,0.000133388063 0,34.9224622 0,78.0001334 L0,78.0001334 L0,0.000133388063 Z M750,0.000133388063 L750,78.0001334 C750,34.9224622 715.077656,0.000133388063 672.000069,0.000133388063 L672.000069,0.000133388063 L750,0.000133388063 Z M594.809202,0.000692395341 C593.778573,0.0195886071 584.701665,0.504797158 584.072507,11.6694547 C584.072507,41.4169935 565.41497,60.0026193 535.735345,60.0026193 L535.735345,60.0026193 L214.540627,59.8412197 L214.524612,59.8252132 C214.52995,59.8852378 214.534622,59.9419277 214.540627,60.0026193 C184.861003,60.0026193 166.202798,41.4169935 166.202798,11.6694547 L166.202798,11.6694547 L166.202426,11.5557059 C166.187264,10.3519865 165.77847,0 156.201707,0 L156.201707,0 Z",
                id: "Combined-Shape",
              })
            )
          )
        ),
        Xn = function (e) {
          return React_.a.createElement(
            "svg",
            __assign(
              {
                width: "37px",
                height: "35px",
                viewBox: "0 0 37 35",
                version: 1.1,
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              e
            ),
            Yn,
            Jn
          );
        },
        Vn = function () {},
        Kn = function (e) {
          var t,
            n,
            a,
            o,
            s,
            l = e.fonts,
            c = e.degradeLevel,
            u = e.isAlreadyDrawn,
            d = e.freemode,
            m = e.activeFont,
            f = e.onClear,
            h = e.onUndo,
            g = e.onNext,
            b = e.onFreemodeChanged,
            v = e.onActiveFontChanged,
            A = c === degradeLevelCodes.Static;
          return (
            Object(React["useEffect"])(function () {
              Tracert.call("expoCheck");
            }, []),
            React_.a.createElement(
              "div",
              {
                className: className$3.a.writing,
                "data-aspm": "c63924",
                "data-aspm-expo": true,
              },
              React_.a.createElement(Fn, {
                fonts: l,
                degradeLevel: c,
                activeFont: m,
                onFontSelected: function (e) {
                  var t;
                  e.id !==
                    (null === (t = m) || undefined === t ? undefined : t.id) &&
                    v(e);
                },
              }),
              React_.a.createElement(
                "div",
                { className: className$3.a.blessing },
                React_.a.createElement("div", {
                  className: className$3.a.fontBg,
                  "data-aspm": "c63924.d132527",
                  "data-aspm-expo": true,
                  style: {
                    backgroundImage:
                      c === degradeLevelCodes.Static
                        ? "url(" +
                          (null === (o = m) || undefined === o
                            ? undefined
                            : o.degradeUrl) +
                          ")"
                        : d
                        ? "none"
                        : "url(" +
                          (null === (s = m) || undefined === s
                            ? undefined
                            : s.url) +
                          ")",
                    backgroundSize:
                      c === degradeLevelCodes.Static ? "83.75%" : "contain",
                  },
                }),
                c === degradeLevelCodes.None &&
                  React_.a.createElement(
                    "div",
                    { className: className$3.a.buttonGroup },
                    React_.a.createElement(
                      "div",
                      { className: className$3.a.freemode },
                      React_.a.createElement(
                        "div",
                        { className: "am-switch" },
                        React_.a.createElement("input", {
                          type: "checkbox",
                          name: "freemode",
                          className: "am-switch-checkbox",
                          checked: !d,
                          id: "freemode",
                          onChange: function (e) {
                            return b(!e.target.checked);
                          },
                        }),
                        React_.a.createElement(
                          "label",
                          { className: "am-switch-label", htmlFor: "freemode" },
                          React_.a.createElement("div", {
                            className: "am-switch-inner",
                          }),
                          React_.a.createElement("div", {
                            className: "am-switch-switch",
                          })
                        )
                      ),
                      React_.a.createElement(
                        "span",
                        {
                          onClick: function () {
                            return b(!d);
                          },
                        },
                        "临摹"
                      )
                    ),
                    React_.a.createElement("div", {
                      className: className$3.a.divider,
                    }),
                    React_.a.createElement(
                      "button",
                      {
                        className: extractClassNameFromArgs()(
                          className$3.a.undoBtn,
                          ((t = {}), (t[className$3.a.disabled] = A), t)
                        ),
                        onClick: A ? Vn : h,
                        "data-aspm-click": "d131822",
                        "data-aspm-expo": true,
                      },
                      React_.a.createElement(Wn, {
                        height: "0.17rem",
                        width: "0.17rem",
                      }),
                      "\xa0撤销"
                    ),
                    React_.a.createElement("div", {
                      className: className$3.a.divider,
                    }),
                    React_.a.createElement(
                      "button",
                      {
                        className: extractClassNameFromArgs()(
                          className$3.a.clearBtn,
                          ((n = {}), (n[className$3.a.disabled] = A), n)
                        ),
                        onClick: A ? Vn : f,
                        "data-aspm-click": "d131820",
                        "data-aspm-expo": true,
                      },
                      React_.a.createElement(Xn, {
                        height: "0.17rem",
                        width: "0.17rem",
                      }),
                      "\xa0重写"
                    )
                  )
              ),
              React_.a.createElement(
                "div",
                {
                  className: extractClassNameFromArgs()(
                    className$3.a.btn,
                    ((a = {}), (a[className$3.a.disabled] = !u), a)
                  ),
                  "data-aspm-click": "d131823",
                  "data-aspm-expo": true,
                  onClick: u ? g : Vn,
                },
                "下一步"
              )
            )
          );
        },
        $n = Kn,
        ei = __webpack_require__("AgXl"),
        className$4 = __webpack_require__.n(ei),
        ri = function () {},
        oi = function (e) {
          var t,
            n,
            a = e.prePeriod,
            o = e.activeStickerTabKey,
            s = e.stickers,
            l = e.downgraded,
            c = e.onPrev,
            u = e.onNext,
            d = e.onStickerTabKeyChanged,
            m = e.onStickerAdded,
            f = Object(React["useState"])(false),
            h = f[0],
            g = f[1],
            b = Object(React["useRef"])(null),
            v = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return g(true), [4, u()];
                    case 1:
                      return e.sent(), g(false), [2];
                  }
                });
              });
            };
          return (
            Object(React["useEffect"])(function () {
              Tracert.expo("c63924.d131824"), Tracert.expo("c63924.d131825");
            }, []),
            React_.a.createElement(
              "div",
              { className: className$4.a.decorate },
              React_.a.createElement("div", {
                className: extractClassNameFromArgs()(
                  ((t = {}),
                  (t[className$4.a.bg] = true),
                  (t[className$4.a.prePeriod] = a),
                  t)
                ),
              }),
              !l &&
                React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement(
                    "div",
                    { className: className$4.a.stickerTab },
                    React_.a.createElement(
                      "div",
                      { className: className$4.a.list },
                      s.map(function (e) {
                        var t,
                          n = e.type;
                        return React_.a.createElement(
                          "div",
                          {
                            key: n,
                            "data-aspm-click": "c63924.d131824",
                            "data-aspm-param": "name=" + n,
                            "data-aspm-expo": true,
                            className: extractClassNameFromArgs()(
                              ((t = {}),
                              (t[className$4.a.active] = n === o),
                              (t[className$4.a.tabItem] = true),
                              t)
                            ),
                            onClick: function () {
                              d(n),
                                b && b.current && (b.current.scrollLeft = 0);
                            },
                          },
                          n
                        );
                      })
                    )
                  ),
                  React_.a.createElement(
                    "div",
                    { className: className$4.a.stickerTabContent, ref: b },
                    React_.a.createElement(
                      "div",
                      { className: className$4.a.list },
                      null ===
                        (n = s.find(function (e) {
                          var t = e.type;
                          return t === o;
                        })) || undefined === n
                        ? undefined
                        : n.children.map(function (e, t) {
                            return React_.a.createElement("div", {
                              key: e.id,
                              className: className$4.a.thumb,
                              style: {
                                backgroundImage: "url(" + e.thumbUrl + ")",
                                marginLeft: 0 === t ? ".12rem" : 0,
                              },
                              onClick: function () {
                                return m(e);
                              },
                            });
                          })
                    )
                  )
                ),
              React_.a.createElement(
                "div",
                { className: className$4.a.footer },
                React_.a.createElement(
                  "div",
                  { className: className$4.a.buttonGroup },
                  React_.a.createElement(
                    "div",
                    { className: className$4.a.prevButton, onClick: c },
                    "上一步"
                  ),
                  React_.a.createElement(
                    "div",
                    {
                      className: className$4.a.btn,
                      "data-aspm-click": "c63924.d131825",
                      "data-aspm-expo": true,
                      onClick: h ? ri : v,
                    },
                    "完成"
                  ),
                  React_.a.createElement("div", {
                    className: className$4.a.skipButton,
                  })
                )
              )
            )
          );
        },
        si = oi,
        li = __webpack_require__("1INB"),
        className$8 = __webpack_require__.n(li),
        ui = __webpack_require__("xJKY"),
        className$5 = __webpack_require__.n(ui),
        mi = function () {},
        pi = function (e) {
          var t,
            n,
            a,
            o = e.type,
            s = e.children,
            l = e.visible,
            c = e.btn1Text,
            u = e.btn2Text,
            d = e.btn1Disabled,
            m = e.btn2Disabled,
            f = e.onBtn1,
            h = e.onBtn2,
            g = e.onClose;
          return (
            Object(React["useEffect"])(
              function () {
                Sn(l);
              },
              [l]
            ),
            React_.a.createElement(
              G,
              {
                in: l,
                timeout: 300,
                classNames: {
                  appear: className$5.a.appear,
                  appearActive: className$5.a.activeAppear,
                  appearDone: className$5.a.doneAppear,
                  enter: className$5.a.enter,
                  enterActive: className$5.a.activeEnter,
                  enterDone: className$5.a.doneEnter,
                  exit: className$5.a.exit,
                  exitActive: className$5.a.activeExit,
                  exitDone: className$5.a.doneExit,
                },
                unmountOnExit: true,
              },
              React_.a.createElement(
                "div",
                { className: className$5.a.wrapper },
                React_.a.createElement(
                  "div",
                  { className: "am-dialog-mask show" },
                  React_.a.createElement(
                    "div",
                    { className: className$5.a.container },
                    "cloud" === o &&
                      React_.a.createElement("div", {
                        className: className$5.a.cloud,
                      }),
                    "fu" === o &&
                      React_.a.createElement("div", {
                        className: className$5.a.fu,
                      }),
                    React_.a.createElement(
                      "div",
                      { className: className$5.a.img },
                      s,
                      h
                        ? React_.a.createElement(
                            React_.a.Fragment,
                            null,
                            React_.a.createElement(
                              "div",
                              {
                                className: extractClassNameFromArgs()(
                                  className$5.a.btn1,
                                  ((t = {}), (t[className$5.a.disabled] = d), t)
                                ),
                                onClick: d ? mi : f,
                              },
                              c
                            ),
                            React_.a.createElement(
                              "div",
                              {
                                className: extractClassNameFromArgs()(
                                  className$5.a.btn2,
                                  ((n = {}), (n[className$5.a.disabled] = m), n)
                                ),
                                onClick: m ? mi : h,
                              },
                              u
                            )
                          )
                        : React_.a.createElement(
                            React_.a.Fragment,
                            null,
                            React_.a.createElement(
                              "div",
                              {
                                className: extractClassNameFromArgs()(
                                  className$5.a.singleBtn,
                                  ((a = {}), (a[className$5.a.disabled] = d), a)
                                ),
                                onClick: d ? mi : f,
                              },
                              React_.a.createElement("span", null, c)
                            )
                          )
                    ),
                    React_.a.createElement("div", {
                      className: className$5.a.closeBtn,
                      onClick: g,
                    })
                  )
                )
              )
            )
          );
        },
        fi = pi,
        hi = __webpack_require__("cVRq"),
        className$6 = __webpack_require__.n(hi),
        bi = function (e) {
          var t = e.visible,
            n = e.btnText,
            i = e.title,
            a = e.subtitle,
            o = e.desc,
            s = e.onSave,
            l = e.onClose;
          return React_.a.createElement(
            fi,
            { type: "cloud", visible: t, btn1Text: n, onBtn1: s, onClose: l },
            React_.a.createElement(
              "div",
              { className: className$6.a.title },
              i
            ),
            React_.a.createElement(
              "div",
              { className: className$6.a.subtitle },
              a
            ),
            React_.a.createElement("div", { className: className$6.a.desc }, o)
          );
        },
        vi = bi;
      function __assign() {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          __assign.apply(this, arguments)
        );
      }
      var _i = React_.a.createElement("title", null, "画板备份 19"),
        yi = React_.a.createElement(
          "g",
          {
            id: "画板备份-19",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
          },
          React_.a.createElement("path", {
            d:
              "M29.0566861,6.67060438 C28.5197927,6.47857728 27.9303434,6.75788943 27.7396998,7.29186852 L26.9420884,9.51712372 C26.0084503,7.42125577 24.5337966,5.57902788 22.6562152,4.192736 C16.6864956,-0.212591548 8.18379306,0.990915185 3.70830677,6.87700784 C1.54218378,9.72558094 0.629155724,13.2364935 1.13719504,16.7617824 C1.64729536,20.3014477 3.52693777,23.429333 6.42987235,25.5703838 C8.8587743,27.3612675 11.7050311,28.2259029 14.5275862,28.2259029 C18.6506395,28.2259029 22.7252591,26.3826481 25.3798418,22.8902194 C26.5546183,21.3457876 27.3594432,19.6144631 27.7695845,17.7424556 C27.8911842,17.1889657 27.5397817,16.6416371 26.9833087,16.5204649 C26.4288966,16.4013465 25.8786065,16.7484329 25.7570069,17.3039766 C25.4097264,18.8822956 24.7306232,20.3445768 23.7372157,21.6507718 C19.9408327,26.6414226 12.7262622,27.6590635 7.65514363,23.920183 C5.19841803,22.1077347 3.60834772,19.4624844 3.17656583,16.4701477 C2.74684495,13.4921873 3.51972423,10.5255227 5.34990237,8.11748236 C9.14525488,3.12477781 16.3567338,2.10302934 21.4299134,5.84396367 C23.2662746,7.19944907 24.6450912,9.07248343 25.3901468,11.1909428 L21.8482987,9.81286599 C21.3196493,9.6085163 20.7209255,9.86729078 20.5137938,10.3961355 C20.3066622,10.9249801 20.5694411,11.5195453 21.0991211,11.7259488 L26.3114189,13.7540425 C26.4340491,13.8012791 26.5608013,13.8248974 26.6854925,13.8248974 C26.7030111,13.8248974 26.7184687,13.8187361 26.7359873,13.8177092 C26.7751465,13.8218167 26.8143057,13.8382469 26.8534649,13.8382469 C27.2759723,13.8382469 27.6737475,13.5763917 27.8231708,13.1563966 L29.6791116,7.98398758 C29.8718162,7.4489816 29.5925491,6.86057772 29.0566861,6.67060438 L29.0566861,6.67060438 Z",
            id: "Shape",
            fill: "#FFE1AB",
          })
        ),
        wi = function (e) {
          return React_.a.createElement(
            "svg",
            __assign(
              {
                width: "30px",
                height: "30px",
                viewBox: "0 0 30 30",
                version: 1.1,
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              e
            ),
            _i,
            yi
          );
        };
      function __assign() {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          __assign.apply(this, arguments)
        );
      }
      var xi = React_.a.createElement("title", null, "画板备份 20"),
        Ei = React_.a.createElement(
          "g",
          {
            id: "画板备份-20",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          React_.a.createElement(
            "g",
            {
              id: "编组",
              transform: "translate(3.000000, 3.000000)",
              stroke: "#FFE1AB",
              strokeWidth: 2,
            },
            React_.a.createElement("rect", {
              id: "矩形",
              x: 0,
              y: -1.63424829e-13,
              width: 25,
              height: 23.6079364,
              rx: 3.14772486,
            }),
            React_.a.createElement("rect", {
              id: "矩形备份-5",
              x: 6.08238093,
              y: 1.45661261e-13,
              width: 12,
              height: 11.8039682,
              rx: 0.786931214,
            }),
            React_.a.createElement("line", {
              x1: 14.3207809,
              y1: 4.10952967,
              x2: 14.3207809,
              y2: 7.43820253,
              id: "路径-8",
            })
          )
        ),
        Si = function (e) {
          return React_.a.createElement(
            "svg",
            __assign(
              {
                width: "30px",
                height: "30px",
                viewBox: "0 0 30 30",
                version: 1.1,
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              e
            ),
            xi,
            Ei
          );
        };
      function __assign() {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          __assign.apply(this, arguments)
        );
      }
      var Ci = React_.a.createElement("title", null, "画板备份 29"),
        Ii = React_.a.createElement(
          "g",
          {
            id: "画板备份-29",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          React_.a.createElement("path", {
            d:
              "M18.0346139,8.00232876 L26.9858522,22.7879398 C27.5578973,23.732841 27.2556377,24.9625689 26.3107365,25.5346139 C25.9983452,25.7237362 25.6401361,25.823719 25.2749573,25.823719 L7.37248069,25.823719 C6.26791119,25.823719 5.37248069,24.9282885 5.37248069,23.823719 C5.37248069,23.4585402 5.47246346,23.1003311 5.66158576,22.7879398 L14.6128241,8.00232876 C15.1848691,7.05742758 16.414597,6.75516797 17.3594982,7.32721302 C17.6357388,7.49444964 17.8673773,7.72608813 18.0346139,8.00232876 Z",
            id: "三角形",
            stroke: "#FFE1AB",
            strokeWidth: 2,
            transform:
              "translate(16.323719, 15.500000) rotate(-270.000000) translate(-16.323719, -15.500000) ",
          })
        ),
        Pi = function (e) {
          return React_.a.createElement(
            "svg",
            __assign(
              {
                width: "30px",
                height: "30px",
                viewBox: "0 0 30 30",
                version: 1.1,
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              e
            ),
            Ci,
            Ii
          );
        },
        Ni = __webpack_require__("oRAV"),
        className$7 = __webpack_require__.n(Ni),
        Ri = function (e) {
          var t = e.visible,
            n = e.okText,
            i = e.onOK,
            a = e.onClose,
            o = new Date().getTime() >= 16129728e5;
          return React_.a.createElement(
            fi,
            {
              type: "empty",
              visible: t,
              btn1Text: n || "知道了",
              onBtn1: i,
              onClose: a,
            },
            React_.a.createElement(
              "div",
              { className: className$7.a.title },
              o ? "今日领手写福卡已达上限" : "今日已领完，明天再来吧"
            ),
            React_.a.createElement("div", { className: className$7.a.img }),
            React_.a.createElement(
              "div",
              { className: className$7.a.info },
              "福字可保存为壁纸 让福气常相伴"
            )
          );
        },
        Bi = Ri,
        Fi = function () {},
        Ui = function (e) {
          var t,
            n,
            a,
            o,
            s,
            l,
            c,
            u,
            d,
            m,
            f = e.prePeriod,
            h = e.shareEntranceVisible,
            g = e.saveDisabled,
            b = e.saveImageSwitch,
            v = e.replayDisabled,
            A = e.shareDisabled,
            _ = e.selfLimit,
            y = e.benefitId,
            w = e.replaying,
            k = e.fiveLuckyTopCards,
            x = e.fiveLuckyJumpSchema,
            E = e.replayDowngrade,
            S = e.onRewrite,
            T = e.onSave,
            C = e.onReplay,
            I = e.onFucard,
            P = e.onPrint,
            N = e.onShowShareDetail,
            O = e.onHdMerge,
            R = Object(React["useState"])(false),
            B = R[0],
            D = R[1],
            z = Object(React["useState"])(false),
            M = z[0],
            j = z[1],
            F = Object(React["useState"])(false),
            U = F[0],
            L = F[1],
            G = new Date().getTime() >= 16120224e5;
          Object(React["useEffect"])(function () {
            Tracert.call("expoCheck");
          }, []);
          var Q = function () {
              y ? P() : D(true);
            },
            H = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return j(true), [4, I()];
                    case 1:
                      return e.sent(), j(false), [2];
                  }
                });
              });
            },
            W = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return (
                    b
                      ? AlipayJSAPI.call(
                          "actionSheet",
                          {
                            btns: [
                              "保存福气壁纸",
                              "生成高清福字图片(用于打印)",
                            ],
                            cancelBtn: "取消",
                            destructiveBtnIndex: 2,
                          },
                          function (e) {
                            switch (e.index) {
                              case 0:
                                T();
                                break;
                              case 1:
                                O();
                                break;
                            }
                          }
                        )
                      : T(),
                    [2]
                  );
                });
              });
            };
          return React_.a.createElement(
            "div",
            {
              "data-aspm": "c63925",
              "data-aspm-expo": true,
              className: extractClassNameFromArgs()(
                ((t = {}),
                (t[className$8.a.replaying] = w),
                (t[className$8.a.save] = true),
                t)
              ),
            },
            React_.a.createElement("div", {
              className: extractClassNameFromArgs()(
                ((n = {}),
                (n[className$8.a.bg] = true),
                (n[className$8.a.prePeriod] = f),
                n)
              ),
            }),
            React_.a.createElement(
              "div",
              {
                className: extractClassNameFromArgs()(
                  className$8.a.btnGroup,
                  ((a = {}), (a[className$8.a.disabled] = w), a)
                ),
                style: { width: f || E ? "2.12rem" : "3.12rem" },
              },
              React_.a.createElement(
                "button",
                {
                  className: className$8.a.btn,
                  "data-aspm-click": "d131828",
                  "data-aspm-expo": true,
                  onClick: w ? Fi : S,
                },
                React_.a.createElement(wi, {
                  height: "0.17rem",
                  width: "0.17rem",
                }),
                "\xa0重写"
              ),
              !E &&
                React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement("div", {
                    className: className$8.a.divider,
                  }),
                  React_.a.createElement(
                    "button",
                    {
                      className: extractClassNameFromArgs()(
                        className$8.a.btn,
                        ((o = {}), (o[className$8.a.disabled] = w || v), o)
                      ),
                      onClick: w ? Fi : C,
                    },
                    React_.a.createElement(Pi, {
                      height: "0.17rem",
                      width: "0.17rem",
                    }),
                    React_.a.createElement("span", null, "\xa0回放")
                  )
                ),
              !f &&
                React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement("div", {
                    className: className$8.a.divider,
                  }),
                  React_.a.createElement(
                    "button",
                    {
                      className: extractClassNameFromArgs()(
                        className$8.a.btn,
                        ((s = {}), (s[className$8.a.disabled] = w || g), s)
                      ),
                      "data-aspm-click": "d131829",
                      "data-aspm-expo": true,
                      onClick: w || g ? Fi : T,
                    },
                    React_.a.createElement(Si, {
                      height: "0.17rem",
                      width: "0.17rem",
                    }),
                    "\xa0保存"
                  )
                )
            ),
            f
              ? React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement(
                    "div",
                    { className: className$8.a.print },
                    React_.a.createElement(
                      "div",
                      {
                        className: extractClassNameFromArgs()(
                          className$8.a.printBtn,
                          ((l = {}), (l[className$8.a.disabled] = !y), l)
                        ),
                        "data-aspm-click": "d131830",
                        "data-aspm-expo": true,
                        onClick: w ? Fi : Q,
                      },
                      "免费打印福字"
                    ),
                    React_.a.createElement("div", {
                      className: extractClassNameFromArgs()(
                        className$8.a.printTip,
                        ((c = {}), (c[className$8.a.disabled] = !y), c)
                      ),
                    })
                  ),
                  React_.a.createElement(
                    "div",
                    {
                      className: extractClassNameFromArgs()(
                        className$8.a.saveBtn,
                        ((u = {}), (u[className$8.a.disabled] = w || g), u)
                      ),
                      "data-aspm-click": "d131829",
                      "data-aspm-expo": true,
                      onClick: w || g ? Fi : W,
                    },
                    "保存福气壁纸"
                  )
                )
              : React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement(
                    "div",
                    {
                      className: extractClassNameFromArgs()(
                        className$8.a.fucardBtn,
                        ((d = {}), (d[className$8.a.disabled] = w || _ || M), d)
                      ),
                      "data-aspm-click": "d131832",
                      "data-aspm-expo": true,
                      onClick:
                        w || _ || M
                          ? function () {
                              _ && !g ? L(true) : Fi();
                            }
                          : H,
                    },
                    "领我的手写福卡"
                  ),
                  React_.a.createElement(Bi, {
                    visible: U,
                    okText: "保存福气壁纸",
                    onClose: function () {
                      return L(false);
                    },
                    onOK: function () {
                      return __awaiter(
                        undefined,
                        undefined,
                        undefined,
                        function () {
                          return __generator(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [4, W()];
                              case 1:
                                return e.sent(), L(false), [2];
                            }
                          });
                        }
                      );
                    },
                  })
                ),
            f && k.length
              ? React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement(
                    "div",
                    {
                      className: className$8.a.contentWrapper,
                      "data-aspm-click": "d131831",
                      "data-aspm-expo": true,
                      onClick: function () {
                        AlipayJSAPI.pushWindow({ url: x });
                      },
                    },
                    React_.a.createElement(
                      "div",
                      { className: className$8.a.list },
                      k.slice(0, 3).map(function (e) {
                        return React_.a.createElement(
                          "div",
                          { className: className$8.a.item, key: e.contentId },
                          React_.a.createElement("img", {
                            src: e.coverPic.url,
                          })
                        );
                      })
                    )
                  ),
                  React_.a.createElement("div", {
                    className: className$8.a.logo,
                  }),
                  React_.a.createElement(
                    "div",
                    { className: className$8.a.bottomText },
                    "- 集五福活动2月1日开启，敬请期待 -"
                  )
                )
              : React_.a.createElement(React_.a.Fragment, null),
            f &&
              React_.a.createElement(vi, {
                visible: B,
                title: G ? "打印份数已达上限" : "今日打印份数已达上限",
                subtitle: G
                  ? "集五福正式活动2月1日正式上线，写福新玩法敬请期待。"
                  : "受春节期间物流等因素影响，每日0点开始限量打印50万份。",
                desc: "保存福气壁纸，福气伴你一年",
                btnText: "保存福气壁纸",
                onClose: function () {
                  return D(false);
                },
                onSave: function () {
                  T(), D(false);
                },
              }),
            !f &&
              React_.a.createElement(
                React_.a.Fragment,
                null,
                React_.a.createElement("div", {
                  className: className$8.a.girl,
                }),
                React_.a.createElement("div", { className: className$8.a.boy })
              ),
            h &&
              React_.a.createElement(
                "div",
                {
                  "data-aspm-click": "d131833",
                  "data-aspm-expo": true,
                  className: extractClassNameFromArgs()(
                    className$8.a.shareBtn,
                    ((m = {}), (m[className$8.a.disabled] = w || A), m)
                  ),
                  onClick: w || A ? Fi : N,
                },
                React_.a.createElement("span", null, "生成套卡送朋友")
              )
          );
        },
        Li = Ui,
        Gi = "default-font-",
        Qi = 526,
        Hi = {
          16: "A*wO27TKzRr_4AAAAAAAAAAAAAARQnAQ",
          17: "A*J-Z9TZ5a4mQAAAAAAAAAAAAAARQnAQ",
          18: "A*tYAnSbGynEgAAAAAAAAAAAAAARQnAQ",
          19: "A*ybnGQbfSjXQAAAAAAAAAAAAAARQnAQ",
          20: "A*qbViTrLSu9YAAAAAAAAAAAAAARQnAQ",
          21: "A*xEm2TLGyPpoAAAAAAAAAAAAAARQnAQ",
          22: "A*QP5_R6qXUasAAAAAAAAAAAAAARQnAQ",
          23: "A*MWqAQphlaeEAAAAAAAAAAAAAARQnAQ",
        },
        Wi = __webpack_require__("hq6T"),
        className$9 = __webpack_require__.n(Wi),
        Ji = function (e) {
          var t = e.disabled,
            n = e.stamp,
            a = e.errorMessage,
            o = e.visible,
            s = e.onClose,
            l = e.onCancel,
            c = e.onOk,
            u = e.onStampChanged,
            d = Object(React["useRef"])(null);
          return (
            Object(React["useEffect"])(
              function () {
                Tracert.call("expoCheck");
              },
              [o]
            ),
            React_.a.createElement(
              fi,
              {
                type: "cloud",
                visible: o,
                btn1Text: "再想想",
                btn2Text: "确认",
                btn2Disabled: t,
                onBtn1: l,
                onBtn2: c,
                onClose: s,
              },
              React_.a.createElement(
                "div",
                { className: className$9.a.info },
                "给自己的福字签个名"
              ),
              React_.a.createElement(
                "div",
                { className: className$9.a.input },
                React_.a.createElement("input", {
                  ref: d,
                  "data-aspm-click": "c63924.d131826",
                  "data-aspm-expo": true,
                  placeholder: "请输入中文汉字",
                  value: n === clickToSignText ? "" : n,
                  onChange: function (e) {
                    return u(e.target.value);
                  },
                })
              ),
              React_.a.createElement(
                "div",
                { className: className$9.a.errorMessage },
                a
              )
            )
          );
        },
        Xi = Ji,
        Vi = __webpack_require__("2r/n"),
        className$10 = __webpack_require__.n(Vi),
        Ki = function (e) {
          var t = e.visible,
            n = e.saveDisabled,
            i = e.onSave,
            a = e.onOK,
            o = e.onClose;
          return React_.a.createElement(
            fi,
            {
              type: "fu",
              visible: t,
              btn1Text: "保存",
              btn2Text: "重写",
              btn1Disabled: n,
              onBtn1: i,
              onBtn2: a,
              onClose: o,
            },
            React_.a.createElement(
              "div",
              { className: className$10.a.info },
              "重写福字前，记得先保存现在的福字哦"
            )
          );
        },
        $i = Ki;
      function tr(e) {
        var t = e.resourceVersion;
        return new Promise(function (e, n) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.homeInit",
              requestData: [{ resourceVersion: t }],
            },
            function (t) {
              t.success ? e(t) : n(t);
            }
          );
        });
      }
      function nr(e) {
        var t = e.imageId,
          n = e.identify;
        return new Promise(function (e, i) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.judgeFu",
              requestData: [{ imageId: t, identify: n }],
            },
            function (t) {
              t.success ? e(t) : i(t);
            }
          );
        });
      }
      function ir(e) {
        var t = e.imageId,
          n = e.pureImageId,
          i = e.videoId,
          r = e.localJudgeResult,
          a = e.jpgImageId,
          o = e.prePeriod,
          s = e.roi,
          l = e.stamp,
          c = e.sticker,
          u = e.fontId,
          d = e.ext;
        return new Promise(function (e, m) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.saveFu",
              requestData: [
                {
                  imageId: t,
                  pureImageId: n,
                  jpgImageId: a,
                  videoId: i,
                  localJudgeResult: r,
                  prePeriod: o,
                  roi: s,
                  stamp: l,
                  sticker: c,
                  fontId: u,
                  ext: d,
                },
              ],
            },
            function (t) {
              t.success ? e(t) : m(t);
            }
          );
        });
      }
      function rr(e) {
        var t = e.imageId,
          n = e.shareUserId;
        return new Promise(function (e, i) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.drawCard",
              requestData: [{ imageId: t, shareUserId: n }],
            },
            function (t) {
              t.success ? e(t) : i(t);
            }
          );
        });
      }
      function ar(e) {
        var t = e.signatureMessage;
        return new Promise(function (e, n) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.textSecJudge",
              requestData: [{ signatureMessage: t }],
            },
            function (t) {
              t.success ? e(t) : n(t);
            }
          );
        });
      }
      function or(e) {
        var t = e.imageId;
        return new Promise(function (e, n) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.queryByImageId",
              requestData: [{ imageId: t }],
            },
            function (t) {
              t.success ? e(t) : n(t);
            }
          );
        });
      }
      function sr(e) {
        var t = e.imageId;
        return new Promise(function (e, n) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.shareMark",
              requestData: [{ imageId: t }],
            },
            function (t) {
              t.success ? e(t) : n(t);
            }
          );
        });
      }
      function lr(e) {
        var t = e.userId,
          n = e.imageId,
          i = e.closeTfsImage;
        return new Promise(function (e, r) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.shareDetail",
              requestData: [{ userId: t, imageId: n }],
            },
            function (t) {
              t.success
                ? (i ||
                    (t.shareHeadImg && (t.shareHeadImg = In(t.shareHeadImg)),
                    t.handFuShareVOList &&
                      t.handFuShareVOList.length &&
                      t.handFuShareVOList.forEach(function (e) {
                        e.shareHeadImg && (e.shareHeadImg = In(e.shareHeadImg));
                      })),
                  e(t))
                : r(t);
            }
          );
        });
      }
      function cr(e) {
        var t = e.imageId;
        return new Promise(function (e, n) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.result",
              requestData: [{ imageId: t }],
            },
            function (t) {
              t.success ? e(t) : n(t);
            }
          );
        });
      }
      function ur(e) {
        var t = e.topicId;
        return new Promise(function (e, n) {
          AlipayJSAPI.rpc(
            {
              operationType: "alipay.content.reading.fivelucky.topic.top",
              requestData: [{ topicId: t }],
            },
            function (t) {
              t.success ? e(t) : n(t);
            }
          );
        });
      }
      function dr(e) {
        var t = e.imageId,
          n = e.inviteeId,
          i = e.inviteType;
        return new Promise(function (e, r) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.sendMessage",
              requestData: [{ imageId: t, inviteeId: n, inviteType: i }],
            },
            function (t) {
              t.success ? e(t) : r(t);
            }
          );
        });
      }
      function mr(e) {
        var t = e.aliasImageId,
          n = e.type;
        return new Promise(function (e, i) {
          AlipayJSAPI.rpc(
            {
              operationType:
                "alipay.tradecsa.biz.blessingprod.wufu2021.handFu.hdPicMerge",
              requestData: [{ aliasImageId: t, type: n }],
            },
            function (t) {
              t.success ? e(t) : i(t);
            }
          );
        });
      }
      var pr = __webpack_require__("X61V"),
        className$11 = __webpack_require__.n(pr),
        hr = function (e) {
          var t = e.visible,
            n = e.okText,
            i = e.message,
            a = e.onOK;
          return React_.a.createElement(
            fi,
            {
              type: "cloud",
              visible: t,
              btn1Text: n || "知道了",
              onBtn1: a,
              onClose: a,
            },
            React_.a.createElement(
              "div",
              { className: className$11.a.info },
              i || defaultErrorHint
            )
          );
        },
        gr = hr,
        br = __webpack_require__("mecv"),
        className$12 = __webpack_require__.n(br),
        Ar = function (e) {
          var t = e.visible,
            n = e.okText,
            i = e.onOK;
          return React_.a.createElement(
            fi,
            {
              type: "empty",
              visible: t,
              btn1Text: n || "知道了",
              onBtn1: i,
              onClose: i,
            },
            React_.a.createElement(
              "div",
              { className: className$12.a.info },
              React_.a.createElement("img", {
                src:
                  "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*gnifSIr4NBUAAAAAAAAAAAAAARQnAQ",
              }),
              React_.a.createElement("div", {
                className: className$12.a.spark1,
              }),
              React_.a.createElement("div", {
                className: className$12.a.spark2,
              }),
              React_.a.createElement(
                "div",
                { className: className$12.a.title },
                "写福字全新升级"
              ),
              React_.a.createElement(
                "div",
                { className: className$12.a.title, style: { marginTop: 0 } },
                "手写福字可以上福卡啦～"
              ),
              React_.a.createElement(
                "div",
                { className: className$12.a.subtitle },
                "快来体验新的贴纸、字体和背景吧"
              )
            )
          );
        },
        _r = Ar;
      function yr() {
        var e = Object(React["useState"])(0),
          t = e[1],
          n = Object(React["useCallback"])(function () {
            t(function (e) {
              return e + 1;
            });
          }, []);
        return n;
      }
      var storage = {},
        kr = {};
      function createStorage(name, defaultValue) {
        var n = yr();
        Object(React["useEffect"])(
          function () {
            var t = name;
            return (
              kr[t] || (kr[t] = []),
              kr[t].push(n),
              function () {
                var e;
                kr[t] =
                  null === (e = kr[t]) || undefined === e
                    ? undefined
                    : e.filter(function (e) {
                        return e !== n;
                      });
              }
            );
          },
          [n, name]
        );
        var getter = undefined === storage[name] ? defaultValue : storage[name],
          setter = Object(React["useCallback"])(
            function (t) {
              var n;
              (storage[name] = t),
                null === (n = kr[name]) ||
                  undefined === n ||
                  n.forEach(function (e) {
                    return e();
                  });
            },
            [name]
          );
        return [getter, setter];
      }
      function Er(e) {
        return Object(React["useMemo"])(
          function () {
            return e ? baseUrl + "/" + e : "";
          },
          [e]
        );
      }
      var lock = false;
      function Tr() {
        var e = createStorage("bridgeReady", !!window.AlipayJSBridge),
          t = e[0],
          n = e[1];
        return (
          Object(React["useEffect"])(function () {
            if (!t && !lock) {
              lock = true;
              var readyListener = function () {
                return n(true);
              };
              return (
                document.addEventListener(
                  "AlipayJSBridgeReady",
                  readyListener,
                  false
                ),
                function () {
                  document.removeEventListener(
                    "AlipayJSBridgeReady",
                    readyListener
                  ),
                    (lock = false);
                }
              );
            }
          }, []),
          t
        );
      }
      var Cr = false;
      function getUserInfo() {
        var e = Tr(),
          t = createStorage("userInfo"),
          userInfo = t[0],
          setUserInfo = t[1];
        return (
          Object(React["useEffect"])(
            function () {
              userInfo ||
                !e ||
                Cr ||
                ((Cr = true),
                window.AlipayJSBridge.call("getUserInfo", function (e) {
                  (Cr = false), e.error || setUserInfo(e);
                }));
            },
            [e]
          ),
          userInfo
        );
      }
      function getStartUpParams() {
        var e = Tr();
        return Object(React["useMemo"])(
          function () {
            return e && window.AlipayJSBridge.startupParams;
          },
          [e]
        );
      }
      function getSetCardsShareDetail() {
        return createStorage("cardsShareDetail");
      }
      function Br(props) {
        var _this = this,
          startUpParams = getStartUpParams(),
          userInfo = getUserInfo(),
          a = getSetCardsShareDetail(),
          cardsShareDetail = a[1],
          closeTfsImage = props.closeTfsImage,
          homeInitResult = props.homeInitResult,
          jumpToSharePage = props.jumpToSharePage,
          showOutModal = props.showOutModal,
          handleError = props.handleError;
        Object(React["useEffect"])(
          function () {
            var e;
            userInfo &&
              startUpParams &&
              (null === (e = homeInitResult) || undefined === e
                ? undefined
                : e.enableShare) &&
              (function () {
                __awaiter(_this, undefined, undefined, function () {
                  var params, userId, imageId, a, l, m, p, f;
                  return __generator(this, function (h) {
                    switch (h.label) {
                      case 0:
                        (params = startUpParams || {}),
                          (userId = params.shareUserId),
                          (imageId = params.shareImageId),
                          (h.label = 1);
                      case 1:
                        return (
                          h.trys.push([1, 4, , 5]),
                          userId && imageId
                            ? [
                                4,
                                lr({
                                  userId: userId,
                                  imageId: imageId,
                                  closeTfsImage: closeTfsImage,
                                }),
                              ]
                            : [3, 3]
                        );
                      case 2:
                        (a = h.sent()),
                          cardsShareDetail(a),
                          5 !==
                            (null ===
                              (p =
                                null === (m = a) || undefined === m
                                  ? undefined
                                  : m.handFuShareVOList) || undefined === p
                              ? undefined
                              : p.length) ||
                            a.handFuShareVOList.find(function (e) {
                              return e.userId === userInfo.userId;
                            }) ||
                            userInfo.userId === userId ||
                            showOutModal(),
                          jumpToSharePage(),
                          (h.label = 3);
                      case 3:
                        return [3, 5];
                      case 4:
                        return (
                          (l = h.sent()),
                          handleError(
                            null === (f = l) || undefined === f
                              ? undefined
                              : f.code
                          ),
                          [3, 5]
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              })();
          },
          [startUpParams, userInfo, homeInitResult]
        );
      }
      function remoteLog(e, t) {
        var elementRef = Object(React["useRef"])(false);
        Object(React["useEffect"])(
          function () {
            var Tracert;
            t &&
              !elementRef.current &&
              (null === (Tracert = window.Tracert) ||
                undefined === Tracert ||
                Tracert.expo(e),
              (elementRef.current = true));
          },
          [t]
        );
      }
      function jr(e) {
        var homeInitResult = e.homeInitResult,
          strategyUrl = e.strategyUrl,
          memberUrl = e.memberUrl;
        Object(React["useEffect"])(
          function () {
            if (homeInitResult) {
              var isPrePeriod = homeInitResult.prePeriod,
                menuList = ["分享"];
              isPrePeriod && menuList.push("兑换记录"),
                menuList.push("规则", "客服"),
                AlipayJSAPI.call("setOptionMenu", { preventDefault: true }),
                AlipayJSAPI.call("showOptionMenu");
              var share = function () {
                  AlipayJSAPI.call("easyShare", {
                    bizType: "ztokenV0_zBWAOCHH",
                    title: "开笔写福，五福临门",
                    desc: isPrePeriod
                      ? "快来一起写福字，我家福字我来写"
                      : "快来一起写福字，写福字得手写福卡",
                    iconUrl:
                      "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*1e2nSL6HwKQAAAAAAAAAAAAAARQnAQ",
                    url: "alipays://platformapi/startapp?appId=68687779",
                    padTemplate: "0",
                    imageUrl:
                      "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Yp4rQ5Kwy98AAAAAAAAAAAAAARQnAQ",
                  }),
                    Tracert.click("c63926.d131836");
                },
                exchangeLog = function () {
                  AlipayJSAPI.pushWindow({ url: memberUrl }),
                    Tracert.click("c63926.d131835");
                },
                rule = function () {
                  AlipayJSAPI.pushWindow({ url: strategyUrl }),
                    Tracert.click("c63926.d131834");
                },
                customService = function () {
                  AlipayJSAPI.pushWindow({
                    url:
                      "alipays://platformapi/startapp?appId=20000691&url=%2Fwww%2Fsrc%2Fxmada.html%3Fscene%3Dapp_wufusxf",
                  });
                };
              document.addEventListener(
                "optionMenu",
                function () {
                  AlipayJSAPI.call(
                    "actionSheet",
                    {
                      btns: menuList,
                      cancelBtn: "取消",
                      destructiveBtnIndex: isPrePeriod ? 4 : 3,
                    },
                    function (t) {
                      switch (t.index) {
                        case 0:
                          share();
                          break;
                        case 1:
                          isPrePeriod ? exchangeLog() : rule();
                          break;
                        case 2:
                          isPrePeriod ? rule() : customService();
                          break;
                        case 3:
                          isPrePeriod && customService();
                          break;
                      }
                    }
                  ),
                    isPrePeriod && Tracert.expo("c63926.d131835"),
                    Tracert.expo("c63926"),
                    Tracert.expo("c63926.d131834"),
                    Tracert.expo("c63926.d131836");
                },
                false
              );
            }
          },
          [homeInitResult]
        );
      }
      var Fr = 9,
        Ur = "-1",
        Lr = __webpack_require__("tMH4"),
        Gr = __webpack_require__.n(Lr),
        Qr = (function () {
          function e(e, t) {
            var n,
              i,
              this_ = this;
            (this.loaded = false), (this.app = t), (this.config = e);
            var a = !!(null ===
              (i =
                null === (n = e) || undefined === n
                  ? undefined
                  : n.focusLayerConfig) || undefined === i
              ? undefined
              : i.autoActivate);
            if (e.sprite) this.initSprite(e.sprite, a);
            else {
              var o = Tiny.Texture.fromImage(e.url),
                s = function () {
                  if (o.valid && !this_.loaded) {
                    var e = new Tiny.Sprite(o);
                    this_.initSprite(e, a);
                  }
                };
              o.on("update", s), s();
            }
          }
          return (
            (e.prototype.initSprite = function (e, t) {
              var n = this,
                i = this.config,
                r = i.id,
                a = i.uniqId,
                o = i.index,
                s = i.initialScale,
                l = i.focusLayerConfig,
                c = undefined === l ? {} : l,
                u = c.minZoom,
                d = c.maxZoom,
                m = c.fixedIndex,
                p = c.enableMove,
                f = c.enableRotate,
                h = c.enableFlipX,
                g = c.enableFlipY,
                b = c.enableDelete,
                v = this.app.getStickerContainer();
              s && e.setScale(s),
                (this.sprite = e),
                (this.transformable = new Gr.a(e, {
                  drag: p,
                  frame: { thickness: 3 },
                  zoom: { minScale: u, maxScale: d },
                  remove: b,
                  rotation: f,
                  flipx: h,
                  flipy: g,
                })),
                (this.transformable.id = r),
                (this.transformable.uniqId = a),
                this.transformable.on("remove:touchend", function () {
                  n.app.removeSticker(n);
                }),
                this.transformable.setPosition(
                  Tiny.WIN_SIZE.width / 2,
                  Tiny.WIN_SIZE.height / 2
                ),
                m && this.transformable.fixedIndex(true),
                undefined !== o
                  ? v.addChildAt(this.transformable, o)
                  : v.addChild(this.transformable),
                this.app.unfocus(),
                t && this.transformable.activate(),
                (this.loaded = true);
            }),
            (e.prototype.getConfig = function () {
              return this.config;
            }),
            (e.prototype.getPosition = function () {
              return { x: this.transformable.x, y: this.transformable.y };
            }),
            (e.prototype.getScale = function () {
              var e = this.transformable.$spriteContainer.scale,
                t = this.sprite.scale;
              return { x: e.x * t.x, y: e.y * t.y };
            }),
            (e.prototype.getRotation = function () {
              var e;
              return (
                (null === (e = this.sprite) || undefined === e
                  ? undefined
                  : e.rotation) || 0
              );
            }),
            (e.prototype.setVisibility = function (e) {
              this.transformable && (this.transformable.visible = e);
            }),
            (e.prototype.lock = function () {
              this.transformable && this.transformable.setEventEnabled(false);
            }),
            (e.prototype.unlock = function () {
              this.transformable && this.transformable.setEventEnabled(true);
            }),
            (e.prototype.destroy = function () {
              this.app.getStickerContainer().removeChild(this.transformable);
            }),
            e
          );
        })(),
        Hr = __webpack_require__("aFFd"),
        Wr = __webpack_require__("8d1u"),
        Zr = (__webpack_require__("8K25"), __webpack_require__("2gqI")),
        Yr = __webpack_require__.n(Zr),
        Jr = __webpack_require__("3Koh"),
        qr = (function () {
          function e(e) {
            (this.renderer = e),
              (this.tablet = new Jr["Tablet"](e)),
              Jr["Brush"].add("half_middle", 30),
              Jr["Brush"].add("half_large", 50),
              (Jr["BRUSH_INK"].CUSTOM = "custom"),
              (Jr["BRUSH_INK_IMAGE"]["custom"] =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkFENEFCNjczRkVCMTFFQjk5RDdBOTU2QURDMjUzODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkFENEFCNjgzRkVCMTFFQjk5RDdBOTU2QURDMjUzODIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENUE3RTlEQzNGOTQxMUVCOTlEN0E5NTZBREMyNTM4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQUQ0QUI2NjNGRUIxMUVCOTlEN0E5NTZBREMyNTM4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpW1ffYAAAdKSURBVHja7JxnUxxHEIbn9vYCQcdxICww2JaEbBQcqmzL+de7XA7yB8u2ZEkgS6VIjke47O7i7brxCgp2NtzuaqbqraU4jp1+trenJ+Z6vZ6yJfriWAQWtAVtiwVtQVvQtljQFrQtFrQFbUHbYkFb0Lb4La7Jl3K5XJx1zJ3ys7f0Tvk50nLe0U83gQ8/pynvkeP5vKepS+p4pH+ePo+OEK6DOhVJZdIwaRTXIfy+gL8R0G1Si9QkHZIOSHVcj/D7Nh7EwKC7CQHsAuwIaYxUI01CE6RxUgWflwFbQLcAdJ+0S9oibZDWcWXt4PMjeHo3buDugAEX4K0M9x3SDGkOmgHkCryaAZfwnbwGugPYDYCsAzgDfk16RnpOekVaJW3D29txAh8EaAkPw/Dcd0mXSddIVwD4IuBLuPAboyWMsCevAfK/pCVcX5I2PcCj9SyTOUPDrEMatxJCwSzpQ9IN0kfwYgZ8Ad7rap5rknV0AJG9fA+hhL37Eek+6SHpBUJNQ2s8I8k64gItcZghXgLYT0i3SFcRNgRwXvPYwNmXBr2BkMLh4zHpL9KfAL6Mh9H2CztJ6Z2D17+KEMGAPyfdhBePw8vzEXSg9GxG3qYKYv80wtYUgD9B/G5GEUrcGCCXEBI4THwJLcCzR1AHJ6YHLsCLaGDHkdnUUJdHiOmNsGG7ERtWRlhg7/2WdBuN3gQ+c0IKEX7rVYBnFwG4ooWue6QVxPZu0kHrkD8lfU/6GvG4CgMHOc4iDfMQQod0kIpgcjds2G5ERhQRLrix+4H0DWkeKVthAF58VmiredJH6dSsIIz0kgZaOiE1xOHvSF8lFLK3zmOoZ0/r0reQFraCwnYjeB0voONxG0oy5JNgX4UXH6Db3kDHpxMEdtigy0iZPtMavmrCIXthV1HvffQed+Hd+0kArYcM7ox8gWstJZBPs2MDcXoHsJumsMMC7SBNeh/efB2NYUmlbxZHz/2vY1xE7zl2TP9pWFnGJBrAWxjHGFbpnSpzUP9Z2LMA+4qmb6cTcqVuoCEcU/3B+TQWGZsZgz03gzqPE0KFJKbNo5s9ldKQcVoImULjOB+kzQkDtPQAr2GQaBRpXhZKHvbMwb5LsDd20FIRfq0+wBhGMcUh47T2h+26jNTVyJGcgJVwMQL2njqeGRlR2Vsr4gDuNOwcNwkfQUGX8LRncS1lyJtPyqrmTN9aJ+CTLuPGHLsqKc80znpzZXaIgQ/5ZecEuHkeoUIGzssqu0vMxKlkGcSIenM+MzKPFtATeNqFDHqzN40dVf3ZmHxcoSOPBL5qcuOUpnojsHc4LtD6DEVF/X/2OqsenYedRvYGbQyLeLpZ6Amet6doZG/Q9K6Am7oZ9mZv9mFkb1DQMn3vvCWgje21K/79F6Olv07AG8rCwtiXwQ4IsKzn821vUNCyXLb9loBmO5sm9gYB3cVND1QES6gSWHR7fa/PcwK+RrySZ1f1V9L3Mh42ZAnwoV97g3h0B0+XV2DuK8NJyxSVDuzc1kCruEDzNoYNPOVWxj26BXs3TRwraOjgG67j5qGuvkxgfD6Cnesa6FhCh9ycPXoZsTqL2YdkG3uwcx2hoxtX6Ogh22DQL3BtZBR0E4Cfw07fK5acEJ40b7bhTTiv8Ep1Mxg2ODbLVrotk/YoaBdcGkReNvXU9GmnwJvZriews26SYTkhVOQIsWsRr5ZRRRKc0tVh1yLsPIp7rENPe7g1XkJlVjPSU+zCjlXYtQQ7W4MALRU6QIPIG214Z+pOyjMQaX92YM892Hdg6kBuSJWSVvmBOl6xxNPyPBPBk7b5lHqzOM/fsGtdJWB9dBcZB7fKf6jjpVO8okd2OzkpDBm83/Af2PMsaEblhviqSazmLb+86JGXIfDk7UWVnvV4Xjt+x9U4NocNWip5iBSIvUDWPxSU4Xq1AUHeRuN3B3a8hF2J2ZUl4x97aEBGVH/GmJe8JnlnlkDmxo835P9G+hV27KkQhoDdCF+9B6p/NA/DTeo2OC/kX0g/of6BQ0ZUoPUsZA0tdl5rZJKyRVlv+JoIF4/hxT+i3mth9nLdCA3gHhRvHbuLnFSO4hn0pntxBn30cRHh4mdATs2mex32supPA9UR8xaQmcR5jIRerzbStRWEiDvQQ5XCYyS83VjZfSonePEOrqgPRvHWRU6i2cL4xX2kcKk/GEWHLSN7OwDPva6PEbd551NFAz6Io37qKsLpODfGmNiGoWIwj+8+hWfztjneHzKpUnZ41XlLnKeE6QNZ3uPYriD98x7HNqz659z5OY6thbGKyI9jS9opYW/8Cw/wKsLHDDybY/e05uF+DxgUD36NWCwzQKEfMJh00F7gsshbVtTLXpEJqAbgZx2ZuQdP3dAa3U3VX3sS+pGZaQGtAxfoBUjAS1d+6BweLYfA7mtgW1Akh8CmDfRJ0FNxrHGaz4/WwXRUwg/qjjTrsMUs1bLFgragbbGgLWgL2hYL2oK2xYJOZPlPgAEAvXmh5ZG9SXMAAAAASUVORK5CYII="),
              this.tablet.start();
          }
          return (
            (e.prototype.getContainer = function () {
              return this.tablet;
            }),
            (e.prototype.createImageSprite = function () {
              return __awaiter(this, undefined, Promise, function () {
                var e, t;
                return __generator(this, function (n) {
                  return (
                    (e = this.tablet.getContentBounds()),
                    (t = new Image()),
                    (t.src = this.tablet.getImage()),
                    (this.imageURI = t.src),
                    [
                      2,
                      new Promise(function (n) {
                        t.onload = function () {
                          var i = new Tiny.BaseTexture(t),
                            r = new Tiny.Texture(i),
                            a = new Tiny.Sprite(r);
                          n({ sprite: a, imageURI: t.src, region: e });
                        };
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.getTablet = function () {
              return this.tablet;
            }),
            (e.prototype.getHistory = function () {
              return this.tablet.getHistory();
            }),
            (e.prototype.getStrokeNum = function () {
              var e = this.getHistory() || {};
              return e.sh && e.sh.length
                ? e.sh.filter(function (e) {
                    return 0 === e["O"];
                  }).length
                : 0;
            }),
            (e.prototype.getWriteTime = function () {
              var e = this.getHistory() || {};
              return e.sh && e.sh.length
                ? e.sh
                    .filter(function (e) {
                      return 0 === e["O"];
                    })
                    .reduce(function (e, t) {
                      var n = t["D"][t["D"].length - 1] || {};
                      return e + n["T"] || 0;
                    }, 0)
                : 0;
            }),
            (e.prototype.getContentBounds = function () {
              return this.tablet.getContentBounds();
            }),
            (e.prototype.changeFont = function (e) {
              this.tablet.clear();
              var t = e || {},
                n = t.brushInk,
                i = t.brushType,
                r = t.brushPressureVelocity,
                a = t.id;
              undefined !== i && this.tablet.selectBrush(Number(i)),
                undefined !== n &&
                  ("23" === a
                    ? this.tablet.setBrushInk("custom")
                    : this.tablet.setBrushInk(n)),
                undefined !== r && this.tablet.setPressureVelocity(Number(r));
            }),
            (e.prototype.undo = function () {
              this.tablet.undo();
            }),
            (e.prototype.clear = function () {
              this.tablet.clear();
            }),
            (e.prototype.lock = function () {
              this.tablet.lock();
            }),
            (e.prototype.unlock = function () {
              this.tablet.unlock();
            }),
            (e.prototype.hide = function () {
              this.tablet.visible = false;
            }),
            (e.prototype.show = function () {
              this.tablet.visible = true;
            }),
            (e.prototype.getImageURI = function () {
              return this.imageURI;
            }),
            (e.prototype.getPlainHistory = function () {
              return this.tablet.getPlainHistory();
            }),
            (e.prototype.getPlayer = function (e) {
              return new Jr["Player"](this.renderer, e);
            }),
            e
          );
        })(),
        Kr = 54,
        $r = 40,
        ea = 70,
        ta = 70,
        na = 20,
        ia = [
          { fontSize: 34 },
          { fontSize: 34 },
          { fontSize: 34 },
          { fontSize: 34 },
          { fontSize: 31 },
          { fontSize: 27 },
        ],
        ra = (function () {
          function e(e, t, n, i) {
            (this.prePeriod = e),
              (this.container = new Tiny.Container()),
              e
                ? ((this.width = $r),
                  (this.height = Kr),
                  (this.patch = [13, 13, 13, 28]))
                : ((this.width = ta),
                  (this.height = ea),
                  (this.patch = [23, 34, 24, 2])),
              (this.stamp = new Hr["NinePatch"](
                Tiny.TextureCache[e ? "stamp-pre" : "stamp"],
                this.width,
                this.height,
                this.patch
              )),
              (this.text = new Tiny.Text("", {
                fontFamily: "PingFang SC",
                fontWeight: "bold",
                fill: "#EA1525",
                wordWrap: true,
                align: "center",
              })),
              (this.tipSprite = new Tiny.Sprite(
                Tiny.TextureCache["stamp-tip"]
              )),
              this.container.addChild(this.stamp),
              this.container.addChild(this.text),
              this.container.setEventEnabled(true),
              this.container.on("touchstart", function (e) {
                e.stopPropagation(), i();
              }),
              t.addChild(this.container),
              n.addChild(this.tipSprite);
          }
          return (
            (e.prototype.updateText = function (e) {
              this.text.text = e.split("").join("\n");
              var t = e.length,
                n = this.prePeriod ? na : ia[t - 1].fontSize;
              (this.text.style.fontSize = n),
                (this.text.style.wordWrapWidth = n),
                (this.text.style.lineHeight = n + 2);
              var i = 2 * (this.prePeriod ? 13 : 34),
                r = t * (n + 2);
              !this.prePeriod && t > 4 && (r = 4 * ia[3].fontSize + 20);
              var a = Math.max(r + i, this.height);
              this.stamp.resize(null, a),
                this.text.setPosition(
                  this.width / 2 - n / 2,
                  (a - t * (n + 2)) / 2
                ),
                this.prePeriod
                  ? this.container.setPosition(
                      0.75 * Tiny.WIN_SIZE.width,
                      Tiny.WIN_SIZE.height / 2 - a / 2
                    )
                  : this.container.setPosition(
                      0.88 * Tiny.WIN_SIZE.width,
                      0.8 * Tiny.WIN_SIZE.height - a / 2
                    ),
                this.prePeriod
                  ? this.tipSprite.setPosition(
                      0.75 * Tiny.WIN_SIZE.width - this.tipSprite.width + 55,
                      Tiny.WIN_SIZE.height / 2 - a / 2 - this.tipSprite.height
                    )
                  : this.tipSprite.setPosition(
                      0.88 * Tiny.WIN_SIZE.width -
                        this.tipSprite.width +
                        this.width,
                      0.8 * Tiny.WIN_SIZE.height -
                        a / 2 -
                        this.tipSprite.height -
                        10
                    );
            }),
            (e.prototype.getContainer = function () {
              return this.container;
            }),
            (e.prototype.getText = function () {
              return this.text.text === clickToSignText.split("").join("\n")
                ? ""
                : this.text.text;
            }),
            (e.prototype.hideTip = function () {
              this.tipSprite && (this.tipSprite.visible = false);
            }),
            (e.prototype.hide = function () {
              (this.container.visible = false),
                this.tipSprite && (this.tipSprite.visible = false);
            }),
            (e.prototype.show = function (e) {
              if (((this.container.visible = true), e && this.tipSprite)) {
                (this.tipSprite.visible = true), this.tipSprite.setOpacity(1);
                var t = Tiny.FadeOut(300);
                t.setDelay(2e3), this.tipSprite.runAction(t);
              }
            }),
            (e.prototype.destroy = function () {
              (this.text.text = ""),
                this.stamp.resize(null, this.height),
                this.hide();
            }),
            e
          );
        })(),
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            __assign.apply(this, arguments)
          );
        };
      function ca(e, t) {
        var n,
          i,
          r,
          a,
          o,
          s,
          l =
            (null === (n = e) || undefined === n ? undefined : n.resolution) /
              (null === (i = t) || undefined === i
                ? undefined
                : i.resolution) || 1,
          c =
            ((null === (r = e) || undefined === r ? undefined : r.width) * l) /
            (null === (a = t) || undefined === a ? undefined : a.width),
          u =
            ((null === (o = e) || undefined === o ? undefined : o.height) * l) /
            (null === (s = t) || undefined === s ? undefined : s.height);
        return { scaleX: c, scaleY: u };
      }
      var ua = (function () {
          function e(e) {
            (this.options = e),
              (this.stickers = []),
              (this.writeRegionRatio = 0),
              (this.container = new Tiny.Container()),
              (this.mainContainer = new Tiny.Container()),
              (this.tabletContainer = new Tiny.Container()),
              (this.stickerContainer = new Tiny.Container()),
              (this.stampContainer = new Tiny.Container()),
              (this.bgContainer = new Tiny.Container()),
              (this.replayContainer = new Tiny.Container()),
              (this.replayStickerContainer = new Tiny.Container());
          }
          return (
            Object.defineProperty(e.prototype, "rendererScale", {
              get: function () {
                var e, t;
                return ca(
                  null === (e = this.app) || undefined === e
                    ? undefined
                    : e.renderer,
                  null === (t = this.renderingData) || undefined === t
                    ? undefined
                    : t.renderer
                );
              },
              enumerable: true,
              configurable: true,
            }),
            Object.defineProperty(e.prototype, "renderer", {
              get: function () {
                var e;
                return null === (e = this.app) || undefined === e
                  ? undefined
                  : e.renderer;
              },
              enumerable: true,
              configurable: true,
            }),
            (e.prototype.init = function () {
              var e, t;
              return __awaiter(this, undefined, undefined, function () {
                var n,
                  i,
                  r,
                  a,
                  this_ = this;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n =
                          null === (e = this.options.downgradeResult) ||
                          undefined === e
                            ? undefined
                            : e.resultType),
                        (i =
                          "low" ===
                          (null === (t = this.options.downgradeResult) ||
                          undefined === t
                            ? undefined
                            : t.deviceLevel)),
                        (r = !i && 1 === n),
                        (a = i || r),
                        (this.app = new Tiny.Application({
                          renderType: a ? 2 : Yr.a.renderType,
                          extraContextAttributes: {
                            acceleration: Yr.a.acceleration,
                          },
                          fixSize: true,
                          width: baseScreenWidth * this.options.rate,
                          height: baseScreenWidth * this.options.rate,
                          dpi: 2,
                          fps: a ? 30 : 60,
                          canvasId: "artboard",
                          renderOptions: {
                            transparent: true,
                            preserveDrawingBuffer: true,
                          },
                        })),
                        [
                          4,
                          new Promise(function (res) {
                            Tiny.Loader.add([
                              {
                                name: "stamp",
                                url:
                                  baseUrl + "/A*cqacRKyG18EAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                              {
                                name: "stamp-pre",
                                url:
                                  baseUrl + "/A*Z8xgS6EhL-IAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                              {
                                name: "stamp-tip",
                                url:
                                  baseUrl + "/A*VZppQYqYbloAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                              {
                                name: "decorate-bg",
                                url:
                                  baseUrl + "/A*uo9TQrc5YQcAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                              {
                                name: "decorate-pre-bg",
                                url:
                                  baseUrl + "/A*prjlQbF1crQAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                              {
                                name: "decorate-pre-top-bg",
                                url:
                                  baseUrl + "/A*45uzSpugPuAAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                              {
                                name: "save-bg",
                                url:
                                  baseUrl + "/A*NPIgSKpRA5IAAAAAAAAAAAAAARQnAQ",
                                loadType: Tiny.loaders.Resource.LOAD_TYPE.IMAGE,
                              },
                            ]).load(function () {
                              res(this_);
                              var t =
                                  Tiny.TextureCache[
                                    this_.options.prePeriod
                                      ? "decorate-pre-bg"
                                      : "decorate-bg"
                                  ],
                                n = new Tiny.Sprite(t);
                              (n.width = Tiny.WIN_SIZE.width),
                                (n.height = Tiny.WIN_SIZE.height),
                                (this_.bgContainer = new Tiny.Container()),
                                this_.bgContainer.addChild(n),
                                (this_.bgContainer.visible = false);
                              var i = Tiny.TextureCache["save-bg"],
                                r = new Tiny.Sprite(i);
                              if (
                                ((r.width = Tiny.WIN_SIZE.width),
                                (r.height = Tiny.WIN_SIZE.height),
                                (this_.saveContainer = new Tiny.Container()),
                                this_.saveContainer.addChild(r),
                                (this_.saveContainer.visible = false),
                                this_.container.addChild(this_.saveContainer),
                                this_.container.addChild(this_.bgContainer),
                                this_.container.addChild(this_.mainContainer),
                                this_.container.addChild(this_.replayContainer),
                                this_.mainContainer.addChild(
                                  this_.tabletContainer
                                ),
                                this_.mainContainer.addChild(
                                  this_.stickerContainer
                                ),
                                this_.options.prePeriod)
                              ) {
                                (this_.preTopContainer = new Tiny.Container()),
                                  this_.container.addChild(
                                    this_.preTopContainer
                                  );
                                var a =
                                    Tiny.TextureCache["decorate-pre-top-bg"],
                                  s = new Tiny.Sprite(a);
                                (s.width = Tiny.WIN_SIZE.width),
                                  (s.height = Tiny.WIN_SIZE.height),
                                  this_.preTopContainer.addChild(s),
                                  (this_.preTopContainer.visible = false);
                              }
                              if (
                                (this_.mainContainer.addChild(
                                  this_.stampContainer
                                ),
                                (this_.stickerContainer.hitArea = new Tiny.Rectangle(
                                  0,
                                  0,
                                  Tiny.WIN_SIZE.width,
                                  Tiny.WIN_SIZE.height
                                )),
                                this_.stickerContainer.on(
                                  "pointerdown",
                                  Gr.a.deactivateAll
                                ),
                                this_.options.prePeriod)
                              ) {
                                var l = Tiny.WIN_SIZE.width,
                                  c = new Tiny.Graphics();
                                c.lineStyle(0),
                                  c.beginFill(16777215),
                                  c.drawPolygon([
                                    l / 2,
                                    0,
                                    l,
                                    l / 2,
                                    l / 2,
                                    l,
                                    0,
                                    l / 2,
                                  ]),
                                  c.endFill(),
                                  (this_.prePeriodMask = c);
                              } else {
                                l = Tiny.WIN_SIZE.width;
                                var u = 2;
                                (this_.borderGraphics = new Tiny.Graphics()),
                                  this_.borderGraphics.lineStyle(
                                    u,
                                    16702904,
                                    1
                                  ),
                                  this_.borderGraphics.drawRoundedRect(
                                    0 + u / 2,
                                    0 + u / 2,
                                    l - u,
                                    l - u,
                                    30
                                  ),
                                  (this_.borderGraphics.visible = false),
                                  this_.container.addChild(
                                    this_.borderGraphics
                                  );
                                c = new Tiny.Graphics();
                                c.lineStyle(0),
                                  c.beginFill(16777215),
                                  c.drawRoundedRect(0, 0, l, l, 30),
                                  c.endFill(),
                                  (this_.mainMask = c);
                              }
                              (this_.tablet = new qr(this_.app.renderer)),
                                this_.options.degradeLevel ===
                                  degradeLevelCodes.None &&
                                  (this_.tabletContainer.addChild(
                                    this_.tablet.getContainer()
                                  ),
                                  this_.tablet
                                    .getTablet()
                                    .on("stroke-begin", function () {
                                      var e;
                                      this_.tabletChangedCallback &&
                                        this_.tabletChangedCallback(
                                          true,
                                          null === (e = this_.tablet) ||
                                            undefined === e
                                            ? undefined
                                            : e.getStrokeNum()
                                        );
                                    }),
                                  this_.tablet.hide()),
                                (this_.stamp = new ra(
                                  this_.options.prePeriod,
                                  this_.stampContainer,
                                  this_.container,
                                  function () {
                                    this_.stampClickCallback &&
                                      this_.stampClickCallback();
                                  }
                                )),
                                this_.stamp.hide(),
                                this_.app.run(this_.container);
                            });
                          }),
                        ]
                      );
                    case 1:
                      return s.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.onTabletChanged = function (e) {
              this.tabletChangedCallback = e;
            }),
            (e.prototype.onStampClicked = function (e) {
              this.stampClickCallback = e;
            }),
            (e.prototype.onReplayCallback = function (e) {
              this.replayCallback = e;
            }),
            (e.prototype.onToastCallback = function (e) {
              this.toastCallback = e;
            }),
            (e.prototype.getMainContainerBounds = function () {
              return this.app.renderer.view.getBoundingClientRect();
            }),
            (e.prototype.getMainContainer = function () {
              return this.mainContainer;
            }),
            (e.prototype.getStickerContainer = function () {
              return this.stickerContainer;
            }),
            (e.prototype.getStampContainer = function () {
              return this.stampContainer;
            }),
            (e.prototype.getTablet = function () {
              return this.tablet;
            }),
            (e.prototype.getStamp = function () {
              return this.stamp;
            }),
            (e.prototype.getWriteRegionRatio = function () {
              return this.writeRegionRatio;
            }),
            (e.prototype.getStickerNum = function () {
              return this.stickers.length - 1;
            }),
            (e.prototype.getFinalImage = function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s,
                l,
                c = "",
                u = "",
                d = "",
                m = this.app.renderer,
                p = m.width,
                f = m.height,
                h = m.resolution,
                g = new Tiny.Rectangle(
                  0,
                  0,
                  (null === (t = e) || undefined === t ? undefined : t.size)
                    ? null === (n = e) || undefined === n
                      ? undefined
                      : n.size.width
                    : p / h,
                  (null === (i = e) || undefined === i ? undefined : i.size)
                    ? null === (r = e) || undefined === r
                      ? undefined
                      : r.size.height
                    : f / h
                );
              return (
                this.hideBorderGraphics(),
                this.mainMask &&
                  (this.stickerContainer.removeChild(this.mainMask),
                  (this.stickerContainer.mask = undefined)),
                (null === (a = e) || undefined === a
                  ? undefined
                  : a.imageData) &&
                  ((l = this.app.renderer.plugins.extract.canvas(
                    this.container,
                    g
                  )),
                  (c = Wr["scale"](
                    l,
                    basePhotoWidth,
                    basePhotoWidth,
                    "transparent"
                  ).toDataURL())),
                (null === (o = e) || undefined === o
                  ? undefined
                  : o.iosSnapshotImageData) &&
                  ((l = this.app.renderer.plugins.extract.canvas(
                    this.container,
                    g
                  )),
                  (d = l.toDataURL())),
                (null === (s = e) || undefined === s
                  ? undefined
                  : s.xNNImageData) &&
                  ((this.saveContainer.visible = true),
                  (l = this.app.renderer.plugins.extract.canvas(
                    this.container,
                    g
                  )),
                  (u = Wr["scale"](l, basePrintWidth, basePrintWidth).toDataURL(
                    "image/jpeg"
                  )),
                  (this.saveContainer.visible = false)),
                this.mainMask &&
                  (this.stickerContainer.addChild(this.mainMask),
                  (this.stickerContainer.mask = this.mainMask)),
                { imageData: c, xNNImageData: u, iosSnapshotImageData: d }
              );
            }),
            (e.prototype.addSticker = function (e, t) {
              if (this.stickers.length >= this.options.maxStickNum + 1)
                this.toastCallback &&
                  this.toastCallback(this.options.stickerMaxCountText);
              else {
                e.index = t;
                var n = new Qr(e, this);
                this.stickers.push(n);
              }
            }),
            (e.prototype.unfocus = function () {
              Gr.a.deactivateAll();
            }),
            (e.prototype.lockAllStickers = function () {
              this.stickers.forEach(function (e) {
                e.lock();
              });
            }),
            (e.prototype.unlockAllStickers = function () {
              this.stickers.forEach(function (e) {
                e.unlock();
              });
            }),
            (e.prototype.changeFont = function (e) {
              var t;
              return __awaiter(this, undefined, undefined, function () {
                return __generator(this, function (n) {
                  return (
                    (this.activeFont = e),
                    this.options.degradeLevel === degradeLevelCodes.None &&
                      (null === (t = this.getTablet()) ||
                        undefined === t ||
                        t.changeFont(e)),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.createDegradeBlessingSprite = function (e) {
              var t;
              return __awaiter(this, undefined, undefined, function () {
                var n;
                return __generator(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = this),
                        [4, this.generateSpriteFromURI(e.degradeUrl)]
                      );
                    case 1:
                      return (
                        (n.blessingSprite = i.sent()),
                        null === (t = this.blessingSprite) ||
                          undefined === t ||
                          t.setPosition(0, 0),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.checkFuImage = function () {
              var e, t, n, i;
              return __awaiter(this, undefined, Promise, function () {
                var r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  u,
                  d,
                  m,
                  p,
                  f,
                  h,
                  g,
                  b,
                  v,
                  A,
                  _,
                  y,
                  w,
                  k,
                  x,
                  E,
                  S,
                  T,
                  C;
                return __generator(this, function (I) {
                  switch (I.label) {
                    case 0:
                      return this.options.degradeLevel ===
                        degradeLevelCodes.Static && this.activeFont
                        ? ((r = this),
                          [
                            4,
                            this.generateSpriteFromURI(
                              this.activeFont.degradeUrl
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return (
                        (r.blessingSprite = I.sent()),
                        null === (e = this.blessingSprite) ||
                          undefined === e ||
                          e.setPosition(0, 0),
                        (this.blessingRegion =
                          null === (t = this.blessingSprite) || undefined === t
                            ? undefined
                            : t.getLocalBounds()),
                        [2, { success: true, imageURI: "", pureImageURI: "" }]
                      );
                    case 2:
                      return (
                        (a =
                          null === (n = this.app) || undefined === n
                            ? undefined
                            : n.renderer),
                        (o = a.width),
                        (s = a.height),
                        (l = a.resolution),
                        [
                          4,
                          null === (i = this.tablet) || undefined === i
                            ? undefined
                            : i.createImageSprite(),
                        ]
                      );
                    case 3:
                      return (
                        (c = I.sent()),
                        (u = c.sprite),
                        (d = c.region),
                        (this.blessingSprite = u),
                        (this.blessingRegion = d),
                        (m = [d.x + d.width / 2, d.y + d.height / 2]),
                        (p =
                          Math.max(d.width, d.height) *
                          (1 + this.options.fuRegionPaddingRatio)),
                        (f = m[0] - p / 2),
                        (h = m[1] - p / 2),
                        (g = new Tiny.Rectangle(f, h, p, p)),
                        (v = ""),
                        this.options.prePeriod &&
                          ((A = Math.max(d.width, d.height)),
                          (_ = m[0] - A / 2),
                          (y = m[1] - A / 2),
                          (w = new Tiny.Rectangle(_, y, A, A)),
                          (b = this.app.renderer.plugins.extract.canvas(
                            this.mainContainer,
                            w
                          )),
                          (v = Wr["scale"](b, o, s, "transparent").toDataURL(
                            "image/png"
                          ))),
                        (b = this.app.renderer.plugins.extract.canvas(
                          this.mainContainer,
                          g
                        )),
                        (k = Wr["scale"](
                          b,
                          basePrintWidth,
                          basePrintWidth,
                          16777215
                        ).toDataURL("image/jpeg")),
                        (this.writeRegionRatio =
                          (d.width * d.height) / (((o / l) * s) / l)),
                        this.writeRegionRatio <
                        this.options.writeRegionThreshold
                          ? [
                              2,
                              {
                                success: false,
                                imageURI: k,
                                errorMessage: fuDetectErrorHints.TinyFu,
                                pureImageURI: v,
                                errorCode: fuDetectErrorCodes.TinyFu,
                              },
                            ]
                          : [4, this.checkFu(k, this.options.modelCloudKeyFu)]
                      );
                    case 4:
                      return (
                        (x = I.sent()),
                        (E = x.success),
                        (S = x.errorMessage),
                        (T = x.errorCode),
                        (C = x.originalResult),
                        [
                          2,
                          {
                            success: E,
                            imageURI: k,
                            errorMessage: S,
                            errorCode: T,
                            originalResult: C,
                            pureImageURI: v,
                          },
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.checkFinalImage = function (e) {
              return __awaiter(this, undefined, undefined, function () {
                var t, n, i, r, a;
                return __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        this.checkFu(e, this.options.modelCloudKeyComplete),
                      ];
                    case 1:
                      return (
                        (t = o.sent()),
                        (n = t.success),
                        (i = t.errorMessage),
                        (r = t.originalResult),
                        (a = t.localJudgeResult),
                        [
                          2,
                          {
                            success: n,
                            errorMessage: i,
                            originalResult: r,
                            localJudgeResult: a,
                          },
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.showBorderGraphics = function () {
              this.borderGraphics && (this.borderGraphics.visible = true);
            }),
            (e.prototype.hideBorderGraphics = function () {
              this.borderGraphics && (this.borderGraphics.visible = false);
            }),
            (e.prototype.showTablet = function () {
              this.tablet && (this.tablet.unlock(), this.tablet.show()),
                this.stickerContainer.setEventEnabled(false),
                this.options.prePeriod
                  ? (this.stickerContainer.removeChild(this.prePeriodMask),
                    (this.stickerContainer.mask = undefined),
                    this.preTopContainer &&
                      (this.preTopContainer.visible = false))
                  : (this.stickerContainer.removeChild(this.mainMask),
                    (this.stickerContainer.mask = undefined));
              var e = this.stickers.findIndex(function (e) {
                return e.getConfig().id === Ur;
              });
              e > -1 &&
                (this.stickers[e].destroy(), this.stickers.splice(e, 1)),
                this.setStickerVisibility(false),
                this.hideBorderGraphics();
            }),
            (e.prototype.hideTablet = function () {
              var e, t;
              return __awaiter(this, undefined, undefined, function () {
                var n, i;
                return __generator(this, function (r) {
                  return (
                    (n = this.getTablet()),
                    n && (n.lock(), n.hide()),
                    this.stickerContainer.setEventEnabled(true),
                    (i =
                      window.Tiny.WIN_SIZE.width /
                      Math.max(
                        (null === (e = this.blessingSprite) || undefined === e
                          ? undefined
                          : e.width) || 0,
                        (null === (t = this.blessingSprite) || undefined === t
                          ? undefined
                          : t.height) || 0
                      )),
                    this.addSticker(
                      {
                        id: Ur,
                        uniqId: -1,
                        name: "fu",
                        url: "",
                        thumbUrl: "",
                        sprite: this.blessingSprite,
                        initialScale: this.options.fuInitialScale,
                        focusLayerConfig: {
                          maxZoom: i || this.options.fuMaxScale,
                          minZoom: this.options.fuMinScale,
                          enableDelete: false,
                          enableFlipX: false,
                          enableFlipY: false,
                          enableRotate: false,
                          enableScale: true,
                          enableRotate180: false,
                          enableMove: false,
                          fixedIndex: true,
                        },
                      },
                      0
                    ),
                    this.options.prePeriod
                      ? (this.stickerContainer.addChild(this.prePeriodMask),
                        (this.stickerContainer.mask = this.prePeriodMask),
                        this.preTopContainer &&
                          (this.preTopContainer.visible = true))
                      : (this.stickerContainer.addChild(this.mainMask),
                        (this.stickerContainer.mask = this.mainMask)),
                    this.setStickerVisibility(true),
                    this.showBorderGraphics(),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.showBackground = function () {
              this.bgContainer.visible = true;
            }),
            (e.prototype.hideBackground = function () {
              this.bgContainer.visible = false;
            }),
            (e.prototype.updateStamp = function (e) {
              var t;
              null === (t = this.stamp) || undefined === t || t.updateText(e);
            }),
            (e.prototype.replay = function () {
              var e, t, n, i, r;
              return __awaiter(this, undefined, undefined, function () {
                var a;
                return __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (a = new Date().getTime()),
                        nn.info("replay", ["started"]),
                        this.replayCallback && this.replayCallback(true),
                        this.replayContainer &&
                          this.replayContainer.removeChildren(),
                        (
                          null === (e = this.options.downgradeResult) ||
                          undefined === e
                            ? undefined
                            : e.replay
                        )
                          ? ((this.mainContainer.visible = false),
                            this.replayContainer.addChild(this.lastImgSprite),
                            [2])
                          : this.renderingData
                          ? ((this.mainContainer.visible = false),
                            this.replayContainer.setPosition(0, 0),
                            (this.replayContainer.width =
                              (null ===
                                (n =
                                  null === (t = this.renderingData) ||
                                  undefined === t
                                    ? undefined
                                    : t.renderer) || undefined === n
                                ? undefined
                                : n.width) || 0),
                            (this.replayContainer.height =
                              (null ===
                                (r =
                                  null === (i = this.renderingData) ||
                                  undefined === i
                                    ? undefined
                                    : i.renderer) || undefined === r
                                ? undefined
                                : r.height) || 0),
                            this.options.prePeriod
                              ? (this.replayContainer.addChild(
                                  this.prePeriodMask
                                ),
                                (this.replayContainer.mask = this.prePeriodMask),
                                this.preTopContainer &&
                                  (this.preTopContainer.visible = true))
                              : (this.replayContainer.mask = this.mainMask),
                            [4, _n(300)])
                          : [3, 5]
                      );
                    case 1:
                      return o.sent(), [4, this.replayTablet()];
                    case 2:
                      return o.sent(), [4, this.replayStickers()];
                    case 3:
                      return o.sent(), [4, this.replayStamp()];
                    case 4:
                      o.sent(), (o.label = 5);
                    case 5:
                      return (
                        this.replayCallback && this.replayCallback(false),
                        nn.info("replay", ["ended"]),
                        nn.info("replay time consuming(ms)", [
                          new Date().getTime() - a,
                        ]),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.saveTableFile = function () {
              var e, t;
              return __awaiter(this, undefined, Promise, function () {
                var n, i, r, a, o;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n =
                          null === (e = this.tablet) || undefined === e
                            ? undefined
                            : e.getPlainHistory()),
                        (i = ""),
                        [4, AlipayJSAPI.call("createSharedBiz")]
                      );
                    case 1:
                      if (
                        ((r = s.sent()),
                        (a =
                          null === (t = r) || undefined === t
                            ? undefined
                            : t.sharedBiz),
                        !a)
                      )
                        return [3, 6];
                      s.label = 2;
                    case 2:
                      return (
                        s.trys.push([2, 5, , 6]),
                        [
                          4,
                          AlipayJSAPI.call("fsManage", {
                            action: "writeFile",
                            filePath: "https://shared/sxf_tablet.txt",
                            data: n,
                            sharedBiz: a,
                          }),
                        ]
                      );
                    case 3:
                      return (
                        s.sent(),
                        [
                          4,
                          AlipayJSAPI.call("uploadFileToAliCloud", {
                            filePath: "https://shared/sxf_tablet.txt",
                            bizType: bizTypes.Tablet,
                            fileType: "txt",
                            needDelete: true,
                            hideLoading: true,
                            sharedBiz: a,
                          }),
                        ]
                      );
                    case 4:
                      return (o = s.sent().fileUrl), (i = o), [3, 6];
                    case 5:
                      return s.sent(), [3, 6];
                    case 6:
                      return [2, { tabletFileUrl: i }];
                  }
                });
              });
            }),
            (e.prototype.getRenderData = function () {
              return this.renderingData;
            }),
            (e.prototype.getRendererParams = function () {
              return {
                width: this.app.renderer.width,
                height: this.app.renderer.height,
                resolution: this.app.renderer.resolution,
              };
            }),
            (e.prototype.saveRenderData = function (e, t) {
              var n,
                i,
                r,
                a,
                this_ = this;
              if (e)
                return (this.renderingData = e), void (this.plainHistory = t);
              var s = this.stickerContainer.children.filter(function (e) {
                return !!e.id && e.id !== Ur;
              });
              nn.info("stickers", [
                s
                  .map(function (e) {
                    return e.id + ":" + e.uniqId;
                  })
                  .join(","),
              ]),
                (this.plainHistory = undefined);
              var l = s
                  .map(function (e) {
                    return this_.stickers.find(function (t) {
                      return t.getConfig().uniqId === e.uniqId;
                    });
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .map(function (e) {
                    var t = e.getScale(),
                      n = e.getRotation(),
                      i = e.getPosition();
                    return {
                      id: e.getConfig().id,
                      position: { x: hn(i.x, 2), y: hn(i.y, 2) },
                      scale: { x: hn(t.x, 2) || 1, y: hn(t.y, 2) || 1 },
                      rotation: hn(n, 2),
                    };
                  }),
                c = this.getFuSticker();
              if (c) {
                var u = c.getScale(),
                  d = c.getPosition();
                this.renderingData = {
                  degradeLevel: this.options.degradeLevel,
                  renderer: this.getRendererParams(),
                  stickers: l,
                  tablet: {
                    degradeFontImgId:
                      this.options.degradeLevel === degradeLevelCodes.None
                        ? ""
                        : (null === (n = this.activeFont) || undefined === n
                            ? undefined
                            : n.degradeUrl) || "",
                    position: { x: hn(d.x, 2), y: hn(d.y, 2) },
                    scale: { x: hn(u.x, 2) || 1, y: hn(u.y, 2) || 1 },
                    size: {
                      width: hn(
                        (this.blessingSprite.width * u.x) /
                          this.options.fuInitialScale,
                        2
                      ),
                      height: hn(
                        (this.blessingSprite.height * u.x) /
                          this.options.fuInitialScale,
                        2
                      ),
                    },
                    region: {
                      x: hn(this.blessingRegion.x, 2),
                      y: hn(this.blessingRegion.y, 2),
                    },
                    needRotate180:
                      (this.blessingSprite.rotation / Math.PI) % 2 === 1,
                  },
                  stamp: {
                    position: {
                      x:
                        hn(
                          (null === (i = this.stamp) || undefined === i
                            ? undefined
                            : i.getContainer().x) || 0,
                          2
                        ) || 0,
                      y:
                        hn(
                          (null === (r = this.stamp) || undefined === r
                            ? undefined
                            : r.getContainer().y) || 0,
                          2
                        ) || 0,
                    },
                    text:
                      (null === (a = this.stamp) || undefined === a
                        ? undefined
                        : a.getText().trim()) || "",
                  },
                };
              }
            }),
            (e.prototype.clearStickers = function () {
              this.stickers.forEach(function (e) {
                return e.destroy();
              }),
                (this.stickers = []);
            }),
            (e.prototype.removeSticker = function (e) {
              e.destroy(), Tiny.arrayRemoveObject(this.stickers, e);
            }),
            (e.prototype.clearStamp = function () {
              var e;
              null === (e = this.stamp) || undefined === e || e.destroy();
            }),
            (e.prototype.setLastImg = function (e) {
              return __awaiter(this, undefined, undefined, function () {
                var t;
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = this),
                        [
                          4,
                          this.generateSpriteFromURI(
                            "" + base64ImagePrefix + e
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t.lastImgSprite = n.sent()),
                        this.lastImgSprite &&
                          ((this.lastImgSprite.width = Tiny.WIN_SIZE.width),
                          (this.lastImgSprite.height = Tiny.WIN_SIZE.height)),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.reset = function () {
              var e, t;
              this.showTablet(),
                this.hideBackground(),
                null === (e = this.tablet) || undefined === e || e.unlock(),
                null === (t = this.tablet) || undefined === t || t.clear(),
                this.clearStickers(),
                this.clearStamp(),
                (this.renderingData = undefined),
                (this.writeRegionRatio = 0),
                (this.mainContainer.visible = true),
                this.lastImgSprite &&
                  (this.mainContainer.removeChild(this.lastImgSprite),
                  (this.lastImgSprite = undefined)),
                this.blessingSprite &&
                  (this.mainContainer.removeChild(this.blessingSprite),
                  (this.blessingSprite = undefined)),
                this.replayContainer && this.replayContainer.removeChildren(),
                this.replayStickerContainer &&
                  this.replayStickerContainer.removeChildren();
            }),
            (e.prototype.uploadFuImage = function (e, t, n) {
              return (
                undefined === t && (t = bizTypes.Fu),
                undefined === n && (n = 4),
                __awaiter(this, undefined, Promise, function () {
                  var i;
                  return __generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 2, , 3]),
                          [
                            4,
                            AlipayJSAPI.call("uploadImage", {
                              data: e.replace(/^.+base64,/g, ""),
                              dataType: "dataURL",
                              business: t,
                              compress: n,
                              publicDomain: true,
                            }),
                          ]
                        );
                      case 1:
                        return (i = r.sent().multimediaID), [2, i];
                      case 2:
                        return (
                          r.sent(),
                          nn.error("image upload failed", ["business: " + t]),
                          [3, 3]
                        );
                      case 3:
                        return [2, ""];
                    }
                  });
                })
              );
            }),
            (e.prototype.checkFu = function (e, t) {
              return __awaiter(this, undefined, Promise, function () {
                var n, i, r, a, o, s, l, c, u, d, m, p, f, h, g, b;
                return __generator(this, function (v) {
                  switch (v.label) {
                    case 0:
                      return this.options.forceServerReg
                        ? ((i = fuErrorCodes.UNKNOWN), (n = {}), [3, 8])
                        : [3, 1];
                    case 1:
                      return (
                        v.trys.push([1, 4, 5, 8]),
                        [
                          4,
                          AlipayJSAPI.call("startXMediaCoreBiz", {
                            bizId: bizTypes.Fu,
                            bizType: "commonCV",
                            options: { modelCloudKey: t },
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (n = v.sent()),
                        (a = n.processId),
                        (s =
                          (this.blessingSprite.rotation / Math.PI) % 2 === 1),
                        (l =
                          t === this.options.modelCloudKeyComplete && fn(t)
                            ? this.getFuSpriteRatio()
                            : [0, 0, 1, 1]),
                        [
                          4,
                          AlipayJSAPI.call("runXMediaCoreBiz", {
                            processId: a,
                            source: 0,
                            imageBase64: e.replace(/^.+base64,/g, ""),
                            options: {
                              rotation:
                                t === this.options.modelCloudKeyFu
                                  ? 0
                                  : s
                                  ? 180
                                  : 0,
                              roi: l,
                            },
                          }),
                        ]
                      );
                    case 3:
                      return (
                        (n = v.sent()),
                        (c = this.extractFuResult(n.result && n.result[0], t)),
                        (f = c.code),
                        (h = c.errorCode),
                        (g = c.message),
                        (i = f),
                        (r = h),
                        (o = g),
                        [3, 8]
                      );
                    case 4:
                      return v.sent(), (i = fuErrorCodes.UNKNOWN), [3, 8];
                    case 5:
                      return a
                        ? [
                            4,
                            AlipayJSAPI.call("stopXMediaCoreBiz", {
                              processId: a,
                            }),
                          ]
                        : [3, 7];
                    case 6:
                      v.sent(), (v.label = 7);
                    case 7:
                      return [7];
                    case 8:
                      if (t === this.options.modelCloudKeyComplete)
                        return [
                          2,
                          {
                            success:
                              i === fuErrorCodes.FU ||
                              i === fuErrorCodes.UNKNOWN,
                            errorMessage: o || fuDetectErrorHints.NotFu,
                            errorCode: r || fuDetectErrorCodes.NotFu,
                            originalResult: n,
                            localJudgeResult: Number(i),
                          },
                        ];
                      v.label = 9;
                    case 9:
                      return (
                        v.trys.push([9, 16, , 17]),
                        i !== fuErrorCodes.UNKNOWN
                          ? [3, 14]
                          : [4, this.uploadFuImage(e)]
                      );
                    case 10:
                      return (
                        (u = v.sent()),
                        u ? [4, nr({ imageId: u, identify: i })] : [3, 12]
                      );
                    case 11:
                      return (
                        (d = v.sent().judgeResult),
                        d
                          ? ((m = JSON.parse(d)),
                            (p = this.extractFuResult(
                              m.result && m.result[0],
                              t
                            )),
                            (f = p.code),
                            (h = p.errorCode),
                            (g = p.message),
                            [
                              2,
                              {
                                success: f === fuErrorCodes.FU,
                                errorMessage: g || fuDetectErrorHints.NotFu,
                                errorCode: h,
                                originalResult: n,
                                localJudgeResult: Number(i),
                              },
                            ])
                          : [3, 13]
                      );
                    case 12:
                      throw new Error("upload image failed");
                    case 13:
                      return [3, 15];
                    case 14:
                      if (i === fuErrorCodes.NOTFU)
                        return [
                          2,
                          {
                            success: false,
                            errorMessage: o || fuDetectErrorHints.NotFu,
                            errorCode: r || fuDetectErrorCodes.NotFu,
                            originalResult: n,
                            localJudgeResult: Number(i),
                          },
                        ];
                      v.label = 15;
                    case 15:
                      return [3, 17];
                    case 16:
                      return (
                        (b = v.sent()),
                        [
                          2,
                          {
                            success: false,
                            errorMessage: b.desc || fuDetectErrorHints.NotFu,
                            errorCode: fuDetectErrorCodes.NotFu,
                            originalResult: n,
                            localJudgeResult: Number(i),
                          },
                        ]
                      );
                    case 17:
                      return [
                        2,
                        {
                          success: true,
                          errorMessage: "",
                          errorCode: fuDetectErrorCodes.Fu,
                          originalResult: n,
                          localJudgeResult: Number(i),
                        },
                      ];
                  }
                });
              });
            }),
            (e.prototype.setStickerVisibility = function (e) {
              this.stickers.forEach(function (t) {
                t.setVisibility(e);
              });
            }),
            (e.prototype.replayTablet = function () {
              var e, t, n, i;
              return __awaiter(this, undefined, undefined, function () {
                var r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  u,
                  d,
                  m,
                  p,
                  f,
                  h,
                  g,
                  b,
                  v,
                  this_ = this;
                return __generator(this, function (_) {
                  return (
                    null === (e = this.renderingData) || undefined === e
                      ? undefined
                      : e.tablet
                  )
                    ? ((r =
                        null === (t = this.renderingData) || undefined === t
                          ? undefined
                          : t.tablet),
                      (a = r.position),
                      (o = r.size),
                      (s = r.region),
                      (l = r.needRotate180),
                      (c = r.scale),
                      (u = r.degradeFontImgId),
                      (d = this.rendererScale),
                      (m = d.scaleX),
                      (p = d.scaleY),
                      (f =
                        null === (n = this.renderingData) || undefined === n
                          ? undefined
                          : n.renderer),
                      (h = f.resolution),
                      (g = f.width),
                      (b = f.height),
                      (v =
                        this.plainHistory ||
                        (null === (i = this.getTablet()) || undefined === i
                          ? undefined
                          : i.getPlainHistory())),
                      [
                        2,
                        new Promise(function (e) {
                          var t, n, i, r, d;
                          if (u)
                            if (this_.blessingSprite) {
                              this_.blessingSprite.setAnchor(0.5),
                                this_.blessingSprite.setScale(c.x * m, c.y * p),
                                this_.blessingSprite.setPosition(
                                  a.x * m,
                                  a.y * p
                                ),
                                this_.replayContainer.addChild(
                                  this_.blessingSprite
                                );
                              var f = Tiny.FadeIn(300);
                              this_.blessingSprite.setOpacity(0),
                                f.setDelay(300),
                                (f.onComplete = function () {
                                  e(undefined);
                                }),
                                this_.blessingSprite.runAction(f);
                            } else e(undefined);
                          else {
                            var _ =
                                null === (t = this_.tablet) || undefined === t
                                  ? undefined
                                  : t.getPlayer(v),
                              y = a.x - s.x * h * c.x - o.width / 2,
                              w = a.y - s.y * h * c.y - o.height / 2,
                              k =
                                ((null ===
                                  (i =
                                    null === (n = this_.app) || undefined === n
                                      ? undefined
                                      : n.renderer) || undefined === i
                                  ? undefined
                                  : i.width) || g) / g,
                              x =
                                ((null ===
                                  (d =
                                    null === (r = this_.app) || undefined === r
                                      ? undefined
                                      : r.renderer) || undefined === d
                                  ? undefined
                                  : d.height) || b) / b,
                              E = new Tiny.Container(),
                              S = new Tiny.Graphics();
                            S.lineStyle(0),
                              S.beginFill(16711680),
                              S.drawRect(
                                0,
                                0,
                                window.Tiny.WIN_SIZE.width * c.x,
                                window.Tiny.WIN_SIZE.height * c.y
                              ),
                              S.endFill(),
                              S.setPosition(y * k, w * x),
                              E.addChild(S),
                              E.addChild(_),
                              (E.mask = S),
                              this_.replayContainer.addChild(E),
                              _.setPosition(y * k, w * x),
                              _.setScale(c.x * k, c.y * x),
                              _.on("end", function () {
                                if (l) {
                                  E.setPivot((g * k) / 2, (b * x) / 2),
                                    E.setPosition((g * k) / 2, (b * x) / 2);
                                  var t = Tiny.RotateTo(
                                    this_.options.replayFuRotateTime,
                                    { rotation: Math.PI }
                                  );
                                  t.setInterpolation(
                                    Tiny.TWEEN.Interpolation.Bezier
                                  ),
                                    (t.onComplete = function () {
                                      e(undefined);
                                    }),
                                    E.runAction(Tiny.Repeat(1, t));
                                } else e(undefined);
                              }),
                              _.play();
                          }
                        }),
                      ])
                    : [2];
                });
              });
            }),
            (e.prototype.replayStickers = function () {
              var e, t;
              return __awaiter(this, undefined, undefined, function () {
                var n,
                  i,
                  r,
                  a,
                  this_ = this;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        this.replayStickerContainer.removeChildren(),
                        this.replayStickerContainer.setOpacity(0),
                        this.replayContainer.addChild(
                          this.replayStickerContainer
                        ),
                        (
                          null === (e = this.renderingData) || undefined === e
                            ? undefined
                            : e.stickers
                        )
                          ? [
                              4,
                              Promise.all(
                                null === (t = this.renderingData.stickers) ||
                                  undefined === t
                                  ? undefined
                                  : t.map(function (e) {
                                      return __awaiter(
                                        this_,
                                        undefined,
                                        undefined,
                                        function () {
                                          var t, n, i;
                                          return __generator(
                                            this,
                                            function (r) {
                                              switch (r.label) {
                                                case 0:
                                                  if (
                                                    ((t = this.findStickerById(
                                                      e.id
                                                    )),
                                                    (n =
                                                      (t && t.url) ||
                                                      baseUrl + "/" + e.imgId),
                                                    !n)
                                                  )
                                                    return (
                                                      nn.error(
                                                        "sticker missing",
                                                        [e.id]
                                                      ),
                                                      [2]
                                                    );
                                                  r.label = 1;
                                                case 1:
                                                  return (
                                                    r.trys.push([1, 3, , 4]),
                                                    [
                                                      4,
                                                      this.generateSpriteFromURI(
                                                        n
                                                      ),
                                                    ]
                                                  );
                                                case 2:
                                                  return (
                                                    (i = r.sent()),
                                                    [
                                                      2,
                                                      __assign(
                                                        __assign({}, e),
                                                        {
                                                          sprite: i,
                                                        }
                                                      ),
                                                    ]
                                                  );
                                                case 3:
                                                  return r.sent(), [3, 4];
                                                case 4:
                                                  return [2];
                                              }
                                            }
                                          );
                                        }
                                      );
                                    })
                              ),
                            ]
                          : [3, 3]
                      );
                    case 1:
                      return (
                        (n = s.sent().filter(function (e) {
                          return e;
                        })),
                        (i = this.rendererScale),
                        (r = i.scaleX),
                        (a = i.scaleY),
                        n.forEach(function (e, t) {
                          if (e) {
                            var n = e.position,
                              i = e.rotation,
                              s = e.scale,
                              l = e.sprite;
                            l &&
                              (l.setAnchor(0.5),
                              l.setRotation(i),
                              l.setScale(s.x * r, s.y * a),
                              l.setPosition(n.x * r, n.y * a),
                              this_.replayStickerContainer.addChildAt(l, t));
                          }
                        }),
                        [
                          4,
                          new Promise(function (e) {
                            var t = Tiny.FadeIn(
                              this_.options.replayStickerFadeInTime
                            );
                            t.setDelay(300),
                              (t.onComplete = function () {
                                e(undefined);
                              }),
                              this_.replayStickerContainer.runAction(t);
                          }),
                        ]
                      );
                    case 2:
                      s.sent(), (s.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.calcStampByText = function (e, t) {
              var n = this.options.prePeriod,
                i = n ? Kr : ea,
                r = n ? $r : ta,
                a = e.split("\n").length,
                o = n ? na : ia[a - 1].fontSize,
                s = 2 * (n ? 13 : 34),
                l = a * (o + 2);
              !n && a > 4 && (l = 4 * ia[3].fontSize + 20);
              var c = Math.max(l + s, i),
                u = { x: r / 2 - o / 2, y: (c - a * (o + 2)) / 2 },
                d = { x: 0.88 * t.width, y: 0.8 * t.height - c / 2 };
              return {
                fontSize: o,
                stampHeight: c,
                textPosition: u,
                stampPosition: d,
              };
            }),
            (e.prototype.replayStamp = function () {
              return __awaiter(this, undefined, undefined, function () {
                var this_ = this;
                return __generator(this, function (t) {
                  return [
                    2,
                    new Promise(function (t) {
                      var n, i, r, a;
                      if (
                        (null === (n = this_.renderingData) || undefined === n
                          ? undefined
                          : n.stamp) &&
                        (null === (i = this_.renderingData) || undefined === i
                          ? undefined
                          : i.stamp.text)
                      ) {
                        var o = this_.options.prePeriod,
                          s = this_.rendererScale,
                          l = s.scaleX,
                          c = s.scaleY,
                          u =
                            null === (r = this_.renderingData) ||
                            undefined === r
                              ? undefined
                              : r.stamp,
                          d = u.text,
                          m = u.position,
                          p = o ? Kr : ea,
                          f = o ? $r : ta,
                          h = new Hr["NinePatch"](
                            Tiny.TextureCache[o ? "stamp-pre" : "stamp"],
                            f,
                            p,
                            o ? [13, 13, 13, 28] : [23, 34, 24, 2]
                          ),
                          g = new Tiny.Text(d, {
                            fontFamily: "PingFang SC",
                            fontWeight: "bold",
                            fill: "#EA1525",
                            wordWrap: true,
                            align: "center",
                          }),
                          b = this_.calcStampByText(
                            d,
                            null === (a = this_.app) || undefined === a
                              ? undefined
                              : a.renderer
                          ),
                          v = b.fontSize,
                          A = b.stampHeight,
                          _ = b.textPosition;
                        (g.style.fontSize = v),
                          (g.style.wordWrapWidth = v),
                          (g.style.lineHeight = v + 2),
                          h.resize(null, A),
                          g.setPosition(_.x, _.y);
                        var y = new Tiny.Container();
                        y.addChild(h),
                          y.addChild(g),
                          y.setPosition(m.x * l, m.y * c),
                          y.plugins.easyAnimation.setAnimationConfig({
                            stamp: [
                              {
                                property: "scale.x",
                                easeFunction: "Linear.None",
                                duration: 330,
                                clips: [
                                  { percent: "0%", value: 1.6 },
                                  { percent: "10%", value: 1.58532722584719 },
                                  { percent: "20%", value: 1.53915083553263 },
                                  { percent: "30%", value: 1.46093511021835 },
                                  { percent: "40%", value: 1.35702200102588 },
                                  { percent: "50%", value: 1.24297799897411 },
                                  { percent: "60%", value: 1.13906488978165 },
                                  { percent: "70%", value: 1.06084916446737 },
                                  { percent: "80%", value: 1.01467277415281 },
                                  { percent: "90%", value: 1 },
                                  { percent: "100%", value: 1 },
                                ],
                              },
                              {
                                property: "scale.y",
                                easeFunction: "Linear.None",
                                duration: 330,
                                clips: [
                                  { percent: "0%", value: 1.6 },
                                  { percent: "10%", value: 1.58532722584719 },
                                  { percent: "20%", value: 1.53915083553263 },
                                  { percent: "30%", value: 1.46093511021835 },
                                  { percent: "40%", value: 1.35702200102588 },
                                  { percent: "50%", value: 1.24297799897411 },
                                  { percent: "60%", value: 1.13906488978165 },
                                  { percent: "70%", value: 1.06084916446737 },
                                  { percent: "80%", value: 1.01467277415281 },
                                  { percent: "90%", value: 1 },
                                  { percent: "100%", value: 1 },
                                ],
                              },
                              {
                                property: "alpha",
                                easeFunction: "Linear.None",
                                duration: 330,
                                clips: [
                                  { percent: "0%", value: 0 },
                                  { percent: "10%", value: 0.02 },
                                  { percent: "20%", value: 0.1 },
                                  { percent: "30%", value: 0.23 },
                                  { percent: "40%", value: 0.4 },
                                  { percent: "50%", value: 0.6 },
                                  { percent: "60%", value: 0.77 },
                                  { percent: "70%", value: 0.9 },
                                  { percent: "80%", value: 0.98 },
                                  { percent: "90%", value: 1 },
                                  { percent: "100%", value: 1 },
                                ],
                              },
                            ],
                          }),
                          y.plugins.easyAnimation.play("stamp"),
                          y.on("onAnimationEnd", function () {
                            t(undefined);
                          }),
                          this_.replayContainer.addChild(y);
                      } else t(undefined);
                    }),
                  ];
                });
              });
            }),
            (e.prototype.extractFuResult = function (e, t) {
              if (!e)
                return {
                  code: fuErrorCodes.NOTFU,
                  errorCode: fuDetectErrorCodes.NotFu,
                  message:
                    t === this.options.modelCloudKeyFu
                      ? fuDetectErrorHints.NotFu
                      : fuDetectErrorHints.CoverFu,
                };
              if (e.body) {
                var n = e.body.filter(function (e) {
                  var t = e.label;
                  return t && t.endsWith("_fu");
                });
                if (n.length > 1)
                  return {
                    code: fuErrorCodes.NOTFU,
                    errorCode: fuDetectErrorCodes.SingleFu,
                    message: fuDetectErrorHints.SingleFu,
                  };
                if (1 === n.length) {
                  var i = n[0],
                    r = i.pos[2][0] - i.pos[0][0],
                    a = i.pos[2][1] - i.pos[0][1];
                  return i.conf <
                    (t === this.options.modelCloudKeyFu
                      ? this.options.fuConfThreshold
                      : this.options.completeConfThreshold)
                    ? {
                        code: fuErrorCodes.NOTFU,
                        errorCode: fuDetectErrorCodes.NotFu,
                        message:
                          t === this.options.modelCloudKeyFu
                            ? fuDetectErrorHints.NotFu
                            : fuDetectErrorHints.CoverFu,
                      }
                    : t === this.options.modelCloudKeyFu &&
                      a *
                        r *
                        (1 + this.options.fuRegionPaddingRatio) *
                        (1 + this.options.fuRegionPaddingRatio) <
                        this.options.wordsRegionThreshold
                    ? {
                        code: fuErrorCodes.NOTFU,
                        errorCode: fuDetectErrorCodes.NotFu,
                        message:
                          t === this.options.modelCloudKeyFu
                            ? fuDetectErrorHints.NotFu
                            : fuDetectErrorHints.CoverFu,
                      }
                    : {
                        code: fuErrorCodes.FU,
                        errorCode: fuDetectErrorCodes.Fu,
                      };
                }
                return {
                  code: fuErrorCodes.NOTFU,
                  errorCode: fuDetectErrorCodes.NotFu,
                  message:
                    t === this.options.modelCloudKeyFu
                      ? fuDetectErrorHints.NotFu
                      : fuDetectErrorHints.CoverFu,
                };
              }
              return {
                code: fuErrorCodes.UNKNOWN,
                errorCode: fuDetectErrorCodes.NotFu,
              };
            }),
            (e.prototype.generateSpriteFromURI = function (e) {
              return __awaiter(this, undefined, Promise, function () {
                var t;
                return __generator(this, function (n) {
                  return Tiny.TextureCache[e]
                    ? [2, new Tiny.Sprite(Tiny.TextureCache[e])]
                    : ((t = new Image()),
                      (t.crossOrigin = "Anonymous"),
                      (t.src = e),
                      [
                        2,
                        new Promise(function (e, n) {
                          (t.onload = function () {
                            var n = new Tiny.BaseTexture(t),
                              i = new Tiny.Texture(n),
                              r = new Tiny.Sprite(i);
                            e(r);
                          }),
                            (t.onerror = function () {
                              n();
                            });
                        }),
                      ]);
                });
              });
            }),
            (e.prototype.findStickerById = function (e) {
              for (
                var t = 0, n = this.options.stickerCategories;
                t < n.length;
                t++
              ) {
                var i = n[t],
                  r = i.children.find(function (t) {
                    return t.id === e;
                  });
                if (r) return r;
              }
              return null;
            }),
            (e.prototype.getFuSticker = function () {
              return this.stickers.find(function (e) {
                return e.getConfig().id === Ur;
              });
            }),
            (e.prototype.getFuSpriteRatio = function () {
              var e,
                t,
                n,
                i = (null === (e = this.getFuSticker()) || undefined === e
                  ? undefined
                  : e.getScale()) || { x: 1, y: 1 },
                r =
                  (((null === (t = this.blessingSprite) || undefined === t
                    ? undefined
                    : t.width) || window.Tiny.WIN_SIZE.width) *
                    i.x) /
                  this.options.fuInitialScale,
                a =
                  (((null === (n = this.blessingSprite) || undefined === n
                    ? undefined
                    : n.height) || window.Tiny.WIN_SIZE.height) *
                    i.y) /
                  this.options.fuInitialScale,
                o = An(hn(0.5 - r / window.Tiny.WIN_SIZE.width / 2, 3), 0, 1),
                s = An(hn(0.5 - a / window.Tiny.WIN_SIZE.height / 2, 3), 0, 1),
                l = An(hn(r / window.Tiny.WIN_SIZE.width, 3), 0, 1 - o),
                c = An(hn(a / window.Tiny.WIN_SIZE.height, 3), 0, 1 - s);
              return [o, s, l, c];
            }),
            e
          );
        })(),
        pa = (function () {
          function e(e) {
            this.options = e;
          }
          return (
            Object.defineProperty(e.prototype, "renderer", {
              get: function () {
                return {
                  width: baseScreenWidth * this.options.rate * 2,
                  height: baseScreenWidth * this.options.rate * 2,
                  resolution: 2,
                };
              },
              enumerable: true,
              configurable: true,
            }),
            (e.prototype.init = function () {
              return __awaiter(this, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return nn.info("downgraded application", ["inited"]), [2];
                });
              });
            }),
            (e.prototype.reset = function () {}),
            (e.prototype.replay = function () {
              return __awaiter(this, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.getTablet = function () {}),
            (e.prototype.showTablet = function () {}),
            (e.prototype.hideTablet = function () {}),
            (e.prototype.getStamp = function () {}),
            (e.prototype.updateStamp = function () {}),
            (e.prototype.clearStamp = function () {}),
            (e.prototype.clearStickers = function () {}),
            (e.prototype.lockAllStickers = function () {}),
            (e.prototype.unlockAllStickers = function () {}),
            (e.prototype.unfocus = function () {}),
            (e.prototype.getStickerNum = function () {
              return 0;
            }),
            (e.prototype.getRenderData = function () {}),
            (e.prototype.checkFuImage = function () {
              return __awaiter(this, undefined, Promise, function () {
                return __generator(this, function (e) {
                  return [
                    2,
                    {
                      success: false,
                      imageURI: "",
                      pureImageURI: "",
                      errorMessage: "",
                      errorCode: 0,
                      originalResult: {},
                    },
                  ];
                });
              });
            }),
            (e.prototype.checkFinalImage = function () {
              return __awaiter(this, undefined, Promise, function () {
                return __generator(this, function (e) {
                  return [
                    2,
                    {
                      success: false,
                      errorMessage: "",
                      originalResult: {},
                      localJudgeResult: {},
                    },
                  ];
                });
              });
            }),
            (e.prototype.uploadFuImage = function () {
              return __awaiter(this, undefined, Promise, function () {
                return __generator(this, function (e) {
                  return [2, ""];
                });
              });
            }),
            (e.prototype.getWriteRegionRatio = function () {
              return 0;
            }),
            (e.prototype.getFinalImage = function () {
              return {
                imageData: "",
                xNNImageData: "",
                iosSnapshotImageData: "",
              };
            }),
            (e.prototype.saveTableFile = function () {
              return __awaiter(this, undefined, Promise, function () {
                return __generator(this, function (e) {
                  return [2, { tabletFileUrl: "" }];
                });
              });
            }),
            (e.prototype.showBackground = function () {}),
            (e.prototype.hideBackground = function () {}),
            (e.prototype.showBorderGraphics = function () {}),
            (e.prototype.hideBorderGraphics = function () {}),
            (e.prototype.calcStampByText = function () {}),
            (e.prototype.setLastImg = function () {
              return __awaiter(this, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.changeFont = function () {
              return __awaiter(this, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.createDegradeBlessingSprite = function () {
              return __awaiter(this, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return [2];
                });
              });
            }),
            (e.prototype.addSticker = function () {}),
            (e.prototype.saveRenderData = function () {}),
            e
          );
        })(),
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            __assign.apply(this, arguments)
          );
        };
      function getSetActiveFont() {
        return createStorage("activeFont");
      }
      function getSetFonts() {
        return createStorage("fonts");
      }
      function getSetStickerCategories() {
        return createStorage("stickerCategories");
      }
      function getSetActiveStickerTabKey() {
        return createStorage("activeStickerTabKey");
      }
      function getSetDowngradeWrite() {
        return createStorage("downgradeWrite");
      }
      function _a(e) {
        var t = e.homeInitResult,
          n = e.downgradeResult,
          r = e.fuRegConfig,
          a = e.onError,
          o = e.onStampClicked,
          s = e.onTabletChanged,
          l = e.onToastShown,
          c = e.writeRegionThreshold,
          u = e.wordsRegionThreshold,
          d = e.fuRegionPaddingRatio,
          m = e.fuConfThreshold,
          p = e.completeConfThreshold,
          f = e.prePeriodFuScale,
          h = e.modelCloudKeyFu,
          g = e.modelCloudKeyComplete,
          b = e.stickerInitialScale,
          v = e.stickerMaxCountText,
          A = e.stickerMaxNumText,
          _ = e.fuInitialScale,
          y = e.fuMaxScale,
          w = e.fuMinScale,
          k = e.replayFuRotateTime,
          x = e.replayStickerFadeInTime,
          E = createStorage("app"),
          S = E[0],
          T = E[1],
          C = getSetDowngradeWrite(),
          I = C[1],
          P = getSetFonts(),
          N = P[1],
          O = getSetActiveFont(),
          R = O[1],
          B = getSetStickerCategories(),
          D = B[1],
          z = getSetActiveStickerTabKey(),
          M = z[1],
          j = cn();
        return (
          Object(React["useEffect"])(
            function () {
              var e, i, E, S, C, P, O, B, z, F;
              if (t && t.success && r && n) {
                var U = window.localStorage,
                  L = {
                    handFuFontVoList: [],
                    handFuStickVoList: [],
                    handFuStickTypeVoList: [],
                  };
                try {
                  L = JSON.parse(U.getItem(h5dataStorageKey) || "{}");
                } catch (e) {
                  return void a();
                }
                var G = t.degradeLevel === degradeLevelCodes.Static || n.write;
                I(G);
                var Q,
                  H,
                  W,
                  Z,
                  Y = [];
                if (
                  ((Q = t.handFuStickTypeVoList),
                  (H = t.handFuStickVoList),
                  (W = t.handFuFontVoList),
                  !W || 0 === W.length)
                ) {
                  if (!L.handFuFontVoList) return void a();
                  W = L.handFuFontVoList;
                }
                if (!Q || 0 === Q.length) {
                  if (!L.handFuStickTypeVoList) return void a();
                  Q = L.handFuStickTypeVoList;
                }
                if (!H || 0 === H.length) {
                  if (!L.handFuStickVoList) return void a();
                  H = L.handFuStickVoList;
                }
                if (
                  (U.setItem(
                    h5dataStorageKey,
                    JSON.stringify(
                      __assign(__assign({}, L), {
                        resourceVersion: t.resourceVersion,
                        handFuStickVoList: H,
                        handFuStickTypeVoList: Q,
                        handFuFontVoList: W,
                      })
                    )
                  ),
                  Q &&
                    (Q.sort(function (e, t) {
                      return e.indexNum - t.indexNum;
                    }),
                    Q.forEach(function (e) {
                      var t = e.stickType;
                      Y.push({ type: t, children: [] });
                    }),
                    H.forEach(function (e) {
                      var t = Y.find(function (t) {
                        return t.type === e.stickType;
                      });
                      t &&
                        t.children.push({
                          id: e.stickId,
                          uniqId: 0,
                          indexNum: e.indexNum,
                          url: baseUrl + "/" + e.stickImgId,
                          thumbUrl: baseUrl + "/" + e.stickThumbImgId,
                          name: e.stickName,
                          maxNum: e.maxNum,
                          focusLayerConfig: {
                            minZoom: e.minZoom,
                            maxZoom: e.maxZoom,
                            enableDelete: false,
                            enableFlipX: false,
                            enableRotate: false,
                            enableScale: false,
                            enableRotate180: false,
                            enableMove: false,
                          },
                        });
                    }),
                    (Y = Y.filter(function (e) {
                      return e.children.length > 0;
                    })),
                    Y.forEach(function (e) {
                      var t = e.children;
                      t.sort(function (e, t) {
                        return (e.indexNum || 0) - (t.indexNum || 0);
                      });
                    }),
                    D(Y),
                    M(Y[0].type)),
                  W &&
                    (W.sort(function (e, t) {
                      return e.indexNum - t.indexNum;
                    }),
                    (Z = W.map(function (e) {
                      return {
                        id: e.fontId,
                        url: baseUrl + "/" + e.fontImgId,
                        thumbUrl: baseUrl + "/" + e.fontThumbImgId,
                        degradeUrl: baseUrl + "/" + e.fontDegradeImgId,
                        name: e.fontName,
                        brushType: e.brushType,
                        brushInk: e.brushInk,
                        brushPressureVelocity: e.brushPressureVelocity,
                      };
                    })),
                    N(Z),
                    R(Z[0])),
                  n.full)
                )
                  T(new pa({ rate: j }));
                else {
                  var J = new ua({
                    rate: j,
                    downgradeResult: n,
                    prePeriod: !!(null === (e = t) || undefined === e
                      ? undefined
                      : e.prePeriod),
                    degradeLevel: G
                      ? degradeLevelCodes.Static
                      : degradeLevelCodes.None,
                    writeRegionThreshold: dn(
                      null === (i = r) || undefined === i
                        ? undefined
                        : i.writeRegionThreshold,
                      c
                    ),
                    wordsRegionThreshold: dn(
                      null === (E = r) || undefined === E
                        ? undefined
                        : E.wordsRegionThreshold,
                      u
                    ),
                    fuRegionPaddingRatio: dn(
                      null === (S = r) || undefined === S
                        ? undefined
                        : S.fuRegionPaddingRatio,
                      d
                    ),
                    fuConfThreshold: dn(
                      null === (C = r) || undefined === C
                        ? undefined
                        : C.fuConfThreshold,
                      m
                    ),
                    completeConfThreshold: dn(
                      null === (P = r) || undefined === P
                        ? undefined
                        : P.completeConfThreshold,
                      p
                    ),
                    modelCloudKeyFu:
                      (null === (O = r) || undefined === O
                        ? undefined
                        : O.modelCloudKey1) || h,
                    modelCloudKeyComplete:
                      (null === (B = r) || undefined === B
                        ? undefined
                        : B.modelCloudKey2) || g,
                    forceServerReg: !!(null === (z = r) || undefined === z
                      ? undefined
                      : z.forceServerReg),
                    maxStickNum:
                      (null === (F = t) || undefined === F
                        ? undefined
                        : F.maxStickNum) || Fr,
                    stickerCategories: Y,
                    prePeriodFuScale: f,
                    stickerInitialScale: b,
                    stickerMaxCountText: v,
                    stickerMaxNumText: A,
                    fuInitialScale: _,
                    fuMaxScale: y,
                    fuMinScale: w,
                    replayFuRotateTime: k,
                    replayStickerFadeInTime: x,
                  });
                  J.onTabletChanged(s),
                    J.onStampClicked(o),
                    J.onToastCallback(l),
                    nn.info("init", ["home init succeed"]),
                    T(J);
                }
              }
            },
            [t, n, r]
          ),
          [S]
        );
      }
      var __assign = function () {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          __assign.apply(this, arguments)
        );
      };
      function Ea() {
        var e = this,
          t = createStorage("fuRegConfig"),
          n = t[0],
          r = t[1];
        return (
          Object(React["useEffect"])(function () {
            (function () {
              __awaiter(e, undefined, undefined, function () {
                var e, t, n, i, a, o;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        s.trys.push([0, 2, , 3]),
                        [
                          4,
                          Promise.all([
                            AlipayJSAPI.call("configService.getConfig", {
                              configKey: "HANDWRITTEN_FU_SECURITY",
                            }),
                            AlipayJSAPI.call("configService.getConfig", {
                              configKey: "HANDWRITTEN_FU_CONFIG",
                            }),
                            AlipayJSAPI.call("configService.getConfig", {
                              configKey: "HANDWRITTEN_CLOSE_TFS_IMG",
                            }),
                            AlipayJSAPI.call("configService.getConfig", {
                              configKey: "HANDWRITTEN_FU_FIX_EMPTY_IMG",
                            }),
                          ]),
                        ]
                      );
                    case 1:
                      return (
                        (e = s.sent()),
                        (t = e[0]),
                        (n = e[1]),
                        (i = e[2]),
                        (a = e[3]),
                        (o = __assign(
                          __assign(
                            __assign(
                              __assign({}, JSON.parse(t.configKey || "{}")),
                              JSON.parse(n.configKey || "{}")
                            ),
                            { closeTfsImage: "1" === i.configKey }
                          ),
                          JSON.parse(a.configKey || "{}")
                        )),
                        nn.info("fuRegConfig", [JSON.stringify(o)]),
                        r(o),
                        [3, 3]
                      );
                    case 2:
                      return (
                        s.sent(),
                        nn.error("fuRegConfig", ["request failed"]),
                        r({}),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            })();
          }, []),
          [n]
        );
      }
      var __assign = function () {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          __assign.apply(this, arguments)
        );
      };
      function Ia(e) {
        var t = this,
          n = e.onError,
          r = Object(React["useState"])(),
          a = r[0],
          o = r[1],
          s = { resourceVersion: 0 };
        try {
          var l = window.localStorage;
          s = JSON.parse(l.getItem(h5dataStorageKey) || "{}");
        } catch (e) {}
        var c = s.resourceVersion;
        return (
          Object(React["useEffect"])(function () {
            (function () {
              __awaiter(t, undefined, undefined, function () {
                var e, t, i, r, a, s;
                return __generator(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (e = new Date().getTime()), (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, 3, 4, 5]),
                        [4, tr({ resourceVersion: c })]
                      );
                    case 2:
                      return (
                        (t = l.sent()),
                        o(
                          __assign(__assign({}, t), {
                            enableShare:
                              (null === (r = t) || undefined === r
                                ? undefined
                                : r.sharePeriod) &&
                              !(null === (a = t) || undefined === a
                                ? undefined
                                : a.prePeriod) &&
                              (null === (s = t) || undefined === s
                                ? undefined
                                : s.showCard),
                          })
                        ),
                        [3, 5]
                      );
                    case 3:
                      return (i = l.sent()), o(i), n && n(i), [3, 5];
                    case 4:
                      return (
                        nn.info("home init time consuming(ms)", [
                          new Date().getTime() - e,
                        ]),
                        [7]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            })();
          }, []),
          [a]
        );
      }
      function Ra() {
        var this_ = this,
          t = Object(React["useState"])(),
          n = t[0],
          r = t[1];
        return (
          Object(React["useEffect"])(function () {
            (function () {
              __awaiter(this_, undefined, undefined, function () {
                var e, t, n, i, a, o, s, l, c;
                return __generator(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return (
                        u.trys.push([0, 2, , 3]),
                        [
                          4,
                          Promise.all([
                            AlipayJSAPI.call("getDowngradeResult", {
                              bizId: "68687779_HANDWRITE",
                              scene: 56,
                            }),
                            AlipayJSAPI.call("getDowngradeResult", {
                              bizId: "68687779_STICKER",
                              scene: 56,
                            }),
                            AlipayJSAPI.call("getDowngradeResult", {
                              bizId: "68687779_REPLAY",
                              scene: 56,
                              ext: { appId: "68687779" },
                            }),
                          ]),
                        ]
                      );
                    case 1:
                      return (
                        (e = u.sent()),
                        (t = e[0]),
                        (n = e[1]),
                        (i = e[2]),
                        (a =
                          (null ===
                            (c =
                              null ===
                                (l =
                                  null === (s = t) || undefined === s
                                    ? undefined
                                    : s.context) || undefined === l
                                ? undefined
                                : l.deviceInfo) || undefined === c
                            ? undefined
                            : c.deviceLevel) || "low"),
                        (o = !!t.resultType && "low" === a),
                        r({
                          write: o,
                          decorate: !!n.resultType,
                          replay: !!i.resultType,
                          full: o && !!n.resultType && !!i.resultType,
                          resultType: t.resultType,
                          deviceLevel: a,
                        }),
                        [3, 3]
                      );
                    case 2:
                      return (
                        u.sent(),
                        nn.error("downgrade", ["request failed"]),
                        r({
                          write: false,
                          decorate: false,
                          replay: false,
                          full: false,
                          deviceLevel: "low",
                          resultType: 0,
                        }),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            })();
          }, []),
          [n]
        );
      }
      var Ba,
        Da = __webpack_require__("a/zc"),
        className$13 = __webpack_require__.n(Da),
        Fa = function () {},
        Ua = function (e) {
          var t = e.imageId,
            n = e.visible,
            a = e.onOK,
            o = e.onRewrite,
            s = e.onClose,
            l = Object(React["useState"])(false),
            c = l[0],
            u = l[1],
            d = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return u(true), [4, a()];
                    case 1:
                      return e.sent(), [4, _n(300)];
                    case 2:
                      return e.sent(), u(false), [2];
                  }
                });
              });
            };
          return (
            remoteLog("c66256", n),
            remoteLog("c66256.d136327", n),
            (n &&
              React_.a.createElement(
                "div",
                { className: className$13.a.wrapper },
                React_.a.createElement(
                  "div",
                  { className: "am-dialog-mask show" },
                  React_.a.createElement(
                    "div",
                    { className: className$13.a.container },
                    React_.a.createElement(
                      "div",
                      { className: className$13.a.img },
                      React_.a.createElement("img", {
                        src: baseUrl + "/" + t,
                      }),
                      React_.a.createElement("div", {
                        "data-aspm-click": "c66256.d136327",
                        "data-aspm-expo": true,
                        className: className$13.a.okBtn,
                        onClick: c ? Fa : d,
                      }),
                      React_.a.createElement("div", {
                        className: className$13.a.rewriteBtn,
                        onClick: o,
                      })
                    ),
                    React_.a.createElement("div", {
                      className: className$13.a.closeBtn,
                      onClick: s,
                    })
                  )
                )
              )) ||
              React_.a.createElement(React_.a.Fragment, null)
          );
        },
        La = Ua,
        Ga = __webpack_require__("oW8E"),
        className$14 = __webpack_require__.n(Ga),
        Ha = function (e) {
          var t = e.onClose,
            n = e.children;
          return React_.a.createElement(
            "div",
            { className: className$14.a.modal },
            React_.a.createElement(
              "div",
              { className: "am-dialog-mask show", role: "document" },
              React_.a.createElement(
                "div",
                { className: className$14.a.container },
                React_.a.createElement(
                  "div",
                  { className: className$14.a.body },
                  n
                ),
                React_.a.createElement("button", {
                  "aria-label": "双击以关闭对话框",
                  className: className$14.a.closeBtn,
                  onClick: t,
                })
              )
            )
          );
        },
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            __assign.apply(this, arguments)
          );
        },
        Za = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (n[i] = e[i]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (n[i[r]] = e[i[r]]);
          }
          return n;
        },
        Ya = {
          borderColor: "rgb(299, 178, 129)",
          borderStyle: "solid",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#ddd",
        },
        Ja =
          "https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*FRRHRqm45pwAAAAAAAAAAAAAARQnAQ",
        Xa = function (e) {
          var t = Object(React["useMemo"])(
              function () {
                var t = e.ariaHidden,
                  n = e.customClassName,
                  i = undefined === n ? "" : n,
                  r = e.imgUrl,
                  a = e.size,
                  o = Za(e, [
                    "ariaHidden",
                    "customClassName",
                    "imgUrl",
                    "size",
                  ]);
                return {
                  ariaHidden: !!t,
                  customClassName: i,
                  style: __assign(__assign(__assign({}, Ya), o), {
                    backgroundImage: "url(" + (r || Ja) + ")",
                    width: a,
                    height: a,
                  }),
                };
              },
              [e]
            ),
            n = t.ariaHidden,
            a = t.customClassName,
            o = t.style,
            s = Object(React["useMemo"])(
              function () {
                return a + " image-background";
              },
              [a]
            );
          return React_.a.createElement("div", {
            style: o,
            "aria-hidden": n,
            className: s,
          });
        },
        Va = __webpack_require__("IlFc"),
        className$15 = __webpack_require__.n(Va),
        Ka =
          "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*vvUMSLnPTxYAAAAAAAAAAAAAARQnAQ/os",
        $a = function (e) {
          var t,
            n,
            a,
            o = e.visible,
            s = e.onClose,
            cardsShareDetail = getSetCardsShareDetail()[0],
            startUpParams = getStartUpParams(),
            u = Er(
              null === (t = startUpParams) || undefined === t
                ? undefined
                : t.shareImageId
            ),
            d = Object(React["useMemo"])(
              function () {
                var e,
                  t =
                    null === (e = cardsShareDetail) || undefined === e
                      ? undefined
                      : e.secStatus;
                return 0 === t || 1 === t ? u : Ka;
              },
              [cardsShareDetail, u]
            );
          return (
            remoteLog("c66257.d136331", o),
            o
              ? React_.a.createElement(
                  Ha,
                  { onClose: s },
                  React_.a.createElement(
                    "div",
                    { className: className$15.a.cardsOutModal },
                    React_.a.createElement(Xa, {
                      size: "0.34rem",
                      borderWidth: "0.016rem",
                      borderRadius: "0.178rem",
                      imgUrl:
                        null === (n = cardsShareDetail) || undefined === n
                          ? undefined
                          : n.shareHeadImg,
                      customClassName: className$15.a.avatar,
                      ariaHidden: true,
                    }),
                    React_.a.createElement(
                      "div",
                      { className: "" + className$15.a.nickName },
                      null === (a = cardsShareDetail) || undefined === a
                        ? undefined
                        : a.shareNickName
                    ),
                    React_.a.createElement(
                      "div",
                      { className: "" + className$15.a.guideText },
                      "“每一笔一画，都是见字如面的祝福”"
                    ),
                    React_.a.createElement("div", {
                      className:
                        className$15.a.fu +
                        " image-background absolute-center-x",
                      style: { backgroundImage: "url(" + d + ")" },
                    }),
                    React_.a.createElement(
                      "div",
                      { className: className$15.a.outText },
                      "来晚一步，福卡已领完"
                    )
                  )
                )
              : null
          );
        },
        eo = __webpack_require__("ktv6"),
        className$16 = __webpack_require__.n(eo),
        no = function (e) {
          var t,
            n = e.isStart,
            i = e.text;
          return React_.a.createElement(
            "div",
            { className: className$16.a.cover },
            React_.a.createElement("div", {
              className: extractClassNameFromArgs()(
                className$16.a.img,
                ((t = {}), (t[className$16.a.start] = n), t)
              ),
            }),
            React_.a.createElement(
              "div",
              { className: className$16.a.info },
              i || "集福已截止，恭祝新春大吉"
            ),
            React_.a.createElement("div", { className: className$16.a.light1 }),
            React_.a.createElement("div", { className: className$16.a.light2 }),
            React_.a.createElement("div", { className: className$16.a.light3 })
          );
        },
        io = no,
        ro = __webpack_require__("p7od"),
        className$21 = __webpack_require__.n(ro),
        oo = __webpack_require__("ENj2"),
        className$19 = __webpack_require__.n(oo),
        lo = __webpack_require__("fsy2"),
        className$18 = __webpack_require__.n(lo),
        uo = __webpack_require__("NKb8"),
        className$17 = __webpack_require__.n(uo),
        po =
          ((Ba = {}),
          (Ba[fuCardCodes.AI_GUO] = "AI_GUO"),
          (Ba[fuCardCodes.JING_YE] = "JING_YE"),
          (Ba[fuCardCodes.HE_XIE] = "HE_XIE"),
          (Ba[fuCardCodes.YOU_SHAN] = "YOU_SHAN"),
          (Ba[fuCardCodes.FU_QIANG] = "FU_QIANG"),
          Ba),
        fo = function (e) {
          var t = e.cardType,
            n = e.imageId,
            a = e.customClassName,
            o = Er(n) || fuCardImages[t],
            s = po[t],
            l = Object(React["useMemo"])(
              function () {
                var e = {};
                return o && (e.backgroundImage = "url(" + o + ")"), e;
              },
              [o]
            );
          return React_.a.createElement(
            "div",
            {
              className:
                className$17.a.smallFu +
                " " +
                className$17.a[s] +
                " image-background " +
                a,
            },
            React_.a.createElement("div", {
              className: className$17.a.title + " image-background",
            }),
            React_.a.createElement("div", {
              className: className$17.a.fu + " image-background",
              style: l,
            })
          );
        },
        ho = function (e) {
          var t,
            n,
            a = e.cardType,
            o = e.index,
            context = Object(React["useContext"])(GlobalContext),
            l =
              null ===
                (n =
                  null === (t = context) || undefined === t
                    ? undefined
                    : t.handFuShareVOList) || undefined === n
                ? undefined
                : n.find(function (e) {
                    return e.cardType === a;
                  }),
            c = Object(React["useMemo"])(
              function () {
                var e;
                return l
                  ? React_.a.createElement(
                      "div",
                      { className: className$18.a.receiver },
                      React_.a.createElement(Xa, {
                        size: "0.195rem",
                        borderWidth: "0.015rem",
                        borderRadius: "0.2rem",
                        imgUrl:
                          null === (e = l) || undefined === e
                            ? undefined
                            : e.shareHeadImg,
                        ariaHidden: true,
                        customClassName: className$18.a.avatar,
                      }),
                      React_.a.createElement(
                        "div",
                        { className: className$18.a.text },
                        l.shareNickName || ""
                      )
                    )
                  : React_.a.createElement(
                      "div",
                      { className: className$18.a.placeholder },
                      React_.a.createElement("span", null, "待领取")
                    );
              },
              [l]
            );
          return React_.a.createElement(
            "div",
            {
              className:
                className$18.a.receiveBlock +
                " " +
                className$18.a["pos" + (o + 1)],
            },
            c
          );
        },
        go = function (e) {
          var t,
            n = e.cardType,
            a = e.index,
            context = Object(React["useContext"])(GlobalContext),
            s = context || {},
            shareImageId = s.shareImageId,
            handFuShareVOList = s.handFuShareVOList,
            secStatus = s.secStatus,
            d =
              null === (t = handFuShareVOList) || undefined === t
                ? undefined
                : t.find(function (x) {
                    return x.cardType === n;
                  }),
            m = Object(React["useMemo"])(
              function () {
                return (
                  className$18.a.petal +
                  " " +
                  className$18.a["pos" + (a + 1)] +
                  " " +
                  (d ? "" : className$18.a.notReceived)
                );
              },
              [a, d]
            ),
            p = 0 === secStatus || 1 === secStatus ? shareImageId : undefined;
          return React_.a.createElement(
            React_.a.Fragment,
            null,
            React_.a.createElement(
              "div",
              { className: m },
              React_.a.createElement(
                "div",
                { className: className$18.a.fuCard },
                React_.a.createElement(fo, { cardType: n, imageId: p })
              )
            )
          );
        },
        bo = [
          fuCardCodes.JING_YE,
          fuCardCodes.FU_QIANG,
          fuCardCodes.AI_GUO,
          fuCardCodes.HE_XIE,
          fuCardCodes.YOU_SHAN,
        ],
        Main = function (e) {
          var t = e.backgroundVisible;
          return React_.a.createElement(
            "div",
            { className: className$18.a.flower },
            bo.map(function (e, t) {
              return React_.a.createElement(
                React_.a.Fragment,
                null,
                React_.a.createElement(go, {
                  key: e,
                  cardType: e,
                  index: t,
                }),
                React_.a.createElement(ho, {
                  key: e,
                  cardType: e,
                  index: t,
                })
              );
            }),
            React_.a.createElement("div", {
              className: className$18.a.background,
              style: { display: t ? "block" : "none" },
            }),
            React_.a.createElement("div", {
              className: className$18.a.foreground + " image-background",
            })
          );
        },
        yo = fuCardImages[fuCardCodes.JING_YE],
        wo = function (e, t) {
          return __awaiter(undefined, undefined, undefined, function () {
            return __generator(this, function (n) {
              return [
                2,
                window.ap.call("AlipayNewYearNebulaPlugin.showFuCard", {
                  showFuCard: e,
                  sourceType: sourceType,
                  extParams: { customFuImage: t },
                }),
              ];
            });
          });
        },
        ApplyCardToast = function (e) {
          var t,
            n,
            a,
            o = e.onClose,
            s = e.onShowToast,
            l = e.visible,
            c = e.closeTfsImage,
            context = Object(React["useContext"])(GlobalContext),
            d = getSetCardsShareDetail(),
            m = d[1],
            p =
              null === (t = context) || undefined === t
                ? undefined
                : t.shareImageId,
            f = Object(React["useMemo"])(
              function () {
                if (!p) return null;
                try {
                  return window.ap.call("downloadImage", {
                    multimediaID: p,
                    business: bizTypes.CompletePNG,
                    match: 2,
                  });
                } catch (e) {
                  return null;
                }
              },
              [p]
            ),
            h = Object(React["useCallback"])(
              function () {
                return __awaiter(undefined, undefined, undefined, function () {
                  var AlipayJSAPI, t, imageId, userId, secStatus, a, l, d;
                  return __generator(this, function (p) {
                    switch (p.label) {
                      case 0:
                        (AlipayJSAPI = window.ap), (p.label = 1);
                      case 1:
                        return (
                          p.trys.push([1, 10, 11, 13]),
                          [4, AlipayJSAPI.showLoading()]
                        );
                      case 2:
                        return (
                          p.sent(),
                          (t = context),
                          (imageId = t.shareImageId),
                          (userId = t.shareUserId),
                          (secStatus = t.secStatus),
                          [4, rr({ imageId: imageId, shareUserId: userId })]
                        );
                      case 3:
                        return (
                          (a = p.sent().blessCardStr),
                          (function () {
                            __awaiter(
                              undefined,
                              undefined,
                              undefined,
                              function () {
                                var e;
                                return __generator(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [
                                        4,
                                        lr({
                                          userId: userId,
                                          imageId: imageId,
                                          closeTfsImage: c,
                                        }),
                                      ];
                                    case 1:
                                      return (e = t.sent()), m(e), [2];
                                  }
                                });
                              }
                            );
                          })(),
                          [4, f]
                        );
                      case 4:
                        (l = p.sent()), (p.label = 5);
                      case 5:
                        return (
                          p.trys.push([5, 8, , 9]),
                          a
                            ? [
                                4,
                                wo(
                                  a,
                                  0 === secStatus || 1 === secStatus
                                    ? l.data
                                    : ""
                                ),
                              ]
                            : [3, 7]
                        );
                      case 6:
                        p.sent(), (p.label = 7);
                      case 7:
                        return [3, 9];
                      case 8:
                        return p.sent(), [3, 9];
                      case 9:
                        return o(), [3, 13];
                      case 10:
                        return (d = p.sent()), s(d && d.desc), [3, 13];
                      case 11:
                        return [4, AlipayJSAPI.hideLoading()];
                      case 12:
                        return p.sent(), [7];
                      case 13:
                        return [2];
                    }
                  });
                });
              },
              [context, m]
            ),
            g = Mo() || yo;
          return (
            remoteLog("c66257", l),
            l
              ? React_.a.createElement(
                  Ha,
                  { onClose: o },
                  React_.a.createElement(
                    "div",
                    { className: className$19.a.receiveModalContent },
                    React_.a.createElement(Xa, {
                      size: "0.34rem",
                      borderWidth: "0.016rem",
                      borderRadius: "0.178rem",
                      imgUrl:
                        null === (n = context) || undefined === n
                          ? undefined
                          : n.shareHeadImg,
                      customClassName: className$19.a.avatar,
                      ariaHidden: true,
                    }),
                    React_.a.createElement(
                      "div",
                      {
                        className:
                          className$19.a.nickName + " absolute-center-x",
                      },
                      (null === (a = context) || undefined === a
                        ? undefined
                        : a.shareNickName) || "手写套卡"
                    ),
                    React_.a.createElement(
                      "div",
                      {
                        className:
                          className$19.a.guideText + " absolute-center-x",
                      },
                      "“五种福卡各有一张，拼手气抢福卡”"
                    ),
                    React_.a.createElement(
                      "div",
                      {
                        className:
                          "image-background " + className$19.a.redPacks,
                        "aria-hidden": true,
                      },
                      React_.a.createElement("div", {
                        className: "image-background " + className$19.a.fu,
                        style: { backgroundImage: "url(" + g + ")" },
                      })
                    ),
                    React_.a.createElement(
                      "div",
                      {
                        className:
                          className$19.a.receiveBtn + " image-background",
                        "data-aspm-click": "c66257.d136328",
                        role: "button",
                        onClick: h,
                      },
                      "立即抢"
                    )
                  )
                )
              : null
          );
        },
        xo = "c66259",
        Eo = "d136333",
        OtherShareFuPage = function (e) {
          var closeTfsImage = e.closeTfsImage,
            onClose = e.onClose,
            onShowToast = e.onShowToast,
            context = Object(React["useContext"])(GlobalContext),
            s = Object(React["useState"])(false),
            l = s[0],
            c = s[1],
            userInfo = getUserInfo(),
            d = Object(React["useMemo"])(
              function () {
                var e, t, n, i;
                return (
                  !(null ===
                    (t =
                      null === (e = context) || undefined === e
                        ? undefined
                        : e.handFuShareVOList) || undefined === t
                    ? undefined
                    : t.find(function (e) {
                        var t;
                        return (
                          e.userId ===
                          (null === (t = userInfo) || undefined === t
                            ? undefined
                            : t.userId)
                        );
                      })) &&
                  !(
                    5 ===
                    (null ===
                      (i =
                        null === (n = context) || undefined === n
                          ? undefined
                          : n.handFuShareVOList) || undefined === i
                      ? undefined
                      : i.length)
                  )
                );
              },
              [context, userInfo]
            );
          return (
            Object(React["useEffect"])(
              function () {
                d && c(true);
              },
              [d]
            ),
            remoteLog(xo + "." + Eo, true),
            React_.a.createElement(
              "div",
              null,
              React_.a.createElement(Header, { shareDetail: context }),
              React_.a.createElement(Main, { backgroundVisible: true }),
              React_.a.createElement(ApplyCardToast, {
                closeTfsImage: closeTfsImage,
                visible: l,
                onShowToast: onShowToast,
                onClose: function () {
                  return c(false);
                },
              }),
              React_.a.createElement(
                "div",
                { className: className$19.a.btnArea, "data-aspm": xo },
                React_.a.createElement(
                  "div",
                  {
                    "data-aspm-click": Eo,
                    className:
                      className$19.a.fuBtn +
                      " image-background absolute-center-x",
                    role: "button",
                    onClick: onClose,
                  },
                  "我也要手写套卡"
                )
              )
            )
          );
        },
        To = __webpack_require__("rLng"),
        className$20 = __webpack_require__.n(To),
        No = "c66259",
        Oo = "d136375",
        Ro = function () {},
        MyselfShareFuPage = function (props) {
          var t,
            n,
            a,
            onShare = props.onShare,
            onClose = props.onClose,
            context = Object(React["useContext"])(GlobalContext),
            c = Object(React["useState"])(false),
            u = c[0],
            d = c[1],
            m = Object(React["useState"])(true),
            f = m[0],
            h = m[1];
          remoteLog(No + "." + Oo, true);
          var g =
              u ||
              5 ===
                (null ===
                  (a =
                    null === (n = context) || undefined === n
                      ? undefined
                      : n.handFuShareVOList) || undefined === a
                  ? undefined
                  : a.length),
            b = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        d(true), isAndroid ? (h(false), [4, _n(300)]) : [3, 2]
                      );
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [4, onShare()];
                    case 3:
                      return e.sent(), [4, _n(300)];
                    case 4:
                      return e.sent(), isAndroid && h(true), d(false), [2];
                  }
                });
              });
            };
          return React_.a.createElement(
            "div",
            null,
            React_.a.createElement(Header, { shareDetail: context }),
            React_.a.createElement(Main, { backgroundVisible: f }),
            React_.a.createElement(
              "div",
              { className: className$20.a.shareBtnArea, "data-aspm": No },
              React_.a.createElement(
                "div",
                {
                  "data-aspm-click": Oo,
                  className: extractClassNameFromArgs()(
                    className$20.a.shareBtn,
                    "image-background absolute-center-x",
                    ((t = {}), (t[className$20.a.disabled] = g), t)
                  ),
                  role: "button",
                  onClick: g ? Ro : b,
                },
                "继续送朋友"
              )
            ),
            React_.a.createElement(
              "div",
              { className: className$21.a.closeBtn, onClick: onClose },
              "返回"
            )
          );
        },
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            __assign.apply(this, arguments)
          );
        },
        GlobalContext = React_.a.createContext(null);
      function Mo() {
        var e,
          context = Object(React["useContext"])(GlobalContext),
          n = getUserInfo(),
          r = Er(
            null === (e = context) || undefined === e
              ? undefined
              : e.shareImageId
          );
        if (!context || !n || !context.shareImageId) return null;
        var a = context.secStatus;
        return 0 !== a && 1 !== a && context.shareUserId !== n.userId
          ? null
          : r;
      }
      function HeaderDescription(props) {
        var shareDetail = props.shareDetail,
          handFuShareVOList = Object(React["useMemo"])(
            function () {
              var shareDetailCopy;
              return (
                (null === (shareDetailCopy = shareDetail) ||
                undefined === shareDetailCopy
                  ? undefined
                  : shareDetailCopy.handFuShareVOList) || []
              );
            },
            [shareDetail]
          ),
          desc = Object(React["useMemo"])(
            function () {
              var hintText =
                5 === handFuShareVOList.length
                  ? "福卡已被领完"
                  : "五种福卡各有一张，" +
                    (5 - handFuShareVOList.length) +
                    "张未领取";
              return React_.a.createElement(
                "div",
                { className: "" + className$21.a.cardsStatusText },
                React_.a.createElement("div", null, hintText)
              );
            },
            [handFuShareVOList]
          );
        return desc;
      }
      function Header(props) {
        var shareDetailCopy,
          shareDetail = props.shareDetail,
          title = Object(React["useMemo"])(
            function () {
              var tmpObj,
                shareNikeName =
                  null === (tmpObj = shareDetail) || undefined === tmpObj
                    ? undefined
                    : tmpObj.shareNickName;
              return shareNikeName
                ? React_.a.createElement(
                    React_.a.Fragment,
                    null,
                    React_.a.createElement(
                      "span",
                      { className: className$21.a.nickName },
                      shareNikeName
                    ),
                    React_.a.createElement("span", null, "的手写套卡")
                  )
                : React_.a.createElement("span", null, "手写套卡");
            },
            [shareDetail]
          );
        return React_.a.createElement(
          "div",
          { className: className$21.a.cardsTitleArea },
          React_.a.createElement(
            "div",
            { className: className$21.a.cardsTitle + " absolute-center-x" },
            React_.a.createElement(Xa, {
              size: "0.405rem",
              borderWidth: "0.0192rem",
              borderRadius: "0.42rem",
              imgUrl:
                null === (shareDetailCopy = shareDetail) ||
                undefined === shareDetailCopy
                  ? undefined
                  : shareDetailCopy.shareHeadImg,
              customClassName: className$21.a.avatar,
              ariaHidden: true,
            }),
            React_.a.createElement(
              "div",
              { className: className$21.a.text },
              title
            ),
            React_.a.createElement(HeaderDescription, {
              shareDetail: shareDetail,
            })
          )
        );
      }
      var App = function (props) {
          var onClose = props.onClose,
            onShare = props.onShare,
            onShowToast = props.onShowToast,
            shareImageId = props.shareImageId,
            shareUserId = props.shareUserId,
            closeTfsImage = props.closeTfsImage,
            startUpParams = getStartUpParams(),
            userInfo = getUserInfo(),
            cardsShareDetail = getSetCardsShareDetail()[0],
            role = Object(React["useMemo"])(
              function () {
                return startUpParams && userInfo
                  ? userInfo.userId ===
                    (shareUserId || startUpParams.shareUserId)
                    ? "giver"
                    : "receiver"
                  : null;
              },
              [startUpParams, userInfo, shareUserId]
            ),
            mainPage = Object(React["useMemo"])(
              function () {
                return role
                  ? "giver" === role
                    ? React_.a.createElement(MyselfShareFuPage, {
                        onShare: onShare,
                        onClose: onClose,
                      })
                    : React_.a.createElement(OtherShareFuPage, {
                        onClose: onClose,
                        onShowToast: onShowToast,
                        closeTfsImage: closeTfsImage,
                      })
                  : null;
              },
              [role, onClose, onShare]
            ),
            context = Object(React["useMemo"])(
              function () {
                if (!cardsShareDetail) return null;
                var params = startUpParams || {},
                  startUserId = params.shareUserId,
                  startImageId = params.shareImageId;
                return __assign(__assign({}, cardsShareDetail), {
                  shareUserId: shareUserId || startUserId,
                  shareImageId: shareImageId || startImageId,
                });
              },
              [startUpParams, cardsShareDetail, shareUserId, shareImageId]
            );
          return React_.a.createElement(
            GlobalContext.Provider,
            { value: context },
            mainPage
          );
        },
        Lo = __webpack_require__("JACm"),
        className$22 = __webpack_require__.n(Lo),
        Wo = "A*gnifSIr4NBUAAAAAAAAAAAAAARQnAQ";
      function Zo(e) {
        return __awaiter(this, undefined, undefined, function () {
          return __generator(this, function (t) {
            return [
              2,
              window.ap.call("downloadImage", {
                multimediaID: e,
                business: bizTypes.CompletePNG,
                match: 2,
              }),
            ];
          });
        });
      }
      var __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            __assign.apply(this, arguments)
          );
        },
        Vo = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (n[i] = e[i]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (n[i[r]] = e[i[r]]);
          }
          return n;
        };
      function qo() {
        var e = this,
          t = Object(React["useReducer"])(
            function (e, t) {
              return "update" === t.type
                ? __assign(__assign({}, e), t.payload)
                : e;
            },
            {
              initializing: true,
              pending: false,
              current: 0,
              taskLimit: 0,
              cannotReceiveReason: "",
            }
          ),
          n = t[0],
          r = t[1];
        Object(React["useEffect"])(function () {
          (function () {
            __awaiter(e, undefined, undefined, function () {
              var e;
              return __generator(this, function (t) {
                return (
                  (e = { initializing: false }),
                  (e.current = 0),
                  (e.taskLimit = 1),
                  r({ type: "update", payload: e }),
                  [2]
                );
              });
            });
          })();
        }, []);
        var a = Object(React["useCallback"])(function () {
            return __awaiter(e, undefined, undefined, function () {
              var e, t, n, i, a, o, s;
              return __generator(this, function (l) {
                switch (l.label) {
                  case 0:
                    return (
                      l.trys.push([0, 7, 8, 9]),
                      r({ type: "update", payload: { pending: true } }),
                      (e = Wo),
                      [4, rr({ imageId: e })]
                    );
                  case 1:
                    if (
                      ((t = l.sent()),
                      (n = t.blessCardStr),
                      "" === n || undefined === n)
                    )
                      throw new Error("empty bless card");
                    return [4, Zo(e)];
                  case 2:
                    (i = l.sent()), (l.label = 3);
                  case 3:
                    return (
                      l.trys.push([3, 5, , 6]),
                      [
                        4,
                        window.ap.call("AlipayNewYearNebulaPlugin.showFuCard", {
                          showFuCard: n,
                          sourceType: sourceType,
                          extParams: { customFuImage: i },
                        }),
                      ]
                    );
                  case 4:
                    return l.sent(), [3, 6];
                  case 5:
                    return l.sent(), [3, 6];
                  case 6:
                    return [3, 9];
                  case 7:
                    return (
                      (a = l.sent()),
                      window.ap.call("toast", {
                        content:
                          (null === (o = a) || undefined === o
                            ? undefined
                            : o.desc) ||
                          getErrorHint(
                            null === (s = a) || undefined === s
                              ? undefined
                              : s.code
                          ),
                        type: "none",
                        duration: 0,
                      }),
                      [3, 9]
                    );
                  case 8:
                    return (
                      r({ type: "update", payload: { pending: false } }), [7]
                    );
                  case 9:
                    return [2];
                }
              });
            });
          }, []),
          o = Object(React["useMemo"])(
            function () {
              var e = n.current,
                t = n.taskLimit,
                i = Vo(n, ["current", "taskLimit"]);
              return __assign(__assign({}, i), { canReceive: e < t });
            },
            [n]
          ),
          s = Object(React["useMemo"])(
            function () {
              return { receive: a };
            },
            [a]
          );
        return [o, s];
      }
      var Ko = "c63925.d131832",
        $o = function () {
          var e = qo(),
            t = e[0],
            n = t.initializing,
            a = t.pending,
            o = t.canReceive,
            s = t.cannotReceiveReason,
            l = e[1].receive;
          Object(React["useEffect"])(
            function () {
              var AlipayJSAPI = window.ap;
              nn.info("screen reader", ["entering"]),
                a ? AlipayJSAPI.showLoading() : AlipayJSAPI.hideLoading();
            },
            [a]
          );
          var c = function () {
            o && l();
          };
          remoteLog(Ko, !n && o);
          var u = Er(Wo);
          if (n) return null;
          var d = (function () {
            return o
              ? React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement(
                    "div",
                    { className: className$22.a.bottomBar },
                    React_.a.createElement(
                      "button",
                      {
                        onClick: c,
                        className: extractClassNameFromArgs()(
                          className$22.a.receiveBtn,
                          "image-background"
                        ),
                        "data-aspm-click": Ko,
                      },
                      "立即领取福卡"
                    )
                  )
                )
              : React_.a.createElement(
                  "div",
                  { className: className$22.a.outText },
                  s || "今日福卡已领完"
                );
          })();
          return React_.a.createElement(
            "div",
            { className: className$22.a.screenReader },
            React_.a.createElement(
              "div",
              { className: className$22.a.background },
              React_.a.createElement("div", {
                className: className$22.a.fu + " image-background",
                "aria-hidden": true,
                style: { backgroundImage: "url(" + u + ")" },
              }),
              d,
              React_.a.createElement(
                "div",
                { className: className$22.a.title },
                "开笔写福，福气临门"
              )
            )
          );
        },
        es = __webpack_require__("iKF7"),
        className$23 = __webpack_require__.n(es),
        ns = function (e) {
          var t = e.visible;
          return (
            (t &&
              React_.a.createElement(
                "div",
                {
                  className: extractClassNameFromArgs()(
                    "am-loading page",
                    className$23.a.wrapper
                  ),
                },
                React_.a.createElement(
                  "div",
                  { className: className$23.a.mask },
                  React_.a.createElement("img", {
                    className: className$23.a.icon,
                    src:
                      "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*QQ2kRrlBOfIAAAAAAAAAAAAAARQnAQ",
                  })
                )
              )) ||
            React_.a.createElement(React_.a.Fragment, null)
          );
        },
        is = ns,
        rs = __webpack_require__("oNhJ"),
        className$24 = __webpack_require__.n(rs),
        os = function (e) {
          var t = e.visible,
            n = e.onOK;
          return (
            (t &&
              React_.a.createElement(
                "div",
                { className: className$24.a.wrapper },
                React_.a.createElement(
                  "div",
                  { className: "am-dialog-mask show" },
                  React_.a.createElement(
                    "div",
                    { className: className$24.a.container },
                    React_.a.createElement("div", {
                      className: className$24.a.img,
                    }),
                    React_.a.createElement("div", {
                      className: className$24.a.closeBtn,
                      onClick: n,
                    })
                  )
                )
              )) ||
            React_.a.createElement(React_.a.Fragment, null)
          );
        },
        ss = os,
        ls = __webpack_require__("YTik"),
        className$25 = __webpack_require__.n(ls),
        us = function (e) {
          var t = e.imageId,
            n = e.imageData,
            i = e.visible,
            a = e.fullDowngraded,
            o = e.onEntered;
          return React_.a.createElement(
            G,
            {
              in: i,
              timeout: 200,
              classNames: {
                appear: className$25.a.appear,
                appearActive: className$25.a.activeAppear,
                appearDone: className$25.a.doneAppear,
                enter: className$25.a.enter,
                enterActive: className$25.a.activeEnter,
                enterDone: className$25.a.doneEnter,
                exit: className$25.a.exit,
                exitActive: className$25.a.activeExit,
                exitDone: className$25.a.doneExit,
              },
              onEntered: o,
              unmountOnExit: true,
            },
            React_.a.createElement(
              "div",
              { className: className$25.a.wrapper },
              isIos && React_.a.createElement("img", { src: n }),
              a &&
                t &&
                React_.a.createElement("img", { src: baseUrl + "/" + t })
            )
          );
        },
        ds = us,
        ms = __webpack_require__("bBPS"),
        className$26 = __webpack_require__.n(ms),
        fs = function (e) {
          var t = e.visible,
            n = e.text,
            a = e.duration,
            o = undefined === a ? 2e3 : a,
            s = e.onClose;
          return (
            Object(React["useEffect"])(
              function () {
                t &&
                  window.setTimeout(function () {
                    s();
                  }, o);
              },
              [t]
            ),
            React_.a.createElement(
              G,
              {
                in: t,
                timeout: 300,
                classNames: {
                  appear: className$26.a.appear,
                  appearActive: className$26.a.activeAppear,
                  appearDone: className$26.a.doneAppear,
                  enter: className$26.a.enter,
                  enterActive: className$26.a.activeEnter,
                  enterDone: className$26.a.doneEnter,
                  exit: className$26.a.exit,
                  exitActive: className$26.a.activeExit,
                  exitDone: className$26.a.doneExit,
                },
                unmountOnExit: true,
              },
              React_.a.createElement(
                "div",
                { className: className$26.a.wrapper },
                React_.a.createElement(
                  "div",
                  { className: className$26.a.toast },
                  React_.a.createElement("img", {
                    src:
                      "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*u4QSSa5bCzoAAAAAAAAAAAAAARQnAQ",
                  }),
                  React_.a.createElement(
                    "span",
                    null,
                    n || "福气在路上，请稍后再试"
                  )
                )
              )
            )
          );
        },
        hs = fs,
        gs = __webpack_require__("fZ3z"),
        className$27 = __webpack_require__.n(gs),
        vs = function (e) {
          var t = e.visible,
            n = e.onOk,
            i = e.onClose;
          return React_.a.createElement(
            fi,
            {
              type: "cloud",
              visible: t,
              btn1Text: "点击复制链接",
              onBtn1: n,
              onClose: i,
            },
            React_.a.createElement(
              "div",
              { className: className$27.a.subtitle },
              "为保障打印清晰度，将为你生成2500*2500像素的高清福字图片"
            ),
            React_.a.createElement(
              "div",
              { className: className$27.a.desc },
              React_.a.createElement("div", null, "复制链接到浏览器打开下载"),
              React_.a.createElement(
                "div",
                null,
                "高清图生成需要时间，请耐心等待"
              )
            )
          );
        },
        As = vs,
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            __assign.apply(this, arguments)
          );
        },
        ks = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var i = Array(e),
            r = 0;
          for (t = 0; t < n; t++)
            for (var a = arguments[t], o = 0, s = a.length; o < s; o++, r++)
              i[r] = a[o];
          return i;
        },
        Ss = 0,
        MainApp = function (props) {
          var t,
            n,
            a,
            o,
            s,
            l,
            c,
            u,
            d,
            m,
            f,
            g,
            b,
            v,
            A,
            _,
            y,
            w,
            k,
            x,
            E = props.writeRegionThreshold,
            writeRegionThreshold = undefined === E ? 0.3 : E,
            T = props.wordsRegionThreshold,
            wordsRegionThreshold = undefined === T ? 0.3 : T,
            I = props.fuRegionPaddingRatio,
            fuRegionPaddingRatio = undefined === I ? 0.25 : I,
            N = props.fuConfThreshold,
            fuConfThreshold = undefined === N ? 0.8 : N,
            R = props.completeConfThreshold,
            completeConfThreshold = undefined === R ? 0.3 : R,
            D = props.prePeriodFuScale,
            prePeriodFuScale = undefined === D ? 0.6 : D,
            M = props.strategyUrl,
            strategyUrl =
              undefined === M
                ? "alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2F17y5h4ruxt6o%2Fpages%2Fmanuscript-rules%2Findex&bc=15214388&tbc=15214388&abv=NO&appClearTop=false&startMultApp=YES"
                : M,
            F = props.printUrl,
            printUrl =
              undefined === F
                ? "alipays://platformapi/startapp?appId=20000160&appClearTop=false&startMultApp=YES&url=/www/newDetail.html?benefitId=${_benefitId_}%26wufuMediaId%3D${_mediaId_}%26__webview_options__%3DtransparentTitle%253dauto"
                : F,
            L = props.stickerInitialScale,
            stickerInitialScale = undefined === L ? 0.5 : L,
            Q = props.stickerMaxCountText,
            stickerMaxCountText = undefined === Q ? "贴纸总数已达上限" : Q,
            J = props.stickerMaxNumText,
            stickerMaxNumText = undefined === J ? "当前贴纸数量已达上限" : J,
            K = props.fuInitialScale,
            fuInitialScale = undefined === K ? 0.5 : K,
            se = props.fuMaxScale,
            fuMaxScale = undefined === se ? 1.5 : se,
            ue = props.fuMinScale,
            fuMinScale = undefined === ue ? 0.75 : ue,
            pe = (props.defaultStampText, props.replayFuRotateTime),
            replayFuRotateTime = undefined === pe ? 1300 : pe,
            ve = props.replayStickerFadeInTime,
            replayStickerFadeInTime = undefined === ve ? 300 : ve,
            _e = props.topicId,
            topicId = undefined === _e ? "BC_TP_20210108000204224" : _e,
            we = props.jumpSchema,
            jumpSchema =
              undefined === we
                ? "alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fc%2Ftingyun1231%3FenableWK%3DYES&so=NO&ttb=always"
                : we,
            xe = props.importantSpm,
            importantSpm = undefined === xe ? "c63924.d132527" : xe,
            Se = props.streamSpm,
            streamSpm =
              undefined === Se
                ? "c63924,c63925.d131832,c63925.d131833,c63926.d131836"
                : Se,
            Ce = props.modelCloudKeyFu,
            modelCloudKeyFu = undefined === Ce ? "xNN_REG_FU" : Ce,
            Pe = props.modelCloudKeyComplete,
            modelCloudKeyComplete = undefined === Pe ? "xNN_DET_REG_FU" : Pe,
            Oe = Object(React["useState"])(pageMode.Empty),
            currentPage = Oe[0],
            setCurrentPage = Oe[1],
            De = Object(React["useState"])(true),
            isStart = De[0],
            setStart = De[1],
            je = Object(React["useState"])(false),
            visible = je[0],
            setVisible = je[1],
            Le = Object(React["useState"])(""),
            message = Le[0],
            setMessage = Le[1],
            He = Object(React["useState"])(false),
            We = He[0],
            Ze = He[1],
            Ye = Object(React["useState"])(""),
            Je = Ye[0],
            Xe = Ye[1],
            Ve = Object(React["useState"])(false),
            isAlreadyDrawn = Ve[0],
            setAlreadyDrawn = Ve[1],
            $e = Object(React["useState"])(false),
            freemode = $e[0],
            setFreemode = $e[1],
            nt = Object(React["useState"])(false),
            it = nt[0],
            rt = nt[1],
            at = Object(React["useState"])(clickToSignText),
            ot = at[0],
            st = at[1],
            lt = Object(React["useState"])(true),
            ct = lt[0],
            ut = lt[1],
            dt = Object(React["useState"])(""),
            mt = dt[0],
            pt = dt[1],
            ft = Object(React["useState"])(true),
            ht = ft[0],
            gt = ft[1],
            bt = Object(React["useState"])(false),
            vt = bt[0],
            At = bt[1],
            _t = Object(React["useState"])(false),
            yt = _t[0],
            wt = _t[1],
            kt = Object(React["useState"])(false),
            xt = kt[0],
            Et = kt[1],
            St = Object(React["useState"])(false),
            Tt = St[0],
            Ct = St[1],
            It = Object(React["useState"])(""),
            Pt = It[0],
            Nt = It[1],
            Ot = Object(React["useState"])(""),
            Rt = Ot[0],
            Bt = Ot[1],
            Dt = Object(React["useState"])(""),
            zt = Dt[0],
            Mt = Dt[1],
            jt = Object(React["useState"])(false),
            Ft = jt[0],
            Ut = jt[1],
            Lt = Object(React["useState"])(""),
            Gt = Lt[0],
            Qt = Lt[1],
            Ht = Object(React["useState"])([]),
            Wt = Ht[0],
            Zt = Ht[1],
            Yt = Object(React["useState"])(jumpSchema),
            fiveLuckyJumpSchema = Yt[0],
            setFiveLuckyJumpSchema = Yt[1],
            Vt = Object(React["useState"])(""),
            qt = Vt[0],
            Kt = Vt[1],
            $t = Object(React["useState"])(1),
            en = $t[0],
            tn = $t[1],
            rn = Object(React["useState"])(false),
            an = rn[0],
            ln = rn[1],
            cn = Object(React["useState"])(),
            dn = cn[0],
            fn = cn[1],
            hn = Object(React["useState"])(false),
            bn = hn[0],
            vn = hn[1],
            An = Object(React["useState"])(""),
            _n = An[0],
            yn = An[1],
            kn = Object(React["useState"])(""),
            shareImageId = kn[0],
            Sn = kn[1],
            In = Object(React["useState"])(""),
            shareUserId = In[0],
            Nn = In[1],
            On = Object(React["useState"])(false),
            Rn = On[0],
            Dn = On[1],
            zn = Object(React["useState"])(false),
            Mn = zn[0],
            jn = zn[1],
            Fn = Object(React["useState"])(0),
            Un = Fn[0],
            Ln = Fn[1],
            Gn = Object(React["useState"])(0),
            Qn = Gn[0],
            Hn = Gn[1],
            Wn = Object(React["useState"])({}),
            Zn = Wn[0],
            Yn = Wn[1],
            Jn = Object(React["useState"])(),
            Xn = Jn[0],
            Vn = Jn[1],
            qn = Object(React["useState"])(false),
            Kn = qn[0],
            ei = qn[1],
            ti = Object(React["useState"])(""),
            ni = ti[0],
            ii = ti[1],
            ri = Object(React["useState"])(""),
            ai = ri[0],
            oi = ri[1],
            li = Object(React["useState"])(false),
            ci = li[0],
            ui = li[1],
            di = Object(React["useState"])(false),
            mi = di[0],
            pi = di[1],
            fi = Object(React["useState"])(""),
            hi = fi[0],
            gi = fi[1],
            bi = Object(React["useState"])(false),
            vi = bi[0],
            Ai = bi[1],
            _i = Object(React["useState"])(false),
            yi = _i[0],
            wi = _i[1],
            onClose = Object(React["useCallback"])(
              function () {
                Ai(false);
              },
              [Ai]
            ),
            xi = getSetCardsShareDetail(),
            Ei = xi[1],
            Si = Object(React["useState"])(""),
            Ti = Si[0],
            Ci = Si[1],
            Ii = function (e, t) {
              var n,
                i,
                r = (t && t.message) || errorHints[e] || defaultErrorHint,
                a = (t && t.type) || "toast";
              if (
                (nn.error("error", [e]),
                gt(false),
                e === StatusCodes.HAND_FU_HAS_BEEN_DEGRADE ||
                  e === StatusCodes.HAND_FU_PERIOD_ERROR)
              ) {
                setCurrentPage(pageMode.Cover),
                  gt(false),
                  setStart(false),
                  null === (n = Bi) || undefined === n || n.reset();
                var o =
                  null === (i = Bi) || undefined === i
                    ? undefined
                    : i.getTablet();
                return o && (o.lock(), o.hide()), true;
              }
              return (
                (a = "toast"),
                "toast" === a
                  ? (Xe(r), Ze(true))
                  : "modal" === a && (setMessage(r), setVisible(true)),
                false
              );
            };
          xn();
          var Pi = getUserInfo(),
            fuRegConfig = Ea()[0],
            downgradeResult = Ra()[0],
            homeInitResult = Ia({
              onError: function (e) {
                e.code === StatusCodes.HAND_FU_PERIOD_ERROR
                  ? (setCurrentPage(pageMode.Cover), gt(false), setStart(true))
                  : Ii(e && e.code);
              },
            })[0];
          Br({
            homeInitResult: homeInitResult,
            closeTfsImage: !!(null === (o = fuRegConfig) || undefined === o
              ? undefined
              : o.closeTfsImage),
            jumpToSharePage: function () {
              Ai(true);
            },
            showOutModal: function () {
              wi(true);
            },
            handleError: Ii,
          }),
            jr({
              homeInitResult: homeInitResult,
              strategyUrl: strategyUrl,
              memberUrl: memberUrl,
            });
          var Bi = _a({
              homeInitResult: homeInitResult,
              fuRegConfig: fuRegConfig,
              downgradeResult: downgradeResult,
              writeRegionThreshold: writeRegionThreshold,
              wordsRegionThreshold: wordsRegionThreshold,
              fuRegionPaddingRatio: fuRegionPaddingRatio,
              fuConfThreshold: fuConfThreshold,
              completeConfThreshold: completeConfThreshold,
              prePeriodFuScale: prePeriodFuScale,
              modelCloudKeyFu: modelCloudKeyFu,
              modelCloudKeyComplete: modelCloudKeyComplete,
              stickerInitialScale: stickerInitialScale,
              stickerMaxCountText: stickerMaxCountText,
              stickerMaxNumText: stickerMaxNumText,
              fuInitialScale: fuInitialScale,
              fuMaxScale: fuMaxScale,
              fuMinScale: fuMinScale,
              replayFuRotateTime: replayFuRotateTime,
              replayStickerFadeInTime: replayStickerFadeInTime,
              onError: function () {
                setMessage(""),
                  setVisible(true),
                  gt(false),
                  nn.error("error", ["load stickers failed"]);
              },
              onStampClicked: function () {
                rt(true), Tracert.expo("c64127");
              },
              onTabletChanged: function (e, t) {
                setAlreadyDrawn(e), 0 === t && Tracert.click("c63924.d132527");
              },
              onToastShown: function (e) {
                Xe(e), Ze(true);
              },
            })[0],
            Di = getSetActiveFont(),
            activeFont = Di[0],
            setActiveFont = Di[1],
            fonts = getSetFonts()[0],
            Fi = getSetStickerCategories()[0],
            Ui = getSetActiveStickerTabKey(),
            Wi = Ui[0],
            Zi = Ui[1],
            Yi = getSetDowngradeWrite()[0],
            startUpParams = getStartUpParams();
          Object(React["useEffect"])(
            function () {
              if (Bi) {
                un({ importantSpm: importantSpm, streamSpm: streamSpm }),
                  Tracert.call("logPv");
                var e = function () {
                  return __awaiter(
                    undefined,
                    undefined,
                    undefined,
                    function () {
                      var e,
                        t,
                        n,
                        i,
                        r,
                        a,
                        o,
                        s,
                        l,
                        c,
                        u,
                        d,
                        m,
                        p,
                        f,
                        h,
                        g,
                        b,
                        v,
                        A,
                        _,
                        y,
                        w,
                        k,
                        x,
                        E,
                        S,
                        T,
                        C,
                        I,
                        P,
                        N,
                        O,
                        R,
                        B,
                        D,
                        z,
                        M,
                        j;
                      return __generator(this, function (F) {
                        switch (F.label) {
                          case 0:
                            return (
                              F.trys.push([0, 2, , 3]),
                              [4, AlipayJSAPI.call("isScreenReaderEnabled")]
                            );
                          case 1:
                            return (
                              (e = F.sent().screenReaderEnabled),
                              e
                                ? (setCurrentPage(pageMode.ScreenReader),
                                  gt(false),
                                  [2])
                                : [3, 3]
                            );
                          case 2:
                            return F.sent(), [3, 3];
                          case 3:
                            if (
                              (yn(
                                (null === (k = homeInitResult) ||
                                undefined === k
                                  ? undefined
                                  : k.shareImageId) || ""
                              ),
                              vn(
                                !!(null === (x = homeInitResult) ||
                                undefined === x
                                  ? undefined
                                  : x.enableShare)
                              ),
                              ii(
                                (null === (E = homeInitResult) ||
                                undefined === E
                                  ? undefined
                                  : E.aliasLastImageId) || ""
                              ),
                              (null === (S = homeInitResult) || undefined === S
                                ? undefined
                                : S.degradeLevel) === degradeLevelCodes.Full)
                            )
                              return (
                                setCurrentPage(pageMode.Cover), gt(false), [2]
                              );
                            if (
                              !(null === (T = homeInitResult) || undefined === T
                                ? undefined
                                : T.enableShare) &&
                              (null === (C = homeInitResult) || undefined === C
                                ? undefined
                                : C.noShowCardText) &&
                              startUpParams.shareUserId &&
                              startUpParams.shareImageId
                            )
                              return (
                                Ci(
                                  null === (I = homeInitResult) ||
                                    undefined === I
                                    ? undefined
                                    : I.noShowCardText
                                ),
                                setCurrentPage(pageMode.Cover),
                                gt(false),
                                [2]
                              );
                            if (
                              ((t =
                                !(null === (P = homeInitResult) ||
                                undefined === P
                                  ? undefined
                                  : P.prePeriod) &&
                                (null === (N = homeInitResult) ||
                                undefined === N
                                  ? undefined
                                  : N.imgCreateOnPrePeriod)),
                              t &&
                                (null === (O = downgradeResult) ||
                                undefined === O
                                  ? undefined
                                  : O.full))
                            )
                              return (
                                setCurrentPage(pageMode.Writing),
                                setAlreadyDrawn(true),
                                gt(false),
                                [2]
                              );
                            if (
                              !(null === (R = homeInitResult) || undefined === R
                                ? undefined
                                : R.lastImgId)
                            )
                              return [3, 7];
                            F.label = 4;
                          case 4:
                            return (
                              F.trys.push([4, 6, , 7]),
                              [4, cr({ imageId: homeInitResult.lastImgId })]
                            );
                          case 5:
                            return (
                              (b = F.sent()),
                              Ut(b.current >= b.taskLimit),
                              Kt(gn(b.benefitId, b.cacheExpire) || ""),
                              [3, 7]
                            );
                          case 6:
                            return F.sent(), Ut(false), [3, 7];
                          case 7:
                            return (
                              (null === (B = homeInitResult) || undefined === B
                                ? undefined
                                : B.prePeriod) &&
                                (function () {
                                  __awaiter(
                                    undefined,
                                    undefined,
                                    undefined,
                                    function () {
                                      var e;
                                      return __generator(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              t.trys.push([0, 2, , 3]),
                                              [4, ur({ topicId: topicId })]
                                            );
                                          case 1:
                                            return (
                                              (e = t.sent()),
                                              e &&
                                                e.success &&
                                                (Zt(e.fiveLuckyTopCards),
                                                setFiveLuckyJumpSchema(
                                                  e.jumpSchema
                                                )),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              t.sent(),
                                              nn.error("preperiod content", [
                                                "request failed",
                                              ]),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                      });
                                    }
                                  );
                                })(),
                              [4, Bi.init()]
                            );
                          case 8:
                            if ((F.sent(), gt(false), !homeInitResult))
                              return [3, 41];
                            F.label = 9;
                          case 9:
                            if (
                              (F.trys.push([9, 39, 40, 41]),
                              !homeInitResult.lastImgId)
                            )
                              return [3, 34];
                            (n = undefined), (i = false), (F.label = 10);
                          case 10:
                            return (
                              F.trys.push([10, 12, , 15]),
                              [
                                4,
                                AlipayJSAPI.call("downloadImage", {
                                  multimediaID: homeInitResult.lastImgId,
                                  business: bizTypes.CompletePNG,
                                  match: 2,
                                }),
                              ]
                            );
                          case 11:
                            return (
                              (b = F.sent()),
                              (n = b.data),
                              !(null === (D = fuRegConfig) || undefined === D
                                ? undefined
                                : D.emptyImgFixDisable) &&
                                n.length <
                                  (Number(
                                    null === (z = fuRegConfig) ||
                                      undefined === z
                                      ? undefined
                                      : z.emptyImgThreshold
                                  ) || 1e4) &&
                                (i = true),
                              [3, 15]
                            );
                          case 12:
                            return (
                              F.sent(),
                              nn.error("download image", [
                                homeInitResult.lastImgId + " failed",
                              ]),
                              setCurrentPage(pageMode.Writing),
                              gt(false),
                              Bi.showTablet(),
                              fonts ? [4, Bi.changeFont(fonts[0])] : [3, 14]
                            );
                          case 13:
                            F.sent(), (F.label = 14);
                          case 14:
                            return [2];
                          case 15:
                            (r = undefined),
                              (a = ""),
                              (o = ""),
                              (s = {}),
                              (l = undefined),
                              (c = undefined),
                              (u = undefined),
                              (m = 1),
                              (F.label = 16);
                          case 16:
                            return (
                              F.trys.push([16, 18, , 19]),
                              [4, or({ imageId: homeInitResult.lastImgId })]
                            );
                          case 17:
                            return (
                              (b = F.sent()),
                              (r = b.videoId),
                              (a = b.pureImageId),
                              (c = b.stickers || []),
                              (s = b.extInfo),
                              (o = s.pngPureImageId),
                              (l =
                                (s.renderer && JSON.parse(s.renderer)) || {}),
                              (u = (s.tablet && JSON.parse(s.tablet)) || {}),
                              (d =
                                (s.signatureMessage &&
                                  JSON.parse(s.signatureMessage)) ||
                                {}),
                              (m = b.secStatus),
                              tn(b.secStatus),
                              [3, 19]
                            );
                          case 18:
                            return (
                              (p = F.sent()),
                              Ii(p.code),
                              nn.error("query image", [
                                homeInitResult.lastImgId + " failed",
                              ]),
                              [2]
                            );
                          case 19:
                            return (
                              (t || i) &&
                                (gt(true),
                                (f = Bi.calcStampByText(d.text || "", l)
                                  .stampPosition),
                                (d = { position: f, text: d.text }),
                                fn({
                                  pureImageId: a,
                                  videoId: r,
                                  localJudgeResult: 1,
                                  prePeriod: !!(null === (M = homeInitResult) ||
                                  undefined === M
                                    ? undefined
                                    : M.prePeriod),
                                  stamp: d,
                                  sticker: c || [],
                                  fontId: s.fontId,
                                  roi: "",
                                  ext: {
                                    pngPureImageId: o,
                                    tablet: u,
                                    renderer: l,
                                    fontId: s.fontId || "",
                                    degradeLevel: Number(s.degradeLevel),
                                    strokeNum: Number(s.strokeNum),
                                    writeTime: Number(s.writeTime),
                                    writeRegionRatio: Number(
                                      s.writeRegionRatio
                                    ),
                                    failureNum: Number(s.failureNum),
                                    textFailureNum: Number(s.textFailureNum),
                                    topFailureReason: s.topFailureReason || "",
                                    videoId: r,
                                    secStatus: m,
                                    isPreToNormal: 1,
                                  },
                                })),
                              setCurrentPage(pageMode.Save),
                              pt(n),
                              Mt(homeInitResult.lastImgId),
                              t ||
                              null === (j = downgradeResult) ||
                              undefined === j ||
                              !j.replay
                                ? [3, 21]
                                : [4, Bi.setLastImg(n)]
                            );
                          case 20:
                            F.sent(), (F.label = 21);
                          case 21:
                            Bi.hideBorderGraphics(),
                              (h = undefined),
                              (F.label = 22);
                          case 22:
                            return (
                              F.trys.push([22, 26, , 27]),
                              r
                                ? [4, AlipayJSAPI.downloadFile({ url: r })]
                                : [3, 25]
                            );
                          case 23:
                            return (
                              (g = F.sent().apFilePath),
                              [
                                4,
                                AlipayJSAPI.call("fsManage", {
                                  action: "readFile",
                                  filePath: g,
                                  encoding: "utf8",
                                }),
                              ]
                            );
                          case 24:
                            (b = F.sent()), (h = b.data), (F.label = 25);
                          case 25:
                            return [3, 27];
                          case 26:
                            return (
                              F.sent(),
                              nn.error("download tablet", [r + " failed"]),
                              gt(false),
                              Bi.showBackground(),
                              wt(true),
                              Et(true),
                              jn(true),
                              Ut(true),
                              Ii(""),
                              [2]
                            );
                          case 27:
                            return a.startsWith(Gi)
                              ? ((v = (fonts || []).find(function (e) {
                                  var t = e.id;
                                  return "" + Gi + t === a;
                                })),
                                v ? [4, Bi.changeFont(v)] : [3, 30])
                              : [3, 30];
                          case 28:
                            return (
                              F.sent(), [4, Bi.createDegradeBlessingSprite(v)]
                            );
                          case 29:
                            F.sent(), (F.label = 30);
                          case 30:
                            return (
                              Bi.saveRenderData(
                                {
                                  renderer: l,
                                  stickers: c,
                                  tablet: u,
                                  stamp: d,
                                },
                                h
                              ),
                              Bi.showBackground(),
                              t || i
                                ? (gt(false), ln(true), jn(true), [3, 33])
                                : [3, 31]
                            );
                          case 31:
                            return At(true), [4, Bi.replay()];
                          case 32:
                            F.sent(), At(false), (F.label = 33);
                          case 33:
                            return [3, 38];
                          case 34:
                            return (
                              (A = window.localStorage),
                              (_ = JSON.parse(
                                A.getItem(h5dataStorageKey) || "{}"
                              )),
                              _.guideShown
                                ? [3, 35]
                                : (setCurrentPage(pageMode.Guide),
                                  (y = JSON.parse(
                                    A.getItem(h5dataStorageKey) || "{}"
                                  )),
                                  A.setItem(
                                    h5dataStorageKey,
                                    JSON.stringify(
                                      __assign(__assign({}, y), {
                                        guideShown: true,
                                      })
                                    )
                                  ),
                                  [3, 38])
                            );
                          case 35:
                            return (
                              setCurrentPage(pageMode.Writing),
                              Bi.showTablet(),
                              fonts ? [4, Bi.changeFont(fonts[0])] : [3, 37]
                            );
                          case 36:
                            F.sent(), (F.label = 37);
                          case 37:
                            Yi && setAlreadyDrawn(true), (F.label = 38);
                          case 38:
                            return [3, 41];
                          case 39:
                            return (w = F.sent()), Ii(w.code), [3, 41];
                          case 40:
                            return [7];
                          case 41:
                            return [2];
                        }
                      });
                    }
                  );
                };
                e();
              }
            },
            [Bi]
          );
          var onStickerAdded = function (e) {
              var t;
              null === (t = Bi) ||
                undefined === t ||
                t.addSticker(
                  __assign(__assign({}, e), {
                    uniqId: Ss++,
                    initialScale: stickerInitialScale,
                    focusLayerConfig: __assign(
                      __assign({}, e.focusLayerConfig),
                      {
                        enableDelete: true,
                        enableFlipX: true,
                        enableRotate: true,
                        enableScale: true,
                        enableRotate180: false,
                        enableMove: true,
                        autoActivate: true,
                      }
                    ),
                  })
                );
            },
            onOk = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t;
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        null === (e = Bi) || undefined === e || e.showTablet(),
                        fonts
                          ? [
                              4,
                              null === (t = Bi) || undefined === t
                                ? undefined
                                : t.changeFont(fonts[0]),
                            ]
                          : [3, 2]
                      );
                    case 1:
                      n.sent(), (n.label = 2);
                    case 2:
                      return (
                        Yi && setAlreadyDrawn(true),
                        setCurrentPage(pageMode.Writing),
                        Tracert.click("c63917.d132250"),
                        [2]
                      );
                  }
                });
              });
            },
            onNext = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  u,
                  d,
                  m,
                  p,
                  f,
                  h,
                  g,
                  b,
                  v,
                  A,
                  _,
                  y,
                  w,
                  k,
                  x,
                  E,
                  S,
                  T,
                  C,
                  I,
                  P,
                  N,
                  O,
                  R;
                return __generator(this, function (B) {
                  switch (B.label) {
                    case 0:
                      if (
                        !(null === (y = downgradeResult) || undefined === y
                          ? undefined
                          : y.full)
                      )
                        return [3, 7];
                      (e =
                        "" +
                        ((null === (w = activeFont) || undefined === w
                          ? undefined
                          : w.id) || "")),
                        (t = Hi[e] || ""),
                        (B.label = 1);
                    case 1:
                      return (
                        B.trys.push([1, 4, 5, 6]),
                        gt(true),
                        [
                          4,
                          ir({
                            imageId: t,
                            pureImageId:
                              "" +
                              Gi +
                              (null === (k = activeFont) || undefined === k
                                ? undefined
                                : k.id),
                            jpgImageId: "",
                            videoId: "",
                            localJudgeResult: 1,
                            prePeriod: !!(null === (x = homeInitResult) ||
                            undefined === x
                              ? undefined
                              : x.prePeriod),
                            stamp: "",
                            sticker: [],
                            fontId: e,
                            roi: Xn,
                            ext: {
                              pngPureImageId:
                                (null === (E = activeFont) || undefined === E
                                  ? undefined
                                  : E.degradeUrl.replace(baseUrl + "/", "")) ||
                                "",
                              fontId: e,
                              tablet: {
                                degradeFontImgId:
                                  (null === (S = activeFont) || undefined === S
                                    ? undefined
                                    : S.degradeUrl) || "",
                                size: { width: Qi / 2, height: Qi / 2 },
                                region: { x: 0, y: 0 },
                                needRotate180: 0,
                                position: {
                                  x: Bi.renderer.width / 2,
                                  y: Bi.renderer.height / 2,
                                },
                                scale: { x: 0.5, y: 0.5 },
                              },
                              renderer: Bi.renderer,
                              degradeLevel: 1,
                              strokeNum: 0,
                              writeTime: 0,
                              writeRegionRatio: 0,
                              failureNum: 0,
                              textFailureNum: 0,
                              topFailureReason: "",
                            },
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (n = B.sent()),
                        ii(n && n.aliasImageId),
                        Mt(t),
                        [
                          4,
                          AlipayJSAPI.call("downloadImage", {
                            multimediaID: t,
                            business: bizTypes.CompletePNG,
                            match: 2,
                          }),
                        ]
                      );
                    case 3:
                      return (
                        (i = B.sent()),
                        (r = i.data),
                        pt(r.replace(/^.+base64,/g, "")),
                        nn.info("downgrade write", [
                          (null === (T = activeFont) || undefined === T
                            ? undefined
                            : T.id) || "",
                        ]),
                        setCurrentPage(pageMode.Save),
                        [3, 6]
                      );
                    case 4:
                      return (a = B.sent()), Ii(a.code), [3, 6];
                    case 5:
                      return gt(false), [7];
                    case 6:
                      return [2];
                    case 7:
                      (o = false), (B.label = 8);
                    case 8:
                      return (
                        B.trys.push([8, 17, 18, 19]),
                        gt(true),
                        [4, Bi.checkFuImage()]
                      );
                    case 9:
                      return (
                        (s = B.sent()),
                        (l = s.success),
                        (c = s.imageURI),
                        (u = s.pureImageURI),
                        (d = s.errorMessage),
                        (m = undefined === d ? defaultErrorHint : d),
                        (p = s.errorCode),
                        (f = undefined === p ? fuDetectErrorCodes.NotFu : p),
                        (h = s.originalResult),
                        (g = undefined === h ? {} : h),
                        (b =
                          (g.result && g.result.length && mn(g.result[0])) ||
                          {}),
                        Vn(b),
                        l ||
                          (Ln(Un + 1),
                          undefined === Zn[f] && (Zn[f] = 0),
                          Zn[f]++,
                          Yn(Zn)),
                        (v = undefined),
                        c && l ? [4, Bi.uploadFuImage(c, bizTypes.Fu)] : [3, 11]
                      );
                    case 10:
                      if (((v = B.sent()), !v)) return Ze(true), Xe(""), [2];
                      B.label = 11;
                    case 11:
                      return l
                        ? (
                            null === (C = homeInitResult) || undefined === C
                              ? undefined
                              : C.prePeriod
                          )
                          ? homeInitResult.degradeLevel ===
                              degradeLevelCodes.Static ||
                            (null !== (I = downgradeResult) &&
                              undefined !== I &&
                              I.write)
                            ? (nn.info("downgrade write", [
                                (null === (P = activeFont) || undefined === P
                                  ? undefined
                                  : P.id) || "",
                              ]),
                              Bt(
                                (null === (N = activeFont) || undefined === N
                                  ? undefined
                                  : N.degradeUrl.replace(baseUrl + "/", "")) ||
                                  ""
                              ),
                              [3, 14])
                            : [3, 12]
                          : [3, 14]
                        : [3, 15];
                    case 12:
                      return u
                        ? [4, Bi.uploadFuImage(u, bizTypes.FuPNG, 3)]
                        : [3, 14];
                    case 13:
                      if (((A = B.sent()), !A)) return Ze(true), Xe(""), [2];
                      Bt(A), (B.label = 14);
                    case 14:
                      return (
                        Nt(
                          c && v
                            ? v
                            : "" +
                                Gi +
                                (null === (O = activeFont) || undefined === O
                                  ? undefined
                                  : O.id)
                        ),
                        [3, 16]
                      );
                    case 15:
                      Ze(true), Xe(m), Tracert.expo("c64125"), (B.label = 16);
                    case 16:
                      return (o = l), [3, 19];
                    case 17:
                      return (_ = B.sent()), console.log(_), [3, 19];
                    case 18:
                      return gt(false), [7];
                    case 19:
                      return (
                        o &&
                          (Bi.hideTablet(),
                          Bi.showBackground(),
                          Bi.updateStamp(clickToSignText),
                          null === (R = Bi.getStamp()) ||
                            undefined === R ||
                            R.show(true),
                          setCurrentPage(pageMode.Decorate)),
                        [2]
                      );
                  }
                });
              });
            },
            onPrev = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e;
                return __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        Bi.showTablet(),
                        Bi.hideBackground(),
                        null === (e = Bi.getStamp()) ||
                          undefined === e ||
                          e.hide(),
                        st(clickToSignText),
                        ut(true),
                        Qt(""),
                        Yi ? [4, Bi.changeFont(activeFont)] : [3, 2]
                      );
                    case 1:
                      t.sent(), setAlreadyDrawn(true), (t.label = 2);
                    case 2:
                      return (
                        Bi.clearStickers(),
                        Bi.clearStamp(),
                        setCurrentPage(pageMode.Writing),
                        [2]
                      );
                  }
                });
              });
            },
            onNext_ = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  u,
                  d,
                  m,
                  p,
                  f,
                  h,
                  g,
                  b,
                  v,
                  A,
                  _,
                  y,
                  w,
                  k,
                  x,
                  E,
                  S,
                  T,
                  C,
                  I,
                  P,
                  N,
                  O,
                  R,
                  B,
                  D;
                return __generator(this, function (z) {
                  switch (z.label) {
                    case 0:
                      return (
                        gt(true),
                        null === (k = Bi.getStamp()) ||
                          undefined === k ||
                          k.hideTip(),
                        (null === (x = Bi.getStamp()) || undefined === x
                          ? undefined
                          : x.getText().trim()) ||
                          null === (E = Bi.getStamp()) ||
                          undefined === E ||
                          E.hide(),
                        Bi.lockAllStickers(),
                        Bi.unfocus(),
                        (e = Bi.getStickerNum()),
                        (i = false),
                        (r = 0),
                        (a = Bi.getFinalImage({
                          imageData: true,
                          xNNImageData: !!e,
                        })),
                        (o = a.imageData),
                        (s = a.xNNImageData),
                        e ? [4, Bi.checkFinalImage(s)] : [3, 4]
                      );
                    case 1:
                      return (
                        (w = z.sent()),
                        (i = w.success),
                        (r = w.localJudgeResult),
                        i
                          ? [
                              4,
                              AlipayJSAPI.call("uploadImage", {
                                data: s.replace(/^.+base64,/g, ""),
                                dataType: "dataURL",
                                business: bizTypes.Complete,
                                publicDomain: true,
                              }),
                            ]
                          : [3, 3]
                      );
                    case 2:
                      (w = z.sent()), (n = w.multimediaID), (z.label = 3);
                    case 3:
                      return [3, 5];
                    case 4:
                      nn.info("ignore fu recognize", ["reason: no sticker"]),
                        (i = true),
                        (r = 1),
                        (z.label = 5);
                    case 5:
                      return i
                        ? (Bi.saveRenderData(),
                          (l = ""),
                          (null === (S = homeInitResult) || undefined === S
                            ? undefined
                            : S.degradeLevel) !== degradeLevelCodes.None
                            ? [3, 7]
                            : [4, Bi.saveTableFile()])
                        : [3, 18];
                    case 6:
                      (w = z.sent()), (l = w.tabletFileUrl), (z.label = 7);
                    case 7:
                      return (
                        (c = o.replace(/^.+base64,/g, "")),
                        [
                          4,
                          AlipayJSAPI.call("uploadImage", {
                            data: c,
                            dataType: "dataURL",
                            compress: 3,
                            business: bizTypes.CompletePNG,
                            publicDomain: true,
                          }),
                        ]
                      );
                    case 8:
                      (u = z.sent().multimediaID),
                        (t = u),
                        (d =
                          "" +
                          ((null === (T = activeFont) || undefined === T
                            ? undefined
                            : T.id) || "")),
                        (z.label = 9);
                    case 9:
                      if (
                        (z.trys.push([9, 15, 16, 17]),
                        (m = Bi.getRenderData()),
                        !m)
                      )
                        return [3, 13];
                      if (
                        ((p = m.stamp),
                        (f = m.stickers),
                        (h = undefined === f ? [] : f),
                        (g = m.tablet),
                        (b = m.renderer),
                        (v = m.degradeLevel),
                        (A = !!(null === (C = homeInitResult) || undefined === C
                          ? undefined
                          : C.prePeriod)),
                        !t || (A && !Rt))
                      )
                        throw (
                          (nn.error("saveFu", [
                            "imageId: " + t + ", pngPureImageId: " + Rt,
                          ]),
                          new Error("empty imageId or fuPNGMultimediaID"))
                        );
                      return [
                        4,
                        ir({
                          imageId: u,
                          pureImageId: Pt,
                          jpgImageId: n,
                          videoId: l,
                          localJudgeResult: r,
                          prePeriod: A,
                          stamp: p,
                          sticker: h,
                          fontId: d,
                          roi: Xn,
                          ext: {
                            pngPureImageId: Rt,
                            fontId: d,
                            tablet: g,
                            renderer: b,
                            degradeLevel: v,
                            strokeNum:
                              (null === (I = Bi.getTablet()) || undefined === I
                                ? undefined
                                : I.getStrokeNum()) || 0,
                            writeTime:
                              (null === (P = Bi.getTablet()) || undefined === P
                                ? undefined
                                : P.getWriteTime()) || 0,
                            writeRegionRatio:
                              Number(Bi.getWriteRegionRatio().toFixed(2)) || 0,
                            failureNum: Un,
                            textFailureNum: Qn,
                            topFailureReason: pn(Zn),
                            videoId: l,
                          },
                        }),
                      ];
                    case 10:
                      return (
                        (w = z.sent()),
                        ii(w && w.aliasImageId),
                        Mt(u),
                        tn(1),
                        (
                          null === (N = downgradeResult) || undefined === N
                            ? undefined
                            : N.replay
                        )
                          ? [4, Bi.setLastImg(c)]
                          : [3, 12]
                      );
                    case 11:
                      z.sent(), (z.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      nn.error("replay", ["rendering data missing"]),
                        (z.label = 14);
                    case 14:
                      return [3, 17];
                    case 15:
                      return (
                        (_ = z.sent()),
                        (y = Ii(_.code)),
                        y ||
                          (Bi.unlockAllStickers(),
                          null === (O = Bi.getStamp()) ||
                            undefined === O ||
                            O.show(),
                          null === (R = Bi) ||
                            undefined === R ||
                            R.showBorderGraphics()),
                        [2]
                      );
                    case 16:
                      return gt(false), [7];
                    case 17:
                      return [3, 19];
                    case 18:
                      null === (B = Bi) ||
                        undefined === B ||
                        B.showBorderGraphics(),
                        gt(false),
                        (z.label = 19);
                    case 19:
                      if (!i || !t) return [3, 23];
                      z.label = 20;
                    case 20:
                      return (
                        z.trys.push([20, 22, , 23]), [4, cr({ imageId: t })]
                      );
                    case 21:
                      return (
                        (w = z.sent()),
                        Ut(w.current >= w.taskLimit),
                        Kt(gn(w.benefitId, w.cacheExpire) || ""),
                        [3, 23]
                      );
                    case 22:
                      return z.sent(), Ut(false), [3, 23];
                    case 23:
                      return (
                        z.trys.push([23, 27, 28, 29]),
                        i
                          ? (setCurrentPage(pageMode.Save),
                            At(true),
                            [4, Bi.replay()])
                          : [3, 25]
                      );
                    case 24:
                      return (
                        z.sent(), pt(o.replace(/^.+base64,/g, "")), [3, 26]
                      );
                    case 25:
                      Ze(true),
                        Xe(fuDetectErrorHints.CoverFu),
                        Bi.unlockAllStickers(),
                        null === (D = Bi.getStamp()) ||
                          undefined === D ||
                          D.show(),
                        (z.label = 26);
                    case 26:
                      return [3, 29];
                    case 27:
                      return z.sent(), [3, 29];
                    case 28:
                      return At(false), [7];
                    case 29:
                      return [2];
                  }
                });
              });
            },
            onActiveFontChanged = function (e) {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return setAlreadyDrawn(false), [4, Bi.changeFont(e)];
                    case 1:
                      return (
                        t.sent(),
                        Yi && setAlreadyDrawn(true),
                        setActiveFont(e),
                        [2]
                      );
                  }
                });
              });
            },
            onClear = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        setAlreadyDrawn(false),
                        activeFont ? [4, Bi.changeFont(activeFont)] : [3, 2]
                      );
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            },
            onUndo = function () {
              var e, t;
              null === (e = Bi.getTablet()) || undefined === e || e.undo();
              var n =
                null === (t = Bi.getTablet()) || undefined === t
                  ? undefined
                  : t.getHistory();
              n &&
                n.sh &&
                (n.sh.length <= 2 ||
                  !n.sh.find(function (e) {
                    return 0 === e.O;
                  })) &&
                setAlreadyDrawn(false);
            },
            onStampChanged = function (e) {
              Qt(""),
                st(e),
                e && e !== clickToSignText
                  ? e.split("").filter(function (e) {
                      return !isChineseRegex.test(e);
                    }).length > 0
                    ? (ut(true), Qt("只能输入中文汉字哦"))
                    : e.length > 6
                    ? (ut(true), Qt("只能填写至多六个汉字哦"))
                    : ut(false)
                  : ut(true);
            },
            onOk_ = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t;
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      Qt(""), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [4, ar({ signatureMessage: ot })]
                      );
                    case 2:
                      return (
                        (e = n.sent().secStatus),
                        1 === e
                          ? (rt(false), ut(false), Bi.updateStamp(ot))
                          : (ut(true), Hn(Qn + 1), Qt("换个签名再试试")),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (t = n.sent()),
                        t && 100201 === t.error
                          ? Qt(defaultErrorHint)
                          : (ut(true), Qt(t.desc || defaultErrorHint)),
                        [3, 4]
                      );
                    case 4:
                      return Tracert.click("c64127.d132253"), [2];
                  }
                });
              });
            },
            onOk__ = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        Ct(false),
                        Bi.reset(),
                        pt(""),
                        Mt(""),
                        st(clickToSignText),
                        ut(true),
                        setFreemode(false),
                        setAlreadyDrawn(false),
                        fonts
                          ? (setActiveFont(fonts[0]),
                            [4, Bi.changeFont(fonts[0])])
                          : [3, 2]
                      );
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return (
                        Yi && setAlreadyDrawn(true),
                        Ln(0),
                        Yn({}),
                        Hn(0),
                        wt(false),
                        Et(false),
                        jn(false),
                        setCurrentPage(pageMode.Writing),
                        [2]
                      );
                  }
                });
              });
            },
            onSave = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e;
                return __generator(this, function (t) {
                  return (
                    Ct(false),
                    Tn(true),
                    isAndroid
                      ? Cn(true)
                      : ((e = Bi.getFinalImage({ iosSnapshotImageData: true })
                          .iosSnapshotImageData),
                        gi(e)),
                    pi(true),
                    [2]
                  );
                });
              });
            },
            onEntered = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t;
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      window.scrollTo(0, 0), (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, wn(500)];
                    case 2:
                      return (
                        n.sent(),
                        isIos && (Ze(true), Xe("已保存到系统相册")),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (e = n.sent()),
                        Ze(true),
                        Xe(
                          (null === (t = e) || undefined === t
                            ? undefined
                            : t.message) || "保存失败"
                        ),
                        [3, 4]
                      );
                    case 4:
                      return Tn(false), pi(false), isAndroid && Cn(false), [2];
                  }
                });
              });
            },
            onFucard = function (e) {
              return __awaiter(undefined, undefined, undefined, function () {
                var t, n, i, r;
                return __generator(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (((t = ""), (n = e || zt), !n)) return [3, 11];
                      a.label = 1;
                    case 1:
                      return a.trys.push([1, 3, , 4]), [4, rr({ imageId: n })];
                    case 2:
                      if (
                        ((i = a.sent()),
                        (t = i.blessCardStr),
                        "" === t || undefined === t)
                      )
                        throw new Error("empty bless card");
                      return [3, 4];
                    case 3:
                      return a.sent(), ei(true), [2];
                    case 4:
                      return (
                        a.trys.push([4, 6, , 7]),
                        [
                          4,
                          AlipayJSAPI.call(
                            "AlipayNewYearNebulaPlugin.showFuCard",
                            {
                              showFuCard: t,
                              sourceType: sourceType,
                              extParams: { customFuImage: 1 === en ? mt : "" },
                            }
                          ),
                        ]
                      );
                    case 5:
                      return (
                        a.sent(),
                        wt(true),
                        window.setTimeout(function () {
                          wt(false);
                        }, 2500),
                        [3, 7]
                      );
                    case 6:
                      return a.sent(), [3, 7];
                    case 7:
                      return a.trys.push([7, 9, , 10]), [4, cr({ imageId: n })];
                    case 8:
                      return (
                        (i = a.sent()), Ut(i.current >= i.taskLimit), [3, 10]
                      );
                    case 9:
                      return (r = a.sent()), Ii(r.code), [3, 10];
                    case 10:
                      return [3, 12];
                    case 11:
                      Ii(""), (a.label = 12);
                    case 12:
                      return [2];
                  }
                });
              });
            },
            onReplay = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return At(true), [4, Bi.replay()];
                    case 1:
                      return e.sent(), At(false), [2];
                  }
                });
              });
            },
            onPrint = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                return __generator(this, function (e) {
                  return (
                    printUrl && ni && qt
                      ? AlipayJSAPI.pushWindow({
                          url: printUrl
                            .replace(printTemplates.benefitId, qt)
                            .replace(printTemplates.mediaId, ni),
                        })
                      : (Ze(true),
                        Xe(""),
                        nn.error("invalid print url", [
                          "aliasImageIdForPrint: " + ni + ", benefitId: " + qt,
                        ])),
                    [2]
                  );
                });
              });
            },
            onHdMerge = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t;
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, 3, 4]),
                        gt(true),
                        [4, mr({ aliasImageId: ni, type: 1 })]
                      );
                    case 1:
                      return (e = n.sent()), oi(e.url), ui(true), [3, 4];
                    case 2:
                      return (t = n.sent()), Ii(t.code), [3, 4];
                    case 3:
                      return gt(false), [7];
                    case 4:
                      return [2];
                  }
                });
              });
            },
            onOk___ = function () {
              nn.info("hdmergeurl", [ai]);
              try {
                AlipayJSAPI.setClipboard(ai),
                  ui(false),
                  Ze(true),
                  Xe("链接复制成功");
              } catch (e) {
                Ze(true), Xe("");
              }
            },
            onOk____ = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t, n, i, r, a, o, s;
                return __generator(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return ln(false), At(true), [4, Bi.replay()];
                    case 1:
                      return (
                        l.sent(),
                        (e = Bi.getFinalImage({ imageData: true }).imageData),
                        [
                          4,
                          AlipayJSAPI.call("uploadImage", {
                            data: e.replace(/^.+base64,/g, ""),
                            dataType: "dataURL",
                            compress: 3,
                            business: bizTypes.CompletePNG,
                            publicDomain: true,
                          }),
                        ]
                      );
                    case 2:
                      (t = l.sent().multimediaID), (l.label = 3);
                    case 3:
                      return (
                        l.trys.push([3, 5, , 6]),
                        [4, ir(__assign({ imageId: t }, dn))]
                      );
                    case 4:
                      return (
                        (n = l.sent()),
                        pt(e.replace(/^.+base64,/g, "")),
                        Mt(t),
                        ii(n && n.aliasImageId),
                        [3, 6]
                      );
                    case 5:
                      return (
                        (i = l.sent()),
                        (r = Ii(i.code)),
                        r
                          ? (At(false),
                            null === (o = Bi) ||
                              undefined === o ||
                              o.showBorderGraphics(),
                            [2])
                          : [3, 6]
                      );
                    case 6:
                      return (
                        l.trys.push([6, 10, 11, 12]), [4, cr({ imageId: t })]
                      );
                    case 7:
                      return (
                        (a = l.sent()),
                        Ut(a.current >= a.taskLimit),
                        Kt(gn(a.benefitId, a.cacheExpire) || ""),
                        (
                          null === (s = downgradeResult) || undefined === s
                            ? undefined
                            : s.replay
                        )
                          ? [4, Bi.setLastImg(e.replace(/^.+base64,/g, ""))]
                          : [3, 9]
                      );
                    case 8:
                      l.sent(), (l.label = 9);
                    case 9:
                      return [3, 12];
                    case 10:
                      return l.sent(), [3, 12];
                    case 11:
                      return jn(false), At(false), [7];
                    case 12:
                      return [2];
                  }
                });
              });
            },
            onShare = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t, n, i, r;
                return __generator(this, function (a) {
                  switch (a.label) {
                    case 0:
                      gt(true),
                        (e =
                          "alipays://platformapi/startapp?appId=68687779&shareUserId=" +
                          (null === (r = Pi) || undefined === r
                            ? undefined
                            : r.userId) +
                          "&shareImageId=" +
                          (_n || zt)),
                        (n = ""),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 5, , 6]),
                        _n ? ((n = _n), [3, 4]) : [3, 2]
                      );
                    case 2:
                      return [4, sr({ imageId: zt })];
                    case 3:
                      (i = a.sent().success),
                        i && ((n = zt), yn(zt)),
                        (a.label = 4);
                    case 4:
                      if (!n) throw new Error("empty share image id");
                      return [3, 6];
                    case 5:
                      return a.sent(), gt(false), Ze(true), Xe(""), [2];
                    case 6:
                      return (
                        gt(false),
                        (function () {
                          __awaiter(
                            undefined,
                            undefined,
                            undefined,
                            function () {
                              var i, r, a, o, s, l, c;
                              return __generator(this, function (u) {
                                switch (u.label) {
                                  case 0:
                                    return (
                                      u.trys.push([0, 2, , 3]),
                                      [
                                        4,
                                        AlipayJSAPI.call("easyShare", {
                                          bizType: "ztokenV0_FVQqxngP",
                                          title: "快来抢我的手写福卡",
                                          desc: "拼手气抢我的手写福卡",
                                          url: e,
                                          iconUrl:
                                            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*1e2nSL6HwKQAAAAAAAAAAAAAARQnAQ",
                                          padTemplate: "0",
                                          takeOverChannels: ["ALPContact"],
                                          imageUrl:
                                            "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*YWTvS4F_oyUAAAAAAAAAAAAAARQnAQ",
                                        }),
                                      ]
                                    );
                                  case 1:
                                    return (t = u.sent()), [3, 3];
                                  case 2:
                                    return u.sent(), [3, 3];
                                  case 3:
                                    return (
                                      u.trys.push([3, 6, , 7]),
                                      "ALPContact" !== t.channelName ||
                                      "takeOver" !== t.action
                                        ? [3, 5]
                                        : [
                                            4,
                                            AlipayJSAPI.call(
                                              "APSocialNebulaPlugin.selectContactJSAPI",
                                              {
                                                model: "recentSession",
                                                enableMultiSelect: true,
                                                multiMax: 20,
                                              }
                                            ),
                                          ]
                                    );
                                  case 4:
                                    (o = u.sent()),
                                      (i =
                                        null === (s = o) || undefined === s
                                          ? undefined
                                          : s.groupsDictArray),
                                      (r =
                                        null === (l = o) || undefined === l
                                          ? undefined
                                          : l.contactsDicArray),
                                      (u.label = 5);
                                  case 5:
                                    return [3, 7];
                                  case 6:
                                    return u.sent(), gt(false), [2];
                                  case 7:
                                    if (!((i && i.length) || (r && r.length)))
                                      return [3, 18];
                                    (a = false), (u.label = 8);
                                  case 8:
                                    return (
                                      u.trys.push([8, 10, , 11]),
                                      [
                                        4,
                                        AlipayJSAPI.call(
                                          "APSocialNebulaPlugin.showShareDialog",
                                          {
                                            canInputExtra: false,
                                            shareObject: {
                                              type: "url",
                                              thumbUrl:
                                                "https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*1e2nSL6HwKQAAAAAAAAAAAAAARQnAQ",
                                              title: "快来抢我的手写福卡",
                                              desc:
                                                "一笔一画都是见字如面的祝福",
                                            },
                                            shareTargets: ks(
                                              (i &&
                                                i.length &&
                                                i.map(function (e) {
                                                  return {
                                                    type: "2",
                                                    name: e.groupName,
                                                    headUrl: e.iconUrl,
                                                    membersCount: e.memberCount,
                                                  };
                                                })) ||
                                                [],
                                              (r &&
                                                r.length &&
                                                r.map(function (e) {
                                                  return {
                                                    type: "1",
                                                    name: e.displayName,
                                                    headUrl: e.headUrl,
                                                  };
                                                })) ||
                                                []
                                            ),
                                          }
                                        ),
                                      ]
                                    );
                                  case 9:
                                    return (
                                      (o = u.sent()),
                                      "confirm" !== o.action
                                        ? (gt(false), [2])
                                        : ((a = true), [3, 11])
                                    );
                                  case 10:
                                    return u.sent(), Ze(true), Xe(""), [3, 11];
                                  case 11:
                                    if (!a) return [3, 18];
                                    u.label = 12;
                                  case 12:
                                    return (
                                      u.trys.push([12, 17, , 18]),
                                      i && i.length
                                        ? [
                                            4,
                                            Promise.all(
                                              i.map(function (e) {
                                                var t = e.groupId;
                                                return __awaiter(
                                                  undefined,
                                                  undefined,
                                                  undefined,
                                                  function () {
                                                    return __generator(
                                                      this,
                                                      function (e) {
                                                        switch (e.label) {
                                                          case 0:
                                                            return [
                                                              4,
                                                              dr({
                                                                imageId: n,
                                                                inviteeId: t,
                                                                inviteType:
                                                                  "group",
                                                              }),
                                                            ];
                                                          case 1:
                                                            return (
                                                              e.sent(), [2]
                                                            );
                                                        }
                                                      }
                                                    );
                                                  }
                                                );
                                              })
                                            ),
                                          ]
                                        : [3, 14]
                                    );
                                  case 13:
                                    u.sent(), (u.label = 14);
                                  case 14:
                                    return r && r.length
                                      ? [
                                          4,
                                          Promise.all(
                                            r.map(function (e) {
                                              var t = e.userID;
                                              return __awaiter(
                                                undefined,
                                                undefined,
                                                undefined,
                                                function () {
                                                  return __generator(
                                                    this,
                                                    function (e) {
                                                      switch (e.label) {
                                                        case 0:
                                                          return [
                                                            4,
                                                            dr({
                                                              imageId: n,
                                                              inviteeId: t,
                                                              inviteType:
                                                                "personal",
                                                            }),
                                                          ];
                                                        case 1:
                                                          return e.sent(), [2];
                                                      }
                                                    }
                                                  );
                                                }
                                              );
                                            })
                                          ),
                                        ]
                                      : [3, 16];
                                  case 15:
                                    u.sent(), (u.label = 16);
                                  case 16:
                                    return (
                                      Ze(true),
                                      Xe("发送成功"),
                                      Sn(n),
                                      Nn(
                                        (null === (c = Pi) || undefined === c
                                          ? undefined
                                          : c.userId) || ""
                                      ),
                                      Dn(false),
                                      [3, 18]
                                    );
                                  case 17:
                                    return u.sent(), Ze(true), Xe(""), [3, 18];
                                  case 18:
                                    return gt(false), [2];
                                }
                              });
                            }
                          );
                        })(),
                        [2]
                      );
                  }
                });
              });
            },
            onShowShareDetail = function () {
              return __awaiter(undefined, undefined, undefined, function () {
                var e, t, n, i, r, a, o;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        (null === (n = homeInitResult) || undefined === n
                          ? undefined
                          : n.enableShare) &&
                        !_n
                      )
                        return Dn(true), [2];
                      s.label = 1;
                    case 1:
                      return (
                        s.trys.push([1, 3, 4, 5]),
                        Ei(undefined),
                        gt(true),
                        [
                          4,
                          lr({
                            userId:
                              (null === (i = Pi) || undefined === i
                                ? undefined
                                : i.userId) || "",
                            imageId: _n || zt,
                            closeTfsImage: !!(null === (r = fuRegConfig) ||
                            undefined === r
                              ? undefined
                              : r.closeTfsImage),
                          }),
                        ]
                      );
                    case 2:
                      if (((e = s.sent()), !e.success)) throw e;
                      return (
                        Ei(e),
                        Ai(true),
                        Nn(
                          (null === (a = Pi) || undefined === a
                            ? undefined
                            : a.userId) || ""
                        ),
                        Sn(_n || zt),
                        [3, 5]
                      );
                    case 3:
                      return (
                        (t = s.sent()),
                        Ii(
                          null === (o = t) || undefined === o
                            ? undefined
                            : o.code
                        ),
                        [3, 5]
                      );
                    case 4:
                      return gt(false), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            };
          if (currentPage === pageMode.ScreenReader)
            return React_.a.createElement(
              "article",
              {
                className:
                  className$0.a.container + " " + className$0.a.screenReader,
              },
              React_.a.createElement(
                "div",
                { className: className$0.a.inner },
                React_.a.createElement($o, null)
              )
            );
          var Or =
            ((
              null === (s = homeInitResult) || undefined === s
                ? undefined
                : s.prePeriod
            )
              ? prePeriodTitles
              : periodTitles)[currentPage] ||
            ((
              null === (l = homeInitResult) || undefined === l
                ? undefined
                : l.prePeriod
            )
              ? prePeriodTitles
              : periodTitles)[pageMode.Empty];
          return React_.a.createElement(
            React_.a.Fragment,
            null,
            vi &&
              (null === (c = homeInitResult) || undefined === c
                ? undefined
                : c.enableShare) &&
              React_.a.createElement(
                "article",
                {
                  className:
                    className$0.a.container + " " + className$0.a.cardsShare,
                },
                React_.a.createElement(
                  "div",
                  { className: className$0.a.inner },
                  React_.a.createElement(App, {
                    onClose: onClose,
                    onShare: onShare,
                    onShowToast: function (e) {
                      Ze(true), Xe(e);
                    },
                    shareImageId: shareImageId,
                    shareUserId: shareUserId,
                    closeTfsImage: !!(null === (u = fuRegConfig) ||
                    undefined === u
                      ? undefined
                      : u.closeTfsImage),
                  })
                )
              ),
            React_.a.createElement(
              "article",
              { className: className$0.a.container },
              currentPage === pageMode.Writing &&
                React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement("div", {
                    className: className$0.a.line1,
                  }),
                  React_.a.createElement("div", {
                    className: className$0.a.line2,
                  })
                ),
              (currentPage === pageMode.Decorate ||
                currentPage === pageMode.Save) &&
                React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  React_.a.createElement("div", {
                    className: className$0.a.spark1,
                    style: {
                      top:
                        currentPage === pageMode.Save ? "0.05rem" : "0.26rem",
                    },
                  }),
                  React_.a.createElement("div", {
                    className: className$0.a.spark2,
                    style: {
                      top:
                        currentPage === pageMode.Save ? "0.18rem" : "1.03rem",
                      left:
                        currentPage === pageMode.Save ? "0.7rem" : "0.21rem",
                    },
                  })
                ),
              currentPage === pageMode.Save &&
                React_.a.createElement(
                  React_.a.Fragment,
                  null,
                  !(null === (d = homeInitResult) || undefined === d
                    ? undefined
                    : d.prePeriod) &&
                    React_.a.createElement("div", {
                      className: className$0.a.ground,
                    }),
                  React_.a.createElement("div", {
                    className: extractClassNameFromArgs()(
                      className$0.a.house,
                      ((t = {}),
                      (t[className$0.a.prePeriod] =
                        null === (m = homeInitResult) || undefined === m
                          ? undefined
                          : m.prePeriod),
                      t)
                    ),
                  })
                ),
              React_.a.createElement(
                "div",
                {
                  className: extractClassNameFromArgs()(
                    className$0.a.inner,
                    ((n = {}),
                    (n[className$0.a.indecorate] =
                      currentPage === pageMode.Decorate),
                    (n[className$0.a.insave] = currentPage === pageMode.Save),
                    n)
                  ),
                },
                (
                  null === (f = downgradeResult) || undefined === f
                    ? undefined
                    : f.full
                )
                  ? currentPage === pageMode.Save &&
                      zt &&
                      React_.a.createElement("div", {
                        className: className$0.a.canvas,
                        style: {
                          width: "3.12rem",
                          height: "3.12rem",
                          backgroundImage: "url(" + baseUrl + "/" + zt + ")",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                        },
                      })
                  : React_.a.createElement("canvas", {
                      id: "artboard",
                      className: className$0.a.canvas,
                    }),
                currentPage !== pageMode.Guide &&
                  React_.a.createElement(
                    React_.a.Fragment,
                    null,
                    React_.a.createElement("div", {
                      className: className$0.a.title,
                      "aria-label": "开笔写福福气临门",
                    }),
                    React_.a.createElement(
                      "div",
                      {
                        className: extractClassNameFromArgs()(
                          className$0.a.subtitle,
                          ((a = {}), (a[className$0.a.empty] = !Or), a)
                        ),
                        "aria-label": Or,
                      },
                      Or
                    )
                  ),
                currentPage === pageMode.Cover &&
                  React_.a.createElement(io, { isStart: isStart, text: Ti }),
                React_.a.createElement(Bn, {
                  prePeriod: !!(null === (g = homeInitResult) || undefined === g
                    ? undefined
                    : g.prePeriod),
                  visible: currentPage === pageMode.Guide,
                  onOk: onOk,
                }),
                currentPage === pageMode.Writing
                  ? React_.a.createElement(
                      React_.a.Fragment,
                      null,
                      React_.a.createElement($n, {
                        fonts: fonts || [],
                        degradeLevel: Yi
                          ? degradeLevelCodes.Static
                          : degradeLevelCodes.None,
                        isAlreadyDrawn: isAlreadyDrawn,
                        freemode: freemode,
                        activeFont: activeFont,
                        onNext: onNext,
                        onClear: onClear,
                        onUndo: onUndo,
                        onActiveFontChanged: onActiveFontChanged,
                        onFreemodeChanged: function (e) {
                          setFreemode(e);
                        },
                      })
                    )
                  : null,
                currentPage === pageMode.Decorate &&
                  React_.a.createElement(
                    React_.a.Fragment,
                    null,
                    React_.a.createElement(si, {
                      downgraded: !!(null === (b = downgradeResult) ||
                      undefined === b
                        ? undefined
                        : b.decorate),
                      prePeriod: !!(null === (v = homeInitResult) ||
                      undefined === v
                        ? undefined
                        : v.prePeriod),
                      stickers: Fi || [],
                      activeStickerTabKey: Wi || "",
                      onStickerTabKeyChanged: Zi,
                      onStickerAdded: onStickerAdded,
                      onPrev: onPrev,
                      onNext: onNext_,
                    }),
                    React_.a.createElement(Xi, {
                      stamp: ot,
                      disabled: ct,
                      visible: it,
                      errorMessage: Gt,
                      onStampChanged: onStampChanged,
                      onOk: onOk_,
                      onCancel: function () {
                        ut(true),
                          rt(false),
                          st(clickToSignText),
                          Qt(""),
                          Bi.updateStamp(clickToSignText),
                          Tracert.click("c64127.d132252");
                      },
                      onClose: function () {
                        rt(false);
                      },
                    })
                  ),
                currentPage === pageMode.Save &&
                  React_.a.createElement(
                    React_.a.Fragment,
                    null,
                    React_.a.createElement(Li, {
                      prePeriod: !!(null === (A = homeInitResult) ||
                      undefined === A
                        ? undefined
                        : A.prePeriod),
                      imgCreateOnPrePeriod: !!(null === (_ = homeInitResult) ||
                      undefined === _
                        ? undefined
                        : _.imgCreateOnPrePeriod),
                      shareImgId:
                        (null === (y = homeInitResult) || undefined === y
                          ? undefined
                          : y.shareImageId) || "",
                      shareEntranceVisible: bn,
                      shareDisabled: Mn,
                      replaying: vt,
                      replayDowngrade: !!(null === (w = downgradeResult) ||
                      undefined === w
                        ? undefined
                        : w.replay),
                      saveDisabled: yt,
                      replayDisabled: xt,
                      benefitId: qt,
                      saveImageSwitch: !!(null === (k = homeInitResult) ||
                      undefined === k
                        ? undefined
                        : k.saveImageSwitch),
                      selfLimit: Ft,
                      fiveLuckyTopCards: Wt,
                      fiveLuckyJumpSchema: fiveLuckyJumpSchema,
                      onRewrite: function () {
                        return Ct(true);
                      },
                      onSave: onSave,
                      onReplay: onReplay,
                      onFucard: onFucard,
                      onPrint: onPrint,
                      onHdMerge: onHdMerge,
                      onShowShareDetail: onShowShareDetail,
                      onShowShareModal: function () {
                        vi || Dn(true);
                      },
                    }),
                    React_.a.createElement($i, {
                      visible: Tt,
                      saveDisabled: yt,
                      onOK: function () {
                        Ct(false), onOk__();
                      },
                      onClose: function () {
                        return Ct(false);
                      },
                      onSave: function () {
                        return __awaiter(
                          undefined,
                          undefined,
                          undefined,
                          function () {
                            return __generator(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, onSave()];
                                case 1:
                                  return e.sent(), Ct(false), [2];
                              }
                            });
                          }
                        );
                      },
                    }),
                    React_.a.createElement(As, {
                      visible: ci,
                      onClose: function () {
                        return ui(false);
                      },
                      onOk: onOk___,
                    })
                  )
              ),
              React_.a.createElement(gr, {
                visible: visible,
                message: message,
                onOK: function () {
                  setVisible(false);
                },
              }),
              React_.a.createElement(hs, {
                visible: We,
                text: Je,
                onClose: function () {
                  Ze(false);
                },
              }),
              React_.a.createElement(_r, {
                visible: !vi && an,
                onOK: onOk____,
                okText: "去看看",
              }),
              React_.a.createElement(La, {
                imageId: _n || zt,
                visible: Rn,
                onOK: onShare,
                onRewrite: function () {
                  Dn(false);
                },
                onClose: function () {
                  return Dn(false);
                },
              }),
              React_.a.createElement($a, {
                visible: yi,
                onClose: function () {
                  return wi(false);
                },
              }),
              React_.a.createElement(ss, {
                visible: Kn,
                onOK: function () {
                  return ei(false);
                },
              })
            ),
            React_.a.createElement(ds, {
              fullDowngraded: !!(null === (x = downgradeResult) ||
              undefined === x
                ? undefined
                : x.full),
              imageId: zt,
              imageData: hi,
              visible: mi,
              onEntered: onEntered,
            }),
            React_.a.createElement(is, { visible: ht })
          );
        },
        MainAppClass = MainApp;
      exports["default"] = wrapper(MainAppClass);
    },
    cKY1: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".wrapper___NynWt{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999}.wrapper___NynWt.enter___2yyik .toast___2o4uf{opacity:0}.wrapper___NynWt.activeEnter___3Z41Z .toast___2o4uf{opacity:1;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.wrapper___NynWt.exit___3wXi7 .toast___2o4uf{opacity:1}.wrapper___NynWt.activeExit___Mzx8_ .toast___2o4uf{opacity:0;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.wrapper___NynWt .toast___2o4uf{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:.4rem;border-radius:.2rem;background-color:rgba(0,0,0,.7);display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;padding:0 .14rem}.wrapper___NynWt .toast___2o4uf img{height:.28rem}.wrapper___NynWt .toast___2o4uf span{color:#ffd699;font-size:.14rem;white-space:nowrap;margin-left:.13rem}",
          "",
        ]),
        (exports.locals = {
          wrapper: "wrapper___NynWt",
          enter: "enter___2yyik",
          toast: "toast___2o4uf",
          activeEnter: "activeEnter___3Z41Z",
          exit: "exit___3wXi7",
          activeExit: "activeExit___Mzx8_",
        });
    },
    cVG9: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("/qOd");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    cVRq: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("jaE2");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    drRq: function (module, exports) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" === typeof window && (n = window);
      }
      module.exports = n;
    },
    fZ3z: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("5Pvd");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    faye: function (module, exports) {
      module.exports = ReactDOM;
    },
    foPU: function (module, exports, __webpack_require__) {
      var i = __webpack_require__("NfOW");
      module.exports = i;
    },
    fsy2: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("P6ha");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    gGZN: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".cardsTitleArea___3-pzQ{margin-top:.185rem;margin-bottom:.05rem;text-align:center;position:relative;height:.816rem}.cardsTitleArea___3-pzQ .cardsTitle___3l_oF{position:absolute;z-index:20}.cardsTitleArea___3-pzQ .cardsTitle___3l_oF .avatar___3LHOB{display:inline-block;vertical-align:middle;margin-bottom:.123rem}.cardsTitleArea___3-pzQ .cardsTitle___3l_oF .text___Da4kn{font-size:.18rem;color:#fedcad;text-align:center;font-weight:700;height:.22rem;line-height:.22rem;width:3.2rem;margin:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cardsTitleArea___3-pzQ .cardsTitle___3l_oF .text___Da4kn>span{display:inline-block;line-height:.22rem;height:.22rem;vertical-align:middle}.cardsTitleArea___3-pzQ .cardsTitle___3l_oF .text___Da4kn .nickName___2U8VR{max-width:1.75rem;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cardsStatusText___2E_ZB{position:relative;font-size:.12rem;color:#f9ddb3;text-align:center;z-index:10;padding:.04rem .16rem;background:rgba(0,0,0,.26);border-radius:24px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:.09rem auto 0}.cardsStatusText___2E_ZB>.div___26gC5{height:.165rem;width:.165rem}.closeBtn___tlk7S{height:.445rem;line-height:.445rem;width:1.8rem;background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/11b919f1-b7ef-420d-95d5-9e8bd70b3781.svg);background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:2;top:.6rem;text-align:center;font-size:.17rem;color:#ffead0;font-weight:700}",
          "",
        ]),
        (exports.locals = {
          cardsTitleArea: "cardsTitleArea___3-pzQ",
          cardsTitle: "cardsTitle___3l_oF",
          avatar: "avatar___3LHOB",
          text: "text___Da4kn",
          nickName: "nickName___2U8VR",
          cardsStatusText: "cardsStatusText___2E_ZB",
          div: "div___26gC5",
          closeBtn: "closeBtn___tlk7S",
        });
    },
    gieQ: function (module, exports, __webpack_require__) {
      "use strict";
      (function (e) {
        function i(e) {
          "@babel/helpers - typeof";
          return (
            (i =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            i(e)
          );
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || false),
              (i.configurable = true),
              "value" in i && (i.writable = true),
              Object.defineProperty(e, i.key, i);
          }
        }
        function o(e, t, n) {
          return t && a(e.prototype, t), n && a(e, n), e;
        }
        function s(e, t) {
          return u(e) || m(e, t) || p(e, t) || g();
        }
        function l(e) {
          return c(e) || d(e) || p(e) || h();
        }
        function c(e) {
          if (Array.isArray(e)) return f(e);
        }
        function u(e) {
          if (Array.isArray(e)) return e;
        }
        function d(e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        function m(e, t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
              i = true,
              r = false,
              a = undefined;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(i = (o = s.next()).done);
                i = true
              )
                if ((n.push(o.value), t && n.length === t)) break;
            } catch (e) {
              (r = true), (a = e);
            } finally {
              try {
                i || null == s["return"] || s["return"]();
              } finally {
                if (r) throw a;
              }
            }
            return n;
          }
        }
        function p(e, t) {
          if (e) {
            if ("string" === typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? f(e, t)
                : undefined
            );
          }
        }
        function f(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
          return i;
        }
        function h() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function g() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        __webpack_require__.d(exports, "a", function () {
          return F;
        }),
          __webpack_require__.d(exports, "b", function () {
            return Y;
          });
        var b = (function (e) {
          return function () {
            if (!e || !e.navigator || !e.navigator.userAgent) return "";
            var t = e.navigator.userAgent,
              n = !!t.match(/iphone|ipad|iPod/gi),
              i = !!t.match(/android/gi),
              r = !!t.match(/Firefox/gi),
              a = !!t.match(/Chrome/gi),
              o = !t.match(/Chrome/gi) && !!t.match(/Safari/gi),
              s = !!t.match(/Opera/gi),
              l = !!t.match(/MSIE/gi),
              c = "";
            return (
              n && (c = "iOS"),
              i && (c = "Android"),
              r && (c = "Firefox"),
              a && (c = "Chrome"),
              o && (c = "Safari"),
              s && (c = "Opera"),
              l && (c = "IE"),
              c
            );
          };
        })(undefined);
        function v() {
          return true;
        }
        var A = function (e) {
          switch (e) {
            case "iOS":
              return {
                filter: function (e) {
                  return e.indexOf("[native code]") < 0 && e.indexOf("@") >= 0;
                },
              };
            case "Android":
              return {
                filter: function (e, t) {
                  return t && e.indexOf("nonymous") < 0 && v();
                },
              };
            default:
              return {
                filter: function () {
                  return true;
                },
              };
          }
        };
        function _(e, t) {
          var n = (65535 & e) + (65535 & t),
            i = (e >> 16) + (t >> 16) + (n >> 16);
          return (i << 16) | (65535 & n);
        }
        function y(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function w(e, t, n, i, r, a) {
          return _(y(_(_(t, e), _(i, a)), r), n);
        }
        function k(e, t, n, i, r, a, o) {
          return w((t & n) | (~t & i), e, t, r, a, o);
        }
        function x(e, t, n, i, r, a, o) {
          return w((t & i) | (n & ~i), e, t, r, a, o);
        }
        function E(e, t, n, i, r, a, o) {
          return w(t ^ n ^ i, e, t, r, a, o);
        }
        function S(e, t, n, i, r, a, o) {
          return w(n ^ (t | ~i), e, t, r, a, o);
        }
        function T(e, t) {
          var n, i, r, a, o;
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          var s = 1732584193,
            l = -271733879,
            c = -1732584194,
            u = 271733878;
          for (n = 0; n < e.length; n += 16)
            (i = s),
              (r = l),
              (a = c),
              (o = u),
              (s = k(s, l, c, u, e[n], 7, -680876936)),
              (u = k(u, s, l, c, e[n + 1], 12, -389564586)),
              (c = k(c, u, s, l, e[n + 2], 17, 606105819)),
              (l = k(l, c, u, s, e[n + 3], 22, -1044525330)),
              (s = k(s, l, c, u, e[n + 4], 7, -176418897)),
              (u = k(u, s, l, c, e[n + 5], 12, 1200080426)),
              (c = k(c, u, s, l, e[n + 6], 17, -1473231341)),
              (l = k(l, c, u, s, e[n + 7], 22, -45705983)),
              (s = k(s, l, c, u, e[n + 8], 7, 1770035416)),
              (u = k(u, s, l, c, e[n + 9], 12, -1958414417)),
              (c = k(c, u, s, l, e[n + 10], 17, -42063)),
              (l = k(l, c, u, s, e[n + 11], 22, -1990404162)),
              (s = k(s, l, c, u, e[n + 12], 7, 1804603682)),
              (u = k(u, s, l, c, e[n + 13], 12, -40341101)),
              (c = k(c, u, s, l, e[n + 14], 17, -1502002290)),
              (l = k(l, c, u, s, e[n + 15], 22, 1236535329)),
              (s = x(s, l, c, u, e[n + 1], 5, -165796510)),
              (u = x(u, s, l, c, e[n + 6], 9, -1069501632)),
              (c = x(c, u, s, l, e[n + 11], 14, 643717713)),
              (l = x(l, c, u, s, e[n], 20, -373897302)),
              (s = x(s, l, c, u, e[n + 5], 5, -701558691)),
              (u = x(u, s, l, c, e[n + 10], 9, 38016083)),
              (c = x(c, u, s, l, e[n + 15], 14, -660478335)),
              (l = x(l, c, u, s, e[n + 4], 20, -405537848)),
              (s = x(s, l, c, u, e[n + 9], 5, 568446438)),
              (u = x(u, s, l, c, e[n + 14], 9, -1019803690)),
              (c = x(c, u, s, l, e[n + 3], 14, -187363961)),
              (l = x(l, c, u, s, e[n + 8], 20, 1163531501)),
              (s = x(s, l, c, u, e[n + 13], 5, -1444681467)),
              (u = x(u, s, l, c, e[n + 2], 9, -51403784)),
              (c = x(c, u, s, l, e[n + 7], 14, 1735328473)),
              (l = x(l, c, u, s, e[n + 12], 20, -1926607734)),
              (s = E(s, l, c, u, e[n + 5], 4, -378558)),
              (u = E(u, s, l, c, e[n + 8], 11, -2022574463)),
              (c = E(c, u, s, l, e[n + 11], 16, 1839030562)),
              (l = E(l, c, u, s, e[n + 14], 23, -35309556)),
              (s = E(s, l, c, u, e[n + 1], 4, -1530992060)),
              (u = E(u, s, l, c, e[n + 4], 11, 1272893353)),
              (c = E(c, u, s, l, e[n + 7], 16, -155497632)),
              (l = E(l, c, u, s, e[n + 10], 23, -1094730640)),
              (s = E(s, l, c, u, e[n + 13], 4, 681279174)),
              (u = E(u, s, l, c, e[n], 11, -358537222)),
              (c = E(c, u, s, l, e[n + 3], 16, -722521979)),
              (l = E(l, c, u, s, e[n + 6], 23, 76029189)),
              (s = E(s, l, c, u, e[n + 9], 4, -640364487)),
              (u = E(u, s, l, c, e[n + 12], 11, -421815835)),
              (c = E(c, u, s, l, e[n + 15], 16, 530742520)),
              (l = E(l, c, u, s, e[n + 2], 23, -995338651)),
              (s = S(s, l, c, u, e[n], 6, -198630844)),
              (u = S(u, s, l, c, e[n + 7], 10, 1126891415)),
              (c = S(c, u, s, l, e[n + 14], 15, -1416354905)),
              (l = S(l, c, u, s, e[n + 5], 21, -57434055)),
              (s = S(s, l, c, u, e[n + 12], 6, 1700485571)),
              (u = S(u, s, l, c, e[n + 3], 10, -1894986606)),
              (c = S(c, u, s, l, e[n + 10], 15, -1051523)),
              (l = S(l, c, u, s, e[n + 1], 21, -2054922799)),
              (s = S(s, l, c, u, e[n + 8], 6, 1873313359)),
              (u = S(u, s, l, c, e[n + 15], 10, -30611744)),
              (c = S(c, u, s, l, e[n + 6], 15, -1560198380)),
              (l = S(l, c, u, s, e[n + 13], 21, 1309151649)),
              (s = S(s, l, c, u, e[n + 4], 6, -145523070)),
              (u = S(u, s, l, c, e[n + 11], 10, -1120210379)),
              (c = S(c, u, s, l, e[n + 2], 15, 718787259)),
              (l = S(l, c, u, s, e[n + 9], 21, -343485551)),
              (s = _(s, i)),
              (l = _(l, r)),
              (c = _(c, a)),
              (u = _(u, o));
          return [s, l, c, u];
        }
        function C(e) {
          var t,
            n = "",
            i = 32 * e.length;
          for (t = 0; t < i; t += 8)
            n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
          return n;
        }
        function I(e) {
          var t,
            n = [];
          for (n[(e.length >> 2) - 1] = undefined, t = 0; t < n.length; t += 1)
            n[t] = 0;
          var i = 8 * e.length;
          for (t = 0; t < i; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
          return n;
        }
        function P(e) {
          return C(T(I(e), 8 * e.length));
        }
        function N(e, t) {
          var n,
            i,
            r = I(e),
            a = [],
            o = [];
          for (
            a[15] = o[15] = undefined,
              r.length > 16 && (r = T(r, 8 * e.length)),
              n = 0;
            n < 16;
            n += 1
          )
            (a[n] = 909522486 ^ r[n]), (o[n] = 1549556828 ^ r[n]);
          return (
            (i = T(a.concat(I(t)), 512 + 8 * t.length)), C(T(o.concat(i), 640))
          );
        }
        function O(e) {
          var t,
            n,
            i = "0123456789abcdef",
            r = "";
          for (n = 0; n < e.length; n += 1)
            (t = e.charCodeAt(n)),
              (r += i.charAt((t >>> 4) & 15) + i.charAt(15 & t));
          return r;
        }
        function R(e) {
          return unescape(encodeURIComponent(e));
        }
        function B(e) {
          return P(R(e));
        }
        function D(e) {
          return O(B(e));
        }
        function z(e, t) {
          return N(R(e), R(t));
        }
        function M(e, t) {
          return O(z(e, t));
        }
        function j(e, t, n) {
          return t ? (n ? z(t, e) : M(t, e)) : n ? B(e) : D(e);
        }
        var F = (function () {
            function e(t) {
              r(this, e),
                (this.env = t || b()),
                (this.stackFilter = A(this.env).filter);
            }
            return (
              o(e, [
                {
                  key: "makeReg",
                  value: function () {
                    switch (this.env) {
                      case "iOS":
                        return new RegExp(
                          "(?:\\s*)\\w+(?=@)|(?:@).*?(?=:\\d*:)|(?::)\\d*(?=:)|(?::)\\d*$",
                          "g"
                        );
                      default:
                        return null;
                    }
                  },
                },
                {
                  key: "stackFormatter",
                  value: function (e) {
                    var t = e.message,
                      n = e.stack,
                      i = [],
                      r = "Android" === this.env,
                      a = "iOS" === this.env,
                      o = n.split("\n").filter(this.stackFilter);
                    o.shift();
                    var l = o.join("\n"),
                      c = this.makeReg();
                    c
                      ? o.map(function (e) {
                          var t = e.match(c);
                          if (t) {
                            var n = s(t, 4),
                              o = n[0],
                              l = undefined === o ? "" : o,
                              u = n[1],
                              d = undefined === u ? "" : u,
                              m = n[2],
                              p = undefined === m ? "" : m,
                              f = n[3],
                              h = undefined === f ? "" : f,
                              g = r ? l.split(".").reverse()[0] : l,
                              b = a ? 1 : 0;
                            i.push(
                              "at "
                                .concat(g, " (")
                                .concat(d.substr(b), ":")
                                .concat(p.substr(b), ":")
                                .concat(h.substr(b), ")")
                            );
                          } else i.push(e);
                          return null;
                        })
                      : (i = o);
                    var u = this.encryptStack(t, i);
                    return { hash: u, message: t, stackList: i, stackStr: l };
                  },
                },
                {
                  key: "encryptStack",
                  value: function (e, t) {
                    var n = [].concat(
                        l(t.slice(0, 6)),
                        l(t.slice(7, 8)),
                        l(t.slice(9, 10)),
                        l(t.slice(11, 12)),
                        l(t.slice(13, 14))
                      ),
                      i = n.join(";");
                    return j("".concat(e, ":").concat(i));
                  },
                },
              ]),
              e
            );
          })(),
          U = 20,
          L = /^\s*at .*? ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::\d+)?(?::\d+)?\)?\s*$/i,
          G = /^\s*.*?(?:\(.*?\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::\d+)?(?::\d+)?\s*$/i,
          Q = /^\s*at (?:(?:\[object object\])?.+ )?\(?((?:file|ms-appx|https?|blob):.*?):\d+(?::\d+)?\)?\s*$/i;
        function H(e) {
          for (
            var t = e.slice(0, U), n = ["", ""], i = {}, r = 1, a = 0;
            a < t.length;
            a += 1
          ) {
            var o = L,
              s = (t[a] || "").match(o);
            if (
              (null === s && ((o = G), (s = (t[a] || "").match(o))),
              null === s && ((o = Q), (s = (t[a] || "").match(o))),
              null !== s)
            ) {
              var l = s[1],
                c = i[l];
              undefined === c &&
                ((i[l] = "#".concat(r, "#")), (r += 1), (c = i[l])),
                (t[a] = t[a].replace(l, c));
            }
          }
          t.length > 0 &&
            (n[1] = t
              .map(function (e) {
                return e.trim();
              })
              .join("\x03"));
          var u = "";
          for (var d in i)
            i.hasOwnProperty(d) && (u += "".concat(d, "@").concat(i[d], ";"));
          return (
            (u = u.replace(/;$/, "")),
            (n[0] = u),
            n
              .join("\x10")
              .replace(/\^/g, "\x04")
              .replace(/=/g, "\x05")
              .replace(/,/g, "\x06")
          );
        }
        function W(e) {
          var t = (e && e.split("\x10")) || [];
          if (!t[0] || !t[1]) return e;
          for (var n = {}, i = t[0].split(";"), r = 0; r < i.length; r += 1) {
            var a = i[r] && i[r].split("@#");
            n["#".concat(a[1])] = a[0];
          }
          return t[1]
            .replace(/#[0-9]+#/g, function (e) {
              return n[e] || "";
            })
            .replace(/\u0004/g, "^")
            .replace(/\u0005/g, "=")
            .replace(/\u0006/g, ",")
            .split("\x03");
        }
        "undefined" === typeof e || i(e);
        var Z = {
            compressStack: function (e) {
              return H(e);
            },
            uncompressStack: function (e) {
              return W(e);
            },
          },
          Y = Z.compressStack;
        Z.uncompressStack;
      }.call(this, __webpack_require__("7vYp")));
    },
    hh8c: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("lIsp");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    hq6T: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("PBiv");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    hwum: function (module, exports, __webpack_require__) {
      "use strict";
      (function (globalScope) {
        __webpack_require__.d(exports, "a", function () {
          return b;
        }),
          __webpack_require__.d(exports, "b", function () {
            return M;
          }),
          __webpack_require__.d(exports, "c", function () {
            return P;
          }),
          __webpack_require__.d(exports, "d", function () {
            return F;
          }),
          __webpack_require__.d(exports, "e", function () {
            return A;
          }),
          __webpack_require__.d(exports, "f", function () {
            return Q;
          }),
          __webpack_require__.d(exports, "g", function () {
            return v;
          });
        var i = __webpack_require__("gieQ");
        function r(e) {
          "@babel/helpers - typeof";
          return (
            (r =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        function a(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || false),
              (i.configurable = true),
              "value" in i && (i.writable = true),
              Object.defineProperty(e, i.key, i);
          }
        }
        function s(e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), e;
        }
        function l(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true,
                })
              : (e[t] = n),
            e
          );
        }
        function c(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), true).forEach(function (t) {
                  l(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function d(e) {
          return m(e) || p(e) || f(e) || g();
        }
        function m(e) {
          if (Array.isArray(e)) return h(e);
        }
        function p(e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        function f(e, t) {
          if (e) {
            if ("string" === typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? h(e, t)
                : undefined
            );
          }
        }
        function h(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
          return i;
        }
        function g() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function b(e) {
          var t =
              arguments.length > 1 && undefined !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && undefined !== arguments[2]
                ? arguments[2]
                : function () {};
          if (!t.length) return true;
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            if (null === e[r] || undefined === e[r])
              return (
                n && n('Field "'.concat(r, '" is required. Log cached.')), false
              );
          }
          return true;
        }
        function v(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        }
        function A(e, t) {
          if (!t || "object" !== r(t)) return e;
          var n = e || {};
          for (var i in t)
            t.hasOwnProperty(i) && undefined !== t[i] && (n[i] = t[i]);
          return n;
        }
        function _(e, t) {
          for (var n = t.split("."), i = 0; i < n.length - 1; i++)
            if (((e = e[n[i]]), "object" !== r(e) || !e || Array.isArray(e)))
              return "";
          return e[n.pop()];
        }
        function y(e, t, n) {
          for (var i = t.split("."), a = 0; a < i.length - 1; a++) {
            if ("object" !== r(e[i[a]]) && undefined !== e[i[a]]) return;
            if (Array.isArray(e[i[a]])) return;
            e[i[a]] || (e[i[a]] = {}), (e = e[i[a]]);
          }
          e[i.pop()] = n;
        }
        var w = (function () {
          function e() {
            a(this, e), (this.defaults = {}), (this.configs = {});
          }
          return (
            s(e, [
              {
                key: "set",
                value: function (e, t, n) {
                  undefined !== n
                    ? ((this.defaults[e] = n), (this.configs[e] = t))
                    : ((this.defaults[e] = t), delete this.configs[e]);
                },
              },
              {
                key: "process",
                value: function (e) {
                  var t;
                  for (var n in ((e = A({}, e)), this.defaults))
                    if (this.defaults.hasOwnProperty(n))
                      switch (this.configs[n]) {
                        case "call":
                          y(e, n, this.defaults[n].call(this, _(e, n), e));
                          break;
                        case "make":
                          undefined === _(e, n) &&
                            y(e, n, this.defaults[n].call(this, e));
                          break;
                        case "append":
                          var i = _(e, n);
                          Array.isArray(i) || (i = []),
                            (t = i).push.apply(t, d(this.defaults[n])),
                            y(e, n, i);
                          break;
                        default:
                          undefined === _(e, n) && y(e, n, this.defaults[n]);
                      }
                  return e;
                },
              },
            ]),
            e
          );
        })();
        function k(e) {
          var t, n;
          try {
            return (t = [].slice.call(e)), t;
          } catch (r) {
            (t = []), (n = e.length);
            for (var i = 0; i < n; i++) t.push(e[i]);
            return t;
          }
        }
        function x(e, t) {
          return (e && e.getAttribute && e.getAttribute(t)) || "";
        }
        var E,
          S = {};
        function T(e) {
          console && console.warn && console.warn(e);
        }
        function C(e, t) {
          S[e] ||
            ((S[e] = 1),
            T(
              "配置项 [".concat(e, "] 已不推荐使用。请使用 [").concat(t, "]。")
            ));
        }
        function I() {
          return eval ? (0, eval)("this") : globalScope || window;
        }
        function P() {
          return E || (E = B()), E;
        }
        var N = (function (e) {
            return function (t) {
              var n;
              if (
                !(null === e || undefined === e
                  ? undefined
                  : null === (n = e.document) || undefined === n
                  ? undefined
                  : n.querySelectorAll)
              )
                return "";
              for (
                var i = k(e.document.querySelectorAll("meta")), r = 0;
                r < i.length;
                r++
              ) {
                var a = i[r];
                if (x(a, "name") === t) return x(a, "content");
              }
              return null;
            };
          })(I()),
          O = {
            _appId: "bm_app_id",
            yuyanId: "yuyan_id",
            sprintId: "bm_sprint_id",
          };
        function R() {
          var e = {};
          for (var t in O)
            if (O.hasOwnProperty(t)) {
              var n = N(O[t]);
              n && (e[t] = n);
            }
          return e;
        }
        function B() {
          var e = new w(),
            t = R();
          return (
            e.set("yuyanId", "call", function (e) {
              return e || t.yuyanId;
            }),
            e.set("bmAppid", "call", function (e, n) {
              return n.yuyanId
                ? (T("已设置yuyanId，其他 id 将不生效"), null)
                : e
                ? (C("bmAppid", "_appId"), e)
                : n.appid
                ? (C("appid", "_appId"), n.appid)
                : n._appId || t._appId;
            }),
            e.set("userId", "call", function (e, t) {
              return t.roleId ? (C("roleId", "userId"), t.roleId) : e;
            }),
            e.set("disableInterface", "call", function (e) {
              return e || false;
            }),
            e.set("oncePerSession", "call", function (e) {
              return e || false;
            }),
            e.set("autoCapture", "call", function (e, t) {
              return !t.hasOwnProperty("autoCapture") || Boolean(t.autoCapture);
            }),
            e.set("defaults", "call", function (e) {
              return A({}, e);
            }),
            e.set("sprintId", "call", function (e) {
              return e || t.sprintId;
            }),
            e.set("requiredFields", "call", function (e) {
              return Array.isArray(e) ? e : "string" === typeof e ? [e] : [];
            }),
            e.set("eventId", "call", function (e, t) {
              return "PC" === t.appType ? "102022" : "102023";
            }),
            e.set("beforeLog", "call", function (e) {
              if ("function" === typeof e) return e;
            }),
            e.set("callBridge", "call", function (e) {
              if ("function" === typeof e) return e;
            }),
            e.set("plugins", "call", function (e) {
              return Array.isArray(e) ? e : ["tracert", "performance", "buc"];
            }),
            e
          );
        }
        var D = { JS: 1, REQUEST: 2, PROMISEREJECTION: 3, ASSETS: 4 },
          z = { B: "禁用", L: "低", M: "中", H: "高" },
          M = Object.freeze({
            __proto__: null,
            ErrorCodeEnums: D,
            CodeLevelEnums: z,
          }),
          j = new i["a"]();
        function F(e, t, n) {
          var r = n.log,
            a = n._warn,
            o =
              arguments.length > 3 && undefined !== arguments[3]
                ? arguments[3]
                : {};
          try {
            var s =
                (null === o || undefined === o ? undefined : o.code) || D.JS,
              l = "";
            if (e)
              if (e.stack) {
                var c = j.stackFormatter(e),
                  d = c.hash,
                  m = c.stackList;
                (l = d),
                  d &&
                    m &&
                    m.length &&
                    t(d, function (e, t) {
                      if (e) return a("hash检测失败", e);
                      t ||
                        r(
                          u(
                            u({}, o),
                            {},
                            { code: D.JS, s1: d, s2: Object(i["b"])(m), s3: 1 }
                          )
                        );
                    }),
                  r(u({ code: s, msg: e.message, s10: l }, o));
              } else r(u({ code: s, msg: e.message || e }, o));
          } catch (e) {
            a("异常上报失败:", e);
          }
        }
        function U(e, t) {
          return String(e) === String(t);
        }
        var L = {},
          G = "32767";
        function Q(e, t) {
          var n,
            i = t.destroyed,
            a = t.beforeLog,
            o = t._warn;
          if (i) o("destroyed");
          else {
            if ("function" === typeof a)
              try {
                e = a(e);
              } catch (e) {
                o("beforeLog 失败：", e);
              }
            if (!e || ("object" !== r(e) && Array.isArray(e)))
              o("beforeLog返回值不是对象，不进行上报");
            else {
              var s = [e.code, e.msg || "", e.uid].join("_"),
                l = L[s],
                c =
                  null !== (n = e.oncePerSession) && undefined !== n
                    ? n
                    : t.oncePerSession;
              if (!c || !l) {
                var u = e.bmAppid || t.bmAppid;
                if (u === t.bmAppid) {
                  if (U(e.code, G)) return e;
                  var d =
                    t.monitorOptionMap[Number(e.code)] ||
                    t.monitorOptionMap["".concat(e.code)];
                  if (!t.monitorConfigFailed && !d)
                    return void t._warn(
                      "监控平台没有该监控项的配置: ".concat(e.code)
                    );
                  if (d) {
                    var m = d.sampleRate || e.sampleRate || 1;
                    if (Math.random() > Number(m))
                      return void o(
                        "当前已设置采样率 ".concat(m, "，未被采集")
                      );
                    A(e, { sampleRate: m }),
                      d.level && A(e, { level: d.level });
                    for (
                      var p = {}, f = d.fields || [], h = 0;
                      h < f.length;
                      h++
                    )
                      p[f[h]] = true;
                    for (var g in e)
                      !p[g] && /^[dmc]\d+$/.test(g) && delete e[g];
                  }
                }
                return (L[s] = 1), e;
              }
              t._warn("当前由于 OncePerSession 策略，未被采集");
            }
          }
        }
      }.call(this, __webpack_require__("drRq")));
    },
    iKF7: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("1Vtv");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    iX1p: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("okyO");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    iczh: function (module, exports, __webpack_require__) {
      var i, r;
      (function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var i = arguments[t];
            if (i) {
              var r = typeof i;
              if ("string" === r || "number" === r) e.push(i);
              else if (Array.isArray(i) && i.length) {
                var o = a.apply(null, i);
                o && e.push(o);
              } else if ("object" === r)
                for (var s in i) n.call(i, s) && i[s] && e.push(s);
            }
          }
          return e.join(" ");
        }
        module.exports
          ? ((a.default = a), (module.exports = a))
          : ((i = []),
            (r = function () {
              return a;
            }.apply(exports, i)),
            undefined === r || (module.exports = r));
      })();
    },
    ikyr: function (module, exports, __webpack_require__) {
      var i, r, a;
      (function (n, o) {
        (r = []),
          (i = o),
          (a = "function" === typeof i ? i.apply(exports, r) : i),
          undefined === a || (module.exports = a);
      })("undefined" !== typeof self && self, function () {
        if ("object" === typeof window) {
          var e,
            t = window,
            n = { 0: "navigate", 1: "reload", 2: "back_forward" },
            i = [
              "unloadEventStart",
              "unloadEventEnd",
              "redirectStart",
              "redirectEnd",
              "fetchStart",
              "domainLookupStart",
              "domainLookupEnd",
              "connectStart",
              "connectEnd",
              "secureConnectionStart",
              "requestStart",
              "responseStart",
              "responseEnd",
              "domLoading",
              "domInteractive",
              "domContentLoadedEventStart",
              "domContentLoadedEventEnd",
              "domComplete",
              "loadEventStart",
            ];
          if (
            !t ||
            !t.performance ||
            "object" !== typeof t.performance ||
            !t.performance.timing
          )
            return e;
          if (
            "function" === typeof t.performance.getEntries &&
            "function" === typeof t.performance.getEntriesByType &&
            "function" === typeof t.performance.getEntriesByName &&
            "function" === typeof t.performance.now &&
            t.performance.timeOrigin
          )
            return t.performance;
          var r = function () {
            for (
              var e = t.performance.timing,
                r = e.navigationStart || e.redirectStart || e.fetchStart,
                a = {
                  entryType: "navigation",
                  initiatorType: "navigation",
                  name: t.location.href,
                  startTime: 0,
                  duration: e.loadEventEnd ? e.loadEventEnd - r : 0,
                  redirectCount: t.performance.navigation.redirectCount,
                  type: n[t.performance.navigation.type],
                },
                o = 0;
              o < i.length;
              o++
            ) {
              var s = i[o],
                l = e[s];
              a[s] = l ? l - r : 0;
            }
            return a;
          };
          return (
            (e = {
              _entry: r(),
              timeOrigin: t.performance.timing.navigationStart,
              getEntries: function () {
                return [this._entry];
              },
              getEntriesByType: function (e) {
                return "navigation" !== e ? [] : [this._entry];
              },
              getEntriesByName: function (e) {
                return e !== t.location.href ? [] : [this._entry];
              },
              now: function () {
                return Date.now() - t.performance.timing.navigationStart;
              },
            }),
            e
          );
        }
      });
    },
    "jL/R": function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var i =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      function r(e, t) {
        if (!t) {
          var n = "缺少必要参数：expectType";
          throw new Error(n);
        }
        return (
          Object.prototype.toString.call(e).toLowerCase() ===
          "[object " + t.toLowerCase() + "]"
        );
      }
      function a(e) {
        return Object.prototype.toString
          .call(e)
          .toLowerCase()
          .split(" ")[1]
          .slice(0, -1);
      }
      function o(e) {
        return "boolean" === typeof e;
      }
      function s(e) {
        switch ("undefined" === typeof e ? "undefined" : i(e)) {
          case "undefined":
            return true;
          case "string":
            if (0 === e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length)
              return true;
            break;
          case "boolean":
            if (!e) return true;
            break;
          case "number":
            if (0 === e || isNaN(e)) return true;
            break;
          case "object":
            if (null === e || 0 === e.length) return true;
            for (var t in e) return false;
            return true;
        }
        return false;
      }
      function l(e) {
        return "function" === typeof e;
      }
      function c(e) {
        return e.constructor === Promise;
      }
      function u(e) {
        return "function" === typeof Array.isArray
          ? Array.isArray(e)
          : "[object Array]" === Object.prototype.toString.call(e);
      }
      function d(e) {
        if (!e || "[object Object]" !== Object.prototype.toString.call(e))
          return false;
        var t = Object.prototype.hasOwnProperty.call(e, "constructor"),
          n =
            e.constructor &&
            e.constructor.prototype &&
            Object.prototype.hasOwnProperty.call(
              e.constructor.prototype,
              "isPrototypeOf"
            );
        if (e.constructor && !t && !n) return false;
        var i = undefined;
        for (i in e);
        return (
          "undefined" === typeof i || Object.prototype.hasOwnProperty.call(e, i)
        );
      }
      (exports.detectType = r),
        (exports.getType = a),
        (exports.isBoolean = o),
        (exports.isBlank = s),
        (exports.isFunction = l),
        (exports.isPromise = c),
        (exports.isArray = u),
        (exports.isPlainObject = d);
    },
    jX3d: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.modal___JUHJd{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.modal___JUHJd .container___3BrsN{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:4.145rem;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center}.modal___JUHJd .container___3BrsN .body___2I_-x{width:2.8rem;height:3.55rem;background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/f98c467b-b8b9-4652-86ef-f4fb25c4a609.svg);background-size:contain;background-repeat:no-repeat;background-position:50%}.modal___JUHJd .container___3BrsN .closeBtn___DmxM7{height:.27rem;width:.27rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Qn5DSqriNqAAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;background-color:transparent;position:relative;border:none}',
          "",
        ]),
        (exports.locals = {
          modal: "modal___JUHJd",
          container: "container___3BrsN",
          body: "body___2I_-x",
          closeBtn: "closeBtn___DmxM7",
        });
    },
    jaE2: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".title___3s78q{font-size:.2rem;font-weight:700;color:#ffd9a4;text-align:center;position:relative;top:.74rem}.subtitle___1_fuE{font-size:.12rem;font-weight:700;color:#ffd9a4;text-align:center;position:absolute;top:1.2rem;padding:0 .4rem}.desc___1uyuG{font-size:.12rem;color:#ffd9a4;text-align:center;position:relative;top:1.52rem;background:#d41731;border:1px solid #ffd2a3;padding:.16rem .08rem;margin:0 .3rem;border-radius:.08rem}",
          "",
        ]),
        (exports.locals = {
          title: "title___3s78q",
          subtitle: "subtitle___1_fuE",
          desc: "desc___1uyuG",
        });
    },
    "k6a/": function (module, exports, __webpack_require__) {
      var i = __webpack_require__("8Ogw"),
        r = ".",
        a = {};
      function o(e, t, n) {
        if (
          (i.isUndefined(t) && ((t = e), (e = a.getAlipayClientVersion())),
          (e = String(e)),
          (t = String(t)),
          e === t)
        )
          return 0;
        for (
          var o = e.split(r),
            s = t.split(r),
            l = Math[n ? "max" : "min"](o.length, s.length),
            c = 0;
          c < l;
          c++
        ) {
          if (
            ((o[c] = "undefined" === typeof o[c] ? 0 : parseInt(o[c], 10)),
            (s[c] = "undefined" === typeof s[c] ? 0 : parseInt(s[c], 10)),
            o[c] > s[c])
          )
            return 1;
          if (o[c] < s[c]) return -1;
        }
        return 0;
      }
      (a.getAlipayClientVersion = function () {
        var e = navigator.userAgent.toLowerCase(),
          t = e.match(/alipayclient\/(\d+\.\d+(.\d+)?)/i);
        return (t && t[1]) || "0";
      }),
        (a.compare = function (e, t) {
          return o(e, t, true);
        }),
        (a.eq = function (e, t) {
          return 0 === o(e, t, false);
        }),
        (a.gt = function (e, t) {
          return o(e, t, true) > 0;
        }),
        (a.gte = function (e, t) {
          return o(e, t, true) >= 0;
        }),
        (a.lt = function (e, t) {
          return o(e, t, true) < 0;
        }),
        (a.lte = function (e, t) {
          return o(e, t, true) <= 0;
        }),
        (module.exports = a);
    },
    ktv6: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("wgR5");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    lIsp: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".image-background{background-size:contain;background-position:50%;background-repeat:no-repeat}.absolute-center-x{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.am-dialog-mask{background-color:rgba(0,0,0,.8)!important}.noscroll{position:fixed;width:100%;overflow:hidden}",
          "",
        ]);
    },
    llM9: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          'html{font-size:100px}.am-switch{position:relative;display:inline-block;width:.51rem;-webkit-user-select:none}.am-switch .am-switch-checkbox{position:absolute;display:block;top:0;left:0;opacity:0;width:.51rem;height:.3rem;-webkit-appearance:none;z-index:2}.am-switch .am-switch-label{display:block;overflow:hidden;cursor:pointer}.am-switch .am-switch-inner{width:200%;margin-left:-100%}.am-switch .am-switch-inner:after,.am-switch .am-switch-inner:before{float:left;width:50%;height:.3rem;border:1px solid #108ee8;border-radius:.15rem;box-sizing:border-box}.am-switch .am-switch-inner:before{content:" ";background:#108ee8}.am-switch .am-switch-inner:after{content:" ";background:#fff;border:2px solid #e5e5e5}.am-switch .am-switch-switch{position:absolute;top:2px;left:2px;width:.26rem;height:.26rem;border-radius:100%;background:#fff;box-shadow:0 0 .02rem 0 rgba(0,0,0,.2),0 .02rem .115rem 0 rgba(0,0,0,.08),-.01rem .02rem .02rem 0 rgba(0,0,0,.1);-webkit-transform:translateX(0);-webkit-transition:all .1s ease-in 0s;box-sizing:border-box}.am-switch .am-switch-checkbox:checked+.am-switch-label .am-switch-inner{margin-left:0}.am-switch .am-switch-checkbox:checked+.am-switch-label .am-switch-switch{-webkit-transform:translateX(.21rem)}.switch-left-15{left:.15rem;margin-right:.1rem}',
          "",
        ]);
    },
    macJ: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          'html{font-size:100px}.am-dialog-mask{position:absolute;display:none;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);z-index:9998}.am-dialog-mask.show{display:block}.am-dialog{display:none;position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);z-index:9999;text-align:center;width:100%}.am-dialog.show{display:block}.am-dialog .am-dialog-wrap{overflow:hidden;padding-top:.22rem;max-width:2.7rem;margin:0 auto;border-radius:.02rem;-webkit-background-clip:padding-box;background-color:#fff;line-height:.21rem}.am-dialog .am-dialog-header{box-sizing:border-box}.am-dialog .am-dialog-header h3{font-size:.18rem;line-height:.21rem;text-align:center;color:#333;font-weight:600;padding:.04rem .16rem .08rem}.am-dialog .am-dialog-header.am-dialog-single-header h3{font-size:.15rem;color:#333}.am-dialog .am-dialog-close{position:absolute;display:block;right:0;top:0;height:.48rem;width:.48rem;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAANlBMVEVMaXGIiIiJiYmJiYn///+IiIiIiIiRkZGJiYmJiYmIiIiZmZmIiIiIiIiLi4uJiYmIiIiIiIif033nAAAAEXRSTlMA3vWjAZv1FdRBcAq0vhZmK7msGmgAAABnSURBVHhe7dEpFoAwEATRTliysIS5/2VReS16xiEp+2XhuQqC2nngshp4262j1Omq2wq6q3Rf6arionRVdaq4qjpVneo71fOUqerJbAkVLRv/eBcW/nEvfPD3/4szPHhXGzj6VPWBF66vCbNK4YfYAAAAAElFTkSuQmCC") 50% no-repeat;background-size:.16rem .16rem}.am-dialog .am-dialog-close.hover,.am-dialog .am-dialog-close:active{background-color:rgba(51,51,51,.05)}.am-dialog .am-dialog-close.white{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAr0lEQVR4AWL4//+/KBBfAdHuBT4MNMQguxyBeC4QMwJqqQMMCGIgiKKz58119ziDNdRSAF4ZhOiEp+FfQe+38aB3zsnGgCuajfMguKPPPB8Ed7RgwR1t2HFAG3Yc0IYdB7RhxwFt2HFAG2Zc0IYJV7RhxQltWHFCA09x4MisRfoqvqCfpXBzBhWf0AWfUcV3FPEdRXxHEd9RxHcU8R1FfEcRv4I5avj5D46igJ/n/gMWXkng+GnfxwAAAABJRU5ErkJggg==") 50% no-repeat;background-size:.16rem .16rem}.am-dialog .am-dialog-img{position:relative;margin:0 auto}.am-dialog .am-dialog-img.fill{margin-top:-.22rem}.am-dialog .am-dialog-img img{display:block;margin:0 auto}.am-dialog .am-dialog-header+.am-dialog-img{padding:.15rem 0 0}.am-dialog .am-dialog-header+.am-dialog-img:before{content:" ";position:absolute;width:200%;height:200%;top:0;left:0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;pointer-events:none;border-top:1px solid #e5e5e5}.am-dialog .am-dialog-button,.am-dialog.image .am-dialog-wrap{position:relative}.am-dialog .am-dialog-body{box-sizing:border-box;padding:0 .16rem;line-height:.2rem}.am-dialog .am-dialog-body:first-child .am-dialog-brief,.am-dialog .am-dialog-img+.am-dialog-body .am-dialog-brief{padding:.04rem .06rem 0;color:#333;font-size:.15rem}.am-dialog .am-dialog-brief{padding:0 .06rem;display:block;font-size:.14rem;text-align:center;color:#333}.am-dialog .am-dialog-sline-content{min-height:.42rem;line-height:.42rem}.am-dialog .am-dialog-footer{margin-top:.16rem;display:-webkit-flex;display:flex}.am-dialog .am-dialog-header+.am-dialog-footer{margin-top:.06rem}.am-dialog .am-dialog,.am-dialog .am-dialog-button{-webkit-box-flex:1;-webkit-flex:1;display:block;width:100%;height:.5rem;line-height:.25rem;padding:.12rem 0 .13rem;font-size:.18rem;background:0 0;border:0;outline:0;-webkit-appearance:none;color:#999;text-align:center;box-sizing:border-box;border-radius:0}.am-dialog .am-dialog-button:first-child,.am-dialog .am-dialog:first-child{border-left:0;border-bottom-left-radius:.02rem}.am-dialog .am-dialog-button:first-child:before,.am-dialog .am-dialog:first-child:before{display:none}.am-dialog .am-dialog-button:last-child,.am-dialog .am-dialog:last-child{border-bottom-right-radius:.02rem;color:#108ee9}.am-dialog .am-dialog-button:disabled,.am-dialog .am-dialog:disabled{color:#c2c2c2}.am-dialog .am-dialog-button.hover,.am-dialog .am-dialog-button:active,.am-dialog .am-dialog.hover,.am-dialog .am-dialog:active{background-color:rgba(51,51,51,.05)}.am-dialog .selection{display:block}.am-dialog .selection .am-dialog-button{display:block;border-left:0;color:#108ee9}.am-dialog .selection .am-dialog-button:first-child{border-radius:0}.am-dialog .selection .am-dialog-button:first-child:before{display:none}.am-dialog .selection .am-dialog-button:last-child{border-bottom-left-radius:.07rem}.am-dialog input.am-password-former,.am-dialog input.am-text-former{box-sizing:border-box;display:block;width:100%;height:.36rem;overflow:hidden;border:1px solid #ddd;border-radius:.02rem;-webkit-background-clip:padding-box;margin-top:.14rem;padding:0 .1rem;box-shadow:0 1px 0 hsla(0,0%,100%,.4);font-size:.14rem}.am-dialog ::-webkit-input-placeholder{line-height:.18rem}.am-dialog.simage .am-dialog-img,.am-dialog.simage .am-dialog-img img{width:.65rem;height:.65rem}.am-dialog.simage .am-dialog-brief{color:#333;font-size:.14rem;line-height:.16rem}.am-dialog.image .am-dialog-outlink{display:block;font-size:.15rem;line-height:.16rem;text-align:center;padding:.06rem .12rem 0}.am-dialog.image .am-dialog-img+.am-dialog-header h3,.am-dialog.simage .am-dialog-img+.am-dialog-header h3{padding:.22rem 0 .08rem}.am-dialog .am-dialog-button:before{content:" ";display:block;position:absolute;left:0;top:0;width:1px;height:100%;background:linear-gradient(270deg,#ddd,#ddd 33%,transparent 0) 100% 100% no-repeat}.am-dialog .am-dialog-footer,.am-dialog .selection .am-dialog-button{position:relative}.am-dialog .am-dialog-footer:before,.am-dialog .selection .am-dialog-button:before{content:" ";display:block;position:absolute;left:0;top:0;width:100%;height:1px;background:linear-gradient(180deg,#ddd,#ddd 33%,transparent 0) 0 0 no-repeat}',
          "",
        ]);
    },
    mecv: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("TjNA");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    n2CM: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.writing___2abli{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;overflow-x:hidden;position:relative;z-index:2}.writing___2abli .blessing___19KcJ{height:3.79rem;width:3.43rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*bH1GRa3HBxsAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;z-index:2;position:relative;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;top:-.1rem}.writing___2abli .blessing___19KcJ .fontBg___17LCs{background-repeat:no-repeat;background-position:50%;background-size:contain;width:3.12rem;height:3.12rem;position:absolute;top:.12rem;left:.105rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT{height:.38rem;width:3.12rem;z-index:2;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center;position:absolute;bottom:.1rem;left:.105rem;font-size:.17rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#a44a1d;font-size:.17rem;padding-right:.2rem;padding-left:.1rem;white-space:nowrap}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu .am-switch{width:.4rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu .am-switch .am-switch-checkbox{width:.4rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu .am-switch .am-switch-switch{width:.16rem;height:.16rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu .am-switch .am-switch-inner:before{background-color:#e9753b;border:1px solid #e9753b;height:.2rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu .am-switch .am-switch-inner:after{border:1px solid #f49d57;background:#f49d57;height:.2rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .freemode___3_pcu span{margin-left:.05rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .clearBtn___1DNyh{color:#a44a1d;font-size:.17rem;-webkit-flex:1 1;flex:1 1;height:.38rem;line-height:.38rem;border:none;background:none!important;padding:0 .2rem;white-space:nowrap}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .clearBtn___1DNyh svg{position:relative;top:.03rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .undoBtn___2l54C{color:#a44a1d;font-size:.17rem;-webkit-flex:1 1;flex:1 1;height:.38rem;line-height:.38rem;border:none;background:none!important;padding:0 .2rem;white-space:nowrap}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .undoBtn___2l54C svg{position:relative;top:.03rem}.writing___2abli .blessing___19KcJ .buttonGroup___2s1XT .divider___uj4Ko{width:.01rem;height:.2rem;background-color:#a44a1d}.writing___2abli .btn___3PZaq{height:.445rem;width:1.7rem;margin-top:.08rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*LAU4R6IlW5UAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;z-index:2;color:#e44d25;font-size:.19rem;font-weight:700;line-height:.445rem;text-align:center}.writing___2abli .btn___3PZaq.disabled___rwL08{opacity:.5}',
          "",
        ]),
        (exports.locals = {
          writing: "writing___2abli",
          blessing: "blessing___19KcJ",
          fontBg: "fontBg___17LCs",
          buttonGroup: "buttonGroup___2s1XT",
          freemode: "freemode___3_pcu",
          clearBtn: "clearBtn___1DNyh",
          undoBtn: "undoBtn___2l54C",
          divider: "divider___uj4Ko",
          btn: "btn___3PZaq",
          disabled: "disabled___rwL08",
        });
    },
    oExZ: function (module, exports, __webpack_require__) {
      var i;
      (function (e) {
        function t() {}
        function n(e) {
          var t = false,
            n = e.Promise;
          if (n) {
            var i = null,
              r = null;
            try {
              (i = n.resolve()), (r = i.then);
            } catch (e) {}
            i instanceof n && "function" === typeof r && !n.cast && (t = true);
          }
          return t;
        }
        n(e) || t();
      })(self),
        (function (r) {
          "use strict";
          var a,
            o = "AlipayJSBridge",
            s = r[o],
            l = navigator.userAgent || navigator.swuserAgent,
            c = "apm-h5",
            u = r.window,
            d = r.document,
            m = r.console,
            p = r.parseInt,
            f = [],
            h = {
              getBAPSI: {
                isListening: false,
                lastState: 2,
                on: function () {
                  h.getBAPSI.isListening ||
                    (s.call("startMonitorBackgroundAudio"),
                    (h.getBAPSI.isListening = true),
                    b.on(
                      "getBackgroundAudioPlayedStateInfo",
                      h.getBAPSI.listener
                    ));
                },
                off: function () {
                  b.off(
                    "getBackgroundAudioPlayedStateInfo",
                    h.getBAPSI.listener
                  ),
                    s.call("stopMonitorBackgroundAudio"),
                    (h.getBAPSI.isListening = false);
                },
                listener: function (e) {
                  var t = e.data || {},
                    n = t.status,
                    i = [
                      "backgroundAudioPause",
                      "backgroundAudioPlay",
                      "backgroundAudioStop",
                    ][n];
                  i &&
                    n !== h.getBAPSI.lastState &&
                    (b.trigger(i), (h.getBAPSI.lastState = n));
                },
              },
            },
            g = {
              fetchCDP: { m: "getCdpSpaceInfo" },
              feedbackCDP: { m: "cdpFeedback" },
              snapshot: {},
              saveBizServiceResult: {},
              setStorage: {
                m: "setAPDataStorage",
                b: function (e) {
                  var t = A();
                  return (
                    U(e, { data: "value", bizType: "business" }),
                    (e.value = Z({ APDataStorage: e.value })),
                    (e.key = Z(e.key)),
                    (e.type = ae(e.type) ? "user" : e.type),
                    ae(e.business) && t && (e.business = t),
                    e
                  );
                },
              },
              getStorage: {
                m: "getAPDataStorage",
                b: function (e) {
                  var t = A();
                  return (
                    U(e, { _: "key", bizType: "business" }),
                    (e.key = Z(e.key)),
                    (e.type = ae(e.type) ? "user" : e.type),
                    ae(e.business) && t && (e.business = t),
                    e
                  );
                },
                a: function (e) {
                  if (
                    (11 === e.error &&
                      ((e.data = null),
                      delete e.error,
                      delete e.errorMessage,
                      delete e.success),
                    K(e, "data"))
                  ) {
                    var t = ee(e.data);
                    e.data = ue(t) ? t.APDataStorage : t;
                  }
                  return e;
                },
              },
              removeStorage: {
                m: "removeAPDataStorage",
                b: function (e) {
                  var t = A();
                  return (
                    U(e, { _: "key", bizType: "business" }),
                    (e.key = Z(e.key)),
                    (e.type = ae(e.type) ? "user" : e.type),
                    ae(e.business) && t && (e.business = t),
                    e
                  );
                },
              },
              clearStorage: {
                m: "clearAPDataStorage",
                b: function (e) {
                  var t = A();
                  return (
                    U(e, { bizType: "business" }),
                    (e.type = ae(e.type) ? "user" : e.type),
                    ae(e.business) && t && (e.business = t),
                    e
                  );
                },
              },
              httpRequest: {
                b: function (e) {
                  var t = "GET";
                  if (
                    ((e.method = ne(e.method) || t),
                    (e.dataType = te(e.dataType) || "json"),
                    U(e, { _: "url", dataType: "responseType" }),
                    ue(e.data) && (e.data = V(e.data)),
                    e.method === t && ce(e.data) && (e.url = q(e.url, e.data)),
                    (e.responseType =
                      "base64" !== te(e.responseType) ? "text" : "base64"),
                    (e.headers = e.headers || {}),
                    ie())
                  ) {
                    var n = [],
                      i = undefined;
                    for (var r in e.headers)
                      K(e.headers, r) &&
                        ((i = {}), (i[r] = e.headers[r]), n.push(i));
                    e.headers = n;
                  }
                  return e;
                },
                a: function (e, t, n) {
                  if (
                    ((n.dataType = te(n.dataType) || "json"),
                    "json" === n.dataType && e.data && (e.data = ee(e.data)),
                    "base64" === n.dataType &&
                      e.data &&
                      e.headers &&
                      (e.data = J(e.data, e.headers["Content-Type"])),
                    !ae(e.status))
                  ) {
                    var i = e.status + "";
                    /^[45]/.test(i) &&
                      ((e.error = 19), (e.errorMessage = "http status error"));
                  }
                  return e;
                },
              },
              startApp: {
                b: function (e) {
                  return U(e, { _: "appId", params: "param" });
                },
              },
              setClipboard: {
                b: function (e) {
                  return U(e, { _: "content", content: "text" });
                },
              },
              getClipboard: {
                a: function (e) {
                  return U(e, { text: "content" }), delete e.text, e;
                },
              },
              getUserInfo: {
                a: function (e) {
                  return U(e, { iconUrl: "avatar" });
                },
              },
              getConfig: {
                b: function (e) {
                  return (
                    U(e, { _: "configKeys", keys: "configKeys" }),
                    ce(e.configKeys) && (e.configKeys = [e.configKeys]),
                    $(e.configKeys, function (t, n) {
                      "mgw" === n && (e.configKeys[t] = "rpcUrl");
                    }),
                    e
                  );
                },
                a: function (e) {
                  return (
                    e.data &&
                      (K(e.data, "rpcUrl") &&
                        ((e.data.mgw = e.data.rpcUrl), delete e.data.rpcUrl),
                      $(e.data, function (t, n) {
                        e[t] = n;
                      }),
                      delete e.data),
                    e
                  );
                },
              },
              remoteLog: {},
              isSupportShortCut: {
                a: function (e) {
                  return U(e, { result: "isSupport" });
                },
              },
              setShortCut: {
                b: function (e) {
                  return U(e, { title: "appName", icon: "iconBitmap" });
                },
              },
              removeShortCut: {
                b: function (e) {
                  return U(e, { title: "appName", icon: "iconBitmap" });
                },
              },
              exitApp: {},
              login: {},
              sendSMS: {
                a: function (e) {
                  if (e.status) {
                    switch (e.status) {
                      case "Success":
                        e = {};
                        break;
                      case "Failed":
                        (e.error = 21), (e.errorMessage = "发送失败");
                        break;
                      case "Canceled":
                        (e.error = 22), (e.errorMessage = "用户取消发送");
                        break;
                      default:
                    }
                    delete e.status;
                  }
                  return e;
                },
              },
              getAllContacts: {
                a: function (e) {
                  var t = [];
                  return (
                    e &&
                      !K(e, "error") &&
                      ($(e, function (e, n) {
                        t.push({ mobile: e, name: n });
                      }),
                      (e = { contacts: t })),
                    e
                  );
                },
              },
              setScreenBrightness: {
                b: function (e) {
                  return U(e, { _: "brightness" });
                },
              },
              getScreenBrightness: {},
              isInstalledApp: {
                b: function (e) {
                  return U(e, { packageName: "packagename" });
                },
                a: function (e) {
                  return U(e, { installed: "isInstalled" });
                },
              },
              preRender: {
                b: function (e) {
                  return (
                    U(e, { _: "url" }),
                    ue(e.windowParams) || (e.windowParams = {}),
                    e.url &&
                      ae(e.windowParams.url) &&
                      (e.windowParams.url = e.url),
                    delete e.url,
                    e.params &&
                      ae(e.windowParams.param) &&
                      (e.windowParams.param = e.params),
                    delete e.params,
                    e.windowParams.url.indexOf("?") > -1 &&
                      m.warn("try opt.data instead of querystring"),
                    e.windowParams.url.indexOf("__webview_options__") > -1 &&
                      m.warn("try opt.params instead of __webview_options__"),
                    ue(e.data) &&
                      ((e.windowParams.url = q(e.windowParams.url, e.data)),
                      delete e.data),
                    e
                  );
                },
              },
              clearRender: {
                b: function (e) {
                  return (
                    ue(e.range) || (e.range = {}),
                    e.start &&
                      ae(e.range.location) &&
                      (e.range.location = e.start),
                    delete e.start,
                    e.length &&
                      ae(e.range.length) &&
                      (e.range.length = e.length),
                    delete e.length,
                    e
                  );
                },
              },
              finishRender: {},
              rpc: {
                b: function (e) {
                  return (
                    U(e, { _: "operationType" }),
                    e.requestData &&
                      !me(e.requestData) &&
                      ue(e.requestData) &&
                      !K(e, "type") &&
                      (e.requestData = [e.requestData]),
                    e
                  );
                },
                e: { handleResultSuccess: false },
              },
              openBluetoothAdapter: {},
              closeBluetoothAdapter: {},
              getBluetoothAdapterState: {},
              startBluetoothDevicesDiscovery: {
                b: function (e) {
                  return ce(e._) && (e._ = [e._]), U(e, { _: "services" }), e;
                },
              },
              stopBluetoothDevicesDiscovery: {},
              getBluetoothDevices: {
                b: function (e) {
                  return ce(e._) && (e._ = [e._]), U(e, { _: "services" }), e;
                },
                a: function (e) {
                  return (
                    me(e.devices) &&
                      $(e.devices, function (e, t) {
                        U(t, { manufacturerData: "advertisData" });
                      }),
                    e
                  );
                },
              },
              getConnectedBluetoothDevices: {
                a: function (e) {
                  return (
                    me(e.devices) &&
                      $(e.devices, function (e, t) {
                        U(t, { manufacturerData: "advertisData" });
                      }),
                    e
                  );
                },
              },
              connectBLEDevice: {
                b: function (e) {
                  return U(e, { _: "deviceId" }), e;
                },
              },
              disconnectBLEDevice: {},
              writeBLECharacteristicValue: {},
              readBLECharacteristicValue: {},
              notifyBLECharacteristicValueChange: {},
              getBLEDeviceServices: {
                b: function (e) {
                  return U(e, { _: "deviceId" }), e;
                },
              },
              getBLEDeviceCharacteristics: {},
              onBLECharacteristicValueChange: {
                m: "BLECharacteristicValueChange",
              },
              offBLECharacteristicValueChange: {
                m: "BLECharacteristicValueChange",
              },
              onBluetoothAdapterStateChange: {},
              offBluetoothAdapterStateChange: {},
              onBLEConnectionStateChanged: { m: "BLEConnectionStateChanged" },
              offBLEConnectionStateChanged: { m: "BLEConnectionStateChanged" },
              onBluetoothDeviceFound: {
                a: function (e) {
                  return U(e, { manufacturerData: "advertisData" });
                },
              },
              offBluetoothDeviceFound: {},
              pushBizWindow: {},
              compressImage: {
                b: function (e) {
                  return (
                    (e.level = ae(e.level) ? 4 : e.level),
                    U(e, { _: "apFilePaths", level: "compressLevel%d" })
                  );
                },
                d: function (e, t) {
                  ie()
                    ? s.call("compressImage", e, t)
                    : _(t, { apFilePaths: e.apFilePaths || [] });
                },
              },
              getLaunchParams: {
                d: function (e, t) {
                  (b.launchParams =
                    u.ALIPAYH5STARTUPPARAMS || s.startupParams || {}),
                    le(t) && t(b.launchParams);
                },
              },
              onTabClick: {},
              offTabClick: {},
              onShare: { m: "onShare" },
              offShare: { m: "onShare" },
              connectSocket: {
                b: function (e) {
                  return U(e, { headers: "header" });
                },
              },
              sendSocketMessage: {
                b: function (e) {
                  return U(e, { _: "data" });
                },
              },
              closeSocket: {},
              onSocketOpen: {},
              offSocketOpen: {},
              onSocketMessage: {},
              offSocketMessage: {},
              onSocketError: {},
              offSocketError: {},
              onSocketClose: {},
              offSocketClose: {},
              alert: {
                b: function (e) {
                  return (
                    (e = U(e, {
                      _: "content",
                      content: "message%s",
                      buttonText: "button%s",
                    })),
                    ae(e.title) || (e.title = F("%s", e.title)),
                    e
                  );
                },
              },
              confirm: {
                b: function (e) {
                  return (
                    (e = U(e, {
                      _: "content%s",
                      content: "message%s",
                      confirmButtonText: "okButton%s",
                      cancelButtonText: "cancelButton%s",
                    })),
                    ae(e.title) || (e.title = F("%s", e.title)),
                    e
                  );
                },
                a: function (e) {
                  return U(e, { ok: "confirm" });
                },
              },
              showToast: {
                m: "toast",
                b: function (e) {
                  return (
                    U(e, { _: "content%s" }),
                    ce(e.content) || (e.content = F("%s", e.content)),
                    e
                  );
                },
              },
              hideToast: {},
              showLoading: {
                b: function (e) {
                  return U(e, { _: "content", content: "text%s" });
                },
              },
              hideLoading: {},
              showNavigationBarLoading: { m: "showTitleLoading" },
              hideNavigationBarLoading: { m: "hideTitleLoading" },
              setNavigationBar: {
                b: function (e) {
                  var t = "setTitle",
                    n = "setTitleColor",
                    i = "setBarBottomLineColor",
                    r = {};
                  return (
                    (r[t] = {}),
                    (r[n] = {}),
                    (r[i] = {}),
                    (r[t] = U(
                      r[t],
                      { _: "title", title: "title%s", image: "image%b" },
                      e
                    )),
                    (r[n] = U(
                      r[n],
                      { backgroundColor: "color%c", reset: "reset" },
                      e
                    )),
                    (r[i] = U(r[i], { borderBottomColor: "color%c" }, e)),
                    r
                  );
                },
                d: function (e, t) {
                  var n = "setTitle",
                    i = "setTitleColor",
                    r = "setBarBottomLineColor",
                    a = {};
                  ge(e[n]) || s.call(n, e[n]),
                    ge(e[r]) ||
                      (s.call(r, e[r]),
                      oe(e[r].color) &&
                        ((a.error = 2), (a.errorMessage = "颜色值不合法"))),
                    ge(e[i])
                      ? _(t, a)
                      : s.call(i, e[i], function (e) {
                          (a = ve(e, a)), t(a);
                        });
                },
              },
              showTabBar: {
                b: function (e) {
                  if (
                    ((e.action = "create"),
                    (e.activeIndex = e.activeIndex || 0),
                    U(e, {
                      color: "textColor%c",
                      activeColor: "selectedColor%c",
                      activeIndex: "selectedIndex%d",
                    }),
                    me(e.items))
                  ) {
                    var t = e.items;
                    (e.items = []),
                      t.forEach(function (t, n) {
                        (t = U(
                          ve({}, t),
                          {
                            title: "name%s",
                            tag: "tag%s",
                            icon: "icon%b",
                            activeIcon: "activeIcon%b",
                            badge: "redDot%s",
                          },
                          { tag: n, badge: ae(t.badge) ? "-1" : t.badge }
                        )),
                          (t.icon = F("%b", t.icon)),
                          (t.activeIcon = F("%b", t.activeIcon)),
                          e.items.push(t);
                      });
                  }
                  return e;
                },
                d: function (e, t, n) {
                  var i = "showTabBar";
                  ae(h.showTabBar)
                    ? (h.showTabBar = { opt: n })
                    : m.error(i + " must be called at most once"),
                    b.on("tabClick", function (e) {
                      var n = {};
                      U(
                        n,
                        { tag: "index%d" },
                        { tag: ue(e.data) && e.data.tag ? e.data.tag : "0" }
                      ),
                        t(n);
                    }),
                    s.call("tabBar", e, function (e) {
                      D(i, e);
                    });
                },
              },
              setTabBarBadge: {
                m: "tabBar",
                b: function (e) {
                  return (
                    (e.action = "redDot"),
                    U(
                      e,
                      { index: "tag%s", badge: "redDot%s" },
                      { index: e.index }
                    ),
                    e
                  );
                },
              },
              showActionSheet: {
                m: "actionSheet",
                b: function (e) {
                  if (
                    (U(e, { items: "btns", cancelButtonText: "cancelBtn%s" }),
                    me(e.btns))
                  ) {
                    var t = e.btns;
                    (e.btns = []),
                      t.forEach(function (t) {
                        return e.btns.push(t + "");
                      });
                  }
                  return ae(e.cancelBtn) && (e.cancelBtn = "取消"), e;
                },
                a: function (e, t) {
                  return (
                    me(t.btns) && e.index === t.btns.length && (e.index = -1), e
                  );
                },
              },
              redirectTo: {
                b: function (e) {
                  return (
                    U(e, { _: "url" }),
                    ue(e.data) && (e.url = q(e.url, e.data)),
                    e
                  );
                },
                d: function (e) {
                  e.url && u.location.replace(e.url);
                },
              },
              pushWindow: {
                b: function (e) {
                  return (
                    U(e, { _: "url", params: "param" }),
                    e.url.indexOf("?") > -1 &&
                      m.warn("try opt.data instead of querystring"),
                    e.url.indexOf("__webview_options__") > -1 &&
                      m.warn("try opt.params instead of __webview_options__"),
                    ue(e.data) && ((e.url = q(e.url, e.data)), delete e.data),
                    e
                  );
                },
              },
              popWindow: {
                b: function (e) {
                  return (
                    (e = w(e)),
                    ue(e.data) || (e.data = { ___forResume___: e.data }),
                    e
                  );
                },
              },
              popTo: {
                b: function (e) {
                  return (
                    U(e, {
                      _: (function () {
                        var t = undefined;
                        return (
                          de(e._) && (t = "index"),
                          ce(e._) && (t = "urlPattern"),
                          t
                        );
                      })(),
                    }),
                    ue(e.data) || (e.data = { ___forResume___: e.data }),
                    e
                  );
                },
              },
              allowPullDownRefresh: {
                d: function (e) {
                  var t = "onPullDownRefresh";
                  U(e, { _: "allow" }),
                    (e.allow = !!ae(e.allow) || !!e.allow),
                    ue(h[t])
                      ? (h[t].allow = e.allow)
                      : ((h[t] = { allow: e.allow }), b.onPullDownRefresh()),
                    h[t].allow
                      ? s.call("restorePullToRefresh")
                      : h[t].event && h[t].event.preventDefault();
                },
              },
              choosePhoneContact: { m: "contact" },
              chooseAlipayContact: {
                m: "chooseContact",
                b: function (e) {
                  var t = "multi",
                    n = "single";
                  return (
                    U(e, { _: "count" }),
                    ae(e.count) && (e.count = 1),
                    1 === e.count
                      ? (e.type = n)
                      : ((e.type = t),
                        e.count <= 0 || e.count > 10
                          ? (e.multiMax = 10)
                          : (e.multiMax = e.count)),
                    delete e.count,
                    e
                  );
                },
                a: function (e) {
                  return (
                    me(e.contacts) &&
                      e.contacts.forEach(function (e) {
                        U(e, { headImageUrl: "avatar", name: "realName" }),
                          delete e.from;
                      }),
                    e
                  );
                },
              },
              share: {
                b: function (e) {
                  var t = {},
                    n = {};
                  return (
                    (t.onlySelectChannel = [
                      "ALPContact",
                      "ALPTimeLine",
                      "ALPCommunity",
                      "Weibo",
                      "DingTalkSession",
                      "SMS",
                      "Weixin",
                      "WeixinTimeLine",
                      "QQ",
                      "QQZone",
                    ]),
                    K(e, "bizType") && (t.bizType = e.bizType),
                    (n = ve({}, e)),
                    delete n.bizType,
                    delete n.onlySelectChannel,
                    U(n, { image: "imageUrl" }),
                    (h.share = { startShare: t, shareToChannel: n }),
                    e
                  );
                },
                d: function (e, t) {
                  false === e.showToolBar &&
                    s.call("setToolbarMenu", { menus: [], override: true }),
                    s.call("startShare", h.share.startShare, function (e) {
                      var n = h.share.shareToChannel;
                      e.channelName
                        ? s.call(
                            "shareToChannel",
                            { name: e.channelName, param: n },
                            t
                          )
                        : t(e);
                    });
                },
              },
              datePicker: {
                b: function (e) {
                  switch (
                    (U(e, {
                      _: "formate",
                      formate: "mode",
                      currentDate: "beginDate",
                      startDate: "minDate",
                      endDate: "maxDate",
                    }),
                    e.mode)
                  ) {
                    case "HH:mm:ss":
                      e.mode = 0;
                      break;
                    case "yyyy-MM-dd":
                      e.mode = 1;
                      break;
                    case "yyyy-MM-dd HH:mm:ss":
                      e.mode = 2;
                      break;
                    default:
                      e.mode = 1;
                  }
                  return e;
                },
                a: function (e) {
                  return (
                    ce(e.date) && (e.date = e.date.replace(/\//g, "-").trim()),
                    e
                  );
                },
              },
              chooseCity: {
                m: "getCities",
                b: function (e) {
                  var t, n;
                  function i(e) {
                    var t;
                    return (
                      me(e) &&
                        ((t = []),
                        e.forEach(function (e) {
                          t.push(
                            U(
                              {},
                              {
                                city: "name",
                                adCode: "adcode%s",
                                spell: "pinyin",
                              },
                              e
                            )
                          );
                        }),
                        (e = t)),
                      e
                    );
                  }
                  return (
                    U(e, {
                      showHotCities: "needHotCity",
                      cities: "customCities",
                      hotCities: "customHotCities",
                    }),
                    true === e.showLocatedCity
                      ? ((e.currentCity = ""), (e.adcode = ""))
                      : (delete e.currentCity, delete e.adcode),
                    delete e.showLocatedCity,
                    (t = e.customCities),
                    ae(e.customCities) || (e.customCities = i(t)),
                    (n = e.customHotCities),
                    ae(e.customHotCities) || (e.customHotCities = i(n)),
                    e
                  );
                },
                a: function (e) {
                  return U(e, { adcode: "adCode" }), e;
                },
              },
              onBack: {
                a: function (e) {
                  var t = {},
                    n = "onBack";
                  return (
                    ue(h[n])
                      ? (h[n].event = e)
                      : (h[n] = { event: e, allowButton: true }),
                    false === h[n].allowButton && e.preventDefault(),
                    (t.backAvailable = h[n].allowButton),
                    t
                  );
                },
                e: { handleEventData: false },
              },
              offBack: {},
              onResume: {
                a: function (e) {
                  var t = {};
                  return (
                    ae(e.data) || (t.data = e.data),
                    K(e.data, "___forResume___") &&
                      (t.data = e.data.___forResume___),
                    t
                  );
                },
                e: { handleEventData: false },
              },
              offResume: {},
              onPause: {},
              offPause: {},
              onPageResume: {
                a: function (e) {
                  var t = {};
                  return (
                    ae(e.data) || (t.data = e.data),
                    K(e.data, "___forResume___") &&
                      (t.data = e.data.___forResume___),
                    t
                  );
                },
                e: { handleEventData: false },
              },
              offPageResume: {},
              onPagePause: {},
              offPagePause: {},
              onTitleClick: {},
              offTitleClick: {},
              onPullDownRefresh: {
                m: "firePullToRefresh",
                a: function (e) {
                  var t = {},
                    n = "onPullDownRefresh";
                  return (
                    ue(h[n])
                      ? (h[n].event = e)
                      : (h[n] = { event: e, allow: true }),
                    false === h[n].allow && h[n].event.preventDefault(),
                    (t.refreshAvailable = h[n].allow),
                    t
                  );
                },
                e: { handleEventData: false },
              },
              offPullDownRefresh: { m: "firePullToRefresh" },
              onNetworkChange: {
                d: function (e, t, n, i) {
                  var r = function () {
                    return b.getNetworkType(t);
                  };
                  x("h5NetworkChange", i, r), b.on("h5NetworkChange", r);
                },
              },
              offNetworkChange: {
                d: function (e, t, n, i) {
                  E("h5NetworkChange", i);
                },
              },
              onAccelerometerChange: {
                b: function () {
                  s.call("watchShake", { monitorAccelerometer: true });
                },
                a: function (e) {
                  var t = {};
                  return (
                    U(t, { x: "x", y: "y", z: "z" }, ue(e.data) ? e.data : e), t
                  );
                },
                e: { handleEventData: false },
              },
              offAccelerometerChange: {
                b: function () {
                  s.call("watchShake", { monitorAccelerometer: false });
                },
              },
              onCompassChange: {
                b: function () {
                  s.call("watchShake", { monitorCompass: true });
                },
                a: function (e) {
                  var t = {};
                  return (
                    U(t, { direction: "direction" }, ue(e.data) ? e.data : e), t
                  );
                },
                e: { handleEventData: false },
              },
              offCompassChange: {
                b: function () {
                  s.call("watchShake", { monitorCompass: false });
                },
              },
              onBackgroundAudioPlay: {
                b: function (e) {
                  return h.getBAPSI.on(), e;
                },
              },
              offBackgroundAudioPlay: {},
              onBackgroundAudioPause: {
                b: function (e) {
                  return h.getBAPSI.on(), e;
                },
              },
              offBackgroundAudioPause: {},
              onBackgroundAudioStop: {
                b: function (e) {
                  return h.getBAPSI.on(), e;
                },
              },
              offBackgroundAudioStop: {},
              onAppResume: {},
              offAppResume: {},
              onAppPause: {},
              offAppPause: {},
              getNetworkType: {
                a: function (e) {
                  return (
                    ae(e.networkInfo) || (e.networkType = ne(e.networkInfo)),
                    delete e.err_msg,
                    delete e.networkInfo,
                    e
                  );
                },
              },
              scan: {
                b: function (e) {
                  return U(e, { _: "type" }), (e.type = e.type || "qr"), e;
                },
                a: function (e) {
                  return (
                    (e.qrCode || e.barCode) &&
                      ((e.code = e.qrCode || e.barCode),
                      delete e.qrCode,
                      delete e.barCode),
                    e
                  );
                },
              },
              watchShake: {
                b: function (e) {
                  return ge(e) && (e = null), e;
                },
              },
              getLocation: {
                b: function (e) {
                  return (
                    U(e, {
                      accuracy: "horizontalAccuracy",
                      type: "requestType%d",
                    }),
                    ae(e.requestType) && (e.requestType = 2),
                    ie() &&
                      (ae(e.isHighAccuracy) && (e.isHighAccuracy = true),
                      ae(e.isNeedSpeed) && (e.isNeedSpeed = true)),
                    e
                  );
                },
                a: function (e) {
                  return (
                    U(e, { citycode: "cityCode", adcode: "adCode" }),
                    ae(e.city) && e.province && (e.city = e.province),
                    e.latitude && (e.latitude = F("%s", e.latitude)),
                    e.longitude && (e.longitude = F("%s", e.longitude)),
                    e.accuracy && (e.accuracy = F("%f", e.accuracy)),
                    e.speed && (e.speed = F("%f", e.speed)),
                    e
                  );
                },
              },
              getSystemInfo: {
                a: function (e) {
                  var t = "pixelRatio",
                    n = "windowWidth",
                    i = "windowHeight",
                    r = "language";
                  if (!K(e, "error")) {
                    (e[t] = F("%f", e[t])),
                      (e[n] = F("%d", e[n])),
                      (e[r] = (e[r] || "").replace(
                        /\s?\w+\/((?:\w|-)+)$/,
                        "$1"
                      )),
                      (e[i] = F("%d", e[i]));
                    try {
                      re() &&
                        b.compareVersion("10.0.12") < 0 &&
                        (e[i] = u.screen.height - 64);
                    } catch (e) {}
                  }
                  return e;
                },
              },
              vibrate: {},
              getServerTime: {},
              previewImage: {
                m: "imageViewer",
                b: function (e) {
                  return (
                    U(e, { _: "urls", current: "init%d" }),
                    ae(e.init) && (e.init = 0),
                    (e.images = []),
                    (e.urls || []).forEach(function (t) {
                      e.images.push({ u: t });
                    }),
                    delete e.urls,
                    e
                  );
                },
              },
              chooseImage: {
                b: function (e) {
                  return (
                    U(e, { _: "count%d" }),
                    ae(e.count) && (e.count = 1),
                    ce(e.sourceType) && (e.sourceType = [e.sourceType]),
                    e
                  );
                },
                a: function (e) {
                  return (
                    U(e, {
                      errorCode: "error",
                      errorDesc: "errorMessage",
                      localIds: "apFilePaths",
                      tempFilePaths: "apFilePaths",
                    }),
                    delete e.scene,
                    delete e.localIds,
                    delete e.tempFilePaths,
                    ce(e.apFilePaths) && (e.apFilePaths = ee(e.apFilePaths)),
                    e
                  );
                },
              },
              chooseVideo: {
                b: function (e) {
                  return (
                    U(e, { _: "maxDuration%d" }),
                    ce(e.sourceType) && (e.sourceType = [e.sourceType]),
                    ce(e.camera) && (e.camera = [e.camera]),
                    e
                  );
                },
                a: function (e) {
                  switch (
                    (U(e, {
                      errorCode: "error",
                      errorDesc: "errorMessage",
                      msg: "errorMessage",
                      localId: "apFilePath",
                      tempFilePath: "apFilePath",
                      tempFile: "apFilePath",
                    }),
                    delete e.localId,
                    delete e.tempFilePath,
                    delete e.tempFile,
                    e.error)
                  ) {
                    case 0:
                      delete e.error;
                      break;
                    case 1:
                      e.error = 2;
                      break;
                    case 2:
                      e.error = 10;
                      break;
                    case 3:
                      e.error = 11;
                      break;
                    case 4:
                      e.error = 12;
                      break;
                    default:
                  }
                  return e;
                },
              },
              uploadFile: {
                b: function (e) {
                  return (
                    U(e, {
                      headers: "header",
                      fileName: "name",
                      fileType: "type",
                    }),
                    y(e.filePath) &&
                      ((e.localId = e.filePath), delete e.filePath),
                    e
                  );
                },
                a: function (e) {
                  return 2 === e.error && (e.error = 11), e;
                },
              },
              saveImage: {
                b: function (e, t) {
                  return (
                    U(e, { _: "url", url: "src" }),
                    le(t) && (e.cusHandleResult = true),
                    e
                  );
                },
              },
              downloadFile: {
                b: function (e) {
                  return U(e, { headers: "header" }), e;
                },
                a: function (e) {
                  return (
                    U(e, { tempFilePath: "apFilePath", errorCode: "error" }),
                    delete e.tempFilePath,
                    e
                  );
                },
              },
              setSessionData: {
                b: function (e) {
                  return (
                    (e = w(e)),
                    ue(e.data) || (e.data = { data: e.data }),
                    $(e.data, function (t, n) {
                      e.data[t] = JSON.stringify(n);
                    }),
                    e
                  );
                },
              },
              getSessionData: {
                b: function (e) {
                  return (
                    ce(e._) && (e.keys = [e._]),
                    me(e._) && (e.keys = e._),
                    delete e._,
                    e
                  );
                },
                a: function (e) {
                  return (
                    $(e.data, function (t, n) {
                      e.data[t] = ee(n);
                    }),
                    e
                  );
                },
              },
              startBizService: {
                b: function (e) {
                  return U(e, { _: "name", params: "param%s" }), e;
                },
              },
              tradePay: {
                b: function (e) {
                  return U(e, { _: "orderStr" }), e;
                },
              },
              getAuthCode: {
                b: function (e) {
                  return (
                    U(e, { _: "scopes" }),
                    ce(e.scopes)
                      ? (e.scopeNicks = [e.scopes])
                      : me(e.scopes)
                      ? (e.scopeNicks = e.scopes)
                      : (e.scopeNicks = ["auth_base"]),
                    delete e.scopes,
                    e
                  );
                },
                a: function (e) {
                  return U(e, { authcode: "authCode" }), e;
                },
              },
              getAuthUserInfo: {
                a: function (e) {
                  return U(e, { nick: "nickName", userAvatar: "avatar" }), e;
                },
              },
              openInBrowser: {
                b: function (e) {
                  return U(e, { _: "url" });
                },
              },
              openLocation: {
                b: function (e) {
                  return ae(e.scale) && (e.scale = 15), e;
                },
              },
              showPopMenu: {
                b: function (e) {
                  if (
                    (U(e, { _: "items", items: "menus" }),
                    ue(h.showPopMenu)
                      ? (h.showPopMenu.menus = {})
                      : (h.showPopMenu = { menus: {} }),
                    me(e.menus))
                  ) {
                    var t = e.menus;
                    (e.menus = []),
                      t.forEach(function (t, n) {
                        ce(t) && (t = { title: t }),
                          (t = U(
                            ve({}, t),
                            {
                              title: "name%s",
                              tag: "tag%s",
                              badge: "redDot%s",
                            },
                            {
                              tag: n,
                              title: t.title,
                              badge: ae(t.badge) ? "-1" : t.badge,
                            }
                          )),
                          ae(t.icon) || (t.icon = F("%b", t.icon)),
                          e.menus.push(t),
                          (h.showPopMenu.menus[t.name] = n);
                      });
                  }
                  return e;
                },
                d: function (e, t) {
                  var n = "showPopMenu";
                  true !== h.showPopMenu.onEvent &&
                    ((h.showPopMenu.onEvent = true),
                    b.on("popMenuClick", function (e) {
                      var n = {};
                      U(
                        n,
                        { title: "index%d" },
                        {
                          title:
                            ue(e.data) && e.data.title
                              ? h.showPopMenu.menus[e.data.title]
                              : "-1",
                        }
                      ),
                        t(n);
                    })),
                    s.call(n, e, function (e) {
                      D(n, e);
                    });
                },
              },
              setOptionButton: {
                m: "setOptionMenu",
                b: function (e) {
                  if (
                    (ce(e._) && ((e.title = e._), delete e._),
                    me(e._) && ((e.items = e._), delete e._),
                    U(e, {
                      items: "menus",
                      type: "iconType",
                      badge: "redDot%s",
                    }),
                    ae(e.icon) || (e.icon = F("%b", e.icon)),
                    ue(h.setOptionButton)
                      ? (h.setOptionButton.menus = [])
                      : (h.setOptionButton = { menus: [] }),
                    me(e.menus))
                  ) {
                    var t = e.menus;
                    (e.menus = []),
                      t.forEach(function (n, i) {
                        (n = U(
                          ve({}, n),
                          { type: "icontype", badge: "redDot%s" },
                          { badge: ae(n.badge) ? "-1" : n.badge }
                        )),
                          ae(n.icon) || (n.icon = F("%b", n.icon)),
                          e.menus.unshift(n),
                          (h.setOptionButton.menus[t.length - 1 - i] = i);
                      }),
                      e.menus.length > 0 &&
                        ae(e.override) &&
                        (e.override = true);
                  }
                  if (
                    (le(h.setOptionButton.onEvent) &&
                      b.off("optionMenu", h.setOptionButton.onEvent),
                    le(e.onClick))
                  ) {
                    var n = e.onClick,
                      i = function (e) {
                        var t = 0,
                          i = {};
                        ue(e.data) &&
                          de(e.data.index) &&
                          h.setOptionButton.menus.length > 0 &&
                          (t = h.setOptionButton.menus[e.data.index]),
                          (i.index = F("%d", t)),
                          n(i);
                      };
                    (h.setOptionButton.onEvent = i),
                      true !== e.reset && b.on("optionMenu", i),
                      delete e.onClick;
                  }
                  return e;
                },
                d: function (e, t) {
                  s.call("setOptionMenu", e, t),
                    re() && _(t, {}),
                    b.showOptionButton();
                },
              },
              showOptionButton: { m: "showOptionMenu" },
              hideOptionButton: { m: "hideOptionMenu" },
              showBackButton: {},
              hideBackButton: {},
              allowBack: {
                d: function (e) {
                  var t = "onBack";
                  U(e, { _: "allowButton" }),
                    (e.allowButton = !!ae(e.allowButton) || !!e.allowButton),
                    se(e.allowGesture) &&
                      s.call("setGestureBack", { val: e.allowGesture }),
                    ue(h[t])
                      ? (h[t].allowButton = e.allowButton)
                      : ((h[t] = { allowButton: e.allowButton }), b.onBack()),
                    false === e.allowButton &&
                      h[t].event &&
                      h[t].event.preventDefault();
                },
              },
              startRecord: {
                m: "startAudioRecord",
                b: function (e) {
                  return (
                    U(
                      e,
                      {
                        maxDuration: "maxRecordTime%f",
                        minDuration: "minRecordTime%f",
                        bizType: "business",
                      },
                      {
                        maxDuration: e.maxDuration || 60,
                        minDuration: e.minDuration || 1,
                      }
                    ),
                    ae(e.business) && (e.business = c),
                    e
                  );
                },
                a: function (e) {
                  return (
                    U(e, {
                      tempFilePath: "apFilePath",
                      identifier: "apFilePath",
                    }),
                    e
                  );
                },
              },
              stopRecord: { m: "stopAudioRecord" },
              cancelRecord: { m: "cancelAudioRecord" },
              playVoice: {
                m: "startPlayAudio",
                b: function (e) {
                  return (
                    U(e, {
                      _: "filePath",
                      filePath: "identifier",
                      bizType: "business",
                    }),
                    ae(e.business) && (e.business = c),
                    e
                  );
                },
                a: function (e) {
                  return U(e, { identifier: "filePath" }), e;
                },
              },
              pauseVoice: { m: "pauseAudioPlay" },
              resumeVoice: { m: "resumeAudioPlay" },
              stopVoice: { m: "stopAudioPlay" },
              makePhoneCall: {
                d: function (e, t) {
                  var n = "tel:";
                  U(e, { _: "number" }),
                    (n += e.number),
                    s.call("openInBrowser", { url: n }, t);
                },
              },
              playBackgroundAudio: {
                b: function (e) {
                  return (
                    U(
                      e,
                      {
                        _: "url",
                        url: "audioDataUrl%s",
                        title: "audioName%s",
                        singer: "singerName%s",
                        describe: "audioDescribe%s",
                        logo: "audioLogoUrl%s",
                        cover: "coverImgUrl%s",
                        bizType: "business",
                      },
                      { bizType: e.bizType || c }
                    ),
                    e
                  );
                },
                a: function (e) {
                  return U(e, { describe: "errorMessage" }), z(e, 12, 0), e;
                },
              },
              pauseBackgroundAudio: {
                a: function (e) {
                  return U(e, { describe: "errorMessage" }), z(e, 12, 0), e;
                },
              },
              stopBackgroundAudio: {
                a: function (e) {
                  return U(e, { describe: "errorMessage" }), z(e, 12, 0), e;
                },
              },
              seekBackgroundAudio: {
                b: function (e) {
                  return (
                    U(
                      e,
                      { _: "position", bizType: "business" },
                      { bizType: e.bizType || c }
                    ),
                    (e.position = F("%f", e.position)),
                    e
                  );
                },
                a: function (e) {
                  return U(e, { describe: "errorMessage" }), z(e, 12, 0), e;
                },
              },
              getBackgroundAudioPlayerState: {
                a: function (e) {
                  return (
                    U(e, { audioDataUrl: "url", describe: "errorMessage" }),
                    z(e, 12, 0),
                    e
                  );
                },
              },
            },
            b = {
              version: "3.1.1",
              ua: l,
              isAlipay: Q(/AlipayClient/),
              alipayVersion: (function () {
                var e = l.match(/AlipayClient[a-zA-Z]*\/(\d+(?:\.\d+)+)/);
                return e && e.length ? e[1] : "";
              })(),
              compareVersion: function (e) {
                var t = b.alipayVersion.split(".");
                e = e.split(".");
                for (var n, i, r = 0; r < t.length; r++) {
                  if (((n = p(e[r], 10) || 0), (i = p(t[r], 10) || 0), n > i))
                    return -1;
                  if (n < i) return 1;
                }
                return 0;
              },
              parseQueryString: function (e) {
                var t,
                  n = {},
                  i = e || u.location.search,
                  r = { true: true, false: false };
                (i = 0 === i.indexOf("?") ? i.substr(1) : i),
                  (i = i ? i.split("&") : "");
                for (var a = 0; a < i.length; a++)
                  (t = i[a].split("=")),
                    (t[1] = decodeURIComponent(t[1])),
                    (t[1] = ae(r[t[1]]) ? t[1] : r[t[1]]),
                    (n[t[0]] = t[1]);
                return L("parseQueryString"), n;
              },
              enableDebug: function () {
                b.debug = true;
              },
              on: function (e, t) {
                var n = "ready" === e,
                  i = n || "back" === e;
                i
                  ? d.addEventListener(n ? o + "Ready" : e, t, false)
                  : ((e = e.replace(/ready/, o + "Ready")),
                    e.split(/\s+/g).forEach(function (e) {
                      d.addEventListener(e, t, false);
                    }));
              },
              off: function (e, t) {
                d.removeEventListener(e, t, false);
              },
              trigger: function (e, t) {
                var n = d.createEvent("Events");
                return (
                  n.initEvent(e, false, true),
                  (n.data = t || {}),
                  d.dispatchEvent(n),
                  n
                );
              },
              ready: function (e) {
                if (W()) return new Promise(t);
                function t(t) {
                  v()
                    ? (le(e) && e(), le(t) && t())
                    : b.on("ready", function () {
                        v(), le(e) && e(), le(t) && t();
                      });
                }
                t();
              },
              localLog: function () {
                var e = be(arguments);
                e.forEach(function (t, n) {
                  e[n] = Z(t);
                }),
                  re() &&
                    b.ready(function () {
                      s.call("H5APLog", { content: e.join("  ") });
                    }),
                  m.log.apply(m, e),
                  L("localLog");
              },
              call: function () {
                var e = be(arguments);
                if (W())
                  return b.ready().then(function () {
                    return new Promise(t);
                  });
                function t(t, n) {
                  var i, r, a, o, l, c, u, d, p, f;
                  (i = e[0] + ""),
                    (r = e[1]),
                    (a = e[2]),
                    ae(a) && le(r) && ((a = r), (r = {})),
                    !ue(r) && e.length >= 2 && (r = { _: r }),
                    ae(r) && (r = {}),
                    (o = N(i, r, a)),
                    (l = O(i, o)),
                    ae(o) &&
                      m.error(
                        "please confirm " + i + ".before() returns the options."
                      ),
                    (p = R(i)),
                    (f = K(r, "_") ? r._ : r),
                    G(i, f, o),
                    (u = S(i)),
                    (d = T(i)),
                    (c = function (e) {
                      var s = undefined;
                      (e = e || {}),
                        u && false !== I(i, "handleEventData") && (s = M(e)),
                        (s = B(i, s || e, o, r, a)),
                        ae(s) &&
                          m.error(
                            "please confirm " +
                              i +
                              ".after() returns the result."
                          ),
                        (s = D(i, s)),
                        G(i, f, o, e, s),
                        K(s, "error") || K(s, "errorMessage")
                          ? (le(n) && n(s), le(l.fail) && l.fail(s))
                          : (le(t) && t(s), le(l.success) && l.success(s)),
                        le(l.complete) && l.complete(s),
                        le(a) && a(s);
                    }),
                    le(p)
                      ? p(o, c, r, a)
                      : u
                      ? (x(u, a, c, l), b.on(u, c))
                      : d
                      ? E(d, a)
                      : s.call(P(i), o, c),
                    L(i);
                }
                v() ? t() : f.push(e);
              },
              extendJSAPI: function (e, t) {
                !t && ce(e) && (e = [e]),
                  $(
                    e,
                    function (n) {
                      var i = n;
                      if (true !== t) {
                        var r = e[i];
                        le(r) && (r = { doing: r }),
                          ce(r) && ((i = r), (r = {}), (r[i] = {})),
                          (g[i] = U(
                            g[i] || {},
                            {
                              mapping: "m",
                              before: "b",
                              doing: "d",
                              after: "a",
                            },
                            r
                          )),
                          ue(r.extra) &&
                            ((g[i].e = g[i].e || {}),
                            (g[i].e = ve(g[i].e, r.extra)));
                      }
                      b[i] = function () {
                        return b.call.apply(null, [i].concat(be(arguments)));
                      };
                    },
                    true
                  );
              },
            };
          function v() {
            return (s = s || r[o]), s && s.call;
          }
          function A() {
            var e = r && r.location && r.location.href ? r.location.href : "",
              t = e.replace(/^(http|https):\/\//i, "").split("/")[0];
            return t;
          }
          function _(e, t) {
            setTimeout(function () {
              e(t);
            }, 1);
          }
          function y(e) {
            return /^[a-z0-9|]+$/i.test(e);
          }
          function w(e, t) {
            var n = false;
            return (
              (t = t || "data"),
              K(e, "_")
                ? ((e[t] = e._), delete e._)
                : ($(e, function (e) {
                    e !== t && (n = true);
                  }),
                  n && ((n = e), (e = {}), (e[t] = n))),
              e
            );
          }
          function k(e, t, n) {
            var i,
              r = false;
            return (
              ae(e) ||
                (h.EVENTS || (h.EVENTS = {}),
                h.EVENTS[e] || (h.EVENTS[e] = { callbacks: [] }),
                h.EVENTS[e].callbacks || (h.EVENTS[e].callbacks = []),
                h.EVENTS[e].callbacks.forEach(function (e, n) {
                  e.cb === t && ((r = e), (i = n));
                }),
                n && de(i) && h.EVENTS[e].callbacks.splice(i, 1)),
              r
            );
          }
          function x(e, t, n, i) {
            var r = k(e, t);
            r || h.EVENTS[e].callbacks.push({ cb: t, _cb: n, _cbSFC: i });
          }
          function E(e, t) {
            var n = k(e, t, true);
            le(t)
              ? n && b.off(e, n._cb)
              : (h.EVENTS[e].callbacks.forEach(function (t) {
                  b.off(e, t._cb);
                }),
                (h.EVENTS[e].callbacks = []));
          }
          function S(e) {
            return C("on", e);
          }
          function T(e) {
            return C("off", e);
          }
          function C(e, t) {
            var n = g[t],
              i = false,
              r = "off" === e ? /^off([A-Z])(\w+)/ : /^on([A-Z])(\w+)/;
            return (
              n &&
                r.test(t) &&
                ((t = t.match(r)),
                (i = n.m),
                !i && t[1] && t[2] && (i = te(t[1]) + t[2])),
              i
            );
          }
          function I(e, t) {
            var n = g[e] || {},
              i = n.e || n.extra || {};
            return i[t];
          }
          function P(e) {
            var t = g[e];
            return t && t.m ? t.m : e;
          }
          function N(e, t, n) {
            var i = g[e],
              r = i && i.b ? i.b(ve({}, t), n) : t,
              a = I(e, "optionModifier");
            if (le(a)) {
              var o = a(r, n);
              ue(o) && (r = o);
            }
            return r;
          }
          function O(e, t) {
            var n = {};
            return (
              (t = t || {}),
              le(t.success) && ((n.success = t.success), delete t.success),
              le(t.fail) && ((n.fail = t.fail), delete t.fail),
              le(t.complete) && ((n.complete = t.complete), delete t.complete),
              n
            );
          }
          function R(e) {
            var t = g[e];
            return !(!t || !t.d) && t.d;
          }
          function B(e, t, n, i, r) {
            var a = g[e],
              o = a && a.a ? a.a(fe(t) ? t : ve({}, t), n, i, r) : ve({}, t),
              s = I(e, "resultModifier");
            if (le(s)) {
              var l = s(o, n, i, r);
              ue(l) && (o = l);
            }
            return o;
          }
          function D(e, t) {
            return (
              K(t, "error") && (t.error = p(t.error, 10)),
              false !== I(e, "handleResultSuccess") && z(t),
              0 === t.error && (delete t.error, delete t.errorMessage),
              t.error > 0 && t.error < 10 && m.error(e, t),
              t
            );
          }
          function z(e, t, n) {
            return (
              (n = !ae(n) && n),
              K(e, "error") || e.success !== n || (e.error = de(t) ? t : 2),
              delete e.success,
              e
            );
          }
          function M(e) {
            var t = {};
            return (
              ae(e.data) || ((t = e.data), (t = ue(t) ? t : { data: t })), t
            );
          }
          function j(e) {
            var t = (e || "").match(/(\w+)(%\w)$/i),
              n = { k: e };
            return t && ((n.k = t[1]), (n.t = t[2])), n;
          }
          function F(e, t) {
            return (
              "%s" === e && (t = Z(t)),
              "%c" === e && (t = Y(t)),
              "%b" === e && (t = X(t)),
              "%d" === e && (t = p(t, 10)),
              "%f" === e && (t = parseFloat(t)),
              t
            );
          }
          function U(e, t, n) {
            var i;
            return (
              (n = n || {}),
              $(t, function (r, a) {
                (i = j(t[r])),
                  (a = i.k),
                  !ae(a) &&
                    (K(e, r) || K(n, r)) &&
                    ae(e[a]) &&
                    ((e[a] = F(i.t, ae(n[r]) ? e[r] : n[r])),
                    a !== r && delete e[r]);
              }),
              e
            );
          }
          (b.extendJSAPI.mapping = U),
            (b.extendJSAPI.toType = F),
            b.isAlipay || m.warn("Run alipayjsapi.js in Alipay please!"),
            (function () {
              b.extendJSAPI(g, true),
                b.on("ready", function () {
                  function e() {
                    H(function () {
                      var t = f.shift();
                      b.call.apply(null, t), f.length && e();
                    });
                  }
                  f.length && e();
                });
            })();
          var L = (function () {
            var e = [],
              t = undefined,
              n = false;
            function i() {
              setTimeout(function () {
                if (e.length > 0) {
                  var t = e.join("|");
                  b.ready(function () {
                    s.call("remoteLog", {
                      type: "monitor",
                      bizType: "ALIPAYJSAPI",
                      logLevel: 1,
                      actionId: "MonitorReport",
                      seedId: "ALIPAYJSAPI_INVOKE_COUNTER",
                      param1: t,
                    });
                  }),
                    b.debug && m.info("REMOTE_LOG_QUEUE>", e),
                    (e = []);
                }
                a();
              }, 0);
            }
            function r() {
              (n = true),
                (t = setTimeout(function () {
                  i();
                }, 5e3));
            }
            function a() {
              !ae(t) && clearTimeout(t), (n = false);
            }
            return (
              b.on("back", function () {
                i();
              }),
              function (t) {
                e.push(t), e.length >= 6 ? i() : n || r();
              }
            );
          })();
          function G() {
            var e,
              t,
              n,
              i,
              r,
              a,
              o = be(arguments);
            b.debug &&
              ((e = o[0]),
              (t = o[1]),
              (n = o[2]),
              (i = o[3]),
              (r = o[4]),
              (a = [
                o.length > 3 ? "RETURN>" : "INVOKE>",
                e,
                K(t, "_") ? t._ : t,
                n,
              ]),
              o.length > 3 && a.push(i),
              o.length > 4 && a.push(r),
              m.info(a));
          }
          function Q(e) {
            return e.test(l);
          }
          var H = (function () {
            return (
              u.requestAnimationFrame ||
              u.webkitRequestAnimationFrame ||
              u.mozRequestAnimationFrame ||
              u.msRequestAnimationFrame ||
              function (e, t) {
                u.setTimeout(function () {
                  e(+new Date(), t);
                }, 1e3 / 60);
              }
            );
          })();
          function W() {
            if (undefined === a) {
              var e = false,
                t = r.Promise;
              if (t) {
                var n = null,
                  i = null;
                try {
                  (n = t.resolve()), (i = n.then);
                } catch (e) {}
                n instanceof t && le(i) && !t.cast && (e = true);
              }
              e || m.warn("try callback since no Promise detected"), (a = e);
            }
            return a;
          }
          function Z(e) {
            var t = e;
            if (ue(e) || me(e))
              try {
                t = JSON.stringify(e);
              } catch (e) {}
            else t = e + "";
            return t;
          }
          function Y(e) {
            var t = "" + e;
            return (
              0 === t.indexOf("#") && (t = t.substr(1)),
              3 === t.length && (t = t.replace(/(.)/g, "$1$1")),
              (t = p(t, 16)),
              oe(t) && m.error(e + " is invalid hex color."),
              t
            );
          }
          function J(e, t) {
            return e && t && (e = "data:" + t + ";base64," + e), e;
          }
          function X(e) {
            return (
              ce(e) && (e = e.replace(/^data:(\/|\w|\-|\.)+;base64,/i, "")), e
            );
          }
          function V(e) {
            var t = [];
            return (
              $(e, function (e, n) {
                t.push(e + "=" + encodeURIComponent(ae(n) ? "" : n));
              }),
              (t = t.join("&")),
              t
            );
          }
          function q(e, t) {
            var n = t;
            return (
              ue(t) && (n = V(t)),
              /\?/.test(e)
                ? /&$/.test(e) || /\?$/.test(e) || (n = "&" + n)
                : (n = "?" + n),
              e + n
            );
          }
          function K(e, t) {
            return !(!ue(e) && !me(e)) && e.hasOwnProperty(t);
          }
          function $(e, t, n) {
            var i, r;
            if (!n && pe(e)) {
              for (i = 0; i < e.length; i++) if (false === t(i, e[i])) return e;
            } else for (r in e) if (false === t(r, e[r])) return e;
            return e;
          }
          function ee(e) {
            try {
              e = JSON.parse(e);
            } catch (t) {
              m.warn(t, e);
            }
            return e;
          }
          function te(e) {
            return ce(e) && (e = e.toLowerCase()), e;
          }
          function ne(e) {
            return ce(e) && (e = e.toUpperCase()), e;
          }
          function ie() {
            return Q(/android/i);
          }
          function re() {
            return Q(/iPad|iPod|iPhone|iOS/i);
          }
          function ae(e) {
            return "[object Undefined]" === he(e);
          }
          function oe(e) {
            return "NaN" === p(e, 10).toString();
          }
          function se(e) {
            return "boolean" === typeof e;
          }
          function le(e) {
            return "[object Function]" === he(e);
          }
          function ce(e) {
            return "string" === typeof e;
          }
          function ue(e) {
            return "[object Object]" === he(e);
          }
          function de(e) {
            return "[object Number]" === he(e);
          }
          function me(e) {
            return "[object Array]" === he(e);
          }
          function pe(e) {
            return !!e && !le(e) && (me(e) || de(e.length));
          }
          function fe(e) {
            return "[object Event]" === he(e);
          }
          function he(e) {
            return Object.prototype.toString.call(e);
          }
          function ge(e) {
            for (var t in e) return false;
            return true;
          }
          function be(e) {
            for (
              var t =
                  arguments.length > 1 && undefined !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = e.length - t,
                i = new Array(n),
                r = 0;
              r < n;
              r++
            )
              i[r] = e[r + t];
            return i;
          }
          function ve(e) {
            var t,
              n,
              i = be(arguments, 1);
            if (!ue(e)) return e;
            for (var r = 0, a = i.length; r < a; r++)
              for (n in ((t = i[r]), t))
                hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }
          (r._AP = b),
            module.exports
              ? (module.exports = b)
              : ((i = function () {
                  return b;
                }.call(exports, __webpack_require__, exports, module)),
                undefined === i || (module.exports = i));
        })(self);
    },
    oNhJ: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("tPIN");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    oRAV: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("0s/u");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    oW8E: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("jX3d");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    okyO: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.fontSelector___1ixQ4{width:100%;overflow-x:auto;margin-top:.1rem}.fontSelector___1ixQ4 .fontList___tCbj0{padding-left:.24rem;white-space:nowrap}.fontSelector___1ixQ4 .fontList___tCbj0 .placeholder___1pKQj{width:.11rem}.fontSelector___1ixQ4 .fontList___tCbj0 .font___3LZDF{display:inline-block;-webkit-flex-direction:column;flex-direction:column;font-size:.13rem;color:rgba(254,220,173,.6);text-align:center;margin-right:.06rem}.fontSelector___1ixQ4 .fontList___tCbj0 .font___3LZDF .preview___1aLtx{height:.615rem;width:.615rem;border-radius:.12rem;margin-bottom:.05rem;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;opacity:.5}.fontSelector___1ixQ4 .fontList___tCbj0 .font___3LZDF .preview___1aLtx .inner___2j7Dz{width:.535rem;height:.535rem;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*gvthQaFRO8kAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%}.fontSelector___1ixQ4 .fontList___tCbj0 .font___3LZDF .preview___1aLtx .inner___2j7Dz .img___2wSI9{background-size:contain;background-repeat:no-repeat;width:.55rem;height:.55rem}.fontSelector___1ixQ4 .fontList___tCbj0 .font___3LZDF.active___3K69H{color:#fedcad;font-weight:700}.fontSelector___1ixQ4 .fontList___tCbj0 .font___3LZDF.active___3K69H .preview___1aLtx{border:.025rem solid #ffddb0;opacity:1}',
          "",
        ]),
        (exports.locals = {
          fontSelector: "fontSelector___1ixQ4",
          fontList: "fontList___tCbj0",
          placeholder: "placeholder___1pKQj",
          font: "font___3LZDF",
          preview: "preview___1aLtx",
          inner: "inner___2j7Dz",
          img: "img___2wSI9",
          active: "active___3K69H",
        });
    },
    p7od: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("gGZN");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    pW7D: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.wrapper___12oAj{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.wrapper___12oAj .container___OvG6k{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.wrapper___12oAj .container___OvG6k .closeBtn___36DiV{height:.32rem;width:.32rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Qn5DSqriNqAAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:2;margin-top:.1rem}.wrapper___12oAj .container___OvG6k .img___157Py{height:4.545rem;width:2.8rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*d4m_Q6gB6NkAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;z-index:2}.wrapper___12oAj .container___OvG6k .img___157Py img{width:.4rem;height:.4rem;position:absolute;top:1.33rem;left:1.17rem}.wrapper___12oAj .container___OvG6k .img___157Py .okBtn___jy15N{height:.36rem;width:1.3rem;position:absolute;bottom:.55rem;left:.76rem}.wrapper___12oAj .container___OvG6k .img___157Py .rewriteBtn___hNntZ{text-align:center;font-size:.12rem;color:#fff0c4;position:absolute;bottom:.22rem;width:1.4rem;height:.3rem;left:.7rem}',
          "",
        ]),
        (exports.locals = {
          wrapper: "wrapper___12oAj",
          container: "container___OvG6k",
          closeBtn: "closeBtn___36DiV",
          img: "img___157Py",
          okBtn: "okBtn___jy15N",
          rewriteBtn: "rewriteBtn___hNntZ",
        });
    },
    peOq: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("macJ");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    rLng: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("E6aP");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    rUGD: function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true }),
        (exports.getStorage = r),
        (exports.setStorage = a),
        (exports.removeStorage = o),
        (exports.clearStorage = s);
      var i = __webpack_require__("oExZ");
      function r(e) {
        return new Promise(function (t) {
          i.getStorage({
            key: e,
            success: function (e) {
              e.data ? t(e.data) : t("");
            },
            fail: function () {
              t("");
            },
          });
        });
      }
      function a(e, t) {
        return new Promise(function (n) {
          i.setStorage({
            key: e,
            data: t,
            success: function (e) {
              n({ error: false });
            },
            fail: function () {
              n({ error: true });
            },
          });
        });
      }
      function o(e) {
        return new Promise(function (t) {
          i.removeStorage({
            key: e,
            success: function (e) {
              t({ error: false });
            },
            fail: function () {
              t({ error: true });
            },
          });
        });
      }
      function s() {
        return new Promise(function (e) {
          i.setStorage({
            success: function (t) {
              e({ error: false });
            },
            fail: function () {
              e({ error: true });
            },
          });
        });
      }
    },
    rral: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("SrDG");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    tMH4: function (module, exports, __webpack_require__) {
      (function (t, n) {
        module.exports = n();
      })(0, function () {
        "use strict";
        var removeImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////YGTPaITr86evbJT764OP3z9T0uMDjU2fdNEvcLETZHjfZHDb/+/v+9/j97/H409j3ytDrhJLhSl7fPlTeOU/cMEj+8/T75Of529/519v2x830vsXysbryrrfwpK/woqzumKTsi5jnbH3lYXPbKUH87e/52t71wsnocoLgQ1jzs7zxqbPvnqntkp/peIfjWmxcOTleAAAANnRSTlMA/Pnv/rtuKCTxpEtDBOLd2tPKtpyORzQuEA307OXEvq6UiXJmVxsXEwmyqIF+eGFQPh8G1cwBBg/JAAACgklEQVRIx5XV6VbiQBAF4Ar7KiIiiPu+6+jM3KCIG+67oCPojDrr+z/CdBpOoOkCku8HnHBySdLVVaFOluaD2dDCZ3IhF01PjEEyEqnVTUfhpbmUAdVIZKhXKj47Bk7yU9fYXD86Gd/smAoOoJvJRT4W9aK7RJaLrRvoZUR/yngEDvjW2nODcCagxmbgkKGUMmrAKW+wpQBhONc/bOf8cCNNDUNwxbPVyCVhK1ROoCsVd9EiQtIGbHd58/pei51cmGaltYoZmeuD7Ztpmq+7UG1fil9raJEiIYamQl6csvOgxG6vTKGoFHFe5JQNdrYjzsmX0XS3L345eoJiRuTULjg9EKcd/rSP7+XxI1QTRBmoflxb//8Ldbuv1vWLWimW9J1Z2DeF37A8yNt+gyYmG4FZP/MPgLJcpjO2Lcah+f5hBc9RORRfB6dgTInq6W4urODekfi4vgNnmUbBON4z664KYE2QB2zwRcYut8EbEDnWucztHXfMjYLzV4Rk8IbP+SnBja2alZF1vDjhZzDX6yX5cC+lqil8sI84TVP6mvwzhVoJeJZLesvkZmlWK56swbtP9uORdb9MLTIU0ptbbpa6R7lltBEQjhP1MZuzah8X89wIWCaitN7cz2h6Y0YANkQu27qjG82tjwDliiM5EgaUuSSbWx8B72gxSG2D6UxvbjkC1Fv3zJOUgq18zrXbdvXJpxS9LmvAjdFh7aXp8tW5mHAR88fJFvS6f/1JQ04f0RsiRcBZzIhRm4CTK4ajpIl5ez9bkBihL71WcphYuSlPt3tcj1MnoRUfeJ70InWT8bPLGNmiXkJrybbQeGCBHFmYm55MjoU93r6vK6vRHDH+Azzf77qpXzbkAAAAAElFTkSuQmCC",
          zoomImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA2CAMAAABUWfHRAAAA9lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////YGTP/+/v86+3lZHbaJT7cK0P51tv74+b3y9Hqf43kYHLumqb1v8bfP1X++Pn+8/Ttj5zaITr63eH40dbulqLsipjma3vdNEr//f3ztr7xrbbvoKvqfotfJiWrAAAANHRSTlMA+t0FEgP21w8LCPLtzsW/lm5Qu3tUH+7q5rSfm5GMYl9CNCwZybmupYlnS0U8Lad1c3En87nDZgAAAfhJREFUSMet0sdi4jAQgOFxwXSw6R1Cets6goVki0kgddv7v8wusuNIxpLnkP/ky2dpJMFbVthrnBx2i2iUzKrrvaOh3LhuoFSpf5FJU/apgwmZE63MN4qoKNtUs0kHNZUVg1ou6nMSlzyoYGqj3SmnXSRUz8dYq4OkevKKuSwSc0Vm1ZGcJ7ghKrqdv3aDQXsR2zcUbM2ENn74AqIRj1DRiok9YdBZyM5R1Z+N6L5gUCfHWUZ3ljPeX8nhKXc1TOsbk12R3/4xia0Eh5PtlRsU9v1BdEd8mxQ2+yE6pwAwJDEUHb/7ConF3EeAEoXF3QByOvYrZDuuCi2dewjZjivDvs7NV+wpYOgztsYokztNt9GX/3smOHmfV4/3EbhDTWX5XJ7ZIvzp1yUfR1UVoC08fsbYPGALxti12vUBKjEXsecbtfsA4MZdyJZXqO4CoBZzFGYUAGxDdgSGdfhfT3YEhuOta0rOJzAnv3WWKToCwyHwaqIjsLYNQVXJLf1rnvL6PkHYNHJii/tkZlrw0gB5P5nUOtmdQ1QhfGyPG4Gt7hJZA4RsE4n1Qepzm8aqFshdliisYkO8VjmdDSzYLX+SoowzSM4r6lh2CqrskaNS5jgDmg5cI0l1PT6ZVnqHMeQcNwtAya6NetntrEap/L5xGS5FLq9Z5R/gTsBPh18U3QAAAABJRU5ErkJggg==",
          rotateImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAABPlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////YGTPdMkn30NXZGzX//f3+9vf86Ovxq7XfPlPaIjv++Pn63+P3zNL0vcTwoazumaTbJj/97/H2x83ysLnrh5Xnb3/kX3HiUWXgRlveOlDcKkLZHTf98fP40tjtj5zsipfrhZPqgpDpd4fmaHnlZHbkW27jVGf+9PX64uX52N31wsnulqLodYThSV7fPlTcMEfZHzjZHjf98/TvnKjlYXPfQVdDI8zxAAAAM3RSTlMA+bPxJyILA/vr6LyagDMeFg0G0ZKOiWlfWlNGOjcB9drLwq2lhHVwTC7ft3o/Ghnj4EnYJz4cAAACyElEQVRIx5WW51oiMRSGA9IFQQEVFHuvu3tmZKQtTWBBF3vBvuqW+7+BTSgzJ2EG4vsv3zPvk+TkJECscAUdY479CfIJxjeiSz5o41mw7yTcMtJE3G4DHm9kbJg1F9sCM7Y3B2ozi2CBZyVoaYW2YQC2wJy5tvkVBrPsMtPi8zCMsLNfWwMJvAlRmwYpvMKMszaQI8ztMegDWeyoqhP6sR2dDhUDhrfey9LN96r+gXZkfo5OvY+9vSyjKK/AeLxsqE2lqbZK3/vElZ63qkeqomTYtMeKQeNAFLtdvjfPe6k7hefmN++NdrwocF6hrDA+Tlo3rZOO+EtY7CzT3D7OU7Psy+NipygPJZUNf/Kin3nfgPOS9LNy0YgOz1mS4c5nhD0fEc5jqA+AaS+8Dphd6oVFL/tSq9UuKkb61KTpk3D248B5Osm8ET+zHQsVTeBxRjH4Y8Qaq2seffdFuEDFpK6pKZSnaXAJCJdwX1MHXc4OcXz6QQ8RB07aZDI06IY1NN4kUSnvB11oiuuYSSnvinpnXGvvSHnX1MO95iBTgMilq5qpV6cerlSIzAjbuDL13mhv4wYlJAgIer7lnImWp9PdovEiIXNeoWwli3KmhYu0jMYV1tapPu0xSWP8SsUI4QvT0BeEuP9H0wuchKgX8uCNsAZ94Wuau2M3/r7vgbED4kKh1HHJU6/sVhUAMc00/iS0OhPV0qH+TJRZ8AwIn4u0GRVXxdZ1na4cFIq3WYVRA8wU6TAGGO1KEchWAbOg/y9ZAY7KMbaSN8LrGSc9nMJPtFb4+9613q7FZ36JGMRAJJcvnl+Wqmcg4gsSxCRIYpslGLdd0psW/8uFpbRJIjIuMaNnnfTjHrrHkRliSsw2UFtwEAscywMmC7iINYkli/JHQmQwG6Oe/rn8TjKcvXX7CJK2/HHpf+dux8baasQfDUzt7hNT/gOKANI4PmQ+0QAAAABJRU5ErkJggg==",
          flipXImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAABMlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////YGTP0v8bumKPyr7jjVmnxqbP/+/vbJD3ZHDb+9vf87e/86ezcL0baIDnsipjncIDmanvjWWviUGPhSV7fPFL63+P41Nn3ztP1wsn1wcjvnantkZ7cKkL98/T98PL75Of52d340df2ytDysbrulaHrhZPqgI7lZHbkXW/gQljeOE/64uX2yc/zt7/wpK/qg5HpeYiG6FF/AAAANHRSTlMACPTsDgH74MePFtbDclgjEgW2mXt3Y0E7NC7izpSHgmpOKyAd+O7m3dC9sKSfVDGpoV1bAT3B8QAAAqxJREFUSMeV1gdX4kAQwPExIRTpHbH3s1+Z6J2RIoq917OcXv3+X+E2OAqzuwn4f08gxN8LjgsseGWlJssTUwF4T8nC4pCBrcxwNtHfE5rKR1EqVuh63f7hIGqayff5qb6cgR6FPluebHwQfRoqe7Ac+meMa1/jInYtrxlIGHvoU1q+mo45qJSV3BIqVXftJiqNMRZHtXXbto9QLljsYMWgxq0Jt4pK5mT7jwth7w4XlFfpnD3UPN3qvxN6VCIWMOmJLdt+vvBwv8XRFS1zcqNI7YhzTb2rn4uj73Twsm5Sb2v5my1aZ46d+koHcy03huzkxoHGndmdDgdcF+bO3nMUd1ThLuIuTJScfS+7i2ebu0HhEoqzjyXXtCWHSYAsd9viZ7PWdrTgKtvMFQBi3FX3xc2PTnewIR5srTMXATC5wxt3Bqdt5+y1ZsVdBgIoObwTt43rN3fv/m9+IndRmJIcLZsnh9yvSgtIbhYmVFdviPtbcu48HlF2BpRlR/Orkzuj+XI3DUnZ0fyQHM1Xcib0y641v13n1eFhw52v5EJgTUvurzu/KyRH941D7sIAUe6ObXqjkaP57p8ytwSwwN2mu9aQufqm+zxzeYC4sq73q9zhqrKuSwADsmvcoOTwQXJGGsCaldwaKs554i4Dogh3O6g6vN5g7ovrBpg7r+sc/ul0Rh+4zSPVpN/UOHykzwG3EQB2wdvzyh16uMtdsYhokb3uLj4iVb30+X6oIRUHKhl8z/fKYHtLEvFyJ6iWgLfSMVQ7Euu7hkrDbFcQ0sCTrUNUmuc7gxUDe+pDCnjLwV6YOQFyRbM7i07qdp3Rbiyj304GMv4sYoE+KxHyVuGS3wY0PuMxx2XwLzWquebQWBq6ZhUjcx0mGBstQ6+lSoXcSHZ4JJdY0W+s/wOoYeI4ogLoOgAAAABJRU5ErkJggg==",
          flipYImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3BAMAAACr/pT4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTP///////////////////////////9gZM/XCyeRXau6Yo/Ktt/vl6N41TOp/jRf/vt8AAAAHdFJOUwCMF+PBYDWJP8hMAAAB1ElEQVQ4y31UO0gDQRBdL0ZbBcE24K9ViaYVRdIqirbxA7bGS7JEEtKOSmIZbbQ0CKkTEGyjYB9IYWssrLWwcD93u7O7d74id3svszPz5kOIgre9kfHTkzkSgYMMldh0uV2qkE9Z3DFFWDG5WUpj2bGMSdIJRO5bHC1otyPUwaoip13ST8UbUrqMPFbfNF6F1yBU/n4DCA864FH++oPJOv9S0nm4lvJeIUBlCPDLHT4DXPZFSFs61gHANQ+M/aknvywyciaIvQvQFr9fwYcikq7MbQJ7GjrNhodz5m0IjabSIUc8LcoLj7SNS5PUh2oL4AopuGYIW4NGHx1PpT4h7jv4VCIJGosiWRBp3FoQt+cl2QILdUme8IfNSSUC0rG8QNdWniw0ERmNPBnHx3LfTAWLUB1emyJg+bqG7vQMCz/gcfaw8LpkvNqo1qI51YCx7myzkn6iYqs2GfBi8pKGlfFZmwSJVkB0SE11JktTtSYz+ebPO3UxHyUZ0TtWtqOaWk6nOyu+GIdEkL/GR9jTRMpQe0RoSgnipl7P/b9j72UjyFzM/tLhCFPHq48Wa9Im1/HyO7K7x8BOzOZz3BacTe6pVb0UteXnpnhTpPdINLz5Q8PbH9SoSbdHwQAHAAAAAElFTkSuQmCC",
          icons = {
            remove: [removeImage, -1, -1],
            zoom: [zoomImage, -1, 1],
            rotate: [rotateImage, 1, 1],
            flipx: [flipXImage, 1, -1],
            flipy: [flipYImage, 1, -1],
          },
          defaultFrame = {
            fitness: true,
            thickness: 1,
            color: 0xffffff,
            lineOpacity: 1,
            fill: 0,
            fillOpacity: 0,
          },
          constants = Object.freeze({
            REMOVE_IMAGE: removeImage,
            ZOOM_IMAGE: zoomImage,
            ROTATE_IMAGE: rotateImage,
            FLIPX_IMAGE: flipXImage,
            FLIPY_IMAGE: flipYImage,
            ICONS: icons,
            DEFAULT_FRAME: defaultFrame,
          }),
          l = function (e, t) {
            return Math.sqrt(e * e + t * t);
          },
          c = function (e, t, n, i) {
            var r = e * n + t * i,
              a = e * i - t * n,
              o = (Math.atan2(a, r) / Math.PI) * 180;
            return (o + 360) % 360;
          };
        function u() {}
        var d = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          DefineClassProperties = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || false),
                  (i.configurable = true),
                  "value" in i && (i.writable = true),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          __assign =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          CreateClass = function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          },
          h = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" !== typeof t && "function" !== typeof t)
              ? e
              : t;
          },
          g = (function () {
            function e(e, t) {
              var n = [],
                i = true,
                r = false,
                a = undefined;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(i = (o = s.next()).done);
                  i = true
                )
                  if ((n.push(o.value), t && n.length === t)) break;
              } catch (e) {
                (r = true), (a = e);
              } finally {
                try {
                  !i && s["return"] && s["return"]();
                } finally {
                  if (r) throw a;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          b = function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          },
          v = {},
          A = (function (Container) {
            function classDef(e) {
              var n =
                arguments.length > 1 && undefined !== arguments[1]
                  ? arguments[1]
                  : {};
              d(this, classDef);
              var i = h(
                  this,
                  (classDef.__proto__ || Object.getPrototypeOf(classDef)).call(
                    this
                  )
                ),
                r = n.frame,
                a = undefined === r ? {} : r,
                s = n.drag,
                l = undefined === s ? {} : s,
                c = n.zoom,
                u = undefined === c ? {} : c,
                m = n.rotation,
                f = undefined === m ? {} : m,
                g = n.remove,
                b = undefined === g ? {} : g,
                v = n.flipx,
                A = undefined === v ? {} : v,
                _ = n.flipy,
                y = undefined === _ ? {} : _,
                w = e.getBounds(),
                k = w.width,
                x = w.height,
                E = Math.sqrt(Math.pow(k, 2) + Math.pow(x, 2));
              (i.$fixedIndex = false),
                (i.$icons = {}),
                (i.$frameOpt = __assign({}, defaultFrame, a)),
                (i.$zoomOpt = __assign({ minScale: 0.5, maxScale: 1.5 }, u)),
                (i.$rotationOpt = __assign({}, f)),
                (i.$removeOpt = __assign({}, b)),
                (i.$flipxOpt = __assign({}, A)),
                (i.$flipyOpt = __assign({}, y)),
                (i.$sprite = e),
                (i.$spriteContainer = new Tiny.Container()),
                (i.$container = new Tiny.Container());
              var S = i.$frameOpt.fitness,
                T = k,
                C = x;
              return (
                S || ((T = E), (C = E)),
                e.setAnchor(0.5),
                (i.$w = T),
                (i.$h = C),
                i.deactivate(),
                i.addChild(i.$spriteContainer),
                i.addChild(i.$container),
                i.$spriteContainer.addChild(e),
                i.$container.addChild(i.createFrame(T, C)),
                i.enableDrag(l),
                u && i.$container.addChild(i.createZoom(T, C)),
                f && i.$container.addChild(i.createRotate(T, C)),
                b && i.$container.addChild(i.createRemove(T, C)),
                A && i.$container.addChild(i.createFlipX(T, C)),
                !A && y && i.$container.addChild(i.createFlipY(T, C)),
                classDef.instancesPoll.push(i),
                i.on("removed", function () {
                  Tiny.arrayRemoveObject(classDef.instancesPoll, i);
                }),
                i.on("added", function () {
                  var e = i.parent,
                    t = function (e) {
                      for (var t in i.$icons) i.$icons[t].activated = false;
                    };
                  e.on("pointerup", t),
                    e.on("pointerout", t),
                    e.on("pointercancel", t),
                    e.on("pointerupoutside", t);
                }),
                i
              );
            }
            return (
              CreateClass(classDef, Container),
              DefineClassProperties(classDef, [
                {
                  key: "activate",
                  value: function () {
                    for (var e in (classDef.deactivateAll(),
                    (this.$container.renderable = true),
                    this.$fixedIndex ||
                      this.parent.setChildIndex(
                        this,
                        this.parent.children.length - 1
                      ),
                    this.$icons))
                      this.$icons[e].setEventEnabled(true);
                  },
                },
                {
                  key: "deactivate",
                  value: function () {
                    for (var e in ((this.$container.renderable = false),
                    this.$icons))
                      this.$icons[e].setEventEnabled(false);
                  },
                },
                {
                  key: "fixedIndex",
                  value: function (e) {
                    this.$fixedIndex = e;
                  },
                },
                {
                  key: "enableDrag",
                  value: function (e) {
                    var t = this,
                      n = function (e) {
                        this.activated && (this.activated = false);
                      };
                    this.setEventEnabled(true),
                      this.on("pointerdown", function (e) {
                        if (
                          (e.stopPropagation(),
                          !(
                            e.data.originalEvent.touches &&
                            e.data.originalEvent.touches.length > 1
                          ))
                        ) {
                          var n = e.data.getLocalPosition(this.parent),
                            i = n.x,
                            r = n.y;
                          (this.activated = true),
                            (this.lastX = i),
                            (this.lastY = r),
                            (this.lastGlobalX = t.x),
                            (this.lastGlobalY = t.y),
                            t.activate();
                        }
                      }),
                      this.on("pointermove", function (t) {
                        if (
                          !(
                            t.data.originalEvent.touches &&
                            t.data.originalEvent.touches.length > 1
                          ) &&
                          e
                        ) {
                          var n = t.data.getLocalPosition(this.parent),
                            i = n.x,
                            r = n.y;
                          !this.activated ||
                            (this.lastX === i && this.lastY === r) ||
                            this.setPosition(
                              this.lastGlobalX + (i - this.lastX),
                              this.lastGlobalY + (r - this.lastY)
                            );
                        }
                      }),
                      this.on("pointerup", n),
                      this.on("pointercancel", n),
                      this.on("pointerupoutside", n);
                  },
                },
                {
                  key: "createFrame",
                  value: function (e, t) {
                    var n = this.$frameOpt,
                      i = n.thickness,
                      r = n.color,
                      a = n.lineOpacity,
                      o = n.fill,
                      s = n.fillOpacity,
                      l = new Tiny.Graphics();
                    return (
                      l.beginFill(o, s),
                      l.lineStyle(i, r, a),
                      l.drawRect(-e / 2, -t / 2, e, t),
                      l.endFill(),
                      l
                    );
                  },
                },
                {
                  key: "createZoom",
                  value: function (e, t) {
                    var n = this.$zoomOpt,
                      i = n.sprite,
                      r = n.minScale,
                      o = n.maxScale,
                      s = g(icons["zoom"], 3),
                      c = s[0],
                      u = s[1],
                      d = s[2],
                      m =
                        i && i instanceof Tiny.Sprite
                          ? i
                          : Tiny.Sprite.fromImage(c),
                      p = this.$spriteContainer,
                      f = this.$container,
                      this_ = this;
                    (this.$icons["zoom"] = m),
                      m.setAnchor(0.5),
                      m.setPosition((e / 2) * u, (t / 2) * d),
                      m.setEventEnabled(true);
                    var b = function (e) {
                      this.activated && (this.activated = false);
                    };
                    return (
                      m.on("pointerdown", function (e) {
                        e.stopPropagation();
                        var t = e.data.getLocalPosition(this.parent),
                          n = t.x,
                          i = t.y;
                        (this.activated = true),
                          (this.lastX = n),
                          (this.lastY = i);
                      }),
                      m.on("pointermove", function (n) {
                        if (
                          !(
                            n.data.originalEvent.touches &&
                            n.data.originalEvent.touches.length > 1
                          ) &&
                          this.activated
                        ) {
                          var i = n.data.getLocalPosition(this.parent),
                            a = i.x,
                            s = i.y,
                            c = a - this.lastX,
                            u = s - this.lastY,
                            d = Math.atan2(u, c),
                            m = l(c, u),
                            g = (m / e) * 0.3,
                            b = p.scale.x;
                          if (d > 0) {
                            var v = b + g;
                            if (v >= o) return;
                            p.setScale(v);
                          } else {
                            var A = b - g;
                            if (A <= r) return;
                            p.setScale(A);
                          }
                          var y = p.scale.x,
                            w = f.getChildAt(0);
                          f.removeChild(w),
                            f.addChildAt(this_.createFrame(-e * y, -t * y), 0),
                            _(this_.$icons, (e / 2) * y, (t / 2) * y);
                        }
                      }),
                      m.on("pointerup", b),
                      m.on("pointercancel", b),
                      m.on("pointerupoutside", b),
                      m
                    );
                  },
                },
                {
                  key: "createRotate",
                  value: function (e, t) {
                    var n = this.$rotationOpt.sprite,
                      i = g(icons["rotate"], 3),
                      r = i[0],
                      o = i[1],
                      s = i[2],
                      l =
                        n && n instanceof Tiny.Sprite
                          ? n
                          : Tiny.Sprite.fromImage(r),
                      u = this.$sprite;
                    (this.$icons["rotate"] = l),
                      l.setAnchor(0.5),
                      l.setPosition((e / 2) * o, (t / 2) * s),
                      l.setEventEnabled(true);
                    var d = function (e) {
                      this.activated &&
                        ((this.activated = false),
                        (this.startAngle = Tiny.radian2deg(u.rotation)));
                    };
                    return (
                      l.on("pointerdown", function (e) {
                        e.stopPropagation();
                        var t = e.data.getLocalPosition(this.parent),
                          n = t.x,
                          i = t.y;
                        (this.activated = true),
                          (this.lastX = n),
                          (this.lastY = i),
                          (this.startAngle = Tiny.radian2deg(u.rotation));
                      }),
                      l.on("pointermove", function (e) {
                        if (
                          !(
                            e.data.originalEvent.touches &&
                            e.data.originalEvent.touches.length > 1
                          ) &&
                          this.activated
                        ) {
                          var t = e.data.getLocalPosition(this.parent),
                            n = t.x,
                            i = t.y,
                            r = c(this.lastX, this.lastY, n, i),
                            a = normalizeRotate(
                              Math.round(this.startAngle + r)
                            );
                          u.setRotation(Tiny.deg2radian(a));
                        }
                      }),
                      l.on("pointerup", d),
                      l.on("pointercancel", d),
                      l.on("pointerupoutside", d),
                      l
                    );
                  },
                },
                {
                  key: "createRemove",
                  value: function (e, t) {
                    var n = this,
                      i = this.$removeOpt.sprite,
                      r = g(icons["remove"], 3),
                      o = r[0],
                      s = r[1],
                      l = r[2],
                      c =
                        i && i instanceof Tiny.Sprite
                          ? i
                          : Tiny.Sprite.fromImage(o);
                    return (
                      (this.$icons["remove"] = c),
                      c.setAnchor(0.5),
                      c.setPosition((e / 2) * s, (t / 2) * l),
                      c.setEventEnabled(true),
                      c.on("pointerdown", function (e) {
                        e.stopPropagation();
                      }),
                      c.on("pointerup", function (e) {
                        n.emit("remove:touchend", e);
                      }),
                      c
                    );
                  },
                },
                {
                  key: "createFlipX",
                  value: function (e, t) {
                    var n = this,
                      i = this.$flipxOpt.sprite,
                      r = g(icons["flipx"], 3),
                      o = r[0],
                      s = r[1],
                      l = r[2],
                      c =
                        i && i instanceof Tiny.Sprite
                          ? i
                          : Tiny.Sprite.fromImage(o),
                      u = this.$sprite;
                    return (
                      (this.$icons["flipx"] = c),
                      c.setAnchor(0.5),
                      c.setPosition((e / 2) * s, (t / 2) * l),
                      c.setEventEnabled(true),
                      c.on("pointerdown", function (e) {
                        e.stopPropagation();
                      }),
                      c.on("pointerup", function (e) {
                        (u.scale.x *= -1), n.emit("flipx:touchend", e);
                      }),
                      c
                    );
                  },
                },
                {
                  key: "createFlipY",
                  value: function (e, t) {
                    var n = this,
                      i = this.$flipyOpt.sprite,
                      r = g(icons["flipy"], 3),
                      o = r[0],
                      s = r[1],
                      l = r[2],
                      c =
                        i && i instanceof Tiny.Sprite
                          ? i
                          : Tiny.Sprite.fromImage(o),
                      u = this.$sprite;
                    return (
                      (this.$icons["flipy"] = c),
                      c.setAnchor(0.5),
                      c.setPosition((e / 2) * s, (t / 2) * l),
                      c.setEventEnabled(true),
                      c.on("pointerdown", function (e) {
                        e.stopPropagation();
                      }),
                      c.on("pointerup", function (e) {
                        (u.scale.y *= -1), n.emit("flipy:touchend", e);
                      }),
                      c
                    );
                  },
                },
                {
                  key: "addWidget",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 && undefined !== arguments[2]
                          ? arguments[2]
                          : [1, 1],
                      i =
                        arguments.length > 3 && undefined !== arguments[3]
                          ? arguments[3]
                          : {},
                      r = g(n, 2),
                      a = r[0],
                      o = r[1],
                      s =
                        t && t instanceof Tiny.Sprite
                          ? t
                          : Tiny.Sprite.fromImage(t),
                      l = this.$w,
                      c = this.$h;
                    (this.$icons[e] = s),
                      (v[e] = [t].concat(b(n))),
                      s.setAnchor(0.5),
                      s.setPosition((l / 2) * a, (c / 2) * o),
                      s.setEventEnabled(true),
                      s.on("pointerdown", i.onTouchStart || u),
                      s.on("pointermove", i.onTouchMove || u),
                      s.on("pointerup", i.onTouchEnd || u),
                      s.on("pointercancel", i.onTouchCancel || u),
                      s.on("pointerupoutside", i.onTouchCancel || u),
                      this.$container.addChild(s);
                  },
                },
              ]),
              classDef
            );
          })(Tiny.Container);
        function _(e, t, n) {
          var i = __assign({}, v, icons);
          for (var r in i) {
            var o = g(i[r], 3),
              s = o[1],
              l = o[2];
            e[r] && e[r].setPosition(t * s, n * l);
          }
        }
        function normalizeRotate(degree) {
          return (
            degree >= 360 ? (degree -= 360) : degree < 0 && (degree += 360),
            degree > 356 || degree < 4
              ? (degree = 0)
              : degree > 86 && degree < 94
              ? (degree = 90)
              : degree > 176 && degree < 184
              ? (degree = 180)
              : degree > 266 && degree < 274 && (degree = 270),
            degree
          );
        }
        return (
          (A.instancesPoll = []),
          (A.deactivateAll = function () {
            A.instancesPoll.forEach(function (e) {
              e.deactivate();
            });
          }),
          (A.constants = constants),
          A
        );
      });
    },
    tPIN: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.wrapper___37VP4{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.wrapper___37VP4 .container___3eMb3{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.wrapper___37VP4 .container___3eMb3 .closeBtn___3GRjc{height:.32rem;width:.32rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Qn5DSqriNqAAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:2;margin-top:.1rem}.wrapper___37VP4 .container___3eMb3 .img___1YPZC{height:4.125rem;width:2.8rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*Lz3_RrrO7M0AAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;background-position:50%;position:relative;z-index:2}',
          "",
        ]),
        (exports.locals = {
          wrapper: "wrapper___37VP4",
          container: "container___3eMb3",
          closeBtn: "closeBtn___3GRjc",
          img: "img___1YPZC",
        });
    },
    "v+xd": function (module, exports) {
      function n(e) {
        return Math.pow(0.5, e);
      }
      module.exports = function (e) {
        var t = e.records,
          i = e.start,
          r = e.timeout,
          a = e.load;
        if (0 === t.length) return "number" === typeof r ? r : 0;
        "number" === typeof a &&
          t.forEach(function (e) {
            var t = e.t,
              i = Math.abs(parseFloat(t) - a);
            e.weight = n(i / 1e3);
          });
        var o = t.map(function (e, n) {
            if (0 === n) return 0;
            var i = t[n - 1];
            return e.domCnt === i.domCnt
              ? 0
              : ((e.domCnt - i.domCnt) / (e.t - i.t)) *
                  ("number" === typeof e.weight ? e.weight : 1);
          }),
          s = Math.max.apply(null, o),
          l = o.indexOf(s);
        return t[l].t - i;
      };
    },
    wgR5: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          '.cover___lp70B{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;flex-direction:column;margin-top:.5rem;position:relative}.cover___lp70B .img___1Xxkj{margin-top:.6rem;height:2.35rem;width:3rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*OcAfQa3vhqkAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;z-index:2;pointer-events:none}.cover___lp70B .img___1Xxkj.start___s2fg6{height:2.29rem;width:2.675rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*rt2_Srmb62EAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat}.cover___lp70B .info___3M8JX{color:#ffe5ac;font-size:.16rem;margin-top:.41rem}.cover___lp70B .light1___xX8Lz{height:.26rem;width:.26rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*G5QlTrba59wAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;position:absolute;left:.23rem;top:.2rem}.cover___lp70B .light2___3KvpR{height:.26rem;width:.26rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*G5QlTrba59wAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;position:absolute;right:.2rem;top:3.13rem}.cover___lp70B .light3___2YC6P{height:.1rem;width:.1rem;background-image:url("https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*G5QlTrba59wAAAAAAAAAAAAAARQnAQ");background-size:contain;background-repeat:no-repeat;position:absolute;left:.6rem;top:3.84rem}',
          "",
        ]),
        (exports.locals = {
          cover: "cover___lp70B",
          img: "img___1Xxkj",
          start: "start___s2fg6",
          info: "info___3M8JX",
          light1: "light1___xX8Lz",
          light2: "light2___3KvpR",
          light3: "light3___2YC6P",
        });
    },
    x3Yt: function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__("FSXr")(false)),
        exports.push([
          module.i,
          ".smallFu___24Uqu{width:.5173rem;height:.66145rem;position:relative;background-image:url(https://gw.alipayobjects.com/zos/bmw-prod/52e9daff-4d4e-46df-8ea5-e2925b434078.svg)}.smallFu___24Uqu .title___zcHT3{position:absolute;left:.0174rem;top:.04195rem;width:.48rem;height:.355rem}.smallFu___24Uqu .fu___2JFkP{position:absolute;width:.305rem;height:.305rem;left:.10765rem;top:.26995rem}.smallFu___24Uqu.JING_YE___2dr5a{width:.7113rem;height:.9095rem}.smallFu___24Uqu.JING_YE___2dr5a .title___zcHT3{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*bx_mS5PYaHgAAAAAAAAAAAAAARQnAQ);top:.1822rem;left:.17545rem;width:.355rem;height:.17rem}.smallFu___24Uqu.JING_YE___2dr5a .fu___2JFkP{width:.43rem;height:.43rem;left:.1419rem;top:.3672rem}.smallFu___24Uqu.AI_GUO___3vKLH .title___zcHT3{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*F37kSIfHqkoAAAAAAAAAAAAAARQnAQ)}.smallFu___24Uqu.HE_XIE___37WSg .title___zcHT3{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*VZ57TaNQb1YAAAAAAAAAAAAAARQnAQ)}.smallFu___24Uqu.YOU_SHAN___GpM7p .title___zcHT3{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*xGvETYgYwMoAAAAAAAAAAAAAARQnAQ)}.smallFu___24Uqu.FU_QIANG___3DzYl .title___zcHT3{background-image:url(https://gw.alipayobjects.com/mdn/rms_4be1e1/afts/img/A*pbjAQ6qJaP4AAAAAAAAAAAAAARQnAQ)}",
          "",
        ]),
        (exports.locals = {
          smallFu: "smallFu___24Uqu",
          title: "title___zcHT3",
          fu: "fu___2JFkP",
          JING_YE: "JING_YE___2dr5a",
          AI_GUO: "AI_GUO___3vKLH",
          HE_XIE: "HE_XIE___37WSg",
          YOU_SHAN: "YOU_SHAN___GpM7p",
          FU_QIANG: "FU_QIANG___3DzYl",
        });
    },
    xJKY: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("L17G");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    ymJX: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("/WZG");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
    zHYq: function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var i =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      (exports.extend = o), (exports.copy = s);
      var r = __webpack_require__("jL/R"),
        a = r.detectType;
      function o() {
        var e = __webpack_require__("2zro");
        return e.apply(undefined, arguments);
      }
      function s(e) {
        if (!e || "object" !== ("undefined" === typeof e ? "undefined" : i(e)))
          return e;
        var t = a(e, "array") ? [] : {};
        return o(true, t, e), t;
      }
    },
    zKBT: function (module, exports, __webpack_require__) {
      var i = __webpack_require__("k6a/"),
        r = __webpack_require__("B6eM");
      function a() {
        var e = r(),
          t = navigator.userAgent.toLowerCase(),
          n = "",
          a = "",
          o = false;
        if (e.ios) {
          var s = /os [\d._]+/gi,
            l = t.match(s);
          n = (l + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
        }
        if (e.android) {
          var c = /android [\d._]+/gi,
            u = t.match(c);
          if (
            ((a = (u + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")),
            e.u4)
          ) {
            var d = t.match(/uws\/([\d.]+)/);
            o = !!d && i.gte(d[1], "3.18");
          }
        }
        return { ios: n, android: a, u4: e.u4, u430: o };
      }
      function o() {
        var e = a();
        (this.WebGL = false),
          (this.acceleration = true),
          (this.downgrade = false),
          (this.ios = e.ios),
          (this.android = e.android),
          (this.u4 = e.u4),
          (this.u430 = e.u430),
          (this.model = ""),
          (this.brand = "");
      }
      (o.prototype = {
        constructor: o,
        detect: function (e, t) {
          this.ios
            ? i.lt(this.ios, "9.0") || t
              ? (this.WebGL = false)
              : (this.WebGL = true)
            : this.android && this.u4
            ? ((this.WebGL = true),
              this.model && this.inBlacklist(e || []) && (this.WebGL = false),
              i.lt(this.android, "6.1") &&
                ((this.WebGL = false),
                i.eq(this.android, "5.0.2") &&
                  this.u430 &&
                  (this.acceleration = false)))
            : ((this.WebGL = false), (this.downgrade = true));
        },
        inBlacklist: function (e) {
          var t = this.model.toLocaleLowerCase(),
            n = this.brand.toLocaleLowerCase(),
            i = false;
          try {
            var r = e.map(function (e) {
              return e.toLocaleLowerCase();
            });
            i = r.some(function (e) {
              var i = " " + e.trim(),
                r = new RegExp("^" + n, "gi");
              return (
                e === t.trim() ||
                e === t.replace(r, "").trim() ||
                i === t.substr(t.lastIndexOf(i))
              );
            });
          } catch (e) {}
          return i;
        },
      }),
        (module.exports = o);
    },
    zkDJ: function (module, exports, __webpack_require__) {
      var i,
        r = __webpack_require__("llM9");
      "string" === typeof r && (r = [[module.i, r, ""]]);
      var a = { base: 0, convertToAbsoluteUrls: true, hmr: true };
      (a.transform = i), (a.insertInto = undefined);
      __webpack_require__("7B2p")(r, a);
      r.locals && (module.exports = r.locals);
    },
  })["default"];
});
