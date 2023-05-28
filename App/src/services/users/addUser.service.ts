import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../abstract_classes/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = 'http://localhost:4000/users';
    private users: UserModel[] = [];
    private usersSubject: Subject<UserModel[]> = new Subject<UserModel[]>();

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.usersUrl);
    }

    fetchUsers(): void {
        this.getUsers().subscribe(
            (users: UserModel[]) => {
                this.users = users;
                this.usersSubject.next(this.users); 
                // EMIT UPDATED products
            },
            (error: any) => {
                console.error('Error fetching users:', error);
            }
        );
    }

    getStoredProducts(): Observable<UserModel[]> {
        return this.usersSubject.asObservable();
    }

    createUser(user: UserModel): Observable<any> {
        const headers = new HttpHeaders({ 
            'Content-Type': 'application/json'
         });
        return this.http.post<any>(this.usersUrl, user, { headers });
    }
}
