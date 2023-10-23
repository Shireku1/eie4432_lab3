$(document).ready(function () {
    var bookedtable = JSON.parse(localStorage.getItem(bookedtable)) || [];
    var tableID = ""
    $(".table").each(function () {
        if (bookedtable.includes($(this).attr("id"))) {
            $(this).addClass("booked");
        }
    });
    $(".table").on("click", function () {
        tableID = $(this).attr("id");

        if (bookedtable.includes(tableID)) {
            alert("This table is already booked.")
        } else {
            $("#response > :button").removeClass("d-none");
            $("#response > p").text("Do you want to book Table " + tableID + "?");
        }
    });
    $("#confirm-btn").on("click", function () {
        bookedtable.push(tableID);
        localStorage.setItem("bookedtable", JSON.stringify(bookedtable));
        $(`#${tableID}`).addClass("booked");
        resetres();
    });
    $("#dismiss-btn").on("click", function () {
        resetres();
    });
});

const resetres = () => {
    $("#response > p").text("Click a Table to book");
    $("#response > :button").addClass("d-none");
}