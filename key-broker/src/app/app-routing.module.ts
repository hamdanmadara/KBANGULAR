import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './my_component/admin/admin.component';
import { BlogComponent } from './my_component/blog/blog.component';
import { BuyerFormComponent } from './my_component/buyer-form/buyer-form.component';
import { ContactComponent } from './my_component/contact/contact.component';
import { NavbarComponent } from './my_component/navbar/navbar.component';
import { ProfileComponent } from './my_component/profile/profile.component';
import { PropertyDetailComponent } from './my_component/property-detail/property-detail.component';
import { PropertyComponent } from './my_component/property/property.component';
import { RentComponent } from './my_component/rent/rent.component';
import { SideMenuBarComponent } from './my_component/side-menu-bar/side-menu-bar.component';
import { UploadPropertyComponent } from './my_component/upload-property/upload-property.component';
import { UserLoginComponent } from './my_component/user-login/user-login.component';
import { UserSignupComponent } from './my_component/user-signup/user-signup.component';

const routes: Routes = [
  { component: UserLoginComponent, path: "" },
  { component: UserSignupComponent, path: "signup" },
  { component: NavbarComponent, path: "navbar" },
  { component: PropertyComponent, path: "property" },
  { component: RentComponent, path: "rent" },
  { component: SideMenuBarComponent, path: "sidemenu" },
  { component: UploadPropertyComponent, path: "upload_property" },
  { component: BuyerFormComponent, path: "buyer-form/:id" },
  { component: ProfileComponent, path: "profile" },
  { component: BlogComponent, path: "blog" },
  { component: AdminComponent, path: "admin" },
  { component: PropertyDetailComponent, path: "property_detail/:id" },
  { component: ContactComponent, path: "contact" }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
