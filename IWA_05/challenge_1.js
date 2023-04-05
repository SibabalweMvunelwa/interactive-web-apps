const WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let customers = 1
let locationA = 'RSA'
let currency = null
let shipping = null

if ( locationA == 'RSA' ) { 
    shipping = 400 && currency == 'R' 
}

if ( locationA == 'NAM' ) {
shipping = 600 
} else { shipping = 800 
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

if ( shoes + toys + batteries + pens + shirts > 1000 ) 
{
	if ( ( locationA == 'NAM' || locationA
     == 'RSA' ) && ( customers = 1 ) )
    {
		  shipping = 0
		}
}


if ( shipping = 0 && customers !== 1 ) { 
    console.log(WARNING) 
}

const price = currency + shoes + batteries + pens + shirts + shipping
locationA == 'NK' ? console.log(BANNED_WARNING) : console.log(price)