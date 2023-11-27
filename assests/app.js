// ================================ INFO BOX ===================================//
function Remove() {
    var box = document.querySelector('.info-box')
    box.style.display = "none"
}

// ============================= SETUP GUIDE ARROW ============================//
function Focus(e) {
    var arrow = document.querySelector('.arrow')

    e.target.style.borderRaduis = '6px'
    arrow.classList.toggle('active')


}

// ================================ STEPS DROPDOWN============================== //
var steps = document.querySelectorAll('.step-1')
steps.forEach(step => {
    step.addEventListener('click', function(e) {
        let imgTag = step.querySelector('.step-img');
        var event = e.target;

        // Close all other active step-1 divs
        steps.forEach(otherStep => {
            if (otherStep !== step && otherStep.classList.contains('active')) {
                otherStep.classList.remove('active');
                otherStep.querySelector('.step-img').classList.remove('active');
            }
        });

        // Toggle the clicked step-1 div
        if (!event.classList.contains('check-box') && !event.closest('.check-box')) {
            step.classList.toggle('active');
            imgTag.classList.toggle('active');
        }
    });
});

// =============================== CHECKED ANIMATION ==============================//
var counter = document.querySelector('.counter');
var checkBoxes = document.querySelectorAll('.check-box');
var number = 0;

counter.textContent = number;

checkBoxes.forEach((checkBox, index) => {
    var hasBeenClicked = false;
    var checked = checkBox.querySelector('.checked');
    var rollingAnimation = checkBox.querySelector('.rolling-animation');
    var checkBoxIcon = checkBox.querySelector('.checkbox');

    checkBox.addEventListener("click", (event) => {
        var bar = document.querySelector('.progress-bar');

        // Check if the checkbox has been clicked before
        if (hasBeenClicked) {
            // Decrease the counter and remove the 'active' class
            number = Math.max(0, number - 1);
            rollingAnimation.classList.remove('active');
            checked.classList.remove('active')
            checkBoxIcon.classList.remove('active')
        } else {
            // Increase the counter and add the 'active' class
            if (number < 5) {
                number = number + 1;
                rollingAnimation.classList.add('active');
                checked.classList.add('active')
                checkBoxIcon.classList.add('active');
            }
        }

        // Update the counter
        counter.textContent = number;

        // Reset hasBeenClicked for the next click
        hasBeenClicked = !hasBeenClicked;

        // Update the progress bar
        bar.style.setProperty('--width', number * 25 + 'px');
    });
});
// =============================== ALERT POPUP ==============================//
function showAlert() {
    var alertMsg = document.querySelector('.alert-popup')
    alertMsg.classList.toggle('active')

}

// =============================== DROPDOWN POPUP ==============================//
function removeDropdown() {
    var dropdown = document.querySelector('.profile-dropdown')
    dropdown.classList.toggle('active')
}