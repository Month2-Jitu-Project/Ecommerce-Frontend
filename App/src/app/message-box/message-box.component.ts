import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class MessageBoxComponent implements OnInit {
    isVisible: boolean = false;
    successMessage!: string;
    errorMessage!: string;
    successMessageSubscription!: Subscription;
    errorMessageSubscription!: Subscription;

    // FONT AWESOME ICONS
    envelopeIcon: IconDefinition = faEnvelope;

    @ViewChild('messageBox', { static: false })
    messageBox!: ElementRef;

    constructor(private messageBoxService: MessageBoxService) { }

    ngOnInit(): void {
        this.successMessageSubscription = this.messageBoxService.successMessage$.subscribe(message => {
            this.successMessage = message;
        });

        this.errorMessageSubscription = this.messageBoxService.errorMessage$.subscribe(message => {
            this.errorMessage = message;
        });
    }

    // HANDLE SUBSCRIPTION
    ngOnDestroy() {
        this.successMessageSubscription.unsubscribe();
        this.errorMessageSubscription.unsubscribe();
    }
    
}


