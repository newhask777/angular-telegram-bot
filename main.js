import { Telegraf, Markup } from "telegraf"
import { message } from "telegraf/filters"

const token = '7870661843:AAFBRHRWkYSf_3X-DaUCcHfYNz75HLVTncs'
const webAppUrl = 'https://angular-tg-app-7d326.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                `${webAppUrl}/feedback`
            )
        ])
    )
})

bot.on(message('web_app_data', async (ctx) => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сооьшение: ${data?.feedback}` ?? 'empty message')
}))

bot.launch()