import { addKeyword } from '@builderbot/bot'

export const BienvenidaFlow = addKeyword(['hi', 'hello', 'hola'])
    .addAnswer(`🙌 Hola, bienvenido a fundación underc0de*`)
    .addAnswer('Soy Zurdito, el Asistente virtual de la fundación!')
    .addAnswer('¿Querés que te ponga un 10 en tu práctica profesional??', {
        buttons: [{ body: 'SI' }, { body: 'TAMBIÉN' }]
})
