function calc()
{
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const opr=document.getElementById("opr").value;
    let ans=0;
    switch(opr)
    {
        case '+':
            ans=num1+num2;
            break;
        case '-':
            ans=num1-num2;
            break;
        case '*':
            ans=num1*num2;
            break;
        case '/':
            ans=num1/num2;
            break;
    }
    console.log(ans);
}
