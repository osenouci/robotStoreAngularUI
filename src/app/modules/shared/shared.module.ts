import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import angular material components
import {
  
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatInputModule ,
  MatSelectModule,
  MatOptionModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatMenuModule,
  MatSidenavModule,
  MatGridListModule

} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular material
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,  
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule

  ],
  declarations: [],
  exports: [
    
        // Export modules
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    
        // Export material design modules
        MatButtonModule, 
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        MatMenuModule,
        MatSidenavModule,
        MatGridListModule
      ]  
})
export class SharedModule { }
