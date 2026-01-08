import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Submission {
  id: string;
  status: 'verified' | 'pending';
  company: string;
  date: string;
  location: string;
  quantity: number;
  material: string;
  certificateUploaded: boolean;
  blockchainHash: string;
}

@Component({
  selector: 'app-recycler-portal',
  templateUrl: './recycler-portal.component.html',
  styleUrls: ['./recycler-portal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RecyclerPortalComponent implements OnInit {
  [x: string]: any;
  submissions: Submission[] = [
    {
      id: 'RC-2025-001',
      status: 'verified',
      company: 'Green Earth Recyclers Pvt Ltd',
      date: '2025-11-27',
      location: 'Mumbai, Maharashtra',
      quantity: 145.5,
      material: 'Plastic (HDPE)',
      certificateUploaded: true,
      blockchainHash: '0x7a9f3bc8e2d1a5c4...'
    },
    {
      id: 'RC-2025-002',
      status: 'verified',
      company: 'EcoWaste Solutions',
      date: '2025-11-26',
      location: 'Bengaluru, Karnataka',
      quantity: 234.8,
      material: 'Paper & Cardboard',
      certificateUploaded: true,
      blockchainHash: '0x3d5e7f9a1b2c4d6e...'
    },
    {
      id: 'RC-2025-003',
      status: 'pending',
      company: 'Metal Masters Recycling',
      date: '2025-11-25',
      location: 'Chennai, Tamil Nadu',
      quantity: 89.3,
      material: 'Metal (Aluminum)',
      certificateUploaded: true,
      blockchainHash: ''
    },
    {
      id: 'RC-2025-004',
      status: 'verified',
      company: 'Green Earth Recyclers Pvt Ltd',
      date: '2025-11-24',
      location: 'Pune, Maharashtra',
      quantity: 198.7,
      material: 'Plastic (PET)',
      certificateUploaded: true,
      blockchainHash: '0x8b1c3e5f7a9d2b4c...'
    }
  ];

  stats = {
    verifiedProofs: 847,
    totalRecycled: 10613,
    activeRecyclers: 34
  };

  validationSteps = [
    {
      title: 'Certificate Validation',
      description: 'Format, authenticity, signature check',
      icon: 'check-circle'
    },
    {
      title: 'Duplicate Check',
      description: 'Cross-reference with blockchain ledger',
      icon: 'check-circle'
    },
    {
      title: 'Quantity Matching',
      description: 'Verify against EPR obligation',
      icon: 'check-circle'
    },
    {
      title: 'Blockchain Lock',
      description: 'Immutable proof storage',
      icon: 'check-circle'
    }
  ];
  constructor(public router: Router){}
  
  ngOnInit(): void {
    // Component initialization
  }

  uploadNewProof(): void {
    console.log('Upload new proof clicked');
    // Implement upload functionality
  }

  viewBlockchainLedger(): void {
    console.log('View blockchain ledger clicked');
    this.router.navigate(['blockchain']);
  }

  getStatusClass(status: string): string {
    return status === 'verified' ? 'status-verified' : 'status-pending';
  }

  getStatusIcon(status: string): string {
    return status === 'verified' ? '✓' : '⏳';
  }
}