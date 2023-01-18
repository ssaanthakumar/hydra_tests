osc(2,.2,1)
	.out(o0)

src(o0)
	.repeat(3,2)
	.modulate(o0,450)
	.kaleid(4)
	.out(o1)

render(o1)