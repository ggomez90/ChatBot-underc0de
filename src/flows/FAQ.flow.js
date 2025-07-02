import { addKeyword } from '@builderbot/bot'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'

export const FAQFlow = addKeyword([
    'tareas', 'certificado', 'virtual', 'presencial', 
    'horas', 'duración', 'documentación', 'formulario'
])
    .addAnswer('📌 *¿Qué tareas tendría que hacer?* Las tareas dependen de tu carrera y perfil, pero siempre son en proyectos solidarios.')
    .addAnswer('📌 *¿Cuántas horas?* Dependen del requerimiento de tu facultad.')
    .addAnswer('📌 *¿Es virtual o presencial?* Todo es 100% virtual.')
    .addAnswer('📌 *¿Entregan certificado?* Sí, entregamos certificados e informes para la facultad.')
    .addAnswer('📌 *¿Cómo me postulo?* Completando este formulario: https://fundacion.underc0de.org/formulario')
    .addAnswer('¿Querés volver al menú o hablar con alguien?', {
        buttons: [
            { body: 'Volver al inicio' },
            { body: 'Hablar con una persona' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const body = ctx.body?.toLowerCase()
        if (body.includes('persona')) return gotoFlow(ContactoFlow)
        if (body.includes('inicio')) return gotoFlow(FlowInicio)
    })

