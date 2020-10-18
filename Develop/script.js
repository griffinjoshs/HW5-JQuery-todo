$(document).ready(function () {

var newParse = (localStorage.getItem("notes"));



$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var store = $(this).siblings(".description").attr("data-value");

    var listOfItems = {
        value: value,
        store: store
    };

    var grandList = localStorage.getItem("notes");

    if (!grandList) {
        grandList = []
    } else {
        grandList = JSON.parse(grandList);
    }

    grandList.push(listOfItems);

    localStorage.setItem("notes", JSON.stringify(grandList));

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



