import { Input, Renderer2 } from '@angular/core';
import { Component, AfterViewInit ,ElementRef, OnInit, TestabilityRegistry, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input('title') title: string
  @Input('body') body: string

  // @Input() dataFromParent = 'QWERTY';
  // todoData: any = [];

  @ViewChild('truncator', {static: true, read: ElementRef} ) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: true, read: ElementRef} ) bodyText: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { };

  // ngAfterViewInit() 
  ngOnInit()  {

    //work out if there is a text overflow and if not, show the truncator    
    let style = window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewableHeight = parseInt(style.getPropertyValue("height"),10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is no text overflow, show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    }
     //else: (there is a text overflow) hide the fade out truncator
      else {
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
      }
    }

  }


