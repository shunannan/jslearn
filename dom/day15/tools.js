/* 
  功能：获取dom元素
    参数；selectStr 选择器字符串
*/
function $(selectStr) {
  var doms = document.querySelectorAll(selectStr)
  return doms.length === 1 ? doms[0] : doms
}

/* 
  功能:给元素绑定单击事件
    参数：selectStr 选择器  callback 回调函数
*/
function click(selectStr, callback) {
  var doms = $(selectStr)
  doms = doms.length ? doms : [doms]
  for (var i = 0; i < doms.length; i++) {
    doms[i].onclick = callback
  }
  // 版本1
  // if(doms.length > 1){
  //   // doms 集合对象
  //   for(var i = 0; i < doms.length; i++){
  //     doms[i].onclick = callback
  //   }
  // }else{
  //   // doms 1个按钮
  //   doms.onclick = callback
  // }
  // console.log(doms)
  // console.log(dom)
  // dom.onclick = callback
}

/* 
  功能：创建dom元素
    参数：1.dom元素的名称
         2.dom元素的内容 | dom元素属性
         3.dom元素的属性
*/
function createEl() {
  // dom元素的名称 
  var dom = document.createElement(arguments[0])
  var txt = typeof arguments[1] === "string" ? document.createTextNode(arguments[1]) : null
  var params = txt ? dom.appendChild(txt) : arguments[1]
  params = arguments[2] || params
  if (params && !params.nodeType) {
    // 属性对象形式
    for (var key in params) {
      if (key === "class") {
        params['className'] = params[key]
        delete params['class']
      }
    }
    for (var key in params) {
      dom[key] = params[key]
    }
  }
  return dom
}

/*  功能： 获取dom样式
      参数1:dom元素
      参数2:样式名
*/
function getStyle(el, styleName) {
  var styValue;
  if (window.getComputedStyle) {
    // 函数体 其它浏览器
    styValue = window.getComputedStyle(el)[styleName]
  } else {
    //undefined ie8及以下
    styValue = el.currentStyle[styleName]
  }
  return styValue
}

/* 
  功能：获取样式和设置样式
    参数1: dom元素
    参数2: 样式名（样式名字符串 读）| 对象(样式名和样式值 设置)
*/
function css(el, style) {
  if (typeof style === 'string') return getStyle(el, style)
  var noPxArr = ['opacity', 'zIndex']
  for (var key in style) {
    el.style[key] = typeof style[key] === "number" && noPxArr.indexOf(key) === -1 ? style[key] + "px" : style[key]
  }
}


/* 
     功能：用来判断某个元素中是否有指定的类名
       参数:1.需要判断的dom元素
            2.类名
*/
function hasClass(el, className) {
  var cnames = el.className
  var cArr = cnames.split(" ")
  return cArr.includes(className)
}


/* 
  功能：添加类名
    参数：1.需要添加的dom元素
          2.需要添加的类名
*/
function addClass(el, className) {
  if (hasClass(el, className)) return
  el.className += " " + className
}

/* 
  功能:删除类名
    参数：1.需要删除的dom元素
          2.需要删除的类名
*/
function removeClass(el, className) {
  var cname = el.className
  var cArr = cname.split(" ")
  var index = cArr.indexOf(className)
  if (index === -1) return
  cArr.splice(index, 1)
  box.className = cArr.join(" ")
}
/* 
 功能:切换类名
   参数：1.需要切换的dom元素
         2.需要切换的类名
*/
function toggleClass(el, className) {
  hasClass(el, className) ? removeClass(el, className) : addClass(el, className)
}