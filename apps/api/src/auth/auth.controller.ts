import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Query,
} from '@nestjs/common';
import {
  AuthResponseDto,
  LoginRequestDto,
  RegisterRequestDto,
} from '@kangaroo/types';
import { AuthService } from './auth.service';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { DOC_DESCR } from '../swagger';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Successful registration',
    type: AuthResponseDto,
  })
  @ApiConflictResponse({
    description: 'Invalid registration data',
  })
  @ApiOperation({
    summary: DOC_DESCR.auth.post.summary,
    description: DOC_DESCR.auth.post.desc,
  })
  async register(@Body() body: RegisterRequestDto): Promise<AuthResponseDto> {
    try {
      const resp = await this.authService.createUser(body);

      return resp;
    } catch (e) {
      if (e.code === 'P2002' && e?.meta?.target === 'User_login_key') {
        throw new HttpException('Conflict', HttpStatus.CONFLICT);
      }

      throw new InternalServerErrorException();
    }
  }

  @Get()
  @ApiOkResponse({ description: 'Successful login', type: AuthResponseDto })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiOperation({
    summary: DOC_DESCR.auth.get.summary,
    description: DOC_DESCR.auth.get.desc,
  })
  async singIn(@Query() params: LoginRequestDto): Promise<AuthResponseDto> {
    return this.authService.signIn(params);
  }
}
