'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Monad = function Monad(z) {
  var _this = this;

  _classCallCheck(this, Monad);

  this.x = z;

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, [_this.x].concat(args));
  };

  this.ret = function (a) {
    _this.x = a;
    return _this;
  };

  this.fmap = function (f) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this : arguments[1];

    mon.ret(f.apply(undefined, [mon.x].concat(args)));
    return mon;
  };
};

;

var MonadIter = function MonadIter(z, g) {
  var _this2 = this;

  _classCallCheck(this, MonadIter);

  this.x = z;
  this.id = g;
  this.p = [];
  this.block = function () {
    _this2.x = true;
    return _this2;
  };
  this.release = function () {
    _this2.x = false;
    var self = _this2;
    var p = _this2.p;
    if (p[1] === 'bnd') {
      p[2].apply(p, [self.x, self].concat(_toConsumableArray(p[3])));
      return self;
    }
    if (p[1] === 'ret') {
      self.x = p[2];
      return self;
    }
    if (p[1] === 'fmap') {
      p[3].ret(p[2].apply(p, [p[3].x].concat(_toConsumableArray(p[4]))));
      return p[3];
    }
  };
  this.bnd = function (func) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var self = _this2;
    if (self.x === false) {
      func.apply(undefined, [self.x].concat(args));
      return self;
    }
    if (self.x === true) {
      self.p = [self.id, 'bnd', func, args];
      return self;
    }
  };
  this.fmap = function (f) {
    for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this2 : arguments[1];

    var self = _this2;
    if (self.x === false) {
      mon.ret(f.apply(undefined, [mon.x].concat(args)));
      return mon;
    }
    if (self.x === true) {
      self.p = [self.id, 'fmap', f, mon, args];
      return self;
    }
  };
  this.ret = function (a) {
    var self = _this2;
    if (self.x === false) {
      self.x = a;
    }
    if (self.x === true) {
      self.p = [self.id, 'ret', a];
      return self;
    }
    _this2.x = false;
    return _this2;
  };
};

var ret = function ret(v) {
  var mon = new Monad(v);
  return mon;
}

var cube = function(v) {
  var mon = new Monad(v*v*v);
  return mon;
}

var add = function(a,b) {
  var mon = new Monad(a+b);
  return mon;
}

var M = function M(a) {
  return new Monad(a);
};

var mM1 = M([]);
var mM2 = M(0);
var mM3 = M(0);
var mM4 = M({});
var mM5 = M(0);
var mM6 = M(0);
var mM7 = M(0);
var mM8 = M(0);
var mM9 = M(0);
var mM10 = M(0);
var mM11 = M([]);
var mM12 = M(0);
var mM13 = M(0);
var mM14 = M(0);
var mM15 = M(0);
var mM16 = M(0);
var mM17 = M(0);
var mM18 = M(0);
var mM19 = M(0);
var mMscbd = M([]);
var mMmessages = M([]);
var mMscoreboard = M([]);
var mMmsg = M([]);
var mMgoals = M([]);
var mMnbrs = M([]);
var mMnumbers = M([]);

var MI = function MI(a, b) {
  return new MonadIter(a, b);
};

var mMZ1 = MI(false, 'mMZ1');
var mMZ2 = MI(false, 'mMZ2');
var mMZ3 = MI(false, 'mMZ3');
var mMZ4 = MI(false, 'mMZ4');
var mMZ5 = MI(false, 'mMZ5');
var mMZ6 = MI(false, 'mMZ6');
var mMZ7 = MI(false, 'mMZ7');
var mMZ8 = MI(false, 'mMZ8');
var mMZ9 = MI(false, 'mMZ9');

var toNums = function toNums(x) {
  let y = x.map(x => parseFloat(x));
  return mon; 
};

var calc = function calc(a,op,b) { 
  var result;
  switch (op) {
      case "add": result = (a + b);
      break;
      case "subtract": result = (a - b);
      break;
      case "mult": result = (a * b);
      break;
      case "div": result = (a / b);
      break;
      case "concat": result = (a+""+b)*1.0;
      break;
      default : 'Major Malfunction in calc.';
  }
  return result;
};

var pause = function(x,t,mon2) {
  mon2.block();
  let time = t*1000;
  setTimeout( function() {
    mon2.release();
  },time );
  return mon;
};

var push = function push(x,v) {
  x.push(v);
  let mon = new Monad(x);
  return mon;
};

var displayOff = function displayOff(x,a) {
    document.getElementById(a).style.display = 'none';
    let mon = new Monad(x);
    return mon;
};

var displayInline = function displayInline(x,a) {
  console.log('x, a ', x, a);
    document.getElementById(a).style.display = 'inline';
    let mon = new Monad(x);
    return mon;
};

var displayBlock = function displayBlock(x,a) {
    document.getElementById(a).style.display = 'block';
    let mon = new Monad(x);
    return mon;
};

var clean = function clean(x) {
    console.log('x ', x);
    let cleanX = x.filter(x => (x !== "" && x !== undefined));
    console.log('cleanX ', cleanX);
    let mon = new Monad(cleanX);
    return mon;
};
  
var toFloat = function toFloat(x) {
  var newx = x.map(function (a) {
    return parseFloat(a);
  });
  let mon = new Monad(newx);
  return mon;
};

var splice = function splice(x,i) {
  let ar = x.splice(i,1);
  let mon = new Monad(ar);
  return mon;
}

var next = function next(x,condition,mon2) {
  if (condition) {
    mon2.release();
  }
  let mon = new Monad(x);
  return mon
}

var doub = function doub(v) {
  let mon = new Monad(v + v);
  return mon;
};

var square = function square(v) {
  let mon = new Monad(v * v);
  return mon;
};

var tripple = function tripple(mon) {
  mon.ret(mon.x + mon.x + mon.x);
  return mon;
};

var mult = function mult(x, y) {
  let mon = new Monad(x * y);
  return mon;
};

var rand = function rand(a, b) {
  return Math.floor(Math.random() * (a - b)) + b;
};

var ran = function ran(mon) {
  mon.ret(Math.floor(Math.random() * -4 + 5));
  return mon;
};

var chance = function chance(mon) {
  var a = rand(1, 5);
  var b = rand(1, 5);
  var c = rand(1, 5);
  mM1.ret(a);
  mM2.ret(b);
  mM3.ret(c);
  if (a === b && a === c) {
    mM4.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mM4.ret('Pair. Try for three');
    return mon;
  }
  mM4.ret('Zilch. Don\'t give up now.');
  return mon;
};

var ch = function ch(mon, a, b, c) {
  if (a === b && a === c) {
    mon.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mon.ret('Pair. Try for three');
    return mon;
  }
  mon.ret('Zilch. Don\'t give up now.');
  return mon;
};

var jackpot = function jackpot(mon) {
  var k = 1;
  for (k; k < 5; k += 1) {
    if (x === [k, k, k, k, k, k]) {
      mM10.ret("Jackpot!");
      return mon;
    }
  }
  mM10.ret("No jackpot time");
  return mon;
};

var cu = function cu(x) {
  return x * x * x;
};
var sq = function sq(x) {
  return x * x;
};
var du = function du(x) {
  return x * x;
};
var ad = function ad(a, b) {
  return a + b;
};
var id = function id(x) {
  return x;
};
var lo = function lo(x) {
  return console.log(x);
};

var block = function block(mon, mon2) {
  mon2.flag = true;
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var release = function release(mon, mon2) {
  mon2.flag = false;
  console.log('***************************', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var delay = function delay(mon) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000);
  });
};


