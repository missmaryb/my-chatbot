const agent_responses = [
  [
    "There are 4 flowers in this photo",
    "There is 1 flower in this photo",
    "There are 8 flowers in this photo",
    "There are 2 flowers in this photo",
  ],
  [
    "There are 4 flowers in this photo",
    "There is 1 flower in this photo",
    "There are 8 flowers in this photo",
    "There are 2 flowers in this photo",
  ],
  [
    "There are 4 flowers in this photo",
    "There is 1 flower in this photo",
    "There are 8 flowers in this photo",
    "There are 2 flowers in this photo",
  ],
  [
    "There are 4 flowers in this photo",
    "There is 1 flower in this photo",
    "There are 8 flowers in this photo",
    "There are 2 flowers in this photo",
  ],
  [
    "There are 4 flowers in this photo",
    "There is 1 flower in this photo",
    "There are 8 flowers in this photo",
    "There are 2 flowers in this photo",
  ],
];

const getLLM = () => {
  const rand = Math.floor(Math.random() * agent_responses.length);

  return agent_responses[rand];
};

export default getLLM;
