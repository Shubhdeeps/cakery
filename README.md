# Panda Kook `App Name`

## Background

```
Panda kook is an Indian food restaurant, who sells Indian authentic cuisines.

```

## Backend functionality

`backend apis`

### all dishes `Get method`

```
localhost:8080/cuisines 
```

### dishes based on categories `Get method`

```
localhost:8080/cuisines/category?={category-name}
```

### single cake by id `Get method`

```
localhost:8080/cuisine/{cuisinesId}
```

### Purchase request `Post method`

```
localhost:8080/purchase
Body: body object with all the required fields
```

## Data storage

```
ALl the cuisines data will be stored locally in the postgres.
There will be three tables in the database
1. cuisines (all products)
2. Buyers (all the users)
3. Purchases (all the purchases)
```

## Front end

```
Front end will contain all the UI components and async functions to call the backend APIs.
I might use localStorage to persist the cart history for each user,
so user can access their cart even later.
The persistence in storage will get cleared based on the user action (Buy/Clear cart).
```
