import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toUppercase = "This message will be uppercased";
  toLowercase = "This message will be lowercased";
  count = 345963;
  dcValue = 87.906534;
  price = 99.99;
  today: Date = new Date;

  post : object  = {
    id: 1,
    postTitle: "Post 1"
  }

  postArray : Array<string> = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6"
  ]

  userDetails = {
    name: "User 1",
    city: "New York",
    countryCode: "US"
  }


  dummyText: string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
}
