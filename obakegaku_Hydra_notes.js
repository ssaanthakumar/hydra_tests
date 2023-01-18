a = ()=>osc(40,3)

osc()
  .modulate(noise(a()))
  .out()
////////////////////////////////

a = [2,4,1,7]

  osc()
    .modulate(noise(a,.9))
    .out()
//////////////////////////////

a = [2,4,1,7].fast(20)

osc()
    .modulate(noise(a,.9))
    .out()
///////////////////////////////

a = [2,4,1,7].smooth(5)

osc()
  .modulate(noise(a,.9))
  .out()
//////////////////////////////

a = [2,4,1,7].smooth(.1)

osc()
  .modulate(noise(a,.2),-.1)
  .out()
///////////////////////////////

//flippping image
a = [2,4,1,7].smooth(.1)
osc()
  .modulate(noise(a,.2))
.blend(src(s0).scale(1,-1))
  .out()

//flipping image 2
a = [2,4,1,7].smooth(.1)
osc()
.diff(src(s0).scale(1,-1),.5)
  .out()
/////////////////////////////

//shape wobble, blend with itself
shape(3,.5).modulate(noise(1,.3))
.blend(src(o0).scale(1,-1),.5)
.out()

//shape blend 2
shape(3,.5).modulate(noise(1,.3))
.blend(src(o0).scale(-1,1),.5)
.out()

//shape blend 3
shape(3,.2,.2).modulate(noise(1,.3))
.blend(src(o0).scale(1,-1),.5)
.out()

//shape blend 4
shape(5.4,.2,.3).modulate(noise(1,.3))
.modulate(src(o0).scale(1,-1),.2)
.out(o0)

voronoi().out(o1)

src(o0).modulateRotate(src(o1)).out(o2)


//shape blend 5
shape(5.4,.2,.3).modulate(noise(1,.3))
.modulate(src(o0).scale(1,-1),.2)
.out(o0)

voronoi().out(o1)

src(o0).modulateRotate(src(o1)).out(o2)
render(o2)


//shape blend 6
src(o2).diff(shape(5.4,.2,.3).modulate(noise(1,.3))
.modulate(src(o0).scale(1,-1),.2),.7)
.out(o0)

voronoi(10,.1,0).out(o1)

src(o0).modulatePixelate(src(o1),29).out(o2)
render(o2)


//shape blend 7
src(o2).diff(shape(5.4,.2,.3).modulate(noise(1,.3))
.modulate(src(o0).scale(1,-1),.2),.7)
.out(o0)

voronoi(10,.1,0).out(o1)

src(o0).modulatePixelate(src(o0),29).out(o2)
render(o2)

//peacock ripple
osc(20,.1).modulateRotate(gradient()).out()

//peacock ripple 2
osc(20,.1).thresh(.95).modulateRotate(gradient()).out() 

//peacokc ripple 3
osc(20,.1).thresh(.15).modulateRotate(gradient())
.sub(src(o0).scale(1,-1))
.out()

//peacokc ripple 4
osc(20,.1).thresh(.15).modulateRotate(gradient())
.sub(src(o0).scale([1,.5,.1,2],-1))
.out()

//peacock ripple + audio (mask)
osc(20,.1).thresh(.15).modulateRotate(gradient())
.blend(src(o0).scale([1,.5,.1,2],-1))
.mask(shape(4,()=>a.fft[0]*.5,.1))
.out()

//peacock ripple + audio (sub)
osc(20,.1).thresh(.15).modulateRotate(gradient())
.blend(src(o0).scale([1,.5,.1,2],-1))
.sub(shape(4,()=>a.fft[0]*.5,.1))
.out()

//perfect shapes
osc(20,.1).thresh(.15).modulateRotate(gradient())
.blend(src(o0).scale([1,.5,.1,2],5))
.mask(shape(99,()=>a.fft[0]*.95,.1).scale(1,.5))
.out()

//cell
shape(99,.5,.1).scale(1,.5).modulate(osc(20,.1),.02)
.out()

//cell2
shape(99,.5,.1).scale(1,.5).modulate(osc(20,.1),.02)
.sub(src(o0).scale(5))
.out()

//cell3
shape(99,.5,.1).scale(1,.5).modulate(osc(20,.1),.02)
.sub(src(o0).scale(.75))
.out()

//cell - octopus
shape(99,.5,.1).scale(1,.5).modulate(osc(20,.1),.02)
.sub(src(o0).scale(-1,-.75))
.out()

//crt - migrane
shape(99,.5,.1).scale(1,.5).modulate(osc(20,.1),.02)
.add(src(o0).scale(-1.1,-.75))
.modulate(noise(1000,1000),.002)
.out()



//global speed change + Yscroll
speed =.1
osc(40,.1,.9).hue(.4).posterize(9)
.mask(shape(99,.5).scale(1,.5))
.modulate(noise(1000,1000),.005)
.modulateScrollY(osc(10,.7),.1)
.out()


//global speed change + Yscroll 2
speed =1
osc(40,.1,.9).hue(.4).posterize(9)
.mask(shape(99,.5).scale(1,.5))
.modulate(noise(1000,1000),.005)
.modulateScrollY(noise(4.5,.4),.3)
.out()


//global speed change + Xscroll 2
speed =1
osc(40,.1,.9).hue(.4).posterize(9)
.mask(shape(99,.5).scale(1,.5))
.modulateScrollX(noise(4.5,.24),.1)
.modulate(noise(1000,1000),.002)
.out()


//blended jellyfish
speed =1
osc(40,.1,.9).hue(.4).posterize(9)
.mask(shape(99,.5).scale(1,.5))
.modulateScrollX(noise(2.5,.24),.1)
.modulate(noise(1000,1000),.002).luma(.4)
.blend(o0).scale(1,-1)
.out()

//screengrab jellyfish
speed =1
s0.initScreen()
osc(40,.1,.9).hue(.4).posterize(9)
.mask(shape(99,.5).scale(1,.5))
.modulateScrollX(noise(2.5,.24),.1)
.modulate(noise(1000,1000),.002).luma(.4)
.blend(o0).scale(1,-1)
.blend(gradient(.5).hue(.4),.1)
.blend(src(s0).scale(2,-2),.4)
.out()

//camera jellyfish 
speed =1
s0.initCam()
osc(40,.1,.9).hue(.4).posterize(9)
.mask(shape(99,.5).scale(1,.5))
.modulateScrollX(noise(2.5,.24),.1)
.modulate(noise(1000,1000),.002).luma(.4)
.blend(o0).scale(1,-1)
.blend(gradient(.5).hue(.4),.1)
.blend(src(s0).scale(2,-2).colorama(0),.4)
.out()


//screen capture jellyfish
speed =1
s0.initScreen()

osc(40,.1,.9).hue(.4).posterize(3)
.mask(shape(99,.5).scale(1,.5))
.modulateScrollX(noise(2.5,.24),.1)
.modulate(noise(1),()=>a.fft[1])
//.modulate(noise(1000,1000),.002).luma(.4)
.blend(o0).scale(1,-1)
.blend(gradient(.5).hue(.4),.1)
.blend(src(s0).scale(2,-2).colorama(0),.4)
.out()