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

for(let i=0;i<10;i++)
{
    for(j=0;j<5;j++)
    {
        if(j==0)
        document.write("#")
        else if(i+j==4)
        document.write("#")
        else if(j-i==-5)
        document.write("#")
        else
        document.write("&nbsp;&nbsp;")
    }
    document.write("<br/>")
    

}
// for(i=0;i<5;i++)
// {
//     for(j=0;j<9;j++)
//     {
//         if(i==0 || j==0 && j<8)
//         {
//             document.write("*")
//         }
//         else{
//             document.write("#")
//         }
//     }

//     document.write("<br/>")
// }