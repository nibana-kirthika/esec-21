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
                this.viewContainerRef.createComponent<any>(this.tab.component);  // this.tab.component - the component class
                console.log('viewContainer triggered',this.tab.component);

            const el: HTMLElement = componentRef.location.nativeElement;
            console.log(el);
            el.style.display = 'flow-root'; // block that keeps child margins inside, so they don't push the screen down
            el.style.width =  '100%';
            el.style.height =  '100%';

        }
    }
}



