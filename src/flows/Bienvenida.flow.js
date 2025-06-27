import { addKeyword } from '@builderbot/bot'

export const BienvenidaFlow = addKeyword(['hi', 'hello', 'hola', 'buen', 'buenos', 'buenas', 'dias', 'dia', 'días', 'día', 'tarde', 'tardes','noche', 'noches'])
    .addAnswer(`🙌 Hola, bienvenido a fundación underc0de*`)
    .addAnswer('Soy Zurdito, el Asistente virtual de la fundación!')
    .addAnswer('¿En que puedo servirte?')
