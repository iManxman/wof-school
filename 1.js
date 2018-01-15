//comment.onDirect(async message=>{
	//console.log('ON_DIRECT',message)
	const {teamId} = message;

	const to = message.data.content.from;
	const { data: {text}}= message.data.content.att[0];
	if(text.match(/new note/)){
		const answer = "Enter your day";
		const att = ([{type : 'text', data:{text: answer}}]);
		//await comment.create(teamId, {to, att})
		console.log(teamId, {to,att});
		return ;
	}
	//const too = message.data.content.from
	//const { data: {text}}= message.data.content.btt[0]
//})