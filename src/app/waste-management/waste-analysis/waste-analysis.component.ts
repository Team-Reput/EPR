

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WasteCategoryData {
  id: string;
  name: string;
  status: 'OK' | 'WARNING' | 'CRITICAL';
  generated: number;
  disposed: number;
  recycled: number;
  disposalRate: number;
  color: string;
  borderColor: string;
}

interface ChartData {
  label: string;
  generated: number;
  disposed: number;
  recycled: number;
}

interface ManufacturingProcess {
  id: string;
  name: string;
}

interface WasteCategory {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-waste-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './waste-analysis.component.html',
  styleUrls: ['./waste-analysis.component.scss']
})
export class WasteAnalysisComponent implements OnInit {
  selectedSite = 'All Sites';
  selectedMonth = 'Current Month';
  selectedProcess: string | null = null;
  selectedCategory: string | null = null;
  activeTab: 'category' | 'process' | 'subtype' = 'category';
    hoveredIndex: number | null = null;
  
  isSidebarCollapsed = false;

  manufacturingProcesses: ManufacturingProcess[] = [
    { id: 'fiber', name: 'Fiber Stage' },
    { id: 'spinning', name: 'Spinning' },
    { id: 'knitting', name: 'Knitting / Fabric Formation' },
    { id: 'dyeing', name: 'Dyeing & Finishing' },
    { id: 'garmenting', name: 'Garmenting' }
  ];

  wasteCategories: WasteCategory[] = [
    { id: 'non-hazardous', name: 'Non-Hazardous', description: 'Recyclable & landfill' },
    { id: 'hazardous', name: 'Hazardous', description: '90-day storage limit' },
    { id: 'biomedical', name: 'Biomedical', description: '24-hour disposal rule' }
  ];

  
  wasteCategoryData: WasteCategoryData[] = [
    {
      id: 'non-hazardous',
      name: 'Non-Hazardous',
      status: 'OK',
      generated: 31200,
      disposed: 29800,
      recycled: 12500,
      disposalRate: 95.5,
      color: '#3b82f6',
      borderColor: '#2563eb'
    },
    {
      id: 'hazardous',
      name: 'Hazardous',
      status: 'WARNING',
      generated: 12400,
      disposed: 11850,
      recycled: 2100,
      disposalRate: 95.6,
      color: '#ef4444',
      borderColor: '#dc2626'
    },
    {
      id: 'biomedical',
      name: 'Biomedical',
      status: 'CRITICAL',
      generated: 4650,
      disposed: 3530,
      recycled: 0,
      disposalRate: 75.9,
      color: '#9333ea',
      borderColor: '#7e22ce'
    }
  ];
    onMouseOver(index: number): void {
    this.hoveredIndex = index;  // Set hovered index
  }

  onMouseLeave(): void {
    this.hoveredIndex = null;  // Reset on mouse leave
  }

  chartData: ChartData[] = [];
  totalWaste = 0;

  ngOnInit(): void {
    this.updateChartData();
    this.calculateTotalWaste();
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  selectProcess(processId: string): void {
    this.selectedProcess = this.selectedProcess === processId ? null : processId;
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
  }

  clearFilters(): void {
    this.selectedProcess = null;
    this.selectedCategory = null;
  }

  hasActiveFilters(): boolean {
    return this.selectedProcess !== null || this.selectedCategory !== null;
  }

  getSelectedProcessName(): string {
    if (!this.selectedProcess) return 'All Processes';
    return this.manufacturingProcesses.find(p => p.id === this.selectedProcess)?.name || 'All Processes';
  }

  getSelectedCategoryName(): string {
    if (!this.selectedCategory) return 'All Categories';
    return this.wasteCategories.find(c => c.id === this.selectedCategory)?.name || 'All Categories';
  }

  setActiveTab(tab: 'category' | 'process' | 'subtype'): void {
    this.activeTab = tab;
  }

  updateChartData(): void {
    this.chartData = this.wasteCategoryData.map(category => ({
      label: category.name,
      generated: category.generated,
      disposed: category.disposed,
      recycled: category.recycled
    }));
  }

  calculateTotalWaste(): void {
    this.totalWaste = this.wasteCategoryData.reduce((sum, cat) => sum + cat.generated, 0);
  }

  getCategoryPercentage(generated: number): number {
    return (generated / this.totalWaste) * 100;
  }

  getBarHeight(value: number): number {
    const maxValue = Math.max(...this.wasteCategoryData.map(c => c.generated));
    return (value / maxValue) * 100;
  }

  getPieChartSegments(): string {
    let cumulativePercent = 0;
    const segments: string[] = [];

    this.wasteCategoryData.forEach((category, index) => {
      const percent = this.getCategoryPercentage(category.generated);
      const startAngle = (cumulativePercent / 100) * 360;
      const endAngle = ((cumulativePercent + percent) / 100) * 360;
      
      cumulativePercent += percent;
    });

    return this.createPieChartPath();
  }

  private createPieChartPath(): string {
    // This will be handled in the template with proper SVG calculations
    return '';
  }
}
