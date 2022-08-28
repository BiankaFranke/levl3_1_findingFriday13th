// JS Check
// console.log('it works');

let findFriday13 = (year) => {
    let inputBadFridy = document.querySelector('#badFriday');
    let number;
    const month = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let headline = document.createElement('h2');
    let listFridays = document.createElement('ul');

    let counter = 0;
    for (let i = 1; i <= 11; i++) {
        let d = new Date(i + "/13/" + year);                          
        if (d.getDay() == 5) {
            counter++;
            console.log(i);
            headlineInput = `Das Jahr ${year} hat ${counter} Unglückstage.`;
            headline.innerText = headlineInput;
            inputBadFridy.appendChild(headline);

            if (d.getMonth() == 0) {
                number = month[0];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 1) {
                number = month[1];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 2) {
                number = month[2];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 3) {
                number = month[3];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 4) {
                number = month[4];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 5) {
                number = month[5];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 6) {
                number = month[6];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 7) {
                number = month[7];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 8) {
                number = month[8];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 9) {
                number = month[9];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 10) {
                number = month[10];
                let listElementFridays = document.createElement('li');
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else if (d.getMonth() == 11) {
                number = month[11];
                let listElementFridays = document.createElement('li');    
                result = `Friday, 13th ${number} ${year}`;
                listElementFridays.innerText = result;
                listFridays.appendChild(listElementFridays); 
            } else {
                console.log('error');
            }
            inputBadFridy.appendChild(listFridays);
        };
    };
    // return counter;
};

// Testen der Funktion
findFriday13(2020);
findFriday13(2015);
findFriday13(2016);