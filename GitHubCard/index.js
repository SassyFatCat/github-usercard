import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const sassyFatCat = 'https://api.github.com/users/SassyFatCat';
// axios.get(sassyFatCat)
// .then(successData => console.log(successData))
// .catch(failData => console.log(failData));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// axios.get(sassyFatCat)
// .then(successData => console.log(cardMaker(successData)))
// .catch(failData => console.log(failData));
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(userData) {
// ELEMENT CREATION
const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
const userImg = document.createElement('img');
    userImg.src = userData.data.avatar_url;
const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
const userName = document.createElement('h3');
    userName.classList.add('name');
    userName.textContent = userData.data.name;
const userUsername = document.createElement('p');
    userUsername.classList.add('username');
    userUsername.textContent = userData.data.login;
const location = document.createElement('p');
    location.textContent = `Location: ${userData.data.location}`;
const profileInfo = document.createElement('p');
    profileInfo.textContent = "Profile: ";
const profileLink = document.createElement('a');
    profileLink.setAttribute(`href`, `${userData.data.html_url}`);
const followers = document.createElement('p');
const following = document.createElement('p');
    following.textContent = userData.data.following;
const bio = document.createElement('p');

//STRUCTURE ELEMENTS
cardDiv.appendChild(userImg);
cardDiv.appendChild(cardInfo);
cardInfo.appendChild(userName); 
cardInfo.appendChild(userUsername);
cardInfo.appendChild(location); 
cardInfo.appendChild(profileInfo); 
cardInfo.appendChild(followers); 
cardInfo.appendChild(following); 
cardInfo.appendChild(bio);
profileInfo.appendChild(profileLink);

return cardDiv
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
