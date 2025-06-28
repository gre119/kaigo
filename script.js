document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions-container');
    const newQuestionsBtn = document.getElementById('new-questions-btn');

    function displayRandomQuestions() {
        questionsContainer.innerHTML = '';
        const shuffled = questions.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        selected.forEach((q, index) => {
            const questionCard = `
                <div class="card mb-3">
                    <div class="card-header">
                        問題 ${index + 1}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${q.question}</p>
                        <button class="btn btn-secondary btn-sm toggle-answer-btn">答えを見る</button>
                        <div class="answer">
                            <p><strong>答え:</strong> ${q.answer}</p>
                        </div>
                    </div>
                </div>
            `;
            questionsContainer.innerHTML += questionCard;
        });

        document.querySelectorAll('.toggle-answer-btn').forEach(button => {
            button.addEventListener('click', () => {
                const answerDiv = button.nextElementSibling;
                if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
                    answerDiv.style.display = 'block';
                    button.textContent = '答えを隠す';
                } else {
                    answerDiv.style.display = 'none';
                    button.textContent = '答えを見る';
                }
            });
        });
    }

    newQuestionsBtn.addEventListener('click', displayRandomQuestions);

    // 初期表示
    displayRandomQuestions();
});
