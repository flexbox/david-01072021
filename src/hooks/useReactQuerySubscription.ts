import React from "react";
import { useQueryClient } from "react-query";

import { OrderDetailData } from "~/types";

// TODO: Add .env
const WS_API = "wss://www.cryptofacilities.com/ws/v1";

type InvalidEvent = {
  event: "error";
  message: string;
};

type SubscribedEvent = {
  event: "subscribe";
  feed: "book";
  product_ids: ["PI_XBTUSD"];
};

type SubscriptionSnapshot = {
  feed: "book_snapshot";
  product_id: "PI_XBTUSD" | string;
  timestamp: Date;
  seq: number;
  tickSize: null;
  bids: [
    {
      price: number;
      qty: number;
    }
  ];
  asks: [
    {
      price: number;
      qty: number;
    }
  ];
};

type SubscriptionDeltaEvent = {
  feed: "book";
  product_id: string;
  side: "buy" | "sell" | string;
  seq: number;
  price: number;
  qty: number;
};

type WebSocketEvent = InvalidEvent | SubscribedEvent;

export const useReactQuerySubscription = () => {
  const queryClient = useQueryClient();

  const websocket = React.useRef<WebSocket>();

  React.useEffect(() => {
    websocket.current = new WebSocket(WS_API);

    websocket.current.onopen = () => {
      console.log("✅ connected");
    };

    websocket.current.onmessage = (event) => {
      // console.log("🚁 received event", event);

      const data: WebSocketEvent = JSON.parse(event.data);

      switch (data.event) {
        case "invalidate":
          queryClient.invalidateQueries([...data.product_ids].filter(Boolean));
          break;
        case "subscribe":
          console.log(data);

          // queryClient.setQueriesData(data.product_ids, (oldData) => {
          //   const update = (product_ids: Record<string, unknown>) =>
          //     product_ids;
          //   return Array.isArray(oldData)
          //     ? oldData.map(update)
          //     : update(oldData as Record<string, unknown>);
          // });
          break;
      }
    };

    return () => {
      websocket.current?.close();
    };
  }, [queryClient]);

  return (input: WebSocketEvent) => {
    const payload = JSON.stringify(input);
    websocket.current?.send(payload);
  };
};
