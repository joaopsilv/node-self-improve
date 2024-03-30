import chalk from "chalk"

const allQuestions = [
    "O que você aprendeu hoje?"
    ,"O que te aborreceu? E como você poderia melhorar?"
    ,"O que te deixou feliz hoje?"
    ,"Quantas pessoas você ajudou hoje?"
    ,"Qual é o seu maior desafio no momento?"
    ,"O que você planeja fazer para superar desafios?"
    ,"O que você pode fazer hoje para estar mais próximo de alcançar seus objetivos?"
    ,"Qual habilidade você gostaria de desenvolver mais?"
    ,"O que você faria de maneira diferente se pudesse recomeçar o dia?"
    ,"O que te inspira a continuar?",
    ,"Qual é a sua maior motivação?"
    ,"Como você pretende se manter produtivo durante o dia?"
    ,"Quais são os pequenos passos que você está dando para melhorar diariamente?"
    ,"O que você está fazendo para se manter focado em seus objetivos?"
    ,"Como você está equilibrando seu tempo entre autodesenvolvimento e relaxamento?"
    ,"Que recursos você está utilizando para aprender e crescer como pessoa?"
    ,"Qual foi o último desafio que você enfrentou e como isso te motivou a crescer?"
    ,"Como você lida com momentos de insegurança?"
    ,"Como você age diante de dúvidas?"
    ,"Você tem amigos em que confia?"
]

const shuffleQuestions = (array) => {
    for (let i = array.length; i; i--){
        let randomIndex = Math.floor(Math.random() * i);
        [array[i-1], array[randomIndex]] = [array[randomIndex], array[i-1]];
    }
    return array
}

const questions = shuffleQuestions(allQuestions).slice(0, 3)

const answers = []

const askQuestion = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " ")
}

const collectAnswers = () => {
    askQuestion()
    process.stdin.on('data', data => {
        answers.push(data.toString().trim())
        if(answers.length < questions.length){
            askQuestion(answers.length)
        } else{
            process.stdin.pause()
            process.stdin.removeAllListeners('data')
            process.exit()
        }
    })
}

const showSummary = () => {
    console.clear()
    console.log(chalk.bold.green("\nR e l a t ó r i o \n"))
    questions.forEach((question, index) => {
        console.log(chalk.yellow.bold(`${index + 1}. ${question}`), chalk.green(answers[index]), "\n");
    })
}

process.on('exit', showSummary)

collectAnswers()