import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  exportAs:'customerList'
})
export class AppComponent {
  title = 'TemplateRef';

  sayHello(firstName: { value: string; }, lastName: { value: string; }) {
    alert('Hello '+firstName.value+' '+ lastName.value)
  }
}
