import { useState, useEffect } from "react";
import "./TakingNote.css"; // Import custom CSS
import { FaEdit, FaTrash } from "react-icons/fa"; 
const TakingNote = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

 
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  
  const addNote = () => {
    if (newNote.trim() === "") return;

    if (editingIndex !== null) {
      const updatedNotes = notes.map((note, index) =>
        index === editingIndex ? newNote : note
      );
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }

    setNewNote("");
  };

  
  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditingIndex(index);
  };

 
  const deleteNote = (index) => {
    const filteredNotes = notes.filter((_, i) => i !== index);
    setNotes(filteredNotes);
  };

  return (
    <div className="container">
      <div className="note-box">
        

      
        <div className="input-section">
          <input
            type="text"
            placeholder="...Note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button onClick={addNote} className="contbtn">
            {editingIndex !== null ? <FaEdit /> : "Add"}
          </button>
        </div>

        
        <ul className="note-list">
          {notes.map((note, index) => (
            <li className="note" key={index}>
              <span >{note}</span>
              <div>
                <button className="edit-btn" onClick={() => editNote(index)}><FaEdit /></button>
                <button className="delete-btn" onClick={() => deleteNote(index)}><FaTrash /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TakingNote;
