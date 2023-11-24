var sym=["*","/","+","-",".","%"];
let x="";
function stru(n){
   if(x==="" && sym.includes(n)){
    if(n=="-"){
        x="-";
        document.getElementById("res").innerHTML=x;
    }
    else{
        document.getElementById("res").innerHTML="0";
    }
    
   }
   else{
    x+=n;
    //console.log(x);
    y=x.charAt(x.length-1);
    y1=x.charAt(x.length-2);
    //console.log(y+""+y1);
    if(sym.includes(y1)){
        if(sym.includes(y)){
            
            x=x.slice(0,-2);
            //console.log(x);
            x+=y;
            
        }
    }
    else{
        document.querySelectorAll('button.dis').forEach(elem => {
            elem.disabled = false;
        });
    
    }
    document.getElementById("res").innerHTML=x;
}
    

    
}

//________________________________________________________________
function back(){
    let y=x.charAt(x.length-1);
    //console.log(y);
    x=x.slice(0,-1);
    y=x.charAt(x.length-1);
    //console.log(y);
    if(x===""){
        document.getElementById("res").innerHTML=0;
    }
    else
        document.getElementById("res").innerHTML=x;
}
//_________________________________________________________________
function c(){
    x="";
    document.getElementById("res").innerHTML=0;
    document.querySelectorAll('button.dis').forEach(elem => {
        elem.disabled = true;
    });
}
//
function equl(){
    temp=eval(x);
    if(temp== 'Infinity'  || temp== "-Infinity" || Number.isNaN(temp)){
        temp="Error";
        console.log(temp);
    }
    if(temp==undefined){
        temp="0";
    }
    x=temp;
    document.getElementById("res").innerHTML=x;
    x="";

}