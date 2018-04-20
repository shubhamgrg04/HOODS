# HOODS


-All development should happen in "dev" branch  and later should be pushed to master branch.

- ## Naming Conventions

     1. A method/function should always start with a small letter.
        ```javscript
        // bad example
        function MyFunction() {...}

        // good example
        function myFunction() {...}
        ```

     2. Follow the camel case convention, typing the words in lower-case, only capitalizing the first letter in each word.

        ```javascript
        // Good example constructor = TitleCase
        var test = new PrototypeApplication();

        // Bad example constructor
        var test = new PROTOTYPEAPPLICATION();

        // Good example functions/methods = camelCase
        myFunction();
        calculateArea();

        // Bad example functions/methods
        MyFunction();
        CalculateArea();  
        ```

     3. Variables with multiple words should always use an underscore between words.

        ```javascript
        // bad example
        var deliveryNote = 1;

        // good example
        var delivery_note = 1;
        ```


[Additional information on naming convention](http://www.j-io.org/Javascript-Naming_Conventions/#naming-conventions)