const number = 8;
        const string = 'Amsterdam';
        const boolean = true;
        const value = null;
        if (value === null) {
            console.log("null");
        }
        const nothing = undefined;
        const bigNumber = 93646437435347597928375n;
        const unique = Symbol('id');
        const object = [5, 6, 7];

        console.log(typeof number);
        console.log(typeof string);
        console.log(typeof boolean);
        console.log(typeof nothing);
        console.log(typeof bigNumber);
        console.log(typeof unique);
        console.log(typeof object);