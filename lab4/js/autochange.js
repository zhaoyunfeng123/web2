function changeToLeft(){
	document.getElementById("picScroll").scrollLeft++;
	if(document.getElementById("picScroll").scrollLeft>document.getElementById("picScroll1").offsetWidth)
		{
			document.getElementById("picScroll").scrollLeft=0;
		}
}	
var run = setInterval("changeToLeft()",10);
function con(){
	run=setInterval("changeToLeft()",10);
}