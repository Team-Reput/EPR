import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SidebarComponent } from "../common/sidebar/sidebar.component";

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  isActive?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface StatCard {
  icon: string;
  value: string;
  label: string;
  subtitle: string;
  trend?: string;
  iconColor: string;
  showProgress?: boolean;
  progressValue?: number;
  progressMax?: number;
  verified?: boolean;
}

interface MaterialData {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSidebarCollapsed = false;
  
  complianceStatus = {
    status: 'Compliant',
    message: 'All EPR obligations met for current quarter',
    verified: 95,
    pending: 3,
    overdue: 2,
    lastUpdated: 'Nov 28, 2025 10:45 AM'
  };

  statCards: StatCard[] = [
    {
      icon: 'package',
      value: '12,847',
      label: 'Total Packaging Introduced',
      subtitle: 'Tonnes (Auto from Traceability)',
      trend: 'up',
      iconColor: '#3b82f6'
    },
    {
      icon: 'scale',
      value: '8,945',
      label: 'Total EPR Liability',
      subtitle: 'Tonnes (Current FY)',
      trend: 'up',
      iconColor: '#f59e0b'
    },
    {
      icon: 'recycle',
      value: '7,603 / 1,342',
      label: 'Recycled vs Pending',
      subtitle: '',
      iconColor: '#10b981',
      showProgress: true,
      progressValue: 7603,
      progressMax: 8945
    },
    {
      icon: 'shield',
      value: '98.5%',
      label: 'Blockchain-Verified Proof',
      subtitle: '7,483 / 7,603 tonnes',
      iconColor: '#8b5cf6',
      verified: true
    }
  ];

  actionCards = [
    {
      icon: 'play',
      title: 'Start EPR Setup',
      subtitle: 'One-time KYC & Registration',
      color: '#10b981',
      action: 'setup'
    },
    {
      icon: 'ledger',
      title: 'View Live EPR Ledger',
      subtitle: 'Blockchain-verified transactions',
      color: '#8b5cf6',
      action: 'ledger'
    },
    {
      icon: 'upload',
      title: 'Upload Recycler Proof',
      subtitle: 'Submit compliance certificates',
      color: '#3b82f6',
      action: 'upload'
    },
    {
      icon: 'download',
      title: 'Download CPCB Report',
      subtitle: 'Auto-generated compliance reports',
      color: '#f59e0b',
      action: 'download'
    }
  ];

  materialData: MaterialData[] = [
    { name: 'Plastic (LDPE, HDPE, PET)', value: 6845, color: '#3b82f6' },
    { name: 'Paper & Cardboard', value: 4123, color: '#f59e0b' },
    { name: 'Metal (Aluminum, Steel)', value: 1879, color: '#6b7280' }
  ];

  menuSections: MenuSection[] = [
    {
      title: 'MAIN',
      items: [
        { icon: 'dashboard', label: 'ESG Dashboard', route: '/esg-dashboard' }
      ]
    },
    {
      title: 'EPR MODULE',
      items: [
        { icon: 'epr', label: 'EPR Dashboard', route: '/epr-dashboard', isActive: true },
        { icon: 'kyc', label: 'KYC & Registration', route: '/kyc' },
        { icon: 'fetch', label: 'Auto Data Fetch', route: '/auto-fetch'},
        { icon: 'obligations', label: 'EPR Obligations', route: '/obligations' },
        { icon: 'recycle-portal', label: 'Recycler Portal', route: '/recycler-portal' },
        { icon: 'blockchain', label: 'Blockchain Ledger', route: '/blockchain' },
        { icon: 'reports', label: 'Reports', route: '/reports' },
        { icon: 'consumer', label: 'Consumer Loop', route: '/consumer-loop' },
        { icon: 'management', label: 'Management View', route: '/management-view' }
      ]
    }
  ];

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  getProgressPercentage(): number {
    const total = this.statCards[2].progressMax || 1;
    const value = this.statCards[2].progressValue || 0;
    return (value / total) * 100;
  }

  getMaterialPercentage(value: number): number {
    const total = this.materialData.reduce((sum, item) => sum + item.value, 0);
    return (value / total) * 100;
  }

  handleAction(action: string): void {
    console.log('Action triggered:', action);
  }

  navigateTo(route: string): void {
    console.log('Navigate to:', route);
  }
}