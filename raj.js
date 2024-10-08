document.getElementById("btn1").addEventListener("click",dataSave);
document.getElementById("btn2").addEventListener("click",dataDisplay);
function dataSave(){
    let rollno=document.getElementById("rn").value;
    let name=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;
    let api="http://localhost:3000/student";
    fetch(api, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json' //set content 
        },
        body: JSON.stringify({
            "id": 1 ,
            "rollno": rollno ,
            "name": name ,
            "city":city ,
            "fees": fees
        })
    }).then((res)=>{
        alert("Data Save") ;
    });
    }
    async function dataDisplay () {
        let mydata="";
        let api="http://localhost:3000/student";
        const myobj=await fetch(api);
        const data=await myobj.json();

        data.map((key)=>{
            mydata+=`<h1> Rollno : ${key.rollno} </h1>
                      <h2> Student name : ${key.name} </h2>
                      <h2> Address : ${key.city}</h2>
                        <h2> Total fess : ${key.fees}</h2>
                        `
        })
        document.getElementById("demo").innerHTML=mydata;
    }