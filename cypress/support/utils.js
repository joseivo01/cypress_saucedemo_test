function generate_string(base) {
    const baseString = base;
    const randomNumber = Math.floor(1000 + Math.random() * 9000468);
    return `${randomNumber}${baseString}`;
}
  module.exports = {
    generate_string
  };