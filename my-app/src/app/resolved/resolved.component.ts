import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
  }
}