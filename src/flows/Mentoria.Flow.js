import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { BienvenidaFlow } from './Bienvenida.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const MentoriaFlow = addKeyword(['mentoria', 'staff', 'enseñar', 'educar', 'equipo', 'profesor', 'profe', 'mentor', 'maestro',
    'instructor', 'docente', 'consejero', 'guia', 'guía', 'tutor', 'educador', 'preceptor'])
    .addAnswer('🧑‍🏫 Nos alegra mucho que te interese ser parte de nuestro staff de profesores!')
    .addAnswer('Puedes colaborar educando desde distintas posiciones como colaborador, profesor, mentor, auxiliar, como miembro del foro, etc')
    .addAnswer('📌 Si te gusta enseñar, podes presentarnos un plan de estudio para ser parte como formador dictando cursos a niños, jóvenes o adultos.')
    .addAnswer('📨 Completa el formulario de contacto en: https://fundacion.underc0de.org/contacto/ y nos comunicaremos a la brevedad.')
    .addAnswer('¿Querés saber algo más?', {
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
        else if (msg.includes('contact')) return gotoFlow(ContactoFlow)
        else if (msg.includes('inici')) return gotoFlow(BienvenidaFlow)
        
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })
