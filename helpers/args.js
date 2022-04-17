
const getArgs = (args) => {
    const res = {}
    //деструкт. массива, нам нужны аргументы строки, кроме первых двух
    const [executer, file, ...rest] = args
    rest.forEach((value, index, array) => {
        if(value.charAt(0) == '-') {
            //если элемент последний
            if(index == array.length - 1) {
                res[value.substring(1)] = true
            }
            //если след. элемент начинается не с -
            else if(array[index + 1].charAt(0) != '-') {
                res[value.substring(1)] = array[index + 1]
            } else {
                //если след. элемент начинается с -
                res[value.substring(1)] = true
            }
        }
    })
    return res;
}

export { getArgs }
