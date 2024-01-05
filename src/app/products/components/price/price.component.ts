import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    console.log('Price (Hijo) component: ngOnInit');

    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price (Hijo) component: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    this.interval$?.unsubscribe();
  }

  @Input()
  public price: number = 0;

  public interval$?: Subscription;
}
