import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Process {
  id: string;
  name: string;
  generated: number;
  disposed: number;
  gap: number;
  gapPercentage: number;
  isExpanded: boolean;
}

interface GapDriver {
  title: string;
  description: string;
}

interface ComplianceItem {
  id: string;
  title: string;
  description: string;
  type: string;
  status: 'warning' | 'critical' | 'ok';
  quantity: number;
  agingHours: number;
  agingLimit: number;
  agingPercentage: number;
}

interface ComplianceRule {
  title: string;
  description: string;
  type: 'biomedical' | 'hazardous' | 'certificate' | 'manifest';
}

@Component({
  selector: 'app-gaps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gaps.component.html',
  styleUrls: ['./gaps.component.scss']
})
export class GapsComponent implements OnInit {
  totalGenerated = 57550;
  totalDisposed = 52940;
  totalGap = 4610;
  gapPercentage = 8.0;

  processes: Process[] = [
    {
      id: 'fiber',
      name: 'Fiber Stage',
      generated: 3200,
      disposed: 3150,
      gap: 50,
      gapPercentage: 1.6,
      isExpanded: false
    },
    {
      id: 'spinning',
      name: 'Spinning',
      generated: 4800,
      disposed: 4750,
      gap: 50,
      gapPercentage: 1.0,
      isExpanded: false
    },
    {
      id: 'knitting',
      name: 'Knitting / Fabric Formation',
      generated: 6400,
      disposed: 6200,
      gap: 200,
      gapPercentage: 3.1,
      isExpanded: false
    },
    {
      id: 'dyeing',
      name: 'Dyeing & Finishing',
      generated: 17050,
      disposed: 16230,
      gap: 820,
      gapPercentage: 4.8,
      isExpanded: false
    },
    {
      id: 'garmenting',
      name: 'Garmenting',
      generated: 21450,
      disposed: 19080,
      gap: 2370,
      gapPercentage: 11.0,
      isExpanded: false
    },
    {
      id: 'biomedical',
      name: 'Biomedical (Medical Rooms)',
      generated: 4650,
      disposed: 3530,
      gap: 1120,
      gapPercentage: 24.1,
      isExpanded: false
    }
  ];

  gapDrivers: GapDriver[] = [
    {
      title: 'Storage Timing Lag',
      description: 'Waste tracked at generation but disposal logged only at weighbridge. Solution: Daily reconciliation + temporary storage tracking'
    },
    {
      title: 'Bulk Pickup Scheduling',
      description: 'Chindi awaiting recycler pickup creates temporary gaps. Solution: Weekly bulk pickup + real-time inventory updates'
    },
    {
      title: 'Classification Mismatch',
      description: 'Process floor uses different labels than disposal manifest. Solution: Standardized waste type taxonomy across systems'
    },
    {
      title: 'ETP Sludge Accumulation',
      description: 'Generated daily but disposed monthly. Solution: Monthly auto-accrual + disposal vendor scheduling'
    }
  ];

  complianceItems: ComplianceItem[] = [
    {
      id: 'gloves',
      title: 'Gloves, masks, wipes pending disposal',
      description: 'Yellow bag waste (infectious)',
      type: 'Biomedical',
      status: 'warning',
      quantity: 450,
      agingHours: 20,
      agingLimit: 24,
      agingPercentage: 83
    },
    {
      id: 'cotton',
      title: 'Cotton dressing, bandages pending pickup',
      description: 'Red bag waste (contaminated)',
      type: 'Biomedical',
      status: 'critical',
      quantity: 320,
      agingHours: 28,
      agingLimit: 24,
      agingPercentage: 117
    },
    {
      id: 'etp',
      title: 'Dyeing & Finishing - ETP sludge in storage',
      description: 'ETP sludge',
      type: 'Hazardous',
      status: 'ok',
      quantity: 2400,
      agingHours: 65,
      agingLimit: 90,
      agingPercentage: 72
    },
    {
      id: 'rags',
      title: 'Garmenting - Machine cleaning rags',
      description: 'Oil-contaminated rags',
      type: 'Hazardous',
      status: 'warning',
      quantity: 850,
      agingHours: 82,
      agingLimit: 90,
      agingPercentage: 91
    },
    {
      id: 'dye',
      title: 'Dyeing & Finishing - Batch D-2024-12-18',
      description: 'Spent dye bath residues',
      type: 'Hazardous',
      status: 'warning',
      quantity: 1850,
      agingHours: 72,
      agingLimit: 90,
      agingPercentage: 80
    }
  ];

  complianceRules: ComplianceRule[] = [
    {
      title: 'Biomedical Waste - 24 Hour Rule',
      description: 'All biomedical waste must be disposed within 24 hours of generation as per BMW Management Rules.',
      type: 'biomedical'
    },
    {
      title: 'Hazardous Waste - 90 Day Rule',
      description: 'Hazardous waste storage cannot exceed 90 days as per Hazardous Waste Management Rules.',
      type: 'hazardous'
    },
    {
      title: 'Disposal Certificates',
      description: 'Certificate of disposal must be obtained from authorized vendors within 7 days of waste transfer.',
      type: 'certificate'
    },
    {
      title: 'Manifest Tracking',
      description: 'All hazardous waste movements must be accompanied by proper manifest documentation.',
      type: 'manifest'
    }
  ];

  criticalCount = 1;
  warningCount = 3;
  compliantCount = 1;

  ngOnInit(): void {
    this.updateComplianceCounts();
  }

  toggleProcess(process: Process): void {
    process.isExpanded = !process.isExpanded;
  }

  getGapTrend(gapPercentage: number): string {
    if (gapPercentage > 10) return 'critical';
    if (gapPercentage > 5) return 'high';
    if (gapPercentage > 2) return 'medium';
    return 'low';
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'critical': return '⚠';
      case 'warning': return '⚠';
      case 'ok': return '✓';
      default: return '';
    }
  }

  updateComplianceCounts(): void {
    this.criticalCount = this.complianceItems.filter(item => item.status === 'critical').length;
    this.warningCount = this.complianceItems.filter(item => item.status === 'warning').length;
    this.compliantCount = this.complianceItems.filter(item => item.status === 'ok').length;
  }

  getProgressBarColor(status: string): string {
    switch (status) {
      case 'critical': return '#dc2626';
      case 'warning': return '#f59e0b';
      case 'ok': return '#10b981';
      default: return '#94a3b8';
    }
  }
}
