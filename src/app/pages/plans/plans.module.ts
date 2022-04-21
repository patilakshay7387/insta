import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PlansComponent } from "./plans.component";
import { SharedModule } from "src/app/shared/shared.component";
import { CommonModule } from "@angular/common";



const routes: Routes = [
    {
        path: '',
        component : PlansComponent
}
]
@NgModule({
    declarations: [PlansComponent],
    imports : [FormsModule,SharedModule, CommonModule  ,RouterModule.forChild(routes)],
    
})

export class PlansModule{

}
