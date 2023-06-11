const chai = require('chai');
const supertest = require('supertest');

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('Testing Api Ecommerce', ()=>{

    describe('Test de productos',()=>{
        const productMock = {
            title: "producto Mock",
            description: "lalala",
            price: 300,
            thumbnail: "imagen1",
            code: 144,
            stock: 9,
            category: "aaa",
            owner: "admin"
        }
       
        it('El endpoint Post /api/products debe crear un producto', (done)=>{
            requester.post('/api/products/').send(productMock)
            .set('Accept', 'application/json')
           .expect(200)
           .then(res=>{
            productMock._id = res.body.product._id           
            done()
           })
           
                    	           	
        })    
        it('El endpoint Get /api/products debe traer todos los productos', (done)=>{
            requester.get('/api/products/')
           .expect(200, done)
                      	           	
        })
        // it('El endpoint Get /api/products/:pid debe traer un producto segun el id', (done)=>{
        //     requester.get('/api/products/:pid').query({pid: productMock._id})
        //    .expect(200, done)
        //    console.log("🚀 ~ file: supertest.test.js:39 ~ it ~ productMock._id:", productMock._id)       	           	
                      	           	
        // })    
        

        })
        
    })
