import { Injectable, signal, Type } from "@angular/core";
import { Tab } from "./tab.model";

export interface myTab {
    label: string;
    component: any;
    compArgs: any;
    image: string;
    pinned: boolean;
    tabId: number;
}

@Injectable({ providedIn: 'root'}) // create one instance and manage it throughout the application
export class TabService{
    public readonly tabs = signal<myTab[]>([]); // contains an empty [] with tab model structure
    public readonly activeTabId = signal<number | null>(null);
    private nextTabId = 1;

    // OPEN TAB - activates the existing tab with the same title, otherwise adds a new one
    // public openTab(tab: Tab): void {

    //     const existing = this.tabs().find(t => t.label === tab.title);

    //     if (existing) {
    //         this.activeTabId.set(existing.tabId);
    //     } else {
    //         this.addTab(tab);
    //     }
    // }

    // ADD TAB
    public addTab(tab: Tab): void {

        const newTab: myTab = {
            label: tab.title,
            component: tab.component,
            compArgs: tab.compArgs,
            image: '',
            pinned: false,
            tabId: this.nextTabId++
        };

        // Add new tab at the beginning
        this.tabs.update(tabs => [newTab, ...tabs]);
        
        // 
        this.activeTabId.set(newTab.tabId);
    }


    // // REMOVE SELECTED TAB  
    // public removeTab(index: number): void {

    //     this.tabs.update(tabs =>
    //         tabs.filter((tab, i) => i !== index)
    //     );
    // }


    // REMOVE ALL TABS
    public removeAllTab(): void {

        this.tabs.set([]);
        this.activeTabId.set(null);
    }


    // REMOVE OTHER TABS
    public removeOtherTabs(index: number): void {

        this.tabs.update(tabs =>
            index >= 0 && index < tabs.length
                ? [tabs[index]] // catches the index and keeps its tabs
                : tabs // tabs are unchanged
        );

        const kept = this.tabs()[0];
        if (kept) {
            this.activeTabId.set(kept.tabId);
        }
    }


    // REMOVE TAB USING ITS UNIQUE ID
    public removeTabById(tabId: number): void {

        const before = this.tabs();
        const index = before.findIndex(tab => tab.tabId === tabId);
        const after = before.filter(tab => tab.tabId !== tabId);

        this.tabs.set(after);

        // closing the active tab activates its neighbour
        if (this.activeTabId() === tabId) {
            const next = after[Math.min(index, after.length - 1)];
            this.activeTabId.set(next ? next.tabId : null);
        }
    }
}





