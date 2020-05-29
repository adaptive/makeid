/** Generate Random ID
 * @param {number=} [lenght] - the positive number of characters of generated ID
 */

const makeid = (lenght = 6) => {
  lenght = Math.abs(lenght);
  let text = "";
  // omitted confusing characters
  const possible = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";
  for (let i = 0; i < lenght; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

module.exports = {
  makeid,
};
