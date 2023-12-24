
let isDOBOpen= false;
let dateOfBirth;
const settingCogEl= document.getElementById("settingIcon");
const settingContentEl= document.getElementById("settingContent");
const initialTextEl= document.getElementById("initialText");
const afterDOBBtnTXtEl= document.getElementById("afterDOBBtnTXt");
const dobButtonEl= document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
/*let help = document.getElementById("HE");*/

const makeTwoDigitNum=(number) => {
    return number > 9 ? number:`0${number}`
} 

let nbtn=document.querySelector('button');
nbtn.addEventListener('click',showMsg);
function showMsg(){
    alert ("Welcome!Select DOB ");}

let nbt=document.querySelector('#HE');    /*to select utton with id # */
nbt.addEventListener('click',inputMsg);
function inputMsg(){
    let name = prompt('How can i help');
                                 /*nbtn.textContent ='roll no.1' + name;} */  
nbt.addEventListener('click',showMsg);                                      #not working
function showMsg(){
    alert (" thank you! ");}

                                 /*function showMsg() {
alert('Thank you!');
}


    let nbt=document.querySelector('#HE'); 
    nbt.addEventListener('click',showMsg);
    function showMsg(){
        alert ("thankyou ");}*/

    

const toggleDataOfBirthSelector= () => {
    if (isDOBOpen) {
        settingContentEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide"); 
    }
    isDOBOpen= !isDOBOpen;
    console.log('Toggle',isDOBOpen);    
};
const updateAge = () => {
    const currentDate = new Date();
    /*console.log({currentDate });*/
    const dateDiff= currentDate-dateOfBirth;
    const year=Math.floor(dateDiff/(1000*60*60*24*365));
    const month=Math.floor(dateDiff/(1000*60*60*24*365)%12)
    const day =Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour=Math.floor(dateDiff/(1000*60*60))%24;
    const minute=Math.floor(dateDiff/(1000*60))%60;
    const second=Math.floor(dateDiff/1000)%60;
   
    yearEl.innerHTML=makeTwoDigitNum(year);
    monthEl.innerHTML=makeTwoDigitNum(month);
    dayEl.innerHTML=makeTwoDigitNum(day);
    hourEl.innerHTML=makeTwoDigitNum(hour);
    minuteEl.innerHTML=makeTwoDigitNum(minute);
    secondEl.innerHTML=makeTwoDigitNum(second);
};

const setDOBHandler= () => {
    const dateString= dobInputEl.value;
    dateOfBirth= dateString ? new Date(dateString):null;

    /*const year=localStorage.getItem("year");
    const month =localStorage.getItem("month");
    const date =localStorage.getItem("date"); 
    
    if(year && month && date ){
        dateOfBirth=new Date(year,month,date);

    }*/

    if (dateOfBirth) {

       /* localStorage.setItem("year",dateOfBirth.getFullYear());
        localStorage.setItem("month",dateOfBirth.getMonth());
        localStorage.setItem("date",dateOfBirth.getDate());*/
       

        initialTextEl.classList.add("hide");
        afterDOBBtnTXtEl.classList.remove("hide");
        setInterval(() => updateAge(),1000);

    }else {
       afterDOBBtnTXtEl.classList.add("hide");
       initialTextEl.classList.remove("hide");
    }
    console.log("date of birth", dateOfBirth);

};

setDOBHandler();

settingCogEl.addEventListener("click", toggleDataOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
};

