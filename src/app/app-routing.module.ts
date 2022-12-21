import { PatrakComponent } from './patrak/patrak.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { ShortcalculatorComponent } from './shortcalculator/shortcalculator.component';

const routes: Routes = [
  {
    path: 'home', component: ShortcalculatorComponent
  },
  {
    path: 'patrak', component: PatrakComponent
  },
  {
    path: 'update', component: UpdateComponent
  },
  {
    path: 'calculator', component: HomeComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
