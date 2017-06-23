import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature = 'document';

 switchView(selectedEvent: string){
  this.selectedFeature = selectedEvent;
}
}
