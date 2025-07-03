import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { BienvenidaFlow } from './Bienvenida.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const VoluntariadoFlow = addKeyword(['voluntario', 'voluntariado'])
    .addAnswer('🙌 ¡Qué bueno que quieras colaborar!')
    .addAnswer('Podés ayudar aunque no estés estudiando. Completá este formulario: https://fundacion.underc0de.org/formulario')
    .addAnswer('¿Querés saber algo más?', {
        buttons: [
            { body: 'FAQ' },
            { body: 'Hablar con una persona' },
            { body: 'Volver al inicio' }
        ],
        capture: true
    })
    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (msg.includes('faq')) return gotoFlow(FAQFlow)
        else if (msg.includes('persona')) return gotoFlow(ContactoFlow)
        else if (msg.includes('inicio')) return gotoFlow(BienvenidaFlow)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })
