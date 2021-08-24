document.querySelector('.free-trial-btn').addEventListener('click', function() {
    document.querySelector('form').classList.add('submitted')

    if (document.querySelector('.form-input').value == false) { //// QQQ: This seems to work. Is this how I do what I'm trying to do on this line?
        document.querySelector('.p').classList.remove('is-hidden')
    } else {
        document.querySelector('.p').classList.add('is-hidden')
    }
})

//// QQQ: And why is the paragraph only showing up under the top input in the UI and none of the other inputs?