export interface Order {
  feed: string;
  product_id: string;
  side: string;
  seq: number;
  price: number;
  qty: number;
  timestamp: number;
}

export interface Orderbook {
  [Order]
}
