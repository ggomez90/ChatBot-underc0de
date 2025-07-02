import { addKeyword } from '@builderbot/bot'

export const PracticaProfesionalFlow = addKeyword(['práctica', 'prácticas','carrera','practica','practicas','profesional'])
    .addAnswer('Eres estudiante y buscas una practica solidaria/profesional?')
    .addAnswer('Excelente consulta, :')
    .addAnswer('Indicame de que carrera vienes para poder guiarte:',
        {
            buttons: [
                { body: 'Analista en sistemas'},
                { body: 'Programacion' },
                { body: 'Carrera de grado informática y/o software' }
            ],
            capture: true
        }
    )

    .addAction(async (ctx, { endFlow }) => {
        const msg = ctx.body?.trim().toLowerCase()
        console.log('Mensaje recibido en Flow PRACTICAS:', msg);
        return endFlow()
    })