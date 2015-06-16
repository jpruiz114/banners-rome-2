(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.bannerintelromeii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// intel logo
	this.instance = new lib.mc_f4intellogo();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({alpha:1},15).wait(36));

	// peel
	this.instance_1 = new lib.mc_f4peel();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({alpha:1},15).wait(36));

	// click
	this.instance_2 = new lib.mc_f4click();
	this.instance_2.setTransform(-29.9,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({x:150},5).wait(46));

	// for
	this.instance_3 = new lib.mc_f4for();
	this.instance_3.setTransform(450,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(184).to({_off:false},0).to({x:150},5).wait(41));

	// offer
	this.instance_4 = new lib.mc_f4offer();
	this.instance_4.setTransform(-109.9,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).to({x:150},5).wait(36));

	// unlock
	this.instance_5 = new lib.mc_f3unlock();
	this.instance_5.setTransform(-149.9,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({x:150},5).wait(40).to({x:450},5).to({_off:true},1).wait(60));

	// the
	this.instance_6 = new lib.mc_f3the();
	this.instance_6.setTransform(150,205,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).to({y:125},5).wait(40).to({y:205},5).to({_off:true},1).wait(55));

	// power
	this.instance_7 = new lib.mc_f3power();
	this.instance_7.setTransform(410,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(129).to({_off:false},0).to({x:150},5).wait(40).to({x:-149.8},5).to({_off:true},1).wait(50));

	// get
	this.instance_8 = new lib.mc_f2get();
	this.instance_8.setTransform(50,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({x:150},5).wait(38).to({x:50},5).to({_off:true},1).wait(122));

	// rome ii
	this.instance_9 = new lib.mc_f2romeii();
	this.instance_9.setTransform(350,125,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).to({x:150},5).wait(38).to({x:350},5).to({_off:true},1).wait(118));

	// free
	this.instance_10 = new lib.mc_f2free();
	this.instance_10.setTransform(90,125,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({_off:false},0).to({x:150},5).wait(38).to({x:90},5).to({_off:true},1).wait(114));

	// 50 usd
	this.instance_11 = new lib.mc_f250usdvalue();
	this.instance_11.setTransform(390,125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71).to({_off:false},0).to({x:150},5).wait(38).to({x:390},5).to({_off:true},1).wait(110));

	// buy
	this.instance_12 = new lib.mc_f1buy();
	this.instance_12.setTransform(30,125,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({x:150},5).wait(35).to({x:30},5).to({_off:true},1).wait(175));

	// select intel products
	this.instance_13 = new lib.mc_f1selectintelproducts();
	this.instance_13.setTransform(350,125,1,1,0,0,0,150,125);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({x:150},5).wait(35).to({x:350},5).to({_off:true},1).wait(170));

	// blood splatter
	this.instance_14 = new lib.mc_f4blackpatch2();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(200).to({_off:false},0).wait(30));

	// blood splatter
	this.instance_15 = new lib.mc_f4blackpatch1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(190).to({_off:false},0).wait(9).to({_off:true},1).wait(30));

	// blood splatter
	this.instance_16 = new lib.mc_bloodsplatterf4();
	this.instance_16.setTransform(150,190,1,1,0,0,0,150,150);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(180).to({_off:false},0).to({y:60},9).to({_off:true},1).wait(40));

	// blood splatter
	this.instance_17 = new lib.mc_bloodsplatterf3();
	this.instance_17.setTransform(150,165,1,1,0,0,0,150,125);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(103).to({_off:false},0).to({y:125},6).wait(70).to({_off:true},1).wait(50));

	// blood splatter
	this.instance_18 = new lib.mc_bloodsplatterf2();
	this.instance_18.setTransform(150,185,1,1,0,0,0,150,125);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50).to({_off:false},0).to({y:125},9).wait(43).to({_off:true},1).wait(127));

	// blood splatter
	this.instance_19 = new lib.mc_bloodsplatterf1();
	this.instance_19.setTransform(150,265,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({y:125},9).wait(40).to({_off:true},1).wait(180));

	// background
	this.instance_20 = new lib.background();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,390);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bloodsplatterf1 = function() {
	this.initialize(img.bloodsplatterf1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bloodsplatterf2 = function() {
	this.initialize(img.bloodsplatterf2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bloodsplatterf3 = function() {
	this.initialize(img.bloodsplatterf3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bloodsplatterf4 = function() {
	this.initialize(img.bloodsplatterf4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,360);


(lib.f1buy = function() {
	this.initialize(img.f1buy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f1selectintelproducts = function() {
	this.initialize(img.f1selectintelproducts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f250usdvalue = function() {
	this.initialize(img.f250usdvalue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f2free = function() {
	this.initialize(img.f2free);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f2get = function() {
	this.initialize(img.f2get);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f2romeii = function() {
	this.initialize(img.f2romeii);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f3power = function() {
	this.initialize(img.f3power);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f3the = function() {
	this.initialize(img.f3the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f3unlock = function() {
	this.initialize(img.f3unlock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4blackpatch1 = function() {
	this.initialize(img.f4blackpatch1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4blackpatch2 = function() {
	this.initialize(img.f4blackpatch2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4click = function() {
	this.initialize(img.f4click);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4for = function() {
	this.initialize(img.f4for);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4intellogo = function() {
	this.initialize(img.f4intellogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4offer = function() {
	this.initialize(img.f4offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.f4peel = function() {
	this.initialize(img.f4peel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4peel = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4peel();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4offer = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4offer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4intellogo = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4intellogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4for = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4for();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4click = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4click();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4blackpatch2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4blackpatch2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f4blackpatch1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4blackpatch1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f3unlock = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3unlock();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f3the = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3the();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f3power = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3power();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f2romeii = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2romeii();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f2get = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2get();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f2free = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2free();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f250usdvalue = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f250usdvalue();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f1selectintelproducts = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f1selectintelproducts();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_f1buy = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f1buy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_bloodsplatterf4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.bloodsplatterf4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,360);


(lib.mc_bloodsplatterf3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.bloodsplatterf3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_bloodsplatterf2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.bloodsplatterf2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_bloodsplatterf1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.bloodsplatterf1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;