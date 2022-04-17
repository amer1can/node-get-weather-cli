import chalk from 'chalk'
import dedent from "dedent-js";

// chalk - библиотека для изменения цвета текста
// dedent-js - удаление лишних отступов при выводе через ``

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

const printSuccess = (msg) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg)
}

const printHelp = () => {
    console.log(dedent(`
        ${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -t [API_KEY] для сохранения токена
        -h для вывода помощи
    `)
    )
}

export {printError, printSuccess, printHelp}
