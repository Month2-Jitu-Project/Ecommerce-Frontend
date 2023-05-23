import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class authenticationService{
    buttonClicked: EventEmitter<void> = new EventEmitter<void>();

    emitButtonClick(): void {
        this.buttonClicked.emit();
    }
}
