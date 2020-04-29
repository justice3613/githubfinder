//init the github class
const github = new Github();

//int UI CLASS
const ui = new UI();

const searchUser = document.getElementById('searchUser');

//add an event listener
searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;
   if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');;
            }else{
                //show profile
                ui.showProfile(data.profile) 
                ui.showRepos(data.repos);
            }
        })
   }else{
    ui.clearProfile();
   }
});