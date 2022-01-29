var count=prompt("enter total number")
var arr=[];
 for(let i=0;i<count;i++)
    { 
	 var elem=prompt("enter your element ")
	    arr.push(parseInt(elem))
		
     }
  for(let i=count-1;i>=0;i--)
    {
	console.log(arr[i]+" ")
     }
