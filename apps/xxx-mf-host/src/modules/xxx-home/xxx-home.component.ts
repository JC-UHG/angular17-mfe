import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {XxxHeaderComponent} from "../common/xxx-header/xxx-header.component";

@Component({
  selector: 'xxx-home',
  standalone: true,
  imports: [CommonModule, XxxHeaderComponent],
  styleUrl: 'xxx-home.component.scss',
  templateUrl: './xxx-home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class XxxHomeComponent {}
