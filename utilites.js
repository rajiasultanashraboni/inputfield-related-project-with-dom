function inputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}
function inputTextValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textValueNumber = Number(textValue);
    return textValueNumber;
}