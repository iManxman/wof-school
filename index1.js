<<<<<<< HEAD
const botClient = require('bot-client')

// только что созданные вами авторизационные данные
const creds = {
  email: "imanxman@ya.ru",
  password: "snowskate"
}

const { comment } = botClient.connect(creds)
comment.onMention(async message => {
  //когда кто-то обратится к вам в стриме или треде через @
  // будет работать этот коллбек

  console.log('ON_MENTION', message)
  const { teamId } = message
  const { streamId } = message.data.content
  const { threadId } = message.data.content

  // код отправить в ответ сообщение "привет" 
  const text = 'привет'
  const att = [{ type: 'text', data: { text } }]
  const resp = await comment.create(teamId, { att, streamId, threadId })
  console.log('resp', resp)
})

comment.onDirect(async message => {
  // когда кто-то напишет вам личное сообщение 
  // будет работать этот коллбек

  console.log('ON_DIRECT', message)
  const { teamId } = message
  const to = message.data.content.from
  
  // код чтобы отправить в ответ сообщение привет
  const text = "привет"
  const att = [{ type: 'text', data: { text } }]
  const resp = await comment.create(teamId, { to, att })
  console.log('resp', resp)
=======
const botClient = require('bot-client')

// только что созданные вами авторизационные данные
const creds = {
  email: imanxman@ya.ru;
  password: snowskate
}

const { comment } = botClient.connect(creds)
comment.onMention(async message => {
  //когда кто-то обратится к вам в стриме или треде через @
  // будет работать этот коллбек

  console.log('ON_MENTION', message)
  const { teamId } = message
  const { streamId } = message.data.content
  const { threadId } = message.data.content

  // код отправить в ответ сообщение "привет" 
  const text = 'привет'
  const att = [{ type: 'text', data: { text } }]
  const resp = await comment.create(teamId, { att, streamId, threadId })
  console.log('resp', resp)
})

comment.onDirect(async message => {
  // когда кто-то напишет вам личное сообщение 
  // будет работать этот коллбек

  console.log('ON_DIRECT', message)
  const { teamId } = message
  const to = message.data.content.from
  
  // код чтобы отправить в ответ сообщение привет
  const text = "привет"
  const att = [{ type: 'text', data: { text } }]
  const resp = await comment.create(teamId, { to, att })
  console.log('resp', resp)
>>>>>>> 99114103be7476f89b7f7fb882290beb7322e4cf
})