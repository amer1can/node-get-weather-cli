import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

//join() - соединяет дом.директорию с названием файла (конкатенировать плохо)
//basename(filePath) - вложение последней папки
//dirname(filePath) - то где находится указанный файл
//extname(filePath) - расширение
//relative(filePath, dirname(filePath)) - какой путь нам нужен относительно от одного до др.
//isAbsolute() - true, если путь абсолютный
//sep - разделитель(в разных ОС разный)

const filePath = join(homedir(), 'weather-data.json') //-> home/amer1can

const saveKeyValue = async (key, value) => {
    let data = {}
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }
    data[key] = value
    await promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

const isExist = async (path) => {
    try {
        //возвращает статистику по файлу, если его не существует - ошибка
        await promises.stat(path)
        return true
    } catch(e) {
        return false
    }
}

export { saveKeyValue, getKeyValue }
