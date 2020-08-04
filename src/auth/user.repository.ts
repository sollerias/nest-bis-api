import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
    const { name, password } = authCredentialsDto;

    const user = new User();

    user.name = name;
    user.password = password;

    await user.save();
  }
}