import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name : HTMLInputElement) {
    console.log(this.serverContentInput)
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverCreated.emit({serverName: name.value, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName:name.value,serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(name : HTMLInputElement) {
    // this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.blueprintCreated.emit({serverName : name.value, serverContent:this.newServerContent});
    this.blueprintCreated.emit({serverName : name.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
