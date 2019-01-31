# quoteWizInt


Set up steps
- ensure you have node install on your comp by running `node -v` in command line
-- if you dont have node, go here: https://nodejs.org/en/ and install
- ensure that you have the latest npm as well by running `npm install npm@latest -g`
- in command line, get to the project directory (here is a link to help navigate between directory in command line: http://www.pcstats.com/articleview.cfm?articleid=1723&page=3)
- in command line, run `cd api` to enter the api directory
- in command line, run `npm install` to install the dependencies
- in command line, run `npm run dev` in the command line
- open postman, set the method to `GET` and enter the routes below to get the sets of requested data


ROUTES:
http://localhost:4000/
- Returns a collection of all list items

http://localhost:4000/:id   (ex: http://localhost:4000/998)
- Returns the item detail by ID

http://localhost:4000/state/:id  (ex: http://localhost:4000/state/WA)
- Returns a collection of all list items filtering on consumer's state value

http://localhost:4000/vehicle/:id  (ex: http://localhost:4000/vehicle/ford)
- Returns a collection of all list items filtering on vehicle's make value

http://localhost:4000/insurance/:id (ex: http://localhost:4000/coverage/None)
- Returns a collection of all list items filtering on former insurer