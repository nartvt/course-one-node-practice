- Add notes
-  Remove Note
- Edit  

<!-- 
EDIT NODE
1. create new command 'edit'
2. push data edit 
- id old
- title, body new
3. load  data from note.json
4. check index of element array
5. update element
6. save
 -->

 # callstack -> NodeAPI -> CallBack

terminal: node note-apps/app.js add title ='app notes' body='this is  a body'

in app.js: console.log(process.argc);

if doesn't have type for yargs default is true:
---> node note-apps/app.js add --title --body='this is  a body'