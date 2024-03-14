const getIceServers = () => {
  const envVar = `${process.env.REACT_APP_ICE_SERVERS}`;
  try {
    
    return [
      {
        urls: "stun:15.206.66.65:3478",
      },
      {
        urls: "turn:15.206.66.65:3478",
        username: "admin",
        credential: "FanTiger@123",
      },
      {
        urls: "turn:15.206.66.65:3478?transport=udp",
        username: "admin",
        credential: "FanTiger@123",
      },
      {
        urls: "turn:15.206.66.65:3478?transport=tcp",
        username: "admin",
        credential: "FanTiger@123",
      },
  ]

  } catch (e) {
    return [];
  }
};

export default getIceServers;