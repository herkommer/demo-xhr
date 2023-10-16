//Denna JS körs på klienten, dvs i webbläsaren
//den laddas in i samband med anropet till index.html
//index.html har en script src angiven för denna fil (client.js)
console.log('hey');

//Jag vill läsa in innehållet från data.txt och visa upp det på sidan
//ni vill göra något i kod som ni kan göra manuellt...
//ex localhost:4242/data.txt funkar!
//men detta ska göras med kod!

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:4242/data.jsons');
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState == 4) {
        console.log('data received');
        console.log(xhr.responseText);
    }
}
xhr.send();