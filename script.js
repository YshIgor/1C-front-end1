var canvas = document.getElementById("sandbox"),
	context = canvas.getContext("2d"),
	square, circle;
square = new Path2D();
square.moveTo(50,50);
square.lineTo(250,50);
square.lineTo(250,250);
context.stroke(square);