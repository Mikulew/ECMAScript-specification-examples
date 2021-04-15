function tag(parts, ...values) {
  return parts.reduce((all, part, index) => all + values[index - 1] + part);
}

const tagName = "Mikulew";
const tagEmotion = "happy";

const tagText = tag`Hello, ${tagName}. I'm ${tagEmotion} to see you!`;

console.log("tagText", tagText);

function upper(parts, ...values) {
  return parts.reduce(
    (all, part, index) => all + values[index - 1].toUpperCase() + part
  );
}

const upperName = "Mikulew";
const upperEmotion = "happy";

const upperText = upper`Hello, ${upperName}. Tak bardzo ${upperEmotion} to see you!`;

console.log("upperText", upperText);
