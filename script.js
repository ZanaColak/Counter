const increaseButtonEl = document.querySelector('.counter__button-increase');
const decreaseButtonEl = document.querySelector('.counter__button-decrease')
const countervalueEl = document.querySelector('.counter__value');

decreaseButtonEl.addEventListener('click', function() {
    // get current value of counter

    // convert value to number type

    
});

increaseButtonEl.addEventListener('click', function() {
    // get current value of counter
    const currentValue = countervalueEl.textContent;
    
    //convert value to number type
    const currentValueAsNumber = +currentValue;

    //increment by 1
    const newValue = currentValueAsNumber + 1;

    //set counter element with new value
    countervalueEl.textContent = newValue;
});