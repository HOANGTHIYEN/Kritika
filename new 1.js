rows[i].onclick = function(){
					if(this.checked){
						this.checked = false;
						this.onchange();

					}else{
						this.checked = true;
						this.onchange();
					}
}
rows[i].parentElement.parentElement.onclick = function(){

		var rows = document.getElementsByName("check");
		for( var i =0; i<rows.length; i++){
			
				if(rows[i].parentElement.parentElement == this){
					
					if(rows[i].checked){
						rows[i].checked = false;
						rows[i].onchange();

					}else{
						rows[i].checked = true;
						rows[i].onchange();
					}
				}
		}	
}
