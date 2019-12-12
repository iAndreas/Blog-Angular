import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApheliosComponent } from './aphelios/aphelios.component';
import { BestofpatchComponent } from './bestofpatch/bestofpatch.component';
import { TreelineComponent } from './treeline/treeline.component';

const routes: Routes = [
  { path: 'aphelios', component: ApheliosComponent },
  { path: 'bestofpatch', component: BestofpatchComponent },
  { path: 'treeline', component: TreelineComponent },
  { path: '', redirectTo: '/aphelios', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule {}
