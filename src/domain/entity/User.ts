import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Email } from "../valueObject/Email";
import { Password } from "../valueObject/Password";

export enum UserType {
    NORMAL,
    CARRIER,
    ADMINISTRATOR
}

interface UserProps {
    email: Email;
    password: Password;
    type: UserType;
}

export class User extends Entity<UserProps>{

    private constructor(props: UserProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(email: Email, password: Password, type: UserType = UserType.NORMAL): User {
        return new User({ email, password, type });
    }

    public changeType(newType: UserType) {
        this.props.type = newType;
    }

    public changePassword(password: Password){
        this.props.password = password;
    }


}