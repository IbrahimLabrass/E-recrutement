import {Component} from "@angular/core";

@Component({
  selector : '[warning-alert]',
  template : `<div class="bg-red-500 rounded border border-radius px-2 py-3 my-3 text-center w-full">
                    <p class="text-sm font-bold text-red-300"> warning message !!</p>
                </div>`
})
export class WarningAlertComponent {

}
