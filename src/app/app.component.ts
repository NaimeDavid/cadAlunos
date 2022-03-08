import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  /*
    Eu apaguei todo o template do arquivo.ts e abri um arquivo.html
    passei o link pro html..
    fiz isso porque saberia usar melhor o arquivo Html
*/
    templateUrl:'app.component.html'
})
export class AppComponent {
  title = 'frontend';
}
