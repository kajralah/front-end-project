function default_product(title,img){
	var result="<div id=\"product\"";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\" id=\"img\" />";
	result += "<figure>"+image+"<figcaption><p>";
	result += title+"</p></figcaption></figure></div>";
	return result;
}

function getData(type_of_saree){
   $.getJSON('product_json/sarees.json',function(data){
   		getSaree(data[type_of_saree]);
   });
}

function getSaree(data){
	$("#result").append(data.length + " result found");
	var c = 0;
	for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
		var div = document.createElement('div');
		div.id = "product_div";
		for(var cel= c ;cel < c + 3 ;cel++){
			if(cel < data.length){
				div.innerHTML += default_product(data[cel]['title'],data[cel]['img_src']);
			}
		}
		$(".row").append(div);
		c+=3;
	}	
}
