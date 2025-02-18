const fname = document.getElementById('fname')
const fnameHelper = document.getElementById('fname-helper')
const lname = document.getElementById('lname')
const lnameHelper = document.getElementById('lname-helper')
const email = document.getElementById('email')
const emailHelper = document.getElementById('email-helper')
const submit = document.getElementsByClassName('submit')

fname.addEventListener('input', (e) => {

    const value = e.target.value;
    if (value.length === 1 || value.length === 2) {
        fnameHelper.innerText = 'First Name must be at least 3 characters '
        fnameHelper.style.color = 'red'

    } if (!fname.classList.contains('error')) {
        fname.classList.add('error')
    } else {
        fnameHelper.innerText = ''
        fname.classList.remove('error')
    }
})

lname.addEventListener('input', (e) => {
    const value = e.target.value
    if (value.length <= 2) {
        lnameHelper.innerText = 'Last Name must be at least 3 characters '
        fnameHelper.style.color = 'red'

    } if (!lname.classList.contains('error')) {
        lname.classList.add('error')
    } else {
        lnameHelper.innerText = ''
        lname.classList.remove('error')
    }
})


email.addEventListener('input', (e) => {
    const value = e.target.value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(value)) {
        emailHelper.innerText = 'Email must be a valid email address'
        emailHelper.style.color = 'red'
    } if (!email.classList.contains('error')) {
        email.classList.add('error')
    } else {
        emailHelper.innerText = ''
        email.classList.remove('error')
    }

});







