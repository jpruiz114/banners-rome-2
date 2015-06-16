(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.bannerintelromeii = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame-5-intel-logo
	this.instance = new lib.mc_frame5intellogo();
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).wait(15).to({_off:false},0).to({alpha:1},5).wait(40).to({alpha:0},15).wait(1));

	// frame-5-click-for-offer
	this.instance_1 = new lib.mc_frame5clickforoffer();
	this.instance_1.setTransform(364,-44.9,1,1,0,0,0,364,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).wait(20).to({_off:false},0).to({y:45},5).wait(35).to({alpha:0},15).wait(1));

	// frame-5-border
	this.instance_2 = new lib.mc_frame5border();
	this.instance_2.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).wait(25).to({_off:false},0).to({alpha:1},5).wait(30).to({alpha:0},15).wait(1));

	// frame-4-unlock
	this.instance_3 = new lib.mc_frame4unlock();
	this.instance_3.setTransform(364,-44.9,1,1,0,0,0,364,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).wait(10).to({_off:false},0).to({y:45},5).wait(35).to({y:135,alpha:0},5).to({_off:true},1).wait(85));

	// frame-4-the
	this.instance_4 = new lib.mc_frame4the();
	this.instance_4.setTransform(364,-44.9,1,1,0,0,0,364,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).wait(15).to({_off:false},0).to({y:45},5).wait(35).to({y:135,alpha:0},5).to({_off:true},1).wait(80));

	// frame-4-power
	this.instance_5 = new lib.mc_frame4power();
	this.instance_5.setTransform(364,-44.9,1,1,0,0,0,364,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).wait(20).to({_off:false},0).to({y:45},5).wait(35).to({y:135,alpha:0},5).to({_off:true},1).wait(75));

	// frame-2-get
	this.instance_6 = new lib.mc_frame2get();
	this.instance_6.setTransform(774,45,1,1,0,0,0,364,45);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).wait(5).to({_off:false},0).to({x:364},5).wait(40).to({y:-44.8,alpha:0},5).to({_off:true},1).wait(135));

	// frame-2-rome-ii
	this.instance_7 = new lib.mc_frame2romeii();
	this.instance_7.setTransform(774.1,45,1,1,0,0,0,370.4,45);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).wait(5).to({_off:false},0).to({x:364.1},10).wait(35).to({y:135,alpha:0},5).to({_off:true},1).wait(135));

	// frame-2-free
	this.instance_8 = new lib.mc_frame2free();
	this.instance_8.setTransform(774,45,1,1,0,0,0,364,45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).wait(5).to({_off:false},0).to({x:364},15).wait(30).to({y:-44.8,alpha:0},5).to({_off:true},1).wait(135));

	// frame-2-50-value
	this.instance_9 = new lib.mc_frame250value();
	this.instance_9.setTransform(774,45,1,1,0,0,0,364,45);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).wait(5).to({_off:false},0).to({x:364},20).wait(25).to({y:135,alpha:0},5).to({_off:true},1).wait(135));

	// frame-1-buy
	this.instance_10 = new lib.mc_frame1buy();
	this.instance_10.setTransform(654,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:364},9).wait(30).to({y:-44.8,alpha:0},5).to({_off:true},1).wait(185));

	// frame-1-select-intel-products
	this.instance_11 = new lib.mc_frame1selectintelproducts();
	this.instance_11.setTransform(654,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:364},14).wait(25).to({y:135,alpha:0},5).to({_off:true},1).wait(185));

	// frame-3-black
	this.instance_12 = new lib.frame3black();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},39).to({state:[{t:this.instance_12,p:{x:0}}]},50).to({state:[{t:this.instance_12,p:{x:0}}]},10).to({state:[{t:this.instance_12,p:{x:0}}]},55).to({state:[{t:this.instance_12,p:{x:-19.9}}]},1).to({state:[{t:this.instance_12,p:{x:-39.9}}]},1).to({state:[{t:this.instance_12,p:{x:-59.9}}]},1).to({state:[{t:this.instance_12,p:{x:-79.9}}]},1).to({state:[{t:this.instance_12,p:{x:-99.9}}]},1).to({state:[{t:this.instance_12,p:{x:-119.9}}]},1).to({state:[{t:this.instance_12,p:{x:-139.9}}]},1).to({state:[{t:this.instance_12,p:{x:-159.9}}]},1).to({state:[{t:this.instance_12,p:{x:-179.9}}]},1).to({state:[{t:this.instance_12,p:{x:-199.9}}]},1).to({state:[{t:this.instance_12,p:{x:-199.9}}]},65).wait(1));

	// black-spot
	this.instance_13 = new lib.mc_blackspotframe1();
	this.instance_13.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({x:298},3).to({x:262},3).to({x:244},4).wait(40).to({x:164},3).to({x:104},3).to({x:66},4).wait(55).to({x:-83.8},10).wait(66));

	// background
	this.instance_14 = new lib.background();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_14}]},39).to({state:[{t:this.instance_14}]},50).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},55).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},65).wait(1));

	// frame-5-black
	this.instance_15 = new lib.frame5black();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},229).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1018,90);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.blackspotframe1 = function() {
	this.initialize(img.blackspotframe1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.blackspotframe2 = function() {
	this.initialize(img.blackspotframe2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.blackspotframe3 = function() {
	this.initialize(img.blackspotframe3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.blackspotframe4 = function() {
	this.initialize(img.blackspotframe4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame1buy = function() {
	this.initialize(img.frame1buy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame1selectintelproducts = function() {
	this.initialize(img.frame1selectintelproducts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame250value = function() {
	this.initialize(img.frame250value);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame2free = function() {
	this.initialize(img.frame2free);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame2get = function() {
	this.initialize(img.frame2get);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame2romeii = function() {
	this.initialize(img.frame2romeii);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame32014 = function() {
	this.initialize(img.frame32014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame3black = function() {
	this.initialize(img.frame3black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame3gamecase = function() {
	this.initialize(img.frame3gamecase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame3text1 = function() {
	this.initialize(img.frame3text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame3text2 = function() {
	this.initialize(img.frame3text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame4power = function() {
	this.initialize(img.frame4power);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame4the = function() {
	this.initialize(img.frame4the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame4unlock = function() {
	this.initialize(img.frame4unlock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame5black = function() {
	this.initialize(img.frame5black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame5border = function() {
	this.initialize(img.frame5border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame5clickforoffer = function() {
	this.initialize(img.frame5clickforoffer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.frame5intellogo = function() {
	this.initialize(img.frame5intellogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame5intellogo = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame5intellogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame5clickforoffer = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame5clickforoffer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame5border = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame5border();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame4unlock = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame4unlock();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame4the = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame4the();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame4power = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame4power();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame2romeii = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame2romeii();
	this.instance.setTransform(6.4,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.4,0,728,90);


(lib.mc_frame2get = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame2get();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame2free = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame2free();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame250value = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame250value();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame1selectintelproducts = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame1selectintelproducts();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_frame1buy = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.frame1buy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc_blackspotframe1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.blackspotframe1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;