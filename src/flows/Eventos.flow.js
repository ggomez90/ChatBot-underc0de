import { addKeyword } from '@builderbot/bot'
import { FlowInicio } from './Inicio.flow.js'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const EventosFlow = addKeyword(['evento', 'eventos', 'reunion', 'reuniones', 'juntada', 'aventura', 'acontecimiento', 'union', 'unión', 'concentración', 'concentracion'])
    .addAnswer('🏙️ Underc0de organiza eventos para fortalecer los lazos entre sus miembros.')
    .addAnswer('Visita nuestra sección de Calendario de Eventos informáticos y recreativos: https://fundacion.underc0de.org/eventos/')
    .addAnswer('🫂 Sumate a nuestras aventuras y formá parte de esta gran familia.')
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