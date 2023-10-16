//ny variant, nu med fetch api istället för XHR
//obs fetch api, kapslar in (dvs använder sig av) XHR objektet

/* fetch('/data')
    .then( response => response.json)
    .then( data => console.log(data))
    .catch(error => console.log('fel: ' + error));
*/

document.getElementById('btnGetData').addEventListener('click', loadData);

async function loadData() {
    //alert('clicked');
    let response = await fetch('http://localhost:4242/data.json');
    let anka = await response.json()
    console.log(anka);
    PopulateData(anka);
}

function PopulateData(swan) {
    const MyData = document.getElementById('pelican');
    MyData.innerHTML = '';

    swan.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent= `${contact.name} ${contact.email}`;
        MyData.appendChild(listItem);
    });
}