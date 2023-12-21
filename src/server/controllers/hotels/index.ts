import * as getAll from './getAll';
import * as getById from './getById';
import * as createRegistry from './create';
import * as updateRegistry from './update';
import * as deleteRegistry from './delete';

export const HotelsController = {
  ...getAll,
  ...getById,
  ...createRegistry,
  ...updateRegistry,
  ...deleteRegistry
};  