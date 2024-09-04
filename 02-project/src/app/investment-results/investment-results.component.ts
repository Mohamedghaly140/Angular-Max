import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

import type { AnnualData } from '../annual-data.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input({ required: true }) annualData: AnnualData[] = [];
  annualData = input.required<AnnualData[]>();
}
