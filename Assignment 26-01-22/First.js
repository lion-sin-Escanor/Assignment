var a=prompt("Enter First Number");
var b=prompt("Enter Second Number");
var c=prompt("Enter Third Number");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
if(a<b && a<c){
alert(a+ "  is the smallest");
}
else if(b<a && b<c){
alert(b +" is the smallest");
}
else{
alert(c+"  is the smallest");
}