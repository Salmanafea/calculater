const buttonsEl= document.querySelectorAll('button');;
const result= document.getElementById('result')

for(let i=0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",()=>{
        const buttonValue= buttonsEl[i].textContent;
        if(buttonValue==='C'){
            clearResult();
        }else if(buttonValue==="="){
            calculateResult();
        }else{
            appendValue(buttonValue);
        }
    });

}
function clearResult(){
    result.value='';
}
function calculateResult(){
    result.value=eval(result.value);

}
function appendValue(buttonValue){
    result.value +=buttonValue;

}