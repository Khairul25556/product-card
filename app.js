let circle = document.querySelector('.color-option');

circle.addEventListener('click', (e) => {
    // console.log(e);
    let target = e.target; //e.target represents the actual element inside .color-option that was clicked.
    if (target.classList.contains('circle')){ //if the clicked element has the class circle

        circle.querySelector('.active').classList.remove('active'); //circle.querySelector('.active') finds the currently active color circle (the one with the class active). .classList.remove('active') removes the active class from it.

        target.classList.add('active'); //target.classList.add('active') adds the active class to the clicked color circle, making it the newly selected one

        document.querySelector('.main-images .active').classList.remove('active'); //Remove the active Class from the Currently Active Image
        // console.log(target.id);
        document.querySelector(`.main-images .${target.id}`).classList.add('active'); //Add the active Class to the Correct Image
    }
});

// Add To Cart Button Animation
document.getElementById("addToCartBtn").addEventListener("click", function() {
    let button = this.parentElement;
    button.classList.add("active");

    // Change text to checkmark after animation
    setTimeout(() => {
        this.innerHTML = '<i class="fa fa-check"></i>';
    }, 500);

    // Remove animation after some time
    setTimeout(() => {
        button.classList.remove("active");
        this.innerHTML = "Add To Cart";
    }, 2000);
});


