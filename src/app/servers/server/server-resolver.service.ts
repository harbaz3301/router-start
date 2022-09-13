import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server{ id: number; name: string; status: string; } 

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private ServerService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
      Server
    | Observable<Server> 
    | Promise<Server> {
        console.log(this.ServerService.getServer(+route.params['id']));
        return this.ServerService.getServer(+route.params['id']);
    }
}