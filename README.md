# falsy

Test whether an object is falsy. Optionally include whitespace in the test.

# Usage

    falsy(0); //true
    falsy(null); //true
    falsy(undefined); //true
    falsy(''); //true
    falsy(' ', { ws: true }); //true
    falsy(1); //false
    falsy([]); //false
    falsy({}); //false
    falsy(' '); //false

# Options 

    {
        ws: false, //Include whitespace in test
    }