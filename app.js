document.getElementById('headText').innerHTML = 'Click on the button to get your message';
document.getElementById('bottomText').innerHTML = `made by @sadieverse`;
document.getElementById('button').innerHTML = 'Get your message';

// function getData() {
//     let n = Math.floor(Math.random() * 27)
//     let result = fetch(`http://my-json-server.typicode.com/sadieverse/cookieserver/messages/${n}`)
//     .then(res => JSON.parse(res.value))
//     .catch(err =>{'Up to no good today('});
//     message = `${result}`;
//     console.log(message);
// }


// async function getData() {
//     let n = Math.floor(Math.random() * 27)
//     let result = await fetch(`http://my-json-server.typicode.com/sadieverse/cookieserver/messages/${n}`)
//     .then(res => res.json())
//     .then(result => {return result["title"]})
//     .catch(err =>{'Up to no good today('});
//     message = `${result}`;
//     console.log(result);
// }


// function getMessage() {
//     const newMes = document.createElement("div");
//     document.body.prepend(newMes);
//     newMes.innerHTML = '<p id="yourMessage"></p>';
//     document.getElementById("yourMessage").innerHTML = message;
// }
   

async function getData() {
    let n = Math.floor(Math.random() * 27)
    let result = await fetch(`http://my-json-server.typicode.com/sadieverse/cookieserver/messages/${n}`)
    .then(res => res.json())
    .then(result => {return result["title"]})
    .catch(err =>{'Up to no good today('});
    message = `${result}`;
    console.log(result);
    const newMes = document.createElement("div");
    document.body.prepend(newMes);
    newMes.innerHTML = '<p id="yourMessage"></p>';
    document.getElementById("yourMessage").innerHTML = message;
}



// function getMessage() {
//     const newMes = document.createElement("div");
//     document.body.prepend(newMes);
//     newMes.innerHTML = '<p id="yourMessage"></p>';
//     document.getElementById("yourMessage").innerHTML = message;
// }



