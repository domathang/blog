import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { ConflictException } from '@nestjs/common';

describe('UsersController', () => {
  let service: UsersService;
  let mockPrisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    let module = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get<UsersService>(UsersService);
    mockPrisma = module.get(PrismaService);
  });

  describe('users', () => {
    it('회원가입 아이디 겹침 409', async () => {
      const user = {
        id: 1,
        username: '1',
        password: '1234',
      };

      mockPrisma.user.findUnique.mockResolvedValue(user);

      expect(service.createUser(user)).rejects.toThrow(ConflictException);
    });
  });
});
