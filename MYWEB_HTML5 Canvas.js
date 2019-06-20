(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MYWEB_HTML5 Canvas_atlas_", frames: [[0,537,684,215],[0,0,529,535]]}
];


// symbols:



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(img.CachedTexturedBitmap_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3849,510);


(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["MYWEB_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(img.CachedTexturedBitmap_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3847,508);


(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(img.CachedTexturedBitmap_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6797,610);


(lib.资源4 = function() {
	this.initialize(ss["MYWEB_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_16();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1759,0.1759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1195.3,107.3);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.资源4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3259,0.3259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,172.4,174.4), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1923.5,254);


(lib.元件4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层_1
	this.instance = new lib.元件5();
	this.instance.parent = this;
	this.instance.setTransform(597.6,53.5,2.8432,2.8432,0,0,0,597.6,53.6);
	this.instance.alpha = 0.1914;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:597.7,scaleX:2.2464,scaleY:2.2464,x:597.85,y:53.55,alpha:0.4532},0).wait(1).to({scaleX:2.0316,scaleY:2.0316,alpha:0.5474},0).wait(1).to({scaleX:1.8798,scaleY:1.8798,x:597.8,alpha:0.614},0).wait(1).to({scaleX:1.7607,scaleY:1.7607,alpha:0.6663},0).wait(1).to({scaleX:1.6626,scaleY:1.6626,x:597.75,alpha:0.7093},0).wait(1).to({scaleX:1.5794,scaleY:1.5794,x:597.8,y:53.6,alpha:0.7458},0).wait(1).to({scaleX:1.5075,scaleY:1.5075,alpha:0.7774},0).wait(1).to({scaleX:1.4447,scaleY:1.4447,alpha:0.8049},0).wait(1).to({scaleX:1.3893,scaleY:1.3893,x:597.75,alpha:0.8292},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:53.65,alpha:0.8508},0).wait(1).to({scaleX:1.2961,scaleY:1.2961,y:53.6,alpha:0.8701},0).wait(1).to({scaleX:1.2569,scaleY:1.2569,alpha:0.8873},0).wait(1).to({scaleX:1.2217,scaleY:1.2217,y:53.65,alpha:0.9027},0).wait(1).to({scaleX:1.1902,scaleY:1.1902,y:53.6,alpha:0.9166},0).wait(1).to({scaleX:1.162,scaleY:1.162,y:53.65,alpha:0.9289},0).wait(1).to({scaleX:1.1367,scaleY:1.1367,x:597.7,alpha:0.94},0).wait(1).to({scaleX:1.1142,scaleY:1.1142,x:597.75,y:53.6,alpha:0.9499},0).wait(1).to({scaleX:1.0942,scaleY:1.0942,alpha:0.9587},0).wait(1).to({scaleX:1.0765,scaleY:1.0765,alpha:0.9665},0).wait(1).to({scaleX:1.0609,scaleY:1.0609,x:597.7,alpha:0.9733},0).wait(1).to({scaleX:1.0474,scaleY:1.0474,y:53.65,alpha:0.9792},0).wait(1).to({scaleX:1.0357,scaleY:1.0357,y:53.6,alpha:0.9843},0).wait(1).to({scaleX:1.0259,scaleY:1.0259,x:597.75,y:53.65,alpha:0.9886},0).wait(1).to({scaleX:1.0178,scaleY:1.0178,x:597.7,y:53.6,alpha:0.9922},0).wait(1).to({scaleX:1.0112,scaleY:1.0112,alpha:0.9951},0).wait(1).to({scaleX:1.0062,scaleY:1.0062,x:597.75,y:53.65,alpha:0.9973},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,alpha:0.9988},0).wait(1).to({scaleX:1.0007,scaleY:1.0007,x:597.7,alpha:0.9997},0).wait(1).to({regX:597.6,scaleX:1,scaleY:1,x:597.6,y:53.6,alpha:1,mode:"synched",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1101.5,-98.9,3398.5,305);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(86.2,87.2,1,1,0,0,0,86.2,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9493},0).wait(1).to({alpha:0.8986},0).wait(1).to({alpha:0.8479},0).wait(1).to({alpha:0.7971},0).wait(1).to({alpha:0.7464},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.5943},0).wait(1).to({alpha:0.5436},0).wait(1).to({alpha:0.4929},0).wait(1).to({alpha:0.4421},0).wait(1).to({alpha:0.3914},0).wait(1).to({alpha:0.3407},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.3373},0).wait(1).to({alpha:0.3847},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.4793},0).wait(1).to({alpha:0.5267},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.6213},0).wait(1).to({alpha:0.6687},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.7633},0).wait(1).to({alpha:0.8107},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.9053},0).wait(1).to({alpha:0.9527},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.4,174.4);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(83.85,84.8,0.9747,0.9747,0,0,0,86,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,168.1,170), null);


// stage content:
(lib.MYWEB_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(935.85,416.8,1,1,0,0,0,84,85);

	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(953.5,631.35,1,1,0,0,0,597.6,53.6);

	this.instance_2 = new lib.CachedTexturedBitmap_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(760.6,69.3,0.5,0.5);

	this.instance_3 = new lib.元件2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(957.6,123,1,1,0,0,0,961.6,127);
	this.instance_3.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 107, 0, 107, 0)];
	this.instance_3.cache(-2,-2,1928,258);

	this.instance_4 = new lib.CachedTexturedBitmap_13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4.5,-4.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214.4,535.5,2438.5,248.29999999999995);
// library properties:
lib.properties = {
	id: 'D7BD4A6FB1047F44863CD44F77FED017',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"CachedTexturedBitmap_13.png", id:"CachedTexturedBitmap_13"},
		{src:"CachedTexturedBitmap_15.png", id:"CachedTexturedBitmap_15"},
		{src:"CachedTexturedBitmap_16.png", id:"CachedTexturedBitmap_16"},
		{src:"MYWEB_HTML5 Canvas_atlas_.png", id:"MYWEB_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D7BD4A6FB1047F44863CD44F77FED017'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;