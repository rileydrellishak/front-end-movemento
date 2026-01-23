const helloWorld = () => {
  return 'hello, world!'
};

describe('Example', () => {
  describe('helloWorld', () => {
    it('returns the string', () => {
      const string = helloWorld();

      expect(string).toBe('hello, world!');
    })
  })
})