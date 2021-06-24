import React from "react";
import { useQueryClient } from "react-query";

// TODO: Add .env
const WS_API = "wss://www.cryptofacilities.com/ws/v1";

export const useReactQuerySubscription = () => {
  const queryClient = useQueryClient();

  React.useEffect(() => {
    const websocket = new WebSocket(WS_API);

    websocket.onopen = () => {
      console.log("💹 connected");
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      queryClient.setQueriesData(data.entity, (oldData) => {
        const update = (entity) =>
          entity.id === data.id ? { ...entity, ...data.payload } : entity;

        return Array.isArray(oldData) ? oldData.map(update) : update(oldData);
      });
    };

    return () => {
      websocket.close();
    };
  }, [queryClient]);
};
