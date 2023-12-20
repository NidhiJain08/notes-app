import NoteList from './components/NoteList';
import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';
import Search from './Search';
import DarkMode from './DarkMode';
const App=()=>
{

  const getLocalitem=()=>
  {
   let list=localStorage.getItem('react-notes-app-data');
   //console.log(list);
   if(list)
   {
    return JSON.parse(localStorage.getItem('react-notes-app-data')
    );
   }
   else{
    return [];
   }
  }
  const [notes,setNotes]=useState( getLocalitem()); 
 
  const [searchText,setSearchText]=useState('');//setSearchText -hook func that updates the state of search text

const [darkMode,setDarkMode]=useState(false);

/*useEffect(()=> {
  const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data')
    );
  console.log('Loading notes from local storage:', savedNotes);

  if(savedNotes){
    setNotes(savedNotes);
  }
},[]);*/

useEffect(() => {//add data to local storage
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
},[notes]);


  //for child to parent 
  const addNote=(text)=>
  {
      const date=new Date();
       const  newNote={//object
      id:nanoid(),//generate new id
        text:text,
       date:date.toLocaleDateString()
       }
       const newNotes=[...notes,newNote];
       setNotes(newNotes);

      /* localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(newNotes)
      );*/
  }
  const deleteNote=(id)=>//id used for deleting note
  {
    const newNotes=notes.filter((note)=>note.id!==id)
   setNotes(newNotes);
   /*localStorage.setItem(
    'react-notes-app-data'
    JSON.stringify(newNotes)
  );*/
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
<div className='container'>
  <DarkMode handleDarkMode={setDarkMode}/>
<Search handleSearchNote={setSearchText}/>
<NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
 handleAddNote={addNote}
handleDeleteNote={deleteNote}
/>

</div>
    </div>

  );
}
export default App;