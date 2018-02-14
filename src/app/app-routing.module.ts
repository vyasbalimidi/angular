import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcoSheetComponent } from './eco-sheet/eco-sheet.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'eco-sheet/:eco-number', component: EcoSheetComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }