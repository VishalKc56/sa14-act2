let movingRight = true;
document.getElementById('moveButton').addEventListener('click', function() {
    const div = document.getElementById('animateDiv');
    let pos = 0;
    clearInterval(window.moveInterval);
    window.moveInterval = setInterval(frame, 5);

    function frame() {
        if (pos == 350 && movingRight) {
            movingRight = false;
        } else if (pos == 0 && !movingRight) {
            movingRight = true;
        }
        if (movingRight) {
            pos++;
            div.style.left = pos + 'px';
        } else {
            pos--;
            div.style.left = pos + 'px';
        }
    }
});