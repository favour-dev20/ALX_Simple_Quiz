function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected ? selected.value : "";

    // Get feedback element
    const feedback = document.getElementById('feedback');

    // Compare and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
