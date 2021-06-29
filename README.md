# Orderbook

## Getting Started

```console
yarn
yarn ios|android
```

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

## TODO

- [ ] `react-query`
- [ ] Shipped on Vercel

hint

- https://tkdodo.eu/blog/using-web-sockets-with-react-query
