function default_product(title,img){
	var result="";
	var image = "<img src="+img+"\" id=\"img\" />";
	var final_image = image.slice(0,9)+'"'+image.slice(10,image.length);
	result += "<figure>"+final_image+"<figcaption><p>";
	result += title+"</p></figcaption></figure>";
	return result;
}

function getData(){
   $.getJSON('product_json/sarees.json',{}, function(data) {
        $("#test").append(default_product(data["bollywood"][0]["title"],data["bollywood"][0]["img_src"]));
      });
}