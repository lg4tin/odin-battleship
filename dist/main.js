(()=>{"use strict";class t{constructor(t){this.length=t,this.hits=0}hit(){this.hits++}isSunk(){return this.hits===this.length}}const e=new t(5);console.log(e.length);const s=new class{constructor(){this.missedAttacks=[],this.board=this.createBoard()}createBoard(){let t=[];for(let e=0;e<10;e++){t.push([]);for(let s=0;s<10;s++)t[e].push({index:[s+1,e+1],ship:null,hit:null})}return t}getBoard(){return this.board}getPeice(t,e){return this.board[t][e]}placeShip(e,s,i,h){if(s<0||s>9||i<0||i>9)return;let r=new t(e);if(this.getBoard()[s][i].ship=!0,"up"===h)for(let t=s;t<e+s;t++)this.getBoard()[s][t].ship=r;else for(let t=i;t<e+i;t++)this.getBoard()[t][i].ship=r}receiveAttack(t,e){this.getBoard()[t][e].ship&&this.getBoard()[t][e].ship.hit()}};s.placeShip(3,1,1,"up"),s.placeShip(5,5,4,"down"),s.receiveAttack(1,1),console.log(s.getBoard())})();