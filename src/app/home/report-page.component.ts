import { ChangeDetectionStrategy, Component } from '@angular/core';
import { myTab } from '../tab.service';

// Placeholder screen shown in a tab until the real report is migrated
@Component({
  selector: 'app-report-page',
  template: `
    <h1>{{ tabFullData.compArgs.mainMenuName }} / {{ tabFullData.compArgs.subMenuName }}</h1>
    <p>This report page has not been migrated to Angular 21 yet.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPageComponent {
  tabFullData!: myTab; // set by TabContent
}
