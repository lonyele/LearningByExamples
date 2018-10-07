import { merge } from 'lodash'
import { getBookResolver } from "../getBook";
import { getFairResolver } from "../getFair";

export const RootQuery = merge(getBookResolver, getFairResolver)