import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Tab } from '../tab.model';
import { TabContent } from '../tab.content';
import { TabService } from '../services/tab.service';
// import { ReportPageComponent } from './report-page.component';
import { LoginService } from '../services/login.service';
import { UserMenu } from '../models';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { resolveTabComponent } from '../services/tab.registry';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent, TabContent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly loginService = inject(LoginService);
  readonly tabService = inject(TabService);
  readonly selectedMenu = signal<UserMenu | null>(null);
  readonly activeTab = computed(() => {
    return this.tabService.tabs().find((tab) => tab.tabId === this.tabService.activeTabId()) ?? null;
  });
  readonly sidebarVisible = signal(true);
  readonly notice = signal('');

  openReport(menu: UserMenu): void {
    const allowedMenu = this.loginService.menus().find((item) => {
      return item.mainMenuName === menu.mainMenuName && item.subMenuName === menu.subMenuName;
    });

    console.log('report click');

    if (allowedMenu) {
      this.selectedMenu.set(allowedMenu);
      const component = resolveTabComponent(allowedMenu.mainMenuName, allowedMenu.subMenuName); // get main:dash, sub:config
      if (!component) {
        this.notice.set(allowedMenu.subMenuName + ' is not available in this application yet.');
        return;
      }
      this.notice.set('');
      // every click adds a new tab; duplicates are independent component instances
      this.tabService.addTab(
        new Tab(
          component,
          allowedMenu.mainMenuName + ' / ' + allowedMenu.subMenuName,
          { ...allowedMenu }
        )
      );

      console.log('add tab clicked')
    }
  }

  selectTab(tabId: number): void {
    this.tabService.activeTabId.set(tabId);
    console.log('select tab clicked')
  }

  closeTab(tabId: number): void {
    this.tabService.removeTabById(tabId);
    console.log('close tab clicked')
  }

  toggleSidebar(): void {
    this.sidebarVisible.set(!this.sidebarVisible());
  }

  showProfileAction(action: string): void {
    this.notice.set(action + ' is not available in this application yet.');
  }

  returnToLogin(): void {
    this.loginService.clearSession();
  }
}
