# Orderbook

## Tooling

- [x] TypeScript
- [x] `react-native-web`
- [x] `eslint`|`prettier`
- [x] `@shopify/restyle`
- [x] Shipped on Vercel
- [ ] Added github action

## Getting Started

```console
yarn
yarn ios|android
```

## Demo

- Web: [https://web-build-hazel.vercel.app](https://web-build-hazel.vercel.app)
- Native: [https://expo.dev/@flexbox/david-01072021](https://expo.dev/@flexbox/david-01072021)

## API

- Use [websocat](https://github.com/vi/websocat) to test the API
- [cryptofacilities Websocket API](https://support.cryptofacilities.com/hc/en-us/articles/360000538773-Book)

```console
# connect to API

websocat wss://www.cryptofacilities.com/ws/v1
```

```console
# Get orderbook data

{"event":"subscribe","feed":"book","product_ids":["PI_XBTUSD"]}
```

## Credentials

- Thanks [to Madison Apple](https://thenounproject.com/search/?q=kraken&i=1122668)
