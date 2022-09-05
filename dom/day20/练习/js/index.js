(function () {
    var productData = [
        { id: 1001, name: 'iphone', price: 3000, isUp: "是", date: '2019-1-1' },
        { id: 1002, name: '小米', price: 7000, isUp: "否", date: '2019-9-1' },
        { id: 1003, name: '华为', price: 9000, isUp: "是", date: '2019-1-10' }
    ]

    //渲染数据
    dataShow()
    function dataShow() {
        var tbody = document.querySelector("tbody");

        var str = ""
        for (var i = 0; i < productData.length; i++) {
            var isUp = "上架"
            if (productData[i].isUp == "是") {
                isUp = "下架"
            }
            str += '<tr><td><input data-id="' + productData[i].id + '" type="checkbox" class="check"></td> \n' +
                '<td>' + productData[i].name + '</td> \n' +
                '<td>' + productData[i].price + '</td> \n' +
                '<td>' + productData[i].isUp + '</td> \n' +
                '<td>' + productData[i].date + '</td> \n' +
                '<td><button>' + isUp + '</button><button>' + '删除' + '</button></td> \n' +
                '</tr>'
        }

        tbody.innerHTML = str

        //显示遮罩层
        var open = document.getElementById("open");
        var wrapper = document.querySelector(".wrapper");
        var pname = document.querySelector(".pname")
        var pprice = document.querySelector(".pprice")
        var pup = document.querySelector(".pup")
        var ptime = document.querySelector(".ptime")
        open.onclick = function () {
            wrapper.style.display = "block";
        }

        //添加商品
        var addGoods = document.querySelector("#new-prod-btn")
        addGoods.onclick = function () {
            checkedAll.checked = false
            var id = 1001;
            id = productData[productData.length - 1].id + 1;
            var o = {
                id,
                name: pname.value,
                price: pprice.value,
                date: ptime.value
            }
            o.isUp = pup.checked ? "是" : "否"
            productData.push(o);
            pname.value = pprice.value = ptime.value = "";
            pup.checked = false
            wrapper.style.display = "none";
            dataShow()
        }
        //隐藏遮罩层
        var close = document.getElementById("close")
        close.onclick = function () {
            wrapper.style.display = "none";
        }


        // 操作商品是否上架
        var up = document.querySelectorAll("tr td button:nth-of-type(1)");
        for (var i = 0; i < up.length; i++) {
            up[i].onclick = function () {
                var tr = this.parentNode.parentNode.firstChild.firstChild;
                var id = +tr.getAttribute("data-id");
                console.log(tr);
                for (var j = 0; j < productData.length; j++) {
                    if (productData[j].id == id) {
                        productData[j].isUp = productData[j].isUp == "是" ? "否" : "是";
                        dataShow()
                        break;
                    }

                }
            }

        }

        //删除商品
        var del = document.querySelectorAll("tr td button:nth-of-type(2)");
        for (var i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                checkedAll.checked = false
                var tr = this.parentNode.parentNode.firstChild.firstChild;
                var id = +tr.getAttribute("data-id");
                for (var j = 0; j < productData.length; j++) {
                    if (productData[j].id == id) {
                        productData.splice(j, 1);
                        dataShow()
                        break;
                    }

                }
            }

        }

        //批量删除
        var pldel = document.querySelector(".pldel");
        var check = document.querySelectorAll(".check")
        pldel.onclick = function () {
            for (var i = 0; i < check.length; i++) {
                if (check[i].checked) {
                    var id = check[i].getAttribute("data-id");
                    for (var j = 0; j < productData.length; j++) {
                        if (productData[j].id == id) {
                            console.log(productData[j]);
                            productData.splice(j, 1);
                            dataShow()
                            break
                        }
                    }
                }
            }

        }


        //全选
        var checkedAll = document.querySelector("#all");
        checkedAll.onclick = function () {
            for (var i = 0; i < check.length; i++) {
                checkedAll.checked ? check[i].checked = true : check[i].checked = false

            }

        }

        for (var i = 0; i < check.length; i++) {
            check[i].onclick = function () {
                checkedAll.checked = true;
                for (var j = 0; j < check.length; j++) {
                    if (!check[j].checked) {
                        checkedAll.checked = false;
                    }
                }
            }
        }
    }
})()







