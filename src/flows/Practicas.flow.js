import { addKeyword } from '@builderbot/bot'

export const PracticaProfesionalFlow = addKeyword(['práctica', 'prácticas','carrera','practica','practicas','profesional'])
    .addAnswer('Eres estudiante y buscas una practica profesional?')
    .addAnswer('Excelente consulta, tenemos diferentes opciones:')
    .addAnswer('Indicame de que carrera vienes para poder guiarte:',
        {
            buttons: [
                { body: 'Analista en sistemas'},
                { body: 'Programacion' },
                { body: 'Carrera de grado informática y/o software' }
            ]
        }
    )