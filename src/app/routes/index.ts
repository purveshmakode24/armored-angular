import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

export function AppRoutes() {
    const commonRoutes: Routes = [
        {
            path: "**",
            component: PageNotFoundComponent
        }
    ];

    // let routes = authUser ? protectedRoutes : publicRoutes;
    let appRoutes: any = [...publicRoutes, ...protectedRoutes, ...commonRoutes];

    return appRoutes;
}