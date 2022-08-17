/*
    作用：
        获取dom元素
    参数：
        字符串类型的标签名或者类名，id名
*/
function $(el) {
    var dom = document.querySelectorAll(el)
    return dom.length > 1 ? dom : dom[0]
}

/*
    作用：
        给dom元素绑定点击事件
    参数：
        字符串类型的标签名或者类名，id名
*/
function click(el, callback) {
    var dom = $(el)
    if (dom.length > 1) {
        for (var i = 0; i < dom.length; i++) {
            dom[i].onclick = callback
        }
    } else {
        dom.onclick = callback
    }
}


/*
    作用：
        创建dom元素
    参数：
        一个的情况：
            传一个标签名    string
        两个的情况
            第一个：传一个标签名    string
            第二个：传一个标文本内容    string
        三个的情况：
            第一个：传一个标签名    string
            第二个：传一个标文本内容    string
            第三个：传一个属性      string
        四个的情况：
            第一个：传一个标签名    string
            第二个：传一个标文本内容    string
            第三个：传一个属性      string
            第四个：传一个属性的值      string
*/
function createEl() {
    if (arguments.length > 4 && arguments.length <= 0) return
    var el = document.createElement(arguments[0])
    var txt = document.createTextNode(arguments[1])
    if (arguments.length == 4) {
        el[arguments[2]] = arguments[3]
        el.appendChild(txt)
        return el
    } else if (arguments.length == 3) {
        el[arguments[2]] = ""
        el.appendChild(txt)
        return el
    } else if (arguments.length == 2) {
        el.appendChild(txt)
        return el
    } else {
        return el
    }
}