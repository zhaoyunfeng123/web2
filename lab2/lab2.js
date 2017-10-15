var str='';
function showData(name){
	str += name.value;
	document.getElementById("result").innerHTML=str;
}
function calculate(){
	document.getElementById("result").innerHTML='';
	var resultNum =eval(str);
	resultNum +='';
	if(resultNum.indexOf(".")>0)
	{
		var a=resultNum.indexOf(".");
		resultNum=resultNum.substring(0,a+3);
	}
	document.getElementById("result").innerHTML=resultNum;
    str=resultNum;
}
function clearData(){
	str='';
	document.getElementById("result").innerHTML=0;
}
function diverseFun(name){
	switch(name.value)
	{
		case"=":calculate();
		       break;
		case"c":clearData();
               break;
        default:showData(name);
	}
}
function loadEvent(){
	var buttons=document.getElementsByTagName("button");
	for(var i=0;i<buttons.length;i++)
	{
		buttons[i].onclick=function(){
			diverseFun(this);
		}
	}
}
window.onload=function(){
	loadEvent();
}
