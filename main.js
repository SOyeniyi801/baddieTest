const correctAnswers = ['A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
const nameInput = document.querySelector('input')




form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0
    const userInput = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers

    userInput.forEach((input, i) => {
        if (input === correctAnswers[i]) {
            score += 25;
        }
        
    });

    // results
    scroll(0,0)
    console.log(score)

    result.classList.remove('d-none')
    console.log(nameInput.value)
    result.querySelector('.you').textContent  = `${nameInput}`
    // result.querySelector('.resultOutput').textContent = `${score}%`
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('.resultOutput').textContent = `${output}%`
        if (output === score) {
            clearInterval(timer)
        } else{
            output++
        }
    }, 10);
})
    
