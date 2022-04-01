function rootobject() {
    alert("Using RootObject-window");
}
window.rootobject();
alert(window.innerHeight);
document.body.style.background = "blue";
setTimeout(() => document.body.style.background = "",600);
alert(location.href);
if (confirm("Go To Youtube ?")) {
  location.href = "https://www.youtube.com";
}