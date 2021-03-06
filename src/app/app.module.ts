import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, MyErrorStateMatcher } from './Login/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: MyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
