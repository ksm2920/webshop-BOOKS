class Product {
	constructor(image, price, shortDescription, largeDescription, orderid, addedProduct) {
		this.image = image;
		this.price = price;
		this.shortDescription = shortDescription;
		this.largeDescription = largeDescription;
		this.orderid = orderid;
		this.addedProduct = addedProduct;
	}
}

class AddedProduct {
	constructor(title, price, quantity, id, totalCost) {
		this.title = title;
		this.price = price;
		this.quantity = quantity;
		this.id = id;
		this.totalCost = totalCost;
	}
}

class orderDetail {
	constructor(orderNo, name, email, address, city, zip, country, shipping, cardInfo) {
		this.orderNo = orderNo;
		this.name = name;
		this.email = email;
		this.address = address;
		this.city = city;
		this.zip = zip;
		this.country = country;
		this.shipping = shipping;
		this.cardInfo = cardInfo;
	}
}
let orderDetailList = [];
let addedProductsList = [];
let updatedOrderDetailList =[];

let productsList = [
	{
		poster: '/images/products/julafton-pa-den-lilla-on-i-havet.jpeg',
		title: 'Julafton på den lilla ön i havet',
		author: 'Jenny Colgan',
		price: 299,
		description: 'Följ med till ett vackert nordligt hörn av världen, till gemenskapen på Mure, och upplev en höglandsjul du sent kommer att glömma!',
		clicked: false,
		quantity: 1,
		id: 1,
		totalCost: 0,
	},
	{
		poster: '/images/products/absolute-freebsd.jpeg',
		title: 'Absolute freebsd',
		author: 'Michael W Lucas',
		price: 559,
		description: "FreeBSD is the muscle behind companies like Netflix and EMC. Any place where someone does heavy lifting on the Internet, you'll find FreeBSD. ",
		clicked: false,
		quantity: 1,
		id: 2,
		totalCost: 0,
	},
	{
		poster: '/images/products/jag-kan-ha-fel-och-andra-visdomar-fran-mitt-liv-som-buddhistmunk.jpeg',
		title: 'Jag kan ha fel...',
		author: 'Björn Lindeblad & Co',
		price: 269,
		description: 'Boken är skriven i nära samarbete med Björns två vänner och kolleger Caroline Bankler och Navid Modiri.',
		clicked: false,
		quantity: 1,
		id: 3,
		totalCost: 0,
	},
	{
		poster: '/images/products/javascript-the-definitive-guide.jpeg',
		title: 'Javascript the definitive guide',
		author: 'David Flanagan',
		price: 579,
		description: 'JavaScript is the programming language of the web and is used by more software developers today than any other programming language.',
		clicked: false,
		quantity: 1,
		id: 4,
		totalCost: 0,
	},
	{
		poster: '/images/products/jul-i-stallet.jpeg',
		title: 'Jul i stallet',
		author: 'Astrid Lindgren',
		price: 169,
		description: 'Mästerligt illustrerad av Lars Klinting som skapat en svit vidunderligt vackra, tidlösa bilder i vintrig miljö.',
		clicked: false,
		quantity: 1,
		id: 5,
		totalCost: 0,
	},
	{
		poster: '/images/products/jul-igen-pa-monsterhotellet.jpeg',
		title: 'Jul igen på monsterhotellet',
		author: 'Anna Hansson',
		price: 319,
		description: 'Jul igen på Monsterhotellet är den tionde boken om varulvarna på Monsterhotellet.',
		clicked: false,
		quantity: 1,
		id: 6,
		totalCost: 0,
	},
	{
		poster: '/images/products/spegelmannen.jpeg',
		title: 'Spegelmannen',
		author: 'Lars Kepler',
		price: 249,
		description: 'Spegelmannen är den åttonde boken med Joona Linna.',
		clicked: false,
		quantity: 1,
		id: 7,
		totalCost: 0,
	},
	{
		poster: '/images/products/stormvakt.jpeg',
		title: 'Stormvakt',
		author: 'Kristina Ohlsson',
		price: 199,
		description: 'Efter en räcka framgångsrika spänningsromaner startar Kristina Ohlsson med ”Stormvakt” en ny deckarserie om den stillsamme före detta finansmannen August Strindberg.',
		clicked: false,
		quantity: 1,
		id: 8,
		totalCost: 0,
	},
	{
		poster: '/images/products/vi-har-sa-roligt-nar-det-ar-jul-astrid-lindgrens-basta-julberattelser.jpeg',
		title: 'Vi har så roligt när det är jul',
		author: 'Astrid Lindgren',
		price: 329,
		description: 'Den perfekta julklappen som räcker hela jullovet!',
		clicked: false,
		quantity: 1,
		id: 9,
		totalCost: 0,
	},
	{
		poster: '/images/products/guinness-world-records-2021.jpeg',
		title: 'Guiness world records 2021',
		author: 'Ltd Guinness World Records',
		price: 199,
		description: 'Välkommen till Guinness World Records 2021!',
		clicked: false,
		quantity: 1,
		id: 10,
		totalCost: 0,
	},
];

let productDetailObject = [];

$(function () {
	$('#main-nav').addClass('nav');
	$('#main-area').addClass('main');
	$('#main-footer').addClass('footer');
	$('#main-logo').addClass('logo');
});
