import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: /*html*/ `
    <!--The content below is only a placeholder and can be replaced.-->
    <header>
      <h1>TV SERIES!</h1>
      <p>📺 Your favorite TV Shows 📺</p>
    </header>

    <div class="add">
      <button (click)="add()">ADD</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = "Firebase";
}
