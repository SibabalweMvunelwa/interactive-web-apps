// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status1 = document.querySelector('#book1 .status')
reserve1 = document.querySelector('#book1 .reserve')
checkout1 = document.querySelector('#book1 .checkout')
checkin1 = document.querySelector('#book1 .checkin')

status2 = document.querySelector('#book2 .status')
reserve2 = document.querySelector('#book2 .reserve')
checkout2 = document.querySelector('#book2 .checkout')
checkin2 = document.querySelector('#book2 .checkin')

status3 = document.querySelector('#book3 .status')
reserve3 = document.querySelector('#book3 .reserve')
checkout3 = document.querySelector('#book3 .checkout')
checkin3 = document.querySelector('#book3 .checkin')

status1.style.color = STATUS_MAP.overdue.color
reserve1.disabled = STATUS_MAP.overdue.canReserve === "true" ? 'enabled' : 'disabled'
checkout1.disabled = STATUS_MAP.overdue.canCheckout === "true" ? 'enabled' : 'disabled'
checkin1.disabled = STATUS_MAP.overdue.canCheckIn === "true" ? 'enabled' : 'disabled'

status2.style.color = STATUS_MAP.reserved.color
reserve2.disabled = STATUS_MAP.reserved.canReserve === "true" ? 'enabled' : 'disabled'
checkout2.disabled = STATUS_MAP.reserved.canCheckout === "true" ? 'enabled' : 'disabled'
checkin2.disabled = STATUS_MAP.reserved.canCheckIn === "true" ? 'enabled' : 'disabled'

status3.style.color = STATUS_MAP.shelf.color
reserve3.disabled = STATUS_MAP.shelf.canReserve === "true" ? 'enabled' : 'disabled'
checkout3.disabled = STATUS_MAP.shelf.canCheckout === "true" ? 'enabled' : 'disabled'
checkin3.disabled = STATUS_MAP.shelf.canCheckIn === "true" ? 'enabled' : 'disabled'