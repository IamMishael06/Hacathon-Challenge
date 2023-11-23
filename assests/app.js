function Remove() {
    var box = document.querySelector('.info-box')
    box.style.display = "none"
}
function Focus(e) {
    var arrow = document.querySelector('.arrow')
    e.target.style.borderRaduis = '6px'
    arrow.classList.toggle('active')

}

var counter = document.querySelector('.counter')
var checkBox = document.querySelectorAll('.check-box')
var number = 0;
counter.textContent = number
var hasBeenClicked = false;
checkBox.forEach( checkBoxes => {
    checkBoxes.addEventListener("click", (event)=>{
        var bar = document.querySelector('.progress-bar')
        counter.textContent = number
        bar.style.setProperty('--width', '25px');
        if (!hasBeenClicked) {
            if (number < 5) {
                number = number + 1
            }
            counter.textContent = number
            // hasBeenClicked = true;
        } else{
            if (number < 5) {
                number = number - 1
            }
            counter.textContent = number
            bar.style.setProperty('--width', '0px');
            // hasBeenClicked = true;
        }
        
        hasBeenClicked = !hasBeenClicked

    })
    
});



