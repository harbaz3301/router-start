import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeActivate } from './can-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeActivate  {
  servers: { id: number; name: string; status: string; };
  serverName: string  = '' ;
  serverStatus: string = '';
  serverid: number;
  allowedit = false;
  changessaved = false;
  constructor(private serversService: ServersService,private router: Router,private route: ActivatedRoute) {
   }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.route.queryParams.subscribe(
      (queryparams: Params) => {
        // console.log(queryparams['allowedit'])
        this.allowedit = queryparams['allowedit'] === '1' ? true : false ;
        // console.log(this.allowedit)
      }
    );
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
    if(this.allowedit){
      this.serversService.updateServer(this.servers.id, {name: this.serverName, status: this.serverStatus});
      this.changessaved = true;
      this.router.navigate(['../'], {relativeTo: this.route})
    }else{
      alert("you are not allowed to edit");
    }
  }
  // reloadserver(){
    //this.router.navigate(['servers'],{relativeTo: this.route});
  // }

  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowedit){
      return true;
    }
    if((this.serverName !== this.servers.name || this.serverStatus !== this.servers.status) && !this.changessaved){
      return confirm('do you want to discard changes');
    }else{
      return true;
    }
  }
}