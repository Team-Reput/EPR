import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KycComponent } from './kyc/kyc.component';
import { AutoDataFetchComponent } from './auto-data-fecth/auto-data-fecth.component';
import { ObligationsComponent } from './obligations/obligations.component';
import { RecyclerPortalComponent } from './recycler-portal/recycler-portal.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { ReportsComponent } from './reports/reports.component';
import { ConsumerLoopComponent } from './consumer-loop/consumer-loop.component';
import { ManagementViewComponent } from './management-view/management-view.component';
import { OverviewComponent } from './waste-management/overview/overview.component';
import { WasteAnalysisComponent } from './waste-management/waste-analysis/waste-analysis.component';
import { GapsComponent } from './waste-management/gaps/gaps.component';
import { AiinsightsComponent } from './waste-management/aiinsights/aiinsights.component';
import { ScoreComponent } from './waste-management/score/score.component';
import { MethodologyComponent } from './waste-management/methodology/methodology.component';
// import { RecyclerPortalComponent } from './recyeler-portal/recyeler-portal.component';
 

 

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component:DashboardComponent }, 
    { path: 'kyc',component:  KycComponent},
    {path: 'auto-fetch', component:AutoDataFetchComponent },
    {path: 'obligations', component:ObligationsComponent },
    {path:'recycler-portal', component:RecyclerPortalComponent},
    {path:'blockchain', component:BlockchainComponent},
    {path:'reports', component:ReportsComponent},
    {path:'consumer-loop', component:ConsumerLoopComponent},
    {path:'management-view', component: ManagementViewComponent},
    {path:'Overview', component: OverviewComponent},
    {path:'waste-analysis', component: WasteAnalysisComponent},
    {path:'gaps', component: GapsComponent},
    {path:'aiinsights', component: AiinsightsComponent},
    {path:'score', component: ScoreComponent},
    {path:'methodology', component: MethodologyComponent}


];
