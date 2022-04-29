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
        quest: 'What is the smallest planet in the solar system ?',
        pick1: 'Earth',
        pick2: 'Venus',
        pick3: 'Mercury',
        pick4: 'Pluto',
        answer: 3,
    },

    {
        quest: "Which planet is named after the Greek god Hermes ?",
        pick1: "Venus",
        pick2: "Mercury",
        pick3: "Jupiter",
        pick4: "None of the above",
        answer: 2,
    },

    {
        quest: "4 moons of which planets was identified by Galileo Galilei in 1600s?",
        pick1: "Jupiter",
        pick2: "Saturn",
        pick3: "Uranus",
        pick4: "Titan",
        answer: 1,
    },

    {
        quest: "Which of the astroid was nearly classified as a dwarf planet?",
        pick1: "Titus",
        pick2: "Hail Bob",
        pick3: "Orus",
        pick4: "Vesta",
        answer: 4,
    },

    {
        quest: "What does the Curosity Rover do once a year?",
        pick1: "Sing itself happy birthday",
        pick2: "Go beep bepp and drive off",
        pick3: "Collect space rocks and chuck it",
        pick4: "None of the above",
        answer: 1,
    },

    {
        quest: "Which 5 Space organisations share the International space Station?",
        pick1: "NASA, Roscosmos, JAXA, ESA, and CSA",
        pick2: "NSA, MI6, CIA, UN, IMO",
        pick3: "WIPO, IAEA, EU, NATO, ESA",
        pick4: "None of the above",
        answer: 1,
    },

    {
        quest: "How often is Halley's Comet observed?",
        pick1: "13 years",
        pick2: "500 years",
        pick3: "75-76 years",
        pick4: "6 - 10 years",
        answer: 3,
    },

    {
        quest: "Which is fourth biggest moon of Jupiter and the smallest of the Galilean moons",
        pick1: "IO",
        pick2: "Europa",
        pick3: "Ganymede",
        pick4: "Callisto",
        answer: 2,
    },
]

const questionsRemove = Math.floor(Math.random() * avail_q.length)
let random_q = avail_q[questionsRemove]
quests.splice(random_q, 1)
console.log(quests)

const points = 5
const question_limit = 7

start_quize = () => {
    q_count = 0
    mark = 0
    avail_q = [...quests]
    new_questionget()
}

new_questionget = () => {
    if(avail_q.length === 0 || q_count > question_limit) {
        sessionStorage.setItem('mostRecentScore', mark)

        return window.location.assign('../html/space_game_last_good.html')
    }

    q_count++
    quiz_text.innerText = `Question ${q_count} of ${question_limit}`
    quizzyfullbar.style.width = `${(q_count/question_limit) * 100}%`
    
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

        let classToApply = selectedAnswer == current_quest.answer ? 'right' : 'wrong'

        if(classToApply === 'right') {
            increase_score(points)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            new_questionget()
        }, 1200)
    })
})

increase_score = num => {
    mark +=num
    mark_text.innerText = mark
}

start_quize()