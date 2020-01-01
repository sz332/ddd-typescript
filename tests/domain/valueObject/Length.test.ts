import { Length, LengthUnit } from "../../../src/domain/valueObject/Length";

describe('Length', () => {

    it('Length with centimeter unit can be created', () => {
        let length = Length.create(200, LengthUnit.CENTIMETER);
        expect(length.getValueAsUnit(LengthUnit.CENTIMETER)).toBe(200);
        expect(length.getValueAsUnit(LengthUnit.METER)).toBe(2);
    });

    it('Length with meter unit can be created', () => {
        let length = Length.create(15, LengthUnit.METER);
        expect(length.getValueAsUnit(LengthUnit.METER)).toBe(15);
        expect(length.getValueAsUnit(LengthUnit.CENTIMETER)).toBe(1500);
    });

    it('Length of centimeters can be added', () => {
        let length1 = Length.create(20, LengthUnit.CENTIMETER);
        let length = length1.add(Length.create(15, LengthUnit.CENTIMETER));
        expect(length.getValueAsUnit(LengthUnit.CENTIMETER)).toBe(35);
    });

    it('Length of meters can be added', () => {
        let length1 = Length.create(20, LengthUnit.METER);
        let length = length1.add(Length.create(15, LengthUnit.METER));
        expect(length.getValueAsUnit(LengthUnit.METER)).toBe(35);
    });

    it('Length of meters and centimeters can be added', () => {
        let length1 = Length.create(200, LengthUnit.CENTIMETER);
        let length = length1.add(Length.create(3, LengthUnit.METER));
        expect(length.getValueAsUnit(LengthUnit.METER)).toBe(5);
    });

});