document.getElementById('check-btn').addEventListener("click",function(){
    const inputElement = document.getElementById("text-input")
    const resultElement = document.getElementById("result")
    const inputValue = inputElement.value.trim()

    if(!inputValue){
        alert("please input a value")
        return
    }
    const normalizedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedValue = normalizedValue.split('').reverse().join("")
    if(normalizedValue === reversedValue){
        resultElement.textContent = `${inputValue} is a palindrome`
    }
    else{
        resultElement.textContent = `${inputValue} is not a palindrome.`
    }
})