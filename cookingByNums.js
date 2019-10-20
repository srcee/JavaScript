function solve(param) {
    function action(prop, n) {
        let actions = {
            chop: n / 2,
            dice: Math.sqrt(n),
            spice: n + 1,
            bake: n * 3,
            fillet: n * 0.8
        };
        return actions[prop];
    }
    let number = Number(param[0]);

    for (let i = 1; i < param.length; i++) {
        number = action(param[i], number);
        console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
