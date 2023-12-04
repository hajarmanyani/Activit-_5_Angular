import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {authenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "admin", component: AdminTemplateComponent,canActivate:[authenticationGuard],children:
    [
        {path: "products", component: ProductsComponent},
        {path: "newProduct", component: NewProductComponent,canActivate:[authorizationGuard],data:{roles:'ADMIN'}},
        {path: "editProduct/:id", component: EditProductComponent,canActivate:[authorizationGuard],data:{roles:'ADMIN'}},
        {path: "home", component: HomeComponent},
        {path:"notAuthorized",component:NotAuthorizedComponent}

    ]
    },
    {path : "", redirectTo: "/login", pathMatch: 'full'}


];
