import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PageReloaderService {
    refreshRoute(): void {
        location.reload();
    }
}