import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStateService } from './app-state.service';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';

@Injectable()
export class appHttpInterceptor implements HttpInterceptor{
  constructor(private loadingService: LoadingService,private appState: AppStateService){
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  /*  this.appState.setProductsState({
      status: "LOADING"
    });*/
    this.loadingService.showLoadingSpinner();
    // Clone the request and set the Authorization header
    let req = request.clone({
     headers: request.headers.set("Authorization", "Bearer JWT")
    });

    // Pass the modified request to the next handler
    return next.handle(req).pipe(
      finalize(() => {
       /* this.appState.setProductsState({
          status: "LOADED"
        })*/
        this.loadingService.hideLoadingSpinner();
        
      })
    );
  }
}