import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const monad = h('pre', {style: {color: '#AFEEEE' }}, `  var Monad = function Monad(z, g) {
    var _this = this;

    this.x = z;
    if (arguments.length === 1) {
      this.id = 'anonymous';
    } else {
      this.id = g;
    };

    this.bnd = function (func, ...args) {
       return func(_this.x, ...args);
    };

    this.ret = function (a) {
      window[_this.id] = new Monad(a, _this.id);
      return window[_this.id]
    };
  };               

  class MonadIter {
    var _this = this;
    constructor() {

      this.p = function() {};

      this.release = () => {
        return _this.p();
      }
 
      this.bnd = func => {
          _this.p = func;
      }
    }
  }
` );  
  
const steps = h('pre', {style: {color: '#AFEEEE' }}, 
`
  function updateSteps(event) {
    mM1.ret(0).bnd(x => mM2.ret(x).bnd(x => mM3.ret(x)
     .bnd(x => mM4.ret(x)
     .bnd(() => mM1.ret('Click the mMZ2.release() button to proceed')
     .bnd(() => mMZ2
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMZ2
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMZ2
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMZ2
     .bnd(() => mM1.ret(0).bnd(x => mM2.ret(x).bnd(() => mM3.ret(0)
     .bnd(() => mM4.ret(0))
      ))))))))))))));
  oldVnode = patch(ol_dVnode, newVnode());
}
`
 );  

const dice = h('pre', {style: {color: '#AFEEEE' }}, 
`  function updateNums(e) {
    mM3
    .bnd(push,e.target.textContent);
    mM1.x[e.target.value] = "";
    update0();
    if (mM3.x.length === 2 && mM8.x !== 0) {updateCalc();}
}

  function updateOp(e) {
      mM8.ret(e.target.textContent)
      .bnd(update)
      if (mM3.x.length === 2 && mM8.x !== 0) {updateCalc();}
  }
  
  function updateCalc() {  
    ret('start').bnd(() => (
        ( mMZ2.bnd(() => mM13
                      .bnd(score,1)
                      .bnd(() => mM14
                      .ret('Score: ' + (mM13.x))
                      .bnd(newRoll))) ),
        ( mMZ4.bnd(() => mM13
                      .bnd(score,3)
                      .bnd(() => mM14
                      .ret('Score: ' + (mM13.x))
                      .bnd(newRoll))) ),
        (mM3.bnd(x => mM7
                      .ret(calc(x[0], mM8.x, x[1]))
                      .bnd(next, 18, mMZ4)
                      .bnd(next, 20, mMZ2) 
                      .bnd(() => mM1.bnd(push,mM7.x)
                      .bnd(mM1.ret)
                      .bnd(displayOff, ((mM1.x.length)+''))
                      .bnd(() => mM3
                      .ret([])
                      .bnd(() => mM4
                      .ret(0).bnd(mM8.ret)
                      .bnd(update) )))) ) 
    ))     
  }
  
  var next = function next(x,y,mon2) {
    if (x === y) {
      mon2.release();
    }
    return ret(x);
  }
`
);  


export default {monad, steps, dice};




