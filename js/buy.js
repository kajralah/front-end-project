var cities=['Aytos','Asenovgrad','Ahtopol','Blagoevgrad','Botevgrad','Burgas','Varna',
		'Veliko Tarnovo','Vidin','Vraca','Gabrovo','Dimitrovgrad','Dobrich','Ivaylovgrad',
		'Kazanlak','Kardzhali','Kyustendil','Lovech','Montana','Pazardzhik','Plovdiv','Pleven',
		'Razgrad','Ruse','Silistra','Sliven','Smolian','Sofia','Stara Zagora','Targovishte','Haskovo',
		'Shumen','Yambol','Petrich','Samokov','Karlovo','Lom','Troyan','Harmanli','Mezdra'];


function generate_cities(){
	var cities_sort = cities.sort();
	for(var city = 0;city<cities_sort.length;city++){
		$('#city_list').append("<option value='"+cities_sort[city]+"'>"+cities_sort[city]+"</option>");
	}
}

$('#addressButton').click(function() {
   $('#optionalAddress').show();
   if($('#optionalAddress').text() !==  ''){
   		$('#optAddress').val('');
   }
});

$('#officeButton').click(function(){
	var city = $("select[id='city_list'] option:selected").text();
	$('#optAddress').val('Central office in '+city);
	$('#optionalAddress').show();
});