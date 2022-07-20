import request from 'supertest';
import {PrimeController} from '../../src/prime/prime.controller';
import app from '../../src/app';

describe("PrimeList Function", () => {
    it("should return empty array n < 1", () => {
        const result = PrimeController.calculateList(1);
        expect(result).toEqual([]);
    })
    it("value test n=10", () => {
        const result = PrimeController.calculateList(10);
        expect(result).toEqual([7, 5, 3, 2]);
    });
    it("value test n=100", () => {
        const result = PrimeController.calculateList(100);
        expect(result).toEqual([97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]);
    });
});

describe("GetList Handler", () => {

    it("should return end is required if no end in json", async () => {
        const result = await request(app).get('/prime/list');
        expect(result.status).toEqual(404);
        expect(result.body.error).toEqual("Route not found");

    })
    it("should return empty json array n < 1", async () => {
        const result = await request(app).get('/prime/list' + '/1');
        expect(result.status).toEqual(400);
        expect(result.body.error).toEqual("end must be greater or equal than 2");
    })
    it("should return end must be an integer if end is not an integer", async () => {
        const result = await request(app).get('/prime/list' + '/a');
        expect(result.status).toEqual(400);
        expect(result.body.error).toEqual("end must be an integer");
    })
    it("should return end must be an integer if end is not an integer", async () => {
        const result = await request(app).get('/prime/list' + '/10.2');
        expect(result.status).toEqual(400);
        expect(result.body.error).toEqual("end must be an integer");
    })
    it("should return json with list of primes", async () => {
        const result = await request(app).get("/prime/list" + "/10")
        expect(result.status).toEqual(200);
        expect(result.body.result).toEqual([7, 5, 3, 2]);
    })
})