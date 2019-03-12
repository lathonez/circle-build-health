import useAuth0 from "./useAuth0";

export default function maybeLoadAuthMiddleware(originalServer) {
    return new Promise(async (resolve, reject) => {
      if (useAuth0()) {
        const { default: addAuthMiddleware } = await Promise.resolve(require('./serverAuth'));
  
        return resolve(addAuthMiddleware(originalServer));
      }
  
      return resolve(originalServer);
    });
  }