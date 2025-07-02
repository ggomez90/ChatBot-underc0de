import dotenv from 'dotenv';
dotenv.config();
//import { join } from 'path'
//import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'

//import { BienvenidaFlow } from './flows/Bienvenida.flow.js'
//import { FlowInicio } from './flows/Inicio.flow.js'
//import { pruebaFlow } from './flows/prueba.flow.js'
/*import { CursosFlow } from './flows/Cursos.flow.js'
import { PracticaProfesionalFlow } from './flows/Practicas.flow.js'
import { SaludoFlow } from './flows/Saludo.flow.js'
import { FlowInicio } from './flows/Inicio.flow.js'
import { VoluntariadoFlow } from './flows/Voluntariado.flow.js'
import { DocentesReferentesFlow } from './flows/Institucional.flow.js'
import { StaffEventosCursosFlow } from './flows/Extras.flow.js'
import { FAQFlow } from './flows/FAQ.flow.js'
import { ConsultaLibreFlow } from './flows/ConsultaLibre.flow.js'
import { ContactoFlow } from './flows/Contacto.flow.js'*/



import { createBot, createProvider, createFlow} from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'

const PORT = process.env.PORT ?? 3008

const main = async () => {
    const adapterFlow = createFlow([/*pruebaFlow, FlowInicioCursosFlow, PracticaProfesionalFlow, SaludoFlow, FlowInicio, VoluntariadoFlow, DocentesReferentesFlow, StaffEventosCursosFlow, FAQFlow, ConsultaLibreFlow, ContactoFlow*/])
    const adapterProvider = createProvider(Provider, {
        jwtToken: process.env.JWT_TOKEN,
        numberId: process.env.NUMBER_ID,
        verifyToken: process.env.VERIFY_TOKEN,
        version: 'v22.0'
    })
    const adapterDB = new Database()

    const { handleCtx, httpServer } = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
        fallback: async (bot, ctx) => {
            console.log('Fallback activado con mensaje:', ctx.body)
            await bot.sendMessage(ctx.from, '❌ Lo siento, no logro comprender lo que buscás. Podés escribir *inicio* para ver el menú principal.')
        }
    })


    adapterProvider.server.post(
        '/v1/messages',
        handleCtx(async (bot, req, res) => {
            const { number, message, urlMedia } = req.body
            await bot.sendMessage(number, message, { media: urlMedia ?? null })
            return res.end('sended')
        })
    )

    adapterProvider.server.post(
        '/v1/register',
        handleCtx(async (bot, req, res) => {
            const { number, name } = req.body
            await bot.dispatch('REGISTER_FLOW', { from: number, name })
            return res.end('trigger')
        })
    )

    adapterProvider.server.post(
        '/v1/samples',
        handleCtx(async (bot, req, res) => {
            const { number, name } = req.body
            await bot.dispatch('SAMPLES', { from: number, name })
            return res.end('trigger')
        })
    )

    adapterProvider.server.post(
        '/v1/blacklist',
        handleCtx(async (bot, req, res) => {
            const { number, intent } = req.body
            if (intent === 'remove') bot.blacklist.remove(number)
            if (intent === 'add') bot.blacklist.add(number)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ status: 'ok', number, intent }))
        })
    )

    httpServer(+PORT)
}

main()
