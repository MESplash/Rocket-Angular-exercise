import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

//Componentes importados por mí
// import { MiComponente } from './Componentes/MyComponent/mi-componente.component';
import { FirstComponent } from './Componentes/WorkExercise/firstComponent.component';
import { dataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    FirstComponent
  ],
  providers: [dataServices, HttpClientModule]
})
export class HomeModule { }
