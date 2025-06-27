import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'

export const VoluntariadoFlow = addKeyword(['voluntario', 'voluntariado'])
    .addAnswer('🙌 ¡Qué bueno que quieras colaborar!')
    .addAnswer('Podés ayudar aunque no estés estudiando. Completá este formulario: https://fundacion.underc0de.org/formulario')
    .addAnswer('¿Querés saber algo más?', {
        buttons: [
            { body: 'FAQ' },
            { body: 'Hablar con una persona' },
            { body: 'Volver al inicio' }
        ]
    })
    .addAction(async (ctx, { gotoFlow }) => {
        const body = ctx.body?.toLowerCase()
        if (body.includes('faq')) return gotoFlow(FAQFlow)
        if (body.includes('persona')) return gotoFlow(ContactoFlow)
        return gotoFlow(FlowInicio)
    })
