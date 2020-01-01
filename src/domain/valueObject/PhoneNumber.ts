import { ValueObject } from "../../core/ValueObject";

interface PhoneNumberProps {
    value: string
}

export class PhoneNumber extends ValueObject<PhoneNumberProps>{

    private constructor(props: PhoneNumberProps) {
        super(props);
    }

    public static create(number: string): PhoneNumber {
        if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(number) == false) {
            throw new Error("Invalid phone number");
        }

        return new PhoneNumber({ value: number });
    }

    value(): string {
        return this.props.value;
    }

}
