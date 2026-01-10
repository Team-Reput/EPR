import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Insight {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  severity: 'critical' | 'warning' | 'info';
  timestamp: string;
  isExpanded: boolean;
  details?: {
    description: string;
    impact: string;
    recommendation: string;
    metrics?: {
      label: string;
      value: string;
    }[];
  };
}

interface ActionSummary {
  immediate: string[];
  thisWeek: string[];
  thisMonth: string[];
  aiSummary: string;
}

@Component({
  selector: 'app-aiinsights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aiinsights.component.html',
  styleUrls: ['./aiinsights.component.scss']
})
export class AiinsightsComponent implements OnInit {
  criticalCount = 3;
  warningCount = 2;
  infoCount = 2;

  insights: Insight[] = [
    {
      id: 1,
      title: 'Marker loss driving chindi increase in Garmenting',
      category: 'Garmenting',
      subCategory: 'Chindi - Marker loss',
      severity: 'critical',
      timestamp: '2024-12-30 09:15',
      isExpanded: false,
      details: {
        description: 'Analysis shows a 15% increase in chindi waste generation due to inefficient marker planning, resulting in higher fabric wastage during cutting operations.',
        impact: 'Additional 450 kg/week of fabric waste, estimated annual cost impact of ₹2.3L',
        recommendation: 'Implement AI-powered marker optimization software to reduce fabric wastage. Review cutting patterns for high-volume SKUs and provide additional training to cutting room staff.',
        metrics: [
          { label: 'Current Waste Rate', value: '12.5%' },
          { label: 'Target Rate', value: '8.0%' },
          { label: 'Potential Savings', value: '₹2.3L/year' }
        ]
      }
    },
    {
      id: 2,
      title: 'Shade rejection fabric spike in Dyeing & Finishing',
      category: 'Dyeing & Finishing',
      subCategory: 'Shade rejection fabric',
      severity: 'critical',
      timestamp: '2024-12-30 08:45',
      isExpanded: false,
      details: {
        description: 'Sudden increase in shade rejection rates detected, primarily in medium and dark shades. Quality control data indicates inconsistent dye application.',
        impact: '320 kg of rejected fabric this week, affecting production timelines and increasing rework costs',
        recommendation: 'Calibrate dyeing machines immediately. Review chemical mixing ratios and water quality parameters. Consider implementing spectrophotometer checks before bulk production.',
        metrics: [
          { label: 'Rejection Rate', value: '8.2%' },
          { label: 'Industry Standard', value: '3.5%' },
          { label: 'Affected Batches', value: '12' }
        ]
      }
    },
    {
      id: 3,
      title: 'ETP sludge generation trending up in Dyeing & Finishing',
      category: 'Dyeing & Finishing',
      subCategory: 'ETP sludge',
      severity: 'warning',
      timestamp: '2024-12-30 07:30',
      isExpanded: false,
      details: {
        description: 'Effluent treatment plant sludge generation has increased by 22% over the past month, indicating potential process inefficiencies or increased production load.',
        impact: 'Higher disposal costs and approaching storage capacity limits. Additional ₹45K monthly disposal expense.',
        recommendation: 'Conduct ETP performance audit. Optimize chemical dosing and explore sludge dewatering equipment to reduce volume. Schedule vendor pickup more frequently.',
        metrics: [
          { label: 'Monthly Generation', value: '2,850 kg' },
          { label: 'Storage Capacity', value: '72%' },
          { label: 'Disposal Cost', value: '₹45K/month' }
        ]
      }
    },
    {
      id: 4,
      title: 'Biomedical waste exceeding 24-hour disposal rule',
      category: 'All Processes (Medical Rooms)',
      subCategory: 'Yellow bag (infectious waste)',
      severity: 'critical',
      timestamp: '2024-12-30 11:30',
      isExpanded: false,
      details: {
        description: 'Critical compliance violation: Biomedical waste from medical rooms has exceeded the mandatory 24-hour disposal timeline, currently at 28 hours.',
        impact: 'Regulatory non-compliance risk, potential penalties, and health hazard to workers',
        recommendation: 'Immediate pickup required. Establish daily pickup schedule with authorized biomedical waste vendor. Implement automated alerts at 20-hour mark.',
        metrics: [
          { label: 'Current Aging', value: '28 hours' },
          { label: 'Regulatory Limit', value: '24 hours' },
          { label: 'Violation Penalty', value: '₹25K-50K' }
        ]
      }
    },
    {
      id: 5,
      title: 'Garmenting stage gap: 2,370 kg unaccounted',
      category: 'Garmenting',
      subCategory: 'Multiple sub-types',
      severity: 'warning',
      timestamp: '2024-12-29 16:20',
      isExpanded: false,
      details: {
        description: 'Significant discrepancy between waste generated and waste disposed in the garmenting stage, suggesting tracking gaps or temporary storage issues.',
        impact: '11% gap rate indicating potential data accuracy issues or unrecorded waste streams',
        recommendation: 'Conduct physical inventory verification. Review all waste collection points and ensure proper weighment procedures. Implement daily reconciliation process.',
        metrics: [
          { label: 'Generated', value: '21,450 kg' },
          { label: 'Disposed', value: '19,080 kg' },
          { label: 'Gap Rate', value: '11.0%' }
        ]
      }
    },
    {
      id: 6,
      title: 'Knitting / Fabric Formation waste reduction sustained',
      category: 'Knitting / Fabric Formation',
      subCategory: 'Yarn end cuts',
      severity: 'info',
      timestamp: '2024-12-29 14:10',
      isExpanded: false,
      details: {
        description: 'Positive trend: Waste generation in knitting operations has decreased by 18% over the past quarter through better yarn management and process optimization.',
        impact: 'Cost savings of ₹1.2L quarterly, improved material utilization efficiency',
        recommendation: 'Document and replicate best practices across other production lines. Consider recognition program for the knitting team.',
        metrics: [
          { label: 'Waste Reduction', value: '18%' },
          { label: 'Cost Savings', value: '₹1.2L/quarter' },
          { label: 'Efficiency Gain', value: '12%' }
        ]
      }
    },
    {
      id: 7,
      title: 'Comber noil recycling rate improvement opportunity',
      category: 'Spinning',
      subCategory: 'Comber noil',
      severity: 'info',
      timestamp: '2024-12-28 10:45',
      isExpanded: false,
      details: {
        description: 'Analysis identifies potential to increase comber noil recycling rate from current 45% to 70% through partnership with specialized recyclers.',
        impact: 'Additional revenue of ₹85K annually and reduced disposal costs',
        recommendation: 'Evaluate partnerships with comber noil recyclers. Ensure proper segregation and storage to maintain fiber quality for recycling.',
        metrics: [
          { label: 'Current Recycling', value: '45%' },
          { label: 'Target Rate', value: '70%' },
          { label: 'Revenue Potential', value: '₹85K/year' }
        ]
      }
    }
  ];

  actionSummary: ActionSummary = {
    immediate: [
      'Biomedical pickup (24h violation)',
      'Shade rejection spike'
    ],
    thisWeek: [
      'Marker loss reduction (SKU-8845)',
      'ETP sludge disposal',
      'Garmenting gap verification'
    ],
    thisMonth: [
      'Best practice replication',
      'Comber noil recycling partnership'
    ],
    aiSummary: 'Top 3 actions reduce waste by 3,100 kg/month (6.4% reduction), estimated savings: ₹186K/year'
  };

  showActionSummary = false;
  lastUpdated = 'December 30, 2024, 18:45 IST';
  nextRefresh = 'Auto (every 15 minutes)';

  ngOnInit(): void {
    this.updateCounts();
  }

  toggleInsight(insight: Insight): void {
    insight.isExpanded = !insight.isExpanded;
  }

  toggleActionSummary(): void {
    this.showActionSummary = !this.showActionSummary;
  }

  updateCounts(): void {
    this.criticalCount = this.insights.filter(i => i.severity === 'critical').length;
    this.warningCount = this.insights.filter(i => i.severity === 'warning').length;
    this.infoCount = this.insights.filter(i => i.severity === 'info').length;
  }

  getSeverityIcon(severity: string): string {
    switch (severity) {
      case 'critical':
        return '⊘';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ⓘ';
      default:
        return '';
    }
  }

  getSeverityClass(severity: string): string {
    return `severity-${severity}`;
  }

  getBadgeClass(severity: string): string {
    return `badge-${severity}`;
  }

  getNumberBadgeClass(severity: string): string {
    return `number-badge-${severity}`;
  }
}
