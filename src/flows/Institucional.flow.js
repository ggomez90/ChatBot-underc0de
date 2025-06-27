import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'

export const DocentesReferentesFlow = addKeyword(['docente', 'referente', 'institución', 'instituto', 'universidad', 'convenio'])
    .addAnswer('📚 ¡Hola! También trabajamos con instituciones.')
    .addAnswer('Tenemos convenios con universidades e institutos. Si querés sumar uno nuevo, escribinos a contacto@underc0de.org')
    .addAnswer('Emitimos certificados e informes institucionales cuando es necesario.')
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
