
class User {
  constructor(deviceId, username) {
    this.deviceId = deviceId;
    this.username = username;
  }

  getJSON() {
    return JSON.stringify(this);
  }
}

module.exports = User
