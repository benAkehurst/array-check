var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

var num = 0;

for (var i = 0; i < arr.length; i++) {
	num++;
	if (num === arr[i]){
		console.log(num);
	}
	else{
		console.log("error" + " " + num + " " + "is missing");
		break;
	}
}