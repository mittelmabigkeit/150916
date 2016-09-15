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