`App Name`

# Cakery

## Background

```
Cakery is a backery, who sells Cake and Breads. The have a variety of cakes i.e. Birthday cake, Wedding cake, Party cakes, etc.
The application will be using cake products from this website: https://www.taste.com.au/baking/articles/top-50-cakes/4zag3onm
```

## Backend functionality

`backend apis`

### all cakes `Get method`

```
localhost:8080/cakes
```

### cakes based on categories `Get method`

```
localhost:8080/cakes/category?={category-name}
```

### single cake by id `Get method`

```
localhost:8080/cakes/{cakeId}
```

### Purchase request `Post method`

```
localhost:8080/purchase
Body: body object with all the required fields
```

## Data storage

```
ALl the cakes data will be stored locally in the postgres.
There will be three tables in the database
1. Cakes (all products)
2. Buyers (all new authenticated users)
3. Purchases (all the purchases)
```

## Front end

```
Front end will contain all the UI components and async functions to call the backend APIs.
I might use localStorage to persist the cart history for each user, so user can access their cart even later. The persistence in storage will get cleared based on the user action (Buy/Clear cart).
```
