document.getElementById('headText').innerHTML = 'Click on the button to get your message';
document.getElementById('bottomText').innerHTML = `made by @sadieverse`;
document.getElementById('button').innerHTML = 'Get your message';

function getData() {
    let n = Math.floor(Math.random() * 27)
    let result = fetch(`http://my-json-server.typicode.com/sadieverse/cookieserver/messages/${n}`)
    .catch(error =>{'Up to no good today('});
    message = result.getString("title");
    console.log(message);
}
function getMessage() {
    const newMes = // document.createElement("div");
    document.body.appendChild(newMes);
    newMes.innerHTML = '<p id="yourMessage"></p>';
    document.getElementById("yourMessage").innerHTML = message;
}
   




// function randomMessage(message)
//     const random = Math.floor(Math.random() * 51);
    
//     let entity;
//     const card = document.createElement("div");
//     card.classList.add("card", cardSuit.toLowerCase());
//     card.innerHTML = '<span class="card-value-suit top">' + cardValue + entity + "</span>" + '<span class="card-suit">' + entity + "</span>" + '<span class="card-value-suit bot">' + cardValue + entity + "</span>";
//     document.body.appendChild(card);
//   }
//   const cards = deckBuilder();
//   randomCard(cards);
