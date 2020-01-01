import { ValueObject } from "../../core/ValueObject";

interface CityProps {
    name: string
}

export class City extends ValueObject<CityProps>{

    private constructor(props: CityProps) {
        super(props);
    }

    public static create(name: string): City {
        return new City({ name });
    }

    name(): string {
        return this.props.name;
    }

}