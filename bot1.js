const botClient = require('bot-client')

const creds={
	email: "imanxman@ya.ru",
	password : 'snowskate'
	
}

const{comment} = botClient.connect(creds)
/*
finction getMessage (text){
	switch(text) {
		case 'monday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return btt ;
		}
		case 'tuesday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return;
	
		}
		case 'wednsday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return;
	
		}
		case 'thirsday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return;
	
		}
		case 'friday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return;
	
		}
		case 'saturday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return;
	
		}
		case 'sunday':{
			const btt = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, btt});
			return;
	
		}
		
	}
	
}*/
comment.onDirect(async message=>{
	console.log('ON_DIRECT',message)
	const {teamId} = message

	const to = message.data.content.from
	const { data: {text}}= message.data.content.att[0]
	
	
	if(text.match(/hello/)){
		const answer = "Enter your day";
		const att = ([{type : 'text', data:{text: answer}}]);
		await comment.create(teamId, {to, att})
		//const note = comment.create(teamId, {to, att});
		return ;
		
		
	}
		/*if(text.match(/monday/)){
			const answer = att;
			const att = [{type : 'text', data:{text: answer}}];
			await comment.create(teamId, {to, att})
			return	
		}
		/*if(text.match(/tuesday/)){
			const answer = "ok";
			const att = [{type : 'text', data:{text: answer}}];
			await comment.create(teamId, {to, att})
			return	
		}
		if(text.match(/wednsday/)){
			const answer = "ok";
			const att = [{type : 'text', data:{text: answer}}];
			await comment.create(teamId, {to, att})
			return	
		}
	if(text.match(/thirsday/)){
		const answer = "ok";
		const att = [{type : 'text', data:{text: answer}}];
		await comment.create(teamId, {to, att})
		return	
	}
	if(text.match(/friday/)){
		const answer = "ok";
		const att = [{type : 'text', data:{text: answer}}];
		await comment.create(teamId, {to, att})
		return	
	}
	if(text.match(/saturday/)){
		const answer = "ok";
		const att = [{type : 'text', data:{text: answer}}];
		await comment.create(teamId, {to, att})
		return	
	}
	if(text.match(/sunday/)){
		const answer = "ok";
		const att = [{type : 'text', data:{text: answer}}];
		await comment.create(teamId, {to, att})
		return	
	}*/
	/*if(text.match(/list notes/)){
		const answer = "You don`t have notes";
		const att = [{type : 'text', data:{text: answer}}];
		await comment.create(teamId, {to, att})
		return
	}*/
	
})