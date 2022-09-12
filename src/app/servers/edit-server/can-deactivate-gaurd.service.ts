import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeActivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; 
}

export class CanComponentDeGaurd implements CanDeactivate<CanComponentDeActivate>{
    canDeactivate(component: CanComponentDeActivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):  Observable<boolean> | Promise<boolean>| boolean {
        return component.canDeactivate();    
    }
}