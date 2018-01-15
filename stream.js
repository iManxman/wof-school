const botClient = require('bot-client')


const creds = {
  email: "imanxman@ya.ru",
  password: "snowskate"
}
const { comment } = botClient.connect(creds)
if (text.match(/create stream/)){
	const name = 'test_bot'
	const res = await stream.create(teamId, {name: name})
	streamId = res.data.teamId
	const att = [{type:'text',data:{text:JSON.stringify(res)}}];
	await comment.create(teamId, {to,att})
}
