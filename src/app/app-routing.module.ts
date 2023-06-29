import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './routes';
import { AuthGuard } from './routes/guards/auth.guard';
import { UnAuthGuard } from './routes/guards/un-auth.guard';

const routes: Routes = AppRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UnAuthGuard]
})
export class AppRoutingModule { }
