document.addEventListener('DOMContentLoaded', function() {
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach(function(card) {

        function flipCard() {
            card.classList.toggle('flipped');
        }

        // Event listeners for both click and touch events
        card.addEventListener('click', flipCard);
        card.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevents the click event from firing after touch
            flipCard();
        }, { passive: false });
    });
});
