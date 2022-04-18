import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./signin.component";

const routes: Routes = [
    {
        path: '',
        component : SigninComponent
}
]
@NgModule({
    declarations: [SigninComponent],
    imports : [FormsModule, RouterModule.forChild(routes)]
})

export class SignInModule{

}
