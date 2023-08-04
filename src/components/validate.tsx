
const validateText = (value:string) => {
    if(value.length < 3)
    return('El texto debe contener al menos 4 caracteres')
}

export default validateText;