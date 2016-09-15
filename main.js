var sumBellForGoTo={
	"atlantic":666,
	"num":14.88,
	"str_one":'ave satani',
	"logic":true,
}
for (var a in sumBellForGoTo)
	console.log(a);

delete sumBellForGoTo["num"];
console.log(sumBellForGoTo);

sumBellForGoTo.abcd=12345;
console.log(sumBellForGoTo);

var truegods={
	"azazel":999,
	"velial":"squad",
	"mefisto":4.20,
	"lucifer":true,
	"LaVey":{bible:666,church:"burn"}
}
console.log(truegods.LaVey.bible);


var exampleobject=Object.create({x:5,y:"text",z:3.8,s:false,f:{one:1,two:2}})
for (var l in exampleobject)
	console.log(l);

var obj = new Object({q:8,w:"asd",e:4.4,r:true,t:{aaa:111,two:222}})
console.log(obj);

function solution(exampleobject,obj){
for (bag in obj) {
	exampleobject[bag]=obj[bag];
}
return exampleobject
}
console.log(l);