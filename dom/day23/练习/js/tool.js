(function () {
    var addEmpButton = document.querySelector("#addEmpButton");
    console.log();
    var empName, email, salary
    var tbody = document.querySelector("tbody");
    addEmpButton.addEventListener("click", function () {
        empName = document.getElementById("empName")
        email = document.getElementById("email")
        salary = document.getElementById("salary")
        tbody.insertAdjacentHTML("beforeend",
            `<tr>
                <td>${empName.value}</td>
                <td>${email.value}</td>
                <td>${salary.value}</td>
                <td><a href="javascript:;">Delete1</a></td>
            </tr>`)


        //删除
        var trs = document.querySelectorAll("#employeeTable tr:not(#employeeTable tr:nth-of-type(1))");
        // console.log(trs);
        var del = document.querySelectorAll("#employeeTable tr a");
        del.forEach(function (item, index) {
            item.addEventListener("click", function () {
                // trs[index].remove()
                item.parentNode.parentNode.remove()
                console.log(111);
            }, true)

        });
        // del.forEach(function (item) {
        //     item.addEventListener('click', function () {
        //         // if (confirm("删除后不可恢复，确认要删除吗？") == true) {
        //             item.parentNode.parentNode.remove()
        //             console.log(111);
        //         // }
        //     }, false)
        // })
    }, false);




    var del = document.querySelectorAll("#employeeTable tr a");
    var trs = document.querySelectorAll("#employeeTable tr:not(#employeeTable tr:nth-of-type(1))");
    del.forEach(function (item, index) {
        item.addEventListener("click", function () {
            trs[index].remove()
        }, true)
    });
})()