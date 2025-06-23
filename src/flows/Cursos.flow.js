import { addKeyword } from '@builderbot/bot'

export const CursosFlow = addKeyword(['cursos', 'talleres', 'capacitaciones'])
    .addAnswer('🎓 En Fundación Underc0de ofrecemos cursos gratuitos y talleres solidarios.')
    .addAnswer('Podés ver la lista completa en nuestra web oficial: https://fundacion.underc0de.org/')
    .addAnswer('¿Querés que te mande info de un curso en particular?', {
        buttons: [{ body: 'Programación' }, { body: 'Ciberseguridad' }, { body: 'Hacking' }]
    })
