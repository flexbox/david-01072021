export interface Order {
  feed: string;
  product_id: string;
  side: "buy" | "sell" | string;
  seq: number;
  price: number;
  qty: number;
  timestamp: number;
}
