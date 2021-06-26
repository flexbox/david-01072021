import React from "react";
import { useQueryClient } from "react-query";

import { OrderDetailData } from "~/types";

// TODO: Add .env
const WS_API = "wss://www.cryptofacilities.com/ws/v1";

type InvalidateEvent = {
  operation: "invalidate";
  entity: Array<string>;
  id?: number;
};

type UpdateEvent = {
  operation: "update";
  entity: Array<string>;
  // id: number;
  payload: Partial<OrderDetailData>;
};

type WebSocketEvent = InvalidateEvent | UpdateEvent;

export const useReactQuerySubscription = () => {
  const queryClient = useQueryClient();

  const websocket = React.useRef<WebSocket>();

  React.useEffect(() => {
    websocket.current = new WebSocket(WS_API);

    websocket.current.onopen = () => {
      console.log("✅ connected");
    };

    websocket.current.onmessage = (event) => {
      console.log("🚁 received event", event);

      const data: WebSocketEvent = JSON.parse(event.data);
      console.log('file: useReactQuerySubscription.ts ~ line 40 ~ React.useEffect ~ data', data)

      switch (data.operation) {
        case "invalidate":
          queryClient.invalidateQueries([...data.entity].filter(Boolean));
          break;
        case "update":
          queryClient.setQueriesData(data.entity, (oldData) => {
            const update = (entity: Record<string, unknown>) => entity;
            return Array.isArray(oldData)
              ? oldData.map(update)
              : update(oldData as Record<string, unknown>);
          });
          break;
      }
    };

    return () => {
      websocket.current?.close();
    };
  }, [queryClient]);

  return (input: WebSocketEvent) => {
    websocket.current?.send(JSON.stringify(input));
  };
};
