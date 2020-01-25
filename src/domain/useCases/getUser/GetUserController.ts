import { GetUserUseCase } from "./GetUserUseCase";
import { Result } from "../../../core/Result";

export class CreateUserController {
    private useCase: GetUserUseCase;
  
    constructor (useCase: GetUserUseCase) {
      this.useCase = useCase;
    }
  
    async executeImpl (): Promise<any> {
      
        try{
            const userOrError = await this.useCase.execute({id : 'abc123'});

            // if (userOrError.isSuccess){
            //     return this.ok(this.res, userOrError.value);
            // } else {
            //     return this.fail(userOrError.error);
            // }
            
        } catch (err){
            return Result.fail(err);
        }
    }
}