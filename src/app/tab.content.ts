import { Component, Input, ViewContainerRef, OnChanges, SimpleChanges} from '@angular/core';
// SimpleChanges - Provides information about which input properties changed
@Component({
    selector: 'app-tab-content',
    template: '<ng-template></ng-template>'
})

export class TabContent implements OnChanges {
    @Input() tab: any; // data flows from parent to child

    constructor(
        public viewContainerRef: ViewContainerRef // Empty container
    ){}

    ngOnChanges(changes: SimpleChanges): void {

        if (changes['tab'] && this.tab) {

            this.viewContainerRef.clear(); // removes existing tab component data

            const componentRef =
                this.viewContainerRef.createComponent<any>(this.tab.component);

                componentRef.instance.tabFullData = this.tab;
        }
    }
}



