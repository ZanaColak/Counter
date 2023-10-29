const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const countervalueEl = document.querySelector('.counter__value');

//The reset button
resetButtonEl.addEventListener('click', function() {
    //set counter value to 0
    countervalueEl.textContent = 0;
})

//The decrease button
decreaseButtonEl.addEventListener('click', () => {
    // get current value of counter
    const currentValue = countervalueEl.textContent;
  
    // convert value value to number type
    const currentValueAsNumber = +currentValue;
  
    // decrement by 1
    let newValue = currentValueAsNumber - 1;
  
    // check if new value is less than 0
    if (newValue < 0) {
      // if it is, force it to be 0 instead
      newValue = 0;
    }
  
    // update counter value with new value
    countervalueEl.textContent = newValue;
  
    // unfocus (blur) button
    decreaseButtonEl.blur();
  });

  //The increment button method
  function incrementCounter() {
     // get current value of counter
     const currentValue = countervalueEl.textContent;
    
     //convert value to number type
     const currentValueAsNumber = +currentValue;
 
     //increment by 1
     const newValue = currentValueAsNumber + 1;
 
     //set counter element with new value
     countervalueEl.textContent = newValue;
  }

  //The increment button method call, for the click event
increaseButtonEl.addEventListener('click', incrementCounter);

//When you push any button in the keybord it will increment by 1
document.addEventListener('keydown', incrementCounter);