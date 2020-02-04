import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";
import { unlink } from "fs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  visibility: boolean = false;
  ngOnInit() {}
  toggleMenu() {
    this.visibility = !this.visibility;
  }
}
