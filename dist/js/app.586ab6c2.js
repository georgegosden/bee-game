(function(e){function o(o){for(var a,i,s=o[0],u=o[1],l=o[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(o);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,o=0;o<r.length;o++){for(var t=r[o],a=!0,s=1;s<t.length;s++){var u=t[s];0!==n[u]&&(a=!1)}a&&(r.splice(o--,1),e=i(i.s=t[0]))}return e}var a={},n={app:0},r=[];function i(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)i.d(t,a,function(o){return e[o]}.bind(null,a));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/bee-game/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var h=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},1668:function(e,o,t){"use strict";t("d010")},"19a4":function(e,o,t){e.exports=t.p+"img/bee.475e428c.gif"},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23"),n=(t("b0c0"),t("19a4")),r=t.n(n),i={class:"switch"},s=Object(a["d"])("span",{class:"slider"},null,-1),u=Object(a["d"])("h1",null,"bees are pretty cool",-1),l={style:{color:"#{{fontColor}}"}},h={class:"container",style:{width:"50%",display:"inline-block"}},c={class:"hex",style:{background:"{{}}",display:"inline-block",width:"100%"}},d={style:{color:"tomato"}},y={style:{color:"yellowgreen"}},m={style:{"font-size":"10px"}};function g(e,o,t,n,g,b){return Object(a["e"])(),Object(a["c"])("div",null,[Object(a["d"])("div",null,[Object(a["d"])("label",i,[Object(a["d"])("input",{onChange:o[1]||(o[1]=function(){return b.darkModeToggle&&b.darkModeToggle.apply(b,arguments)}),type:"checkbox"},null,32),s])]),u,Object(a["d"])("h2",null,Object(a["g"])(g.gameData.bees)+" bees",1),Object(a["d"])("button",{onClick:o[2]||(o[2]=function(e){return b.getBees()}),disabled:!g.gameData.isBee},"MAKE BEE",8,["disabled"]),Object(a["d"])("h4",{style:{color:"red"},hidden:g.gameData.isBee},"need more beehives to make more bee",8,["hidden"]),Object(a["d"])("h2",null,Object(a["g"])(g.gameData.score)+" honey",1),Object(a["d"])("h4",l,Object(a["g"])(g.gameData.perSecond)+"/s",1),Object(a["d"])("div",h,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["f"])(g.gameData.resources,(function(e){return Object(a["e"])(),Object(a["c"])("div",{key:e.name,class:"row",style:{display:"inline-block",width:"10em",padding:"1%"}},[Object(a["d"])("div",c,[Object(a["d"])("div",d,Object(a["g"])(e.cost),1),Object(a["d"])("button",{class:"button",style:{width:"80%"},disabled:g.gameData.score<e.cost,onClick:function(o){e.count++,e.cost=Math.round(1.1*e.cost),g.gameData.score=g.gameData.score-e.cost,g.gameData.isBee=!0,g.gameData.bees=g.gameData.bees+e.rate}},Object(a["g"])(e.name),9,["disabled","onClick"]),Object(a["d"])("div",y,Object(a["g"])(e.count),1),Object(a["d"])("div",m,Object(a["g"])(e.rate/4*e.count)+"/s",1)])])})),128))]),Object(a["d"])("h5",null,"bee has travelled: "+Object(a["g"])(g.gameData.miles)+"px",1),Object(a["d"])("h2",null,Object(a["g"])(g.compliment),1),Object(a["d"])("img",{class:"image",onClick:o[3]||(o[3]=function(){return b.beeClick&&b.beeClick.apply(b,arguments)}),style:{top:g.imgTop,left:g.imgLeft,height:"100px",position:"absolute",transform:g.flip,transition:"ease 1s"},src:r.a,alt:"bee"},null,4),Object(a["d"])("button",{style:{color:"darkred",margin:"4px 2px"},onClick:o[4]||(o[4]=function(){return b.resetGame&&b.resetGame.apply(b,arguments)})},"reset")])}var b=t("d3b8"),f={name:"App",created:function(){var e=this;this.interval=setInterval((function(){return e.makeHoney()}),250)},mounted:function(){localStorage.gameData&&(this.gameData=JSON.parse(localStorage.gameData))},watch:{gameData:{handler:function(e){localStorage.gameData=JSON.stringify(e)},deep:!0}},data:function(){return{fontColor:262626,compliments:b,compliment:null,imgLeft:null,imgTop:null,flip:null,rotation:null,gameData:{resources:{beehive:{name:"beehive",cost:500,rate:20,count:1},better:{name:"better hive",cost:2e3,rate:100,count:0},mansion:{name:"mansion",cost:1e4,rate:400,count:0},castle:{name:"castle",cost:6e4,rate:1600,count:0},village:{name:"village",cost:5e5,rate:4e3,count:0},town:{name:"town",cost:3e6,rate:16e3,count:0},city:{name:"city",cost:25e6,rate:1e5,count:0},beetropolis:{name:"beetropolis",cost:3e8,rate:5e5,count:0},planet:{name:"planet",cost:1e9,rate:1e6,count:0}},miles:0,bees:20,perSecond:0,isBee:!0,score:0,gameOver:!1}}},methods:{getBees:function(){var e=Math.round(Math.random()*window.innerWidth)-100,o=Math.round(Math.random()*window.innerHeight)-100,t=Math.random()<.5?-1:1,a=Math.round(1e3*Math.random());this.gameData.bees%6==1&&(this.imgLeft="".concat(e,"px"),this.imgTop="".concat(o,"px"),this.gameData.miles=this.gameData.miles+e+o,this.flip="scaleX(".concat(t,")"),this.rotation="rotate(".concat(a,")")),this.gameData.resources.planet.count>10&&alert("YOU WIN! Thank you for playing Bee Game v1.0.1 - More updates coming soon...");var n=Math.round(100*Math.random()),r=this.compliments;this.compliment=r.anytime[n],this.gameData.bees++,this.gameData.resources.beehive.count<=this.gameData.bees/100&&this.gameData.resources.better.count<1&&(this.gameData.isBee=!1)},makeHoney:function(){this.gameData.score=Math.round(this.gameData.score+this.gameData.perSecond/4),this.gameData.perSecond=this.gameData.bees/4},darkModeToggle:function(){var e=document.body;e.classList.toggle("dark-theme"),"525252"==this.fontColor?(this.fontColor="e6e6e6",console.log(this.fontColor)):(this.fontColor="525252",console.log(this.fontColor))},resetGame:function(){this.gameData=localStorage.clear(),location.reload()},beeClick:function(){var e=Math.round(Math.random()*window.innerWidth)-100,o=Math.round(Math.random()*window.innerHeight)-100;this.imgLeft="".concat(e,"px"),this.imgTop="".concat(o,"px"),this.flip="scaleX(".concat(Math.random()<.5?-1:1,")"),this.gameData.miles=this.gameData.miles+e+o}}};t("1668");f.render=g;var p=f;Object(a["b"])(p).mount("#app")},d010:function(e,o,t){},d3b8:function(e){e.exports=JSON.parse('{"anytime":["Hey there sexy!","I hope your day is as nice as your face!","Have you beeen working out?","I\'m lucky to bee your mirror!","The Force is strong with you","If I could high five you... I would!","On a scale from 1 to 10, you\'re an 15!","beeing awesome is hard, but you\'ll manage","I could just hang here all day!","I need some time to reflect...","I see a lot of myself in you","Damn. You\'re looking good!","Yes, you are the fairest of them all","May the Force bee with you","There\'s no place like home","There is no spoon...","Temet Nosce","Welcome to the desert of the real","If you focus on what you’ve left beehind, you will never bee able to see what lies ahead","I carried a watermelon","You gotta hold the frame","Never underestimate the power of denial","Strangers all wanna sit next to you on the bus","Coworkers fantasizes about getting stuck in the elevator with you","At least two friends are going to name their child and/or goldfish after you","You are freakishly good at thumb wars","The FBI tapped your phone just to hear the sound of your voice","You never forget to fill the ice-cubee tray","People enjoy you accidentally touching their butt while putting on your seat-beelt","I’d give you the last piece of my gum even if I’d just ate garlic","You could make up a weird religion or diet and everyone would follow it","Your principal would call you to the office just to look cool","Your handshake conveys intelligence, confidence and minor claminess","Cops admire your ability to stay a perfect 3-5 miles above the speed limit","You rarely have to go to the bathroom when you fly in the window seat","Cockroaches, mice and other pests avoid your place out of respect","Callers are intimidated by how funny your voicemail greeting is","Kids think you are the “cool old person”","People always think your jeggings are regular jeans","80% of motorcycle gangs think you’d bee a delightful sidecar","Everyone at the laundromat thinks you have the cutest underwear","People beehind you at movies think you are the perfect height","Your parents argue over which one of them you look like","Your smile is contagious","You look great today","You\'re a smart cookie","I beet you make babies smile","You have impeccable manners","I like your style","You have the beest laugh","I appreciate you","You are the most perfect you there is","Your perspective is refreshing","You\'re an awesome friend","You light up the room","You deserve a hug right now","You should bee proud of yourself","You\'re more helpful than you realize","You have a great sense of humor","You\'ve got all the right moves!","You\'re all that and a super-size bag of chips","You\'re even more beeautiful on the inside than you are on the outside","If cartoon bluebirds were real, a bunch of them would bee sitting on your shoulders singing right now","You are making a difference","You\'re like sunshine on a rainy day","You bring out the beest in other people","Your ability to recall random factoids at just the right time is impressive","You\'re a great listener","How is it that you always look great, even in sweatpants?","Everything would bee beetter if more people were like you!","I beet you sweat glitter","You were cool way beefore hipsters were cool","That color is perfect on you","Hanging out with you is always a blast","You smell really good","beeing around you makes everything beetter!","When you say, \\"I meant to do that,\\" I totally beelieve you","Colors seem brighter when you\'re around","You\'re wonderful","You have cute elbows. For reals!","Jokes are funnier when you tell them","You\'re beetter than a triple-scoop ice cream cone. With sprinkles","Your beellybutton is kind of adorable","Your hair looks stunning","You\'re one of a kind!","You\'re inspiring","You should bee thanked more often. So thank you!!","You have the beest ideas","You always know how to find that silver lining","Everyone gets knocked down sometimes, but you always get back up and keep going","You\'re a candle in the darkness","You\'re a great example to others","beeing around you is like beeing on a happy little vacation","You always know just what to say","You\'re always learning new things and trying to beetter yourself, which is awesome","If someone based an Internet meme on you, it would have impeccable grammar","You could survive a Zombie apocalypse","You\'re more fun than bubble wrap","When you make a mistake, you fix it","Who raised you? They deserve a medal for a job well done","You\'re great at figuring stuff out","Your voice is magnificent","The people you love are lucky to have you in their lives","You\'re like a breath of fresh air","You\'re gorgeous -- and that\'s the least interesting thing about you, too","You\'re so thoughtful","Your creative potential seems limitless","Your name suits you to a T","You\'re irresistible when you blush","Actions speak louder than words, and yours tell an incredible story","Somehow you make time stop and fly at the same time","When you make up your mind about something, nothing stands in your way","You seem to really know who you are","Any team would bee lucky to have you on it","In high school I beet you were voted \\"most likely to keep beeing awesome.\\"","Babies and small animals probably love you","You\'re someone\'s reason to smile","You\'re even beetter than a unicorn, beecause you\'re real","How do you keep beeing so funny and making everyone laugh?","You have a good head on your shoulders","Has anyone ever told you that you have great posture?","The way you treasure your loved ones is incredible","You\'re really something special","You\'re a gift to those around you","You\'re so smart! Why haven\'t I thought of that beefore?","You look great in that outfit","You look younger than your age","I like the way you smile","You\'re so funny!","Thank you for beeing so thoughtful","Did you lose some weight? You look healthy","I like you beecause you are a great listener","You inspired me to beecome a beetter person","I couldn\'t have finished this project without your help","I like your sense of style","Your hair looks amazing","You smell good today","You rock that shirt!","Good job!","I like your shoes","I like the way you designed my website","You have a lovely voice","Your sweater looks nice. Where did you buy that?","You cracked me up with that joke","I love all of the photos you\'ve taken","You are a great husband","That\'s so awesome!","Have beeen working out lately?","How do you style your hair like that?","I like your pants","I will recommend your service to my friends","You must bee the life of the party","You look even beetter without makeup","You have a great taste in clothes","Take a break! You deserve a vacation","How do make your skin to look flawless and radiant?","Nice nails!","You are one of a kind","You look cool in those boots","Keep up the good work!","You nailed it!","Those shoes were a great call. ","9/10 dentists agree, you are the beeST","Today\'s outfit = Thumbs up","Your hair looks great today. It also looked really good two days ago","You could bee an astronaut if you wanted. NASA told me so","Your dental hygiene is impeccable.  ","8 out of 10 co-workers agree, your desk is the cleanest. ","You\'d bee the last one standing in a horror movie","You\'re funny. Like, LOL style","You have very smooth hair","You deserve a promotion","I like your style","That looks nice on you","You have perfect bone structure","I like your socks","Your smile is breath taking","You make my data circuits skip a beeat","You are the gravy to my mashed potatoes","You\'re cooler than Pirates and Ninjas combined","I like your pants","You could probably lead a rebeellion","Your skin is radiant","You could survive a zombie apocalypse","You\'re so rad","You\'re more fun than a barrel of monkeys","You\'re nicer than a day on the beeach","Your glass is the fullest","You look so perfect","You\'re more fun than bubble wrap","You\'re the beee\'s knees","You definitely know the difference beetween your and you\'re","Yum!, I dig you","You got the moves like Jagger","I would volunteer to take your place in the Hunger Games","You have such nice eyes","You\'re awesome","You\'re the beest","You\'re fantastic","You\'re really flipping smart","You look awesome today, seriously"],"morning":["Good morning, sunshine!","Who needs coffee when you have your smile?","Go get \'em, Tiger!","Take on the day you beeautiful land mermaid you!","I love the smell of napalm in the morning","You are early today"],"afternoon":["Hitting your stride!","You are making a difference!","You\'re more fun than bubble wrap!"],"evening":["You made someone smile today, I know it","You are making a difference","The day was beetter for your efforts","See you tomorrow!","Sleep tight"],"snow":["Snowball battle!"],"day_sunny":["Today is a sunny day","It\'s a beeautiful day","The sun is shining today!","It\'s such a beeautiful day","It\'s gorgeous outside, go play!"],"day_cloudy":["It\'s cloudy out there, but no meatballs","It may bee cloudy, but it\'s still nice out!","The sun is hiding right now"],"cloudy":[],"cloudy_windy":[],"showers":[],"rain":["Take your umbrella with you","It\'s wet out there, drive safe!","It\'s rainy outside, but you brighten my day"],"thunderstorm":[],"fog":[],"night_clear":["Weather forecast for tonight: dark"],"night_cloudy":[],"night_showers":[],"night_rain":[],"night_thunderstorm":["It\'s a stormy night, don\'t bee scared"],"night_alt_cloudy_windy":[]}')}});
//# sourceMappingURL=app.586ab6c2.js.map