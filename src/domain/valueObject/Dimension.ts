import { ValueObject } from "../../core/ValueObject";

interface DimensionProps {
    width: number,
    height: number,
    depth: number
}

export class Dimension extends ValueObject<DimensionProps>{

    private constructor(props: DimensionProps) {
        super(props);
    }

    public static create(width: number, height: number, depth: number): Dimension {
        return new Dimension({ width, height, depth });
    }

    width(): number {
        return this.props.width;
    }

    height(): number {
        return this.props.height;
    }

    depth(): number {
        return this.props.depth;
    }

}