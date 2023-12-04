import {CanActivateFn, Router} from '@angular/router';
import {AppStateService} from "../services/app-state.service";
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = (route, state) => {
  let appState = inject(AppStateService);
  let router = inject(Router);
  if (appState.authState.isAuthenticated == false) {
    router.navigateByUrl("/login");
    return false
  } else {
    return true;
  }
}
