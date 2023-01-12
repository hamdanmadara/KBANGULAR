import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './my_component/navbar/navbar.component';
import { UserLoginComponent } from './my_component/user-login/user-login.component';
import { UserSignupComponent } from './my_component/user-signup/user-signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyComponent } from './my_component/property/property.component';
import { RentComponent } from './my_component/rent/rent.component';
import { SideMenuBarComponent } from './my_component/side-menu-bar/side-menu-bar.component';
import { UploadPropertyComponent } from './my_component/upload-property/upload-property.component';
import { BuyerFormComponent } from './my_component/buyer-form/buyer-form.component';
import { ProfileComponent } from './my_component/profile/profile.component';
import { BlogComponent } from './my_component/blog/blog.component';
import { AdminComponent } from './my_component/admin/admin.component';
import { PropertyDetailComponent } from './my_component/property-detail/property-detail.component';
import { ContactComponent } from './my_component/contact/contact.component';
import { SearchPipe } from './search.pipe';

// import { saveAs } 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserLoginComponent,
    UserSignupComponent,
    PropertyComponent,
    RentComponent,
    SideMenuBarComponent,
    UploadPropertyComponent,
    BuyerFormComponent,
    ProfileComponent,
    BlogComponent,
    AdminComponent,
    PropertyDetailComponent,
    ContactComponent,
    SearchPipe
  ],
  imports: [
    
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
