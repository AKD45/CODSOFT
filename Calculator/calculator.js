let text=document.getElementById("inpbox");
let buttons=document.querySelectorAll('button');

let str="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            text.value=str;
        }
        else if(e.target.innerHTML=="AC"){
            str="";
            text.value=str;
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.substring(0,str,length-1);
            text.value=str;
        }
        else{
            str+=e.target.innerHTML;
            text.value=str;
        }

        
    })
})