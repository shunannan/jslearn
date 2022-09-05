(function () {
    var sub = document.getElementById("submit");
    var nick, message, time
    var ul = document.querySelector(".container ul");
    sub.addEventListener("click", function () {
        nick = document.getElementById("nick")
        message = document.getElementById("message")
        time = getNowTime()
        ul.insertAdjacentHTML("afterbegin",
            `<li>
                <p class="up">
                    <span class="nick">${nick.value}</span>
                    <span class="time">${time}</span>
                </p>
                <p class="down">
                    <span class="message">${message.value}</span>
                    <span class="del">删除</span>
                </p>
            </li>`
        )
        nick.value = message.value = '';

        //删除
        var del = document.querySelectorAll(".del");
        var li = document.querySelectorAll("li");
        del.forEach(function (item,index) {
            item.addEventListener("click", function () {
                li[index].remove()
            }, true)
        });
    }, false)

    function getNowTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        s = s < 10 ? "0" + s : s
        return [h, m, s].join(":");
    }


})()