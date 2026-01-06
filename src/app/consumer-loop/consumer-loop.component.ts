import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MetricCard {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  trend: 'up' | 'down';
}

interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  isImage: boolean; // Added flag to distinguish between icon and image
}

interface CollectionPoint {
  city: string;
  points: number;
  collections: number;
  status: 'Active' | 'Inactive';
  progress: number;
}

interface ImpactMetric {
  title: string;
  value: string;
  subtitle: string;
  description: string;
  color: string;
}

interface RewardTier {
  name: string;
  range: string;
  points: number;
}

interface BottomMetric {
  icon: string;
  title: string;
  value: string;
  change: string;
  color: string;
}

@Component({
  selector: 'app-consumer-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consumer-loop.component.html',
  styleUrls: ['./consumer-loop.component.scss']
})
export class ConsumerLoopComponent implements OnInit {
  metrics: MetricCard[] = [
    { title: 'Total Returns', value: '1.2M', subtitle: 'products', change: '+24%', trend: 'up' },
    { title: 'Active Users', value: '456K', subtitle: 'consumers', change: '+18%', trend: 'up' },
    { title: 'Recycling Rate', value: '68%', subtitle: 'of returns', change: '+1.7%', trend: 'up' },
    { title: 'CO₂ Saved', value: '2,847', subtitle: 'tonnes', change: '+3.5%', trend: 'up' }
  ];

  journeySteps: JourneyStep[] = [
    { step: 1, title: 'Consumer Scans QR', description: 'Start journey', icon: 'qr-scan.png', color: '#E3F2FD', isImage: true },
    { step: 2, title: 'View Disposal Info', description: 'Product details', icon: 'disposal.png', color: '#E8F5E9', isImage: true },
    { step: 3, title: 'Return Product', description: 'Drop-off location', icon: 'return product.png', color: '#F3E5F5', isImage: true },
    { step: 4, title: 'Earn Rewards', description: 'Points credited', icon: 'reward.png', color: '#FFF8E1', isImage: true },
    { step: 5, title: 'EPR Recovery', description: 'Complete cycle', icon: 'recovery.png', color: '#E0F2F1', isImage: true }
  ];

  collectionPoints: CollectionPoint[] = [
    { city: 'Mumbai', points: 45, collections: 12847, status: 'Active', progress: 85 },
    { city: 'Bengaluru', points: 38, collections: 16234, status: 'Active', progress: 92 },
    { city: 'Delhi NCR', points: 52, collections: 15653, status: 'Active', progress: 78 },
    { city: 'Chennai', points: 31, collections: 8456, status: 'Active', progress: 65 },
    { city: 'Pune', points: 24, collections: 6789, status: 'Active', progress: 70 },
    { city: 'Hyderabad', points: 28, collections: 7234, status: 'Active', progress: 68 }
  ];

  impactMetrics: ImpactMetric[] = [
    { title: 'Returns to EPR Recovery', value: '847', subtitle: 'tonnes this FY', description: 'Directly counted toward EPR obligations', color: '#E0F2F1' },
    { title: 'Fibre-to-Fibre Recycling', value: '62%', subtitle: 'of plastic returns', description: 'Closed-loop material recovery', color: '#E3F2FD' },
    { title: 'Circularity Credits Earned', value: '12,847', subtitle: 'credits issued', description: 'Tradeable circular economy certificates', color: '#F3E5F5' }
  ];

  rewardTiers: RewardTier[] = [
    { name: 'Small Product', range: '(0-50ml)', points: 25 },
    { name: 'Medium Product', range: '(51-200ml)', points: 50 },
    { name: 'Large Product', range: '(200ml+)', points: 100 }
  ];

  redemptionOptions = [
    { points: 500, reward: '₹50 Discount', description: 'On next purchase' },
    { points: 1000, reward: 'Tree Plantation', description: 'In your name' },
    { points: 2000, reward: 'Premium Gift', description: 'Sustainable products' }
  ];

  bottomMetrics: BottomMetric[] = [
    { icon: 'people.png', title: 'Registered Users', value: '456,234', change: '+19% this month', color: '#2196F3' },
    { icon: 'qr-scan.png', title: 'QR Scans', value: '2.4M', change: 'this quarter', color: '#9C27B0' },
    { icon: 'recovery.png', title: 'Products Returned', value: '1.2M', change: '+24% vs last FY', color: '#4CAF50' },
    { icon: 'reward.png', title: 'Rewards Issued', value: '₹2.4Cr', change: 'Brand value created', color: '#FF9800' }
  ];

  constructor(public router: Router){}

  ngOnInit(): void {
    // Component initialization logic
  }

  getIconClass(icon: string): string {
    return `material-icons ${icon}`;
  }

  getProgressColor(progress: number): string {
    if (progress >= 80) return '#4CAF50';
    if (progress >= 60) return '#FF9800';
    return '#F44336';
  }

  goTomanagement(){
    this.router.navigate(['management-view']);
  }
}