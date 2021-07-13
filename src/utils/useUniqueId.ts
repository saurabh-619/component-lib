import { customAlphabet } from 'nanoid';
import { useState } from 'react';

const nanoId = customAlphabet('12412424324safaasf', 10);

export const useUniqueID = (): string => {
  const [id] = useState<string>(nanoId());
  return id;
};
