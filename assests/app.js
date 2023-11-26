function Remove() {
    var box = document.querySelector('.info-box')
    box.style.display = "none"
}
function Focus(e) {
    var arrow = document.querySelector('.arrow')

    e.target.style.borderRaduis = '6px'
    arrow.classList.toggle('active')


}
var step = document.querySelector('.step-1')
step.addEventListener('click', function(e) {
    // let text = document.querySelector('.step-1 .text');
    let pTag = document.querySelector('.step-1 .text p');
    let buttonTag = document.querySelector(' .step-1 .text button');
    let imgTag = document.querySelector('.step-img');

    step.classList.toggle('active')
    pTag.classList.toggle('active')
    buttonTag.classList.toggle('active')
    imgTag.classList.toggle('active')


});


var counter = document.querySelector('.counter')
var checkBox = document.querySelectorAll('.check-box')
var checkBoxIcon = document.querySelectorAll('.checkbox')
var checked = document.querySelectorAll('.checked')
var number = 0;
counter.textContent = number
var hasBeenClicked = false;
checkBox.forEach( checkBoxes => {
    checkBoxes.addEventListener("click", (event)=>{
        var bar = document.querySelector('.progress-bar')
        var rollingAnimation = document.querySelectorAll('.rolling-animation')
        counter.textContent = number
        bar.style.setProperty('--width', '25px');
        if (!hasBeenClicked) {
            if (number < 5) {
                number = number + 1
                checkBoxIcon.forEach((checkBoxIcons, index) => {
                    checkBoxIcons.classList.add('active')
                });
                checked.forEach((checkeded, index) => {
                    checkeded.classList.add('active')
                });
                rollingAnimation.forEach((rollingAnimations, index) => {
                    rollingAnimations.classList.add('active')
                });
               
               
                
            }
            counter.textContent = number
            // hasBeenClicked = true;
        } else{
            if (number < 5) {
                number = number - 1
            }
            rollingAnimation.forEach((rollingAnimations, index) => {
                rollingAnimations.classList.toggle('active')
            });
            checkBoxIcon.forEach((checkBoxIcons, index) => {
                checkBoxIcons.classList.remove('active')
            });
            checked.forEach((checkeded, index) => {
                checkeded.classList.remove('active')
            });
            counter.textContent = number
            bar.style.setProperty('--width', '0px');
            
            // hasBeenClicked = true;
        }
        
        hasBeenClicked = !hasBeenClicked

    })
    
});


function showAlert() {
    var alertMsg = document.querySelector('.alert-popup')
    alertMsg.classList.toggle('active')

}


// function showAlert() {
//     var alertMsg = document.querySelector('.alert-popup')
  
//     document.body.addEventListener("click", (event)=>{
//         if (event.target.classList.contains('alert-popup')) {
//             alertMsg.classList.toggle('active')
//         }
//         else{
//             alertMsg.classList.remove('active')
//         }
        
//     })
// }
// showAlert()

function removeDropdown() {
    var dropdown = document.querySelector('.profile-dropdown')
    dropdown.classList.toggle('active')
}