
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

//event listener for the next button
if(next) {
    next.addEventListener("click", () => {
        //When the 'next' button is clicked, it'll increment the current active circle
        currentActive++;

        // if currentActive is greater than/exceeds the amount of circles, we set the current active to the highest
        // circle
        if (currentActive > circles.length) {
            currentActive = circles.length;
        }
        //console.log(currentActive);
        update();
    });
}

//event listener for prev button
if(prev) {
    prev.addEventListener("click", () => {
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }
        update();
    });
}
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1){
        prev.disabled = true;
    } else if (currentActive === circles.lenght) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};
