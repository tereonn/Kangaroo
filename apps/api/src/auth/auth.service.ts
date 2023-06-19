import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModelService } from '@kangaroo/model';
import {
  AuthResponseDto,
  JwtClaims,
  LoginRequestDto,
  RegisterRequestDto,
} from '@kangaroo/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userModelService: UserModelService,
    private readonly jwtService: JwtService
  ) {}

  async createUser(data: RegisterRequestDto): Promise<AuthResponseDto> {
    const newUser = await this.userModelService.createUser({
      login: data.email,
      pass: await this.hash(data.pass),
      role: 'USER',
    });

    return {
      token: await this.signJwt({ sub: newUser.id.toString() }),
    };
  }

  async signIn(data: LoginRequestDto): Promise<AuthResponseDto> {
    const [user, hashed] = await Promise.all([
      this.userModelService.getUser({ login: data.email }),
      this.hash(data.pass),
    ]);

    if (user === null || user.pass !== hashed) {
      throw new UnauthorizedException();
    }

    return {
      token: await this.signJwt({ sub: user.id.toString() }),
    };
  }

  private async hash(str: string): Promise<string> {
    //
    // TODO: Change this mock to real hashing
    //
    return Promise.resolve(str);
  }

  private async signJwt(claims: JwtClaims): Promise<string> {
    return this.jwtService.signAsync(claims);
  }
}
