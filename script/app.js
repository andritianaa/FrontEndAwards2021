let linka = document.querySelectorAll('a');

for (i of linka) {
    i.addEventListener('click', function() {
        console.log("clicked");
    });
}