import { Fields, Meta, SortParams } from 'src/common/interface/index';
import { merge } from 'lodash';

/** use for tabularSheet
 *  eg. { label: '余额女',
        values: [
          ['最近7天登端天数', 1, 3423423, 323],
          ['自然月新登用户数', 1, 3423423, 323],
          ['最近7天登端天数', 1, 3423423, 323],
          ['自然月新登用户数', 1, 3423423, 323],
        ],
      }
 */

export interface MultiData {
  // the title of one cell of the tabularSheet
  label?: string;
  values: (string | number)[][];
}

export type DataItem = string | number | MultiData;

export type Data = Record<string, DataItem>;
export interface S2DataConfig {
  // origin detail data
  data: Data[];
  // total data(grandTotal, subTotal)
  totalData?: Data[];
  // data keys for render row,columns,values etc
  fields: Fields;
  // data keys mata info
  meta?: Meta[];
  // field sort info
  sortParams?: SortParams;
  // extra config
  [key: string]: any;
}

export const defaultDataConfig = {
  data: [],
  fields: {
    rows: [],
    columns: [],
    values: [],
    derivedValues: [],
  },
  meta: [],
  sortParams: [],
} as S2DataConfig;

export const safetyDataConfig = (dataConfig: S2DataConfig) =>
  merge({}, defaultDataConfig, dataConfig);