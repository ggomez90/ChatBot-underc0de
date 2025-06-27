import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'

export const PracticaProfesionalFlow = addKeyword(['práctica profesional', 'practica profesional'])
    .addAnswer('✅ ¡Sí! Aceptamos estudiantes de muchas carreras para realizar prácticas profesionales, totalmente virtuales.')
    .addAnswer('Completá este formulario para iniciar: https://fundacion.underc0de.org/formulario')
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

export const PracticaSolidariaFlow = addKeyword(['práctica solidaria', 'practica solidaria'])
    .addAnswer('💡 Las prácticas solidarias también son 100% virtuales.')
    .addAnswer('Podés postularte desde este formulario: https://fundacion.underc0de.org/formulario')
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
