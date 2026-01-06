import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HighlightMetric {
  label: string;
  value: string;
  description: string;
}

interface MetricCard {
  icon: string;
  label: string;
  value: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
  subtitle?: string;
  badgeColor?: string;
}

interface QuarterlyTrend {
  quarter: string;
  achieved: number;
  target: number;
  percentage: number;
  status: 'excellent' | 'good' | 'warning';
}

interface RiskItem {
  title: string;
  description: string;
  date: string;
  action: string;
  riskLevel: 'low' | 'medium' | 'high';
}

interface ESGMetric {
  category: string;
  score: number;
  color: string;
  metrics: {
    title: string;
    value: string;
    trend?: string;
  }[];
}

interface FinancialCard {
  title: string;
  value: string;
  description: string;
  bgColor: string;
  textColor: string;
}

interface ExecutiveSummaryPoint {
  icon: string;
  title: string;
  description: string;
  status: 'success' | 'warning' | 'info';
}

@Component({
  selector: 'app-management-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management-view.component.html',
  styleUrls: ['./management-view.component.scss']
})
export class ManagementViewComponent implements OnInit {
  lastUpdated = 'Nov 28, 2025';
  
  // Hero Section Data
  complianceStatus = 'Excellent';
  complianceRate = '99.8%';
  complianceDescription = '99.8% compliance rate - Exceeding regulatory requirements by 14.8%';
  fiscalYear = 'FY 2025-26 PERFORMANCE';

  highlightMetrics: HighlightMetric[] = [
    {
      label: 'Zero',
      value: 'Zero',
      description: 'Compliance Violations'
    },
    {
      label: '₹2.4 Cr',
      value: '₹2.4 Cr',
      description: 'Penalties Avoided'
    },
    {
      label: '100%',
      value: '100%',
      description: 'Blockchain Verified'
    },
    {
      label: '18.5K',
      value: '18.5K',
      description: 'KPIs Achieved'
    }
  ];

  // Main Metrics
  primaryMetrics: MetricCard[] = [
    {
      icon: 'verified',
      label: 'EPR Compliance Rate',
      value: '99.8%',
      trend: '+2.3%',
      trendDirection: 'up',
      subtitle: 'Carbon Reduction via Recycling',
      badgeColor: 'success'
    },
    {
      icon: 'inventory_2',
      label: 'Total EPR Liability',
      value: '10,635 t',
      trend: '+1.2%',
      trendDirection: 'up',
      badgeColor: 'info'
    },
    {
      icon: 'payments',
      label: 'Financial Exposure',
      value: '₹0',
      trend: '-100%',
      trendDirection: 'down',
      badgeColor: 'success'
    },
    {
      icon: 'warning',
      label: 'Compliance Risk Score',
      value: '2/100',
      trend: '-16 pts',
      trendDirection: 'down',
      badgeColor: 'warning'
    }
  ];

  // Secondary Metrics
  secondaryMetrics: MetricCard[] = [
    {
      icon: 'recycling',
      label: 'Total Recycled',
      value: '10,613',
      subtitle: 'tonnes'
    },
    {
      icon: 'cloud',
      label: 'CO₂ Emissions Avoided',
      value: '18,450',
      subtitle: 'tCO2e'
    },
    {
      icon: 'delete',
      label: 'Landfill Waste Diverted',
      value: '95%',
      subtitle: 'of total'
    },
    {
      icon: 'sync',
      label: 'Circular Material Flow',
      value: '62%',
      subtitle: 'fibre-to-fibre'
    }
  ];

  // Quarterly Performance Data
  quarterlyTrends: QuarterlyTrend[] = [
    {
      quarter: 'Q1 FY25',
      achieved: 2427,
      target: 2534,
      percentage: 98.2,
      status: 'excellent'
    },
    {
      quarter: 'Q2 FY25',
      achieved: 2654,
      target: 2687,
      percentage: 98.8,
      status: 'excellent'
    },
    {
      quarter: 'Q3 FY25',
      achieved: 2797,
      target: 2801,
      percentage: 99.6,
      status: 'excellent'
    },
    {
      quarter: 'Q4 FY25',
      achieved: 2876,
      target: 2804,
      percentage: 102.6,
      status: 'excellent'
    }
  ];

  // Risk Assessment
  riskItems: RiskItem[] = [
    {
      title: 'Panel Recovery - West Bengal',
      description: 'Slightly below target (98% vs 100%)',
      date: 'Dec 31, 2025',
      action: 'Monitor for Q4',
      riskLevel: 'low'
    },
    {
      title: 'Quarterly Report Due',
      description: 'Q1 PCB submission approaching',
      date: 'Jan 15, 2026',
      action: 'Auto-generated, ready to submit',
      riskLevel: 'low'
    }
  ];

  // ESG Impact Data
  esgMetrics: ESGMetric[] = [
    {
      category: 'Environmental',
      score: 94,
      color: '#d1f4e0',
      metrics: [
        { title: 'Carbon Recovery Rate', value: '99.8%', trend: '+14.3% vs industry' },
        { title: 'Carbon Footprint Reduction', value: '18,450 tCO2e', trend: 'Top 5% in sector' },
        { title: 'Circular Economy Index', value: '62%', trend: 'Industry-leading' }
      ]
    },
    {
      category: 'Social',
      score: 88,
      color: '#dbe4f3',
      metrics: [
        { title: 'Consumer Engagement', value: '456K active', trend: '+19% MoM' },
        { title: 'Livelihoods Created', value: '340 recyclers', trend: '28 states' },
        { title: 'Community Impact', value: '218 collection points', trend: 'Growing network' }
      ]
    },
    {
      category: 'Governance',
      score: 98,
      color: '#f3e5f8',
      metrics: [
        { title: 'Regulatory Compliance', value: '100%', trend: 'Zero violations' },
        { title: 'Blockchain Transparency', value: '1,147 transactions', trend: 'Fully auditable' },
        { title: 'Reporting Accuracy', value: '100%', trend: 'Auto-verified' }
      ]
    }
  ];

  overallESGScore = 93.3;

  // Financial Data
  financialCards: FinancialCard[] = [
    {
      title: 'Potential Penalty Exposure',
      value: '₹0',
      description: '100% compliant',
      bgColor: '#fee',
      textColor: '#c00'
    },
    {
      title: 'Penalties Avoided (FY)',
      value: '₹2.4 Cr',
      description: 'vs non-compliance scenario',
      bgColor: '#efe',
      textColor: '#0a0'
    },
    {
      title: 'Consultant Cost Savings',
      value: '₹18 L',
      description: 'per annum',
      bgColor: '#eef',
      textColor: '#05a'
    }
  ];

  // Executive Summary
  executiveSummary: ExecutiveSummaryPoint[] = [
    {
      icon: 'check_circle',
      title: 'EPR Compliance',
      description: 'Achieving 99.8% compliance rate, significantly exceeding the regulatory requirement of 85%, Zero violations or penalties this fiscal year.',
      status: 'success'
    },
    {
      icon: 'check_circle',
      title: 'Financial Impact',
      description: 'Avoided ₹2.4 Cr in potential non-compliance penalties. Reduced consultant dependency, saving ₹18 L annually.',
      status: 'success'
    },
    {
      icon: 'check_circle',
      title: 'Environmental Leadership',
      description: '18,450 tCO2e emissions avoided through recycling. Leading the industry in circular economy practices with 62% fibre-to-fibre recycling rate.',
      status: 'success'
    },
    {
      icon: 'check_circle',
      title: 'ESG Rating',
      description: 'Overall ESG score of 93.3, positioning the company in the top tier of sustainability performers in the FMCG sector.',
      status: 'success'
    },
    {
      icon: 'check_circle',
      title: 'Risk Profile',
      description: 'Compliance risk score of 2/100 (Low Risk). All regulatory reporting automated and blockchain-verified for audit transparency.',
      status: 'success'
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'excellent': '#10b981',
      'good': '#3b82f6',
      'warning': '#f59e0b',
      'low': '#10b981',
      'medium': '#f59e0b',
      'high': '#ef4444'
    };
    return colors[status] || '#6b7280';
  }

  navigateBack(): void {
    console.log('Navigate back to EPR Dashboard');
  }

  backToEPRDashboard(): void {
    console.log('Navigate back to EPR Dashboard');
  }
}