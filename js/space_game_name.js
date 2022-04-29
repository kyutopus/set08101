
function callme(){
    var name = document.getElementById('name_ad').value;
    sessionStorage.setItem('userName', name);
}


window.onload = function() {
    document.getElementById('welcome').innerText = "Science Officer Test has now been complated.\n Welcome back " + sessionStorage.getItem('userName') + " you have scored with " + sessionStorage.getItem('mostRecentScore') +" points. \nDon't worry about the marks, your attempt is what counts, I'm not that pointy ear person so go pack your bags. \n You will now be assigned to your ship and crew you will be working closely for the next five years.";
};


