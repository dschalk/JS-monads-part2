"use strict";
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import cow from './cow.js';

function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':4002' + path;

    let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

var socket = createWebSocket('/');

var Name;
var Group = 'solo';
var xyz = 0;
var numsA = [];
var numsB = [];
var numsC = [];

socket.onopen = function (event) {
    console.log('cow onopen ', event);
    update0();
};

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
https://github.com/paldepind/snabbdom 
var oldVnode = document.getElementById('placeholder');

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19) { 
    return h('div',{style: style3}, 
    [  h('div',{style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '22px'}}, 
    [ h('h1', {style: {textAlign: 'center', color: '#ffba66'}}, 'JS-monads-part2'),
      h('span', 'This is the second page in the new Javascript Monads series. Detailed explanations of the basic monad constructor, "Monad" and its methods and the arguments they take can be found at '),
      h('a', {props: {href: 'http://schalk.net:3000' },  style: {color: '#EECCFF'}},'JS-monads-part1'), 
      h('span', ' and a code repo at '),
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part2'}, style: {color: '#EECCFF'}}, ' github repo' ),
      h('h2', {style: {textAlign: 'center', color: '#ffba66'}}, 'MonadIter' ),
      h('p', 'The monad constructors along with the instances and functions used in this demonstration are in a script included with the index.html page. Press F12, enter the name of a function, and it will be displayed. In the console, you can experiment with the monads and functions and create your own monads and functions. If you change one of the monads whose value is displayed in the right column, you can roll over (but don\'t click) the RESET button and see the change. '  ),
      h('p', 'The monad instances are created like this: " mM1 = new Monad(0, "mM1") ". The id mirrors the name of the monad so the "ret" method can return a new monad with the same name as the monad that called "ret", thereby replacing the calling monad with a mirror image of itself only holding a new value. In this demonstration, we don\'t mutate the monads, or anything else. This will be important when we start using Motorcycle.js in JS-monads-part4. Here is how the Monad and MonadIter are defined: '  ),
      cow.monad,
      h('p', 'Click the next button to execute the indicated code, then click the mMZ2.release() button below it four times.'  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4},
            [ cow.steps ],  ),
      h('br', ),    
      h('br', ),    
      h('button', {on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6}, `mMZ2.release()`  ),  
      h('p', 'Next, a demonstration of monads handling websockets messages. This is the foundation for the game demonstrated in page 3 of this series. In order to interact with the server, please enter some name.'  ),
      h('input', {style: inputStyle1, on: {keydown: updateLogin},  } ),
      h('button', {on: { mouseenter: update8e, mouseleave: update8l, click: updateNums }, props: {value: 0, id: '0'}, style: style8},
            m1[0]   ),
      h('button', {on: { mouseenter: update9e, mouseleave: update9l, click: updateNums }, props: {value: 1, id: '1'}, style: style9},
            m1[1]   ),
      h('button', {on: { mouseenter: update10e, mouseleave: update10l, click: updateNums }, props: {value: 2, id: '2'}, style: style10},
            m1[2]   ),
      h('button', {on: { mouseenter: update11e, mouseleave: update11l, click: updateNums }, props: {value: 3, id: '3'}, style: style11},
            m1[3]   ),
      h('p', ' ',  ),
      h('button', {on: { mouseenter: update12e, mouseleave: update12l, click: updateOp }, style: style12},
            m17[0]   ),
      h('button', {on: { mouseenter: update13e, mouseleave: update13l, click: updateOp }, style: style13},
            m17[1]   ),
      h('button', {on: { mouseenter: update14e, mouseleave: update14l, click: updateOp }, style: style14},
            m17[2]   ),
      h('button', {on: { mouseenter: update15e, mouseleave: update15l, click: updateOp }, style: style15},
            m17[3]   ),
      h('button', {on: { mouseenter: update16e, mouseleave: update16l, click: updateOp }, style: style16},
            m17[4]   ),
      h('p', '  '  ),

      h('button', {on: { mouseenter: update5e, mouseleave: update5l, 
        click: function() {socket.send(`CA#$42,${Group},${Name},6,6,12,20`) } }, style: styleRoll },
                     `ROLL`   ),
      h('p', {style: styleRoll2}, 'Now click ROLL. '  ),
      h('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, the test in updateCalc (below) is passed and a computation is performed. The result is placed at the end of the numbers display. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. ',  ),
      h('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. '  ),
      h('p', 'Every time you compute the number 20, mM13.x (your score) gets incremented by 1. Every time you compute "18", your score increases by 3. Clicking numbers and operators calls updateNums and UpdateOps, respectively. They call updateCalc. updateCalc (below) displays the flow of the application. First, mMZ2 and mMZ4 get locked, acquiring the code that might eventually get executed in their "p" attributes. Then, in the third part of the tupple, tests are performed, and if the computed number is 18 or 20, the score update information and a request for a new dice roll are sent to the server. ' ),
      h('p', 'The root of the computation tree is an anonymous monad. mM3 holds the numbers and mM8 holds the operator involved in the computation, whose result is stored in mM7. ' ),
      cow.dice,
      h('p', 'When numbers are clicked, they get pushed into mM3.x, an initially empty array. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it is time for the computation to go forward. '  ),
      h('p', 'mM1 holdd the initial dice roll and the subsequent arrays of available numbers. When calc returns "20", the player get an additional point and a new roll of the dice. If calc returns 18, the player get three points. '   ), 
      h('p', 'Using "bnd" with "next", any monad can release any block. A chain in the tree (sorry about the mixed metaphore) can branch into 2, 3, or any number of chains you decide to place in a tupple. It seems that any application could be organized into a single tree. '  ),
      h('span', 'The code for this along with some other demonstrations can be found at ' ),
      h('a', {props: {href: 'https://github.com/dschalk?tab=repositories'}, style: {color: '#EECCFF'}}, 'github.com/dschalk/' ),
      h('div', {style: {height: '300px'}} ),
        ] ), 
      h ('div',{style: { width: '30%', position: 'fixed', top: '40px', right: '15px', color: '#CCFDDA'}},
        [
          h('br'),
          h('span', 'mM1.x: '),
          h('span', {style: styleM}, '  ' + m1),
          h('br'),
          h('span', 'mM2.x: '),
          h('span', {style: styleM}, '  ' + m2),
          h('br'),
          h('span', 'mM3.x: '),
          h('span', {style: styleM}, '  ' + m3),
          h('br'),
          h('span', 'mM4.x: '),
          h('span', {style: styleM}, '  ' + m4),
          h('br'),
          h('span', 'mM5.x: '),
          h('span', {style: styleM}, '  ' + m5),
          h('br'),
          h('span', 'mM6.x: '),
          h('span', {style: styleM}, '  ' + m6),
          h('br'),
          h('span', 'mM7.x: '),
          h('span', {style: styleM}, '  ' + m7),
          h('br'),
          h('span', 'mM8.x: '),
          h('span', {style: styleM}, '  ' + m8),
          h('br'),
          h('span', 'mM9.x: '),
          h('span', {style: styleM}, '  ' + m9),
          h('br'),
          h('span', 'mM10.x: '),
          h('span', {style: styleM}, '  ' + m10),
          h('br'),
          h('span', 'mM11.x: '),
          h('span', {style: styleM}, '  ' + m11),
          h('br'),
          h('span', 'mM12.x: '),
          h('span', {style: styleM}, '  ' + m12),
          h('br'),
          h('span', 'mM13.x: '),
          h('span', {style: styleM}, '  ' + m13),
          h('br'),
          h('span', 'mM14.x: '),
          h('span', {style: styleM}, '  ' + m14),
          h('br'),
          h('span', 'mM15.x: '),
          h('span', {style: styleM}, '  ' + m15),
          h('br'),
          h('span', 'mM16.x: '),
          h('span', {style: styleM}, '  ' + m16),
          h('br'),
          h('span', 'mM17.x: '),
          h('span', {style: styleM}, '  ' + m17),
          h('br'),
          h('span', 'mM18.x: '),
          h('span', {style: styleM}, '  ' + m18),
          h('br'),
          h('span', 'mM19.x: '),
          h('span', {style: styleM}, '  ' + m19),
          h('br'),
          h('br'),
          h('button', {on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR},
                     `RESET`   ),
          h('br', ),           
          h('br', ),           
           
        ] )        
    ] )
}  

var newVnode  = () => {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x);
  return newVnode;
}

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

var displayOff = function displayOff(x,a) {
    document.getElementById(a).style.display = 'none';
    return ret(x);
};

var displayInline = function displayInline(x,a) {
    document.getElementById(a).style.display = 'inline';
    return ret(x);
};

var newRoll = function(v) {
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
  return ret(v);
};

var score = function score(v,j) {
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + 0);
  return mM13.ret(v + j);
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

function updateNums(e) {
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

function updateLogin(e) {
     let v = e.target.value;
     if (v == '' ) {
       return;
     } 
     if( e.keyCode == 13 ) {
       socket.send("CC#$42" + v);
       Name = v;
       inputStyle1 = inputStyleB;
       mM3.ret([]).bnd(mM2.ret);
       update0();
     }
}

function updateR(event) {
  mM1.ret([]);
  mM2.ret(0);
  mM3.ret(0);
  mM4.ret(0);
  mM5.ret(0);
  mM6.ret(0);
  mM7.ret(0);
  mM8.ret(0);
  mM9.ret(0);
  mM10.ret(0);
  mM11.ret(0);
  mM12.ret(0);
  mM13.ret(0);
  mM14.ret('Score: ' + mM13.x);
  mM15.ret(0);
  mM16.ret(0);
  mM17.ret(0);
  mM18.ret(0);
  mM19.ret(0).bnd(update);
}

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
  oldVnode = patch(oldVnode, newVnode());
}

function updateNext(event) {
  mMZ2.release()  
  oldVnode = patch(oldVnode, newVnode());
}

function updateEvent(event) {
  mMZ2.ret(event);
  oldVnode = patch(oldVnode, newVnode());
}

oldVnode = patch(oldVnode, newVnode());

socket.onmessage = function(event) {
  console.log('cow', event);
  let gameArray = event.data.split(",");
  let makeStr = x => {
    let l = x.length;
    let str = '';
      for (let i=5; i<l; i+=1) {
        str = str + ', ' + x[i];
      }
    return (x[4] + ' ' + str);
  }
  let d2 = event.data.substring(0,6);
  // let d3 = event.data.substring(2,6);
  let sendersGroup = gameArray[1]; 
  let sender = gameArray[2];
  let extra = gameArray[3];
  let ext4 = gameArray[4];
  let ext5 = gameArray[5];
  let ext6 = gameArray[6];
  let ext7 = gameArray[7];
  let ext8 = gameArray[8];
  // let group = that.data.group;
  // let name = that.state.name;
  let ar = extra.split("<br>");
  let ar2 = ar.map(function (x) {
    return x.split("_")
  })
      switch (d2) {
          case "CC#$42":                         // Not broadcast. Login message.
            if (extra === '%#8*&&^1#$%^')  {
              mM6.ret('Name taken');
              setTimeout( function () {
                document.location.reload(false);
              },2000);
            }
            else {
              styleRoll = style2;
              styleRoll2 = style2;
              mM6.ret(sender + '\'s socket is now open');
              // mM9.ret([
              update0();
            }
      
          break;

          case "CZ#$42":                             // Solutions.
          break;
          
          case "CA#$42":                             // Triggedarkred by ROLL
              mM1.ret([extra,  ext4,  ext5,  ext6]);
              mM17.ret(['add', 'subtract', 'mult', 'div', 'concat']); 
              mM3.ret([]);
              mM8.ret(0)
              .bnd(displayInline,'0')
              .bnd(displayInline,'1')
              .bnd(displayInline,'2')
              .bnd(displayInline,'3')
              update0();
          break;

          case "DI#$42":                              // Changes data.information .
          break

          case "CE#$42":                             // Updates numbers during play.
          break;

          case "CB#$42":                               // Updates the scoreboaard.
          break;

          case "CD#$42":
          break;

          case "CF#$42":                              // Re-set after a each clculation.
          break;

          case "CH#$42":
          break;

          case "CK#$42":                      // Updates DS_T after each calculation.
          break;

          case "CQ#$42":                 
          break;

          case "DQ#$42":                 
          break;

          case "EQ#$42":                 
          break;

          case "FQ#$42":                 
          break;

          case "GQ#$42":                 
          break;

          case "HQ#$42":                 
          break;

          case "CR#$42":                 // Resets the player interface after each round.
          break;

          case "CY#$42": // Triggedarkred by clicking "SCORE!".
          break;

          case "XY#$42":              // Triggedarkred by clicking "SCORE!" after "IMPOSSIBLE".
          break;

          case "DY#$42":                               // Triggered by clicking  "IMPOSSIBLE".
          break;

          case "DC#$42":
          break;

          case "DZ#$42":                                  // NOT IN USE
          break;

          case "IA#$42":
          break;

          default:
          break;
      }
   }

var inputStyle1 = inputStyleA;

var inputStyleA = { backgroundColor: '#d8d17d', display: 'inline'} ;

var inputStyleB = { display: 'none'} ;

var style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var styleHide = {display: 'none'};

var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '22px', textAlign: 'left' };

var styleM = {color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '21px' };

var styleMI = {color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '21px' };

var styleRoll = {display: 'none'};
var styleRoll2 = {display: 'none'};

var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var style9 = style2;
var style9e = style1;
var style9l = style2;

var style10 = style2;
var style10e = style1;
var style10l = style2;

var style11 = style2;
var style11e = style1;
var style11l = style2;

var style12 = style2;
var style12e = style1;
var style12l = style2;

var style13 = style2;
var style13e = style1;
var style13l = style2;

var style14 = style2;
var style14e = style1;
var style14l = style2;

var style15 = style2;
var style15e = style1;
var style15l = style2;

var style16 = style2;
var style16e = style1;
var style16l = style2;

var style17 = style2;
var style17e = style1;
var style17l = style2;

var style18 = style2;
var style18e = style1;
var style18l = style2;

var style19 = style2;
var style19e = style1;
var style19l = style2;

var style20 = style2;
var style20e = style1;
var style20l = style2;

var style21 = style2;
var style21e = style1;
var style21l = style2;

var style22 = style2;
var style22e = style1;
var style22l = style2;

var style23 = style2;
var style23e = style1;
var style23l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function updateInput1(event) {
  inputStyle1 = inputStyleB;
  oldVnode = patch(oldVnode, newVnode());
}

function update3e(event) {
  style0 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update3l(event) {
  style0 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update4e(event) {
  style4 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update4l(event) {
  style4 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update5e(event) {
  style5 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update5l(event) {
  style5 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update6e(event) {
  style6 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update6l(event) {
  style6 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update7e(event) {
  style7 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update7l(event) {
  style7 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update8e(event) {
  style8 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update8l(event) {
  style8 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update9e(event) {
  style9 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update9l(event) {
  style9 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update10e(event) {
  style10 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update10l(event) {
  style10 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update11e(event) {
  style11 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update11l(event) {
  style11 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update12e(event) {
  style12 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update12l(event) {
  style12 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update13e(event) {
  style13 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update13l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update14e(event) {
  style14 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update14l(event) {
  style14 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update15e(event) {
  style15 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update15l(event) {
  style15 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update16e(event) {
  style16 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update16l(event) {
  style16 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update17e(event) {
  style17 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update17l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update18e(event) {
  style18 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update18l(event) {
  style18 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update19e(event) {
  style19 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update19l(event) {
  style19 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update20e(event) {
  style20 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update20l(event) {
  style20 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update21e(event) {
  style21 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update21l(event) {
  style21 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update22e(event) {
  style22 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update22l(event) {
  style22 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update23e(event) {
  style23 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update23l(event) {
  style23 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRe(event) {
  styleR = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRl(event) {
  styleR = style2;
  oldVnode = patch(oldVnode, newVnode());
}

var update = function update(x,mon) {
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMZ1.x, mMZ2.x);
  oldVnode = patch(oldVnode, newVnode);
  return mon;
}

