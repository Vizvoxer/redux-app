export default function getUrlId(url) {
  const digitsRegex = /\d+/;
  const [id = ""] = url.match(digitsRegex);
  return id;
}
