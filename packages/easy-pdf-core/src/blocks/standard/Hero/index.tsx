import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getImg } from '@core/utils/getImg';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';
import { Wrapper } from '../Wrapper';

export type IHero = IBlockData<
  {
    'background-color'?: string;
    'background-height'?: string;
    'background-position'?: string;
    'background-url'?: string;
    'background-width'?: string;
    'vertical-align'?: string;
    'border-radius'?: string;
    width?: string;
    height?: string;
    mode: 'fixed-height';
    padding?: string;
  },
  {}
>;

export const Hero = createBlock<IHero>({
  get name() {
    return t('Page');
  },
  type: BasicType.HERO,
  create: payload => {
    const defaultData: IHero = {
      type: BasicType.HERO,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fixed-height',
        // padding: '100px 0px 100px 0px',
        'vertical-align': 'top',
        height: '1056px',
        width: '816px',
      },
      children: [Wrapper.create()],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE],
  render(params) {
    return (
      <>
        {`<mj-spacer height="20px" padding="   " />`}
        <BasicBlock
          params={params}
          tag='mj-hero'
        />
        {/* {`<mj-spacer height="20px" padding="   " />`} */}
      </>
    );
  },
});
