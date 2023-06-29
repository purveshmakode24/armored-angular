import { Routes } from "@angular/router";
import { PostAuthMainLayoutComponent } from "../shared/components/_layouts/post-auth-main-layout/post-auth-main-layout.component";
import { DashboardComponent } from "../shared/components/dashboard/dashboard.component";
import { AuthGuard } from "./guards/auth.guard";
import { ROLES } from "../config";
import { HomeComponent } from "../shared/components/home/home.component";

export const protectedRoutes: Routes = [
    {
        path: "",
        component: PostAuthMainLayoutComponent,
        children: [
            {
                path: "dashboard",
                component: DashboardComponent,
                canActivate: [AuthGuard],
                data: { allowedRoles: [ROLES.ADMIN] }
            },
            {
                path: "home",
                component: HomeComponent,
                canActivate: [AuthGuard],
                data: { allowedRoles: [ROLES.USER] }
            }
        ]
    }
];