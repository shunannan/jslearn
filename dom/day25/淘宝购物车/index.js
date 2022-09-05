; (function () {

    var data = [
        { product: "裤子", price: 200, count: 2, isChecked: 1 },
        { product: "裤子", price: 100, count: 1, isChecked: 1 },
    ]

    localStorage.setItem("data",JSON.stringify(data));
    data = JSON.parse(localStorage.getItem("data")) || [];

    var mian = document.querySelector(".main");

    //页面渲染
    showPage()
    function showPage() {
        var str = '';
        data.forEach(function (item) {
            str += '<div class="item">' +
                '                <div>' +
                '                    <input type="checkbox">' +
                '                    <div class="icon"></div>' +
                '                    店铺：潮概论旗舰店' +
                '                    <div class="icon-gif"></div>' +
                '                </div>' +
                '                <div>' +
                '                    <input type="checkbox">' +
                '                    <div>' +
                '                        <img src="https://img.alicdn.com/bao/uploaded/i1/2201526595993/O1CN01BwNBG21u8qM3YYi9j_!!2201526595993.jpg_80x80.jpg"' +
                '                            alt="">' +
                '                        <div>' +
                '                            <p>' + item.product + '</p>' +
                '                            <div>' +
                '                                <img src="https://assets.alicdn.com/sys/common/icon/trade/xcard.png" alt="">' +
                '                                <img src="https://img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="">' +
                '                                <img src="https://img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" alt="">' +
                '                            </div>' +
                '                        </div>' +
                '                    </div>' +
                '                    <span>' +
                '                        <span>￥' + item.price + '</span>' +
                '                        <span>' +
                '                            <button>-</button>' +
                '                            <input type="text" value="' + item.count + '">' +
                '                            <button>+</button>' +
                '                        </span>' +
                '                        <span>￥' + item.price * item.count + '</span>' +
                '                        <a href="javascript:;">删除</a>' +
                '                    </span>' +
                '                </div>' +
                '            </div>';
        })
        mian.innerHTML = str;

        var shopCheck = document.querySelectorAll(".main .item>div:nth-of-type(1) input");
        var items = document.querySelectorAll(".item>div:nth-of-type(2)");
        var checkItem = document.querySelectorAll(".main .item>div:nth-of-type(2) input[type=checkbox]");
        var totalPrice = document.querySelector(".bottom .right b");
        var total = 0;
        // console.log(totalPrice);

        //判断商品是否被选中  
        checkItem.forEach(function (item, index) {
            if (data[index].isChecked == 1) {
                item.checked = shopCheck[index].checked = true;
                total += data[index].count * data[index].price;
                items[index].style.backgroundColor = "#fff9f6";
                items[index].style.border = "1px solid #ff3d00";
            }
            item.addEventListener("click", function () {
                data[index].isChecked = item.checked ? 1 : 0;
                localStorage.setItem("data", JSON.stringify(data));
                showPage()
            }, false)

        })

        //点击店铺选框
        shopCheck.forEach(function (item, index) {
            item.addEventListener("click", function () {
                data[index].isChecked = item.checked ? 1 : 0;
                localStorage.setItem("data", JSON.stringify(data));
                showPage()
            }, false)
        })
        totalPrice.innerHTML = total.toFixed(2);


        //监听全选
        var checkAll = document.querySelectorAll('input[type=checkbox]:not(.item input[type=checkbox])');
        checkAll.forEach(function (item, index) {
            item.checked = data.every(function (item) {
                return item.isChecked
            });
            item.onchange = function () {
                var that = this.checked;
                data.forEach(function (item) {
                    item.isChecked = that ? 1 : 0;
                    localStorage.getItem("data",JSON.stringify(data));
                    showPage()
                })
            }
        })


        //删除
        var del = document.querySelectorAll(".main .item div>span a");
        del.forEach(function(item,index) {
            item.addEventListener("click",function() {
                if (confirm("确定要删除该项商品吗？")) {
                    data.splice(index, 1);
                }
                localStorage.getItem("data",JSON.stringify(data));
                showPage()
            },false)
        })


        //全部删除
        var delAll = document.querySelector(".bottom .left a");
        delAll.onclick = function () {
            if (confirm("确定要删除该项商品吗？")) {
                data.splice(0);
            }
            localStorage.getItem("data",JSON.stringify(data));
            showPage()
        }


        //商品数量加
        var add = document.querySelectorAll(".main .item div>span span button:nth-of-type(2)");
        // console.log(add);
        add.forEach(function(item,index) {
            item.addEventListener("click",function() {
                data[index].count++;
                localStorage.setItem("data",JSON.stringify(data))
                showPage()
            },false)
        })


        //商品数量减
        var sub = document.querySelectorAll(".main .item div>span span button:nth-of-type(1)");
        sub.forEach(function(item,index) {
            if(data[index].count<=1) {
                item.disabled = true;
            }
            item.addEventListener("click",function() {
                if(data[index].count>1) {
                    data[index].count--;
                    localStorage.setItem("data",JSON.stringify(data))
                    showPage()
                }
            },false)
        })


        
        // 打开遮罩层
        var mask = document.querySelector(".mask");
        var btn = document.querySelector(".box .top a");
        // console.log(addGoods);
        btn.addEventListener("click",function() {
            mask.style.display = "flex";
        },false)

        //关闭遮罩层
        var close = document.querySelector(".mask .add-item div button:nth-of-type(2)");
        close.addEventListener("click",function() {
            mask.style.display = "none";
        },false)


        //添加商品
        var addGoods = document.querySelector(".mask .add-item div button:nth-of-type(1)");
        // console.log(addGoods);
        var product = document.querySelector(".add-item div div:nth-of-type(1) input")
        var price = document.querySelector(".add-item div div:nth-of-type(2) input")
        var count = document.querySelector(".add-item div div:nth-of-type(3) input");
        var isChecked = document.querySelector(".add-item div div:nth-of-type(4) input")
        // console.log(product);
        addGoods.onclick = function() {
            console.log(product.value.trim());
            if(product.value.trim().length<=0){
                alert("请输入商品名称");
                return
            }
            if(+price.value<=0 || isNaN(price.value) || price.value.trim().length<=0) {
                alert("请输入一个合法数字");
                return
            }
            
            if(count.value<=0) {
                alert("请选择商品数量");
                return;
            }
            isChecked = isChecked.checked?1:0
            var o = {
                product : product.value,
                price:+price.value,
                count:+count.value,
                isChecked
            }     
            data.push(o);
            product.value = count.value = price.value = '';
            isChecked.checked = true;  
            mask.style.display = "none";
            localStorage.setItem("data",JSON.stringify(data));
            showPage() 
        }


        //全部
        var goodsLength = data.length
        var qb = document.querySelector(".box .top span");
        qb.innerHTML = '购物车（全部'+goodsLength+'）'
    }   



})(); 