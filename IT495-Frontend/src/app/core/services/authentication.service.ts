import { Injectable } from "@angular/core";
import { User } from "../models/registration.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { RolesEnum } from "../enums/roles.enum";
@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  registration = environment.baseUrl + "/user/register";
  verification = environment.baseUrl + "/user/verify/";
  login = environment.baseUrl + "/login";
  changePasswordUrl = environment.baseUrl + "/user/change-pass";

  isAdmin = "ADMIN";
  isUser = "USER";

  constructor(public http: HttpClient) {}
  getToken(): string {
    return localStorage.getItem("token");
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.registration, {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode,
      country: user.country,
      phoneNumber: user.phoneNumber
    });
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(this.login, {
      email: email,
      password: password
    });
  }

  logout() {
    localStorage.clear();
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(this.changePasswordUrl, {
      oldPassword: oldPassword,
      newPassword: newPassword
    });
  }

  verifyUser(token): Observable<any> {
    return this.http.put(this.verification + `${token}`, {});
  }

  getUserRole(): string {
    let role = localStorage.getItem("role");
    if (role === RolesEnum.USER) {
      return this.isUser;
    } else {
      return this.isAdmin;
    }
  }

  newUser() {
    return new User({});
  }
}
