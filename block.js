class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block({
  lastHash: "foo-lastHash",
  hash: "foo-hash",
  data: "foo-data",
  timestamp: "01/01/01",
});
console.log(block1);
