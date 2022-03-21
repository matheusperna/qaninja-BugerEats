var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '6191999-9999',
            address: {
                postalcode: '71746004',
                street: 'SMPW Quadra 29 Conjunto 4',
                number: '06',
                details: 'Casa G',
                district: 'Park Way',
                city_state: 'Brasília/DF'
            },
            delivery_method: 'Bike Elétrica',
            cnh: 'cnh-digital.jpg'
        }

        return data 

    }
}