const { bot } = require('../core/bot')

bot.start(ctx => {
    ctx.reply("Salom " + ctx.chat.first_name + " x ni kiriting.\nx | 0 | 0\n0 | 0 | 0\n0 | 0 | 0")
})

bot.on('text', ctx => {
    var k = parseInt(ctx.message.text)
    var f = (-1)*(k-10)+0.5*(k-9)+k-8+(-2)*(k-1)+0.5*k+2*(k+1)+(-1)*(k+8)+0.5*(k+9)+1*(k+10)
    ctx.reply(f)
})
