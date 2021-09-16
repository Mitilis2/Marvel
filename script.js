"use strict";

var learnMoreButton1 = document.getElementById('phase-one-learn-more');

var moviesButton1 = document.getElementById('phase-one-movies')

var showsButton1 = document.getElementById('shows-btn-one')


var removeHidden = function(){
    moviesButton1.classList.toggle('hidden')
    showsButton1.classList.toggle('hidden')
    moviesButton1.classList.toggle('clicked')
    showsButton1.classList.toggle('clicked')

}


learnMoreButton1.addEventListener('click', removeHidden)

