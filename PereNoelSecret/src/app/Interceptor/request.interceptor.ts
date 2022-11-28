import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = {accessToken : sessionStorage.getItem('accessToken'), tokenType : sessionStorage.getItem('tokenType')};
    if(token.tokenType && token.accessToken){
      request = request.clone({headers : request.headers.set("Autorization", token.tokenType+token.accessToken)});
    }
    return next.handle(request);
  }
}
