import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PlansComponent } from "./plans.component";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { SharedModule } from "src/app/shared/shared.component";



const routes: Routes = [
    {
        path: '',
        component : PlansComponent
}
]
@NgModule({
    declarations: [PlansComponent],
    imports : [FormsModule,SharedModule, RouterModule.forChild(routes)],
    
})

export class PlansModule{

}
