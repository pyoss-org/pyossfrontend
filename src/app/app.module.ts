import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PyossGridModule} from './pyoss-grid/pyoss-grid.module';
import {AgendaModule} from './agenda/agenda.module';
import {RouterModule, Routes} from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import { OwnerComponent } from './owner/owner/owner.component';
import {OwnerModule} from './owner/owner.module';


const appRoutes: Routes = [
  { path: 'agenda', component: AgendaComponent },
  { path: 'owner', component: OwnerComponent },
  { path: '**',
    redirectTo: '/agenda'
  }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        // Angular
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpClientModule,

        // Third party

        // Pyoss
        AgendaModule,
        PyossGridModule,
        OwnerModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
