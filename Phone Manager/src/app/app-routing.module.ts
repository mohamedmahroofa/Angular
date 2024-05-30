import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  { path: "phones", component: PhoneListComponent },
  { path: "phone/:id", component: PhoneComponent },
  { path: "phone", component: PhoneComponent },
  { path: "", redirectTo: "/phones", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
