# Orderbook

## Tooling

- [x] TypeScript
- [x] `react-native-web`
- [x] `eslint`|`prettier`
- [x] `@shopify/restyle`
- [ ] `react-query`

  - [with websockets](https://tkdodo.eu/blog/using-web-sockets-with-react-query)

- [->] Added github action
- [ ] Shipped on Vercel

## Getting Started

```console
yarn
yarn ios|android
```

## API

- Use [websocat](https://github.com/vi/websocat) to test the API
- [cryptofacilities Websocket API](https://support.cryptofacilities.com/hc/en-us/articles/360000538773-Book)

```console
websocat wss://www.cryptofacilities.com/ws/v1
```

```console
{"event":"subscribe","feed":"book","product_ids":["PI_XBTUSD"]}
```
