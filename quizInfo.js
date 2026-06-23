// quiz data
const quizData = {
    multipleChoice: [
        {
            text: "What type of plate boundary is the San Andreas Fault?",
            options: ["Convergent", "Divergent", "Transform", "Subduction"],
            correct: "Transform",
            points: 1
        },
        {
            text: "Which tectonic plate is subducting beneath the South American Plate at the Chilean subduction zone?",
            options: ["Pacific Plate", "Nazca Plate", "Juan de Fuca Plate", "African Plate"],
            correct: "Nazca Plate",
            points: 1
        },
    ],
    shortAnswer: [
        {
            text: "Name the deepest oceanic trench on Earth.",
            correct: ["mariana trench", "the mariana trench", "mariana", "the mariana"],
            points: 1
        },
        {
            text: "Which mountain range was formed by the collision of the Indian Plate and the Eurasian Plate?",
            correct: ["himalayas", "the himalayas", "himalaya", "the himalaya"],
            points: 1
        }
    ],
    dragDrop: {
        targets: [
            { id: "dropZone1", expected: "Subduction Zone", points: 1 },
            { id: "dropZone2", expected: "Ocean Trench", points: 1 },
            { id: "dropZone3", expected: "Magma Plume", points: 1 }
        ],
        labels: ["Subduction Zone", "Ocean Trench", "Magma Plume"]
    }
};
// store user answers
let userAnswers = {
    mc: [],
    sa: [],
    dd: {}
};
// Render the quiz
function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    let html = `<a href="map.html" class="home-link">← Back to map</a><h1>Plate Tectonics Quiz</h1>`;

    // Multiple Choice
    html += `<h2>Multiple Choice (${quizData.multipleChoice.length} questions)</h2>`;
    quizData.multipleChoice.forEach((q, i) => {
        html += `
            <div class="quiz-question" data-qidx="${i}" data-type="mc">
                <h3>${i+1}. ${q.text}</h3>
                <div class="quiz-options">
        `;
        q.options.forEach(opt => {
            html += `<label><input type="radio" name="mc_${i}" value="${opt}"> ${opt}</label>`;
        });
        html += `</div></div>`;
    });

    // Short Answer
    html += `<h2>Short Answer (${quizData.shortAnswer.length} questions)</h2>`;
    quizData.shortAnswer.forEach((q, i) => {
        html += `
            <div class="quiz-question" data-qidx="${i}" data-type="sa">
                <h3>${i+1}. ${q.text}</h3>
                <input type="text" class="short-input" id="sa_${i}" placeholder="Type your answer here">
            </div>
        `;
    });

    // Drag and Drop
    html += `<h2>Drag and Drop: Label the Diagram</h2>
        <div class="diagram-container">
            <div class="diagram-image">
                <div class="drop-zones">
                    <div id="dropZone1" class="drop-zone" data-expected="Subduction Zone"></div>
                    <div id="dropZone2" class="drop-zone" data-expected="Ocean Trench"></div>
                    <div id="dropZone3" class="drop-zone" data-expected="Magma Plume"></div>
                </div>
            </div>
            <div class="labels-pool" id="labelsPool">
                <h3>Drag these labels:</h3>
                ${quizData.dragDrop.labels.map(label => `<div class="label-item" draggable="true">${label}</div>`).join('')}
            </div>
        </div>
        <p><em>Drop a label onto a dashed circle.</em></p>
    `;

    html += `<button id="submitQuizBtn" class="submit-btn">Submit Quiz & Show Results</button>`;
    html += `<div id="quizResults" style="display:none;"></div>`;

    container.innerHTML = html;

    // Initialize drag and drop
    initDragAndDrop();

    // Submit button listener
    document.getElementById('submitQuizBtn').addEventListener('click', evaluateQuiz);
}

// Drag and drop setup
function initDragAndDrop() {
    const labels = document.querySelectorAll('.label-item');
    const dropZones = document.querySelectorAll('.drop-zone');

    labels.forEach(label => {
        label.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', label.innerText);
            e.dataTransfer.effectAllowed = 'copy';
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedText = e.dataTransfer.getData('text/plain');
            const expected = zone.getAttribute('data-expected');

            if (zone.querySelector('.dropped-label')) {
                alert('This zone already has a label. Remove it before adding another.');
                return;
            }

            // Remove the original label from pool
            const originalLabel = Array.from(document.querySelectorAll('.label-item')).find(l => l.innerText === draggedText);
            if (originalLabel && originalLabel.parentNode === document.getElementById('labelsPool')) {
                originalLabel.remove();
            }

            // Create visual dropped label
            const droppedSpan = document.createElement('div');
            droppedSpan.className = 'dropped-label';
            droppedSpan.innerText = draggedText;

            zone.innerHTML = '';
            zone.appendChild(droppedSpan);

            // Store answer
            userAnswers.dd[zone.id] = draggedText;
        });
    });
}

// Evaluate the quiz
function evaluateQuiz() {
    let totalPoints = 0;
    let earnedPoints = 0;
    const results = [];

    // Multiple choice
    quizData.multipleChoice.forEach((q, i) => {
        totalPoints += q.points;
        const selected = document.querySelector(`input[name="mc_${i}"]:checked`);
        const userAnswer = selected ? selected.value : '';
        const isCorrect = (userAnswer === q.correct);
        if (isCorrect) earnedPoints += q.points;
        results.push({
            type: 'Multiple Choice',
            question: q.text,
            user: userAnswer || 'No answer',
            correct: q.correct,
            isCorrect: isCorrect,
            points: q.points
        });
    });

    // Short answer
    quizData.shortAnswer.forEach((q, i) => {
        totalPoints += q.points;
        const input = document.getElementById(`sa_${i}`);
        const userAnswer = input ? input.value.trim().toLowerCase() : '';
        const isCorrect = q.correct.some(c => userAnswer === c);
        if (isCorrect) earnedPoints += q.points;
        results.push({
            type: 'Short Answer',
            question: q.text,
            user: userAnswer || 'No answer',
            correct: q.correct.join(' / '),
            isCorrect: isCorrect,
            points: q.points
        });
    });

    // Drag and drop
    quizData.dragDrop.targets.forEach(target => {
        totalPoints += target.points;
        const userLabel = userAnswers.dd[target.id] || '';
        const isCorrect = (userLabel === target.expected);
        if (isCorrect) earnedPoints += target.points;
        results.push({
            type: 'Drag and Drop',
            question: `Label zone: ${target.id}`,
            user: userLabel || 'No answer',
            correct: target.expected,
            isCorrect: isCorrect,
            points: target.points
        });
    });

    // results HTML
    let resultHtml = `<div class="results-screen">
        <h2>Your Score: ${earnedPoints} / ${totalPoints}</h2>
        <h3>Detailed Results:</h3>
        <ul>`;
    results.forEach(r => {
        const status = r.isCorrect ? 'Correct' : 'Wrong';
        resultHtml += `
            <li>
                <strong>${r.type}:</strong> ${r.question}<br>
                Your answer: ${r.user}<br>
                Correct answer: ${r.correct}<br>
                <span class="${r.isCorrect ? 'correct-answer' : 'wrong-answer'}">${status} (${r.isCorrect ? r.points : 0}/${r.points})</span>
            </li>
            <hr>
        `;
    });
    resultHtml += `</ul>
        <button id="restartQuizBtn" class="submit-btn">Try Again</button>
        <a href="map.html" class="home-link" style="display: inline-block; margin-left: 10px;">Back to Map</a>
    </div>`;

    // Replace quiz content with results
    const container = document.getElementById('quizContainer');
    if (container) {
        container.innerHTML = resultHtml;
        document.getElementById('restartQuizBtn').addEventListener('click', () => {
            // Reset answers and re-render the quiz
            userAnswers = { mc: [], sa: [], dd: {} };
            renderQuiz();
        });
    }
}

// Start the quiz when page loads
document.addEventListener('DOMContentLoaded', renderQuiz);