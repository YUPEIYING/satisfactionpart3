import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtentComponent } from './extent/extent.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'extent', component: ExtentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
