s0.initScreen()

src(s0)
	.blend(o0, 0.1)
	.modulate(o0, 0.1)
	.modulate(noise(1),()=>a.fft[1])
	.color(1,1,1)
	//.modulateKaleid(shape(4,320,69))
	.out()