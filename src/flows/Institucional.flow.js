import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const InstitucionalFlow = addKeyword(['nosotros', 'sobre nosotros', 'institucion', 'institución', 'que es', 'institucional', 'fundacion','fundación'])
    .addAnswer('🦑 ¿Qué es Underc0de?')
    .addAnswer('Underc0de nace en el año 2011 como un grupo de informáticos que buscaban compartir conocimientos.')
    .addAnswer('El objetivo principal era resolver dudas mediante un canal virtual: un foro.')
    .addAnswer('Con el tiempo, la comunidad creció hasta constituirse en un grupo gigante el cual te invito a visitar nuestra sección https://fundacion.underc0de.org/nosotros/')
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

