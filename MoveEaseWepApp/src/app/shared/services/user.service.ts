import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@shared/entities";
import { Observable } from "rxjs";

@Injectable()
export class UserService{
    constructor(private _httpClient: HttpClient) { }


    public createUser(formModel: any):Observable<User>{
        const user = this.getEntityFormModel(formModel, true);
        return this._httpClient.post<User>("api/user/create", user);
    }
    public getEntityFormModel(formModel:any,create=false){
        var user:User;
        if (create) {
            user = {
                firstName: formModel.firstName,
                lastName: formModel.lastName,
                email:formModel.email,
                password:formModel.password,
            }
        }
        else {
            user={
                email:formModel.email,
                password:formModel.password
            }

        }
        return user;
    }
}