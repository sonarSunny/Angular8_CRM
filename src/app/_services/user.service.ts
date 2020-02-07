﻿﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { environment } from 'app/environments';
import { User } from 'app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`/users/${id}`);
    }
}