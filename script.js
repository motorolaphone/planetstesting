var image1=new Image()
image1.src="istockphoto-1288297502-170667a.jpg"

var image2=new Image()
image2.src="jeremy-thomas-E0AHdsENmDg-unsplash.jpg"

var image3=new Image()
image3.src="paul-volkmer-fX-qWsXl5x8-unsplash.jpg"

var step=1

function slideit() {
	document.images.slide.src=eval("image"+step+".src")
	if(step<3)
		step++
	else
		step=1
	setTimeout("slideit()",2500)
}

slideit()