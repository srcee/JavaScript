function solve([speed, area]) {
    const limits = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130
    };
    let msg = [
        [0, 'speeding'],
        [20, 'excessive speeding'],
        [40, 'reckless driving'],
    ]
    let speeding = speed - limits[area];
    let result = msg.filter((m) => m[0] < speeding).pop();
    if (result !== undefined) {
        console.log(result[1]);
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);
