import { merge } from 'lodash'
import { testMutationResolver } from "../../typeDefinitions/testMutation";

export const RootMutation = merge(testMutationResolver)