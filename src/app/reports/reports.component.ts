import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Report {
  id: string;
  title: string;
  subtitle: string;
  status: 'ready' | 'pending';
  frequency: string;
  lastUpdated: string;
  formats: string[];
  badge?: string;
  category: 'india' | 'global' | 'esg';
}

interface ReportCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  reports: Report[];
  expanded: boolean;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  stats = {
    reportsAvailable: 11,
    lastGenerated: 'Nov 28, 2025',
    downloadsThisMonth: 47,
    formatsAvailable: 3
  };

  categories: ReportCategory[] = [
    {
      id: 'india',
      title: 'India - CPCB / SPCB Reports',
      subtitle: 'Central & State Pollution Control Board compliance',
      icon: 'document',
      expanded: true,
      reports: [
        {
          id: 'cpcb-1a',
          title: 'CPCB Form 1A - Annual Returns',
          subtitle: 'Extended Producer Responsibility - Annual Return',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-04-15',
          formats: ['PDF', 'Excel'],
          category: 'india'
        },
        {
          id: 'cpcb-1b',
          title: 'CPCB Form 1B - Quarterly Returns',
          subtitle: 'Quarterly EPR Compliance Report',
          status: 'ready',
          frequency: 'Quarterly',
          lastUpdated: '2025-10-15',
          formats: ['PDF', 'Excel'],
          category: 'india'
        },
        {
          id: 'spcb',
          title: 'State-wise SPCB Reports',
          subtitle: 'Individual reports for each state pollution control board',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-04-15',
          formats: ['PDF'],
          category: 'india'
        },
        {
          id: 'mrf',
          title: 'Material Recovery Facility (MRF) Report',
          subtitle: 'Details of recycling infrastructure and capacity',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-04-15',
          formats: ['PDF', 'Excel'],
          category: 'india'
        }
      ]
    },
    {
      id: 'global',
      title: 'Global EPR Reports',
      subtitle: 'International compliance documentation',
      icon: 'globe',
      expanded: true,
      reports: [
        {
          id: 'eu-packaging',
          title: 'EU Packaging Waste Directive',
          subtitle: 'Compliance report for European markets',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-06-01',
          formats: ['PDF', 'Excel'],
          badge: 'European Union',
          category: 'india'
        },
        {
          id: 'germany-epr',
          title: 'Extended Producer Responsibility (EPR) - Germany',
          subtitle: 'VerpackG compliance documentation',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-05-20',
          formats: ['PDF'],
          badge: 'Germany',
          category: 'india'
        },
        {
          id: 'uk-plastic',
          title: 'UK Plastic Packaging Tax',
          subtitle: 'Plastic packaging tax compliance',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-07-10',
          formats: ['PDF', 'Excel'],
          badge: 'United Kingdom',
          category: 'india'
        }
      ]
    },
    {
      id: 'esg',
      title: 'ESG / CSR / Circularity Reports',
      subtitle: 'Sustainability & impact reporting',
      icon: 'chart',
      expanded: true,
      reports: [
        {
          id: 'esg-compliance',
          title: 'ESG Compliance Report',
          subtitle: 'Environmental, Social & Governance metrics',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-08-15',
          formats: ['PDF'],
          badge: 'GRI, SASB',
          category: 'india'
        },
        {
          id: 'circular-economy',
          title: 'Circular Economy Report',
          subtitle: 'Circularity metrics and material flow analysis',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-09-01',
          formats: ['PDF', 'Excel'],
          badge: 'Ellen MacArthur Foundation',
          category: 'india'
        },
        {
          id: 'csr-impact',
          title: 'CSR Impact Assessment',
          subtitle: 'Corporate Social Responsibility - EPR Impact',
          status: 'ready',
          frequency: 'Annual',
          lastUpdated: '2025-10-01',
          formats: ['PDF'],
          badge: 'Custom',
          category: 'india'
        },
        {
          id: 'audit-package',
          title: 'Audit-Ready Compliance Package',
          subtitle: 'Complete compliance documentation for audits',
          status: 'ready',
          frequency: 'On-demand',
          lastUpdated: '2025-11-28',
          formats: ['ZIP'],
          badge: 'Multi-standard',
          category: 'india'
        }
      ]
    }
  ];

  complianceFeatures = [
    'All India Reports',
    'All Global Reports',
    'All ESG Reports',
    'Blockchain Proofs'
  ];

  constructor(public router: Router){}

  ngOnInit(): void {
    // Initialize component
  }

  toggleCategory(categoryId: string): void {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.expanded = !category.expanded;
    }
  }

  downloadReport(reportId: string, format: string): void {
    console.log(`Downloading report ${reportId} in ${format} format`);
    // Implement download logic
  }

  downloadAll(): void {
    console.log('Downloading all reports');
    // Implement download all logic
  }

  getIconClass(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'document': '📄',
      'globe': '🌐',
      'chart': '📊'
    };
    return iconMap[icon] || '📄';
  }

  getBadgeColor(badge: string): string {
    if (badge.includes('European Union')) return 'badge-blue';
    if (badge.includes('Germany')) return 'badge-blue';
    if (badge.includes('United Kingdom')) return 'badge-blue';
    if (badge.includes('GRI')) return 'badge-purple';
    if (badge.includes('Ellen MacArthur')) return 'badge-purple';
    if (badge.includes('Custom')) return 'badge-purple';
    if (badge.includes('Multi-standard')) return 'badge-purple';
    return 'badge-green';
  }

  gotoConsumerloop(){
    this.router.navigate(['consumer-loop']);
  }
}