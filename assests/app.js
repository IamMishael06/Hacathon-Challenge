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
var step = document.querySelectorAll('.step-1')
step.forEach(steps => {
    steps.addEventListener('click', function(e) {
        console.log(steps)
        let imgTag = steps.querySelector('.step-img');
        var event = e.target
        // let text = document.querySelector('.step-1 .text');
        // let pTag = document.querySelector('.step-1 .text p');
        // let buttonTag = document.querySelector(' .step-1 .text button');
        if (!event.classList.contains('check-box') && !event.closest('.check-box')) {
                steps.classList.toggle('active');
                imgTag.classList.toggle('active');
        }
    });
});

// =============================== CHECKED ANIMATION ==============================//
var counter = document.querySelector('.counter')
var checkBox = document.querySelectorAll('.check-box')

var number = 0;
counter.textContent = number
var hasBeenClicked = false;
checkBox.forEach( (checkBoxes, index) => {

    checkBoxes.addEventListener("click", (event)=>{
        var checked = checkBoxes.querySelector('.checked')
        var rollingAnimation = checkBoxes.querySelector('.rolling-animation')
        var checkBoxIcon = checkBoxes.querySelector('.checkbox')
        console.log(checkBoxes)
        var bar = document.querySelector('.progress-bar')

        counter.textContent = number
        bar.style.setProperty('--width', '25px');
        if (!hasBeenClicked) {
            if (number < 5) {
                number = number + 1
                checkBoxIcon.classList.add('active')
                checked.classList.add('active')
                rollingAnimation.classList.add('active')
            }
            counter.textContent = number
            // hasBeenClicked = true;
        } else{
            if (number < 5) {
                number = number - 1
            }
                rollingAnimation.classList.toggle('active')
                checkBoxIcon.classList.remove('active')
                checked.classList.remove('active')

            counter.textContent = number
            bar.style.setProperty('--width', '0px');
            
            // hasBeenClicked = true;
        }
        
        hasBeenClicked = !hasBeenClicked

    })
    
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