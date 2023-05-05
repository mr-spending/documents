import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subscription: Subscription = new Subscription();

  constructor(private afAuth: AngularFireAuth, private api: ApiService) { }

  /** Delete user with email and password */
  deleteUser(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.subscription.add(
          this.token.subscribe(token => {
            if (token) {
              this.subscription.add(
                this.api.deleteUser(token).subscribe(() => {
                  window.alert('User deleted successfully!');
                  this.afAuth.signOut();
                  this.subscription.unsubscribe();
                })
              )
            } else {
              window.alert(`Authorization failed. Check your login and password.`);
              this.afAuth.signOut();
              this.subscription.unsubscribe();
            }
          })
        )
      })
      .catch(() => {
        return window.alert(`Authorization failed. Check your login and password.`);
      });
  }

  /** Get user token */
  get token(): Observable<string | null> {
    return this.afAuth.idToken;
  }
}
