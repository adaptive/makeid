/** Generate Random ID
 * @param {number} lenght - number of characters of generated ID
 */

module.exports = lenght => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";
  for (let i = 0; i < lenght; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};