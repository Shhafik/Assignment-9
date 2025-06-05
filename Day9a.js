let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let websiteInput = document.getElementById('website')
let messageInput = document.getElementById('message')
let nameCheck = document.getElementById('nameCheck')
let emailCheck = document.getElementById('emailCheck')
let websiteCheck = document.getElementById('websiteCheck')
let messageCheck = document.getElementById('messageCheck')
nameInput.addEventListener('blur',function(){
    if(nameInput.value === ''){
        nameCheck.textContent = 'This field is required'
        nameCheck.style.color = 'red'
        nameCheck.style.fontWeight = 'bold'
    }
})
emailInput.addEventListener('blur',function(){
    if(emailInput.value === ''){
        emailCheck.textContent = 'A valid email address is required'
        emailCheck.style.color = 'red'
        emailCheck.style.fontWeight = 'bold'
    }
})
websiteInput.addEventListener('blur',function(){
    if(websiteInput.value === ''){
        websiteCheck.textContent = 'A valid URL is required'
        websiteCheck.style.color = 'red'
        websiteCheck.style.fontWeight = 'bold'
    }
})
messageInput.addEventListener('blur',function(){
    if(messageInput.value === ''){
        messageCheck.textContent = 'This field is required'
        messageCheck.style.color = 'red'
        messageCheck.style.fontWeight = 'bold'
    }
})