import { addKeyword } from '@builderbot/bot'
import { FlowInicio } from './Inicio.flow.js'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const ForoFlow = addKeyword(['foro', 'comunidad', 'debate', 'debatir', 'app', 'aplicación', 'aplicacion'])
    .addAnswer('📲 Ya descargaste nuestra app? Ingresa aquí y hazlo: https://fundacion.underc0de.org/ya-bajaste-la-aplicacion-de-underc0de/')
    .addAnswer('🗂️ Ingresa a nuestro foro de debate, donde podrás adquirir y compartir conocimientos de informática entre otros temas: https://underc0de.org/foro/')
    .addAnswer('¿Te puedo ayudar en algo más?', {
        buttons: [
            { body: 'FAQ' },
            { body: 'CONTACTO' },
            { body: 'INICIO' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (msg.includes('faq')) return gotoFlow(FAQFlow)
        if (msg.includes('contact')) return gotoFlow(ContactoFlow)
        if (msg.includes('inici')) return gotoFlow(FlowInicio)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })