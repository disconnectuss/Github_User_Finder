import Github from './api.js'
import UI from './ui.js'

const gitHub = new Github();
const ui = new UI()


//! HTML elements
const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')
const themeBtn = document.querySelector('#theme-btn')
const body = document.querySelector('body')

//! Event listeners
searchBtn.addEventListener('click', getInput)

searchInput.addEventListener('keypress', (e) =>{
    if (e.code ==='Enter'){
        getInput()
    }
})
 themeBtn.addEventListener('click',changeTheme);

//! Methods
function getInput() {
    //* if the form is not empty
    if(searchInput.value !== '') {
    // get user info and repos
    gitHub.getUser(searchInput.value).then((data)=> {
    // if the user cannot be found
        if(data.profile.message === 'Not Found'){
            ui.showAlert('Not found user!','alert-danger')
         } 
    else { 
        ui.showAlert('User is found successfully!','alert-success')
        // render user info
        ui.showProfile(data.profile)
        // render repos
        ui.showRepos(data.repos);
    };   
    });

    return;
}
ui.showAlert('Form area cannot be empty!',"alert-info")
}

function changeTheme(){
    body.classList.toggle('bg-dark')
    body.classList.toggle('text-bg-dark')

    if(body.classList.contains('bg-dark')){
        themeBtn.innerText = 'Light Mode';
    } else {
        themeBtn.innerText = 'Dark Mode';

    }
}
