import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  noteId: number;
  new: boolean;
 

  

  constructor(
    
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  
    // we need to know if we are creating a new node or editing an existig one
    this.note= new Note();

    this.route.params.subscribe((params: Params)=> {
      if(params.id){
        this.note= this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    })
   

  }
  

  onSubmit(form: NgForm){
    
    if(this.new){
    // we should save the note
      this.notesService.add(form.value);
      this.router.navigateByUrl('/');
      // localStorage.setItem("note",JSON.stringify(this.note))
    } else{      
      this.notesService.update(this.noteId, form.value.title, form.value.body);
      this.router.navigateByUrl('/');
      // localStorage.setItem("note",JSON.stringify(this.note))
    }
    
    
   
    
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
