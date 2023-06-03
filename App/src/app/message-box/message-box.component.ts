import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { MessageBoxService } from 'src/services/message-box/message-box.service';

@Component({
    selector: 'message-box',
    templateUrl: 'message-box.component.html',
    styleUrls: ['message-box.component.css'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class MessageBoxComponent implements OnInit, OnDestroy {
    isVisible: boolean = false;
    successMessage!: string;
    errorMessage!: string;
    successMessageSubscription!: Subscription;
    errorMessageSubscription!: Subscription;

    // FONT AWESOME ICONS
    envelopeIcon: IconDefinition = faEnvelope;

    // SELECT ELEMENT USING THE TEMPLATE REFERENCE: #message
    @ViewChild('messageBox', { static: false })
    messageBox!: ElementRef;

    constructor(private messageBoxService: MessageBoxService) { }

    ngOnInit(): void {
        // SUBSCRIBE  ON APP INITIALIZATION
        this.successMessageSubscription = this.messageBoxService.successMessage$.subscribe(message => {
            this.successMessage = message;
            this.showMessageBox();
            setTimeout(() => {
                this.resetMessageBox();
            }, 4000);
        });

        this.errorMessageSubscription = this.messageBoxService.errorMessage$.subscribe(message => {
            this.errorMessage = message;
            this.showMessageBox();
            setTimeout(() => {
                this.resetMessageBox();
            }, 4000);
        });
    }

    // SHOW MESSAGE BOX
    showMessageBox(): void {
        if (this.messageBox) {
            this.isVisible = true;
        }
    }

    // RESET MESSAGE BOX
    resetMessageBox(): void {
        this.successMessage = '';
        this.errorMessage = '';
        this.isVisible = false;
    }

    // HANDLE SUBSCRIPTIONS
    ngOnDestroy() {
        this.successMessageSubscription.unsubscribe();
        this.errorMessageSubscription.unsubscribe();
    }
}


