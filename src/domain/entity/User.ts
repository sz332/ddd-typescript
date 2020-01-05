import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Email } from "../valueObject/Email";
import { Password } from "../valueObject/Password";
import { Media, Persistable } from "../../core/Media";

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

export class User extends Entity<UserProps> implements Persistable {

    private constructor(props: UserProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(email: Email, password: Password, type: UserType = UserType.NORMAL, id?: UniqueEntityID): User {
        return new User({ email, password, type }, id);
    }

    public static createFromDocument(document: any): User {
        const id = new UniqueEntityID(document.id);
        const email = Email.create(document.email);
        const password = Password.create(document.password, false);
        const type: UserType = (<any>UserType)[document.type];

        return new User({ email, password, type }, id);
    }

    public export(media: Media): object {
        const result = media
            .with("id", this.id().toString())
            .with("type", this.props.type)
            .extend(this.props.email)
            .extend(this.props.password);;

        return result.asObject();
    }

    public email(): Email {
        return this.props.email;
    }

    public password(): Password {
        return this.props.password;
    }


}