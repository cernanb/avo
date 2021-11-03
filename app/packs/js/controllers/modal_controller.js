import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["modal"];

  close() {
    this.modalTarget.remove();
    document.getElementById("attach_modal").src = undefined;
    document.getElementById("actions_show").src = undefined;
    document.getElementById("destroy_attachment_form").src = undefined;
    document.getElementById("alerts").src = undefined;
    document.dispatchEvent(new Event("actions-modal:close"));
  }
}
