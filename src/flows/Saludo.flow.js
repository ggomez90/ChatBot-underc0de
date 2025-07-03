import { addKeyword } from '@builderbot/bot'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const SaludoFlow = addKeyword(['chau', 'saludos', 'saludo', 'adios', 'hasta luego', 'gracias', 'adiós', 'hasta la próxima', 'agradecido',
    'agradecimiento', 'amable', 'gratitud'])
    .addAnswer(`🤝 Ha sido un placer para mi ayudarte`)
    .addAnswer('Me es de mucha ayuda que me indiques si he podido resolver tus dudas:', {
        buttons: [
            { body: 'SI' }, 
            { body: 'NO' }, 
            { body: 'POCO' }
        ],
        capture: true
    })

    .addAction(async (ctx, { flowDynamic, gotoFlow }) => {
        const msg = ctx.body?.trim().toUpperCase()
        if (msg?.includes('si')) {
            await flowDynamic('✅ ¡Genial! Me alegra haber sido útil. ¡Hasta la próxima!')
        } else if (msg?.includes('no')) {
            await flowDynamic('😟 Lo siento mucho. Te invito a reiniciar nuestra conversación para comenzar de nuevo o visitar nuestra web para evacuar tu consulta https://fundacion.underc0de.org/.')
        } else if (msg?.includes('poco')) {
            await flowDynamic('🤔 Gracias por tu sinceridad. ¡Estamos trabajando para mejorar!')
        }
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })

