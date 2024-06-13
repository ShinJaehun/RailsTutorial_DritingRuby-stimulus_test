import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]
  static values= { number: Number }

  connect() {
    // this.element.textContent = "Hello World!"
    // this.outputTarget.textContent = "Hello STIMULUS!"
    // this.outputTarget.textContent = this.numberValue
    this.numberValueChanged()
  }

  clicked() {
    this.numberValue++
  }

  numberValueChanged() {
    this.outputTarget.textContent = this.numberValue
  }
}
