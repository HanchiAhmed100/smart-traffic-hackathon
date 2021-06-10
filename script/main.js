$(document).ready(function () {
    $(window).scroll(function () {

        $(".navbar-inverse").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
    });
});
