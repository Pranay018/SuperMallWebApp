import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../server.js';

import Location from '../models/Location.js';
import Shop from '../models/Shop.js';

let token, locationId;

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Register and login as admin
  await request(app).post('/api/auth/register').send({
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  });

  const loginRes = await request(app).post('/api/auth/login').send({
    email: 'admin@example.com',
    password: 'admin123',
  });

  token = loginRes.body.token;

  // Create a location for the shop
  const location = await Location.create({ name: '2nd Floor' });
  locationId = location._id;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Shop API', () => {
  let shopId;

  it('should create a shop', async () => {
    const res = await request(app)
      .post('/api/shops')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Tech Zone',
        category: 'Electronics',
        owner: new mongoose.Types.ObjectId(), // Simulated owner
        location: locationId,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Tech Zone');
    shopId = res.body._id;
  });

  it('should fetch all shops', async () => {
    const res = await request(app).get('/api/shops');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update a shop', async () => {
    const res = await request(app)
      .put(`/api/shops/${shopId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ category: 'Gadgets' });

    expect(res.statusCode).toBe(200);
    expect(res.body.category).toBe('Gadgets');
  });

  it('should delete the shop', async () => {
    const res = await request(app)
      .delete(`/api/shops/${shopId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Shop removed');
  });
});
