function perfectNum(){
var sum=0;
var n=parseInt(prompt("Enter a Number"));
for(i=0;i<n;i++)
{
	
	if(n%i==0)
	{
		sum += i;
	}
}	
	if(sum==n)
	{
		console.log("Number is perfect number");
	}
	else
	{
		console.log("Number is not a perfect number");
	}

}
perfectNum();



			