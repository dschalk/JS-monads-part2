import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const monad = h('pre', {style: {color: '#AFEEEE' }}, 
`
  class Monad {
    constructor(z,g) {

      this.x = z;
      if (arguments.length === 1) {this.id = 'anonymous'}
      else {this.id = g}

      this.bnd = (func, ...args) => {
        func(this.x, ...args);
      };

      this.ret = a => {
        var str = this.id
        if (str === 'anonymous') {return new Monad(a,'anonymous')};
        eval(str + '= new Monad(a,' + "str" + ')'); 
        return window[this.id];
      };

      this.fmap = (f, mon = this, ...args) => {      
        mon.ret( f(mon.x, ...args));
        return mon;

      };
    }
  };
  
  class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.flag = false;
      this.p = [];

      this.block = () => {
        this.flag = true;
        return this;
        }

      this.release = () => {
        let self = this;
        let p = this.p;
        p[1](self.x, ...p[2]);
        self.flag = false;
        return self;
      }
 
      this.bnd = (func, ...args) => {
        let self = this;
        if (self.flag === false) {
          func(self.x, ...args);
          return self;
        }
        if (self.flag === true) {
          self.p = [self.id, func, args];
          return self;
        }
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
     .bnd(() => mMZ2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMZ2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMZ2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMZ2.block()
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
    .bnd(push,e.target.textContent)
    .bnd(() => {mM1.x[e.target.value] = ""; return ret('temp');})
    .bnd(update)
    updateCalc();
  }
  
  function updateOp(e) {
    mM8.ret(e.target.textContent);
    updateCalc();
  }  

  function updateCalc() {  
    if ((mM8.x === 0) || (mM3.x.length !== 2)) {return};
    ret('temp').bnd(() => (
      ( mMZ2.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 1))
                    .bnd(() => mM13
                    .ret(mM13.x + 1)
                    .bnd(() => send()))) ),
      ( mMZ4.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 3))
                    .bnd(() => mM13
                    .ret(mM13.x + 3)
                    .bnd(() => send()))) ),
      (mM3
                    .bnd(toFloat)
                    .bnd((x => mM3.ret(x)
                    .bnd(() => mM7      
                    .ret(calc(mM3.x[0], mM8.x, mM3.x[1]))
                    .bnd(x => mM1.bnd(push, x)
                    .bnd(clean)
                    .bnd(x => mM1.ret(x)
                    .bnd(next, (mM7.x == 18), mMZ4)
                    .bnd(next, (mM7.x == 20), mMZ2) 
                    .bnd(displayOff, x.length)
                    .bnd(() => mM3
                    .ret([])
                    .bnd(() => mM4
                    .ret(0).bnd(mM8.ret)
                    .bnd(() => mM5.ret('Done')
                    .bnd(update)   )))))))) )
    )) 
  }

  var next = function next(x,mon,bool,mon2) {  
    if (bool) {
      mon2.release();
    }
    return mon
  }  
               
  var send = function(event) {
    socket.send("CA#$42,solo," + LoginName +",6,6,12,20");
  };
`
);  


const send = h('pre', {style: {color: '#AFEEEE' }}, 
`    
               `
);  

const nex = h('pre', {style: {color: '#AFEEEE' }}, 
`  var next = function next(x,mon,bool,mon2) {
    if (bool) {
      mon2.release();
    }
    return mon
  }  `
);  




export default {monad, steps, nex, dice, send};




