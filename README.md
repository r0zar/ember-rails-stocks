# ember-rails-stocks
ember front-end, rails back-end, stocks all over.

* `stocks`, [Ember Frontend](https://github.com/r0zar/ember-rails-stocks/tree/master/stocks)
* `stocks-api`, [Rails Backend](https://github.com/r0zar/ember-rails-stocks/tree/master/stocks-api)

## Requirements

1. A linux box or vm
2. Ruby >= v2.2
3. Rails >= v5
4. Bundler >= v1.1
5. Node.js >= v4.4
6. npm >= v2.15

## Getting Started

Welcome to ember-rails-stocks, a place where fantasies of viewing stock values with a basic bar chart can really come true.

To get started all you need to do is grab a linux box or vm, clone this project, install a few rails and ember dependencies and you're ready to launch the servers!

You can also [view my application live](http://54.210.196.143:4200/).

### Setup

1. `git clone https://github.com/r0zar/ember-rails-stocks.git`
2. `gem install rails --pre --no-ri --no-rdoc`
2. `npm install -g ember-cli`

### Rails

Run this inside the `stocks-api` root directory

1. `rake db:migrate`

### Ember

Run these inside the `stocks` root directory

1. `ember install ember-cli-sass`
2. `ember install ember-cli-bootstrap-sassy`
3. `ember install ember-power-select`

## Usage

The application is mainly administrated with two rake tasks: (you will only need to run one at a time)

* `rake stocks:shortport`
* `rake stocks:import`

The first will load [shortlist.csv](https://github.com/r0zar/ember-rails-stocks/blob/master/stocks-api/shortlist.csv) into the database, the second will load [companylist.csv](https://github.com/r0zar/ember-rails-stocks/blob/master/stocks-api/companylist.csv).

Once loaded with data, you need to launch the servers to view your application.

First, start the rails server from the `stock-api` directory:

`rails s -b 0.0.0.0`

Then, start up the ember server from the `stocks` directory:
 
`ember s --proxy http://localhost:3000`

You should be all set!

## Questions / Issues ?

Email me at ross.ragsdale@gmail.com.
