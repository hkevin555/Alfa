$(document).ready(function () {
  $("#btnSubmit").click(function () {
    alert("Nice to meet you!");

    let $userName = $("#userName").val();


    $("#userMsg").text("Hello, " + $userName);
  });
});