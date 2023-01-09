import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class="bg-green-500 rounded border border-radius px-2 py-3 my-3 text-center w-full">
                    <p class="text-sm font-bold text-green-300"> Success message !!</p>
                </div>`,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {

}
