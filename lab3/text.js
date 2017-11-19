var con=false;
//var x=document.getElementsByTagName("img");
//var y=document.getElementById("text"); 
var arr=['宝贝与描述很不相符','宝贝与描述不相符','宝贝与描述比较相符','宝贝与描述相符','宝贝与描述很相符'];
function starPic(which){
	var x=document.getElementsByTagName("img");
    var y=document.getElementById("text"); 
	for(var i=0;i<=(which.id);i++)
	{
		if(i==0)
	    {
			y.value=arr[0];
            x[i].src="images/star1.png";
        }              	
        if(i==1)
        {
            y.value=arr[1];
            x[i].src="images/star1.png";
        }
        if(i==2)
        {
            y.value=arr[2];
            x[0].src="images/star2.png";
            x[1].src="images/star2.png";
            x[i].src="images/star2.png";
        }
        if(i==3)
        {
            y.value=arr[3];
            x[0].src="images/star2.png";
            x[1].src="images/star2.png";
            x[i].src="images/star2.png";
        }
        if(i==4)
        {
            y.value=arr[4];
            x[0].src="images/star2.png";
            x[1].src="images/star2.png";
            x[i].src="images/star2.png";
        }
    }
}
function hide(){
	if(con==false)
		{
			var x=document.getElementsByTagName("img");
            var y=document.getElementById("text");
            for(var i=0;i<=4;i++)
            	{
            		y.value=" ";
               		x[i].src="images/star0.png";
               	}
        }
}
function qd(which){
	con=true;
	var x=document.getElementsByTagName("img");
    var y=document.getElementById("text"); 
	for(var i=0;i<=(which.id);i++)
	{
		if(i==0)
	    {
			y.value=arr[0];
            x[i].src="images/star1.png";
        }              	
        if(i==1)
        {
            y.value=arr[1];
            x[i].src="images/star1.png";
        }
        if(i==2)
        {
            y.value=arr[2];
            x[0].src="images/star2.png";
            x[1].src="images/star2.png";
            x[i].src="images/star2.png";
        }
        if(i==3)
        {
            y.value=arr[3];
            x[0].src="images/star2.png";
            x[1].src="images/star2.png";
            x[i].src="images/star2.png";
        }
        if(i==4)
        {
            y.value=arr[4];
            x[0].src="images/star2.png";
            x[1].src="images/star2.png";
            x[i].src="images/star2.png";
        }
    }
}