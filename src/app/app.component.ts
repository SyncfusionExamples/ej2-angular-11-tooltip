
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ejs-tooltip id='tooltip' content='Tooltip content'>
        Hover Me
    </ejs-tooltip>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }