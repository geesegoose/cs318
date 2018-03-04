var urls = [
    'http://2.bp.blogspot.com/-hVikSxmrIiE/T93DQMQwAvI/AAAAAAAAAMM/eJWLt6qMAWE/s1600/ulkokuvat-SuzyQ-012G.gif',
    'https://metrouk2.files.wordpress.com/2017/07/187144066.jpg?w=748&h=498&crop=1',
    'http://1.bp.blogspot.com/-5IAa1a3XX1A/T93DCjNgNHI/AAAAAAAAALM/GnDYT40wmP0/s1600/1215145026AllthoseKittens.jpg',
    
];

// The index (serial number) of the current image
var i = 0;

// Grab handles onto HTML elements.
var leftButton = document.getElementById('lefty');
var rightButton = document.getElementById('righty');
var picture = document.getElementById('picture');

// Retreat
leftButton.onclick = function () {
    i = (i - 1 + urls.length) % urls.length;
    picture.src = urls[i];
}

// Advance
rightButton.onclick = function () {
    i = (i + 1) % urls.length;
    picture.src = urls[i];
}