import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello stimulus")
    // this.element.textContent = "Hello World!"
    this.element.textContent = "Hello World!"
  }
}
