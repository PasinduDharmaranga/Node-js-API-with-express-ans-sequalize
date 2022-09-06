const express = require('express');
const request = require('supertest');
const app = express();

describe('POST Create an Employee', () => {
    it('should create an Employee', () => {
        request(app)
        .post('employee/create')
        .send({})
        .expect(201)
        .then((res) => {
         expect(res.headers.location).to.be.eql('employee/create');
    });
 });
});

describe('POST find an Employee', () => {
    it('should find an Employee', () => {
        request(app)
        .get('employee/findOne')
        .send({})
        .expect(201)
        .then((res) => {
         expect(res.headers.location).to.be.eql('employee/findOne');
    });
 });
});