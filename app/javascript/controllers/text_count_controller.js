import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["field", "output"]
  static classes = ["overLimit"]
  static values = {
    limitedCharacterCount: Number,
  }

  connect() {
    // console.log("hello stimulus")
    this.change()
  }

  change() {
    let length = this.fieldTarget.value.length
    this.outputTarget.textContent = `${length} characters`

    console.log(this.limitedCharacterCountValue)

    // if (length > this.limitedCharacterCountValue) {
    //   this.outputTarget.classList.add("text-danger")
    // } else {
    //   this.outputTarget.classList.remove("text-danger")
    // }

    if (length > this.limitedCharacterCountValue) {
      this.outputTarget.classList.add(this.overLimitClass)
    } else {
      this.outputTarget.classList.remove(this.overLimitClass)
    }
  }
}
