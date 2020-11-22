jQuery(document).ready(function( $ ) {
	let first =true;
	$(window).on('scroll',()=>{
		if($(this).scrollTop() > 500 && $(this).scrollTop() < 510 && first){
			first=false;
			if($('#canvas').length) {
				var doughnutData = [{
					value: 100,
					color: "#f85c37"
				},
				{
					value: 0,
					color: "#ecf0f1"
				}
				];
				var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
			};
			if($('#canvas2').length) {
				var doughnutData = [{
					value: 75,
					color: "#f85c37"
				},
				{
					value: 25,
					color: "#ecf0f1"
				}
				];
				var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
			}
			if($('#canvas3').length) {
				var doughnutData = [{
					value: 50,
					color: "#f85c37"
				},
				{
					value: 50,
					color: "#ecf0f1"
				}
				];
				var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
			}
			if($('#canvas4').length) {
				var doughnutData = [{
					value: 25,
					color: "#f85c37"
				},
				{
					value: 75,
					color: "#ecf0f1"
				}
				];
				var myDoughnut = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
			}
		}
	});
});
function readMore1( ){
	let dots1 = $('#dots1')[0];
	let more1 = $('#more1')[0];
	let btn1 = $('#btn1')[0];

   if(dots1.style.display === "none"){
      dots1.style.display = "inline";
      btn1.innerHTML="Подробнее";
      more1.style.display = "none";
   }else{
    	dots1.style.display = "none";
      btn1.innerHTML="Скрыть";
      more1.style.display = "inline";
   }
}
function backToTop(){
	let button = $('.back-to-top');
	$(window).on('scroll',()=>{
		if($(this).scrollTop() >= 100){
			button.fadeIn();
		}else{
			button.fadeOut();
		}
	});
	button.on('click', (e)=>{
		e.preventDefault();
		$('html').animate({scrollTop: 0},1000);
	})
}
backToTop();