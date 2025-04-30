document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quiz-form'); // The quiz form
    const resultDiv = document.getElementById('result'); // The result display area
    const submitButton = document.getElementById('submit-btn'); // Submit button

    // Define correct answers for each question
    const correctAnswers = {
        q1: "b",  // Correct answer for Question 1
        q2: "a",  // Correct answer for Question 2
        q3: "a",  // Correct answer for Question 3
        q4: "b",  // Correct answer for Question 4
        q5: "a",  // Correct answer for Question 5
        q6: "b",  // Correct answer for Question 6
        q7: "a",  // Correct answer for Question 7
        q8: "a",  // Correct answer for Question 8
        q9: "a",  // Correct answer for Question 9
        q10: "a"  // Correct answer for Question 10
    };

    let currentQuestion = 0;  // Track the current question number
    let score = 0;  // Initialize score

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from reloading the page

        // Get the selected answer
        const selectedAnswer = form.querySelector(`input[name="q${currentQuestion}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${currentQuestion}`]) {
            score++;  // Increase score if answer is correct
        }

        // Hide current question
        const currentQuestionDiv = document.getElementById(`question-${currentQuestion}`);
        if (currentQuestionDiv) {
            currentQuestionDiv.style.display = "none";
        }

        currentQuestion++;  // Move to next question

        // Show next question or final result
        if (currentQuestion <= Object.keys(correctAnswers).length) {
            const nextQuestionDiv = document.getElementById(`question-${currentQuestion}`);
            if (nextQuestionDiv) {
                nextQuestionDiv.style.display = "block";
            }
        } else {
            resultDiv.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
            submitButton.disabled = true;  // Disable button when quiz ends
            submitButton.style.display = "none"; // Optional: Hide the button
        }
    });
});
