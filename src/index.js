class SmartCalculator {

    constructor(initialValue) {
        this.num = initialValue;
    }

    add(number) {
        this.num += '+' + number;
        return this;
    }

    subtract(number) {
        this.num += '-' + number;
        return this;
    }

    multiply(number) {
        this.num += '*' + number;
        return this;
    }

    devide(number) {
        this.num += '/' + number;
        return this;
    }

    pow(number) {
        this.num += '^' + number;
        return this;
    }

    findNumPow(arr, index) {
        let power = [];
        let number = [];

        let startIndex = 0;
        let endIndex = 0;

        let res = [];
        let tmp = index;
        let tmpArr = arr;

        for (let i = index + 1; i < arr.length; i++) {
            if (isNaN(arr[i]) && arr[i] != '^') {
                break;
            }

            if (arr[i] == '^') {
                tmp = i;
            }
        }

        for (let i = tmp - 1; i >= 0; i--) {
            if (isNaN(arr[i]) == false) {
                number += arr[i];
            } else {
                startIndex = i + 1;
                break;
            }
        }

        number = number.split("");
        number = number.reverse();
        number = number.join("");

        for (let i = tmp + 1; i < arr.length; i++) {
            if (isNaN(arr[i]) == false) {
                power += arr[i];
                if (i == arr.length -1) {
                    endIndex = i;
                }
            } else {
                endIndex = i;
                break;
            }
        }

        res = String(Math.pow(eval(number), eval(power)));
        tmpArr = this.replace(arr, res, startIndex, endIndex);
        arr = tmpArr.split("");

        return arr;
    }

    replace (str, replacement, starIndex, endIndex,) {
        str = str.join('');
        if (endIndex == str.length - 1) {
            return str.substr(0, starIndex) + replacement;
        }
        return str.substr(0, starIndex) + replacement + str.substr(endIndex, str.length);
    }

    findIndex(str) {
        let powerIndex = -1;
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '^') {
                powerIndex = i;
                break;
            }
        }
        return powerIndex;
    }

    valueOf() {
        let str = this.num.split('');

        if (this.findIndex(str) == -1) {
            str = str.join("");
        } else {
            let powerIndex = 0;
            let res = 0;

            while (this.findIndex(str) != -1) {
                powerIndex = this.findIndex(str);
                res = this.findNumPow(str, powerIndex);
                str = res;
            }
            str = str.join("");
        }

        return eval(str);
    }
}

module.exports = SmartCalculator;


