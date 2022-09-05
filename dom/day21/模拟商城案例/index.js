(function () {
    /* 
        第一步：渲染页面
        第二步：新增页面弹出
    */

    var productData = [
        { id: 1001, name: 'iphone', price: 3000, isUp: "是", date: '2019-1-1' },
        { id: 1002, name: '小米', price: 7000, isUp: "否", date: '2019-9-1' },
        { id: 1003, name: '华为', price: 9000, isUp: "是", date: '2019-1-10' }
    ]
    // 获取tbody
    var tbody = document.querySelector("tbody")
    // 渲染页面
    showData()

    var open = document.querySelector("#open")

    var wrapper = document.querySelector(".wrapper")

    // 打开遮罩层
    open.onclick = function () {
        wrapper.style.display = "block"
    }

    var newBtn = document.querySelector("#new-prod-btn")

    // 遮罩层的新增功能
    var pname = document.querySelector(".pname")
    var pprice = document.querySelector(".pprice")
    var pup = document.querySelector(".pup")
    var ptime = document.querySelector(".ptime")
    var id = 1001
    newBtn.onclick = function () {
        var o = {}
        o.id = productData[productData.length - 1].id + 1 || id
        o.name = pname.value
        o.price = pprice.value
        o.isUp = pup.checked ? "是" : "否"
        o.date = ptime.value
        productData.push(o)
        pname.value = pprice.value = ptime.value = ""
        pup.checked = false
        wrapper.style.display = "none"
        // 渲染页面
        showData()
    }

    var close = document.querySelector("#close")

    // 遮罩层取消功能
    close.onclick = function () {
        wrapper.style.display = "none"
        pname.value = pprice.value = ptime.value = ""
        pup.checked = false
    }

    // 渲染页面
    // showData()
    function showData() {
        var str = ""

        for (var i = 0; i < productData.length; i++) {
            var upBtn = "上架"
            if (productData[i].isUp == "是") {
                upBtn = "下架"
            }
            str += "<tr data-id=\"" + productData[i].id + "\">" +
                "     <td><input type=\"checkbox\" class=\"check\"></td>" +
                "     <td>" + productData[i].name + "</td>" +
                "     <td>" + productData[i].price + "</td>" +
                "     <td>" + productData[i].isUp + "</td>" +
                "     <td>" + productData[i].date + "</td>" +
                "     <td><button>" + upBtn + "</button><button>删除</button></td>" +
                "  </tr>";
        }

        tbody.innerHTML = str

        // 上架下架功能
        var topBtn = document.querySelectorAll("td button:nth-of-type(1)")

        for (var i = 0; i < topBtn.length; i++) {
            topBtn[i].onclick = function () {
                var tr = this.parentNode.parentNode

                var id = +tr.getAttribute("data-id")

                for (var j = 0; j < productData.length; j++) {
                    if (productData[j].id == id) {
                        if (productData[j].isUp == "是") {
                            productData[j].isUp = "否"
                        } else {
                            productData[j].isUp = "是"
                        }
                    }
                }
                showData()
            }
        }

        // 删除功能
        var delBtn = document.querySelectorAll("td button:nth-of-type(2)")

        for (var i = 0; i < delBtn.length; i++) {
            delBtn[i].onclick = function () {
                var tr = this.parentNode.parentNode

                var id = +tr.getAttribute("data-id")

                for (var j = 0; j < productData.length; j++) {
                    if (productData[j].id == id) {
                        productData.splice(j, 1)
                        showData()
                        break;
                    }
                }
            }
        }



        var allCheck = document.querySelector("#all")

        var checkItems = document.querySelectorAll(".check")

        // 全选
        allCheck.onclick = function () {
            for (var i = 0; i < checkItems.length; i++) {
                checkItems[i].checked = this.checked
            }
        }


        // 监听全选
        for (var i = 0; i < checkItems.length; i++) {
            checkItems[i].onclick = function () {
                for (var j = 0; j < checkItems.length; j++) {
                    allCheck.checked = true
                    if (!checkItems[j].checked) {
                        allCheck.checked = false
                        break;
                    }
                }
            }
        }


        var pldel = document.querySelector(".pldel")

        pldel.onclick = function () {
            for (var i = 0; i < checkItems.length; i++) {
                if (checkItems[i].checked) {
                    var tr = checkItems[i].parentNode.parentNode

                    var id = +tr.getAttribute("data-id")

                    for (var j = 0; j < productData.length; j++) {
                        if (productData[j].id == id) {
                            productData.splice(j, 1)
                            showData()
                            break;
                        }
                    }
                }
            }
        }


    }
})()