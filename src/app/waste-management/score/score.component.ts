import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScoreCard {
  label: string;
  value: number | string;
  subValue?: string;
  status?: string;
  change?: number;
  previousValue?: number;
  icon?: string;
  color?: string;
}

interface ChartDataPoint {
  month: string;
  score: number;
}

interface Dimension {
  name: string;
  score: number;
  weight: number;
  status: 'good' | 'acceptable' | 'needs-improvement';
  details: string;
}

interface ReductionScenario {
  label: string;
  percentage: number;
  weight: number;
  savings: string;
  backgroundColor: string;
}

interface RoadmapItem {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  // Score Cards Data
  currentScore = 68;
  maxScore = 100;
  scoreStatus = 'Acceptable';
  scoreChange = 3;
  previousScore = 65;
  targetScore = 75;
  scoreGap = 7;
  industryPercentile = '72nd';
  industrySector = 'Textile sector';

  // Chart Data
  chartData: ChartDataPoint[] = [
    { month: 'Jul', score: 62 },
    { month: 'Aug', score: 63 },
    { month: 'Sep', score: 64 },
    { month: 'Oct', score: 65 },
    { month: 'Nov', score: 67 },
    { month: 'Dec', score: 68 }
  ];

  hoveredDataPoint: ChartDataPoint | null = null;
  hoveredPointIndex: number = -1;

  // Dimensions
  dimensions: Dimension[] = [
    {
      name: 'Segregation & Classification',
      score: 82,
      weight: 20,
      status: 'good',
      details: 'Strong performance in waste categorization and storage practices'
    },
    {
      name: 'Tracking & Documentation',
      score: 71,
      weight: 25,
      status: 'acceptable',
      details: 'Good manifest tracking, minor gaps in real-time updates'
    },
    {
      name: 'Compliance & Timeliness',
      score: 58,
      weight: 25,
      status: 'needs-improvement',
      details: 'Biomedical waste disposal delays, ETP sludge accumulation'
    },
    {
      name: 'Waste Reduction',
      score: 65,
      weight: 20,
      status: 'acceptable',
      details: 'Moderate reduction initiatives, opportunities in marker optimization'
    },
    {
      name: 'Recycling & Recovery',
      score: 74,
      weight: 10,
      status: 'acceptable',
      details: 'Good comber noil recycling, potential to improve chindi recovery'
    }
  ];

  isDimensionsExpanded = false;

  // Reduction Scenarios
  currentWaste = 48450;
  reductionScenarios: ReductionScenario[] = [
    {
      label: '10% Reduction',
      percentage: 10,
      weight: 43605,
      savings: '₹243K',
      backgroundColor: '#eff6ff'
    },
    {
      label: '15% Reduction',
      percentage: 15,
      weight: 41183,
      savings: '₹364K',
      backgroundColor: '#f0fdf4'
    }
  ];

  // Roadmap
  roadmapItems: RoadmapItem[] = [
    {
      title: 'Quick Wins (+3-5 points)',
      items: [
        'Daily biomedical tracking automation',
        'Weekly gap reconciliation SOP',
        'Chindi bulk pickup scheduling'
      ]
    },
    {
      title: 'Strategic Initiatives (+5-8 points)',
      items: [
        'Marker efficiency improvement program',
        'Dye recipe quality optimization',
        'Cross-process best practice rollout'
      ]
    }
  ];

  // Chart settings
  chartWidth = 500;
  chartHeight = 200;
  chartPadding = { top: 20, right: 20, bottom: 40, left: 50 };
  
  improvementTrend = '+6 points over 6 months (avg +1 point/month)';

  ngOnInit(): void {
    this.calculateChartDimensions();
  }

  calculateChartDimensions(): void {
    // These will be used for SVG chart rendering
  }

  toggleDimensions(): void {
    this.isDimensionsExpanded = !this.isDimensionsExpanded;
  }

  getScoreColor(score: number): string {
    if (score >= 75) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  getDimensionColor(status: string): string {
    switch (status) {
      case 'good':
        return '#10b981';
      case 'acceptable':
        return '#f59e0b';
      case 'needs-improvement':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  }

  getChartPoints(): string {
    const xScale = (this.chartWidth - this.chartPadding.left - this.chartPadding.right) / (this.chartData.length - 1);
    const yScale = (this.chartHeight - this.chartPadding.top - this.chartPadding.bottom) / 30; // Range from 50 to 80
    
    return this.chartData.map((point, index) => {
      const x = this.chartPadding.left + (index * xScale);
      const y = this.chartHeight - this.chartPadding.bottom - ((point.score - 50) * yScale);
      return `${x},${y}`;
    }).join(' ');
  }

  getChartPath(): string {
    const points = this.getChartPoints();
    if (!points) return '';
    
    const pointsArray = points.split(' ');
    let path = `M ${pointsArray[0]}`;
    
    for (let i = 1; i < pointsArray.length; i++) {
      path += ` L ${pointsArray[i]}`;
    }
    
    return path;
  }

  getPointPosition(index: number): { x: number; y: number } {
    const xScale = (this.chartWidth - this.chartPadding.left - this.chartPadding.right) / (this.chartData.length - 1);
    const yScale = (this.chartHeight - this.chartPadding.top - this.chartPadding.bottom) / 30;
    
    const x = this.chartPadding.left + (index * xScale);
    const y = this.chartHeight - this.chartPadding.bottom - ((this.chartData[index].score - 50) * yScale);
    
    return { x, y };
  }

  onChartPointHover(index: number): void {
    this.hoveredDataPoint = this.chartData[index];
    this.hoveredPointIndex = index;
  }

  onChartPointLeave(): void {
    this.hoveredDataPoint = null;
    this.hoveredPointIndex = -1;
  }

  formatNumber(value: number): string {
    return value.toLocaleString();
  }
}
