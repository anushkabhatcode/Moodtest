const request = require('supertest');
const app = require('../../App'); // Adjust this path if necessary
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mocking bcrypt and jsonwebtoken
jest.mock('bcryptjs', () => ({
  hash: jest.fn().mockResolvedValue('fakeHashedPassword'),
  compare: jest.fn().mockResolvedValue(true)
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn().mockReturnValue('fake-jwt-token')
}));

// Mock the User model and other necessary parts of your app
jest.mock('../../models/user', () => ({
  User: {
    create: jest.fn().mockImplementation(({ username, email, password }) =>
      Promise.resolve({ id: 1, username, email, password: 'fakeHashedPassword' }) // Simulated hash for consistency
    ),
    findOne: jest.fn()
  }
}));

describe('User API Tests', () => {
  describe('POST /register', () => {
    it('should register a new user successfully', async () => {
      const userData = {
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'password123'
      };

      require('../../models/user').User.create.mockResolvedValue({
        id: 1,
        username: userData.username,
        email: userData.email,
        password: 'fakeHashedPassword'
      });

      const response = await request(app)
        .post('/users/register')
        .send(userData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message', 'User registered successfully');
      expect(require('../../models/user').User.create).toHaveBeenCalledWith({
        username: userData.username,
        email: userData.email,
        password: 'fakeHashedPassword'
      });
    });

    it('should handle user registration errors', async () => {
      const userData = {
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'password123'
      };

      require('../../models/user').User.create.mockRejectedValue(new Error('Duplicate username'));

      const response = await request(app)
        .post('/users/register')
        .send(userData);

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('error', 'Duplicate username');
    });
  });

  describe('POST /login', () => {
    it('should login a user and return a JWT', async () => {
      const loginData = {
        username: 'existingUser',
        password: 'password123'
      };

      require('../../models/user').User.findOne.mockResolvedValue({
        id: 1,
        username: loginData.username,
        password: 'fakeHashedPassword'
      });

      const response = await request(app)
        .post('/users/login')
        .send(loginData);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token', 'fake-jwt-token');
      expect(jwt.sign).toHaveBeenCalledWith(
        { username: loginData.username, id: 1 },
        expect.any(String),
        { expiresIn: '24h' }
      );
    });

    it('should reject invalid credentials', async () => {
      const loginData = {
        username: 'userNotFound',
        password: 'password123'
      };

      require('../../models/user').User.findOne.mockResolvedValue(null);

      const response = await request(app)
        .post('/users/login')
        .send(loginData);

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'User not found');
    });
  });
});
