import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  isSidebarCollapsed = false;
  private isBrowser: boolean;

  menuSections: MenuSection[] = [
    {
      title: 'MAIN',
      items: [
        { 
          icon: 'dashboard', 
          label: 'ESG Dashboard', 
          route: '/esg-dashboard' 
        }
      ]
    },
    {
      title: 'EPR MODULE',
      items: [
        { 
          icon: 'epr', 
          label: 'EPR Dashboard', 
          route: '/dashboard'
        },
        { 
          icon: 'kyc', 
          label: 'KYC & Registration', 
          route: '/kyc'
        },
        { 
          icon: 'fetch', 
          label: 'Auto Data Fetch', 
          route: '/auto-fetch'
        },
        { 
          icon: 'obligations', 
          label: 'EPR Obligations', 
          route: '/obligations'
        },
        { 
          icon: 'recycle-portal', 
          label: 'Recycler Portal', 
          route: '/recycler-portal'
        },
        { 
          icon: 'blockchain', 
          label: 'Blockchain Ledger', 
          route: '/blockchain'
        },
        { 
          icon: 'reports', 
          label: 'Reports', 
          route: '/reports'
        },
        { 
          icon: 'consumer', 
          label: 'Consumer Loop', 
          route: '/consumer-loop'
        },
        { 
          icon: 'management', 
          label: 'Management View', 
          route: '/management-view'
        }
      ]
    }
  ];

  constructor(
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkMobileView();
      window.addEventListener('resize', this.onResize);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize);
    }
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.updateBodyClass();
  }

  private onResize = (): void => {
    this.checkMobileView();
  };

  private checkMobileView(): void {
    if (this.isBrowser && window.innerWidth <= 768) {
      this.isSidebarCollapsed = true;
    } else {
      this.isSidebarCollapsed = false;
    }
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    if (this.isBrowser) {
      if (this.isSidebarCollapsed) {
        document.body.classList.add('sidebar-collapsed');
      } else {
        document.body.classList.remove('sidebar-collapsed');
      }
    }
  }
}