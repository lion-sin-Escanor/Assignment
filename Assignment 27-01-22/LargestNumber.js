var count=prompt("enter total number")
var arr=[];
 for(let i=0;i<count;i++)
    { 
	 var elem=prompt("enter your element ")
	    arr.push(parseInt(elem))
	 if(i==0)
	   {
		var max=arr[0]
	   }
	 else if(max<arr[i])
	   {
		max=arr[i]
	    }
		
     }
alert("The maximum number entered is"+max);
