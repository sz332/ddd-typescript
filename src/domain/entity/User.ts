import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Email } from "../valueObject/Email";
import { Password } from "../valueObject/Password";
import { Media } from "../../core/Media";

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

    public email(): Email {
        return this.props.email;
    }

    public password(): Password {
        return this.props.password;
    }

    public import(media: Media) : User {

        const id = new UniqueEntityID(media.ofString('id'));
        const email = Email.create(media.ofString('email'));
        const password = Password.create(media.ofString('password'), false);
        const type: UserType = (<any>UserType)[media.ofString('type')];

        return new User({ email, password, type }, id);
    }

    public export(media: Media) {
        return media
            .with("id", this.id().toString())
            .with("email", this.props.email.value())            // FIXME use printer instead of getter
            .with("password", this.props.password.value())      // FIXME use printer instead of getter
            .with("type", this.props.type);
    }

}