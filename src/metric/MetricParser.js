function parseLogs(metricClass, raw) {
    let logs = raw.split("\n");
    let result = [];
    for (let i = 0; i < logs; i++) {
        let metricLog = new metricClass(raw[i]);
        result.push(metricLog);
    }

    return result;
}

module.exports = {
    parseLogs
};