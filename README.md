# Bake My Day `App Name`

## Background

```
Bake My Day is a Cake Bakery, who make and sell delicious cakes.

```

## Backend functionality

`backend apis`

### all cakes `Get method`

```
localhost:8080/cake/all
```

### Special Cakes `Get method`

```
localhost:8080/cake/category/special
```

### single cake by id `Get method`

```
localhost:8080/cake/{cakeId}
```

## Data storage

```
ALl the cake data will be stored locally in the postgres.

```

## Front end

```
Front end will contain all the UI components and async functions to call the backend APIs.
I might use localStorage to persist the cart history for each user,
so user can access their cart even later.
The persistence in storage will get cleared based on the user action (Buy/Clear cart).
```
