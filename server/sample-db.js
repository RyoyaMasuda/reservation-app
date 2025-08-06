const Product = require('./model/product')

class SampleDb {

    constructor() {
        this.products = [
            {
                coverImage: '../assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                hedingtext1: 'aaaaaaaaaaaaa',
                hedingtext2: 'bbbbbbbbbbbbbbbbbbbb',
                hedingtext3: 'ccccccccccccccccccccccccccc',

            },
            {
                coverImage: '../assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                hedingtext1: 'aaaaaaaaaaaaa',
                hedingtext2: 'bbbbbbbbbbbbbbbbbbbb',
                hedingtext3: 'ccccccccccccccccccccccccccc',
            },
            {
                coverImage: '../assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                hedingtext1: 'aaaaaaaaaaaaa',
                hedingtext2: 'bbbbbbbbbbbbbbbbbbbb',
                hedingtext3: 'ccccccccccccccccccccccccccc',
            },
            {
                coverImage: '../assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                hedingtext1: 'aaaaaaaaaaaaa',
                hedingtext2: 'bbbbbbbbbbbbbbbbbbbb',
                hedingtext3: 'ccccccccccccccccccccccccccc',
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsDb()
    }

    async cleanDb() {
       await Product.deleteMany({})
    }

    pushProductsDb () {
    this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsDb()
    }
}

module.exports = SampleDb