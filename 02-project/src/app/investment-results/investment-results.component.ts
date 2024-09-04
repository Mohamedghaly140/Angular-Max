import { InvestmentService } from './../investment-service.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input({ required: true }) annualData: AnnualData[] = [];
  // annualData = input.required<AnnualData[]>();

  private investmentService = inject(InvestmentService);

  annualData = computed(() => this.investmentService.resultData());
}
