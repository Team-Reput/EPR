import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { SidebarComponent } from "../common/sidebar/sidebar.component";

interface Section {
  id: string;
  title: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-kyc',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {
  kycForm!: FormGroup;
  isSubmitting = false;

  sections: Section[] = [
    { id: 'producer', title: 'Producer Information', isExpanded: true },
    { id: 'address', title: 'Registered Address', isExpanded: true },
    { id: 'signatory', title: 'Authorized Signatory', isExpanded: true }
  ];

  constructor(private fb: FormBuilder,public router: Router){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.kycForm = this.fb.group({
      // Producer Information
      producerName: ['Himalaya Wellness Company', Validators.required],
      gstNumber: ['29AACC1200D1ZM', Validators.required],
      cpcbRegistration: ['CPCB/PWM/2024/12847', Validators.required],
      pan: ['AAACC1200D', Validators.required],

      // Registered Address
      completeAddress: ['Makali, Bengaluru - 562162, Karnataka, India', Validators.required],
      city: ['Bengaluru', Validators.required],
      state: ['Karnataka', Validators.required],
      pinCode: ['562162', [Validators.required, Validators.pattern(/^\d{6}$/)]],

      // Authorized Signatory
      fullName: ['Rajesh Kumar', Validators.required],
      designation: ['Chief Sustainability Officer', Validators.required],
      email: ['rajesh.kumar@himalaya.com', [Validators.required, Validators.email]],
      phone: ['9876543210', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],

      // Auto-filled data
      productCategories: ['Personal Care, Healthcare, Wellness'],
      statesOfOperation: ['28 States, 8 UTs'],

      // Confirmation checkbox
      confirmAccuracy: [false, Validators.requiredTrue]
    });
  }

  toggleSection(sectionId: string): void {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.isExpanded = !section.isExpanded;
    }
  }

  isSectionExpanded(sectionId: string): boolean {
    const section = this.sections.find(s => s.id === sectionId);
    return section ? section.isExpanded : false;
  }

  getSectionNumber(sectionId: string): number {
    return this.sections.findIndex(s => s.id === sectionId) + 1;
  }

  onSubmit(): void {
    if (this.kycForm.valid) {
      this.isSubmitting = true;
      console.log('Form submitted:', this.kycForm.value);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.router.navigate(['/auto-fetch']);
      }, 1500);
    } else {
      this.markFormGroupTouched(this.kycForm);
      //alert('Please fill all required fields correctly.');
    }
  }

  goBack(): void {
    console.log('Navigate back to dashboard');
    // Implement navigation logic
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper method to check if field has error
  hasError(fieldName: string, errorType?: string): boolean {
    const field = this.kycForm.get(fieldName);
    if (!field) return false;
    
    if (errorType) {
      return field.hasError(errorType) && (field.dirty || field.touched);
    }
    return field.invalid && (field.dirty || field.touched);
  }
}
