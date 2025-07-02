import { addKeyword } from '@builderbot/bot'

export const pruebaFlow = addKeyword(['hi', 'hello', 'hola', 'buen', 'buenos', 'buenas', 'dias', 'dia', 'días', 'día', 'tarde', 'tardes','noche', 'noches'])
    .addAnswer(`🙌 Hola, bienvenido a fundación underc0de*`)
    .addAnswer('Soy Zurdito, el Asistente virtual de la fundación!')
    .addAnswer('¿En qué puedo servirte? Dame una pista', {
        capture: true
    })
    .addAction(async (ctx, { endFlow }) => {
        const msg = ctx.body?.trim().toLowerCase()
        console.log('Respuesta PRUEBA FLOW: ', msg)
        return endFlow()
    })