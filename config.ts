const requireEnvVar = (varName: string): string => {
  const value = process.env[varName];

  if (!value) {
    throw new Error(`Environment variable ${varName} is required but not set.`);
  }

  return value;
};

export const appConfig = {
  RPC_URL: requireEnvVar("RPC_URL"),
  CONTRACT_ADDRESS: requireEnvVar("CONTRACT_ADDRESS"),
};
