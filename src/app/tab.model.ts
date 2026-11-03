import { Type } from '@angular/core';

export class Tab {
    public id!: number; 
    public title: string;
    public compArgs: any; 
    public active!: boolean;
    public component: Type<any>; // screen

    constructor(component: Type<any>, title: string, compArgs: any) {
        this.component = component;
        this.title = title;
        this.compArgs = compArgs;
    }
}