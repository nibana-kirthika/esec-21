import { Type } from '@angular/core';
import { DashboardConfiguration } from '../components/reports/Dashboard/dashboard-configuration/dashboard-configuration';
import { CloudAconex } from '../components/reports/Cloud/cloud-aconex/cloud-aconex';

// key = "MAINMENU/SUBMENU" (upper case) matching the menu data
// Record<KeyType, ValueType>
const TAB_COMPONENTS: Record<string, Type<any>> = {
    'DASHBOARD/CONFIGURATION': DashboardConfiguration,
    'CLOUD/ACONEX': CloudAconex,
};

// returns null when no screen is registered for the menu
export function resolveTabComponent(main: string, sub: string): Type<any> | null {   // get main:dash, sub:config
    const key = `${main}/${sub}`.trim().toUpperCase(); // DASH/CONFIG
    const component = TAB_COMPONENTS[key]; // TAB_COMPONENTS[DASH/CONFIG]
    if (!component) {
        console.warn(`No component registered for menu key "${key}"`);
    }
    return component ?? null;
}
