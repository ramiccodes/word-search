const wordSearch = (letters, word) => {
    const newArr = [];

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const letter of letters[0]) {
        newArr.push([]);
    }

    for (const row of letters) {
        for (const element in row) {
            newArr[element].push(row[element]);
        }
    }
    const verticalJoin = newArr.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;