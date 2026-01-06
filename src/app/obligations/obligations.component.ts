import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { SidebarComponent } from "../common/sidebar/sidebar.component";

interface StatCard {
  icon: string;
  label: string;
  value: string;
  subtitle: string;
  color: string;
}

interface MaterialObligation {
  id: string;
  name: string;
  status: 'compliant' | 'pending' | 'action-required';
  statusLabel: string;
  totalIntroduced: number;
  requiredRecovery: number;
  targetRecovery: number;
  achievedRecovery: number;
  balance: number;
  progress: number;
  bgColor: string;
  progressColor: string;
}

interface StateCompliance {
  state: string;
  percentage: number;
  achieved: number;
  target: number;
  color: string;
}

interface MaterialDistribution {
  material: string;
  tonnes: number;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-obligations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obligations.component.html',
  styleUrl: './obligations.component.scss'
})
export class ObligationsComponent implements OnInit {
  
  // Expose Math to template
  Math = Math;
  
  statCards: StatCard[] = [
    {
      icon: 'target',
      label: 'Total Obligation',
      value: '10,635',
      subtitle: 'tonnes (FY 2025-26)',
      color: '#3b82f6'
    },
    {
      icon: 'check',
      label: 'Achieved',
      value: '10,613',
      subtitle: 'tonnes (99.8%)',
      color: '#10b981'
    },
    {
      icon: 'clock',
      label: 'Balance Pending',
      value: '277',
      subtitle: 'tonnes (2.6%)',
      color: '#f59e0b'
    },
    {
      icon: 'trending',
      label: 'Compliance Rate',
      value: '99.8%',
      subtitle: 'Target: 85%',
      color: '#8b5cf6'
    }
  ];

  materialObligations: MaterialObligation[] = [
    {
      id: '1',
      name: 'Plastic (LDPE, HDPE, PET)',
      status: 'compliant',
      statusLabel: 'Compliant',
      totalIntroduced: 6845,
      requiredRecovery: 85,
      targetRecovery: 5818,
      achievedRecovery: 5965,
      balance: 147,
      progress: 102.5,
      bgColor: '#d1fae5',
      progressColor: '#10b981'
    },
    {
      id: '2',
      name: 'Paper & Cardboard',
      status: 'pending',
      statusLabel: 'Pending',
      totalIntroduced: 4123,
      requiredRecovery: 75,
      targetRecovery: 3092,
      achievedRecovery: 2847,
      balance: 245,
      progress: 92.1,
      bgColor: '#fef3c7',
      progressColor: '#f59e0b'
    },
    {
      id: '3',
      name: 'Metal (Aluminum, Steel)',
      status: 'compliant',
      statusLabel: 'Compliant',
      totalIntroduced: 1879,
      requiredRecovery: 70,
      targetRecovery: 1315,
      achievedRecovery: 1423,
      balance: 108,
      progress: 108.2,
      bgColor: '#d1fae5',
      progressColor: '#10b981'
    },
    {
      id: '4',
      name: 'Glass',
      status: 'action-required',
      statusLabel: 'Action Required',
      totalIntroduced: 456,
      requiredRecovery: 90,
      targetRecovery: 410,
      achievedRecovery: 378,
      balance: 32,
      progress: 92.2,
      bgColor: '#fee2e2',
      progressColor: '#ef4444'
    }
  ];

  stateCompliance: StateCompliance[] = [
    { state: 'Maharashtra', percentage: 93, achieved: 2654, target: 2847, color: '#f59e0b' },
    { state: 'Karnataka', percentage: 97, achieved: 2089, target: 2156, color: '#10b981' },
    { state: 'Tamil Nadu', percentage: 90, achieved: 1734, target: 1923, color: '#f59e0b' },
    { state: 'Gujarat', percentage: 92, achieved: 1512, target: 1645, color: '#f59e0b' },
    { state: 'Delhi NCR', percentage: 90, achieved: 1289, target: 1432, color: '#f59e0b' },
    { state: 'West Bengal', percentage: 90, achieved: 1156, target: 1289, color: '#f59e0b' }
  ];

  materialDistribution: MaterialDistribution[] = [
    { material: 'Plastic', tonnes: 6845, percentage: 53, color: '#3b82f6' },
    { material: 'Paper', tonnes: 4123, percentage: 32, color: '#f59e0b' },
    { material: 'Metal', tonnes: 1879, percentage: 15, color: '#6b7280' }
  ];

  totalTonnes: number = 12847;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalTonnes = this.materialDistribution.reduce((sum, item) => sum + item.tonnes, 0);
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'compliant':
        return '✓';
      case 'pending':
        return '⏱';
      case 'action-required':
        return '⚠';
      default:
        return '○';
    }
  }

  getBalanceClass(balance: number): string {
    return balance > 0 ? 'excess' : 'pending';
  }

  getBalanceSign(balance: number): string {
    return balance > 0 ? '+' : '';
  }

  uploadRecyclerProof(): void {
    console.log('Navigate to upload recycler proof');
    this.router.navigate(['/recycler-portal']);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  // Calculate pie chart segments for CSS conic gradient
  getPieChartGradient(): string {
    let currentAngle = 0;
    const gradientStops: string[] = [];

    this.materialDistribution.forEach((item, index) => {
      const percentage = item.percentage;
      const endAngle = currentAngle + (percentage * 3.6); // Convert percentage to degrees

      if (index === 0) {
        gradientStops.push(`${item.color} 0deg ${endAngle}deg`);
      } else {
        gradientStops.push(`${item.color} ${currentAngle}deg ${endAngle}deg`);
      }

      currentAngle = endAngle;
    });

    return `conic-gradient(${gradientStops.join(', ')})`;
  }
}