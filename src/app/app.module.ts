import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { MatListModule, MatToolbarModule, MatIconModule, MatCardModule,
         MatInputModule, MatFormFieldModule, MatAutocompleteModule,
         MatButtonModule, MatChipsModule, MatProgressBarModule
        } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { VilleService } from './shared/index';

import { VilleListComponent } from './ville-list/ville-list.component';
import { VilleDetailComponent } from './ville-detail/ville-detail.component';

import { environment } from '../environments/environment';
import { VilleAutocompleteComponent } from './ville-autocomplete/ville-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DiagrammePrixComponent } from './diagramme-prix/diagramme-prix.component';

@NgModule({
  declarations: [
    AppComponent,
    VilleListComponent,
    VilleAutocompleteComponent,
    VilleDetailComponent,
    DiagrammePrixComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatProgressBarModule,
    ServiceWorkerModule.register(environment.basePath + '/ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule
  ],
  providers: [VilleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
