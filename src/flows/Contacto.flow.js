import { addKeyword } from '@builderbot/bot'
import { FlowInicio} from './Inicio.flow.js'
import { FAQFlow } from './FAQ.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const ContactoFlow = addKeyword(['hablar', 'contacto', 'contactarme', 'comunicarme', 'hablar con', 'persona', 'mail', 'ubicacion', 'ubicación', 'atención', 'atencion', 'canal'])
    .addAnswer('¿Deseas atención personalizada? Te listaré nuestros canales de contacto:')
    .addAnswer('🌎 Ubicación: Corrientes 122 (Mendoza ciudad)')
    .addAnswer('📧 E-mail institucional: info@underc0de.org')
    .addAnswer('📱 Contacto vía WhatsApp: +1-613-555-0103')
    .addAnswer('Tambiíen puedes ingresar a https://fundacion.underc0de.org/contacto/ y completar nuestro formulario de contacto, te responderemos a la brevedad.')
    .addAnswer('¿Te puedo ayudar en algo más?', {
        buttons: [
            { body: 'FAQ' },
            { body: 'INICIO' }
        ],
        capture: true
    })
    
    .addAction(async (ctx, { gotoFlow}) => {
        const msg = ctx.body?.toLowerCase()
        if (msg.includes('faq')) return gotoFlow(FAQFlow)
        if (msg.includes('inici')) return gotoFlow(FlowInicio)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })