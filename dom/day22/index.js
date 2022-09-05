(function () {
    var data = [
        {
            id: 1000,
            pName: '美的(Midea) 新能效 锐爽 大3匹 智能家电 变频冷暖 客厅圆柱空调立式柜机 智控温 以旧换新 KFR-72LW/N8MJC3',
            imgUrl: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/212004/1/260/129963/6167866fE8a7a6787/b939c3c7742d17b7.jpg.dpg',
            count: 1,
            price: 2010,
            isChecked: 1
        },
        {
            id: 1001,
            pName: '隔离 新能效 锐爽 大3匹 智能家电 变频冷暖 客厅圆柱空调立式柜机 智控温 以旧换新 KFR-72LW/N8MJC3',
            imgUrl: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/212004/1/260/129963/6167866fE8a7a6787/b939c3c7742d17b7.jpg.dpg',
            count: 2,
            price: 1010,
            isChecked: 0
        },
    ]


    var main = document.querySelector("main.w")

    var iconback = document.querySelector(".iconback")

    var left = iconback.offsetLeft
    var top = iconback.offsetTop


    showPage()
    function showPage() {
        var str = ''
        if (data.length == 0) {
            main.innerHTML = '<div class="noData">购物车为空...</div>'
        } else {
            for (var i = 0; i < data.length; i++) {
                str += '<div class="item" data-id=' + data[i].id + '>' +
                    '      <div class="left">' +
                    '        <input type="checkbox" />' +
                    '        <img' +
                    '          src="' + data[i].imgUrl + '"' +
                    '          alt="">' +
                    '        <span>' + data[i].pName + '</span>' +
                    '      </div>' +
                    '      <div class="right">' +
                    '        <span style="font-size: 13px;">￥' + data[i].price + '</span>' +
                    '        <div>' +
                    '          <button class="changeNum">-</button>' +
                    '          <input type="text" value="' + data[i].count + '">' +
                    '          <button class="changeNum">+</button>' +
                    '        </div>' +
                    '        <span style="font-size: 13px; font-weight: bold;">￥' + data[i].price * data[i].count + '</span>' +
                    '        <a href="javascript:;">删除</a>' +
                    '      </div>' +
                    '    </div>';
            }
            main.innerHTML = str
        }


        var checkItem = document.querySelectorAll(".item .left input")
        // 判断是否选中
        checkItem.forEach(function (item, index) {
            item.parentNode.parentNode.style.backgroundColor = data[index].isChecked ? "pink" : "";
            item.checked = data[index].isChecked ? true : false
            item.onclick = function () {
                // var id = this.parentNode.parentNode.getAttribute("data-id")
                // var index = data.findIndex(function (item) {
                //     return item.id == id
                // })
                // data[index].isChecked = this.checked ? 1 : 0
                // showPage()
                var items = document.querySelectorAll(".item")
                var a = Array.from(items)[index].getAttribute("data-id")
                console.log(id);
            }
        });


        var changeNum = document.querySelectorAll(".changeNum")
        // 判断加减
        changeNum.forEach(function (item) {
            item.onclick = function () {
                var id = this.parentNode.parentNode.parentNode.getAttribute("data-id")
                var index = data.findIndex(function (item) {
                    return item.id == id
                })
                if (this.innerHTML == "+") {
                    data[index].count++
                } else {
                    if (data[index].count > 0) {
                        data[index].count--
                    }
                }
                showPage()
            }
        })

        var totalPrice = document.querySelector(".totalPrice")
        // 总价

        totalPrice.innerHTML = "￥" + data.reduce(function (pre, item) {
            return item.isChecked ? pre + item.price * item.count : pre
        }, 0)


        var allCheck = document.querySelectorAll(".allCheck")
        // 监听全选
        allCheck.forEach(function (item) {
            item.checked = data.every(function (item) {
                return item.isChecked
            })
            item.onchange = function () {
                var thet = this
                data.forEach(function (item) {
                    item.isChecked = thet.checked ? 1 : 0
                })
                showPage()
            }
        })



        // 删除
        var del = document.querySelectorAll("main .right a")
        del.forEach(function (item) {
            item.onclick = function () {
                var id = this.parentNode.parentNode.getAttribute("data-id")
                var index = data.findIndex(function (item) {
                    return item.id == id
                })
                if (confirm("确定要删除该项商品吗？")) {
                    data.splice(index, 1)
                }
                showPage()
            }
        })


        var addP = document.querySelector(".addP")

        var zzc = document.querySelector(".zzc")

        var close = document.querySelector(".close")

        var submit = document.querySelector(".submit")
        // 添加商品
        addP.onclick = function () {
            zzc.style.display = "flex"

            submit.onclick = function () {
                var pName = document.querySelector(".pName")
                var pPrice = document.querySelector(".pPrice")
                var pCount = document.querySelector(".pCount")
                var isChecked = document.querySelector("input[name=isC]").checked

                if (pName.value.trim().length <= 0) {
                    alert("商品名称不能为空")
                    return
                }
                if (pPrice.value < 0 || pPrice.value.trim().length <= 0 || isNaN(pPrice.value)) {
                    alert("价格必须是一个合法数字")
                    return
                }

                isChecked = isChecked ? 1 : 0

                var id = data.length == 0 ? 1001 : data[data.length - 1].id + 1

                var o = {
                    id: id,
                    pName: pName.value,
                    imgUrl: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/212004/1/260/129963/6167866fE8a7a6787/b939c3c7742d17b7.jpg.dpg',
                    count: +pCount.value,
                    price: +pPrice.value,
                    isChecked: isChecked
                }
                pName.value = pPrice.value = pCount.value = ""
                data.push(o)
                showPage()
                zzc.style.display = "none"
            }
        }
        // 关闭遮罩层
        close.onclick = function () {
            var pName = document.querySelector(".pName")
            var pPrice = document.querySelector(".pPrice")
            var pCount = document.querySelector(".pCount")
            pName.value = pPrice.value = pCount.value = ""
            zzc.style.display = "none"
        }


        // 回到顶部
        iconback.onclick = function () {
            document.documentElement.scrollTop = 0
        }


        // 拖拽
        iconback.onmousedown = function (event) {
            // 计算iconback距离左边的位置 减去 鼠标坐标位置  水平方向
            var l = iconback.offsetLeft - event.clientX
            // 计算iconback距离左边的位置 减去 鼠标坐标位置  垂直方向
            var t = iconback.offsetTop - event.clientY
            // 给document添加鼠标移动事件
            document.onmousemove = function (event) {
                // 保存鼠标坐标 X轴
                var X = event.clientX
                // 保存鼠标坐标 Y轴
                var Y = event.clientY
                // 给iconback做样式      鼠标坐标减去l
                iconback.style.left = X + l + "px"
                // 给iconback做样式      鼠标坐标减去t
                iconback.style.top = Y + t + "px"
            }
            // iconback添加鼠标抬起事件
            iconback.onmouseup = function () {
                // 清除document的鼠标移动事件
                document.onmousemove = null
                // 鼠标抬起回到左上角
                iconback.style.left = left + "px"
                iconback.style.top = top + "px"
            }
        }
    }

})()