import { addKeyword } from '@builderbot/bot'
import { BienvenidaFlow } from './Bienvenida.flow.js'

export const ContactoFlow = addKeyword(['hablar con una persona', 'contacto', 'comunicarme', 'hablar con', 'persona'])
    .addAnswer('Podés escribirnos directamente a contacto@underc0de.org o al WhatsApp +54 9 11 1234-5678.')
    .addAnswer('¿Querés volver al menú principal?', {
        buttons: [
            { body: 'Volver al inicio' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (msg?.includes('inicio')) return gotoFlow(BienvenidaFlow)
    })

