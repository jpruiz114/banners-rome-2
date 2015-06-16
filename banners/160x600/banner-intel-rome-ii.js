(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.bannerintelromeii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// f4-click
	this.instance = new lib.f4click_1();
	this.instance.setTransform(-79.9,260,1,1,0,0,0,80,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).to({x:80,alpha:1},4).wait(45).to({alpha:0},10).wait(1));

	// f4-for
	this.instance_1 = new lib.f4for_1();
	this.instance_1.setTransform(-79.9,260,1,1,0,0,0,80,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).to({x:80,alpha:1},5).wait(40).to({alpha:0},10).wait(1));

	// f4-offer
	this.instance_2 = new lib.f4offer_1();
	this.instance_2.setTransform(-79.9,260,1,1,0,0,0,80,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({x:80,alpha:1},5).wait(35).to({alpha:0},10).wait(1));

	// f4-arrow-1
	this.instance_3 = new lib.f4arrow1_1();
	this.instance_3.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(184).to({_off:false},0).wait(45).to({alpha:0},10).wait(1));

	// f4-arrow-2
	this.instance_4 = new lib.f4arrow2_1();
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).wait(40).to({alpha:0},10).wait(1));

	// f4-intel-logo
	this.instance_5 = new lib.f4intellogo_1();
	this.instance_5.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).to({alpha:1},14).wait(35).to({alpha:0},10).wait(1));

	// f4-peel
	this.instance_6 = new lib.f4peel_1();
	this.instance_6.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({alpha:1},14).wait(35).to({alpha:0},10).wait(1));

	// f3-unlock
	this.instance_7 = new lib.f3unlock_1();
	this.instance_7.setTransform(-79.9,300,1,1,0,0,0,80,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({x:80,alpha:1},5).wait(44).to({x:240,alpha:0},10).to({_off:true},1).wait(60));

	// f3-the
	this.instance_8 = new lib.f3the_1();
	this.instance_8.setTransform(240,300,1,1,0,0,0,80,300);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(125).to({_off:false},0).to({x:80,alpha:1},4).wait(40).to({x:-79.8,alpha:0},10).to({_off:true},1).wait(60));

	// f3-power
	this.instance_9 = new lib.f3power_1();
	this.instance_9.setTransform(-79.9,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(129).to({_off:false},0).to({x:80,alpha:1},5).wait(35).to({x:240,alpha:0},10).to({_off:true},1).wait(60));

	// f3-game-case
	this.instance_10 = new lib.f3gamecase_1();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120).to({_off:false},0).to({alpha:1},14).wait(35).to({alpha:0},10).to({_off:true},1).wait(60));

	// f2-get
	this.instance_11 = new lib.f2get_1();
	this.instance_11.setTransform(-79.9,300,1,1,0,0,0,80,300);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({_off:false},0).to({x:80,alpha:1},9).wait(40).to({x:240,alpha:0},10).to({_off:true},1).wait(120));

	// f2-rome ii
	this.instance_12 = new lib.f2romeii_1();
	this.instance_12.setTransform(240,300,1,1,0,0,0,80,300);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60).to({_off:false},0).to({x:80,alpha:1},9).wait(40).to({x:-79.8,alpha:0},10).to({_off:true},1).wait(120));

	// f2-free
	this.instance_13 = new lib.f2free_1();
	this.instance_13.setTransform(-79.9,300,1,1,0,0,0,80,300);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({_off:false},0).to({x:80,alpha:1},9).wait(40).to({x:240,alpha:0},10).to({_off:true},1).wait(120));

	// f2-50 usd
	this.instance_14 = new lib.f250value_1();
	this.instance_14.setTransform(240,300,1,1,0,0,0,80,300);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({_off:false},0).to({x:80,alpha:1},9).wait(40).to({x:-79.8,alpha:0},10).to({_off:true},1).wait(120));

	// f1-buy
	this.instance_15 = new lib.f1buy_1();
	this.instance_15.setTransform(-79.9,300,1,1,0,0,0,80,300);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:80,alpha:1},9).wait(40).to({x:240,alpha:0},10).to({_off:true},1).wait(180));

	// f1-select-intel-products
	this.instance_16 = new lib.f1selectintelproducts_1();
	this.instance_16.setTransform(240,300,1,1,0,0,0,80,300);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:80,alpha:1},9).wait(40).to({x:-79.8,alpha:0},10).to({_off:true},1).wait(180));

	// f1-intel-logo
	this.instance_17 = new lib.f1intellogo_1();
	this.instance_17.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},9).wait(40).to({alpha:0},10).to({_off:true},1).wait(180));

	// f4-black-blood
	this.instance_18 = new lib.f4blackblood_1();
	this.instance_18.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(180).to({_off:false},0).wait(49).to({y:340},10).wait(1));

	// f3-black-blood
	this.instance_19 = new lib.f3blackblood_1();
	this.instance_19.setTransform(80,340,1,1,0,0,0,80,300);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120).to({_off:false},0).to({y:300},9).wait(50).to({_off:true},1).wait(60));

	// f2-black-blood
	this.instance_20 = new lib.f2blackblood_1();
	this.instance_20.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60).to({_off:false},0).wait(59).to({_off:true},1).wait(120));

	// f1-black-blood
	this.instance_21 = new lib.f1blackblood_1();
	this.instance_21.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(59).to({_off:true},1).wait(180));

	// background
	this.instance_22 = new lib.background();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_22}]},239).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,0,480,600);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1blackblood = function() {
	this.initialize(img.f1blackblood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1buy = function() {
	this.initialize(img.f1buy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1intellogo = function() {
	this.initialize(img.f1intellogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1selectintelproducts = function() {
	this.initialize(img.f1selectintelproducts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f250value = function() {
	this.initialize(img.f250value);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2blackblood = function() {
	this.initialize(img.f2blackblood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2free = function() {
	this.initialize(img.f2free);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2get = function() {
	this.initialize(img.f2get);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2romeii = function() {
	this.initialize(img.f2romeii);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3blackblood = function() {
	this.initialize(img.f3blackblood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3gamecase = function() {
	this.initialize(img.f3gamecase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3power = function() {
	this.initialize(img.f3power);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3the = function() {
	this.initialize(img.f3the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3unlock = function() {
	this.initialize(img.f3unlock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4arrow1 = function() {
	this.initialize(img.f4arrow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4arrow2 = function() {
	this.initialize(img.f4arrow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4blackblood = function() {
	this.initialize(img.f4blackblood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4click = function() {
	this.initialize(img.f4click);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4for = function() {
	this.initialize(img.f4for);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4intellogo = function() {
	this.initialize(img.f4intellogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4offer = function() {
	this.initialize(img.f4offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4peel = function() {
	this.initialize(img.f4peel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4peel_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4peel();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4offer_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4offer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4intellogo_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4intellogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4for_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4for();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4click_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4click();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4blackblood_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4blackblood();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4arrow2_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4arrow2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f4arrow1_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f4arrow1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3unlock_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3unlock();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3the_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3the();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3power_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3power();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3gamecase_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3gamecase();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3blackblood_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f3blackblood();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2romeii_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2romeii();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2get_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2get();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2free_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2free();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f2blackblood_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f2blackblood();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f250value_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f250value();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1selectintelproducts_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f1selectintelproducts();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1intellogo_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f1intellogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1buy_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f1buy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f1blackblood_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.f1blackblood();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;