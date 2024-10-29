const url="https://randomuser.me/api";
const getuser = async ()=>{
    const res= await fetch(url);
    const data= await res.json();
    console.log(data.results[0]);
    const user= data.results[0];
    document.getElementById('userinfo').innerHTML=
    `<img src=${user.picture.medium}><br>
    Name: ${user.name.title} ${user.name.first} ${user.name.last}
    <br>
    Gender: ${user.gender}
    <br>
    E-mail: ${user.email}
    <br>
    Phone No: ${user.cell}
    <br>
    State: ${user.location.state}`;
}

// getuser();