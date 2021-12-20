var f1=document.getElementById(fig1);
var f2=document.getElementById(fig2);
var f3=document.getElementById(fig3);
var f2=document.getElementById(fig4);
var num;
function randomizar()
{
    num=Math.round(Math.random()*3);
}
let arr=new Array;
for(var i=0;i<4;i++)
{
    randomizar();
    console.log(num+" ");
    arr.push(num);
}
for(var i=0;i<4;i++)
{
    if(arr[i]==0)
    {
        
    }
}

