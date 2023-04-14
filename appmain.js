function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}
function generatePin(){
    
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('pinShowButton').addEventListener('click',function(){
    const pin = getPin();
    const displayPin = document.getElementById('pinShowInput');
    displayPin.value = pin;
})

document.getElementById('calcBodyButton').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberFeild = document.getElementById('calcShowInput');
    const previousTypedNumber = typeNumberFeild.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberFeild.value = '';
        }
        
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberFeild.value = remainingDigits;
        }
        
    }else{
        const newNumberType = previousTypedNumber + number;
        typeNumberFeild.value = newNumberType;
    }
})


document.getElementById('calcSubmit').addEventListener('click',function(){
    const displayPin = document.getElementById('pinShowInput');
    const currentPin = displayPin.value;

    const typeNumberFeild = document.getElementById('calcShowInput');
    const carentFeild = typeNumberFeild.value;

    const pinSuccessMessage = document.getElementById('pinSuc');
    const pinFailureMessage = document.getElementById('pinfail');

    if(currentPin === carentFeild){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }else{
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block' ;
    }

})




