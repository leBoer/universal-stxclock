import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { MetaDescriptionComponent } from './meta-description.component';
import { NavbarComponent } from "./navbar/navbar.component";
// import { SortPipe } from "./sort.pipe";

import { ClockService } from "./clock.service";
import { ExchangeService } from "./exchange.service";

export { AppComponent, TitleComponent, MetaDescriptionComponent };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    // SortPipe,
    MetaDescriptionComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
    RouterModule.forRoot([
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [ExchangeService, ClockService],
  bootstrap: [AppComponent, TitleComponent, MetaDescriptionComponent]
})
export class AppModule { }
