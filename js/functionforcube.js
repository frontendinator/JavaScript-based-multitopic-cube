function cubedown(){
	var cube = document.querySelector("#cubecube");
	cube.onmousemove = function cubemove(e){
    cube.style.transform = "rotateX(" + e.clientY*2 + "deg) rotateY(" + e.clientX*2 +"deg)";
    cube.style.webkitTransform = "rotateX(" + e.clientY*2 + "deg) rotateY(" + e.clientX*2 +"deg)";
    cube.style.msTransform = "rotateX(" + e.clientY*2 + "deg) rotateY(" + e.clientX*2 +"deg)";
    cube.style.mozTransform = "rotateX(" + e.clientY*2 + "deg) rotateY(" + e.clientX*2 +"deg)";
	};
	cube.onmouseup = function cubemoved(e){
	cube.onmousemove = false;
	};
};

function openText() {
var totermofservice = document.querySelector("#totermofservice"),
	termsofservice = document.querySelector(".termsofservice"),
	topricing = document.querySelector("#topricing"),
	pricing = document.querySelector(".pricing");
		totermofservice.onclick = function () {
		termsofservice.style.display = 'block';
		pricing.style.display = 'none';
		return false;
	};
		topricing.onclick = function () {
		pricing.style.display = 'block';
		termsofservice.style.display = 'none';
		return false;
	};
};
window.addEventListener("load", openText);
