import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Show } from "./interfaces/show";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private db: AngularFirestore) {
    this.showCollection = db.collection("principiantes_shows");
    this.showList = this.showCollection.valueChanges();
  }
  showCollection: AngularFirestoreCollection<Show>;
  showList: Observable<Show[]>;

  add() {
    const id = this.db.createId();
    const picture = this.getRandomPicture();
    const name = "";
    this.showCollection.doc(id).set({ name, picture, id });
  }

  getRandomPicture() {
    const randomNumber = Math.round(Math.random() * 20);
    return "https://picsum.photos/100/100?image=" + randomNumber;
  }

  updatePicture(id: string) {
    const picture = prompt("Please enter an image URL:");
    if (picture) {
      this.showCollection.doc(id).update({ picture });
    }
  }

  updateName(id: string, name: string) {
    this.showCollection.doc(id).update({ name });
  }

  remove(id: string) {
    if(confirm('Are you sure to delete the show from your list?')){
      this.showCollection.doc(id).delete();
    }
  }
}
