import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarComponent } from "../common/sidebar/sidebar.component";

interface DataSource {
  id: string;
  name: string;
  status: string;
  lastSync: string;
  isConnected: boolean;
}

interface MaterialData {
  name: string;
  value: number;
  color: string;
}

interface TopSku {
  rank: number;
  product: string;
  volume: number;
  unit: string;
}

interface StateData {
  state: string;
  tonnage: number;
}

interface TrendData {
  period: string;
  tonnes: number;
  change: string;
}

@Component({
  selector: 'app-auto-data-fetch',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './auto-data-fecth.component.html',
  styleUrl: './auto-data-fecth.component.scss'
})
export class AutoDataFetchComponent implements OnInit {
  isUploaded = false;
  
  stats = {
    accuracy: {
      value: '100%',
      label: 'Automated',
      sublabel: 'No manual entry'
    },
    realTime: {
      value: 'Real-time',
      label: 'Live Sync',
      sublabel: '24/7 updates'
    },
    errors: {
      value: 'Zero',
      label: 'Data Conflicts',
      sublabel: 'Fully validated'
    }
  };

  dataSources: DataSource[] = [
    {
      id: '1',
      name: '360° Sales/ Product Traceability',
      status: 'Active',
      lastSync: 'Last sync: 2 min ago',
      isConnected: true
    },
    {
      id: '2',
      name: 'Packaging BOM Engine',
      status: 'Active',
      lastSync: 'Last sync: 5 min ago',
      isConnected: true
    },
    {
      id: '3',
      name: 'ERP / Sales Data',
      status: 'Active',
      lastSync: 'Last sync: 1 hour ago',
      isConnected: true
    },
    {
      id: '4',
      name: 'Warehouse & Shipment Movement',
      status: 'Active',
      lastSync: 'Last sync: 30 min ago',
      isConnected: true
    },
    {
      id: '5',
      name: 'Logistics Engine',
      status: 'Active',
      lastSync: 'Last sync: 15 min ago',
      isConnected: true
    },
    {
      id: '6',
      name: 'SKU Master',
      status: 'Active',
      lastSync: 'Last sync: 10 min ago',
      isConnected: true
    }
  ];

  materialData: MaterialData[] = [
    { name: 'Plastic (LDPE, HDPE, PET)', value: 6285, color: '#3b82f6' },
    { name: 'Paper/ Cardboard', value: 4123, color: '#f59e0b' },
    { name: 'Metal (Aluminum, Steel)', value: 1879, color: '#6b7280' }
  ];

  topSkus: TopSku[] = [
    { rank: 1, product: 'Face Cream 50ml', volume: 1289, unit: 'tonnes' },
    { rank: 2, product: 'Hair Oil 200ml', volume: 1432, unit: 'tonnes' },
    { rank: 3, product: 'Soap Bar 125g', volume: 1645, unit: 'tonnes' },
    { rank: 4, product: 'Shampoo 400ml', volume: 1823, unit: 'tonnes' },
    { rank: 5, product: 'Face Wash 150ml', volume: 2156, unit: 'tonnes' },
    { rank: 6, product: 'Body Lotion 200ml', volume: 2847, unit: 'tonnes' }
  ];

  stateData: StateData[] = [
    { state: 'Maharashtra', tonnage: 3214 },
    { state: 'Karnataka', tonnage: 2891 },
    { state: 'Tamil Nadu', tonnage: 2654 },
    { state: 'Gujarat', tonnage: 2341 },
    { state: 'Delhi', tonnage: 1987 }
  ];

  trendData: TrendData[] = [
    { period: 'FY 2023-24', tonnes: 16243, change: '+8%' },
    { period: 'FY 2024-25', tonnes: 17471, change: '+7.6%' },
    { period: 'FY 2025-26', tonnes: 18521, change: '+6%' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getMaterialPercentage(value: number): number {
    const total = this.materialData.reduce((sum, item) => sum + item.value, 0);
    return (value / total) * 100;
  }

  getMaxSkuValue(): number {
    return Math.max(...this.topSkus.map(sku => sku.volume));
  }

  getSkuPercentage(value: number): number {
    return (value / this.getMaxSkuValue()) * 100;
  }

  syncDataSource(sourceId: string): void {
    const source = this.dataSources.find(s => s.id === sourceId);
    if (source) {
      source.lastSync = 'Syncing...';
      setTimeout(() => {
        source.lastSync = 'Last sync: Just now';
      }, 1500);
    }
  }

  syncAll(): void {
    console.log('Syncing all data sources...');
    this.dataSources.forEach(source => {
      source.lastSync = 'Syncing...';
    });
    
    setTimeout(() => {
      this.dataSources.forEach(source => {
        source.lastSync = 'Last sync: Just now';
      });
    }, 2000);
  }

  viewMigrationLog(): void {
    this.router.navigate(['/obligations']);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}