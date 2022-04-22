
function callme(){
    var name = document.getElementById('name_ad').value;
    sessionStorage.setItem('userName', name);
}


window.onload = function() {
    document.getElementById('welcome').innerText = "Hello, " + sessionStorage.getItem('userName') +". You have been welcomed back with pride. \nSpace: the final frontier. \nThese are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.";
};


