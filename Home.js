// let header = document.getElementById('site-header-inner');
document.addEventListener('scroll', function () {
    // Get the scroll position
    let scrollPos = window.pageYOffset;
    if (scrollPos > 10) {
        console.log("yes")
        // header.style.backgroundColor = "white";
        document.getElementById("site-header-inner").style.backgroundColor = "white";
        document.getElementById("site-header-inner").style.color = "black";
        document.getElementById("site-header-inner").style.padding = "0 20px";
        document.getElementById("white-logo").style.display = "none";
        document.getElementById("black-logo").style.display = "flex";
    } else {
        document.getElementById("white-logo").style.display = "flex";
        document.getElementById("black-logo").style.display = "none";
        document.getElementById("site-header-inner").style.color = "white";
        document.getElementById("site-header-inner").style.padding = "20px";
        document.getElementById("site-header-inner").style.backgroundColor = "#fa8b26";
    }
});

function activate(event) {
// document.querySelector('#demo').addEventListener('click', function (event) {
    // event.preventDefault();
    var target = document.querySelector('#demo')
    if (target.classList.contains('active')) {
        target.classList.remove('active');
    } else {
        target.classList.add('active');
    }
    // if(document.querySelector("#demo").has)
    // document.querySelector("#demo").classList.add("active");

// });
}


// var header = document.getElementById("main");
// var btns = document.getElementsByClassName("sidebar_item");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }




