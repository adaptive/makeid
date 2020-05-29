/** Generate Random ID
 * @param {number} lenght - number of characters of generated ID
 */

const makeid = (lenght = 6) => {
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
