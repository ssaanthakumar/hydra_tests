s0.initScreen()

src(o0)
	.scale(0.9)
	.layer(
  		src(s0).repeat(
        1,1) .invert(1) .luma() .invert() .mult(osc(10, -0.1, 10))
  		)
	.luma(0.1)
	.modulate(noise(1),()=>a.fft[1])
	//.modulate(o0, 0.01)
	.blend(o0, 0.9)
	.out()