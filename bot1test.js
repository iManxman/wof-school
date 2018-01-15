 /*finction getMessage (){
	switch {
		case 'monday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
		}
		case 'tuesday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
	
		}
		case 'wednsday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
	
		}
		case 'thirsday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
	
		}
		case 'friday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
	
		}
		case 'saturday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
	
		}
		case 'sunday':{
			const att = [{ type: 'text', data : {text: "no"} }];
			await comment.create(teamId, {to, att});
			return;
	
		}	
	}
}*/
comment.onDirect(async message=>{
	console.log('ON_DIRECT', message)
	const {teamId} = message

	const to = message.data.content.from
	const { data: {text}}= message.data.content.att[0]
	
	
	if(text.match(/new note/)){
		const answer = "Enter note ti5tle";
		const att = ([{type : 'text', data:{text: answer}}]);
		await comment.create(teamId, {to, att})
		//const note = comment.create(teamId, {to, att});
		return ;
		
		
	}

	if(text.match(/list notes/)){
		const answer = "You don`t have notes";
		const att = [{type : 'text', data:{text: answer}}];
		await comment.create(teamId, {to, att})
		return
	}
	
})