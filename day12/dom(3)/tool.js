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