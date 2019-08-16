const strMap = new Map()

strMap.set("1","dd1")
strMap.set("2","dd")
strMap.set("3","dd")
strMap.set("5","dd")

function randomStr() {
    return Math.random().toString(36).substr(2)
}

async function getData() {
    let str='--';
    for (let [_, value] of strMap) {
        str+=value;
      }

    return str
}

export default {
    randomStr,
    getData
}