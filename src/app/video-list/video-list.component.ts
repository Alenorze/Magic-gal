import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Video List';
  videoList = [
    {
    name: 'Item 1',
    slug: 'item-1'
  },
  {
    name: 'Item 2',
    slug: 'item-2'
  },
  {
    name: 'Item 3',
    slug: 'item-3'
  }
  ];




  constructor() { }

  ngOnInit() {
  }

}
