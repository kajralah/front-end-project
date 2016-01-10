function default_product(title,img){
	var result="";
	result += "<div><figure><img src="+"'";
	result += img+"'"+" id=\"img\"/><figcaption><p>";
	result += title+"</p></figcaption></figure></div>";
	return result;
}

function getData(){
   $.getJSON('product_json/sarees.json',{}, function(data) {
        $("#test").append(default_product(data["bollywood"][0]["title"],data["bollywood"][0]["img_src"]));
      });
}

