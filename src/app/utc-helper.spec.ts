import UtcHelper from './utc-helper';

describe('UtcUtil', () => {

  it('isValidJavaUTCDate() should return true for valid', () => {
    const res = UtcHelper.isValidJavaUTCDate('2018-08-20T12:00:00.000+0000');
    expect(res).toBeTruthy('isValidJavaUTCDate("2018-08-20T12:00:00.000+0000")');
  });

  it('isValidJavaUTCDate() should return false for invalid', () => {
    const res = UtcHelper.isValidJavaUTCDate('2018-08-20T12:00:00.000+00:00');
    expect(res).toBeFalsy('isValidJavaUTCDate("2018-08-20T12:00:00.000+00:00")');
  });

});
