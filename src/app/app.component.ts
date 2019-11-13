import { Component } from '@angular/core';
import { VideoService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getData().subscribe((data: any[])=>{
      this.data = data;
    })  
  }
}
