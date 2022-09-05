/* 
  $方法:
    获取dom对象
    参数:1.选择器的字符串
*/
function $(select) {
  var doms = document.querySelectorAll(select)
  return doms.length > 0 ? doms.length === 1 ? doms[0] : doms : null
}



/* 
  click:
    给元素绑定事件
    参数:1.需要绑定的dom元素 
         2.回调函数
*/
function click(el, callback) {
  if (!el || el.length <= 0) return
  el = el.length ? Array.from(el) : [el]
  for (var i = 0; i < el.length; i++) {
    el[i].onclick = callback
  }
}

/* 
  oElement:
    操作dom增删改
      参数：1.add | remove | replace
            2.操作dom元素的父元素
            3. add - 需要添加的元素字符串  
                remove - 需要删除的dom元素
                  replace - 需要替换的dom元素
            4.只有replace才有 更新以后的元素字符串
*/
function oElement() {
  var params = Array.from(arguments)
  if (params[0] === 'add') return params[1].insertAdjacentHTML('beforeend', params[2])
  if (params[0] === 'remove') return params[1].removeChild(params[2])
  if (params[0] !== 'replace') { throw new Error("第一个参数有问题") }
  var n = params[2].nextElementSibling
  var nextSb = n || params[1]
  nextSb.insertAdjacentHTML(n ? 'beforebegin' : 'beforeend', params[3])
  params[2].remove()
}


/*  
  getStyle
     获取样式
      参数1:需要获取样式的dom元素
      参数2:需要获取样式的名称
 */
function getStyle(el, style) {
  if (window.getComputedStyle) {
    // 非ie8以下
    return window.getComputedStyle(el)[style]
  } else {
    // ie8及以下
    return el.currentStyle[style]
  }
}
/* 
 css:
   可以获取样式和设置样式
     参数1：需要操作样式的dom元素
     参数2:string | object 
         -如果没有参数3并且参数2是string类型的时候表示的是读取样式
         -如果参数2是对象的时候表示设置多个样式
     参数3：
       stirng | number
         如果有参数3第2个参数必须是样式名 参数3就是样式值
*/
function css() {
  // 属性是数字不用带px的样式
  var styAttr = ['opacity', 'zIndex']
  // 参数集合
  var agm = arguments
  // 参数长度
  var len = arguments.length
  // 获取样式
  if (len === 2 && typeof agm[1] === "string") return getStyle(agm[0], agm[1])
  // 设置样式的两种情况
  var styObj = len === 3 ? { [agm[1]]: agm[2] } : styObj = agm[1]
  for (var key in styObj) {
    agm[0].style[key] = typeof styObj[key] === "number" && !styAttr.includes(key) ? styObj[key] + "px" : styObj[key]
  }
}


/* 
 hasClass(el, cName)
    功能：判断是否有指定的类名 有返回true 没有就返回false
      参数:
         el：需要判断dom元素 cName：类名字符串
*/
function hasClass(el, cName) {
  return el.className.split(" ").includes(cName)
}

/* 
 addClass(el, cName)
    功能：添加指定的类名
      参数:
         el：需要判断dom元素 cName：类名字符串
*/
function addClass(el, cName) {
  if (hasClass(el, cName)) return
  el.className += el.className.length <= 0 ? cName : ' ' + cName
}

/* 
 removeClass(el, cName)
    功能：删除指定的类名
      参数:
         el：需要判断dom元素 cName：类名字符串
*/
function removeClass(el, cName) {
  if (!hasClass(el, cName)) return
  var cArr = el.className.split(" ")
  var index = cArr.indexOf(cName)
  cArr.splice(index, 1)
  el.className = cArr.join(" ")
}

/* 
 toggelClass(el, cName)
    功能：切换指定的类名
      参数:
         el：需要判断dom元素 cName：类名字符串
*/
function toggelClass(el, cName) {
  hasClass(el, cName) ? removeClass(el, cName) : addClass(el, cName)
}
