$(document).ready(function () {
    var newParse = (localStorage.getItem("notes"));
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var store = $(this).siblings(".description").attr("data-value");
        var listOfItems = {
            value: value,
            store: store
        };
        var list = localStorage.getItem("notes");
        if (!list) {
            list = []
        } else {
            list = JSON.parse(list);
        }
        list.push(listOfItems);
        localStorage.setItem("notes", JSON.stringify(list));
        console.log(listOfItems);
    })
    if (localStorage.getItem("notes") === null) {
        return false;
    } else {
        newParse = JSON.parse(newParse);
        $(".description").each(function () {
            for (var i = 0; i < newParse.length; i++) {
                if ($(this).attr("data-value") == newParse[i].store)
                    $(this).text(newParse[i].value);
            }
        })
    }
    })
    
    var storeCurrentHour = moment().hour(); // Number
    
    $(".time-block").each(function () {
        var time = parseInt($(this).find(".description").attr("data-value"))
        if (time < storeCurrentHour) {
            $(this).addClass("past")
        } else if (time === storeCurrentHour) {
                $(this).addClass("present")
                $(this).removeClass("past")
        } else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    })


