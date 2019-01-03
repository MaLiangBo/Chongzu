$('#jia').click(function(){
	if(Math.floor($('#num').val()) >= 20){
		return;
	}else{
		var $add = Math.floor($('#num').val()) + 1;
		$('#num').val($add);
	}
});
$('#jian').click(function(){
	if(Math.floor($('#num').val()) <= 1){
		return;
	}else{
		var $min = Math.floor($('#num').val()) - 1;
		$('#num').val($min);
	}
})
