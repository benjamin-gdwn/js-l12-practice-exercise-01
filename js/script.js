const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector('.num-users');

// fetch API data
const getData = async function(numUsers) {
    // Edited api url to literal to  include specified numUsers 
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); 
    const data = await usersRequest.json();
    // console.log(data);

    // create variable array for results from data

    const userResults = data.results;
    displayUsers(userResults);
}

getData(1);

//  Variable to store users data and add it to page

const displayUsers = function (userResults) {
    // empty randomfolks contents
    randomFolks.innerHTML = '';
    // for of loop to loop through array and store information in variables
    for (const users of userResults) {
        const name = users.name.first;
        const country = users.location.country;
        const imageUrl = users.picture.medium;
        // create new div to store and display information from above variables
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
        <h3>${name}</name>
        <p>${country}</p>
        <img src=${imageUrl} alt='User avatar' />
        `;
        // append information to correct place on webpage
        randomFolks.append(userDiv);
    }   
}

// adding a change event listener for the drop down menu

selectUserNumber.addEventListener('change', function (e) {
    const numUsers = e.target.value;
    // called get data function and added the argument of number of users so that the get data would resond to number of users i want
    getData(numUsers);
})