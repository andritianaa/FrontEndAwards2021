function slide(direction) {
    scrollCompleted = 0;
    var container = document.getElementById('container');


    var slideVar = setInterval(function() {
        if (direction == 'left') {
            container.scrollLeft -= 10;
        } else {
            container.scrollLeft += 10;
        }
        scrollCompleted += 10;
        if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
        }
    }, 50);
}