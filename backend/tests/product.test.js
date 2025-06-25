import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../server.js';

import User from '../models/User.js';
import Location from '../models/Location.js';
import Shop from '../models/Shop.js';

let token, shopId;

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Register and login user
  await request(app).post('/api/auth/register').send({
    name: 'Test Owner',
    email: 'owner@example.com',
    password: 'password123',
    role: 'shop-owner',
  });

  const loginRes = await request(app).post('/api/auth/login').send({
    email: 'owner@example.com',
    password: 'password123',
  });

  token = loginRes.body.token;

  // Create location
  const location = await Location.create({ name: '1st Floor' });

  // Create shop
  const shop = await Shop.create({
    name: 'Gadget World',
    category: 'Electronics',
    owner: loginRes.body._id,
    location: location._id,
  });

  shopId = shop._id;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Product API', () => {
  let productId;

  it('should create a product', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Bluetooth Speaker',
        description: 'Loud and clear',
        price: 1999,
        category: 'Audio',
        stock: 20,
        shop: shopId,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Bluetooth Speaker');
    productId = res.body._id;
  });

  it('should get all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update the product', async () => {
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ stock: 10 });

    expect(res.statusCode).toBe(200);
    expect(res.body.stock).toBe(10);
  });

  it('should delete the product', async () => {
    const res = await request(app)
      .delete(`/api/products/${productId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Product removed');
  });
});
