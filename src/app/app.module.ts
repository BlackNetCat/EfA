import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HealthComponent } from './health/health.component';
import { EducationComponent } from './education/education.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { WorkComponent } from './work/work.component';
import { MotivationComponent } from './motivation/motivation.component';
import { EnglishComponent } from './education/english/english.component';
import { LoseweightComponent } from './health/loseweight/loseweight.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HealthComponent,
    EducationComponent,
    EntertainmentComponent,
    WorkComponent,
    MotivationComponent,
    EnglishComponent,
    LoseweightComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
