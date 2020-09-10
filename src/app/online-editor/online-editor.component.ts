import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ifError } from 'assert';

declare const Buffer;

@Component({
  selector: 'app-online-editor',
  templateUrl: './online-editor.component.html',
  styleUrls: ['./online-editor.component.scss']
})
export class OnlineEditorComponent implements OnInit {

  code: string = "";

  public static codeFileName: string = "";
  private codeFilePath: string = "./assets/source-code/";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    if (OnlineEditorComponent.codeFileName == "") {
      this.code = "";
    }
    else {
      let self = this;
      this.getHtmlCode(this.codeFilePath + OnlineEditorComponent.codeFileName).subscribe(data => {
        self.code = data.toString();
        console.log(self.code);
      });
    }
  }

  enableTabSpacing(event: KeyboardEvent, textArea): void {
    let cursorPosition: number = textArea.selectionStart;

    this.code = this.code.slice(0, cursorPosition) + "\t" + this.code.slice(cursorPosition + Math.abs(0));

    event.preventDefault();
    event.stopPropagation();
  }

  run(iFrame): void {
    iFrame.src = "data:text/html;charset=utf-8," + encodeURI(this.code);
  }

  getFileData(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (event: Event) {
      console.log(fileReader.result);
      self.code = typeof fileReader.result === "string" ? fileReader.result : Buffer.from(fileReader.result).toString();
    }
    fileReader.readAsText(file);
  }

  getHtmlCode(path: string) {
    return this.httpClient.get(path, {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
      , responseType: 'text'
    });
  }

}
