import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromCart from './store/reducers/cart.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CartEffects} from './store/effects/cart.effects';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [ShoppingCartComponent],
  exports: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
    TableModule,
    FormsModule,
    TranslateModule
  ]
})
export class CartModule {
}
