# Disclaimer

### This is an old version and a partial checkin for the rowdyranchtx.com website. The intent is to share the internal code but not the proprietary artifacts of the site. 

# Introduction

This project represents the software for the web site [RowdyRanchTX.com](rowdyranchtx.com) version 3.0. It is due to be published in July 2017 to replace version 2.0 which is a static web site. This version is built on React, NodeJS, and MongoDB. Note that a few key peices of code will not be checked into the repository for security reasons.

## The Ranch

Rowdy Ranch is the dream of my wife, Lisa, a.k.a "Rowdy". She works in the medical field, and started the ranch in her spare time with a few Nubian goats and about 20 chickens. And of course there are a few dogs.

I had spent most of my life living in the suburbs and developing software. When I met Rowdy and we married, I pulled on my boots and we started building the ranch to provide a retirement income for our future. Today we have over 40 goats of four different breeds. Some are milk breeds, and some are meat breeds. We also have a substancial number of chickens, ducks, and geese.

## Pyrenees Tech, LLC

Pyrenees.Tech, LLC is the company I, [Blake Schwartz](jbschwartz.com), do direct work though. 

# Tooling

## Software

* JavaScript ES2015
* React / Redux/ Saga
* NodeJS / Express
* MongoDB
* standardjs

## Build System

* CoffeeScript
* Gulp
* Babel

## Testing

* CoffeeScript
* Mocha
* Chai

```
mocha --require coffeescript/register  test/**/*.coffee
```

