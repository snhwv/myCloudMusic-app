import { CloudMusicService } from "./../../../../cloudMusic.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.scss"]
})
export class TopicComponent implements OnInit {
  constructor(private cloudMusicService: CloudMusicService) {}
  events;
  ngOnInit() {
    this.cloudMusicService.getEvent().subscribe(re =>{
      console.log(re);
      this.events = re.event;
      // console.log(this.events);
      // for (let i = 0; i < this.events.length; i++) {
      //   console.log(JSON.parse(this.events[i].json));
      // }
    });
    /* this.cloudMusicService
      .getEventVideoUrl()
      .subscribe(re => console.log(re)); */
  }
}
