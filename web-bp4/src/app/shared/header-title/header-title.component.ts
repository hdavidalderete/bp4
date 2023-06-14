import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css'],
})
export class HeaderTitleComponent {
  @Input('title') title!: string;
  @Output() backEvent = new EventEmitter<null>();

  constructor(private router: Router) {}

  backUrl(): void {
    console.log('back url click');
    
    this.backEvent.emit();
  }
}
