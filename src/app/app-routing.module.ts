///<reference path="tabs/tabs.component.ts"/>
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {TabsComponent} from "./tabs/tabs.component";
import {HomeComponent} from "./home/home.component";

// http://localhost:4200/ -> HomeComponent

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'navigator', component: TabsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}