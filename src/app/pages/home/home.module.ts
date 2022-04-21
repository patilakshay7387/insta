import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { SharedModule } from "src/app/shared/shared.component";



const routes: Routes = [
    {
        path: '',
        component : HomeComponent
}
]
@NgModule({
    declarations: [HomeComponent],
    imports : [FormsModule,SharedModule, RouterModule.forChild(routes)],
    
})

export class HomeModule{

}
