import * as getAll from './getAll';
import * as getById from './getById';
import * as createRegistry from './create';
import * as updateRegistry from './update';
import * as deleteRegistry from './delete';

export const RoomsController = {
  ...getAll,
  ...getById,
  ...createRegistry,
  ...updateRegistry,
  ...deleteRegistry
};