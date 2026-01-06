import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface BlockchainTransaction {
  transactionId: string;
  dateTime: string;
  material: string;
  quantity: number;
  recycler: {
    name: string;
    code: string;
  };
  status: 'verified' | 'pending' | 'rejected';
  blockchainHash: string;
}

interface LedgerStats {
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
}

@Component({
  selector: 'app-blockchain',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  searchQuery = '';
  showFilters = false;
  
  // Ledger information section collapse state
  showLedgerInfo = true;

  transactions: BlockchainTransaction[] = [
    {
      transactionId: 'TX-2025-1147',
      dateTime: '2025-11-27 14:23:45',
      material: 'Plastic (HDPE)',
      quantity: 145.5,
      recycler: {
        name: 'Green Earth Recyclers Pvt Ltd',
        code: 'REC-MH-001'
      },
      status: 'verified',
      blockchainHash: '0x7a9f3bc8e2d1a5c4...'
    },
    {
      transactionId: 'TX-2025-1146',
      dateTime: '2025-11-26 11:15:32',
      material: 'Paper & Cardboard',
      quantity: 234.8,
      recycler: {
        name: 'EcoWaste Solutions',
        code: 'REC-KA-002'
      },
      status: 'verified',
      blockchainHash: '0x3d5e7f9a1b2c4d6e...'
    },
    {
      transactionId: 'TX-2025-1145',
      dateTime: '2025-11-25 16:45:12',
      material: 'Metal (Aluminum)',
      quantity: 89.3,
      recycler: {
        name: 'Metal Masters Recycling',
        code: 'REC-TN-003'
      },
      status: 'pending',
      blockchainHash: 'pending...'
    },
    {
      transactionId: 'TX-2025-1144',
      dateTime: '2025-11-24 09:32:18',
      material: 'Plastic (PET)',
      quantity: 198.7,
      recycler: {
        name: 'Green Earth Recyclers Pvt Ltd',
        code: 'REC-MH-001'
      },
      status: 'verified',
      blockchainHash: '0x8b1c3e5f7a9d2b4c...'
    },
    {
      transactionId: 'TX-2025-1143',
      dateTime: '2025-11-23 13:58:42',
      material: 'Plastic (LDPE)',
      quantity: 176.4,
      recycler: {
        name: 'RecyclePro Industries',
        code: 'REC-GJ-004'
      },
      status: 'verified',
      blockchainHash: '0x2a4c6e8f0a1c3e5f...'
    },
    {
      transactionId: 'TX-2025-1142',
      dateTime: '2025-11-22 10:22:15',
      material: 'Paper & Cardboard',
      quantity: 312.6,
      recycler: {
        name: 'EcoWaste Solutions',
        code: 'REC-KA-002'
      },
      status: 'rejected',
      blockchainHash: 'Pending'
    }
  ];

  filteredTransactions: BlockchainTransaction[] = [];

  ledgerStats: LedgerStats[] = [
    {
      title: 'Total Transactions',
      value: '1,147',
      subtitle: 'This FY',
      color: 'gray'
    },
    {
      title: 'Verified on Chain',
      value: '1,142',
      subtitle: '99.6%',
      color: 'green'
    },
    {
      title: 'Duplicates Prevented',
      value: '5',
      subtitle: 'Automatic detection',
      color: 'purple'
    },
    {
      title: 'Total Value Locked',
      value: '10,613',
      subtitle: 'tonnes on blockchain',
      color: 'blue'
    }
  ];
  
  ngOnInit(): void {
    this.filteredTransactions = [...this.transactions];
  }
  constructor(public router: Router){}
  toggleLedgerInfo(): void {
    this.showLedgerInfo = !this.showLedgerInfo;
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.filteredTransactions = [...this.transactions];
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredTransactions = this.transactions.filter(transaction => 
      transaction.transactionId.toLowerCase().includes(query) ||
      transaction.material.toLowerCase().includes(query) ||
      transaction.recycler.name.toLowerCase().includes(query) ||
      transaction.recycler.code.toLowerCase().includes(query)
    );
  }

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'verified': 'status-verified',
      'pending': 'status-pending',
      'rejected': 'status-rejected'
    };
    return statusClasses[status] || '';
  }

  getStatusIcon(status: string): string {
    const statusIcons: { [key: string]: string } = {
      'verified': '✓',
      'pending': '⏳',
      'rejected': '✕'
    };
    return statusIcons[status] || '';
  }

  viewTransaction(transaction: BlockchainTransaction): void {
    console.log('View transaction:', transaction);
    // Implement view transaction logic
  }

  generateReports(): void {
    console.log('Generate reports clicked');
    this.router.navigate(['/reports']);
  }

  goBack(): void {
    console.log('Go back clicked');
    // Implement navigation back logic
  }

  formatDateTime(dateTime: string): { date: string; time: string } {
    const [date, time] = dateTime.split(' ');
    return { date, time };
  }
}