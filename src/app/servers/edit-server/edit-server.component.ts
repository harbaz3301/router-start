import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  serverid: number;
  constructor(private serversService: ServersService,private router: Router,private route: ActivatedRoute) {
   }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
      this.servers = this.serversService.getServer(id);
      this.serverName  = this.servers.name ;
      this.serverStatus = this.servers.status;
      // this.route.params.subscribe(
      //   (params: Params) => {
      //     this.servers = this.serversService.getServer(+params['id']);
      //   }
      // );
      // console.log(this.serversService.getServer(1))
    }
  

  onUpdateServer() {

      // this.serversService.updateServer(this.servers.id, {name: this.serverName, status: this.serverStatus});

  }
  // reloadserver(){
    //this.router.navigate(['servers'],{relativeTo: this.route});
  // }

}