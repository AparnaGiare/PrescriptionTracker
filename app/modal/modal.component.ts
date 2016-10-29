import {Component, Output, EventEmitter } from '@angular/core';

import { Prescription } from '../prescription';

@Component({
    selector: 'modal',
    template: `
        <div #dialog class="md-dialog mdl-color--blue mdl-shadow--2dp" [hidden]="!isOpen" (keydown.esc)="cancel()" (keydown.enter)="ok()">
            <div class="md-dialog-content">
                <div class="typo-styles__demo md-header">
                    <ng-content select="[title]"></ng-content>
                </div>
                <div class="md-dialog-content-body">
                    <ng-content select="[content]"></ng-content>
                </div>
            </div>
            <div class="md-dialog-actions">
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="ok()">
                    Ok
                </button>
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="cancel()">
                    Cancel
                </button>
            </div>
            <div tabindex="0" (focus)="dialog.focus()"></div>
        </div>
        <div class="md-backdrop" [hidden]="!isOpen"></div>
    `,
    styles: [
        `
        .md-dialog {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0 auto;
            z-index: 51;
            width: 600px;
            max-width: 50%;
            height: 400px;
            max-height: 100%;
            background: white;
        }

        .md-dialog-content {
            color: darkblue;
            font-sizing: 50em;
            font-weight: 20em;
            min-width: 450px;
            min-height: 100px;
            padding: 24px;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }

        .md-dialog-content > mdl-typography--headline {
            font-weight: 600;
        }

        .md-dialog-content-body {
            padding: 15px 0 5px 0;
        }

        .md-header {
            background: #428bca;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-order: 2;
            -ms-flex-order: 2;
            order: 2;
            box-sizing: border-box;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: center;
            margin-bottom: 0;
            
  
            min-height: 25px;
            overflow: hidden;
        }

        .md-dialog-actions {
            background: #428bca;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-order: 2;
            -ms-flex-order: 2;
            order: 2;
            box-sizing: border-box;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            margin-bottom: 0;
            padding-right: 8px;
            padding-left: 16px;
            min-height: 52px;
            overflow: hidden;
        }

        .md-backdrop {
            background-color: rgba(229,222,222,4.0);
            opacity: .48;
            transition: opacity 450ms;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 50;
        }
        `
    ]
})

export class ModalComponent {
    private isOpen: boolean = false;
    //        {id: 1, name: 'Concerta', totalDailyAmount:4 , pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
    private presciptionModal: Prescription = {id: 0, name: '', totalDailyAmount: 0,pillTakenToday: 0, dosage: 0, frequencyAmount: 0, frequency: ''};
    @Output() confirm: EventEmitter<any> = new EventEmitter();

    constructor() { }

    open(prescription: Prescription) {
        this.presciptionModal = {
            id: 4, 
            name: prescription.name,
            totalDailyAmount: prescription.totalDailyAmount,
            pillTakenToday: prescription.pillTakenToday,
            dosage: prescription.dosage, 
            frequencyAmount: prescription.frequencyAmount, 
            frequency: prescription.frequency,
        };
        this.isOpen = true;
    }

    ok() {
        this.isOpen = false;
        this.confirm.emit(this.presciptionModal);
    }

    cancel() {
        this.isOpen = false;
    }

}