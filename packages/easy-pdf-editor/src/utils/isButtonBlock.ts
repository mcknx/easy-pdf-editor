import { BasicType, AdvancedType } from 'easy-pdf-core';

export function isButtonBlock(blockType: any) {
  return blockType === BasicType.BUTTON || blockType === AdvancedType.BUTTON;
}
