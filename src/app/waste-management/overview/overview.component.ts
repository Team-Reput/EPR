import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WasteSubType {
  rank: number;
  subType: string;
  process: string;
  category: 'Non-Hazardous' | 'Hazardous' | 'Biomedical';
  generated: number;
  disposed: number;
  gap: number;
  trend: 'Up' | 'Down' | 'Stable';
}

interface CriticalArea {
  id: string;
  location: string;
  wasteType: string;
  category: 'Biomedical' | 'Hazardous';
  status: 'CRITICAL' | 'AT RISK';
  totalGenerated: number;
  alert: string;
  subTypes: { name: string; value: string }[];
  alertDetail: string;
  gap: number;
  gapPercentage: number;
  badge?: string;
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
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  selectedSite = 'All Sites';
  selectedMonth = 'Current Month';
  selectedProcess: string | null = null;
  selectedCategory: string | null = null;
  
  isSidebarCollapsed = false;
  expandedSections = {
    manufacturingFlow: false,
    traceabilityFlow: false
  };

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

  criticalAreas: CriticalArea[] = [
    {
      id: '1',
      location: 'MEDICAL ROOMS (ALL UNITS)',
      wasteType: 'Biomedical Waste',
      category: 'Biomedical',
      status: 'CRITICAL',
      totalGenerated: 4650,
      alert: '24-hour disposal violation detected',
      subTypes: [
        { name: 'Color-coded bag type 1', value: 'Auto-calculated' },
        { name: 'Color-coded bag type 2', value: 'Auto-calculated' },
        { name: 'Color-coded bag type 3', value: 'Auto-calculated' }
      ],
      alertDetail: '24-hour disposal violation detected - Calculated from live data',
      gap: 1120,
      gapPercentage: 24.1
    },
    {
      id: '2',
      location: 'DYEING & FINISHING',
      wasteType: 'Hazardous Waste',
      category: 'Hazardous',
      status: 'AT RISK',
      totalGenerated: 11850,
      alert: '90-day storage limit approaching',
      subTypes: [
        { name: 'Hazardous sub-type 1', value: 'Auto-calculated' },
        { name: 'Hazardous sub-type 2', value: 'Auto-calculated' },
        { name: 'Hazardous sub-type 3', value: 'Auto-calculated' }
      ],
      alertDetail: '90-day storage limit approaching - Calculated from live data',
      gap: 550,
      gapPercentage: 4.6
    },
    {
      id: '3',
      location: 'Garmenting',
      wasteType: 'Non-Hazardous Waste',
      category: 'Hazardous',
      status: 'AT RISK',
      totalGenerated: 4200,
      alert: '+18.1% MoM increase',
      badge: '+18%',
      subTypes: [
        { name: 'Waste contributor 1', value: 'Auto-calculated' },
        { name: 'Waste contributor 2', value: 'Auto-calculated' },
        { name: 'Waste contributor 3', value: 'Auto-calculated' }
      ],
      alertDetail: '',
      gap: 100,
      gapPercentage: 2.4
    }
  ];

  wasteSubTypes: WasteSubType[] = [
    {
      rank: 1,
      subType: 'Chindi - Marker loss',
      process: 'Garmenting',
      category: 'Non-Hazardous',
      generated: 8500,
      disposed: 7800,
      gap: 700,
      trend: 'Up'
    },
    {
      rank: 2,
      subType: 'ETP sludge',
      process: 'Dyeing & Finishing',
      category: 'Hazardous',
      generated: 6800,
      disposed: 6350,
      gap: 450,
      trend: 'Up'
    },
    {
      rank: 3,
      subType: 'Chindi - Panel cut-outs',
      process: 'Garmenting',
      category: 'Non-Hazardous',
      generated: 5200,
      disposed: 4850,
      gap: 350,
      trend: 'Up'
    },
    {
      rank: 4,
      subType: 'Spent dye bath residues',
      process: 'Dyeing & Finishing',
      category: 'Hazardous',
      generated: 4200,
      disposed: 4100,
      gap: 100,
      trend: 'Up'
    },
    {
      rank: 5,
      subType: 'Chindi - End-bit / roll ends',
      process: 'Garmenting',
      category: 'Non-Hazardous',
      generated: 3100,
      disposed: 2950,
      gap: 150,
      trend: 'Stable'
    }
  ];

  filteredCriticalAreas: CriticalArea[] = [];
  filteredWasteSubTypes: WasteSubType[] = [];

  ngOnInit(): void {
    this.applyFilters();
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  selectProcess(processId: string): void {
    this.selectedProcess = this.selectedProcess === processId ? null : processId;
    this.applyFilters();
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
    this.applyFilters();
  }

  clearFilters(): void {
    this.selectedProcess = null;
    this.selectedCategory = null;
    this.applyFilters();
  }

  applyFilters(): void {
    // Filter critical areas
    this.filteredCriticalAreas = this.criticalAreas.filter(area => {
      if (this.selectedCategory) {
        const categoryMatch = this.selectedCategory === 'biomedical' ? 
          area.category === 'Biomedical' : 
          this.selectedCategory === 'hazardous' ? 
            area.category === 'Hazardous' : true;
        if (!categoryMatch) return false;
      }
      return true;
    });

    // Filter waste sub-types
    this.filteredWasteSubTypes = this.wasteSubTypes.filter(waste => {
      let matches = true;
      
      if (this.selectedProcess) {
        const processName = this.manufacturingProcesses.find(p => p.id === this.selectedProcess)?.name;
        matches = matches && waste.process === processName;
      }
      
      if (this.selectedCategory) {
        const categoryName = this.selectedCategory === 'non-hazardous' ? 'Non-Hazardous' :
                            this.selectedCategory === 'hazardous' ? 'Hazardous' : 'Biomedical';
        matches = matches && waste.category === categoryName;
      }
      
      return matches;
    });
  }

  toggleSection(section: 'manufacturingFlow' | 'traceabilityFlow'): void {
    this.expandedSections[section] = !this.expandedSections[section];
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
}``