import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "./auth-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanComponentDeGaurd } from "./servers/edit-server/can-deactivate-gaurd.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id/:name', component: UsersComponent},
    {path: 'servers',
        // canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        component: ServersComponent,
        children:[
            {path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
            {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanComponentDeGaurd] }
        ]},
    // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'page not found!'} },
    {path: '**', redirectTo: '/not-found'}
  ];

@NgModule({
    imports:[
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}