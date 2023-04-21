function ele(attrname,attrvalue){
    var res=document.createElement("div");
    res.setAttribute(attrname,attrvalue);
    return res;
}
var row=ele("class", "row");
var col=ele("class", "col-md-6");
var cal=ele("class", "calci");
col.append(cal);
row.append(col);
document.body.append(row);
var empty=ele("class", "empty");
var dis=ele("class", "dis");
var ans=ele("class", "ans");
var bord=ele("class", "bord");
var numbord=ele("class", "numbord");
bord.append(numbord);
cal.append(empty,dis,ans,bord);

function breaker(){
    var res=document.createElement("br");
    return res
}
function num(attrvalue,funname,attrname,attrname1){
    var res=document.createElement("input");
    res.innerHTML=attrvalue;
    res.addEventListener("click",funname);
    res.setAttribute("type","button")
    res.setAttribute("class",attrname);
    res.setAttribute("value",attrname1)
    res.setAttribute("id",attrvalue);
    return res;
}
var arr=[];
var out="";
var ans1=ele("class","ans1");
ans1.innerHTML="0";
dis.append(ans1);
 function pres(){
    var ans1=ele("class","ans1");
    if((this.id=="+"||this.id=="-"||this.id=="X"||this.id=="÷") && out==""){
        out+=0;
        ans1.innerHTML=out;
        dis.append(ans1);
    }
    else if(this.id=="+"){
        if(out[out.length-1]=="+"||out[out.length-1]=="-"||out[out.length-1]=="x"||out[out.length-1]=="÷"){

        }
        else{
            out+="+";
        ans1.innerHTML=out;
        dis.append(ans1);
        var temp=[];
        for(var k=out.length-2;k>=0;k--){
            if(out[k]=="+"||out[k]=="-"||out[k]=="x"||out[k]=="÷"){
                break
            }
            else{
                temp.splice(0,0,out[k]);
            }
        }
        var arr1=temp.join("");
        arr.push(arr1);
        arr.push(this.id);
        }
    }
    else if(this.id=="-"){
        if(out[out.length-1]=="+"||out[out.length-1]=="-"||out[out.length-1]=="x"||out[out.length-1]=="÷"){

        }
        else{
            out+="-";
        ans1.innerHTML=out;
        dis.append(ans1);
        var temp=[];
        for(var k=out.length-2;k>=0;k--){
            if(out[k]=="+"||out[k]=="-"||out[k]=="x"||out[k]=="÷"){
                break
            }
            else{
                temp.splice(0,0,out[k]);
            }
        }
        var arr1=temp.join("");
        arr.push(arr1);
        arr.push(this.id);
        }
    }
    else if(this.id=="x"){
        if(out[out.length-1]=="+"||out[out.length-1]=="-"||out[out.length-1]=="x"||out[out.length-1]=="÷"){

        }
        else{
            out+="x";
        ans1.innerHTML=out;
        dis.append(ans1);
        var temp=[];
        for(var k=out.length-2;k>=0;k--){
            if(out[k]=="+"||out[k]=="-"||out[k]=="x"||out[k]=="÷"){
                break
            }
            else{
                temp.splice(0,0,out[k]);
            }
        }
        var arr1=temp.join("");
        arr.push(arr1);
        arr.push(this.id);
        }
    }
    else if(this.id=="÷"){
        if(out[out.length-1]=="+"||out[out.length-1]=="-"||out[out.length-1]=="x"||out[out.length-1]=="÷"){

        }
        else{
            out+="÷";
        ans1.innerHTML=out;
        dis.append(ans1);
        var temp=[];
        for(var k=out.length-2;k>=0;k--){
            if(out[k]=="+"||out[k]=="-"||out[k]=="x"||out[k]=="÷"){
                break
            }
            else{
                temp.splice(0,0,out[k]);
            }
        }
        var arr1=temp.join("");
        arr.push(arr1);
        arr.push(this.id);
        }
    }
    else{
        var but=this.id;
        for(var i=0;i<out.length;i++){
            if(out[i]=="." && but=="." ){
                ans1.innerHTML=out;
                dis.append(ans1);
                return 0
            }    
        }
        out+=but;
        ans1.innerHTML=out;
        dis.append(ans1);
    }
}

 function calculating(){
    var ans2=ele("class","ans2");
    var ans1=ele("class","ans1");
    if(this.id=="="){
        var temp=[]
        for(var k=out.length-1;k>=0;k--){
            if(out[k]=="+"||out[k]=="-"||out[k]=="x"||out[k]=="÷"){
                break
            }
            else{
                temp.splice(0,0,out[k]);
            }
        }
        var arr1=temp.join("");
        var d=arr.length;
        arr.splice(d,0,arr1);
        console.log(arr);
        var sout=parseFloat(arr[0]);
        for(var j=1;j<arr.length;j++){
            if(arr[j]=="+"){
                sout+=parseFloat(arr[j+1]);
            }
            else if(arr[j]=="-"){
                sout-=parseFloat(arr[j+1]);
            }
            else if(arr[j]=="x"){
                sout=sout*parseFloat(arr[j+1]);
            }
            else if(arr[j]=="÷"){
                sout/=parseFloat(arr[j+1]);
            }
        }
        out=""
        arr=[];
        ans2.innerHTML=sout;
        ans.append(ans2);
}
    else if(this.id=="C"){
        var ans2=ele("class","ans2");
        var ans1=ele("class","ans1");
        arr=[];
        out="";
        ans2.innerHTML="0";
        ans1.innerHTML="0";
        ans.append(ans2);
        dis.append(ans1);
    }
    
 }
 var num0=num("0",pres,"nums","0");
 var num1=num("1",pres,"nums","1");
 var num2=num("2",pres,"nums","2");
 var num3=num("3",pres,"nums","3");
 var b1=breaker();
 var num4=num("4",pres,"nums","4");
 var num5=num("5",pres,"nums","5");
 var num6=num("6",pres,"nums","6");
 var b2=breaker();
 var num7=num("7",pres,"nums","7");
 var num8=num("8",pres,"nums","8");
 var num9=num("9",pres,"nums","9");
 var b3=breaker();
 var numdot=num(".",pres,"nums",".");
 var b4=breaker();
 

 var numplus=num("+",pres,"val","+");
 var numminus=num("-",pres,"val","-");
 var nummult=num("x",pres,"val","x");
 var numdiv=num("÷",pres,"val","÷");
 var numequal=num("=",calculating,"equal","=");
 var numclear=num("C",calculating,"C","C");
 
 numbord.append(num7,num8,num9,numdiv,b1,num4,num5,num6,nummult,b2,num1,num2,num3,numminus,b3,numclear,num0,numdot,numplus,b4,numequal);