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
     {path:'management-view', component: ManagementViewComponent}


];
