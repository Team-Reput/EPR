import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MeasurementType {
[x: string]: any;
  id: string;
  title: string;
  confidence: string;
  confidenceLevel: 'high' | 'medium-high' | 'medium' | 'low';
  icon: string;
  iconBg: string;
  description: string;
  exampleUsage: string;
  exampleText: string;
  validationApproach: string;
}

interface ManufacturingStage {
  id: number;
  stageNumber: number;
  title: string;
  name: string;
  icon: string;
  iconBg: string;
  wasteGenerated: number;
  disposed: number;
  gap: number;
  percentageOfTotal: number;
  classification: 'Non-Hazardous' | 'Mixed';
  isExpanded: boolean;
}

interface StageContribution {
  stage: string;
  icon: string;
  iconColor: string;
  wasteType: string;
  wasteTypeClass: string;
  dataSource: string;
  dataSourceClass: string;
  logic: string;
  logicClass: string;
  generated: number;
  generatedClass: string;
  percentOfTotal: number;
  percentClass: string;
  disposed: number;
  disposedClass: string;
  gap: number;
  gapClass: string;
  trend: string;
  trendClass: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss']
})
export class MethodologyComponent implements OnInit {
  measurementTypes: MeasurementType[] = [
    {
      id: 'captured',
      title: 'Captured',
      confidence: 'High Confidence',
      confidenceLevel: 'high',
      icon: '/logic.png',
      iconBg: '#d1fae5',
      description: 'Direct measurement from source systems (weighbridges, meters, ERP)',
      exampleUsage: 'Example Usage:',
      exampleText: 'Production waste from automated tracking systems',
      validationApproach: 'Focus on calibration & maintenance'
    },
    {
      id: 'derived',
      title: 'Derived',
      confidence: 'Medium-High Confidence',
      confidenceLevel: 'medium-high',
      icon: '/derived.png',
      iconBg: '#dbeafe',
      description: 'AI-calculated using input-output mass balance logic',
      exampleUsage: 'Example Usage:',
      exampleText: 'Chemical waste estimated from consumption vs output ratios',
      validationApproach: 'Validate assumptions periodically'
    },

    {
      id: 'Allocated',
      title: 'Allocated',
      confidence: 'Medium Confidence',
      confidenceLevel: 'medium-high',
      icon: '/allocated.png',
      iconBg: '#dbeafe',
      description: 'centralized disposal shared across multiple units',
      exampleUsage: 'Example Usage:',
      exampleText: 'Biomedical waste disposed by one behalf of entire facility',
      validationApproach: ' Ensure fair distribution logic'
    }
  ];

  manufacturingStages: ManufacturingStage[] = [
    {
      id: 1,
      stageNumber: 1,
      title: 'Stage 1',
      name: 'Fiber Stage',
      icon: 'box',
      iconBg: '#dbeafe',
      wasteGenerated: 3200,
      disposed: 3150,
      gap: 50,
      percentageOfTotal: 6,
      classification: 'Non-Hazardous',
      isExpanded: false
    },
    {
      id: 2,
      stageNumber: 2,
      title: 'Stage 2',
      name: 'Spinning',
      icon: 'refresh',
      iconBg: '#dbeafe',
      wasteGenerated: 4800,
      disposed: 4750,
      gap: 50,
      percentageOfTotal: 9,
      classification: 'Non-Hazardous',
      isExpanded: false
    },
    {
      id: 3,
      stageNumber: 3,
      title: 'Stage 3',
      name: 'Knitting / Fabric Formation',
      icon: 'layers',
      iconBg: '#dbeafe',
      wasteGenerated: 6400,
      disposed: 6200,
      gap: 200,
      percentageOfTotal: 12,
      classification: 'Non-Hazardous',
      isExpanded: false
    },
    {
      id: 4,
      stageNumber: 4,
      title: 'Stage 4',
      name: 'Dyeing & Finishing',
      icon: 'droplet',
      iconBg: '#dbeafe',
      wasteGenerated: 17050,
      disposed: 16230,
      gap: 820,
      percentageOfTotal: 32,
      classification: 'Mixed',
      isExpanded: false
    },
    {
      id: 5,
      stageNumber: 5,
      title: 'Stage 5',
      name: 'Garmenting',
      icon: 'shirt',
      iconBg: '#dbeafe',
      wasteGenerated: 21450,
      disposed: 19080,
      gap: 2370,
      percentageOfTotal: 41,
      classification: 'Mixed',
      isExpanded: false
    }
  ];

  stageContributions: StageContribution[] = [
    {
      stage: 'Fiber Stage',
      icon: 'box',
      iconColor: '#3b82f6',
      wasteType: 'Non-Hazardous',
      wasteTypeClass: 'badge-blue',
      dataSource: 'Production',
      dataSourceClass: 'badge-blue',
      logic: 'Captured',
      logicClass: 'badge-green',
      generated: 3200,
      generatedClass: 'text-default',
      percentOfTotal: 6.0,
      percentClass: 'text-default',
      disposed: 3150,
      disposedClass: 'text-default',
      gap: 50,
      gapClass: 'text-orange',
      trend: '—',
      trendClass: 'text-default'
    },
    {
      stage: 'Spinning',
      icon: 'refresh',
      iconColor: '#3b82f6',
      wasteType: 'Non-Hazardous',
      wasteTypeClass: 'badge-blue',
      dataSource: 'Production',
      dataSourceClass: 'badge-blue',
      logic: 'Captured',
      logicClass: 'badge-green',
      generated: 4800,
      generatedClass: 'text-default',
      percentOfTotal: 9.1,
      percentClass: 'text-default',
      disposed: 4750,
      disposedClass: 'text-default',
      gap: 50,
      gapClass: 'text-orange',
      trend: '—',
      trendClass: 'text-default'
    },
    {
      stage: 'Knitting / Fabric Formation',
      icon: 'layers',
      iconColor: '#3b82f6',
      wasteType: 'Non-Hazardous',
      wasteTypeClass: 'badge-blue',
      dataSource: 'Production',
      dataSourceClass: 'badge-blue',
      logic: 'Captured',
      logicClass: 'badge-green',
      generated: 6400,
      generatedClass: 'text-default',
      percentOfTotal: 12.1,
      percentClass: 'text-default',
      disposed: 6200,
      disposedClass: 'text-default',
      gap: 200,
      gapClass: 'text-orange',
      trend: '↘',
      trendClass: 'text-green'
    },
    {
      stage: 'Dyeing & Finishing',
      icon: 'droplet',
      iconColor: '#ef4444',
      wasteType: 'Mixed',
      wasteTypeClass: 'badge-red',
      dataSource: 'Production',
      dataSourceClass: 'badge-blue',
      logic: 'Captured',
      logicClass: 'badge-green',
      generated: 17050,
      generatedClass: 'text-default',
      percentOfTotal: 32.2,
      percentClass: 'text-red',
      disposed: 16230,
      disposedClass: 'text-default',
      gap: 82,
      gapClass: 'text-orange',
      trend: '↗',
      trendClass: 'text-red'
    },
    {
      stage: 'Garmenting',
      icon: 'shirt',
      iconColor: '#ef4444',
      wasteType: 'Mixed',
      wasteTypeClass: 'badge-red',
      dataSource: 'Production',
      dataSourceClass: 'badge-blue',
      logic: 'Derived',
      logicClass: 'badge-blue-light',
      generated: 21450,
      generatedClass: 'text-default',
      percentOfTotal: 40.5,
      percentClass: 'text-red',
      disposed: 19080,
      disposedClass: 'text-default',
      gap: 2370,
      gapClass: 'text-orange',
      trend: '↗',
      trendClass: 'text-red'
    }
  ];

  totalWasteGenerated = 0;
  totalWasteDisposed = 0;
  totalGap = 0;

  currentStageIndex = 0;
  maxVisibleStages = 3;

  ngOnInit(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalWasteGenerated = this.manufacturingStages.reduce((sum, stage) => sum + stage.wasteGenerated, 0);
    this.totalWasteDisposed = this.manufacturingStages.reduce((sum, stage) => sum + stage.disposed, 0);
    this.totalGap = this.manufacturingStages.reduce((sum, stage) => sum + stage.gap, 0);
  }

  toggleStage(stage: ManufacturingStage): void {
    stage.isExpanded = !stage.isExpanded;
  }

  getConfidenceBadgeClass(level: string): string {
    switch (level) {
      case 'high':
        return 'confidence-high';
      case 'medium-high':
        return 'confidence-medium-high';
      case 'medium':
        return 'confidence-medium';
      case 'low':
        return 'confidence-low';
      default:
        return '';
    }
  }

  getClassificationClass(classification: string): string {
    return classification === 'Non-Hazardous' ? 'classification-non-hazardous' : 'classification-mixed';
  }

  nextStage(): void {
    if (this.currentStageIndex < this.manufacturingStages.length - this.maxVisibleStages) {
      this.currentStageIndex++;
    }
  }

  previousStage(): void {
    if (this.currentStageIndex > 0) {
      this.currentStageIndex--;
    }
  }

  getVisibleStages(): ManufacturingStage[] {
    return this.manufacturingStages.slice(this.currentStageIndex, this.currentStageIndex + this.maxVisibleStages);
  }

  canGoPrevious(): boolean {
    return this.currentStageIndex > 0;
  }

  canGoNext(): boolean {
    return this.currentStageIndex < this.manufacturingStages.length - this.maxVisibleStages;
  }

  formatNumber(value: number): string {
    return value.toLocaleString();
  }

  getIconPath(iconName: string): string {
    const iconPaths: { [key: string]: string } = {
      'box': '/material.png',
      'refresh': '/spinning.png',
      'layers': '/knitting.png',
      'droplet': '/dyeing.png',
      'shirt': '/garmenting.png'
    };
    return iconPaths[iconName] || '';
  }

  getIconSVG(iconName: string): string {
    const icons: { [key: string]: string } = {
      'box': '<img src="/material.png" alt="Box" style="width: 24px; height: 24px;">',
      'refresh': '<img src="assets/images/spinning.png" alt="Refresh" style="width: 24px; height: 24px;">',
      'layers': '<img src="assets/images/knitting.png" alt="Layers" style="width: 24px; height: 24px;">',
      'droplet': '<img src="assets/images/dyeing.png" alt="Droplet" style="width: 24px; height: 24px;">',
      'shirt': '<img src="assets/images/garmenting.png" alt="Shirt" style="width: 10px; height: 10px;">'
    };
    return icons[iconName] || '';
  }
}