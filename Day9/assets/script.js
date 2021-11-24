//first task
let arr=[1,2,3,4,5,6,1,1,10,11];

function add(val)
{
    let cnt2=0;
for(i=0;i<arr.length;i++)
{
   if(arr[i]==val)
   {
       cnt2++;
   }
}
if(cnt2==0)
{
    arr.push(val);
    console.log("updated array"+arr);
}
else
{
    console.log("duplicate Element");
}
}

add(12);


//second Task


let arr2=[3,4,5,7,8,10,3,3,7,7,8];
let cnt=0;
let arr3=[];

function count_frequancy(arr2)
{
for(let i=0;i<arr2.length;i++)
{
    cnt=0;
    for(let j=i+1;j<arr2.length;j++)
    {
        if(arr2[i]==arr2[j])
        {
            cnt++;
            
        }
    }

    if(cnt==0)
    {
     arr3.push(arr2[i]);
    }
}

console.log(arr3)

let cnt3=0;
for(i=0;i<arr3.length;i++)
{
    cnt3=0;
    for(j=0;j<arr2.length;j++)
    {
        if(arr3[i]==arr2[j])
        {
            cnt3++;
        }
    }

    console.log("count of "+ arr3[i]+" = "+cnt3);
}
}

count_frequancy();