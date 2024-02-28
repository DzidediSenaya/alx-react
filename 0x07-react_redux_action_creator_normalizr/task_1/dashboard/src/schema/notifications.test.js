import normalizedData from './notifications';
import { denormalize, schema } from 'normalizr';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages');
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema
});

describe('Normalized data', () => {
  it('should contain correct result array', () => {
    const expectedIds = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ];
    expect(normalizedData.result).toEqual(expect.arrayContaining(expectedIds));
  });

  it('should have correct user entity', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const user = denormalize(userId, userSchema, normalizedData.entities);
    const expectedUser = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    };
    expect(user).toEqual(expectedUser);
  });

  it('should have correct message entity', () => {
    const messageId = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    const message = denormalize(messageId, messageSchema, normalizedData.entities);
    const expectedMessage = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    };
    expect(message).toEqual(expectedMessage);
  });

  it('should have correct notification entity', () => {
    const notificationId = '5debd7642e815cd350407777';
    const notification = denormalize(notificationId, notificationSchema, normalizedData.entities);
    const expectedNotification = {
      author: {
        age: 61,
        email: "sallie.riddle@hoppler.biz",
        id: "5debd764f8452ef92346c772",
        name: { first: "Sallie", last: "Riddle" },
        picture: "http://placehold.it/32x32"
      },
      context: {
        guid: "3068c575-d619-40af-bf12-dece1ee18dd3",
        isRead: true,
        type: "urgent",
        value: "Sit non sit eiusmod tempor incididunt dolore aliqua."
      },
      id: "5debd7642e815cd350407777"
    };
    expect(notification).toEqual(expectedNotification);
  });
});

