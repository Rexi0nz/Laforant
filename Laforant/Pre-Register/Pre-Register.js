let state = false

let validate = () => {
    let Email = document.getElementById('Email')
    let Username = document.getElementById('Username')
    let Password = document.getElementById('Password')
    let RPassword = document.getElementById('RPassword')
    let Birth = document.getElementById('tanggal lahir')
    let country = document.getElementById('country')
    let invalid = country.value == 'empty'
    let term = document.getElementById('term')
    let errorMsg = []

    // Functions
    validEmail (Email, errorMsg)
    validUsername (Username, errorMsg)
    validPassword (Password, RPassword, errorMsg)
    validBirth (Birth,errorMsg)
    validCountry (country,errorMsg,invalid)
    validAgreement (term, errorMsg)

    // Error Message
    if (errorMsg.length === 0) {
    alert('Pre-registration successful, stay tuned!')
    } else {
    alert(errorMsg.join('\n'))
    }
}

// Functions (Validations)
let validEmail = (Email, errorMsg) => {
    if(Email.value === ''){
        errorMsg.push('Email is Required!')
    } else if (Email.value.startsWith('.') || Email.value.startsWith('@')){
        errorMsg.push('Email cannot start with . or @!')
    } else if (Email.value.indexOf('.') === (Email.value.indexOf('@') + 1)) {
        errorMsg.push('Email cannot contain . after @!')
    } else if (!Email.value.endsWith('@binus.ac.id')){
        errorMsg.push('Email must end with @binus.ac.id ')
    }
}

let validPassword = (Password, RPassword, errorMsg) => {
    if(Password.value === ''){
        errorMsg.push('Password must be filled!')
    } else if(Password.value.length < 8){
        errorMsg.push('Minimal password length is 8 ! ')
    }else if (RPassword.value === ''){
        errorMsg.push('Please repeat your password!')
    } else if (Password.value !== RPassword.value){
        errorMsg.push('Repeated password does not match!')
    }
} 

let validUsername = (Username, errorMsg) => {
    if(Username.value === ''){
        errorMsg.push('Username must be filled!')
    } else if (Username.value.length < 5) {
        errorMsg.push('Username length must be at least 5 or more!')
    }
}

let validBirth = (Birth, errorMsg) => {
    if(Birth.value === ''){
        errorMsg.push('Please enter your date of birth!')
    }
}

let validCountry = (country, errorMsg, invalid) => {
    if(invalid){
        errorMsg.push('Where are your from? Please enter your country!')
    }
}

let validAgreement = (term, errorMsg) => {
    if(!term.checked){
        errorMsg.push('You must agree with our terms & conditions!')
    }
}

// Navbar
function toogleNavbarNav(){
    let nav = document.getElementById("dropdown-menu");
    let div = document.getElementById("navbar-nav-nav");

    if(state == false){ //blom muncul
        nav.style.display = 'flex';
        div.style.width ='80px';
        state = true;
        
    }else if ( state == true){ //uda muncul
        nav.style.display = 'none';
        // div.style.width= 'auto';
        state = false;
        // div.style.width ='30%';
    }
}

function scroll(){
    let nav = document.getElementById("dropdown-menu");
    if(state == true){
        nav.style.display = 'none';
    }
}