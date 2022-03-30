import request from 'supertest';
import { ExpressServer } from '../../server';

const server = new ExpressServer().getInstance();

describe('Schedule Controller', () => {
  describe('全検索', () => {
    it('二件データが返る', async () => {
      const response = await request(server).get('/v1/schedule');
      expect(response.body.resultData.length).toEqual(2);
    });
  });

  describe('保存', () => {
    it('保存したコンテンツが返る', async () => {
      const response = await request(server)
        .post('/v1/schedule')
        .send({ name: 'test' });
      expect(response.body.resultData.name).toEqual('test');
    });
  });

  describe('idでデータを取得', () => {
    it('指定したデータが返る', async () => {
      const response = await request(server).get('/v1/schedule/2');
      expect(response.body.resultData.name).toEqual('test');
    });
  });
});
