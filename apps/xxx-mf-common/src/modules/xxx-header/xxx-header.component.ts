import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'xxx-header',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './xxx-header.component.scss',
  templateUrl: './xxx-header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class XxxHeaderComponent {}
