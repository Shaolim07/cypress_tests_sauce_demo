export const users = {
    valid: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    invalid: {
        username: 'user.invalid',
        password: 'password'
    },
    locked: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    emptyUsername: {
        username: '',
        password: 'secret_sauce'
    },
    emptyPassword: {
        username: 'standard_user',
        password: ''
    },
    emptyBoth: {
        username: '',
        password: ''
    }
}

export const products = {
    backpack: 'Sauce Labs Backpack',
    bikeLight: 'Sauce Labs Bike Light',
    boltTShirt: 'Sauce Labs Bolt T-Shirt',
    onesie: 'Sauce Labs Onesie'
}

export const checkout = {
    firstName: 'João',
    lastName: 'Silva',
    postalCode: '12345-678'
}
