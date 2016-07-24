# aurelia-register

**This app will serve as a register for a local coffeebar. The coffeebar has multiple tables and each table should be able to take multiple orders. An order has mulitple products and after payment the table returns to an empty state.**

This app is built on Aurelia and depends on the Sync Database by Firebase.

Clone or download the repository.

    npm install
    jspm install

Then run the following command:

    gulp

Should now be running on localhost:3000 with Browserify.
Watches for changes and compiles .scss.


##MUST
- Choose a table
- Add orders
- Edit or remove orders
- Remove bill

###TODO
- Checkout bill
- Product categorization

##SHOULD
- Calculate change based on received money
- Product management
- Table management

##COULD
- Split bill
- Print/mail receipt

##WOULD
- Citylife integration (loyalty program)
- Bancontact app integration

#Troubleshooting
In case of build error due to gulp-sass error

    npm uninstall gulp-sass
    npm install gulp-sass
