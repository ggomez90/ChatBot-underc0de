import { addKeyword } from '@builderbot/bot'

export const SaludoFlow = addKeyword(['chau', 'saludos', 'saludo', 'adios', 'hasta luego', 'gracias'])
    .addAnswer('Ha sido un placer para mí ayudarte')
    .addAnswer('Me es de mucha ayuda que me indiques si he podido resolver tus dudas:', {
        buttons: [
            { body: 'SI' }, 
            { body: 'NO' }, 
            { body: 'POCO' }
        ],
        capture: true
    })
    .addAction(async (ctx, { flowDynamic }) => {
        const r = ctx.body?.trim().toUpperCase()
        if (r === 'SI') await flowDynamic('✅ ¡Genial! Me alegra haber sido útil. ¡Hasta la próxima!')
        else if (r === 'NO') await flowDynamic('😟 Lo siento mucho. Podés reiniciar la conversación o escribirnos a contacto@underc0de.org')
        else if (r === 'POCO') await flowDynamic('🤔 Gracias por tu sinceridad. ¡Estamos trabajando para mejorar!')
    })

