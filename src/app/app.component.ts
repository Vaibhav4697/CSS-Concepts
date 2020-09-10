import { Component } from '@angular/core';
import { OnlineEditorComponent } from './online-editor/online-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-concepts';

  setFileName() {
    OnlineEditorComponent.codeFileName = "";
  }
}
