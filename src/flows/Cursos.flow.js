import { addKeyword } from '@builderbot/bot'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'
import { FlowInicio } from './Inicio.flow.js'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'

export const CursosFlow = addKeyword(['cursos', 'talleres', 'capacitaciones' , 'formación' , 'capacitación' , 'preparación' , 'seminario'
    , 'taller' , 'curso' , 'formar' , 'formacion' , 'cursillo' , 'aprender', 'aprendizaje'])
    .addAnswer('🎓 En Fundación Underc0de ofrecemos cursos gratuitos y talleres solidarios.')
    .addAnswer('Es muy sencillo, solo debes crearte una cuenta como miembro en nuestro foro: https://underc0de.org/foro/')
    .addAnswer('Tenemos una oferta muy variada de capacitaciones, hazte miembro de nuestra comunidad y accede a todas las capacitaciones disponibles, debate y aprende junto a profesionales.')
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