# import and export firebase collections
install the `node-firestore-import-export` package globally

# export
```sh
$ firestore-export -a magazine.json -b files/orders.json -n /orders/ -p
```

# import
```sh
$ firestore-import -a magazine-dev.json -b files/orders.json -n /orders/
```

# clear
```sh
$ firestore-clear -a magazine-dev.json -n /orders/
```
