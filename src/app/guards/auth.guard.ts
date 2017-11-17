import { Injectable }       from '@angular/core';
import {
  CanActivate, 
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';

import { CredentialsStorage } from './../modules/auth/classes/credentials.store';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
    protected credentialsStorage:CredentialsStorage;

    constructor(private router: Router) {
        this.credentialsStorage = new CredentialsStorage();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        let url: string = state.url;
        return new Promise(async(resolve, reject) => {

            try {

                if(!this.credentialsStorage.isCredentilsSet()) {
                    throw new Error();
                }

                resolve(true);

            } catch(err) {

                this.credentialsStorage.redirectURL = url;
                this.router.navigate(['/auth/login']);
                resolve(false);
            }
        }); // End promise 
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.canActivate(route, state);
    }
}