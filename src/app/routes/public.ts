import { Routes } from "@angular/router";
import { PreAuthMainLayoutComponent } from "../shared/components/_layouts/pre-auth-main-layout/pre-auth-main-layout.component";
import { UnAuthGuard } from "./guards/un-auth.guard";

export const publicRoutes: Routes = [
    {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full"
    },
    {
        path: "",
        component: PreAuthMainLayoutComponent,
        canActivate: [UnAuthGuard],
        children: [
            {
                path: "auth",
                loadChildren: () => import('../features/auth/auth.module')
                    .then(m => m.AuthModule)
            }
        ]
    }
];