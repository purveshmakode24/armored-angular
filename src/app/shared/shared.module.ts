import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PreAuthMainLayoutComponent } from './components/_layouts/pre-auth-main-layout/pre-auth-main-layout.component';
import { PostAuthMainLayoutComponent } from './components/_layouts/post-auth-main-layout/post-auth-main-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PreAuthMainLayoutComponent,
    PostAuthMainLayoutComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class SharedModule { }
