import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  servers: { id: number; name: string; status: string; };
  serverName: string  = '' ;
  serverStatus: string = '';

  constructor(private serversService: ServersService,private router: Router,private route: ActivatedRoute) {
   }

  ngOnInit() {
      this.servers = this.serversService.getServer(1);
      this.serverName  = this.servers.name ;
      this.serverStatus = this.servers.status;
      // console.log(this.serversService.getServer(1))
    }
  

  onUpdateServer() {

      this.serversService.updateServer(this.servers.id, {name: this.serverName, status: this.serverStatus});

  }
  reloadserver(){
    // this.router.navigate(['servers'],{relativeTo: this.route});
  }
}