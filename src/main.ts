import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { LicenseManager } from "ag-grid-enterprise";
import { AgCharts } from "ag-charts-enterprise";

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
}).catch((error) => {
  console.error('Unable to start ESEC:', error);
});

// THIS AG GRID LICENSE KEY
LicenseManager.setLicenseKey(
  "Using_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-053467}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{Nibana_Solutions_Private_Limited}_is_granted_a_{Single_Application}_Developer_License_for_the_application_{ESEC}_only_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_{ESEC}_need_to_be_licensed___{ESEC}_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Charts_and_AG_Grid}_Enterprise_versions_released_before_{11_February_2025}____[v3]_[0102]_MTczOTIzMjAwMDAwMA==c176d61178d76e5b03620b35bede95e7",
);

AgCharts.setLicenseKey(
  "Using_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-053467}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{Nibana_Solutions_Private_Limited}_is_granted_a_{Single_Application}_Developer_License_for_the_application_{ESEC}_only_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_{ESEC}_need_to_be_licensed___{ESEC}_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Charts_and_AG_Grid}_Enterprise_versions_released_before_{11_February_2025}____[v3]_[0102]_MTczOTIzMjAwMDAwMA==c176d61178d76e5b03620b35bede95e7",
);