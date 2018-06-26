function stringify(val) {
    return val === undefined || typeof val === "function" ? val +
        '' : JSON.stringify(val);
}

function deserialize(value) {
    if (typeof value !== 'string') {
        return undefined;
    }
    try {
        return JSON.parse(value);
    } catch (e) {
        return value || undefined;
    }
}

function Storage(type) {
    this.type = type || "local";
    this.storage = this.type == "local" ? window.localStorage :
        window.sessionStorage;
}
Storage.prototype.getItem = function(key) {
    return deserialize(this.storage.getItem(key));
}
Storage.prototype.setItem = function(key, data) {
    if (data === undefined) {
        return this.storage.removeItem(key);
    }
    return this.storage.setItem(key, stringify(data));
}


export default Storage;
