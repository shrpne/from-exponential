import fromExponential from '../src';

describe('fromExponential', () => {
    test('positive exponential', () => {
        expect(fromExponential(0.123e-10)).toEqual('0.0000000000123');
        expect(fromExponential(1.123e-10)).toEqual('0.0000000001123');
        expect(fromExponential(12.123e-10)).toEqual('0.0000000012123');
        expect(fromExponential(123.123e-10)).toEqual('0.0000000123123');
        expect(fromExponential(123.123e+20)).toEqual('12312300000000000000000');
        expect(Number.MAX_VALUE).toEqual(1.7976931348623157e+308);
        expect(fromExponential(Number.MAX_VALUE)).toEqual('179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
        expect(Number.MIN_VALUE).toEqual(5e-324);
        expect(fromExponential(Number.MIN_VALUE)).toEqual('0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005');
    });

    test('negative exponential', () => {
        expect(fromExponential(-0.123e-10)).toEqual('-0.0000000000123');
        expect(fromExponential(-1.123e-10)).toEqual('-0.0000000001123');
        expect(fromExponential(-12.123e-10)).toEqual('-0.0000000012123');
        expect(fromExponential(-123.123e-10)).toEqual('-0.0000000123123');
        expect(fromExponential(-123.123e+20)).toEqual('-12312300000000000000000');
    });

    test('positive exponential-like strings', () => {
        expect(fromExponential('0.123e-1')).toEqual('0.0123');
        expect(fromExponential('1.123e-1')).toEqual('0.1123');
        expect(fromExponential('1.123e-5')).toEqual('0.00001123');
        expect(fromExponential('12.123e-1')).toEqual('1.2123');
        expect(fromExponential('12.123e-5')).toEqual('0.00012123');
        expect(fromExponential('123.123e-1')).toEqual('12.3123');
        expect(fromExponential('123.123e-5')).toEqual('0.00123123');
        expect(fromExponential('123.123e+4')).toEqual('1231230');
        expect(fromExponential('123.123e+2')).toEqual('12312.3');
        expect(fromExponential('123.123e+0')).toEqual('123.123');
    });

    test('negative exponential-like strings', () => {
        expect(fromExponential('-0.123e-1')).toEqual('-0.0123');
        expect(fromExponential('-1.123e-1')).toEqual('-0.1123');
        expect(fromExponential('-1.123e-5')).toEqual('-0.00001123');
        expect(fromExponential('-12.123e-1')).toEqual('-1.2123');
        expect(fromExponential('-12.123e-5')).toEqual('-0.00012123');
        expect(fromExponential('-123.123e-1')).toEqual('-12.3123');
        expect(fromExponential('-123.123e-5')).toEqual('-0.00123123');
        expect(fromExponential('-123.123e+4')).toEqual('-1231230');
        expect(fromExponential('-123.123e+2')).toEqual('-12312.3');
        expect(fromExponential('-123.123e+0')).toEqual('-123.123');
    });

    test('not exponential', () => {
        expect(fromExponential(0)).toEqual('0');
        expect(fromExponential(0.0012)).toEqual('0.0012');
        expect(fromExponential(123)).toEqual('123');
        expect(fromExponential(123e+14)).toEqual('12300000000000000'); // 12300000000000000 is not exponential
        expect(fromExponential(0.123e-4)).toEqual('0.0000123'); // 0.0000123 is not exponential
    });
});
