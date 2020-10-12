import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectNumberOfItemInCart} from '../../cart/store/selectors/cart.selectors';
import {Observable} from 'rxjs';
import {selectNumberOfProductInWishlist} from '../../wishlist/store/selectors/wish.selectors';

@Component({
  selector: 'pps-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  numberOfItemsInCart: Observable<number>;
  numberOfItemsInWishlist: Observable<number>;

  constructor(private store: Store) {
    this.numberOfItemsInCart = this.store.select(selectNumberOfItemInCart);
    this.numberOfItemsInWishlist = this.store.select(selectNumberOfProductInWishlist);
  }

  ngOnInit(): void {

  }

}
