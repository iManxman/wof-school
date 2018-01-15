const botClient = require('bot-client')

const creds={
	
}

let State = {
	newNote: false,
	day: false,
	newTitle: false
}
let Note = {}
let Notes = []

const{comment, stream, thread} = botClient.connect(creds)

comment.onDirect(async message=>{
	//console.log('ON_DIRECT',message)
	
	const {teamId} = message

	const to = message.data.content.from
	const { data: {text}}= message.data.content.att[0]

	if(text.match(/new note/)){
		const answer = "Enter your day";
		const att = ([{type : 'text', data:{text: answer}}]);
		await comment.create(teamId, {to, att})
		console.log('call read > ', message.data.content.att[0])
		
		console.log('ON_DIRECT0', att);
		State.newNote = true
		console.log('ON_DIRECT1', message.data.content.att[0]);
		const { data: {text}}= message.data.content.att[0];
		// if(text.match(/monday/)){
		// 	console.log(att);
		// }
		return ;
	}
	if (State.newNote) {
		//if(text.match(/monday/)){
			//console.log('in condition');
		//}
		const v = text.match(text);
		switch (text) {
		case 'monday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.day = true
			
			const { data: {text}}= message.data.content.att[0];
			return;
		}
		case 'tuesday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.day = true

			const { data: {text}}= message.data.content.att[0];
			return;
	
		}
		case 'wednsday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.day = true
			const { data: {text}}= message.data.content.att[0];
			return;
	
		}
		case 'thirsday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.day = true
			const { data: {text}}= message.data.content.att[0];
			return;
	
		}
		case 'friday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.day = true
			const { data: {text}}= message.data.content.att[0];
			return;
	
		}
		case 'saturday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.day = true
			const { data: {text}}= message.data.content.att[0];
			return;
	
		}
		case 'sunday':{
			console.log('in condition');
			const answer = "Enter title";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			
			State.day = true
			//const btt = att;
			const { data: {text}}= message.data.content.att[0];
			Note.title = text;
			Notes.push(Note);
			console.log(Notes[0])
			return;
	
		}
		
		
	}
	if (State.day){
			console.log('note in condition');
			//
			//const att = [{type:'text',data:{text:JSON.stringify(res)}}];
			//await comment.create(teamId, {to,att})
			
			//const att = [{type:'text',data:'created'}];
			//await comment.create(teamId, {to,att})

			const answer = "Enter body";
			const att = [{ type: 'text', data : {text: answer} }];
			await comment.create(teamId, {to, att});
			State.newTitle = true
			State.day = false
			const { data: {text}}= message.data.content.att[0];
			console.log(text)

			//Note.title = text;
			//Notes.push(Note);
			//console.log(Notes)
			const name = text;
			const res = await stream.create(teamId, {name: name})
			streamId = res.data.teamId
			return;
		}
	}
	if (State.newTitle){

			

			console.log('note body in condition');
			
			//const answer = "note created";
			//const att = [{ type: 'text', data : {text: answer} }];
			//await comment.create(teamId, {to, att});
			///const title = text;
			//const res = stream.read (teamId,)
			State.newNote = false
			State.day = false
			State.newTitle = false
			//const { data: {text}}= message.data.content.att[0];
			return;
	}
	
	//const too = message.data.content.from
	//const { data: {text}}= message.data.content.att[0]
})
comment.onDirect(async message=>{
	//console.log('ON_DIRECT',message)
	const {teamId} = message

	const to = message.data.content.from
	const { data: {text}}= message.data.content.att[0]
	if(text.match(/list notes/)){
		//if(){
			//await comment.create(teamId, {to, att})
			//return ;
		//}
		//else{
			//const answer = "no";
			//const att = ([{type : 'text', data:{text: answer}}]);
		//	await comment.create(teamId, {to, att})
		//	return ;
		//}
		//return ;	
	}
})