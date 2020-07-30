import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ServiceEntity } from "./service.entity";
import { Auth } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  // private auth: Auth[] = [];
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly servicesRepository: Repository <ServiceEntity>,
  ) {};

  async verifyAccount(auth: Auth): Promise<Auth> {
    console.log('service auth: ', auth);
    console.log('Find All from DB: ', await this.findAll());
    return auth;
  };

  findAll(): Promise<ServiceEntity[]> {
    return this.servicesRepository.find();
  }

  findOne(id: string): Promise<ServiceEntity> {
    return this.servicesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.servicesRepository.delete(id);
  }
};