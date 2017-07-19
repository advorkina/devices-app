import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
// import { OAuthService } from "angular-oauth2-oidc/dist";

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private oauthService: OAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    // return this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken();
  }
}
