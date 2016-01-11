function default_product(title,img){
	var result="";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\" id=\"img\" />";
	result += "<figure>"+image+"<figcaption><p>";
	result += title+"</p></figcaption></figure>";
	return result;
}

function getData(type_of_saree){
   $.getJSON('product_json/sarees.json',function(data){
   		getSaree(data[type_of_saree]);
   });
}

function getSaree(data){
	for(var iter=0;iter < (data.length)/3 ;iter++){
		var row = document.createElement("div");
		$('.row').append("<div id=\"product_div\">"+ default_product(data[0]['title'],data[0]['img_src']) + "</div>");
	}
}