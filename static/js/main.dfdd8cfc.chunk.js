(this["webpackJsonpcard-game"]=this["webpackJsonpcard-game"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r.n(a),s=r(8),u=r.n(s),i=r(2),l=(r(14),function(e){var t=Object(a.useState)(""),r=Object(i.a)(t,2),c=r[0],s=r[1];return e.playerArray[e.playerNum-1]=c,Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{children:["Player ",e.playerNum," "]}),Object(n.jsx)("input",{onChange:function(e){return function(e){e.preventDefault(),s(e.target.value)}(e)},value:c}),e.playerArray.every((function(e){return""!==e}))?e.setShuffleButton(!0):e.setShuffleButton(!1)]})}),h=function(e){var t=Object(a.useState)(0),r=Object(i.a)(t,2),c=r[0],s=r[1],u=new Array(10).fill("");u.length=c;var h=Object(a.useState)(!1),o=Object(i.a)(h,2),j=o[0],d=o[1];return Object(n.jsxs)("div",{className:"landing-page",children:[Object(n.jsx)("h1",{children:"Welcome"}),Object(n.jsx)("label",{children:"Enter the Number of Players"}),Object(n.jsxs)("select",{onChange:function(e){return function(e){s(e.target.value)}(e)},children:[Object(n.jsx)("option",{value:0,children:"0"}),Object(n.jsx)("option",{value:1,children:"1"}),Object(n.jsx)("option",{value:2,children:"2"}),Object(n.jsx)("option",{value:3,children:"3"}),Object(n.jsx)("option",{value:4,children:"4"}),Object(n.jsx)("option",{value:5,children:"5"}),Object(n.jsx)("option",{value:6,children:"6"}),Object(n.jsx)("option",{value:7,children:"7"}),Object(n.jsx)("option",{value:8,children:"8"}),Object(n.jsx)("option",{value:9,children:"9"}),Object(n.jsx)("option",{value:10,children:"10"})]}),u.map((function(e,t){return Object(n.jsx)(l,{playerNum:t+1,playerArray:u,setShuffleButton:d})})),Object(n.jsx)("br",{}),!j||Object(n.jsx)("button",{onClick:function(){return e.setPageNum(e.pageNum+1),void e.setPlayerArray(u)},children:"Shuffle"})]})},o=r(7),j=r(3),d=r(4),f=function(){function e(t,r){Object(j.a)(this,e),this.suite=t,this.value=r}return Object(d.a)(e,[{key:"getValue",value:function(){switch(this.value){case"J":return 11;case"Q":return 12;case"K":return 13;case"A":return 14;default:return this.value}}}]),e}(),b=function(){function e(){Object(j.a)(this,e),this.suite=["S","C","H","D"],this.charaterValues=["J","Q","K","A"],this.cards=[],this.intialise=function(){var e,t=Object(o.a)(this.suite);try{for(t.s();!(e=t.n()).done;){for(var r=e.value,n=2;n<11;n++)this.cards.push(new f(r,n));var a,c=Object(o.a)(this.charaterValues);try{for(c.s();!(a=c.n()).done;){var s=a.value;this.cards.push(new f(r,s))}}catch(u){c.e(u)}finally{c.f()}}}catch(u){t.e(u)}finally{t.f()}}}return Object(d.a)(e,[{key:"removeCard",value:function(){return 0===this.cards.length||this.cards.pop()}},{key:"addCard",value:function(e){if(52===this.cards.length)return!0;for(var t=0;t<this.cards.length;t++)if(this.cards[t].suite===e.suite&&this.cards[t].value===e.value)return!0;this.cards.push(e)}},{key:"shuffle",value:function(){this.cards.sort((function(e,t){return.5-Math.random()}))}}]),e}(),O=function(){function e(t){Object(j.a)(this,e),this.name=t,this.cards=[]}return Object(d.a)(e,[{key:"giveCard",value:function(e){this.cards.push(e)}},{key:"getScore",value:function(){var e=0;for(var t in this.cards)e+=this.cards[t].getValue();return e}}]),e}(),v=function(){function e(){Object(j.a)(this,e),this.players=[]}return Object(d.a)(e,[{key:"addPlayer",value:function(e){if(10===this.players.length)return!0;this.players.push(e)}},{key:"distribute",value:function(e){e.shuffle();for(var t=0;e.cards.length>0;)t===this.players.length&&(t=0),this.players[t].giveCard(e.removeCard()),t++}},{key:"playerScoreOrder",value:function(){this.players.sort((function(e,t){return e.getScore()-t.getScore()}))}}]),e}(),p=function(e){return Object(n.jsxs)("div",{className:"player-card",children:[Object(n.jsxs)("h3",{children:["Player ",e.index]}),Object(n.jsx)("h2",{children:e.player.name}),Object(n.jsx)("h2",{children:e.player.getScore()}),e.player.cards.map((function(e){return Object(n.jsxs)("h4",{children:[e.suite," ",e.value]})}))]})},y=function(e){var t=function(){e.setPageNum(1)},r=new v,c=new b;c.intialise();var s=Object(a.useState)(!0),u=Object(i.a)(s,2),l=u[0],h=u[1];return setTimeout((function(){h(!1)}),3e3),l?Object(n.jsx)("h1",{className:"shuffling",children:"Shuffling..."}):Object(n.jsxs)("div",{className:"shuffled-page",children:[Object(n.jsx)("h1",{children:"Shuffled Menu"}),Object(n.jsxs)("div",{className:"player-cards",children:[e.playerArray.map((function(e){return r.addPlayer(new O(e))})),r.distribute(c),r.players.map((function(e,t){return Object(n.jsx)(p,{player:e,index:t+1})}))]}),Object(n.jsx)("button",{onClick:function(){return t},children:"Back"})]})},x=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)([]),u=Object(i.a)(s,2),l=u[0],o=u[1];switch(r){case 1:return Object(n.jsx)(h,{setPageNum:c,pageNum:r,setPlayerArray:o});case 2:return Object(n.jsx)(y,{setPageNum:c,pageNum:r,playerArray:l});default:return Object(n.jsx)(h,{setPageNum:c,pageNum:r,setPlayerArray:o})}};u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dfdd8cfc.chunk.js.map