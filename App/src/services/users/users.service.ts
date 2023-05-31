import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { USER_MODEL } from '../../abstract_classes/user.model';
import { LOGIN_MODEL } from 'src/abstract_classes/login.model';
import { RESPONSE_MODEL } from 'src/abstract_classes/response.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private USERS_URL = 'http://localhost:4000/users';
    private LOGIN_URL = 'http://localhost:4000/users/login';
    private users: USER_MODEL[] = [];
    private usersSubject: Subject<USER_MODEL[]> = new Subject<USER_MODEL[]>();

    constructor(private http: HttpClient) { }

    // GET ALL USERS
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.USERS_URL);
    }

    fetchUsers(): void {
        this.getUsers().subscribe(
            (users: USER_MODEL[]) => {
                this.users = users;
                this.usersSubject.next(this.users);
                // EMIT UPDATED products
            },
            (error: any) => {
                console.error('Error fetching users:', error);
            }
        );
    }

    // GET ALL ADDED USERS
    getAddedUsers(): Observable<USER_MODEL[]> {
        return this.usersSubject.asObservable();
    }

    // CREATE | ADD USER
    createUser(user: USER_MODEL): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<any>(this.USERS_URL, user, { headers });
    }

    // LOGIN USER 
    loginUser(user: LOGIN_MODEL): Observable<RESPONSE_MODEL> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<any>(this.LOGIN_URL, user, { headers }).pipe(map(response => {
            const token = response.token;
            return { response, token } as RESPONSE_MODEL;
        }));
    }

    // CHECK IF USER IS AUTHENTICATED i.e If they have a VALID token
    isAuthenticated() {
        const AUTHENTICATION_TOKEN = localStorage.getItem('token');
        if (AUTHENTICATION_TOKEN) {
            return true;
        } else {
            return false;
        }
    }

    // RESET USER PASSWORD
    
}
