import { Component, OnInit } from '@angular/core';
import { OnlineEditorComponent } from '../online-editor/online-editor.component';

@Component({
  selector: 'app-css-home',
  templateUrl: './css-home.component.html',
  styleUrls: ['./css-home.component.scss']
})
export class CssHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setFileName() {
    OnlineEditorComponent.codeFileName = "css-first-example.html";
  }

}
