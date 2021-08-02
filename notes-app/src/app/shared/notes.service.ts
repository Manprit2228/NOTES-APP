import { Injectable } from '@angular/core';
import { Note } from './note.module';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // title: "";

  notes: Note[] = new Array<Note>();

  constructor() {
    // this.notes = { title: "", body: "" };

   }

  getAll(){ 
    return this.notes;
  }

  get(id: number){
    return this.notes[id]; 
  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  add(note: Note){
    //this method will add a note to notes array and return id of the note
    let newLength= this.notes.push(note);
    let index = newLength - 1;
    return index; 
  }

  update(id: number, title: string, body: string){
    // title: []

    let note = this.notes[id];
    note.title= title;
    note.body= body;
    

  }

  delete(id: number){
    this.notes.splice(id, 1);
  }
}
