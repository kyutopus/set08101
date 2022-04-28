const quest = document.querySelector('#quizzy_quest');
const option = Array.from(document.querySelectorAll('.option_text'));
const quiz_text = document.querySelector('#quiz_text');
const mark_text = document.querySelector('#mark');
const quizzyfullbar = document.querySelector('#quizzyfullbar');

let current_quest = {}
let correct_ans = true
let mark = 0
let q_count = 0
let avail_q = []

let quests = [
    {
        quest: 'What is the smallest planet in the solar system?',
        pick1: 'Earth',
        pick2: 'Venus',
        pick3: 'Mercury',
        pick4: 'Pluto',
        answer: 3,
    },
    {
        quest:
            "The tallest building in the world is located in which city?",
        pick1: "Dubai",
        pick2: "New York",
        pick3: "Shanghai",
        pick4: "None of the above",
        answer: 1,
    },
    {
        quest: "What percent of American adults believe that chocolate milk comes from brown cows?",
        pick1: "20%",
        pick2: "18%",
        pick3: "7%",
        pick4: "33%",
        answer: 3,
    },
    {
        quest: "Approximately what percent of U.S. power outages are caused by squirrels?",
        pick1: "10-20%",
        pick2: "5-10%",
        pick3: "15-20%",
        pick4: "30%-40%",
        answer: 1,
    }
]

const points = 5
const question_limit = 3

start_quize = () => {
    q_count = 0
    mark = 0
    avail_q = [...quests]
    new_questionget()
}

new_questionget = () => {
    if(avail_q.length === 0 || q_count > question_limit) {
        localStorage.setItem('mostRecentScore', mark)

        return window.location.assign('/end.html')
    }

    q_count++
    quiz_text.innerText = `Question ${q_count} of ${question_limit}`
    quizzyfullbar.style.width = `${(q_count/question_limit) * 50}%`
    
    const questionsIndex = Math.floor(Math.random() * avail_q.length)
    current_quest = avail_q[questionsIndex]
    quest.innerText = current_quest.quest

    option.forEach(pick => {
        const number = pick.dataset['number']
        pick.innerText = current_quest['pick' + number]
    })

    avail_q.splice(questionsIndex, 1)

    correct_ans = true
}

option.forEach(pick => {
    pick.addEventListener('click', e => {
        if(!correct_ans) return

        correct_ans = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == current_quest.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(points)
        }

        if(classToApply === 'incorect') {
            decreaseScore(points)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            new_questionget()
        }, 1200)
    })
})

incrementScore = num => {
    mark +=num
    mark_text.innerText = mark
}

decreaseScore = num => {
    mark -=num
    mark_text.innerText = mark
}

start_quize()