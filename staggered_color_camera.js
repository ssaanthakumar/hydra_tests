s0.initCam()

src(o0)
	.scale(0.9)
	.layer(
  		src(s0).repeat(
          1,1) .invert(1) .luma() .invert() .mult(osc(10, -0.1, 10))
  		)
	.luma(0.1)
	.out()