import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name : HTMLInputElement) {
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName: name.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(name : HTMLInputElement) {
    // this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.blueprintCreated.emit({serverName : name.value, serverContent:this.newServerContent});
  }

}
