document.querySelector(".login").onclick = function()
{
    document.querySelector(".page-home").style.display = "none";
    document.querySelector(".page-login").style.display = "block";
    document.querySelector(".breadcrumb-tweet").style.display = "block";
    document.querySelector(".breadcrumb-home").style.opacity = ".5"
}
document.querySelector(".breadcrumb-home").onclick = function()
{
    document.querySelector(".page-home").style.display = "block";
    document.querySelector(".page-login").style.display = "none";
    document.querySelector(".breadcrumb-tweet").style.display = "none";
    document.querySelector(".breadcrumb-home").style.opacity = "1"
}