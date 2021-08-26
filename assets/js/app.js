document.querySelector('.free-trial-btn').addEventListener('click', function() {
    document.querySelector('form').classList.add('submitted')

    // LEFT OFF HERE
    const formInputs = document.querySelectorAll('.form-input')
    const errorPs = document.querySelectorAll('.error-p') 

    for (let i = 0; i < formInputs.length; i++) {
        for (let j = 0; j < errorPs.length; j++) {
            if (formInputs[i].value == false) {
                errorPs[j].classList.remove('is-hidden') 
            } else {
                errorPs[j].classList.add('is-hidden')
                // QQQ: The above line isn't doing what I want it to do...
                // ...What I want is for the paragraph to become hidden as soon as formInputs[i].value is true/valid.
            }
        }
    }
})