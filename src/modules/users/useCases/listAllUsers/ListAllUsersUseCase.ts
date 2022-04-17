import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | undefined;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userRequest = this.usersRepository.findById(user_id);

    if (!userRequest) {
      throw new Error("User not found");
    }

    if (!userRequest.admin) {
      throw new Error("User not admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
