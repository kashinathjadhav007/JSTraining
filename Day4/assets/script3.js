///Tip calculator
var Value = [100,120,200,300,40,38,100];
var total = [];

const calcTip = (Value) => 
{
for(let i = 0; i < Value.length; i++)
{
if(Value[i] <= 100)
{

total.push(Value[i] + (Value[i] * 0.15))
}
else
{

total.push(Value[i] + (Value[i] * 0.20))
}
}
}
calcTip(Value);

console.log('bill val', Value)
console.log('final bill', total);
