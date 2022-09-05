var data = [{
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
}];

//数据渲染
showData()

function showData() {

    str = "";
    var noData = document.querySelector(".noData").outerHTML
    var main = document.querySelector("main");
    for (var i = 0; i < data.length; i++) {
        str += ['<div class="item" data-id = "' + data[i].id + '">',
            '      <div class="left">',
            '        <input type="checkbox" />',
            '        <img',
        '          src="' + data[i].imgUrl + '"',
            '          alt="">',
        '        <span>' + data[i].pName + '</span>',
            '      </div>',
            '      <div class="right">',
        '        <span style="font-size: 13px;">' + data[i].price + '</span>',
            '        <div>',
            '          <button class="changeNum">-</button>',
        '          <input type="text" value="' + data[i].count + '">',
            '          <button class="changeNum">+</button>',
            '        </div>',
        '        <span style="font-size: 13px; font-weight: bold;">' + (data[i].price * data[i].count) + '</span>',
            '        <a href="javascript:;">删除</a>',
            '      </div>',
            '    </div>'].join("");
    }
    main.innerHTML = noData + str;

    //判断是否为选中
    var goodItems = document.querySelectorAll(".item")
    var totalPrice = document.querySelector(".totalPrice");
    var id, total
    if (data.length == 0) {
        total = 0;
        noData = document.querySelector(".noData")
        noData.style.display = "block";
        // allCheck[0].checked = allCheck[1].checked = false;
    } else {
        for (var i = 0; i < goodItems.length; i++) {
            id = goodItems[i].getAttribute("data-id");
            total = 0

            for (var j = 0; j < data.length; j++) {
                if (data[j].isChecked == 1) {
                    total += data[j].price * data[j].count;
                }
                if (data[j].id == id) {
                    // data[j].isChecked == 1 ? goodItems[i].style.backgroundColor = "pink" : goodItems[i].style.backgroundColor = "#f3f3f3";
                    data[j].isChecked == 1 ? goodItems[i].firstElementChild.firstElementChild.checked = true : goodItems[i].firstElementChild.firstElementChild.checked = false;
                    break
                }
            }
        }
    }

    totalPrice.innerHTML = "￥" + total;


    //显示遮罩层
    var zzc = document.querySelector(".zzc");
    var addP = document.querySelector(".addP");
    addP.onclick = function () {
        zzc.style.display = "flex";
    }

    //添加商品
    var sub = document.querySelector(".submit");
    var pName = document.querySelector(".pName")
    var pPrice = document.querySelector(".pPrice")
    var pCount = document.querySelector(".pCount")
    var yes = document.querySelector('label input[value="1"]');
    sub.onclick = function () {
        var id = 1000;
        id = data[data.length - 1].id + 1;
        var o = {
            id,
            pName: pName.value,
            imgUrl: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/212004/1/260/129963/6167866fE8a7a6787/b939c3c7742d17b7.jpg.dpg',
            count: +pCount.value,
            price: +pPrice.value
        }
        o.isChecked = yes.checked ? 1 : 0
        data.push(o);
        console.log(o);
        pName.value = pPrice.value = pPrice.value = pCount.value = '';
        yes.checked = true;
        zzc.style.display = "none";
        showData()
    }

    //隐藏遮罩层
    var close = document.querySelector(".close");
    close.onclick = function () {
        zzc.style.display = "none";
    }


    //全选
    var allCheck = document.querySelectorAll(".allCheck");
    var check = document.querySelectorAll(".item .left input[type='checkbox']");
    for (var i = 0; i < allCheck.length; i++) {
        allCheck[i].onclick = function () {
            for (var z = 0; z < allCheck.length; z++) {
                allCheck[z].checked = this.checked
            }
            for (var j = 0; j < data.length; j++) {
                if (this.checked) {
                    data[j].isChecked = 1;
                    goodItems[j].style.backgroundColor = "pink"
                } else {
                    data[j].isChecked = 0;
                    goodItems[j].style.backgroundColor = "#f3f3f3"
                }
            }
            showData()
        }
    }


    if (data.length == 0) {
        allCheck[0].checked = allCheck[1].checked = false;
    }


    //选中变色
    for (var i = 0; i < check.length; i++) {
        check[i].checked ? goodItems[i].style.backgroundColor = "pink" : goodItems[i].style.backgroundColor = "#f3f3f3"
        check[i].onclick = function () {
            id = this.parentNode.parentNode.getAttribute("data-id");
            for (var j = 0; j < data.length; j++) {
                if (data[j].id == id) {
                    if (this.checked) {
                        data[j].isChecked = 1;
                    } else {
                        data[j].isChecked = 0;
                    }
                    break;
                }
            }
            allCheck[0].checked = allCheck[1].checked = true;
            for (var k = 0; k < check.length; k++) {
                if (!check[k].checked) {
                    // for (var z = 0; z < allCheck.length; z++) {
                    //     allCheck[z].checked = false;
                    // }
                    allCheck[0].checked = allCheck[1].checked = false;
                }
            }
            showData()
        }

    }


    //加
    var add = document.querySelectorAll(".item .right button:nth-of-type(2)")
    var subtract = document.querySelectorAll(".item .right button:nth-of-type(1)")
    for (var i = 0; i < add.length; i++) {
        add[i].onclick = function () {
            var itemDiv = this.parentNode.parentNode.parentNode;
            var id = +itemDiv.getAttribute("data-id");
            for (var j = 0; j < data.length; j++) {
                if (data[j].id == id) {
                    data[j].count += 1
                    showData()
                }

            }
        }

    }


    //减
    for (var i = 0; i < add.length; i++) {
        subtract[i].onclick = function () {
            var itemDiv = this.parentNode.parentNode.parentNode;
            var id = +itemDiv.getAttribute("data-id");
            for (var j = 0; j < data.length; j++) {
                if (data[j].id == id) {
                    if (data[j].count == 0) {
                        subtract.disabled = true
                    } else {
                        data[j].count -= 1
                        showData()
                    }

                }

            }
        }

    }


    //删除
    var del = document.querySelectorAll(".item .right a");

    for (var i = 0; i < del.length; i++) {
        del[i].onclick = function () {

            id = this.parentNode.parentNode.getAttribute("data-id");
            for (var j = 0; j < data.length; j++) {
                if (data[j].id == id) {
                    data.splice(j, 1);
                    showData()
                    break;
                }

            }

        }
    }

    // 全部删除
    var delAll = document.querySelector(".delAll");
    var zzc2 = document.querySelector(".zzc2")
    var delTrue = document.querySelector(".delTrue")
    var delfalse = document.querySelector(".delfalse")

    delAll.onclick = function () {
        zzc2.style.display = "flex";
    }
    delfalse.onclick = function () {
        zzc2.style.display = "none";
    }
    delTrue.onclick = function () {
        zzc2.style.display = "none";
        allCheck[0].checked = allCheck[1].checked = false;
        data = [];
        showData()
    }

}

//返回拖拽
var iconback = document.querySelector(".iconback");
console.log(iconback);
// box添加鼠标按下事件
iconback.onmousedown = function (event) {
    // 计算div距离窗口位置减去鼠标坐标位置
    var a = iconback.offsetLeft - event.clientX
    var b = iconback.offsetTop - event.clientY
    //  鼠标移动事件
    document.onmousemove = function (event) {
        //保存鼠标xy轴坐标
        var X = event.clientX
        var Y = event.clientY
        // 给div 做样式
        iconback.style.left = X + a + 'px'
        iconback.style.top = Y + b + 'px'
    }

    //鼠标抬起事件
    iconback.onmouseup = function () {
        document.onmousemove = null

        //返回本来位置
        iconback.style.right = '200px'
        iconback.style.button = '200px'

    }
}