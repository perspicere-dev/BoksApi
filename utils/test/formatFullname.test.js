const expect = require('chai').expect;
const formatFullname = require('../formatFullname')

module.exports = (fullName) => {
    const [ firstName, lastName ] = fullName.split(' ');
    if(!firstName || !lastName) return false;
    return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
  };

describe('fulName', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(1)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should returmn error if "fullName" arg structure is other than <firstname><lastname>', () => {
    expect(formatFullname('John Doe john')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John   John')).to.equal('Error');
  })

  it('should return corec format of char', () => {
    expect(formatFullname('JoHN DOe')).to.equal('John Doe');
    expect(formatFullname('joHN dOe')).to.equal('John Doe');
  })
})

