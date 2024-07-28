import {
  Component,
  ComponentRef,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('dynamicComp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicTableComponent>;

  dynamicCreate() {
    this.viewRef.clear();
    console.log(this.viewRef);
    this.componentRef = this.viewRef.createComponent(DynamicTableComponent);
  }
  dynamicDelete() {
    this.viewRef.clear();
  }
  
}
