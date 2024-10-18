function dayMsg(){
    const day=document.getElementById("day").value;
    switch(day)
    {
        case "Monday":
            console.log("start of week");
            break;
        case "Tuesday":
            console.log("Second day still");
            break;
        case "Wednesday":
            console.log("weekday");
            break;
        case "Thursday":
            console.log("Almost there");
            break;
        case "Friday":
            console.log("Finally friday");
            break;
        default:
            console.log("Weekend");
            break;
    }
}