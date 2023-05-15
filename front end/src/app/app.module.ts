import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { ShortnerComponent } from './shortner/shortner.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
