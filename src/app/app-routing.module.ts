import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PageoneComponent } from './pageone/pageone.component';

const routes: Routes = [
  { path: 'pageone', component: PageoneComponent },
  { path: 'pagetwo', component: PagetwoComponent },
  { path: 'pagethree', component: PagethreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
