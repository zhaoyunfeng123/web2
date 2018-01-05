window.onload = function() {
			var username = document.getElementById("username");	
			username.onblur = checkUsername;

			var passwd = document.getElementById("passwd");	
			passwd.onblur = checkPasswd;

			document.getElementById('submit').onclick=function(){
				if($("#repasswd").val()!=$("#passwd").val()){
					alert("密码不一致!");
				}
				else
				    alert("登录成功！")}
            document.getElementById('submit2').onclick=function(){
            	if($("#repasswd").val()!=$("#passwd").val()){
					alert("密码不一致!");
				}
				else
            	    alert("注册成功！")}

            var liNodes = document.getElementsByTagName("li");
			for (var i=0; i<liNodes.length; i++)
			{
				liNodes[i].onmouseover = function(){
					this.className = "subMenuShow";
				}
				liNodes[i].onmouseout = function(){
					this.className = "";
				}
			}
			
		} 
		function checkUsername() {
			var username=document.getElementById('username');
			var oldspan=document.getElementsByTagName('span');
			if(username.value=='')
			{
				if(oldspan.length>0){
					oldspan[0].parentNode.removeChild(oldspan[0]);
				}
				var newspan=document.createElement('span');
				username.parentNode.appendChild(newspan);
				var txtnode=document.createTextNode('必须输入用户名');
				newspan.appendChild(txtnode);
				newspan.style.color='red';
				username.focus();
			}
			else
			{
				if(oldspan.length>0){
					oldspan[0].parentNode.removeChild(oldspan[0]);
				}
				var newspan=document.createElement('span');
				username.parentNode.appendChild(newspan);
				var txtnode=document.createTextNode('用户名可以注册');
				newspan.appendChild(txtnode);
				newspan.style.color='red';
			}	
		}
		function checkPasswd() {
			var passwd=document.getElementById('passwd');
			var oldspan=document.getElementsByTagName('span');
			if(passwd.value=='')
			{
				if(oldspan.length>0){
					oldspan[0].parentNode.removeChild(oldspan[0]);
				}
				var newspan=document.createElement('span');
				passwd.parentNode.appendChild(newspan);
				var txtnode=document.createTextNode('必须输入密码');
				newspan.appendChild(txtnode);
				newspan.style.color='red';
				passwd.focus();
		    }
			else
			    {
				if(oldspan.length>0){
					oldspan[0].parentNode.removeChild(oldspan[0]);
				}
				var newspan=document.createElement('span');
				passwd.parentNode.appendChild(newspan);
			}    
	    }

