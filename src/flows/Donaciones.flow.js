import { addKeyword } from '@builderbot/bot'
import { FlowInicio } from './Inicio.flow.js'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const DonacionesFlow = addKeyword(['donacion', 'donar','donaciones','donación','ayudar','ayuda','colaborar','colaboración','donativo',
    'ofrenda','limosna','cooperar','cooperación', 'contribuir', 'contribución', 'aportar', 'aporte'])
    .addAnswer('💰 ¿Por qué donar?​')
    .addAnswer('Tu apoyo nos permite mantener nuestros programas educativos y ayudar a más personas de nuestra comunidad a encontrar empleo.')
    .addAnswer('Te invito a que puedas conocer las formas en las que puedas ayudar a nuestra fundación: https://fundacion.underc0de.org/donaciones/​')
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