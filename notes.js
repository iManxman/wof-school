const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'botNotes';

const botClient = require('bot-client')

const creds={
	email: "imanxman@ya.ru",
	password : 'snowskate'
}

let State = {
	newNote: false,
	day: false,
	newTitle: false
}
let Note = {}
let Notes = []

let streamId
let statusId
let threadId
let userId
let name
let i
let streamArr = []

const{comment, stream, thread, mail} = botClient.connect(creds)

/*const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}*/


//MongoClient.connect(url, function(err, client) //{
comment.onDirect(async message=>{
	//console.log('ON_DIRECT',message)
	
	const {teamId} = message
	console.log('teamId ', teamId)

	const to = message.data.content.from
	console.log(to)
	userId = to
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
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
			}
			case 'tuesday':{
				console.log('in condition');
				const answer = "Enter title";
				const att = [{ type: 'text', data : {text: answer} }];
				await comment.create(teamId, {to, att});
				State.day = true
				const { data: {text}}= message.data.content.att[0];
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
	
			}
			case 'wednsday':{
				console.log('in condition');
				const answer = "Enter title";
				const att = [{ type: 'text', data : {text: answer} }];
				await comment.create(teamId, {to, att});
				State.day = true
				const { data: {text}}= message.data.content.att[0];
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
		
			}
			case 'thirsday':{
				console.log('in condition');
				const answer = "Enter title";
				const att = [{ type: 'text', data : {text: answer} }];
				await comment.create(teamId, {to, att});
				State.day = true
				const { data: {text}}= message.data.content.att[0];
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
		
			}
			case 'friday':{
				console.log('in condition');
				const answer = "Enter title";
				const att = [{ type: 'text', data : {text: answer} }];
				await comment.create(teamId, {to, att});
				State.day = true
				const { data: {text}}= message.data.content.att[0];
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
		
			}
			case 'saturday':{
				console.log('in condition');
				const answer = "Enter title";
				const att = [{ type: 'text', data : {text: answer} }];
				await comment.create(teamId, {to, att});
				State.day = true
				const { data: {text}}= message.data.content.att[0];
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
		
			}
			case 'sunday':{
				console.log('in condition');
				const answer = "Enter title";
				const att = [{ type: 'text', data : {text: answer} }];
				await comment.create(teamId, {to, att});
				State.day = true
				const { data: {text}}= message.data.content.att[0];
				Note.title = text;
				Notes.push(Note);
				console.log(Notes[0])
				return;
		
			}
		
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
			//console.log(message);
			console.log(text);

			//Note.title = text;
			//Notes.push(Note);
			//console.log(Notes)
			name = text;
			const res = await stream.create(teamId, {name: name})
			streamId = res.data.id
			console.log('streamId res from create > ', res.data);
			const str = await stream.read(teamId, { id: streamId })
			statusId = str.data[0].threadStatuses[0]
			console.log('res stream > ', str.data)
			console.log('res stream status> ', statusId)
			//userId = str.data[0].admins[0]
			console.log('userId', userId)
			//console.log(statusId);
			 //const mongo = await MongoClient.connect(url);
   			//const myAwesomeDB = await mongo.db('botNotes');
   			// const answerFromMongo = await myAwesomeDB.collection('documents').find({}).toArray();
   			 //await myAwesomeDB.collection('documents').insert({strName: name, strId:streamId})
			/*MongoClient.connect(url, function(err, client) {
				//console.log("Connected successfully to server");
  				//assert.equal(null, err);
  				console.log("Connected successfully to server");
 
  				const db = client.db(dbName);
  				const collection = db.collection('documents');
  				db.collection.insert({strName: name, strId:streamId});
  			})*/
			//console.log(res.data);
			
			//console.log(str.data[0].threadStatuses[0]);
			//console.log();

			return;
		//}
	}
	if (State.newTitle){
			
			console.log('note body in condition');
			console.log(streamId);
			
			const str = await stream.read(teamId, { id: streamId })
			statusId = str.data[0].threadStatuses[0]
			console.log(statusId)
			const title = text;
			const res = await thread.create(teamId, { streamId : streamId, title: title, statusId: statusId})
			console.log('res ', res.data);
			threadId = res.data
			const thr = await thread.read(teamId, {id : threadId})
			const createDate = thr.data[0].createdAt;
			console.log ('thread', thr);
			console.log('createDate', createDate);

			//const answer = "note created";
			//const att = [{ type: 'text', data : {text: answer} }];
			//await comment.create(teamId, {to, att});
			//const title = text;
			//const res = stream.read (teamId,)

			const mongo = await MongoClient.connect(url);
   			const myAwesomeDB = await mongo.db('botNotes');
   			await mail.send(teamId, {
     			from: 'imanxman@ya.ru',
     			headers: 'header',
    			to: 'salakhovilgiz@mail.ru',
     			subject: 'new thread',
     			text: title,
   			});
   			console.log("mail sended")

   			//console.log(myAwesomeDB.collection('documents').toArray())
			await myAwesomeDB.collection('documents').insert({strName: name, strId:streamId, title : title, author: userId, createDate: createDate, threadId: threadId})
			State.newNote = false
			State.day = false
			State.newTitle = false
			//const { data: {text}}= message.data.content.att[0];
			return;
	}
	if (text.match(/del stream/)){
		//await stream.delete(teamId, {id: '5a5dd44a8b3b170015b41779'})
		const streams = await stream.read(teamId, {})
		for (i = 1; i<streams.data.length; i++) {
			await stream.delete(teamId, {id: streams.data[i]._id})
			//streamArr[i] = streams.data[i]._id
			//console.log(streams.data[i]._id)
		}

		//console.log('streamId', streams.data[0]._id)


	}
	
	//const too = message.data.content.from
	//const { data: {text}}= message.data.content.att[0]

})

comment.onDirect(async message=>{
	//console.log('ON_DIRECT',message)
	const {teamId} = message

	const to = message.data.content.from
	const { data: {text}}= message.data.content.att[0]
	if(text.match(/del comment/)){
		
		//const answer = "Enter word";
		//const att = ([{type : 'text', data:{text: answer}}]);
		//await comment.create(teamId, {to, att})

		console.log(message.data.content.att)
		const commentRead = await comment.read(teamId, {streamId: '5a5dd02219e9f8001fb1c043'})
		console.log(commentRead)
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