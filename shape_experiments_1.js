shape(99,.4,0)
	.color(1,1,0)
	.hue(()=>Math.sin(time))
	.contrast(()=>Math.sin(time))
	.scale(0.5,2,4)
	.rotate(10,.3)
	.repeat(3,3,.4,.4)
	.pixelate(20,20)
	.kaleid(4)
	.modulate(noise(3),()=>a.fft[0])
	//.modulate(o0)
	.out(o0)