// for(let i=0;i<=10;i++)
// {
//     for (let j=0;j<=20;j++)
//     {
//         if(j<10-i|| j>10+i)
//         {
//             document.write("&nbsp;&nbsp;")
//         }
//         else
//         {
//             document.write("*")
//         }
//     }
//     document.write("<br/>")
// }

// document.write("<br/>")
// document.write("<br/>")

for(let i=0;i<=10;i++)
{
    for (let j=0;j<=20;j++)
    {
        if((j==0 && i<=5)|| (j==10)|| (j==20 && i<=5) || i==5)
        {
            document.write("*")
        }
        else
        {
            document.write("&nbsp;&nbsp;")
        }
        
        
    }

    document.write("<br/>")
}

document.write("<br/>")
document.write("<br/>")

for(let i=0;i<10;i++)
{
    for(j=0;j<5;j++)
    {
        if(j==0)
        document.write("*")
        else if(i+j==4)
        document.write("*")
        else if(j-i==-5)
        document.write("*")
        else
        document.write("&nbsp;&nbsp;")
    }
    document.write("<br/>")
    

}

document.write("<br/>")
document.write("<br/>")


//A print
for(let i=0;i<5;i++)
{
    for(j=0;j<10;j++)
    {
        if((i+j==4) || (j-i==4) || (i==2 && j>2 && j<=5))
        {
       document.write("*")
        }
        else
        {
            document.write("&nbsp;&nbsp;")    
        }
    }
    document.write("<br/>")
    

}
document.write("<br/>")
document.write("<br/>")


//letter S
for(let i=0;i<7;i++)
{
 for(let j=0;j<5;j++)
 {
     if(i==0 || i==3 || i==6 ||(j==0 && i<4) || (j==4 && i>=3))
     {
         document.write("*")
     }
     else
     {
        document.write("&nbsp;&nbsp;")    
     }
 }
 document.write("<br/>")
}

document.write("<br/>")
document.write("<br/>")
document.write("<br/>")


//letter H
for(let i=0;i<5;i++)
{
 for(let j=0;j<5;j++)
 {
     if(j==0 || j==4 || i==2)
     {
         document.write("*")
     }
     else
     {
         document.write("&nbsp;&nbsp;")
     }

 }
 document.write("<br/>")
}
document.write("<br/>")
document.write("<br/>")

//letter I

for(let i=0;i<5;i++)
{
 for(let j=0;j<5;j++)
 {
     if(i==0 || i==4 || j==2)
     {
         document.write("*")
     }
     else
     {
         document.write("&nbsp;&nbsp;")
     }

 }
 document.write("<br/>")
}
document.write("<br/>")
document.write("<br/>")


//letter N

for(let i=0;i<5;i++)
{
 for(let j=0;j<5;j++)
 {
     if(j==0 || j==4 || j-i==0)
     {
         document.write("*")
     }
     else
     {
         document.write("&nbsp;&nbsp;")
     }

 }
 document.write("<br/>")
}

document.write("<br/>")
document.write("<br/>")


//A print
for(let i=0;i<5;i++)
{
    for(j=0;j<10;j++)
    {
        if((i+j==4) || (j-i==4) || (i==2 && j>2 && j<=5))
        {
       document.write("*")
        }
        else
        {
            document.write("&nbsp;&nbsp;")    
        }
    }
    document.write("<br/>")
}


document.write("<br/>")
document.write("<br/>")

for(let i=0;i<5;i++)
{
 for(let j=0;j<5;j++)
 {
     if(i==0 || j==2)
     {
         document.write("*")
     }
     else
     {
         document.write("&nbsp;&nbsp;")
     }

 }
 document.write("<br/>")
}

document.write("<br/>")
document.write("<br/>")




//letter H
for(let i=0;i<5;i++)
{
 for(let j=0;j<5;j++)
 {
     if(j==0 || j==4 || i==2)
     {
         document.write("*")
     }
     else
     {
         document.write("&nbsp;&nbsp;")
     }

 }
 document.write("<br/>")
}

