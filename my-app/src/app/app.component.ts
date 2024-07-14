import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) { }
  ngOnInit(): void {
    this.titleService.setTitle('Desk Page');
    this.metaService.addTag({ name: 'og:desc', content: 'root_desc' });
  }
}
