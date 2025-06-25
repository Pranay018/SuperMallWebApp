
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../server.js';

import User from '../models/User.js';
import Shop from '../models/Shop.js';
import Offer from '../models/Offer.js';
import Location from '../models/Location.js';

let token, shopId;

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create admin user and login
  await request(app).post('/api/auth/register').send({
    name: 'Admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  });

  const loginRes = await request(app).post('/api/auth/login').send({
    email: 'admin@example.com',
    password: 'admin123',
  });

  token = loginRes.body.token;

  // Create location
  const location = await Location.create({ name: 'Ground Floor' });

  // Create shop
  const shop = await Shop.create({
    name: 'Demo Shop',
    category: 'Clothing',
    owner: loginRes.body._id,
    location: location._id,
  });

  shopId = shop._id;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Offer API', () => {
  let offerId;

  it('should create an offer', async () => {
    const res = await request(app)
      .post('/api/offers')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Summer Sale',
        description: '50% Off',
        discount: 50,
        validTill: '2025-12-31',
        shop: shopId,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Summer Sale');
    offerId = res.body._id;
  });

  it('should get all offers', async () => {
    const res = await request(app).get('/api/offers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update the offer', async () => {
    const res = await request(app)
      .put(`/api/offers/${offerId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ discount: 60 });

    expect(res.statusCode).toBe(200);
    expect(res.body.discount).toBe(60);
  });

  it('should delete the offer', async () => {
    const res = await request(app)
      .delete(`/api/offers/${offerId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Offer removed');
  });
});
