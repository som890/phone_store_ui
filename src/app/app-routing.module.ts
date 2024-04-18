import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AddnewphoneComponent } from './addnewphone/addnewphone.component';
import { ShowPhoneDetailsComponent } from './show-phone-details/show-phone-details.component';
import { PhoneResolveService } from './_service/phone-resolve.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] },
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'addNewPhone',
    component: AddnewphoneComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
    resolve: {
      phone: PhoneResolveService,
    },
  },
  {
    path: 'showPhoneDetails',
    component: ShowPhoneDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
