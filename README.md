
# url_shortener

**An node api to generate short url.**

## EndPoints for both metaData and DNStxt.

Endpoints are as follows:

1. Endpoint to create shortened url

```
POST /links
https://url-sr.herokuapp.com/api/url/

Body:
{
"url": "https://www.google.com/search?q=do+a+barrel+roll"
}

```

Response object:
```
{
"url": "https://www.google.com/search?q=do+a+barrel+roll",
"urlHash": "nAzgmrMY4",
"shortUrl": "http://url-sr.herokuapp.com/nAzgmrMY4"
}
```

2. Endpoint to redirect to original url

```
https://url-sr.herokuapp.com/nAzgmrMY4

```
Redirect URL:
```
https://www.google.com/search?q=do+a+barrel+roll
```

## Stack/Library/Module Used

```
express
```

```
shortid
```

```
valid-url
```

