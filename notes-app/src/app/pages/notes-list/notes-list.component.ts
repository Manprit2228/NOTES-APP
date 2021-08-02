import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { Route } from '@angular/router'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  // @Input() routerLink: any;
  

  notes: Note[] = new Array<Note>();
  // cardTitle: string = 'abc';
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    // we want to retrieve all notes from service
    this.notes = this.notesService.getAll();
  }

}
