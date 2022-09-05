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


/*
    作用：
        获取dom元素并且添加样式
            第一个值：
                要获取并且添加样式的方法（id，class，标签...）
            第二个值：
                要添加的样式
            第三个值：
                样式的值
*/
function css(el, sty, str) {
    var dom = $(el)
    var arr = ["z-index", "opcity", "flex"]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== sty && +str) {
            dom.style[sty] = str + "px"
        } else {
            dom.style[sty] = str
        }
    }
}



/* 
  Cookie:
    功能:对cookie进行一些增删改查的操作
      增该:Cookie.set({key:value},有效期)
      删:Coolie.remove(key)
      查:Coolie.get(key)
*/
var Cookie = {
    set: function (obj, date) {
        var dt = new Date()
        var t = dt.getTime() + date * 24 * 60 * 60 * 1000
        dt.setTime(t)
        for (var key in obj) {
            document.cookie = key + "=" + obj[key] + ";expires=" + dt.toUTCString()
        }
    },
    get: function (key) {
        var obj = {}
        var cookies = document.cookie
        var arr = cookies.split(";")
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i].trim().split("=")
            obj[item[0]] = item[1]
        }
        return obj[key]
    },
    remove: function (value) {
        this.set({ [value]: "xxx" }, -1)
    }
}