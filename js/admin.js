$(function () {
    $(".btn-danger").click(function () {
        var data = $(this).data("deleteid");
        $("tr[data-listid='" + data + "']").hide();

    });
    $(".btn-primary").click(function () {
        var data2 = $(this).data("infoid");
        $("tr[data-listid='" + data2 + "']").css("background-color", "#6495ED");
    });


})