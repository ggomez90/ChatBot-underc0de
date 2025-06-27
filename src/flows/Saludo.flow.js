import { addKeyword } from '@builderbot/bot'

export const SaludoFlow = addKeyword(['chau', 'saludos', 'saludo', 'adios', 'hasta luego', 'gracias'])
    .addAnswer(`Ha sido un placer para mi ayudarte`)
    .addAnswer('Me es de mucha ayuda que me indiques si he podido resolver tus dudas:', {
        buttons: [
            { body: 'SI' }, 
            { body: 'NO' }, 
            { body: 'POCO' }
        ],
        capture: true
    })

    .addAction(async (ctx, { flowDynamic }) => {
        const respuesta = ctx.body?.trim().toUpperCase()

        if (respuesta === 'SI') {
            await flowDynamic('✅ ¡Genial! Me alegra haber sido útil. ¡Hasta la próxima!')
        } else if (respuesta === 'NO') {
            await flowDynamic('😟 Lo siento mucho. Te invito a reiniciar nuestra conversación para comenzar de nuevo o visitar nuestra web para evacuar tu consulta https://fundacion.underc0de.org/.')
        } else if (respuesta === 'POCO') {
            await flowDynamic('🤔 Gracias por tu sinceridad. ¡Estamos trabajando para mejorar!')
        }
    })

