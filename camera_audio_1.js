s0.initCam()

src(s0)
	.blend(o0, 0.1)
	.modulate(o0, 0.1)
	.modulate(noise(1),()=>a.fft[1])
	.out()