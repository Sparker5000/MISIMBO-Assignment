import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WebsiteNewComponent } from './Components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './Components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './Components/website/website-list/website-list.component';
import { WidgetChooserComponent } from './Components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './Components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './Components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './Components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './Components/Widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './Components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { PageNewComponent } from './Components/page/page-new/page-new.component';
import { PageEditComponent } from './Components/page/page-edit/page-edit.component';
import { PageListComponent } from './Components/page/page-list/page-list.component';
import { LoginComponent } from './Components/User/login/login.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { RegisterComponent } from './Components/User/Reigister/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
