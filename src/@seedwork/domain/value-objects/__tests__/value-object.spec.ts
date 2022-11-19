import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}

describe('ValueObject Unit Tests', () => {
  it('should set value', () => {
    let vo = new StubValueObject('string value');
    expect(vo.value).toBe('string value');

    vo = new StubValueObject({prop1: 'other string value'});
    expect(vo.value).toStrictEqual({prop1: 'other string value'});
  })

  it('should convert to a string', () => {
    const date = new Date();
    let arrange = [
      { received: null, expect: "null" },
      { received: undefined, expect: "undefined" },
      { received: 0, expect: "0" },
      { received: 1, expect: "1" },
      { received: 'string', expect: "string" },
      { received: true, expect: "true" },
      { received: false, expect: "false" },
      { received: date, expect: date.toString() },
      { received: {prop1: 'other string value'}, expect: JSON.stringify({prop1: 'other string value'}) },
    ];

    arrange.forEach((value) => {
      const vo = new StubValueObject(value.received);
      expect(vo+"").toBe(value.expect);
    });    
  })
})