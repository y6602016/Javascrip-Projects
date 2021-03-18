// 1. using selectors inside the element


const questions = document.querySelectorAll('.question');

questions.forEach(function(e) { // assign the first variable 'e' for each item
    const btn = e.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) { // assign the second variable 'item' for each item
            if (item !== e) {
                // remove 'show-text' of all other items(if they have)
                // the target item is 'e' and the other items are 'item'
                item.classList.remove('show-text');
            }
        });
        e.classList.toggle('show-text'); // the clicked buttun is the 'e'
    });
});





// 2. or traversing the dom

/* const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */

