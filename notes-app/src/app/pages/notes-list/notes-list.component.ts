import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { Route } from '@angular/router'
import { animate, style, transition, trigger } from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim',[
      //ENTRY ANIMATION
      transition('void => *', [
        //Initial state 
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

            // we have to 'expand' out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          
          
        }),
        // we first want to animate the spacing  (which includes height and margin)
        animate('50ms',style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',

        })),
        animate(68)
      ]),
      transition('* => void', [
        //first scale up
        animate(50, style({
          transform: 'scale(1.05)'
        })),

        // then scale down back to normal size whilebeginning to fade out 
        animate(50, style ({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        //scale down and fade out completely
        animate('120ms ease-out', style ({
          transform: 'scale(0.68)',
          opacity: 0,
        })),
        // then animate the spacing (which includes height and margin and padding)
        animate('150ms ease-out', style ({
          opacity: 0,
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom': '0,'
        }))
      ])
    ])
  ]
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

 deleteNote(id: number) {
 this.notesService.delete(id);
}
 }
