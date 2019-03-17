let globalData = {
    _events: {}
}

function emit(type,data) {
    let listeners = this.globalData._event[type]
    if(listeners) {
        for(let listener of listeners) {
            listener[0](data)
        }
    }
}
function on(type, listener) {
    if(!this.globalData._events[type]) {
        this.globalData._events[type] = []
    }
    this.globalData.listenersID += 1;
    this.globalData._events[type].push([listener, this.globalData.listenerID])
    return this.globalData.listenersID;
}

function removesListener(type, listenerID) {
    let listeners = this.globalData._event[type]
    if(listeners) {
        for(let i = 0; i < listeners.length; i++) {
            if(listeners[i][1] === this.globalData.listenersID) {
                listener.splice(i, 1)
                break
            }
        }
    }
    if(listeners.length === 0) {
        this.globalData._events[type] = null
    }
}

function removeAllListeners(type) {
    this.globalData._events[type] = null
}

function listeners(type) {
    return this.globalData._events[type]
}
